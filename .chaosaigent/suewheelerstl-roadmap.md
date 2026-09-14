---
file: suewheelerstl-roadmap.md
project: suewheelerstl
updated: 2026-09-14
---

# suewheelerstl — Project Roadmap

**Documentation map:** `TODO.md` = what's left (with evidence) · `docs/DECISIONS.md` = why ·
`docs/ARCHITECTURE.md` = how it works · `docs/SECURITY.md` = what's protected ·
`docs/MCP.md` = the CRM MCP server · `docs/DOMAINS.md` = the domain/redirect runbook.
This file is orientation; do not duplicate those here.

## Done

- **Project #1 — Contact form health monitor (LIVE & verified)** — `/api/health` +
  `scripts/monitor/check.mjs` + 6h GitHub Actions cron; runbook `docs/MONITORING.md`.
  ntfy channel added (`3ca34b8`); Email + GitHub-failure armed, ntfy pending its secret.
- **Admin CRM authorization** (`07d09dc`, 2026-09-03) — the CRM only checked *that*
  someone was signed in, never *who*; `ADMIN_EMAILS` was dead config for 142 days.
  Now enforced at 14 API handlers, middleware, and 4 server components, failing closed.
- **SEO / identity pass** (2026-08-30) — title-template collision cleared across 116
  pages (0 titles over 60 chars, from 115); canonicals self-referencing on 118/118;
  service area reconciled, recovering 8 suburbs and ~6,400 words that prerendered and
  were then intercepted by a 308; NAP single-sourced across 63 `LocalBusiness` nodes,
  zero home-address leakage; `docs/DOMAINS.md` written.
- Next.js 15.5.19 security bump · `npm audit fix` · pre-push hook
  (`core.hooksPath=scripts/hooks`) · GH Actions `@v6`.

## In Progress

- **CRM MCP server.** Four read tools (`search_leads`, `get_lead`, `get_pipeline`,
  `search_copyblocks`), column allowlists, Streamable HTTP route, schema-drift gate
  extended and verified against the live DB. 58 tests. **Blocker:** no OAuth yet, so the
  endpoint is disabled everywhere behind the fail-closed `MCP_SPIKE_ENABLED` kill switch.
  `docs/MCP.md`, `TODO.md` §4.

## To Do

Detail, evidence and ordering are in `TODO.md`.

- **Blocked on Peter — dashboard/config, no code** (`TODO.md` §1): reverse the apex→www
  redirect, 301 the `site.` mirror, enable Supabase's OAuth 2.1 Server, add
  `ADMIN_EMAILS` to Vercel Preview, delete `NEXT_PUBLIC_ADMIN_EMAILS`, add `NTFY_TOPIC`.
- **Nothing is measurable** — PostHog is installed and imported by nothing (`TODO.md` §5).
  This gates Project #2 (form UX redesign, `TODO.md` §7).
- **Zero images sitewide**, including an empty `/portfolio` (`TODO.md` §5).
- **Sue's home address is published as the business address** on BBB, Yelp, Yellow Pages
  and Yahoo Local — needs her logins (`TODO.md` §3). Four facts only she has: §2.
- Seven known defects, found and deliberately unfixed (`TODO.md` §6).

## Decisions Made

Only the ones that change what to do next. Full record: `docs/DECISIONS.md`.

- Supabase MCP is **retired** — use the `supabase` CLI. Do not re-open "re-auth the MCP".
- ntfy supersedes Twilio/Slack as the channel to arm; both stay unset and skip silently.
- MCP endpoint stays behind `MCP_SPIKE_ENABLED` until OAuth lands — 2026-09-03.
- Prove the token's `aud` before writing the verifier; never accept any token the Supabase
  project issues (confused-deputy hole) — 2026-09-03.
- `site.suewheelerstl.com` gets a 301, never a deletion (St. Louis Magazine backlink);
  apex is canonical, `www` → apex at 308, never 307 — 2026-08-30.
- Project #2 field cuts stay gated on PostHog funnel data — do not cut by guess — 2026-06-14.
- PostHog project is SueWheeler **446138**, never WrapShot 415679 — 2026-06-14.
