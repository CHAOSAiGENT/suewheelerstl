---
file: suewheelerstl-session.md
project: suewheelerstl
repo: https://github.com/CHAOSAiGENT/suewheelerstl
---

# suewheelerstl — Session Doc

## 2026-10-10 — SEO/AEO pass, admin authorization, the eleven-tool CRM API, and a monorepo + desktop-companion line of work [Stack, Architecture, Tech Log, PM Notes, MCP & Skill Activity]

44 commits on `main` (`6128501..163cefc`, 188 files, +14121/-3442) and 4 on
`chore/monorepo-apps-site` (`104d581`). Re-verified by the foreman, not taken on report:
`main` is **227 passed, 2 skipped**, `tsc --noEmit` clean. The branch suite was **not**
re-run this checkpoint — doing so needs a checkout that would have raced the inspectors
reading the tree; its 229 figure is carried from earlier in the session, unconfirmed here.

### Stack

| Component | Technology | Version / Detail | Notes |
|---|---|---|---|
| Framework | Next.js (App Router) | 15.5.19 | React 19 |
| Database | Supabase Postgres | 17, prod `khioedholasaxemmtooz` | Client work — its own DB, never folded into a product DB |
| Auth | Supabase SSR | `@supabase/ssr` 0.9.0 | Session JWT reused for `/api/app/*` on the branch |
| Email | Resend | 4.x | Outbound; `/api/inbound` handles replies |
| Analytics | PostHog | proj **446138** (SueWheeler), `src/lib/posthog.ts` | **Still imported by nothing.** Never WrapShot 415679 |
| Tests | Vitest | 4.1.8 | 227 pass / 2 skip on `main` |
| MCP | `mcp-handler` | 2.1.1 | Streamable HTTP; endpoint off behind `MCP_SPIKE_ENABLED` |
| Monorepo *(branch)* | pnpm workspaces | **pnpm@9.15.0** | Site at `apps/site`, `packages/contract`. Deliberately not Turborepo |
| Desktop *(planned)* | Tauri v2 | 2.12.0 | Spec + 2 plans written; **no `apps/desktop` code exists yet** |
| Transcription *(planned)* | Deepgram Nova-3 | $0.0043/min | `mip_opt_out=true` required on first commit — training is the default |

**Secrets in use:** names and locations only, no values. Set: `MONITOR_SECRET`,
`RESEND_API_KEY`, `ALERT_EMAIL_TO`, `SUPABASE_*`, `ADMIN_EMAILS` (Production +
Development only — **not Preview**). Unset and deliberately so: `NTFY_TOPIC`,
`TWILIO_*`, `SLACK_WEBHOOK_URL` (the last two superseded by ntfy; they skip silently).
`MCP_SPIKE_ENABLED` off everywhere, intentionally. `NEXT_PUBLIC_ADMIN_EMAILS` is dead
config pending deletion — it would be inlined into the browser bundle.

**Claude Code config:** Claude Code 2.1.220. Hooks now at 5.4.0 (were 5.0.5).
Project hooks: a `PreToolUse` guard blocking `.env*` and `supabase/migrations/` edits
(verified this session: exit 2 on both, exit 0 on a normal `.tsx`), plus two repaired
`PostToolUse` hooks (typecheck + lint). Active MCPs per registry: Supabase (retired in
favour of the CLI), PostHog, GitHub, Vercel, Playwright, and **context7 newly activated**.
Skills invoked: `chaos-controller`; earlier in the session `superpowers:brainstorming`
and `superpowers:writing-plans`.

### Architecture

**System Layers**

**Layer 1 — The public site**
- *What it does:* 118 prerendered pages, 63 `LocalBusiness` JSON-LD nodes, one contact form.
- *The pattern:* NAP single-sourced from `src/lib/business.ts` so identity cannot drift per-page.
- *Lift to:* any local-services business where identity correctness is the SEO substrate.

**Layer 2 — The admin CRM**
- *What it does:* lead pipeline, bid drafting, PDF generation.
- *The pattern:* **fail-closed authorization at three independent gates** — `src/middleware.ts`, all 14 `/api/admin/**` handlers (403, not 401), and 4 `/admin` server components. Unset `ADMIN_EMAILS` denies everyone. Note the middleware matcher `/admin/:path*` does **not** match `/api/admin/*`; that is why the handler gate exists separately rather than redundantly.
- *Lift to:* any admin surface where the allowlist must never fail open.

