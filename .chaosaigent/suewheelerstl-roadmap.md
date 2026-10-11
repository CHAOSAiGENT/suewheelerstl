---
file: suewheelerstl-roadmap.md
project: suewheelerstl
updated: 2026-10-10
---

# suewheelerstl — Project Roadmap

**Documentation map:** `TODO.md` = what's left (with evidence) · `docs/DECISIONS.md` = why ·
`docs/ARCHITECTURE.md` = how it works · `docs/SECURITY.md` = what's protected ·
`docs/MCP.md` = the CRM MCP server · `docs/DOMAINS.md` = the domain/redirect runbook ·
`docs/RUNBOOK-cutover.md` = the four user-only cutover gates.
This file is orientation; do not duplicate those here.

> **`TODO.md` is stale as of 2026-10-10 — reconcile before trusting it.** It is wrong on
> five items it still lists as outstanding: business hours (published in `8c2ee1b`), the
> `generate-pdf` unchecked UPDATE, the retyped `STATUS_VALUES`, unused
> `BUSINESS_TELEPHONE`, and three neighborhood pages linking to redirected routes (all
> fixed in `9e798e7`). It also carries the pre-fix framing of the MCP "zero bearer-token
> leakage" claim, whose verification method was later proved unable to detect the failure
> it claimed to rule out.

## Done

- **The eleven CRM tools** — `search_leads`, `get_lead`, `get_pipeline`,
  `search_copyblocks`, `create_lead`, `add_note`, `create_bid_blocks`, `update_lead`,
  `update_bid_blocks`, `propose_bid_amount`, `set_bid_amount`. Every tool is
  `(input, client)` with the client injected. Two safety properties are structural, not
  advisory: `projection.ts` **throws** on a forbidden column rather than stripping it, and
  `set_bid_amount` cannot write without an explicitly confirmed number. 227 tests pass on
  `main`, `tsc` clean (re-verified 2026-10-10).
- **The PII guarantee was wrong and is now right** (`bfed602`). All 14 assertions bound to
  the `select()` argument; none inspected a returned record. Proved by mutation — with the
  leak fully intact the old suite stayed green.
- **Admin CRM authorization** (`07d09dc`) — the CRM only checked *that* someone was signed
  in, never *who*. `ADMIN_EMAILS` was dead config for 166 days. Now enforced at 14 API
  handlers, middleware, and 4 server components, failing closed.
- **SEO / identity pass** — 0 titles over 60 chars (from 115); canonicals 118/118;
  service area reconciled, recovering 8 suburbs and ~6,400 words that prerendered and were
  then intercepted by a 308; NAP single-sourced across 63 `LocalBusiness` nodes with zero
  home-address leakage; business hours published (`8c2ee1b`).
- **Three silent config failures found and fixed** (2026-10-10) — see In Progress for the
  one that remains. Two project hooks had never run (stale absolute path, failing silently
  via `&&` short-circuit); nine MCP denial labels never matched a real server.
- Contact form health monitor, live and green · `/api/health` + 6h GH Actions cron ·
  Next.js 15.5.19 · pre-push hook · GH Actions `@v6`.

## In Progress

- **Monorepo + desktop companion.** Branch `chore/monorepo-apps-site` (`104d581`, 4
  commits) restructures to pnpm workspaces with the site at `apps/site` and adds
  `packages/contract` plus an authenticated, usage-metered `/api/app/*` surface.
  **Unmerged** — `main` still describes a single-package repo. Spec and Plans 2 and 3 are
  written; **no `apps/desktop` code exists yet.** Blocked on the four gates below.
- **CRM MCP server.** Endpoint disabled everywhere behind the fail-closed
  `MCP_SPIKE_ENABLED` switch until OAuth lands. Blocked on Supabase's OAuth 2.1 Server.
