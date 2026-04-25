-- Add reply_token for inbound email threading
ALTER TABLE submissions
  ADD COLUMN IF NOT EXISTS reply_token text
    NOT NULL UNIQUE
    DEFAULT encode(gen_random_bytes(6), 'hex');

-- Index for webhook lookups
CREATE INDEX IF NOT EXISTS idx_submissions_reply_token
  ON submissions(reply_token);
