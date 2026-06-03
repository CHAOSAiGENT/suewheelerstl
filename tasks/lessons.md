# Build Lessons — suewheelerstl.com

_Capture issues and decisions as they arise._

## 2026-03-17
- Content is pre-written in content/pages/*.md — wire in, don't rewrite
- Version B staircase cost section confirmed (hub-staircases-cost-b.md), not Version A
- No pricing anywhere on the public site
- Tailwind v4 uses CSS-based config, not JS config — use @theme directive in globals.css

## 2026-06-01 — Schema/code drift took the contact form down (HTTP 500)
- Code shipped referencing DB state migrations never landed: missing `zip` column (PGRST204) and `status='to_bid'` not in the CHECK constraint (23514). Two stacked drifts — the zip error masked the status one. Always check for a SECOND failure after fixing the first.
- Root cause: migrations applied via Supabase MCP/dashboard left no local file → `supabase/migrations/` drifted (4 of 10 committed). Rule now: **CLI writes / MCP reads**; the `supabase-migration` skill always writes the local file. See `docs/MIGRATIONS.md`.
- `supabase gen types` types a CHECK-constrained `text` column as `string` — it does NOT catch bad constraint VALUES. Use a constraint-introspection test (`pg_constraint`) against `src/lib/db-contract.ts` for value drift.
- A Vercel build-time gate MUST self-skip when its secret is absent, or you block everyone's deploys. DB checks degrade to no-op without `SUPABASE_DB_URL`.
- The drift gate self-skips until `SUPABASE_DB_URL` is set; activated 2026-06-02 (GitHub + Vercel). Now enforcing on all three layers.

## 2026-06-02 — Activating the gate: Supabase DB connection from CI/Vercel (the long saga)
- **Use the Transaction pooler, not the direct endpoint.** `aws-<n>-<region>.pooler.supabase.com:6543` is IPv4; the direct host `db.<ref>.supabase.co` is **IPv6-only** and unreachable from GitHub Actions / Vercel build (both IPv4-only). The IPv4 add-on is only for direct — the pooler is IPv4 for everyone.
- **Supabase Postgres TLS is self-signed-rooted.** The pooler presents a chain rooted in `Supabase Root 2021 CA` (not in Node's default trust store). Pin it — committed at `certs/supabase-prod-ca-2021.crt` (public cert, safe to commit), `ssl: { ca, rejectUnauthorized: true }`. Never `rejectUnauthorized: false`: the conn string carries the DB password (MITM = credential theft).
- **Passing `ca` REPLACES Node's system trust store** (doesn't append). Pinning Supabase's CA while expecting a public cert — or vice versa — yields "self-signed certificate in certificate chain."
- **Diagnose PG TLS by negotiating SSLRequest first, then dump the chain.** A bare `tls.connect()` to a Postgres port gives a misleading "wrong version number." (See the throwaway `scripts/diag-db-ssl.mjs` pattern.)
- **"password authentication failed for user postgres" via the pooler = wrong password value**, not a username problem (the bare `postgres` in the error is normal; the `.ref` suffix is pooler routing). Culprits: the literal `[YOUR-PASSWORD]` placeholder left unreplaced, a stale pre-reset password, or special chars needing URL-encoding. Resetting to an alphanumeric password sidesteps encoding.
- **The same secret must be in BOTH GitHub (Actions) and Vercel (env, Production+Preview).** Green CI + failing Vercel deploy with identical code = the value differs between the two stores (classic: Vercel still had the old/placeholder password).
- **Verify deploys via the Vercel MCP** (`list_deployments` + `get_deployment_build_logs`) — a build log showing `2 passed` (not `2 skipped`) confirms the gate is actually enforcing, not silently skipping.
