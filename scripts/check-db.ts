import { loadEnvConfig } from "@next/env";
import { existsSync } from "node:fs";
import { PrismaClient } from "@prisma/client";

loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production", { info: () => {}, error: console.error });

const db = new PrismaClient();

async function main() {
  const raw = process.env.DATABASE_URL;
  if (!raw) throw new Error("DATABASE_URL is not set");

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error("DATABASE_URL is not a valid URL. Replace the placeholder in .env with the PostgreSQL connection string.");
  }
  if (url.protocol !== "postgres:" && url.protocol !== "postgresql:") {
    throw new Error(`DATABASE_URL points at "${url.protocol}//" — this project runs on PostgreSQL only.`);
  }

  const params = url.searchParams;
  console.log(`Host       ${url.hostname}:${url.port || 5432}`);
  console.log(`Database   ${url.pathname.slice(1)}`);
  console.log(`User       ${decodeURIComponent(url.username)}`);
  console.log(`Schema     ${params.get("schema") ?? "public"}`);

  const sslmode = params.get("sslmode");
  const sslrootcert = params.get("sslrootcert");
  if (sslrootcert && !existsSync(sslrootcert)) {
    throw new Error(`sslrootcert points at ${sslrootcert}, which does not exist. See certs/README.md.`);
  }
  console.log(`TLS        ${sslmode ?? "prefer (driver default)"}${sslrootcert ? ` via ${sslrootcert}` : ""}`);
  if (!sslmode || sslmode === "disable" || sslmode === "prefer" || sslmode === "allow") {
    console.warn(`Warning: sslmode=${sslmode ?? "prefer"} lets the connection fall back to plaintext. Use sslmode=require or verify-full for a live database.`);
  }

  const limit = params.get("connection_limit");
  console.log(`Pool       connection_limit=${limit ?? "default (cpus * 2 + 1)"} pool_timeout=${params.get("pool_timeout") ?? "10"}${params.get("pgbouncer") === "true" ? " pgbouncer=true" : ""}`);

  const started = Date.now();
  const [version] = await db.$queryRaw<{ v: string }[]>`SELECT version() AS v`;
  const [maxConnections] = await db.$queryRaw<{ setting: string }[]>`SELECT setting FROM pg_settings WHERE name = 'max_connections'`;
  const [inUse] = await db.$queryRaw<{ n: bigint }[]>`SELECT count(*)::bigint AS n FROM pg_stat_activity`;
  const [tables] = await db.$queryRaw<{ n: bigint }[]>`
    SELECT count(*)::bigint AS n FROM information_schema.tables
    WHERE table_schema = current_schema() AND table_type = 'BASE TABLE'`;

  console.log(`\nConnected in ${Date.now() - started}ms`);
  console.log(`PostgreSQL ${version.v.split(" ").slice(0, 2).join(" ")}`);
  console.log(`Capacity   ${inUse.n}/${maxConnections.setting} connections in use`);
  console.log(`Schema     ${tables.n} tables (0 means migrations have not been applied yet)`);

  if (!limit) {
    console.warn("\nWarning: no connection_limit. Each serverless instance will open a full pool and can exhaust the provider's connection cap.");
  }
}

main()
  .catch((error) => {
    console.error(`\nConnection failed: ${error instanceof Error ? error.message : error}`);
    process.exitCode = 1;
  })
  .finally(() => db.$disconnect());
