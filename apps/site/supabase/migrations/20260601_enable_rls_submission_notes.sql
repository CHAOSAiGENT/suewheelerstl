-- submission_notes had RLS disabled (Supabase advisor: critical) — anyone with
-- the anon key could read/write every internal admin note via the data API.
-- Both app code paths (admin/[id]/page.tsx and the notes POST route) use the
-- service-role client, which BYPASSES RLS, so enabling RLS with no policies
-- closes the anon/authenticated exposure without affecting the app. This brings
-- the table in line with its siblings (submissions, messages, etc.), which
-- already have RLS enabled.
ALTER TABLE public.submission_notes ENABLE ROW LEVEL SECURITY;
