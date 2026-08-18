# Production deployment

This application requires a Node.js runtime and cannot be deployed as a static export. Use a container, VM, or a Next.js-capable serverless platform with a managed PostgreSQL service.

1. Provision PostgreSQL with an application-specific, non-superuser role and `sslmode=require` (or `verify-full` plus `sslrootcert` when the provider signs certificates with its own CA — see `certs/README.md`).
2. Set `DATABASE_URL` in the platform's environment variables — it is the only database setting, and the same live server is used in development. On serverless platforms append `connection_limit=1` (and `pgbouncer=true` when connecting through a transaction pooler) so instances do not exhaust the connection cap. Store all other `.env.example` values in the platform secret manager. Use a long random `AUTH_SECRET`, production `NEXT_PUBLIC_APP_URL`, and strong seed password.
3. Use persistent object storage in production for uploads. The included local `public/uploads` adapter is suitable for a single persistent Node host; ephemeral/serverless hosts should replace it with S3-compatible storage while preserving `Media.url`.
4. Apply migrations exactly once during release: `npm run db:deploy`.
5. Seed only the first environment initialization: `npm run db:seed`; then rotate the seeded password immediately.
6. Build with `npm run build` and run with `npm start` behind HTTPS.
7. Configure SMTP delivery for password reset, database backups, log retention, malware scanning for uploads, and a shared rate-limit store (Redis) when running multiple app instances.

The app sets anti-sniffing, anti-framing, referrer, and browser-permission headers. Add a deployment-specific Content Security Policy after inventorying the existing frontend’s external scripts and form destinations.
