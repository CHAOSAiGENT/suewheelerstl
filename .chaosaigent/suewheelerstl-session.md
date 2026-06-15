---
file: suewheelerstl-session.md
project: suewheelerstl
repo: https://github.com/CHAOSAiGENT/suewheelerstl
---

# suewheelerstl — Session Doc

## 2026-06-14 — Form health monitor shipped + live; repo sync, Next security bump [Stack, Architecture, Tech Log, PM Notes]

### Stack

| Component  | Technology                      | Version / Detail                                    | Notes                                                                                         |
| ---------- | ------------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Framework  | Next.js (App Router)            | 15.5.19                                             | Bumped from 15.5.14 this session for high-sev security advisories (DoS/SSRF/cache-poison/XSS) |
| UI         | React                           | ^19.0.0                                             |                                                                                               |
| DB / auth  | Supabase (Postgres 17 + SSR)    | @supabase/supabase-js ^2.99.3, @supabase/ssr ^0.9.0 | Prod project `khioedholasaxemmtooz`                                                           |
| Email      | Resend                          | ^4.0.0                                              | Contact-form notifications + (now) monitor alerts                                             |
| Analytics  | PostHog                         | posthog-js ^1.363.1                                 | Project "SueWheeler" 446138; wired at `src/lib/posthog.ts`                                    |
| Tests      | Vitest                          | ^4.1.8                                              | Added `scripts/**/*.test.mjs` to include this session                                         |
| CI         | GitHub Actions                  | checkout/setup-node **@v6**                         | Bumped from @v4 (Node 20 runtime deprecation)                                                 |
| Monitoring | GH Actions cron + `/api/health` | every 6h                                            | NEW — Project #1                                                                              |

**Secrets in use:** `MONITOR_SECRET` (new — Vercel prod + GitHub), `RESEND_API_KEY`, `ALERT_EMAIL_TO`, `SUPABASE_SECRET_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_DB_URL` (schema-drift CI), `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY`. Deferred (unset): `TWILIO_*`, `ALERT_SMS_TO`, `SLACK_WEBHOOK_URL`.

**Claude Code config:** chaos-controller registry active (`.chaosaigent/mcp-registry.md`). Active MCPs: Supabase, PostHog (verified 446138), GitHub, Vercel, Playwright. Pre-push hook live (`core.hooksPath=scripts/hooks`). Project memory at `.claude/memory/`.

### Architecture

**System Layers**

**Layer 1 — Public contact form**
What it does: Renders the form (`src/components/ContactForm.tsx`), POSTs to `/api/contact`, which inserts a row into Supabase `submissions` and sends two Resend emails.
The pattern: Server route handler + service-role Supabase client (RLS-bypassing) for the insert.
Lift to: unchanged this session — but it's the path the monitor now guards.

**Layer 2 — Form health monitor (NEW)**
What it does: `/api/health` (secret-gated) inserts a flagged (`is_test=true`) row into the REAL `submissions` table mirroring `/api/contact`'s columns, reads it back, deletes it. Returns `200 {ok,dbWriteMs}` / `500 {ok:false,error}`.
The pattern: faithful synthetic transaction against the real table (not a proxy) so it catches schema/env/DB breaks; dedicated endpoint (not a branch in `/api/contact`) to contain blast radius; `is_test` admin filter as the durable safety net.
Lift to: add Resend + storage exercise later (deferred, YAGNI).

**Layer 3 — External runner + alerting (NEW)**
What it does: `.github/workflows/form-monitor.yml` (cron `0 */6 * * *`) runs `scripts/monitor/check.mjs`, which POSTs `/api/health` with 2 retries and, on failure, fans out Email/SMS/Slack and exits non-zero (failing the job = 4th signal).
The pattern: runner is EXTERNAL to Vercel+Supabase so it can detect them being down; Node 22 built-ins only (no deps); each alert channel independent (`Promise.allSettled`), unset channels skipped.
Lift to: drop-in SMS (Twilio) + Slack by adding secrets — no code change.

**Full Chain**
`GH Actions cron (6h) → check.mjs → POST /api/health (x-monitor-secret) → Supabase insert→read→delete (is_test) → 200/500 → assert (2 retries) → on fail: Email/SMS/Slack + job red`

**What You'd Swap**

| Concern          | Current                     | Swap to                                                                        |
| ---------------- | --------------------------- | ------------------------------------------------------------------------------ |
| Runner           | GitHub Actions cron         | Dedicated uptime svc (UptimeRobot) — rejected: can't run synthetic submission  |
| In-platform cron | (rejected) Vercel Cron      | rejected — can't detect Vercel being down                                      |
| Keep-warm        | real insert/delete every 6h | separate heartbeat table — rejected: would miss `/api/contact`-specific breaks |

