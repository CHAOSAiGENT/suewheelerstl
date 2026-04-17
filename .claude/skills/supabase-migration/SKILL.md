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

4. Report: migration name, success/failure, and table confirmation.

## Rules

- Always use `apply_migration` for DDL (CREATE TABLE, ALTER TABLE, CREATE INDEX, etc.) — never `execute_sql` for schema changes.
- Use `execute_sql` only for read queries (SELECT) or one-off data fixes.
- Never edit files under `supabase/migrations/` — those are blocked by the PreToolUse hook.
