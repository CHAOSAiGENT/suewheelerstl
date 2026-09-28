-- Add the zip column the contact form + /api/contact insert have referenced
-- since commit 62c5ef0 ("zip code field"), which shipped the form field and
-- the insert but never committed/ran the DDL. Without this column every
-- submission insert fails with PGRST204 ("Could not find the 'zip' column
-- ... in the schema cache"), breaking the public contact form entirely.
ALTER TABLE submissions
  ADD COLUMN IF NOT EXISTS zip text;
