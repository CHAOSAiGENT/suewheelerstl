# Schema/Code Drift Prevention — suewheelerstl

**Date:** 2026-06-01
**Status:** Approved design — ready for implementation planning
**Author:** drafted with Claude Code (brainstorming session)

## Problem

On 2026-06-01 the public contact form was down with HTTP 500 on every
submission. Root cause was **two stacked schema/code drifts** — the app
referenced database state that migrations never landed:

1. **Missing column.** `/api/contact` and `ContactForm` had referenced
   `submissions.zip` since an earlier commit, but the DDL never effectively ran.
   PostgREST rejected every insert at the schema-cache layer (`PGRST204`).
2. **Bad constraint value.** The app inserts `status='to_bid'`, but migration
   `20260527 status_rename_to_9_kanban_states` had set the `submissions_status_check`
   CHECK constraint to a *different* 9-value legacy vocabulary
   (`request`/`no_response_later`/`scheduled`/`started`/`complete`/`declined`)
   than `src/lib/types.ts` uses (`to_bid`/`on_deck`/`active`/`fully_complete`/`lost`).
   Inserts hit `23514`; separately, `KanbanBoard` (`s.status === col`) silently
   hid 17 of 24 live rows whose status wasn't in the app's 8 values.

### Why it reached production undetected

- Migrations are applied **inconsistently** — via Supabase MCP `apply_migration`
  and the dashboard SQL editor, not a single disciplined path.
- The MCP/dashboard write path **records in the remote migration ledger but
  leaves no local file**, so `supabase/migrations/` drifted: only **4 of 10**
  remote migrations had committed local files.
- **Nothing checks app-vs-DB agreement** before code ships. The repo has no CI
  (`.github/workflows` absent), no git hooks, no `supabase/config.toml` (CLI
  never initialized), and no generated DB types.
- Workflow is **solo, direct-to-`main`, Vercel auto-deploys on every push** — so
  the Vercel build is the only thing between a bad commit and production.

## Goal

Make it structurally impossible for code to reach production referencing DB
columns or constraint-values that don't exist. Adopt a **belt-and-suspenders**
posture: a tool-agnostic **detection gate** (hard backstop) *plus* **migration
discipline** (stop drift at the source).

## The two drift classes

| Class | Today's bug | Caught by |
|---|---|---|
| **Missing column** | `zip` referenced, never added | Generated DB types (`database.types.ts`) — `tsc` fails when code references a column the live schema lacks |
| **Bad constraint value** | `status='to_bid'` rejected | Constraint-introspection test — asserts live CHECK allowed-values equal the app's `SubmissionStatus` / `BidStatus` / `LostReason` unions |

Decision: keep `status` / `bid_status` / `lost_reason` as `text` + `CHECK`
(no conversion to Postgres `ENUM`). The introspection test catches drift in both
directions with no risky type migration and mirrors the diagnostic that
diagnosed today's bug.

## Design

### Component A — Generated DB types

- Initialize the Supabase CLI: `supabase init` + `supabase link --project-ref khioedholasaxemmtooz`.
- Generate `src/lib/database.types.ts` from the live schema
  (`supabase gen types typescript`), commit it, and have app code consume it.
- Catches the **missing-column** class: code referencing a column absent from
  the committed (live-derived) types fails `tsc`.

### Component B — Constraint-introspection test

- `src/lib/__tests__/schema-drift.test.ts`.
- Connects to Postgres directly (via the `pg` package — supabase-js cannot run
  raw SQL without a custom RPC), queries `pg_constraint` for
  `submissions_status_check`, `submissions_bid_status_check`,
  `submissions_lost_reason_check`, parses the allowed-value arrays.
- Asserts each set **exactly equals** the corresponding union in
  `src/lib/types.ts` (`SubmissionStatus`, `BidStatus`, `LostReason`).
- Fails on drift in **either** direction (DB adds/removes a value, or code does).

### Component C — The gate (where checks run)

Layered fast → authoritative. Because Vercel auto-deploys on push to `main`,
the authoritative check lives in the **Vercel build** so a failure blocks the
deploy.

