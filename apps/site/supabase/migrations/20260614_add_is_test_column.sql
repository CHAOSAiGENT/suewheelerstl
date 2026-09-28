-- Flags synthetic rows created by the form health monitor (/api/health) so they
-- are filtered out of all admin views and never counted as real leads. Without
-- this, a failed cleanup-delete in the health check would surface a fake lead in
-- Sue's admin board.
ALTER TABLE submissions
  ADD COLUMN IF NOT EXISTS is_test boolean NOT NULL DEFAULT false;
