import { loadEnvConfig } from "@next/env";
import { defineConfig } from "prisma/config";

// Load .env* with the exact same precedence Next.js uses at runtime
// (.env.$NODE_ENV.local > .env.local > .env.$NODE_ENV > .env). Plain `dotenv`
// only reads `.env`, so the CLI and the app could resolve DATABASE_URL to two
// different servers and migrations would land on the wrong database.
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production", { info: () => {}, error: console.error });

const url = process.env.DATABASE_URL;
if (!url) {
  throw new Error("DATABASE_URL is not set. Add the live PostgreSQL connection string to .env before running Prisma.");
}
if (!url.startsWith("postgres://") && !url.startsWith("postgresql://")) {
  throw new Error(`DATABASE_URL must be a PostgreSQL connection string, got "${url.split(":")[0]}://...". This project no longer supports MySQL.`);
}
if (!process.env.DIRECT_DATABASE_URL) {
  throw new Error("DIRECT_DATABASE_URL is not set. Migrations need the provider's direct (non-pooled) endpoint — see .env.example.");
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations", seed: "tsx prisma/seed.ts" },
  // The datasource block in schema.prisma resolves both DATABASE_URL and
  // DIRECT_DATABASE_URL. Overriding `datasource.url` here would mask directUrl
  // and push migrations through the transaction pooler.
});
