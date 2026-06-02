# Database migrations & the schema-drift gate

On 2026-06-01 the contact form went down (HTTP 500) because the app referenced
database state that migrations never landed: a missing `zip` column, and a
`status='to_bid'` value the live CHECK constraint rejected. The remote migration
ledger had 10 migrations but only 4 had committed local files. This document is
how we prevent that recurring. Full design:
`docs/superpowers/specs/2026-06-01-schema-drift-prevention-design.md`.

## The rule: CLI writes, MCP reads

The Supabase **CLI is the only thing that applies schema changes**, and every
change ships as a committed migration file **in the same commit** as the code
that depends on it.

```bash
supabase migration new add_something      # creates supabase/migrations/<ts>_add_something.sql
#   ...edit the SQL...
supabase db push                          # applies it to the linked project
git add supabase/migrations/<ts>_add_something.sql  # commit WITH the code change
```

The Supabase **MCP is for reads only** — `list_tables`, `get_advisors`,
`get_logs`, and `SELECT` via `execute_sql`. **Do not use MCP `apply_migration`**:
it records in the remote ledger but leaves no local file, which is exactly how
the schema drifted. (The MCP stays available; only its write path is retired.)

One-time CLI setup:

```bash
supabase login
supabase link --project-ref khioedholasaxemmtooz
supabase db pull        # baseline: pulls current remote schema into a local migration
```

## The single source of truth: `src/lib/db-contract.ts`

Allowed status/bid/lost values and the columns the app depends on live in
`src/lib/db-contract.ts`. `src/lib/types.ts` derives its unions from it, and the
schema-drift test checks it against the live database. **When you change the DB,
change `db-contract.ts` in the same commit.**

## The gate (three layers)

| Layer | What runs | Blocks what |
|-------|-----------|-------------|
| Pre-push hook | `typecheck` + `test:schema` | bad code leaving your machine |
| GitHub Action | `typecheck` + `test:schema` | visible CI signal on every push |
| Vercel `prebuild` | `test:schema` | **a bad deploy reaching production** |

`test:schema` introspects the live DB and fails if a CHECK constraint or a
required column drifts from `db-contract.ts`. **It self-skips when
`SUPABASE_DB_URL` is unset**, so nothing breaks before activation.

## ⚠️ Activation checklist (requires dashboard access)

The gate ships in safe **skip mode**. To make it enforcing:

1. **Get the DB connection string** — Supabase Dashboard → Project Settings →
   Database → Connection string → **Transaction pooler**
   (`postgres.<ref>@aws-0-<region>.pooler.supabase.com:6543`). The pooler's cert
   is publicly trusted, so TLS verifies against system CAs with no CA secret.
   This is `postgresql://…`, contains the DB password, and is *not* a JWT.
   Avoid the **direct** endpoint (`db.<ref>.supabase.co`) — its self-signed root
   isn't in the default trust store (see step 2 if you must use it).
2. **Add `SUPABASE_DB_URL`** to Vercel and GitHub:
   - **Vercel:** Project → Settings → Environment Variables (Production + Preview).
     This makes the Vercel `prebuild` enforcing.
   - **GitHub:** Repo → Settings → Secrets and variables → Actions.
     This makes the Action enforcing.
   - The connection is always TLS-verified; we never disable verification.
   - **TLS:** the pooler presents a chain rooted in the self-signed *Supabase
     Root 2021 CA*, which is committed at `certs/supabase-prod-ca-2021.crt` and
     pinned by the test (verified strictly). **No CA secret is needed.** Only if
     Supabase ever rotates the root, set `SUPABASE_DB_CA` to override the file.
3. **Activate the local pre-push hook:** `npm run setup:hooks`
4. **(Optional, phase 2) Generated types:** after `supabase login && supabase link`,
   run `npm run db:types` to commit `src/lib/database.types.ts` for comprehensive
   compile-time column checking. Not required — the schema test already covers the
   missing-column and constraint-value classes.

Credentials, for reference:

| Name | Format | Purpose | JWT? |
|------|--------|---------|------|
| `SUPABASE_ACCESS_TOKEN` | `sbp_…` | CLI / `db:types` (Management API) | No (PAT) |
| service-role / anon keys | `eyJ…` | app runtime (already in Vercel) | Yes |
| `SUPABASE_DB_URL` | `postgresql://…` | the schema-drift test (carries DB password) | No (conn string) |
| `SUPABASE_DB_CA` | `-----BEGIN CERTIFICATE-----…` | *optional override* — CA is committed at `certs/supabase-prod-ca-2021.crt`; only set this if Supabase rotates the root | No (CA cert) |
