---
file: mcp-registry.md
project: suewheelerstl
updated: 2026-06-01
---

# suewheelerstl — MCP & Skill Steering Registry

Source of truth for which MCPs/skills are steered for this project.
`.claude/settings.local.json` is generated from this file. After edits, run
`/reload-plugins` to apply within the current session.

Stack: Next.js 15 · Supabase (Postgres + SSR auth) · PostHog analytics · Resend email.

## Active MCPs

### Supabase
- Context: project `khioedholasaxemmtooz` (suewheelerstl DB)
- Steer: none — Supabase MCP tools take `project_id` per call; no global switch.
- Verify: `list_projects` includes `khioedholasaxemmtooz` (ACTIVE_HEALTHY). ✓ confirmed 2026-06-01
- Skills: supabase, supabase-postgres-best-practices

### PostHog
- Context: project "SueWheeler" (id `446138`), org `CHAOSAiGENT`
- Steer: ensure active project = 446138, org = CHAOSAiGENT (switch-project / switch-organization if drifted)
- Verify: session reports active project 446138 / org CHAOSAiGENT. ✓ confirmed 2026-06-01
- Skills (core only — see Denied Skills for the trimmed families):
  querying-posthog-data, exploring-live-traffic, exploring-autocapture-events,
  investigate-metric, instrument-product-analytics, feature-usage-feed,
  formatting-insight-axes, managing-path-cleaning-rules

### GitHub
- Context: repo `CHAOSAiGENT/suewheelerstl`
- Steer: none
- Verify: none

### Vercel
- Context: deploy host for this Next.js site (deploy + runtime/build logs)
- Steer: none
- Verify: none

### Playwright
- Context: browser e2e — driving the live contact form for verification
- Steer: none
- Verify: none

## Active Skills (standalone — not MCP-associated)

Left at session defaults: superpowers:*, chaos-controller, frontend-design,
git-commit, memory-management, and the project skills (supabase-migration,
email-preview, deep-research). These are not managed by the deny config below.

## Denied MCPs

| MCP | Reason |
|-----|--------|
| Canva | design tool — not used by this site |
| Excalidraw | diagramming — not used |
| Figma | design tool — not used |
| stitch | design generation — not used |
| Gmail | productivity — not used |
| Google_Calendar | productivity — not used |
| Google_Drive | productivity — not used |
| Notion | productivity — not used |
| Hugging_Face | ML — not used |
| context7 | docs lookup — deselected during steer setup |
| agentation-mcp | annotation — not used |
| cloudflare-api | infra — site runs on Vercel, not Cloudflare |
| cloudflare-bindings | infra — not used |
| cloudflare-builds | infra — not used |
| cloudflare-docs | infra — not used |
| cloudflare-observability | infra — not used |

## Denied Skills

Cloudflare family (infra not used):
cloudflare:build-agent, cloudflare:build-mcp, cloudflare:agents-sdk,
cloudflare:cloudflare, cloudflare:cloudflare-email-service,
cloudflare:durable-objects, cloudflare:sandbox-sdk, cloudflare:web-perf,
cloudflare:workers-best-practices, cloudflare:wrangler

PostHog heavy families (kept core analytics only — see Active PostHog skills):
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
