# Form Monitoring

The contact form is monitored by `.github/workflows/form-monitor.yml`, which runs
every 6 hours and on manual dispatch. It POSTs `/api/health`, which inserts→reads→
deletes a flagged (`is_test=true`) row in the real `submissions` table. On failure
the job fails AND fans out Email + SMS + Slack alerts via `scripts/monitor/check.mjs`.

## Required configuration

**Vercel env (production)** — needed by the `/api/health` endpoint:
- `MONITOR_SECRET` — shared secret (generate a long random string).

**GitHub repo secrets** — needed by the workflow:
- `MONITOR_SECRET` — same value as the Vercel env var.
- `RESEND_API_KEY` — reuse the app's Resend key.
- `ALERT_EMAIL_TO` — recipient for failure emails.
- `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM`, `ALERT_SMS_TO` — SMS.
- `SLACK_WEBHOOK_URL` — Slack incoming webhook.

Any unset alert channel is silently skipped, so you can ship with a subset and add
the rest later.

## Manual test

GitHub → Actions → form-monitor → "Run workflow". A green run = healthy. To verify
alerts deliver, temporarily set `MONITOR_SECRET` in the GitHub secret to a wrong
value (forces a 401), run, confirm all four channels fire, then restore it.

## What it does NOT cover

Email send (Resend) and photo storage are not exercised (photos are optional). See
`docs/superpowers/specs/2026-06-14-form-monitor-design.md` "Open Questions".
