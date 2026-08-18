/**
 * One-off data transfer: local MySQL (`MYSQL_URL`) -> live PostgreSQL (`DATABASE_URL`).
 *
 *   npm run db:transfer -- --dry-run   # read + report only, writes nothing
 *   npm run db:transfer                # transfer, refuses if target has rows
 *   npm run db:transfer -- --force     # transfer into a non-empty target
 *
 * Run `prisma migrate deploy` against the PostgreSQL database first: this script
 * copies rows, it does not create tables.
 *
 * Primary keys are preserved so every foreign key stays valid, which means the
 * identity sequences must be advanced afterwards or the next INSERT collides
 * with a copied id. That happens automatically at the end.
 */
import { loadEnvConfig } from "@next/env";
import { createConnection, type Connection, type RowDataPacket } from "mysql2/promise";
import { Prisma, PrismaClient } from "@prisma/client";

loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production", { info: () => {}, error: console.error });

const DRY_RUN = process.argv.includes("--dry-run");
const FORCE = process.argv.includes("--force");
const BATCH = 500;

/** Columns MySQL returns as TINYINT(1) 0/1 but PostgreSQL stores as BOOLEAN. */
const BOOLEAN_COLUMNS = new Set(["is_enabled", "is_public"]);
/** Nullable Json columns: a SQL NULL must be written as Prisma.DbNull, not null. */
const NULLABLE_JSON_COLUMNS = new Set(["schema_json", "metadata", "content"]);
/** Columns that are JSON on both sides. */
const JSON_COLUMNS = new Set(["schema_json", "metadata", "content", "value"]);
/** Columns typed BigInt in the Prisma schema. */
const BIGINT_COLUMNS = new Set<string>([]);

type Table = {
  /** MySQL/PostgreSQL table name. */
  table: string;
  /** Prisma model delegate key on PrismaClient. */
  model: string;
  /** Stable read order. */
  orderBy: string;
  /** Columns nulled on first insert and patched afterwards (circular/self FKs). */
  deferred?: string[];
  /** Table owns an autoincrement `id` whose sequence needs advancing. */
  sequence?: boolean;
  /** BigInt primary key. */
  bigIntId?: boolean;
};

/**
 * Insertion order is foreign-key safe. `deferred` breaks the two cycles in the
 * schema: users.profile_image_id <-> media.uploaded_by_id, and the two
 * self-referencing trees (media_folders, navigation) where a child row can
 * carry a lower id than its parent.
 */
const TABLES: Table[] = [
  { table: "roles", model: "role", orderBy: "id", sequence: true },
  { table: "permissions", model: "permission", orderBy: "id", sequence: true },
  { table: "role_permissions", model: "rolePermission", orderBy: "role_id, permission_id" },
  { table: "users", model: "user", orderBy: "id", sequence: true, deferred: ["profile_image_id"] },
  { table: "media_folders", model: "mediaFolder", orderBy: "id", sequence: true, deferred: ["parent_id"] },
  { table: "media", model: "media", orderBy: "id", sequence: true },
  { table: "password_reset_tokens", model: "passwordResetToken", orderBy: "id", sequence: true },
  { table: "solution_categories", model: "solutionCategory", orderBy: "id", sequence: true },
  { table: "solution_subcategories", model: "solutionSubcategory", orderBy: "id", sequence: true },
  { table: "solution_pages", model: "solutionPage", orderBy: "id", sequence: true },
  { table: "page_sections", model: "pageSection", orderBy: "id", sequence: true },
  { table: "related_solutions", model: "relatedSolution", orderBy: "page_id, related_page_id" },
  { table: "industries", model: "industry", orderBy: "id", sequence: true },
  { table: "projects", model: "project", orderBy: "id", sequence: true },
  { table: "navigation", model: "navigation", orderBy: "id", sequence: true, deferred: ["parent_id"] },
  { table: "settings", model: "setting", orderBy: "id", sequence: true },
  { table: "activity_logs", model: "activityLog", orderBy: "id", sequence: true, bigIntId: true },
];

const toCamel = (column: string) => column.replace(/_([a-z0-9])/g, (_, c: string) => c.toUpperCase());

function toPrismaValue(column: string, value: unknown, bigIntId: boolean) {
  if (BOOLEAN_COLUMNS.has(column)) return value === null ? null : Boolean(value);
  if (JSON_COLUMNS.has(column)) {
    if (value === null || value === undefined) return NULLABLE_JSON_COLUMNS.has(column) ? Prisma.DbNull : Prisma.JsonNull;
    // mysql2 parses JSON columns, but a driver/server combination that returns
    // the raw text must not be inserted as a JSON string literal.
    return typeof value === "string" ? JSON.parse(value) : value;
  }
  if (bigIntId && column === "id") return BigInt(value as string | number);
  if (BIGINT_COLUMNS.has(column)) return value === null ? null : BigInt(value as string | number);
  if (Buffer.isBuffer(value)) return value.toString("utf8");
  return value;
}

function mapRow(row: Record<string, unknown>, table: Table) {
  const out: Record<string, unknown> = {};
  for (const [column, value] of Object.entries(row)) {
    if (table.deferred?.includes(column)) {
      out[toCamel(column)] = null;
      continue;
    }
    out[toCamel(column)] = toPrismaValue(column, value, Boolean(table.bigIntId));
  }
  return out;
}

