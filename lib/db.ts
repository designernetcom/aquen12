import "server-only";
import { PrismaClient } from "@prisma/client";

// One database for every environment: the live PostgreSQL server. `next dev`
// and `next start` both resolve DATABASE_URL through the same .env* chain, so a
// wrong or missing value must surface here rather than at the first query.
const url = process.env.DATABASE_URL;
if (!url) {
  throw new Error("DATABASE_URL is not set. The app connects to the live PostgreSQL database in every environment — set it in .env locally and in the hosting provider's environment variables in production.");
}
if (!url.startsWith("postgres://") && !url.startsWith("postgresql://")) {
  throw new Error(`DATABASE_URL must be a PostgreSQL connection string. Got "${url.split(":")[0]}://..." — this project no longer supports MySQL.`);
}
if (/@(localhost|127\.0\.0\.1|\[::1\])[:/]/.test(url)) {
  console.warn("[db] DATABASE_URL points at a local server. This project is configured to use the live PostgreSQL database in development as well as production.");
}

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
export const db = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
