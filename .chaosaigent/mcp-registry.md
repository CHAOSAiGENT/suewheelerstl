---
file: mcp-registry.md
project: suewheelerstl
updated: 2026-10-10
---

# suewheelerstl — MCP & Skill Steering Registry

**This file is ADVISORY.** It records steering *decisions and the reasons for them*.
`.claude/settings.json` is the enforced record. This file is never used to rebuild that
file wholesale — a decision here produces a *targeted* edit there.

> Corrected 2026-10-10. The previous header claimed "`.claude/settings.local.json` is
> generated from this file". That was the pre-2026-08-24 model and is retired. The two
> sides also count different units: a heading here is one **decision**; an entry in
> `settings.json` is one **transport identifier**. Never subtract one total from the other.

As of 2026-10-10 both `deniedMcpServers` and `skillOverrides` live in the tracked
`.claude/settings.json`. `.claude/settings.local.json` now holds only `permissions`.

Stack: Next.js 15 · Supabase (Postgres + SSR auth) · PostHog analytics · Resend email.
Growing: Tauri v2 desktop companion (branch `chore/monorepo-apps-site`), React Native later.

## Active MCPs

### Supabase
- Context: project `khioedholasaxemmtooz` (suewheelerstl DB)
- Steer: none — Supabase MCP tools take `project_id` per call; no global switch.
- Verify: `list_projects` includes `khioedholasaxemmtooz`.
  **⚠ 2026-10-10: UNVERIFIED — `plugin:supabase:supabase` reports "Needs authentication".**
  Note the standing project decision: the Supabase **MCP is retired**; Peter uses the
  `supabase` CLI. Do not re-open "re-auth the MCP". This entry is kept for the record,
  not as a task.
- Skills: supabase, supabase-postgres-best-practices

### PostHog
- Context: project "SueWheeler" (id `446138`), org `CHAOSAiGENT`
- Steer: ensure active project = 446138, org = CHAOSAiGENT. **Never WrapShot (415679).**
- Verify: session reports active project 446138 / org CHAOSAiGENT.
  **⚠ 2026-10-10: VERIFICATION FAILED — token expired.** `exec` returned
  `requires re-authorization (token expired)`; `claude mcp list` shows both
  `claude.ai PostHog` and `plugin:posthog:posthog` as "Needs authentication".
  The previous `✓ confirmed 2026-06-01` no longer holds. **Re-auth before trusting any
  PostHog read, and re-confirm the project is 446138 before any write.**
- Skills (core only — see Denied Skills): querying-posthog-data, exploring-live-traffic,
  exploring-autocapture-events, investigate-metric, instrument-product-analytics,
  feature-usage-feed, formatting-insight-axes, managing-path-cleaning-rules

### context7  *(activated 2026-10-10 — reversal)*
- Context: library/framework docs lookup
- Steer: none
- Verify: none
- Was denied ("deselected during steer setup"). **Reversed** because the project is moving
  into Tauri v2 and React Native, where current docs matter more than they did for a
  settled Next.js site.
- **Plugin** (`context7@claude-plugins-official`, enabled at user scope). Its skills are
  plugin skills — `skillOverrides` cannot reach them; use `/plugin` or `enabledPlugins`.
- Enforced as: entry **removed** from `deniedMcpServers` in `.claude/settings.json`.

### GitHub
- Context: repo `CHAOSAiGENT/suewheelerstl`
- Steer: none · Verify: none

### Vercel
- Context: deploy host for this Next.js site (deploy + runtime/build logs)
- Steer: none · Verify: none

### Playwright
- Context: browser e2e — driving the live contact form for verification
- Steer: none · Verify: none

## Active Skills (standalone — not MCP-associated)

Left at session defaults: superpowers:*, chaos-controller, frontend-design, git-commit,
memory-management, and the project skills (supabase-migration, email-preview,
deep-research). Not managed by the deny config below.

## Denied MCPs

**Labels corrected 2026-10-10.** Every entry below previously used a label that did not
match the running server, so **nine denials silently never applied** — the entry was
written, the server kept loading, and the report said "denied". `deniedMcpServers`
matches the user-assigned label *verbatim*. Remote servers now also carry `serverUrl`
and stdio servers `serverCommand`, which survive a rename.

> **Format note — deliberate, do not "tidy" into a table.** Each denial below is an
> `### ` heading because `adapters/claude-code.sh` → `sync_registry_to_settings()` extracts
> them with `grep "^### "`. A table parses to **zero** entries, and that function then
> writes `deniedMcpServers = []` — wiping every denial, silently. Headings degrade safely
> instead: a stray `setup` rebuilds correct `serverName` values and merely loses the
> `serverUrl`/`serverCommand` fields. See the adapter defect noted in the session log for
> 2026-10-10.

### claude.ai Canva
- Reason: design tool — not used by this site
- Enforced as: `serverName` + `serverUrl` (`https://mcp.canva.com/mcp`)

### claude.ai Excalidraw
- Reason: diagramming — not used
- Enforced as: `serverName` + `serverUrl` (`https://mcp.excalidraw.com/mcp`)

### claude.ai Figma
- Reason: design tool — not used
- Enforced as: `serverName` + `serverUrl` (`https://mcp.figma.com/mcp`)

### claude.ai Gmail
- Reason: productivity — not used
- Enforced as: `serverName` + `serverUrl` (`https://gmailmcp.googleapis.com/mcp/v1`)

