# ACPRO application development

## Stack
- Next.js App Router / TypeScript
- Supabase Auth, PostgreSQL and Row Level Security
- Cloudflare Workers using the OpenNext adapter (compatibility must be checked before first deployment)

## Local setup
1. Install Node.js LTS and run `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Add credentials from a **dedicated ACPRO Supabase project**.
4. Apply `supabase/migrations/202610190001_initial_marketplace.sql` to that project.
5. Configure the Supabase Auth site URL and callback URL (`http://localhost:3000/auth/callback`).
6. Run `npm run dev`.

## Cloudflare
The app is configured for the OpenNext Cloudflare adapter as a starting point. Before deploying, verify adapter compatibility and run a production preview. Configure the Supabase URL, publishable/anon key and site URL in the target environment. Never commit real credentials or expose a service-role key to the client.

## Current build boundary
This first scaffold includes a landing page, email sign-in, a homeowner request form and dashboard, plus the initial database migration. Installer offer creation, installer verification operations, homeowner selection and quote/installation workflows are the next increments. Code has not yet been built or deployed in a runtime environment; run package installation, type checking, tests and preview before production use.
