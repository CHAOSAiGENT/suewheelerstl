-- ============================================================
-- MVP2 migration: new pipeline statuses, crew roster, bid blocks
-- ============================================================

-- 1. Expand columns on submissions
ALTER TABLE submissions
  ADD COLUMN IF NOT EXISTS bid_start_date          date,
  ADD COLUMN IF NOT EXISTS crew_member_ids         uuid[]      NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS lost_reason             text        CHECK (lost_reason IN ('price','timing','competitor','unknown')),
  ADD COLUMN IF NOT EXISTS lost_note               text,
  ADD COLUMN IF NOT EXISTS after_photos_uploaded   boolean     NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS final_payment_confirmed boolean     NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS archived_at             timestamptz;

-- Allow new status values (column is text — no enum to alter)
ALTER TABLE submissions
  DROP CONSTRAINT IF EXISTS submissions_status_check;

ALTER TABLE submissions
  ADD CONSTRAINT submissions_status_check
  CHECK (status IN (
    'new','reviewed','quote_sent','scheduled','completed',
    'to_bid','bid_sent','on_deck','active','finishing','fully_complete','lost'
  ));

-- 2. Crew members table
CREATE TABLE IF NOT EXISTS crew_members (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text        NOT NULL,
  active     boolean     NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE crew_members ENABLE ROW LEVEL SECURITY;

-- 3. Bid blocks table
CREATE TABLE IF NOT EXISTS bid_blocks (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid        NOT NULL REFERENCES submissions(id) ON DELETE CASCADE,
  sort_order    int         NOT NULL DEFAULT 0,
  source_key    text        NOT NULL,
  title         text        NOT NULL,
  body          text        NOT NULL,
  photo_paths   text[]      NOT NULL DEFAULT '{}',
  created_at    timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS bid_blocks_submission_idx
  ON bid_blocks(submission_id, sort_order);

ALTER TABLE bid_blocks ENABLE ROW LEVEL SECURITY;

-- 4. Data migration: map old status values to new pipeline
UPDATE submissions SET status = 'to_bid'         WHERE status IN ('new','reviewed');
UPDATE submissions SET status = 'bid_sent'       WHERE status = 'quote_sent';
UPDATE submissions SET status = 'on_deck'        WHERE status = 'scheduled';
UPDATE submissions SET status = 'fully_complete' WHERE status = 'completed';