### claude.ai Google Calendar
- Reason: productivity — not used
- Enforced as: `serverName` + `serverUrl` (`https://calendarmcp.googleapis.com/mcp/v1`)

### claude.ai Google Drive
- Reason: productivity — not used
- Enforced as: `serverName` + `serverUrl` (`https://drivemcp.googleapis.com/mcp/v1`)

### claude.ai Hugging Face
- Reason: ML — not used
- Enforced as: `serverName` + `serverUrl` (`https://huggingface.co/mcp`)

### agentation
- Reason: annotation — not used
- Enforced as: `serverName` + `serverCommand` (`npx -y agentation-mcp server`)

### Notion
- Reason: productivity — not used. **Not installed on this machine — moot.**

### stitch
- Reason: design generation — not used. **Not installed — moot.**

### cloudflare-api
- Reason: infra — site runs on Vercel, not Cloudflare. **Not installed — moot.**

### cloudflare-bindings
- Reason: infra — not used. **Not installed — moot.**

### cloudflare-builds
- Reason: infra — not used. **Not installed — moot.**

### cloudflare-docs
- Reason: infra — not used. **Not installed — moot.**

### cloudflare-observability
- Reason: infra — not used. **Not installed — moot.**

## Connected but undecided — needs a ruling

Observed via `claude mcp list` on 2026-10-10. Present in neither Active nor Denied, so no
decision exists for them. **Left untouched pending an explicit ruling.**

| Server | Toolhand read |
|---|---|
| `claude.ai Valyu` | irrelevant — search/knowledge API. (The Toolhand called it an "authentication platform"; that was wrong — it exposes only `authenticate`/`complete_authentication` because it is unauthenticated.) |
| `claude.ai PressRanger` | irrelevant — press-release distribution |
| `claude-design` | irrelevant — design surface; the design MCPs are already denied |
| `exa` | irrelevant — web search |
| `tavily` | irrelevant — web search |
| `plugin:deploy-on-aws:awsiac` | irrelevant — CloudFormation/CDK; this deploys to Vercel |
| `plugin:deploy-on-aws:awsknowledge` | irrelevant — AWS docs |
| `plugin:deploy-on-aws:awspricing` | irrelevant — AWS pricing |

## Denied Skills

**⚠ These 53 entries are CARRIED, NOT ENFORCED**

<!-- Intentionally NOT an "### " heading: sync_registry_to_settings() greps for "^### "
     under this section, so a heading here becomes a junk skillOverrides key. -->


**Found 2026-10-10.** All 53 `skillOverrides` keys are colon-prefixed — they are **plugin**
skills. `skillOverrides` does not affect plugin skills (they are managed through
`/plugin`). So every entry below was written, took effect on nothing, and reported
success. They were moved to `.claude/settings.json` with the MCP denials for consistency
of record, **not because moving them makes them work.**

**The "keep core analytics only" intent is not achievable with these mechanisms.** The 43
`posthog:*` denials cannot be applied selectively, and disabling the `posthog` plugin
wholesale would also remove the 8 PostHog skills the Active list wants to keep. An
explicit ruling is needed: accept all 51 PostHog skills loaded, or disable the plugin and
lose the 8. **Do not report these as denied.**

The 10 `cloudflare:*` entries are moot on a second count — no cloudflare plugin is
installed on this machine.

Cloudflare family (infra not used — not installed, moot):
cloudflare:build-agent, cloudflare:build-mcp, cloudflare:agents-sdk,
cloudflare:cloudflare, cloudflare:cloudflare-email-service,
cloudflare:durable-objects, cloudflare:sandbox-sdk, cloudflare:web-perf,
cloudflare:workers-best-practices, cloudflare:wrangler

PostHog heavy families (intent: keep core analytics only — **unenforced, see above**):
posthog:llma-cc-ingest, posthog:llma-cc-setup, posthog:llma-cc-status,
posthog:analyzing-experiment-session-replays, posthog:auditing-experiments-flags,
posthog:auditing-warehouse-data-health, posthog:authoring-log-alerts,
posthog:cleaning-up-stale-feature-flags, posthog:configuring-experiment-analytics,
posthog:configuring-experiment-rollout, posthog:copying-flags-across-projects,
posthog:creating-experiments, posthog:debugging-local-replay,
posthog:diagnosing-experiment-results, posthog:diagnosing-failed-warehouse-syncs,
posthog:diagnosing-missing-recordings, posthog:diagnosing-sdk-health,
posthog:diagnosing-stacktrace-symbolication, posthog:exploring-apm-traces,
posthog:exploring-llm-clusters, posthog:exploring-llm-costs,
posthog:exploring-llm-evaluations, posthog:exploring-llm-traces,
posthog:finding-deleted-feature-flags, posthog:finding-experiments,
posthog:finding-replay-for-issue, posthog:inbox-exploration,
posthog:instrument-error-tracking, posthog:instrument-feature-flags,
posthog:instrument-integration, posthog:instrument-llm-analytics,
posthog:instrument-logs, posthog:investigating-replay,
posthog:managing-experiment-lifecycle, posthog:managing-subscriptions,
posthog:planning-user-interviews, posthog:setting-up-a-data-warehouse-source,
posthog:signals, posthog:skills-store, posthog:suggesting-data-imports,
posthog:triaging-visual-review-runs, posthog:tuning-incremental-sync-config,
posthog:working-with-skills

## Token cost

**Unmeasured.** No per-server or per-skill figure is recorded here because none was
measured. Read real numbers from `/context` before quoting any savings — an estimated
figure gets acted on as if it were measured.