**Layer 3 — The eleven CRM tools**
- *What it does:* `search_leads`, `get_lead`, `get_pipeline`, `search_copyblocks`, `create_lead`, `add_note`, `create_bid_blocks`, `update_lead`, `update_bid_blocks`, `propose_bid_amount`, `set_bid_amount`.
- *The pattern:* every tool is `(input, client)` with the client **injected**, so the same function body serves the MCP transport and the HTTP API. Two safety properties are **structural**, not advisory: `projection.ts` **throws** on a forbidden column rather than stripping it (the forbidden check runs *before* projection — projecting first would drop the credential and leave nothing to detect), and the propose/set split means `set_bid_amount` cannot write without an explicitly confirmed number.
- *Lift to:* any agent-facing data surface where a credential column sits in the same table as readable fields.

**Layer 4 — The app API (branch only)**
- *What it does:* `/api/app/tools/[name]`, `/api/app/me`; bearer auth, usage metering to `usage_events`.
- *The pattern:* `authorizeAppRequest` takes a **factory**, not a client, so an unauthenticated request short-circuits before any Supabase construction. Unknown tool names are rejected *before* authentication. A final leak guard scans the serialized response and withholds with 500.
- *Lift to:* any thin client (desktop, mobile) that must not hold database credentials.

**Full Chain**

Browser or Sue's client → Vercel edge → middleware (admin gate) → route handler
(per-handler admin gate, or `authorizeAppRequest` for `/api/app/*`) → tool function
`(input, client)` → Supabase with a column allowlist → `projectRecord` (throws on
forbidden) → response leak guard → JSON. Contact submissions additionally fan out to
Resend and to `/api/health`, which a 6-hour GitHub Actions cron polls and alerts on.

**What You'd Swap for a Different Domain**

| Layer | Swap | Keep |
|---|---|---|
| Public site | Copy, geo pages, service taxonomy | NAP single-sourcing, canonical discipline |
| Admin CRM | Pipeline stages, bid shape | The three-gate fail-closed pattern |
| Tools | Table and column names | `(input, client)` injection; throw-not-strip projection; propose/set split |
| App API | Tool registry contents | Factory-not-client auth; reject-unknown-before-auth; response leak guard |
| Monitor | Alert channels | Exercise the **real** path, never a proxy table |

### Tech Log

**Bugs**

- **Two of three project hooks had never run.** `.claude/settings.json` hardcoded `CHAOS/CLIENT_SITES/suewheelerstl`; the repo lives at `CHAOS/_clients/client_sites/suewheelerstl`. The command shape was `cd <missing> && npx tsc …; exit 0` — the `cd` failed, `&&` short-circuited, and the trailing `exit 0` **reported success**. Typecheck-on-save and lint-on-save were silently off. Fixed this session: both now use `"$CLAUDE_PROJECT_DIR"` **with a loud guard** that writes to stderr if the variable is unusable, because the original failure mode was silence. Verified both ways — guard fires on unset, real `tsc` runs when set. `permissions.allow` in `settings.local.json` carries the same stale path and those two grants are inert; left alone as harmless.
- **Nine of sixteen `deniedMcpServers` entries never matched anything.** The key matches the user-assigned label verbatim; the entries said `Canva`, `Hugging_Face`, `context7`, `agentation-mcp` while the real labels are `claude.ai Canva`, `claude.ai Hugging Face`, `plugin:context7:context7`, `agentation`. Evidence is not inferential: every one of those servers showed **Connected** in `claude mcp list` and their tools were loaded in the session that found this. Fixed with verbatim labels plus `serverUrl`/`serverCommand`, which survive a rename.
- **All 53 `skillOverrides` entries are unenforceable.** Every key is colon-prefixed (`cloudflare:*`, `posthog:*`) — plugin skills, which `skillOverrides` does not reach. 43 `posthog:*` are ineffective; 10 `cloudflare:*` are moot because no cloudflare plugin is installed. They were moved for consistency of record and are **documented as carried, not enforced**. Consequence worth stating plainly: the registry's "keep core analytics only" intent **cannot be expressed** with these mechanisms — selective denial is impossible, and disabling the `posthog` plugin wholesale would also remove the 8 PostHog skills the Active list wants.
- `apps/site/package.json` has `"prebuild": "npm run test:schema"` — `npm` inside a `pnpm@9.15.0` workspace whose root delegates via `pnpm --filter`. `prebuild` **is** the schema-drift gate, so this is not cosmetic: a resolution failure there removes a protection while the build still goes green. Branch-only, unfixed.
- Fixed earlier in the session and verified by mutation: the PII guarantee tested the `select()` **argument**, not the returned record — with the leak fully intact the old suite stayed green; `get_pipeline` was unbounded; three silent-write/validation defects; and no file containing JSX was testable at all until `oxc.jsx.runtime` was set in `vitest.config.ts`.

**Pivots**

