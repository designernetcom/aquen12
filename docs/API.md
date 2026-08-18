# REST API

All JSON responses use `{ success, data }`; failures use `{ success: false, error, details? }`. Admin endpoints require the Auth.js session cookie and the named role permission. List endpoints accept `page`, `pageSize`, and relevant filters.

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/public/navigation` | Published solution menu; public and cacheable |
| GET/POST | `/api/solutions/categories` | List/create categories |
| GET/PUT/DELETE | `/api/solutions/categories/:id` | Read/update/soft-delete category |
| PUT | `/api/solutions/categories/reorder` | Persist `{ items: [{ id, sortOrder }] }` |
| GET/POST | `/api/solutions/subcategories` | List/create subcategories; filter by `categoryId` |
| GET/POST | `/api/solutions/pages` | List/create section-driven solution pages |
| GET/POST | `/api/users` | List/create administrators (Super Admin) |
| GET/POST | `/api/media` | List/upload multipart media |
| GET/PUT | `/api/settings` | Read/upsert grouped website settings |
| POST | `/api/auth/forgot-password` | Issue an expiring reset token without account enumeration |
| POST | `/api/auth/reset-password` | Consume a reset token and update password |
| GET/POST | `/api/auth/*` | Auth.js handlers, including CSRF/session/sign-in/sign-out |

Mutation payloads are validated by Zod. Prisma parameterization prevents SQL injection. Uploads are size- and MIME-allowlisted and get random server filenames.