1. **`tsc` inside `next build` (Vercel):** code must match committed
   `database.types.ts`. Fast, no DB.
2. **`prebuild` drift check (Vercel, read-only DB access):** regenerate types
   from the live DB and `git diff --exit-code` (fails if committed types are
   stale) **+** run the constraint-introspection test. **This is what actually
   blocks a bad deploy** — a failed build never promotes.
3. **Pre-push git hook (lefthook or husky):** run `tsc` + the constraint test
   locally for fast feedback before code leaves the machine. Bypassable.
4. **GitHub Action (`.github/workflows/schema-drift.yml`):** mirror the prebuild
   check on push for history/visibility and as a second signal.

### Component D — Migration discipline (source-side)

Division of labor between the two tools that share the same remote migration
ledger:

- **CLI = sole writer of schema.** All DDL via `supabase migration new <name>`
  → edit SQL → `supabase db push`. The migration file is committed **in the same
  commit** as the code that depends on it.
- **MCP = reads/inspection only.** `list_tables`, `get_advisors`, `SELECT` via
  `execute_sql`, `get_logs`. **Retire `apply_migration` from normal use** — it is
  the no-local-file write path that caused the drift. (The Supabase MCP stays
  active in the steering registry; only its write path is retired.)
- **Baseline sync:** `supabase db pull` once to capture the current remote schema
  as a baseline migration, so local `supabase/migrations/` finally matches all 10
  remote migrations.
- **Fix the `supabase-migration` skill:** it currently applies via MCP but does
  not write a local file — the exact mechanism of today's drift. Update it to
  always write the local migration file alongside applying (or to drive the CLI).

### Credentials

Three distinct credentials — do not conflate:

| Credential | Format | Purpose | JWT? |
|---|---|---|---|
| `SUPABASE_ACCESS_TOKEN` | `sbp_…` | CLI / Management API: `gen types`, `link`, `db pull/push` | No (personal access token) |
| service-role / anon keys | `eyJ…` | supabase-js at runtime (already in Vercel env) | Yes |
| `SUPABASE_DB_URL` | `postgresql://…` | direct SQL for the constraint test (`pg`) | No (connection string w/ password) |

The gate adds **two new secrets** to Vercel build env + GitHub Actions secrets:
`SUPABASE_ACCESS_TOKEN` (typegen/drift regen) and `SUPABASE_DB_URL` (constraint
test). Both are read-only in effect; the constraint test issues only `SELECT`s.

## Scope

**In scope (core):**
- Supabase CLI init + link + `db pull` baseline sync.
- Generated `database.types.ts`, committed and consumed by app code.
- Constraint-introspection test.
- Gate wiring: Vercel `prebuild` + `tsc` in build, pre-push hook, GitHub Action.
- Migration convention (CLI-only writes, MCP reads-only) + `supabase-migration`
  skill fix.

**Deferred (not core — YAGNI):**
- End-to-end "smoke insert" test against a Supabase preview-branch DB. Typegen +
  the constraint test already cover both classes that bit us; the smoke test is
  extra insurance, addable later.
- Converting status columns to Postgres `ENUM` types.

## Success criteria

- A commit that references a non-existent column fails `tsc` (locally,
  pre-push, in CI, and in the Vercel build).
- A commit that uses a status value not permitted by the live CHECK constraint
  fails the constraint-introspection test (pre-push, CI, Vercel build) and does
  not deploy.
- `supabase/migrations/` is in sync with the remote ledger (10/10), and future
  schema changes always land a committed migration file in the same commit.
- The Supabase MCP remains available for reads; no future schema change uses
  `apply_migration` as its sole record.

## Open questions / risks

- **Vercel build hitting the DB:** the prebuild check needs network + secrets at
  build time. Read-only and low-risk, but confirms a dependency of deploys on DB
  reachability. Mitigation: the constraint test is `SELECT`-only and fast; if the
  DB is unreachable the build fails closed (safer than deploying blind).
- **Pre-push hook bypass:** `--no-verify` exists; the hook is convenience, not
  the authoritative gate (Vercel build is).
