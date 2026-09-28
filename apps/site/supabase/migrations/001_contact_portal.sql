-- ─────────────────────────────────────────────────────────────
-- 001_contact_portal.sql
-- Run in: Supabase Dashboard → SQL Editor → New query → Run
-- ─────────────────────────────────────────────────────────────

-- ── submissions ───────────────────────────────────────────────
create table public.submissions (
  id                      uuid primary key default gen_random_uuid(),
  created_at              timestamptz not null default now(),
  name                    text not null,
  phone                   text not null,
  email                   text not null,
  address                 text,
  service_types           text[] not null default '{}',
  best_time               text,
  timeline                text,
  project_description     text not null,
  referral                text,
  photo_urls              text[] not null default '{}',
  status                  text not null default 'new'
                            check (status in ('new','reviewed','quote_sent','scheduled','completed')),
  admin_notes             text,
  client_token            uuid not null unique default gen_random_uuid(),
  client_token_expires_at timestamptz not null default (now() + interval '90 days')
);

-- ── messages ──────────────────────────────────────────────────
create table public.messages (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  submission_id  uuid not null references public.submissions(id) on delete cascade,
  is_from_admin  boolean not null default false,
  body           text not null,
  sent_by_email  text not null
);

-- ── indexes ───────────────────────────────────────────────────
create index idx_submissions_status      on public.submissions(status);
create index idx_submissions_created_at  on public.submissions(created_at desc);
create index idx_submissions_token       on public.submissions(client_token);
create index idx_messages_submission_id  on public.messages(submission_id);

-- ── RLS ───────────────────────────────────────────────────────
alter table public.submissions enable row level security;
alter table public.messages    enable row level security;

-- anon can INSERT submissions (public contact form)
create policy "anon_insert_submissions"
  on public.submissions for insert
  to anon
  with check (true);

-- deny all reads/writes for non-service-role
create policy "deny_select_submissions"
  on public.submissions for select
  to anon, authenticated
  using (false);

create policy "deny_update_submissions"
  on public.submissions for update
  to anon, authenticated
  using (false);

create policy "deny_delete_submissions"
  on public.submissions for delete
  to anon, authenticated
  using (false);

create policy "deny_all_messages"
  on public.messages for all
  to anon, authenticated
  using (false)
  with check (false);

-- ── Storage bucket ────────────────────────────────────────────
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'submission-photos',
  'submission-photos',
  false,
  10485760,
  array['image/jpeg','image/png','image/webp','image/heic','image/heif']
)
on conflict (id) do nothing;

-- only service_role (API routes) can access submission photos
create policy "service_role_storage"
  on storage.objects for all
  to service_role
  using (bucket_id = 'submission-photos')
  with check (bucket_id = 'submission-photos');
