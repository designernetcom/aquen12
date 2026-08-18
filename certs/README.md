# Database TLS certificates

Some managed PostgreSQL providers (Aiven, self-hosted clusters, and others) sign
the server certificate with a **project-specific CA** that is not in any system
trust store. Prisma cannot verify such a connection with `sslmode=verify-full`
unless that CA is supplied explicitly via `sslrootcert`.

Providers whose certificates chain to a public root — Neon, Supabase, Render,
Railway — need nothing from this directory. Use `sslmode=require` and skip the
rest of this file.

## Fetching the CA

Aiven Console -> your PostgreSQL service -> **Overview** -> **CA Certificate** ->
Download. Save it here, keeping the exact name:

    certs/aiven-ca.pem

Then point the connection string at it:

    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB?sslmode=verify-full&sslrootcert=./certs/aiven-ca.pem&connection_limit=1"

Or with the Aiven CLI:

    avn service user-creds-download --project <project> <service-name> -d certs

The CA is public information, not a secret. It is committed on purpose: the
Vercel build needs it in the repository, and `.gitignore` carries an explicit
`!certs/*.pem` exception for it (the blanket `*.pem` rule would otherwise drop
it and the deployed function would fail TLS verification at runtime).

`next.config.ts` adds `certs/**` to `outputFileTracingIncludes` so the file is
traced into every serverless function bundle; Prisma reads it at connect time,
not at build time, so it must be present in the deployed output.