- **`DataAdapter` abandoned.** Research against Square, Toast, Jobber, Housecall Pro and WordPress found no valid second target (Toast has no customer entity at all; Square cannot search by name or address). Verdict: do not build until a named second customer signs. Recorded in the spec (`a5ba63f`) — **not** in `DECISIONS.md`, which is a gap.
- **`context7` un-denied** (reversal of "deselected during steer setup"), on the reasoning that Tauri v2 and React Native work needs current docs in a way a settled Next.js site did not.
- ntfy supersedes Twilio/Slack. Supabase MCP retired in favour of the CLI.

**Gotchas**

- **`/chaos-controller setup` would have wiped this project's denial config.** `adapters/claude-code.sh` → `sync_registry_to_settings()` rebuilds `deniedMcpServers` and `skillOverrides` wholesale from the registry via `grep "^### "`. The registry's denied section had been rewritten as a **table**, which parses to zero entries — so the function would have written `deniedMcpServers = []` and `skillOverrides = {}`, destroying 15 working denials with no error. This directly contradicts `SKILL.md` 5.4.0, which states the registry "is never used to rebuild that file wholesale." **Mitigated two ways:** `configure_pruning` was deliberately not called (only `install_hooks` and `install_skill` ran), and the registry's denied-MCP section was converted back to `### ` headings so a stray `setup` degrades to correct-label-without-URL instead of wiping. **This is a defect in chaos-controller itself and needs fixing upstream.**
- `ADMIN_EMAILS` once contained a literal `\n` (`peter@revelocity.co\n`). `.trim()` removes whitespace, not an escape sequence — proved by running `isAuthorizedAdmin` against the real value, not by reading it.
- PostHog MCP token is **expired**. The registry's `✓ confirmed 2026-06-01` for project 446138 no longer holds; recorded as a verification **failure**, not carried forward as confirmed.
- Measuring a hook's exit code through a `| sed` pipeline reads *sed's* status. An early check appeared to show the `.env` blocker exiting 0 (i.e. not blocking); re-measured without the pipe it is exit 2 on both `.env.local` and `supabase/migrations/*`. The blocker is sound — the first measurement was the artifact.
- The Photos picker needs **no entitlement and raises no TCC prompt**, always transcodes to JPEG regardless of the filter, returns a purge-eligible temp path containing `&` and `=`, and **keeps GPS EXIF**. Any of those assumed the other way would have produced a wrong implementation.

**Worth it / waste of time**

- Worth it: mutation-testing the PII assertion. It is the only reason the leak was found, and the fix moved a guarantee from advisory to structural.
- Worth it: measuring the photo-resize curve instead of trusting an earlier estimate — "under 400 KB at 2048/q80" was wrong by 2.5× (really 1.0 MB).
- Waste of time, self-inflicted: a regex-based revert mangled `route.tsx`, deleting a render block and its `catch`. Recovered via `git show HEAD:…`.
- Worth it: inspecting the adapter before running `setup`. Running it would have silently undone the session's config work.

**Tech debt flagged**

- `/api/inbound` sender spoofing: `is_from_admin` derives from a forgeable `From` header, and there is no SPF/DKIM/DMARC anywhere. Highest-severity known defect, deliberately unfixed.
- `reply_token` is 48-bit and never expires.
- No rate limiting on `/api/contact` or `/api/upload-url` — blocked on a shared-state service decision.
- CSP ships report-only.
- Six neighborhood pages have no `telephone` in their JSON-LD.
- No ownership check on bid-block edits (`src/app/api/admin/bid/blocks/[id]/route.ts`) — low severity at two admins, but the deferral is undocumented.
- `DECISIONS.md` stops at **D36 (2026-09-03)**. Everything after is unlogged.

### MCP & Skill Activity

- **Active per registry:** Supabase (`khioedholasaxemmtooz`) · PostHog (446138) · GitHub · Vercel · Playwright · **context7 (new)**.
- **Steering verified:** none fully. PostHog **FAILED** (token expired, `requires re-authorization`). Supabase **unverified** (needs authentication — and its MCP is retired by decision, so this is a record, not a task). GitHub/Vercel/Playwright carry no `Verify:` instruction.
- **Tool calls observed this session:** PostHog 1 (failed on auth). Supabase MCP 0. These are best-effort counts from visible context; compression may have dropped earlier calls.
- **Activation changes:** `context7` Denied → Active (reversal). Nine denial labels corrected. `deniedMcpServers` + `skillOverrides` relocated from `settings.local.json` to the tracked `settings.json`; `settings.local.json` now holds only `permissions`.
- **Observations, reported not corrected:** eight servers are connected with **no decision on record** — `claude.ai Valyu`, `claude.ai PressRanger`, `claude-design`, `exa`, `tavily`, and three `plugin:deploy-on-aws:*` on a project that deploys to Vercel. Left untouched pending an explicit ruling. *(The Toolhand called Valyu an "authentication platform"; it is a search/knowledge API — it exposes only `authenticate`/`complete_authentication` because it is unauthenticated. Corrected rather than passed through.)*
- **Token cost: unmeasured.** No figure is recorded because none was measured. `/context` is the source; an estimate here would get acted on as if measured.

