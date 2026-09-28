-- Usage accounting for the app API (/api/app/*).
--
-- Written in the same request as the work it describes, never reconstructed
-- from provider invoices afterwards: you cannot bill for a period you were not
-- recording. That is why this lands with the first endpoint rather than once
-- there is revenue to justify it.
--
-- Failed calls are recorded too. An error still consumed a model call and a
-- database round trip, and a usage table that counts only successes understates
-- cost exactly when something is going wrong.
--
-- `client_id` identifies the calling surface ('desktop', 'ios'). It is also the
-- seam for per-device attribution when device pairing lands — same column, no
-- migration. See docs/superpowers/specs/2026-09-27-companion-desktop-app-design.md.

create table if not exists public.usage_events (
  id                bigserial primary key,
  occurred_at       timestamptz not null default now(),
  user_email        text        not null,
  client_id         text        not null,
  tool_name         text        not null,
  outcome           text        not null check (outcome in ('ok', 'error')),
  duration_ms       integer     not null,
  -- Null until a tool actually calls a model. Present so the billing shape does
  -- not need a migration the day one does.
  model             text,
  input_tokens      integer,
  output_tokens     integer,
  provider_cost_usd numeric(12, 6)
);

-- Billing queries are "everything in this period" and "everything for this user
-- in this period". Both are covered.
create index if not exists usage_events_occurred_at_idx
  on public.usage_events (occurred_at desc);

create index if not exists usage_events_user_idx
  on public.usage_events (user_email, occurred_at desc);

-- RLS on, no policies. Every write goes through the service-role client inside a
-- route handler, which bypasses RLS entirely — so enabling it with no policy
-- closes anon and authenticated access without affecting the app. This mirrors
-- 20260601_enable_rls_submission_notes.sql.
alter table public.usage_events enable row level security;
