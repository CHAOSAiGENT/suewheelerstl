---
file: suewheelerstl-roadmap.md
project: suewheelerstl
updated: 2026-06-14
---

# suewheelerstl — Project Roadmap

## Done

- **Project #1 — Contact form health monitor (LIVE & verified)**
  - `is_test` column migration + `db-contract.ts` + schema-drift coverage
  - Admin board `is_test=false` filter (safety net)
  - `/api/health` secret-gated endpoint (insert→read→delete real table) + tests
  - `scripts/monitor/check.mjs` runner: 2 retries + 4-channel alert fan-out + tests
  - `.github/workflows/form-monitor.yml` cron (every 6h) + `workflow_dispatch`
  - `docs/MONITORING.md` runbook
  - Migration applied to live DB; `MONITOR_SECRET` set (Vercel + GitHub); deployed; **manual workflow run green**
- Next.js security bump 15.5.14 → 15.5.19
- Safe `npm audit fix` (critical protobufjs RCE + 4 moderates cleared)
- Pre-push hook wired (`core.hooksPath=scripts/hooks`) + exec bit committed
- Auto-sync (`chaos-sync` launchd) moved from every-30-min to nightly 2 AM
- GH Actions bumped to `checkout/setup-node@v6` (Node 20 runtime deprecation)

## In Progress

- Re-auth Supabase MCP to the suewheelerstl org (token currently on wrong account → can't reach `khioedholasaxemmtooz`). After re-auth, run `/chaos-controller steer` to re-verify.

## To Do

- Arm remaining alert channels: set up Twilio (SMS) → `TWILIO_ACCOUNT_SID/AUTH_TOKEN/FROM` + `ALERT_SMS_TO`; create Slack incoming webhook → `SLACK_WEBHOOK_URL`. (Currently Email + GitHub-failure only; unset channels skip silently.)
- **Project #2 — Contact form UX redesign.** Instrument PostHog form-funnel/field-drop-off + add Sentry FIRST, then reduce required fields to name/email/message and rework layout (prominent Send + "these items also help" section) using the data. See `.claude/memory/form-ux-review-with-monitoring.md`.
- (Optional) Resolve 2 moderate `postcss` audit warnings when Next.js ships an upstream bump.

## Decisions Made

- Separate `/api/health` endpoint (not a test branch in `/api/contact`) — 2026-06-14, isolates blast radius, prevents real-lead mis-flagging
- `is_test` admin filter as durable safety net; cleanup-delete is non-fatal — 2026-06-14
- External GitHub Actions runner over Vercel Cron — 2026-06-14, must detect Vercel/Supabase being down (Vercel Cron can't)
- Four alert channels fail independently; ship with a subset (Email+GitHub), add SMS/Slack later — 2026-06-14
- GH Actions pinned to major `@v6` (not SHA) — 2026-06-14, acceptable for non-critical CI
- Project #2 field cuts deferred until PostHog funnel data exists — do not cut by guess — 2026-06-14
- PostHog steered to project SueWheeler 446138 (from WrapShot 415679) — 2026-06-14
