-- Reconcile submissions.status with the app vocabulary (src/lib/types.ts).
--
-- Background: migration 20260527 (status_rename_to_9_kanban_states) set the
-- CHECK constraint to a 9-value legacy vocabulary
-- (request/contacted/bid_sent/no_response_later/scheduled/started/finishing/
-- complete/declined) that never matched the app code. The app — types.ts,
-- KanbanBoard, the contact form, and both admin routes — uses 8 statuses
-- (to_bid/contacted/bid_sent/on_deck/active/finishing/fully_complete/lost).
--
-- This drift had two live effects:
--   1. /api/contact 500'd because it inserts status='to_bid', which the old
--      constraint rejected (23514).
--   2. KanbanBoard groups via `s.status === col` over the 8 app statuses, so
--      every row holding a legacy-only value was silently dropped from the
--      board (17 of 24 live rows: 11 'complete', 6 'declined').

-- 1. Drop the stale constraint so legacy rows can be migrated.
ALTER TABLE public.submissions DROP CONSTRAINT submissions_status_check;

-- 2. Migrate the only legacy values present in live data.
UPDATE public.submissions SET status = 'fully_complete' WHERE status = 'complete';
UPDATE public.submissions SET status = 'lost'           WHERE status = 'declined';

-- 3. Repoint the column default off the now-invalid 'request'.
ALTER TABLE public.submissions ALTER COLUMN status SET DEFAULT 'to_bid';

-- 4. Re-add the constraint using the app's canonical 8 statuses.
ALTER TABLE public.submissions
  ADD CONSTRAINT submissions_status_check
  CHECK (status = ANY (ARRAY[
    'to_bid','contacted','bid_sent','on_deck','active','finishing','fully_complete','lost'
  ]));
