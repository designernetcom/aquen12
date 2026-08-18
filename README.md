# AQUEN Fluid — Website and CMS

A full-stack Next.js 16 App Router application with a PostgreSQL/Prisma content platform, Auth.js administrator authentication, REST APIs, media uploads, SEO fields, audit logs, and database-driven solution navigation/pages.

## Architecture

- `app/` — public pages, admin routes, and Route Handlers
- `app/admin/` — protected dashboard and CMS modules
- `app/api/` — authentication and REST endpoints
- `app/solutions/[category]/[slug]/` — the single dynamic solution renderer
- `lib/` — server-only data access, authorization, validation helpers, and services
- `prisma/schema.prisma` — normalized PostgreSQL data model
- `prisma/migrations/` — production migration history
- `prisma/seed.ts` — roles, permissions, initial administrator, settings, and demo solution hierarchy

The original public page designs remain in place. `app/layouts/header.tsx` now reads the published solution hierarchy from `/api/public/navigation`; it contains no hardcoded solution records.

## Local setup

Prerequisites: Node.js 20.19+ and access to the hosted PostgreSQL 14+ database.

**There is no local database.** Development and production both connect to the
same live PostgreSQL server, so a checkout only needs credentials, not a local
server install. `lib/db.ts` refuses to boot on a non-PostgreSQL `DATABASE_URL`,
and `prisma.config.ts` refuses to run migrations without one.

1. Copy `.env.example` to `.env` and paste the live PostgreSQL connection string
   into `DATABASE_URL`. Do **not** re-declare `DATABASE_URL` in `.env.local`:
   Next.js loads `.env.local` ahead of `.env`, and an override there is what
   silently sent `next dev` to a local database in the past.
2. Generate a strong `AUTH_SECRET` (for example, `npx auth secret`).
3. Change `SEED_ADMIN_EMAIL` and `SEED_ADMIN_PASSWORD` before seeding.
4. Install and verify the connection:

```bash
npm install
npm run db:check      # prints host, TLS mode, pool settings, table count
npm run db:deploy     # apply migrations to the live database
npm run db:seed       # first initialization only
npm run dev
```

Because every environment shares one database, `npm run db:migrate` and
`npm run db:seed` write to live data. Treat them accordingly.

Open `http://localhost:3000/admin/login`. There is deliberately no registration route; only a Super Admin can create users.

## Authentication flow

Auth.js uses the Credentials provider, bcrypt password verification, an eight-hour JWT session, HTTP-only SameSite cookies, CSRF protection on authentication actions, and server-side role/permission checks. The Next.js 16 `proxy.ts` boundary rejects unauthenticated admin requests; every protected API independently rechecks its required permission. Password-reset tokens are random, stored only as SHA-256 hashes, single-use, and expire in 30 minutes.

SMTP delivery is deployment-specific. The reset endpoint creates the secure token; in development only, its URL is printed to the server console. Connect the SMTP settings to your preferred transactional mail provider before production.

## Content model and routing

`SolutionCategory → SolutionSubcategory → SolutionPage → PageSection` is relational and ordered. Publishing and enabling records exposes them in the header. A public URL such as `/solutions/water-treatment-plants/clarifier-system` queries slugs at request time; unpublished, disabled, deleted, or unknown records return 404. Page sections support Hero, Overview, Description, Gallery, Features, Benefits, Specifications, Applications, Process, FAQ, CTA, Downloads, Related, and Custom content.

Soft deletes are used for users, media, categories, subcategories, pages, projects, and industries. Foreign-key cascades remove dependent hierarchy records when a hard purge is deliberately performed.

## Commands

```bash
npm run lint          # ESLint
npx tsc --noEmit      # TypeScript verification
npm run build         # production build
npm run db:migrate    # create a development migration
npm run db:deploy     # apply committed migrations
npm run db:seed       # seed roles, admin, and demo content
npm run db:check      # verify the live PostgreSQL connection
npm run db:studio     # inspect PostgreSQL data
```

See [API documentation](docs/API.md) and [production deployment](docs/DEPLOYMENT.md).