async function main() {
  const mysqlUrl = process.env.MYSQL_URL;
  const pgUrl = process.env.DATABASE_URL;
  if (!mysqlUrl) throw new Error("MYSQL_URL is not set. Add the source MySQL connection string to .env.");
  if (!pgUrl) throw new Error("DATABASE_URL is not set.");
  if (!pgUrl.startsWith("postgres://") && !pgUrl.startsWith("postgresql://")) {
    throw new Error("DATABASE_URL must be the PostgreSQL target, not the MySQL source.");
  }

  console.log(`Source  ${new URL(mysqlUrl).host}${new URL(mysqlUrl).pathname}`);
  console.log(`Target  ${new URL(pgUrl).host}${new URL(pgUrl).pathname}`);
  console.log(DRY_RUN ? "Mode    dry run (no writes)\n" : "Mode    transfer\n");

  // timezone:"Z" makes mysql2 read DATETIME(3) as UTC, which is how Prisma wrote
  // it. Without this the driver reinterprets every timestamp in the local zone
  // and every date silently shifts by the UTC offset.
  const source: Connection = await createConnection({ uri: mysqlUrl, timezone: "Z", supportBigNumbers: true, bigNumberStrings: true });
  const target = new PrismaClient({ datasources: { db: { url: pgUrl } } });

  const deferredPatches: { table: Table; rows: Record<string, unknown>[] }[] = [];
  const summary: { table: string; read: number; written: number }[] = [];

  try {
    if (!DRY_RUN && !FORCE) {
      for (const table of TABLES) {
        const count = await (target as never as Record<string, { count(): Promise<number> }>)[table.model].count();
        if (count > 0) {
          throw new Error(
            `Target table "${table.table}" already holds ${count} rows. Re-run with --force to add to it, ` +
              `or reset the target first (prisma migrate reset) so ids cannot collide.`,
          );
        }
      }
    }

    for (const table of TABLES) {
      const [rows] = await source.query<RowDataPacket[]>(`SELECT * FROM \`${table.table}\` ORDER BY ${table.orderBy}`);
      if (rows.length === 0) {
        summary.push({ table: table.table, read: 0, written: 0 });
        continue;
      }

      const mapped = rows.map((row) => mapRow(row as Record<string, unknown>, table));
      if (table.deferred) {
        const dirty = rows.filter((row) => table.deferred!.some((column) => (row as Record<string, unknown>)[column] != null));
        if (dirty.length > 0) deferredPatches.push({ table, rows: dirty as Record<string, unknown>[] });
      }

      let written = 0;
      if (!DRY_RUN) {
        const delegate = (target as never as Record<string, { createMany(args: unknown): Promise<{ count: number }> }>)[table.model];
        for (let i = 0; i < mapped.length; i += BATCH) {
          const result = await delegate.createMany({ data: mapped.slice(i, i + BATCH), skipDuplicates: true });
          written += result.count;
        }
      }
      summary.push({ table: table.table, read: rows.length, written });
      console.log(`  ${table.table.padEnd(24)} read ${String(rows.length).padStart(6)}${DRY_RUN ? "" : `  written ${String(written).padStart(6)}`}`);
    }

    // Second pass: restore the FK columns that were nulled to break the cycles.
    if (!DRY_RUN && deferredPatches.length > 0) {
      console.log("\nRestoring deferred foreign keys");
      for (const { table, rows } of deferredPatches) {
        const delegate = (target as never as Record<string, { update(args: unknown): Promise<unknown> }>)[table.model];
        for (const row of rows) {
          const data: Record<string, unknown> = {};
          for (const column of table.deferred!) {
            if (row[column] != null) data[toCamel(column)] = row[column];
          }
          await delegate.update({ where: { id: table.bigIntId ? BigInt(row.id as string) : row.id }, data });
        }
        console.log(`  ${table.table.padEnd(24)} patched ${String(rows.length).padStart(5)} (${table.deferred!.join(", ")})`);
      }
    }

    // Copied primary keys leave every identity sequence at 1, so the next insert
    // would collide. Advance each one past the highest copied id.
    if (!DRY_RUN) {
      console.log("\nAdvancing identity sequences");
      for (const table of TABLES.filter((t) => t.sequence)) {
        await target.$executeRawUnsafe(
          `SELECT setval(pg_get_serial_sequence('"${table.table}"', 'id'), COALESCE((SELECT MAX(id) FROM "${table.table}"), 0) + 1, false)`,
        );
      }
      console.log(`  ${TABLES.filter((t) => t.sequence).length} sequences reset`);
    }

    const totalRead = summary.reduce((sum, row) => sum + row.read, 0);
    const totalWritten = summary.reduce((sum, row) => sum + row.written, 0);
    console.log(`\n${DRY_RUN ? "Would transfer" : "Transferred"} ${DRY_RUN ? totalRead : totalWritten}/${totalRead} rows across ${summary.filter((s) => s.read > 0).length} non-empty tables.`);
    if (!DRY_RUN && totalWritten < totalRead) {
      console.warn("Some rows were skipped as duplicates (skipDuplicates). Verify the target before deleting the MySQL database.");
    }
  } finally {
    await source.end();
    await target.$disconnect();
  }
}

main().catch((error) => {
  console.error(`\nTransfer failed: ${error instanceof Error ? error.message : error}`);
  process.exitCode = 1;
});
