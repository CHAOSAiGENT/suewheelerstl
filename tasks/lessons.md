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
- ⚠️ The drift gate is in SKIP MODE until `SUPABASE_DB_URL` is added (Vercel env + GitHub secret). Flip it via the activation checklist in `docs/MIGRATIONS.md`.