- **53 `skillOverrides` entries cannot be enforced.** All are plugin skills, which
  `skillOverrides` does not reach. The registry's "keep core analytics only" intent is
  therefore inexpressible: selective denial is impossible, and disabling the `posthog`
  plugin wholesale would also remove the 8 PostHog skills we want. Needs a ruling.

## To Do

Detail, evidence and ordering are in `TODO.md` (but read the staleness note above first).

- **The four cutover gates — user-only, no code** (`docs/RUNBOOK-cutover.md`): reverse the
  apex→www redirect, probe project, cutover, and confirm the bundle identifier
  (permanent — changing it orphans every Keychain item).
- **`DECISIONS.md` stops at D36 (2026-09-03).** Seven significant decisions since then have
  reasoning in commit bodies and plans but no entry in the log meant to hold them.
- **Blocked on Peter — dashboard/config:** 301 the `site.` mirror, enable Supabase OAuth,
  add `ADMIN_EMAILS` to Vercel Preview, delete `NEXT_PUBLIC_ADMIN_EMAILS`, add
  `NTFY_TOPIC`, paste the `ADMIN_EMAILS` block into `.env.local.example` (by hand — a hook
  blocks agent edits to `.env*`).
- **Nothing is measurable.** PostHog is installed and imported by nothing, **and its MCP
  token is now expired.** This gates Project #2 (form UX redesign) — do not cut form fields
  by guess.
- **Zero images sitewide**, including an empty `/portfolio`.
- **Sue's home address is published as the business address** on BBB, Yelp, Yellow Pages
  and Yahoo Local — needs her logins. Four facts only she has.
- **`apps/site` `prebuild` uses `npm` inside a pnpm workspace.** That script is the
  schema-drift gate, so a resolution failure removes a protection while the build stays
  green. Branch-only.
- Seven known defects, found and deliberately unfixed — highest is `/api/inbound` sender
  spoofing (`is_from_admin` from a forgeable `From` header; no SPF/DKIM/DMARC anywhere).
- **Upstream:** `chaos-controller`'s `sync_registry_to_settings()` rebuilds
  `deniedMcpServers`/`skillOverrides` wholesale from a `grep "^### "`, contradicting
  `SKILL.md` 5.4.0. A formatting change alone can zero a project's denials silently.

## Decisions Made

Only the ones that change what to do next. Full record: `docs/DECISIONS.md`.

- **A denial is not enforced until something observably stops loading** — verify the
  effect, never the artifact. Three config failures this session all reported success
  while doing nothing — 2026-10-10.
- Registry-sourced denials live in the **tracked** `.claude/settings.json`;
  `settings.local.json` keeps only `permissions` — 2026-10-10.
- `context7` **activated** (reversal of "deselected during steer setup") — Tauri v2 and
  React Native need current docs — 2026-10-10.
- Project hooks use `"$CLAUDE_PROJECT_DIR"` with a **loud** stderr guard, never an
  absolute path — the original failure mode was silence — 2026-10-10.
- **`DataAdapter` is not built until a named second customer signs.** No valid second
  target exists (Toast has no customer entity; Square cannot search by name or address).
- Payments are **out of scope** for the companion app — the only sensitive matter.
- Client work keeps its **own database, always** — never folded into a product DB.
- Supabase MCP is **retired** — use the `supabase` CLI. Do not re-open "re-auth the MCP".
- ntfy supersedes Twilio/Slack; both stay unset and skip silently.
- MCP endpoint stays behind `MCP_SPIKE_ENABLED` until OAuth lands; prove the token's `aud`
  before writing the verifier (confused-deputy hole) — 2026-09-03.
- `site.suewheelerstl.com` gets a 301, never a deletion (St. Louis Magazine backlink);
  apex is canonical, `www` → apex at 308, never 307 — 2026-08-30.
- Project #2 field cuts stay gated on PostHog funnel data — do not cut by guess.
- PostHog project is SueWheeler **446138**, never WrapShot 415679.