### PM Notes

**Structure used:** freeform, under `chaos-controller`. Cost/benefit: the three-worker
dispatch kept 188 changed files out of the orchestrator's context, and two of the three
workers returned at least one claim that did not survive verification — which is the
argument for the foreman re-running gates rather than reporting on an agent's word.

**What went well:**
- Three silent-failure classes found in the tooling config, all of which reported success while doing nothing. Each was proved by measurement (`claude mcp list` showing denied servers Connected; a simulated `cd` into a missing path; plugin-skill classification), not by reading config and inferring.
- Safety properties moved from advisory to structural: throw-not-strip projection, factory-not-client auth, reject-unknown-before-auth, propose/set split.
- The 2026-09-14 SEO work holds up: 0 titles over 60 chars (from 115), canonicals 118/118, NAP 63/63 with zero home-address leakage, ~6,400 words of suburb copy recovered that had been prerendering and then being intercepted by a 308.

**What was skipped or unnecessary:**
- The branch test suite was not re-run — a checkout would have raced the running inspectors. Called out as unconfirmed rather than carried as verified.
- The eight undecided MCPs were left connected. Denying them is the user's call, not an inference from the Toolhand's "irrelevant."
- `TODO.md` was not reconciled this session; it is now wrong on five items (see Next time).

**Pivots or disagreements:**
- Disagreed with the Toolhand on `claude.ai Valyu` and corrected the record.
- Disagreed with the Apprentice's "`.env.local.example` is properly .gitignored after commit" — it is **tracked and not ignored**, which is the correct state for a template file; the claim was incoherent, the outcome fine.
- Disagreed with the skill's own adapter, and declined to run `configure_pruning`.

**What structured process would have caught earlier:**
- A denial is not enforced until something *observably stops loading*. Writing the entry and reading it back proves only that the file was written. All three of this session's config failures share that shape, and so do this project's historical ones — `ADMIN_EMAILS` dead for 166 days, a monitor green while the form 500'd, a leak check that passed on failure. The common root is **verifying the artifact instead of the effect**.
- An absolute path in a config file is a time bomb with no alarm. The repo moved; nothing said so.
- Decision logging stopped at D36 while the architecture kept changing. Six significant choices now have reasoning in commit bodies and plans but no entry in the log that is supposed to hold them.

**Claude's assessment:** The strongest part of this session was refusing to accept passing
checks at face value — the PII mutation test, the adapter inspection, and the exit-code
re-measurement each overturned something that looked fine. The weakest was my own
process: I committed while a subagent was running, having told agents not to commit
precisely to avoid index races; my commit staged explicit paths so nothing was swept up,
but I created the risk I had forbidden others from creating. A regex-based revert also
mangled a file that had to be recovered from git. Peter's four rulings at the gate were
decisive and unblocked the config work in one pass; routing them as one tight question
set rather than a running commentary was the right shape.

**Next time:**
1. **Reconcile `TODO.md` first.** It is wrong on five items that are already fixed: business hours (`8c2ee1b`), the `generate-pdf` unchecked UPDATE, the retyped `STATUS_VALUES`, unused `BUSINESS_TELEPHONE`, and three neighborhood pages linking to redirected routes (all `9e798e7`). It also still carries the pre-fix framing of the MCP "zero bearer-token leakage" claim, whose verification method `bfed602` proved incapable of detecting the failure it ruled out.
2. **Write D37+ in `DECISIONS.md` before the cutover lands on `main`:** app-API hosting, session-auth reuse for `/api/app/*`, the usage-metering ledger, Tauri over Electron, the `DataAdapter` abandonment (currently spec-only), Deepgram over cheaper transcription, and the bundle identifier.
3. **Verify effects, not artifacts.** For any denial, gate or hook: name what should stop happening, then confirm it stopped. A written entry is not a working rule.
4. **Fix the `sync_registry_to_settings` wholesale rebuild upstream** — it contradicts `SKILL.md` and can zero a project's denials from a formatting change alone.
5. **Re-auth PostHog and confirm project 446138 before any read or write.** Nothing on this site is measurable yet, and that still gates Project #2 — do not cut form fields by guess.



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
