---
name: supabase-migration
description: Run a Supabase DDL migration via MCP for the suewheelerstl project. Handles auth check, applies migration, verifies table exists.
---

Project ID: `khioedholasaxemmtooz`

## Steps

1. Call `mcp__plugin_supabase_supabase__list_projects` to confirm auth.
   - If it errors or tools are unavailable, call `mcp__plugin_supabase_supabase__authenticate` and ask the user to complete the OAuth flow, then retry.

2. Call `mcp__plugin_supabase_supabase__apply_migration` with:
   - `project_id`: `khioedholasaxemmtooz`
   - `name`: snake_case description of the migration (e.g. `add_bid_status_column`)
   - `query`: the DDL SQL provided by the user

3. Call `mcp__plugin_supabase_supabase__list_tables` to confirm the affected table appears (or updated schema is reflected).

4. **Write the local migration file** — create `supabase/migrations/<YYYYMMDD>_<name>.sql` containing the exact DDL just applied, with a comment explaining why. This is mandatory: applying via MCP without committing a local file is what caused the schema/code drift on 2026-06-01 (remote ledger had 10 migrations, local had 4). The repo must always reflect what is in production. See `docs/MIGRATIONS.md`.

5. **Update `src/lib/db-contract.ts` in the same change** if the DDL alters a CHECK constraint's allowed values or adds/removes a column the app depends on. The schema-drift test asserts the DB matches this contract.

6. Report: migration name, success/failure, table confirmation, and the local file path written.

## Rules

- Always use `apply_migration` for DDL (CREATE TABLE, ALTER TABLE, CREATE INDEX, etc.) — never `execute_sql` for schema changes.
- Use `execute_sql` only for read queries (SELECT) or one-off data fixes.
- Always write a NEW local migration file (step 4) so the repo matches production. Do not EDIT existing files under `supabase/migrations/` (rewriting applied history) — those edits are blocked by the PreToolUse hook; creating a new dated file is expected.
- Preferred long-term path is the Supabase CLI (`supabase migration new` + `db push`), which writes the local file automatically. See `docs/MIGRATIONS.md`. Use this MCP skill for hotfixes, but still land the local file.
