# Form Monitor — Design Spec

**Date:** 2026-06-14
**Status:** Approved design, pending implementation plan
**Owner:** Agency (CHAOSAiGENT) — alerts route to the agency, not to Sue

## Problem

The customer reports contact-form submissions are "incredibly low." Two distinct
root causes are possible and require different fixes:

1. **The form is intermittently broken.** A real example already occurred — a 500
   from a missing `zip` column (fixed in `be5bf66`, now guarded by the schema-drift
   gate). When the form breaks, the _only_ current signal is "submissions are low."
2. **The form works but converts poorly** (too many required fields / friction).
   This is a separate UX project (Project #2) and is **out of scope** for this spec.

Additionally, the app runs on a **free-tier Supabase project** (`khioedholasaxemmtooz`)
which pauses after ~7 days of database inactivity. A low-traffic form site is exactly
the risk profile for an unintended pause → form 500s → even fewer submissions.

This spec covers **Project #1**: a monitor that both (a) detects form breakage fast
and (b) keeps the Supabase project warm.

## Goals

- Detect a broken submission path within ~6 hours and alert the agency.
- Keep the free Supabase project active (prevent auto-pause).
- Exercise the **real** submission path so it catches real failure modes
  (schema drift, bad env vars, DB write failure) — not a proxy that would pass green
  while the actual form 500s.
- Zero pollution: no test leads visible to Sue, no emails sent to Sue.

## Non-Goals

- Form UX / required-field redesign (Project #2).
- Testing the photo-upload storage path (photos are optional on the form).
- Monitoring unrelated endpoints (admin, client portal, bid flow).

## Architecture

A **dedicated `/api/health` endpoint** performs a full round-trip against the real
`submissions` table. It is **not** a test-mode branch inside `/api/contact`.

**Rationale:** a branch in the production lead route risks (a) a leaked secret
bypassing the real lead path and (b) a genuine customer lead being mis-flagged as a
test. A separate endpoint keeps the production route untouched and contains blast
radius.

**Drift mitigation:** the endpoint inserts into the **same `submissions` table** with
the **same required columns** as `/api/contact`, so DB/schema/env failures surface
identically. The existing schema-drift gate + `src/lib/db-contract.ts` already lock
the table shape. The endpoint builds its insert from the same contract to stay
faithful to the real route.

## Components

### 1. `/api/health` route handler

- **Auth:** requires header `x-monitor-secret` equal to `MONITOR_SECRET` env var.
  Missing/invalid → `401`. Prevents anonymous spamming of test rows.
- **Action:** insert one row into `submissions` with `is_test = true` and minimal
  valid data → read it back by id → delete it.
- **Does NOT** send emails or touch photo storage.
- **Returns:** `200 {ok:true, dbWriteMs}` on success; `500 {ok:false, error}` on any
  failure (insert, read, or unexpected error).
- Cleanup-delete failure is logged but does not, by itself, change a successful
  check result — the `is_test` filter (below) is the durable safety net.

### 2. `is_test` column on `submissions`

- Migration: `is_test boolean not null default false`.
- All admin-facing queries filter `is_test = false` so test rows never appear in
  Sue's admin views or lead counts — even if a cleanup-delete ever fails.
- Added to `db-contract.ts` so the schema-drift gate tracks it.

### 3. GitHub Actions workflow — `.github/workflows/form-monitor.yml`

- **Schedule:** cron every 6 hours (`0 */6 * * *`).
- **Manual trigger:** `workflow_dispatch` for on-demand verification.
- **Check step:** `POST` the health endpoint with the secret header; **retry 2× with
  backoff** to absorb transient blips before declaring failure.
- **On failure:** the job fails (GitHub Actions failure is itself an alert channel)
  **and** an alert fan-out step runs.
- Runs external to Vercel + Supabase, so it can detect either being down.

### 4. Alert fan-out (failure only, inside the Action)

Runs in the Action — external to the site — so alerts fire even when the site is
fully down. Four channels:

- **Email** via Resend (reuse app's `RESEND_API_KEY`).
- **SMS** via Twilio.
- **Slack** via incoming webhook.
- **GitHub** — the failed job itself (visible in Actions tab; GitHub notifications).

Each channel runs in its own try/catch — one failing never blocks the others.
Alert payload: which check failed, HTTP status, response body, timestamp, and a link
to the Actions run.

## Data Flow

```
GitHub Actions (cron, every 6h)
  → POST /api/health  (x-monitor-secret)
    → Supabase: insert → read → delete on submissions(is_test=true)
    → 200 {ok:true} | 500 {ok:false,error}
  → Action asserts 200 + ok:true (after up to 2 retries)
  → on failure: job fails + fan-out Email / SMS / Slack
```

## Error Handling

- Health endpoint wraps all DB ops; returns `500` with error detail on any failure.
- Cleanup-delete failure: logged, non-fatal to check result; `is_test` filter prevents
  pollution.
- Action retries (2×, backoff) before declaring failure to avoid false alarms.
- Alert fan-out: per-channel try/catch; channel failures logged, never crash the run.

## Keep-Warm

The real insert+delete on every run (every 6h) keeps Supabase active far inside the
~7-day free-tier pause window.

## Prerequisites (GitHub repo secrets)

- `MONITOR_SECRET` — shared secret for the health endpoint (also set in Vercel env).
- `RESEND_API_KEY` — reuse the app's key for alert email.
- `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM`, `ALERT_SMS_TO`.
- `SLACK_WEBHOOK_URL`.
- `ALERT_EMAIL_TO`.

Twilio account and Slack incoming webhook require one-time setup by the agency.

## Testing

- Unit-test `/api/health`: 401 without secret; success path (insert→read→delete);
  `500` on simulated DB failure.
- Endpoint insert built from `db-contract` so schema-drift gate covers shape.
- `workflow_dispatch` manual run to confirm all four alert channels deliver
  (temporarily assert against a forced failure to exercise fan-out).

## Open Questions / Future

- Optional later: a less-frequent full E2E test that also exercises Resend + storage.
  Deferred (YAGNI) — current scope catches the DB/schema/env failure modes that have
  actually occurred.
