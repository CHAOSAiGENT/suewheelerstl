---
name: db-check
description: Verify the production Supabase schema for the suewheelerstl project — confirm tables exist, columns are correct, constraints applied, and row counts look healthy.
disable-model-invocation: true
---

# DB Check — Sue Wheeler Production Schema

Use the `mcp__plugin_supabase_supabase__execute_sql` tool with project ID `khioedholasaxemmtooz` to run these verification queries.

## 1. Core tables exist

```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_name IN ('submissions','crew_members','bid_blocks','messages')
ORDER BY table_name;
```

Expected: 4 rows.

## 2. Submissions columns (MVP2 fields)

```sql
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_schema = 'public' AND table_name = 'submissions'
AND column_name IN (
  'status','bid_start_date','crew_member_ids','lost_reason','lost_note',
  'after_photos_uploaded','final_payment_confirmed','archived_at',
  'bid_amount','bid_file_url'
)
ORDER BY column_name;
```

Expected: 10 rows.

## 3. Status constraint allows new pipeline values

```sql
SELECT constraint_name, check_clause
FROM information_schema.check_constraints
WHERE constraint_schema = 'public'
AND constraint_name = 'submissions_status_check';
```

Expected: check_clause includes `to_bid`, `bid_sent`, `on_deck`, `active`, `finishing`, `fully_complete`, `lost`.

## 4. Active pipeline counts

```sql
SELECT status, count(*) as jobs
FROM submissions
WHERE archived_at IS NULL
GROUP BY status
ORDER BY status;
```

Shows current pipeline distribution. Useful for spotting stale status values from before the migration.

## 5. Orphaned old status values

```sql
SELECT id, name, status, created_at
FROM submissions
WHERE status NOT IN (
  'to_bid','bid_sent','on_deck','active','finishing','fully_complete','lost'
)
ORDER BY created_at;
```

Expected: 0 rows. If any appear, the data migration (Task 2) didn't catch them — inspect and update manually.

## 6. Bid blocks health

```sql
SELECT
  COUNT(*) AS total_blocks,
  COUNT(DISTINCT submission_id) AS submissions_with_blocks,
  MAX(sort_order) AS max_sort_order
FROM bid_blocks;
```

## 7. Crew roster

```sql
SELECT id, name, active, created_at FROM crew_members ORDER BY name;
```

## Report format

Present results as a quick status table:

| Check             | Status                        | Notes |
| ----------------- | ----------------------------- | ----- |
| Core tables       | ✓ / ✗                         |       |
| MVP2 columns      | ✓ / ✗                         |       |
| Status constraint | ✓ / ✗                         |       |
| Orphaned statuses | ✓ clean / ⚠ N rows            |       |
| Bid blocks        | N blocks across M submissions |       |
| Crew              | N active members              |       |