### Tech Log

**Bugs**

- None introduced. (The class of bug this monitor guards against — the historical `zip`-column 500 — was already fixed pre-session by the pulled commits.)

**Pivots**

- Initial framing of the 2 remaining `postcss` audit warnings as "fixable" → corrected to "upstream-bundled in Next.js, do NOT `npm audit fix --force`" (would downgrade Next 15→9).
- Next.js "high-severity upgrade" reframed mid-session: it was a patch bump (15.5.14→15.5.19), not a major migration — misread the audit's _vulnerable range_ string as the installed version.

**Gotchas**

- **Supabase MCP can't reach the prod project.** The connected MCP token is on org `fcaifnfhynhjzdtgbdbi` (envpi/VaibReport, both INACTIVE) — `khioedholasaxemmtooz` returns "no permission". Migration had to be applied via dashboard by hand. Re-auth pending.
- **Vitest `include` didn't discover `.mjs` tests** — had to add `scripts/**/*.test.mjs` to `vitest.config.ts`.
- **Deploy ordering is load-bearing:** migration must hit live DB before the endpoint deploys + before `main` pushes, or the schema-drift CI gate goes red and `/api/health` 500s.
- **Auto-sync automation** (`chaos-sync` launchd) auto-committed working-tree changes mid-session; switched it from every-30-min to nightly 2 AM.

**Worth it / waste of time**

- Worth it: subagent-driven dev with two-stage review per task + final Opus integration review — caught the read-failure test gap, the silent-alert-channel risk, and confirmed the safety-net leak analysis.
- Worth it: pre-push hook fired correctly on first real push (typecheck + schema gate).

**Tech debt flagged**

- 2 moderate `postcss` audit warnings (upstream Next.js, no safe fix — wait for upstream).
- `/api/health` doesn't exercise Resend email or photo storage (deferred).
- Health endpoint read-failure branch lacks a dedicated unit test (non-blocking).

### MCP & Skill Activity

**Active MCPs this session:** Supabase (1 call — `list_projects`/`get_project`, both failed: wrong account), PostHog (switched to 446138), GitHub (`gh` CLI for action versions). Vercel, Playwright — idle.
**Context switches:** PostHog WrapShot 415679 → SueWheeler 446138 (registry steer).
**Steering drift:** Supabase verify now FAILS (token lacks access to prod project) — user re-authing, registry unchanged.
**Skills used:** superpowers (brainstorming, writing-plans, subagent-driven-development, using-git-worktrees, finishing-a-development-branch), chaos-controller.

### PM Notes

**What got done**

- Repo synced (14 commits pulled), deps installed, Next.js security patch (15.5.19), safe `npm audit fix` (critical protobufjs RCE + 4 moderates cleared).
- Pre-push hook wired + exec bit committed; auto-sync moved to nightly.
- **Project #1 — form health monitor: designed (spec), planned (4-task TDD plan), built via subagents, reviewed (2-stage + Opus final), merged, deployed, verified green.**
- GH Actions bumped to @v6; Project #2 flagged into memory.

**What went well**

- Full superpowers loop (brainstorm → spec → plan → subagent execution → finish) ran clean end-to-end.
- Faithful-synthetic-transaction design verified to catch real failure modes (not a proxy).

**What was hard / friction**

- Supabase MCP account mismatch blocked programmatic migration; required manual dashboard step.
- Repeated injection-reminder + Vercel-Cron hooks on workflow edits (correctly overridden).

**What was skipped or unnecessary**

- SMS (Twilio) + Slack alert channels — deferred by user ("holding off").
- Resend/storage E2E coverage in the monitor — deferred (YAGNI).

**Open questions / decisions pending**

- When Supabase MCP is re-authed to the right account, re-run steering verify.
- Project #2 scope: confirm field cuts only AFTER PostHog funnel/drop-off data exists.

**What structured process would have caught earlier**

- A steering verify at session START would have surfaced the Supabase MCP access gap before the migration attempt, not during it.
- Reading the audit's _installed_ version (not the advisory range) before calling the Next bump "major" would have avoided the mis-scope.

**Next time**

- Re-auth the Supabase MCP to the suewheelerstl org, then `/chaos-controller steer` to re-verify.
- Set up Twilio + Slack webhook → add `TWILIO_*` / `SLACK_WEBHOOK_URL` secrets to arm all 4 alert channels.
- Start Project #2: instrument PostHog form-funnel + add Sentry, THEN reduce required fields (name/email/message) with data — see `.claude/memory/form-ux-review-with-monitoring.md`.
