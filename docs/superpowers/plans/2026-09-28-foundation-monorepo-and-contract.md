# Foundation: Monorepo + API Contract — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure this repo into a pnpm monorepo without breaking the live site, then expose the existing 11-tool CRM layer as a versioned HTTP API that a desktop app and a mobile app can both consume.

**Architecture:** The Next.js site moves from the repo root to `apps/site`. A new `packages/contract` holds the types and Zod schemas both the server and future clients share. New routes under `apps/site/src/app/api/app/*` wrap the existing tool functions with session auth and per-call usage metering. No client is built in this plan — the deliverable is a live, authenticated, metered API you can exercise with `curl`.

**Tech Stack:** pnpm 9.15.0 workspaces (no Turborepo), Next.js 15.5.19, Supabase Auth, Vitest, Vercel.

**Spec:** `docs/superpowers/specs/2026-09-27-companion-desktop-app-design.md`

**Out of scope:** the Tauri app, the keychain command, voice transcription, photo capture, bid drafting. Plans 2 and 3.

---

## Before you start

Current state, verified 2026-09-28:
- `main` is clean, 212 tests passing, `tsc` exit 0, `next build` exit 0.
- The site deploys to Vercel project `prj_vXvzGgU1FXJBIa2fuCVy9oM987hJ` (org `chaosaigent`) from the repo **root** on push to `main`.
- `SUPABASE_DB_URL` **is set in Vercel Production**, so `prebuild` → `test:schema` runs against the live database on every production build. It is not self-skipping there.
- `ssoProtection` is on for all preview URLs.

Read `docs/MCP.md` and `src/lib/mcp/projection.ts` before Task 6.

---

## File structure

| Path | Responsibility |
|---|---|
| `pnpm-workspace.yaml` | Workspace membership |
| `package.json` (root) | Workspace root; delegating scripts for hooks and CI; pins pnpm |
| `apps/site/**` | The existing Next.js app, moved wholesale |
| `packages/contract/src/tools.ts` | Tool name union + per-tool input/output types |
| `packages/contract/src/index.ts` | Public surface |
| `apps/site/src/app/api/app/tools/[name]/route.ts` | The tool dispatch endpoint |
| `apps/site/src/app/api/app/me/route.ts` | Identity + entitlements |
| `apps/site/src/lib/app-api/auth.ts` | Session verification + allowlist for the `/api/app` surface |
| `apps/site/src/lib/app-api/meter.ts` | Usage recording |
| `supabase/migrations/…_usage_events.sql` | The metering table |

`packages/contract` holds **types and schemas only** — no runtime dependency on Supabase, so a client can import it without pulling a database driver.

---

## PHASE 1 — MONOREPO

Production is protected throughout by one property: **a failed Vercel build never replaces the live deployment.** The ordering below deliberately routes every likely failure into a build failure rather than a runtime one.

### Task 1: Record the state you cannot see

**Files:** none — this is a read.

- [ ] **Step 1: Record the Vercel build settings**

Dashboard → Project → Settings → Build and Deployment. Write down all seven verbatim:
Root Directory (and whether a **Skip deployment** toggle is present), Framework Preset, Build Command + whether Override is on, Output Directory + Override, Install Command + Override, Node.js Version.

**If Root Directory is already non-empty, STOP.** This plan assumes it is unset, and a non-empty value means someone has already restructured something.

- [ ] **Step 2: Record the rollback target**

```bash
npx vercel list --prod
```
Expected: a list of production deployments. Record the ID of the current `READY` one. This is what you roll back to in an emergency.

- [ ] **Step 3: Confirm you can create a second project on this repo**

Vercel limits projects-per-repository by plan. Task 3 needs one throwaway project against this same repo.
Expected: you can add one more. If not, Task 3 needs a different approach and you should stop and re-plan.

---

### Task 2: Build the branch

**Files:** nearly all of them — this is the move.

- [ ] **Step 1: Branch**

```bash
git switch -c chore/monorepo-apps-site
```

- [ ] **Step 2: Move with `git mv` only**

```bash
mkdir -p apps/site
git mv src public private certs content supabase apps/site/
git mv next.config.ts tsconfig.json postcss.config.mjs package.json apps/site/
git mv .env.local.example apps/site/.env.local.example
```

**`git mv` is not a style preference here.** `.env.local.example` is tracked but matched by a global `.gitignore` rule (`.env.*`). Tested behaviour:

| Command | Result |
|---|---|
| `git mv` | exit 0, staged as rename, **file preserved** |
| `mv` + `git add` | exit 1, "ignored by one of your .gitignore files" |
| `mv` + `git add -A` | stages `D .env.local.example` only — **file silently destroyed** |

- [ ] **Step 3: Verify nothing was dropped**

```bash
git status --porcelain | grep -c '^R ' && git status --porcelain | grep '^D ' || echo "no unpaired deletions"
git ls-files apps/site/.env.local.example
```
Expected: rename entries present, **no `D` lines without a matching `R`**, and the second command **prints the path**. If it prints nothing, the ignored-but-tracked file was dropped — recover it before committing.

- [ ] **Step 4: Move `.env.local` by hand**

`.env.local` is untracked and holds real secrets. A PreToolUse hook blocks agents from touching `.env*`, so **Peter runs this**:
```bash
mv .env.local apps/site/.env.local
```
Expected: `ls apps/site/.env.local` succeeds.

- [ ] **Step 5: Confirm what stays at the root**

These must NOT move: `.github/`, `scripts/`, `docs/`, `.chaosaigent/`, `tasks/`, `skills/`, `skills-lock.json`, `training-video/`, `TODO.md`, `README.md`, `CLAUDE.md`, `.gitignore`, and **`.claude/` together with `.agents/`**.

```bash
ls -l .claude/skills | head -3
test -e .claude/skills/ai-seo && echo "symlink target resolves"
```
Expected: entries show `-> ../../.agents/skills/…` and the target resolves. `.claude/skills/` holds **36 symlinks** two levels up into `.agents/`; splitting them dangles every one and git commits the broken targets.

- [ ] **Step 6: Create `pnpm-workspace.yaml`**

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

- [ ] **Step 7: Create the root `package.json`**

```json
{
  "name": "suewheelerstl-monorepo",
  "private": true,
  "packageManager": "pnpm@9.15.0",
  "scripts": {
    "typecheck": "pnpm --filter ./apps/site typecheck",
    "test:schema": "pnpm --filter ./apps/site test:schema",
    "test": "pnpm --filter ./apps/site test && vitest run",
    "setup:hooks": "git config core.hooksPath scripts/hooks"
  },
  "devDependencies": {
    "vitest": "^4.1.8"
  }
}
```

`packageManager` is pinned deliberately. Vercel maps `lockfileVersion: 9.0` to "pnpm 9 **or** 10", and **pnpm 10 skips dependency lifecycle scripts by default**. This repo runs two: `sharp` (a dependency of `next` itself) and `protobufjs` (via `posthog-js`). Silently skipping them produces a broken build that looks fine.

`setup:hooks` moves here from the site's `package.json` so `core.hooksPath scripts/hooks` resolves unambiguously from the repo root.

- [ ] **Step 8: Give the site package a unique name**

Edit `apps/site/package.json` — set `"name": "suewheelerstl-site"`. Vercel's monorepo build-skipping requires a unique `name` per workspace package.

- [ ] **Step 9: Split the vitest configs**

`apps/site/vitest.config.ts` keeps its `@` alias unchanged (it is `import.meta.url`-relative and travels with the file), and narrows its include:
```ts
include: ["src/**/*.test.ts"],
```

New root `vitest.config.ts`:
```ts
import { defineConfig } from "vitest/config";

// The monitor scripts live at the repo root, outside any app. They import only
// Node built-ins, so they need no alias and no app context.
export default defineConfig({
  test: {
    include: ["scripts/**/*.test.mjs"],
  },
});
```

- [ ] **Step 10: Convert the lockfile**

```bash
cd apps/site && pnpm import && rm package-lock.json && cd ../..
pnpm install
```

- [ ] **Step 11: Verify the lockfile landed correctly**

```bash
head -1 pnpm-lock.yaml
grep -A3 '^importers:' pnpm-lock.yaml
find . -name package-lock.json -not -path './node_modules/*'
```
Expected: `lockfileVersion: '9.0'`; `importers:` lists `apps/site`; **no `package-lock.json` anywhere**. The install log should show `sharp` and `protobufjs` build scripts running — if it does not, pnpm 10 was used and the pin did not take.

- [ ] **Step 12: Update the invokers**

`scripts/hooks/pre-push` lines 8 and 11 — change `npm run` to `pnpm run`.

`.github/workflows/schema-drift.yml` — add `pnpm/action-setup`, change `cache: npm` to `cache: pnpm`, `npm ci` to `pnpm install --frozen-lockfile`, `npm run` to `pnpm run`, and align `node-version` to `22` (it currently pins 20 while Vercel runs 24.x).

**`.github/workflows/form-monitor.yml` needs no change** — it runs `node scripts/monitor/check.mjs` and `scripts/` stayed at the root.

- [ ] **Step 13: Verify no npm invocations remain**

```bash
grep -rn 'npm ci\|npm run' .github/ scripts/hooks/
```
Expected: no output.

- [ ] **Step 14: Full local gate**

```bash
pnpm run typecheck
pnpm --filter ./apps/site test
pnpm vitest run
cd apps/site && pnpm run build && cd ..
```

Expected: typecheck clean. **212 tests pass**, and specifically:
- `src/app/admin/guide/__tests__/route.test.ts` passes — it uses `process.cwd()` with an unmocked `readFileSync`, so it only passes if cwd is `apps/site`. Running `vitest` from the repo root would fail it.
- `src/lib/__tests__/schema-drift.test.ts` passes — it resolves `../../../certs/supabase-prod-ca-2021.crt`, which only works because `certs/` moved with `src/`.

The build log must show `prebuild` running `test:schema` before `next build`.

- [ ] **Step 15: Confirm you did NOT touch the file-tracing config**

```bash
grep -A3 outputFileTracingIncludes apps/site/next.config.ts
```
Expected: still `"/admin/guide": ["./private/sue-admin-guide.html"]`, unchanged.

Next resolves include globs from the folder containing `next.config.ts` — so `private/` moving with the app means the string needs no edit. **The trap is the monorepo reflex of setting `outputFileTracingRoot` to the repo root**, which shifts the trace root and puts `cwd + "private"` somewhere that does not exist. Do not set it.

- [ ] **Step 16: Commit and push the branch. Do not touch `main`.**

```bash
git add -A -- ':!.env.local'
git commit -m "chore: restructure into a pnpm monorepo with the site at apps/site"
git push -u origin chore/monorepo-apps-site
```

---

### Task 3: Validate on a throwaway project

**A branch preview on the live project cannot validate this.** Root Directory is a *project-level* setting, so a preview there would still build at the repo root and fail, proving nothing.

- [ ] **Step 1: Create the probe project**

New Vercel project, e.g. `suewheelerstl-monorepo-probe`, same GitHub repo. **Root Directory = `apps/site`**. Framework Preset = Next.js. Install and Build on auto-detect. Set its **Production Branch to `chore/monorepo-apps-site`**.

- [ ] **Step 2: Give it the env it needs, in Production**

At minimum: `SUPABASE_DB_URL`, `ADMIN_EMAILS`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`, `RESEND_API_KEY`, and `ENABLE_EXPERIMENTAL_COREPACK=1`.

Deploying the branch as this project's **production** (not preview) is deliberate: `ADMIN_EMAILS` is missing from the real project's Preview environment, so admin routes fail closed there and the decisive check in Step 4 would be unperformable.

- [ ] **Step 3: Deploy and read the log**

Expected: build succeeds. In the log, confirm **which pnpm version** was used, that `sharp` and `protobufjs` build scripts ran, and that `prebuild`/`test:schema` ran green against the live database.

- [ ] **Step 4: The decisive check — `/admin/guide`**

This is the only failure that can survive a fully green build. `apps/site/src/app/admin/guide/route.ts` reads `path.join(process.cwd(), "private", "sue-admin-guide.html")` at runtime; a broken trace 500s in production only.

Enable Protection Bypass for Automation on the probe, then:
```bash
curl -sS -D- -o /tmp/guide.html \
  -H "x-vercel-protection-bypass: $BYPASS_SECRET" \
  "https://<probe-url>/admin/guide" | head -5
wc -c /tmp/guide.html
```

Expected: **HTTP 200**, `Content-Type: text/html`, and **roughly 1,505,105 bytes**.

**Byte length is the measurement, not the status code.** The route redirects to `/admin/login` on an auth failure and 500s on a trace miss; only the size proves the 1.4 MB file actually shipped. (You will need an allowlisted admin session for a true 200 — if you get a 307 to login, that means the route and trace are fine and only auth is missing, which is an acceptable partial pass. A 500 is a fail.)

- [ ] **Step 5: Spot-check the rest**

```bash
curl -sI "https://<probe-url>/" | head -1
curl -sS "https://<probe-url>/sitemap.xml" | grep -c "<loc>"
curl -sI "https://<probe-url>/architectural-woodwork-refinishing" | grep -i location
```
Expected: 200; **105** `<loc>` entries; a **308** to `/built-ins-and-millwork-refinishing`.

- [ ] **Step 6: Only proceed if Step 4 passed.** Otherwise fix on the branch and repeat. The live site has not been touched and cannot be.

---

### Task 4: Cut over production

- [ ] **Step 1: Merge to `main` and push — and expect the build to FAIL**

```bash
git switch main && git merge --no-ff chore/monorepo-apps-site && git push
```

Expected: the Vercel deployment shows **Error**, because Root Directory is still the repo root and there is no longer a `package.json` there.

**Verify the live site is unaffected, by fetching it — not by reading the dashboard:**
```bash
curl -sI https://suewheelerstl.com/ | head -1
```
Expected: `200`. Vercel never promotes a failed build, so the previous deployment is still serving. **This failure is the safety mechanism, not an incident.**

Push-first is deliberate: flipping Root Directory *before* the push would mean any unrelated redeploy in the gap builds an `apps/site` that does not yet exist — turning a controlled failure into an uncontrolled window.

- [ ] **Step 2: Flip Root Directory**

Dashboard → Settings → Build and Deployment → **Root Directory = `apps/site`** → Save. Leave Framework Preset, Build Command, Output Directory and Install Command exactly as recorded in Task 1. Add `ENABLE_EXPERIMENTAL_COREPACK=1` to the project env.

Expected: the field reads `apps/site` after a page reload, and nothing else changed.

- [ ] **Step 3: Redeploy the merge commit**

Deployments → ⋮ on the failed deployment → Redeploy. **Do not push an empty commit** — you want the same commit built under the new setting.

Expected: build succeeds.

- [ ] **Step 4: Verify production, measuring the perceived thing in each case**

```bash
curl -sI https://suewheelerstl.com/ | head -1
curl -sS https://suewheelerstl.com/sitemap.xml | grep -c "<loc>"
curl -sI https://suewheelerstl.com/architectural-woodwork-refinishing | grep -i location
curl -sI https://suewheelerstl.com/ | grep -iE "referrer-policy|x-frame-options|content-security"
curl -sS https://suewheelerstl.com/ | grep -c "tailwind\|class="
```

Expected: 200; 105 `<loc>`; a 308 redirect; all three security headers present; and the homepage **rendering styled** — an unstyled page is the signature of a Tailwind `@source` resolution miss.

Then, signed in as an allowlisted admin in a browser: `/admin/guide` loads the document.

Because the site is mid-SEO-recovery, the redirect and sitemap checks are not optional — a silently dropped redirect chain undoes recovered work without erroring.

- [ ] **Step 5: Re-arm local tooling**

```bash
pnpm run setup:hooks
git config core.hooksPath
```
Expected: prints `scripts/hooks`. Then make a throwaway commit and push to confirm `pre-push` fires and passes.

- [ ] **Step 6: Verify the alerting path**

Manually dispatch the `form-monitor` workflow (`workflow_dispatch`).
Expected: green, reporting the live endpoint healthy. Do not wait six hours to discover the monitor broke.

- [ ] **Step 7: Delete the probe project.**

### Rollback

- **Step 1 build fails** → that is the plan. Continue to Step 2.
- **Step 3 fails to build** → production is untouched. Fix forward on a branch and repeat Task 3, or revert Root Directory to empty and `git revert` the merge. No urgency.
- **Step 3 builds but Step 4 finds production broken** → the only real incident, ~30 seconds to reverse:
  1. Dashboard → **Instant Rollback** → the deployment ID from Task 1 Step 2 → Confirm. Domains re-point instantly, no rebuild. **Leave Root Directory set to `apps/site`** — the rolled-back deployment is already built.
  2. **Verify perceptually:** `curl` the site and the broken route and confirm old behaviour is back. Do not trust the dashboard badge.
  3. **Auto-assignment of production domains is now OFF.** Pushes to `main` will not go live until you Undo Rollback or `vercel promote <id>`.
  4. Note env vars are *not* rolled back.

If `/admin/guide` is the only breakage, consider whether a rollback is warranted at all — it is an admin-only document, and rolling back disables production auto-deploy, which is a larger operational cost than a broken admin route for an hour.

---

## PHASE 2 — THE CONTRACT

### Task 5: `packages/contract`

**Files:**
- Create: `packages/contract/package.json`, `tsconfig.json`, `src/index.ts`, `src/tools.ts`

- [ ] **Step 1: Scaffold the package**

`packages/contract/package.json`:
```json
{
  "name": "@suewheelerstl/contract",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "dependencies": {
    "zod": "^4.2.0"
  }
}
```

Shipped as raw TypeScript, which means `apps/site/next.config.ts` needs `transpilePackages: ["@suewheelerstl/contract"]`. Add it.

- [ ] **Step 2: Define the tool surface**

`packages/contract/src/tools.ts`:
```ts
/**
 * The names a client may call, and nothing else.
 *
 * This list is the API contract's outermost boundary: the dispatch route rejects
 * anything not on it BEFORE touching auth or the database, so a typo or a probe
 * never reaches the tool layer. It is deliberately a hand-written union rather
 * than a derived one — adding a tool to the server should be a conscious decision
 * to expose it, not a side effect of creating a file.
 */
export const TOOL_NAMES = [
  "search_leads",
  "get_lead",
  "get_pipeline",
  "search_copyblocks",
  "create_lead",
  "add_note",
  "create_bid_blocks",
  "update_lead",
  "update_bid_blocks",
  "propose_bid_amount",
  "set_bid_amount",
] as const;

export type ToolName = (typeof TOOL_NAMES)[number];

export function isToolName(value: unknown): value is ToolName {
  return typeof value === "string" && (TOOL_NAMES as readonly string[]).includes(value);
}
```

`packages/contract/src/index.ts`:
```ts
export { TOOL_NAMES, isToolName, type ToolName } from "./tools";
```

- [ ] **Step 3: Verify the workspace link resolves**

```bash
pnpm install
pnpm --filter ./apps/site exec node -e "console.log(require.resolve('@suewheelerstl/contract/package.json'))"
```
Expected: a path inside `packages/contract`.

- [ ] **Step 4: Commit**

```bash
git add packages pnpm-lock.yaml apps/site/next.config.ts
git commit -m "feat(contract): add @suewheelerstl/contract with the tool-name surface"
```

---

### Task 6: The metering table

**Files:**
- Create: `apps/site/supabase/migrations/20260928_usage_events.sql`
- Modify: `apps/site/src/lib/db-contract.ts`

- [ ] **Step 1: Write the migration**

```sql
-- Usage accounting for the app API. Written in the same request as the work it
-- describes, never reconstructed from provider invoices afterwards: you cannot
-- bill for a period you were not recording.
--
-- `client_id` is also the seam for per-device attribution when the mobile app
-- lands — same column, no migration.
create table if not exists public.usage_events (
  id             bigserial primary key,
  occurred_at    timestamptz not null default now(),
  user_email     text        not null,
  client_id      text        not null,
  tool_name      text        not null,
  outcome        text        not null check (outcome in ('ok','error')),
  duration_ms    integer     not null,
  model          text,
  input_tokens   integer,
  output_tokens  integer,
  provider_cost_usd numeric(12,6)
);

create index if not exists usage_events_occurred_at_idx on public.usage_events (occurred_at desc);
create index if not exists usage_events_user_idx        on public.usage_events (user_email, occurred_at desc);

alter table public.usage_events enable row level security;
-- No policies: every write goes through the service-role client in the route
-- handler, which bypasses RLS. Enabling it with no policy closes anon and
-- authenticated access without affecting the app.
```

- [ ] **Step 2: Apply it**

```bash
cd apps/site && npx supabase db push
```
Expected: the migration applies. If the Supabase CLI is not linked, link it first — the Supabase MCP is retired on this project, the CLI is the tool.

- [ ] **Step 3: Add the table to the drift contract**

In `apps/site/src/lib/db-contract.ts`, add to `REQUIRED_COLUMNS`:
```ts
  usage_events: [
    "id",
    "occurred_at",
    "user_email",
    "client_id",
    "tool_name",
    "outcome",
    "duration_ms",
    "model",
    "input_tokens",
    "output_tokens",
    "provider_cost_usd",
  ],
```

- [ ] **Step 4: Verify against the live database**

```bash
cd apps/site && SUPABASE_DB_URL="$(grep '^SUPABASE_DB_URL=' .env.local | cut -d= -f2-)" pnpm run test:schema
```
Expected: the drift test **runs** (does not skip) and passes. If it skips, `SUPABASE_DB_URL` is not set locally and you must verify another way before proceeding — an unrun assertion is not a safety net.

- [ ] **Step 5: Commit**

```bash
git add apps/site/supabase/migrations apps/site/src/lib/db-contract.ts
git commit -m "feat(meter): add usage_events, covered by the schema drift gate"
```

---

### Task 7: Auth for the `/api/app` surface

**Files:**
- Create: `apps/site/src/lib/app-api/auth.ts`
- Test: `apps/site/src/lib/app-api/__tests__/auth.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect, vi, beforeEach } from "vitest";
import { authorizeAppRequest } from "../auth";

function req(headers: Record<string, string> = {}) {
  return new Request("https://example.test/api/app/tools/get_pipeline", { headers });
}

function stubSupabase(user: { email: string } | null) {
  return {
    auth: { getUser: vi.fn(async () => ({ data: { user }, error: null })) },
  };
}

describe("authorizeAppRequest", () => {
  beforeEach(() => vi.stubEnv("ADMIN_EMAILS", "sue@suewheelerstl.com"));

  it("rejects a request with no Authorization header without calling Supabase", async () => {
    const sb = stubSupabase(null);
    const r = await authorizeAppRequest(req(), sb as never);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe(401);
    expect(sb.auth.getUser).not.toHaveBeenCalled();
  });

  it("rejects a token Supabase does not recognise", async () => {
    const sb = stubSupabase(null);
    const r = await authorizeAppRequest(req({ authorization: "Bearer bad" }), sb as never);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe(401);
  });

  it("rejects an authenticated user who is not allowlisted, with 403 not 401", async () => {
    // 403, because re-authenticating will never help. A 401 would send them
    // round the OAuth loop forever.
    const sb = stubSupabase({ email: "stranger@example.com" });
    const r = await authorizeAppRequest(req({ authorization: "Bearer good" }), sb as never);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe(403);
  });

  it("accepts an allowlisted user and returns the normalized email", async () => {
    const sb = stubSupabase({ email: "Sue@SueWheelerSTL.com" });
    const r = await authorizeAppRequest(req({ authorization: "Bearer good" }), sb as never);
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.email).toBe("sue@suewheelerstl.com");
  });

  it("denies everyone when ADMIN_EMAILS is unset — fails closed", async () => {
    vi.stubEnv("ADMIN_EMAILS", "");
    const sb = stubSupabase({ email: "sue@suewheelerstl.com" });
    const r = await authorizeAppRequest(req({ authorization: "Bearer good" }), sb as never);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe(403);
  });
});
```

- [ ] **Step 2: Run it and confirm it fails**

```bash
cd apps/site && pnpm exec vitest run src/lib/app-api/__tests__/auth.test.ts
```
Expected: FAIL — `Cannot find module '../auth'`

- [ ] **Step 3: Implement**

```ts
/**
 * Authorization for the /api/app surface.
 *
 * Clients send a Supabase session JWT as a Bearer token — the same session the
 * admin web UI already issues via Google sign-in. That is deliberate: it means
 * the desktop and mobile apps need no second credential and, critically, do not
 * wait on the MCP OAuth work.
 *
 * The allowlist decision is delegated to isAuthorizedAdmin() rather than
 * reimplemented. Two parallel authorization policies drift apart, and that drift
 * is what left this CRM open to any Google account until 2026-09-03.
 *
 * NOTE ON SCOPES: Supabase OAuth scopes do NOT restrict database access — a
 * token carries the user's full RLS privileges. Any per-client limit has to be
 * expressed here or in RLS, never assumed from a scope.
 */

import type { SupabaseClient } from "@supabase/supabase-js";
import { isAuthorizedAdmin } from "@/lib/auth/admin-guard";

export type AppAuthResult =
  | { ok: true; email: string }
  | { ok: false; status: 401 | 403; error: string };

export async function authorizeAppRequest(
  request: Request,
  supabase: SupabaseClient,
): Promise<AppAuthResult> {
  const header = request.headers.get("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7).trim() : "";

  // Short-circuit before the network call. An unauthenticated probe should not
  // cost a Supabase round trip.
  if (!token) return { ok: false, status: 401, error: "Missing bearer token" };

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user?.email) {
    return { ok: false, status: 401, error: "Invalid or expired session" };
  }

  if (!isAuthorizedAdmin(data.user.email)) {
    return { ok: false, status: 403, error: "Not permitted" };
  }

  return { ok: true, email: data.user.email.trim().toLowerCase() };
}
```

- [ ] **Step 4: Confirm it passes**

```bash
cd apps/site && pnpm exec vitest run src/lib/app-api/__tests__/auth.test.ts
```
Expected: PASS, 5 tests.

- [ ] **Step 5: Commit**

```bash
git add apps/site/src/lib/app-api
git commit -m "feat(app-api): session auth reusing the ADMIN_EMAILS allowlist"
```

---

### Task 8: The meter

**Files:**
- Create: `apps/site/src/lib/app-api/meter.ts`
- Test: `apps/site/src/lib/app-api/__tests__/meter.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect, vi } from "vitest";
import { recordUsage } from "../meter";

function mockClient(error: unknown = null) {
  const rows: unknown[] = [];
  const client = {
    from: vi.fn(() => ({
      insert: (row: unknown) => {
        rows.push(row);
        return Promise.resolve({ error });
      },
    })),
  };
  return { client, rows };
}

const base = {
  userEmail: "sue@suewheelerstl.com",
  clientId: "desktop",
  toolName: "get_pipeline",
  outcome: "ok" as const,
  durationMs: 42,
};

describe("recordUsage", () => {
  it("writes exactly one row to usage_events", async () => {
    const { client, rows } = mockClient();
    await recordUsage(base, client as never);
    expect(client.from).toHaveBeenCalledWith("usage_events");
    expect(rows).toHaveLength(1);
  });

  it("records the fields billing depends on", async () => {
    const { client, rows } = mockClient();
    await recordUsage({ ...base, model: "claude", inputTokens: 10, outputTokens: 20 }, client as never);
    const r = rows[0] as Record<string, unknown>;
    expect(r.user_email).toBe("sue@suewheelerstl.com");
    expect(r.client_id).toBe("desktop");
    expect(r.tool_name).toBe("get_pipeline");
    expect(r.outcome).toBe("ok");
    expect(r.duration_ms).toBe(42);
    expect(r.input_tokens).toBe(10);
  });

  it("records failed calls too — an error still consumed resources", async () => {
    const { client, rows } = mockClient();
    await recordUsage({ ...base, outcome: "error" }, client as never);
    expect((rows[0] as Record<string, unknown>).outcome).toBe("error");
  });

  it("NEVER throws when the meter write fails", async () => {
    // A metering failure must not fail the user's request. Losing a billing row
    // is bad; losing Sue's work because accounting hiccuped is worse.
    const { client } = mockClient({ message: "meter down" });
    await expect(recordUsage(base, client as never)).resolves.toBeUndefined();
  });
});
```

- [ ] **Step 2: Run it and confirm it fails**

```bash
cd apps/site && pnpm exec vitest run src/lib/app-api/__tests__/meter.test.ts
```
Expected: FAIL — `Cannot find module '../meter'`

- [ ] **Step 3: Implement**

```ts
/**
 * Usage accounting for the app API.
 *
 * Written in the same request as the work it describes. Billing cannot be
 * reconstructed after the fact — you cannot invoice for a period you were not
 * recording — so this is wired from the first endpoint rather than added once
 * there is revenue to justify it.
 *
 * Failed calls are recorded too: an error still consumed a model call and a
 * database round trip, and a usage table that only counts successes understates
 * cost exactly when something is going wrong.
 */

import type { SupabaseClient } from "@supabase/supabase-js";

export interface UsageEvent {
  userEmail: string;
  clientId: string;
  toolName: string;
  outcome: "ok" | "error";
  durationMs: number;
  model?: string;
  inputTokens?: number;
  outputTokens?: number;
  providerCostUsd?: number;
}

export async function recordUsage(
  event: UsageEvent,
  client: SupabaseClient,
): Promise<void> {
  const { error } = await client.from("usage_events").insert({
    user_email: event.userEmail,
    client_id: event.clientId,
    tool_name: event.toolName,
    outcome: event.outcome,
    duration_ms: event.durationMs,
    model: event.model ?? null,
    input_tokens: event.inputTokens ?? null,
    output_tokens: event.outputTokens ?? null,
    provider_cost_usd: event.providerCostUsd ?? null,
  });

  // Deliberately swallowed. This is the one place in the codebase where an error
  // is not thrown: a metering failure must never fail the user's request. Losing
  // a billing row costs money; losing Sue's bid because accounting hiccuped
  // costs a customer. Logged loudly so the loss is visible.
  if (error) {
    console.error("[meter] failed to record usage:", error.message, {
      tool: event.toolName,
      user: event.userEmail,
    });
  }
}
```

- [ ] **Step 4: Confirm it passes**

Expected: PASS, 4 tests.

- [ ] **Step 5: Commit**

```bash
git add apps/site/src/lib/app-api
git commit -m "feat(meter): record usage per call, never failing the request"
```

---

### Task 9: The tool dispatch route

**Files:**
- Create: `apps/site/src/app/api/app/tools/[name]/route.ts`
- Test: `apps/site/src/app/api/app/tools/[name]/__tests__/route.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/supabase/service", () => ({
  createServiceSupabaseClient: vi.fn(() => ({
    from: vi.fn(() => ({ insert: () => Promise.resolve({ error: null }) })),
  })),
}));

const authorizeAppRequest = vi.fn();
vi.mock("@/lib/app-api/auth", () => ({ authorizeAppRequest }));

const getPipeline = vi.fn();
vi.mock("@/lib/mcp/tools/get-pipeline", async (orig) => ({
  ...(await orig<Record<string, unknown>>()),
  getPipeline,
}));

import { POST } from "../route";

function call(name: string, body: unknown = {}) {
  return POST(
    new Request(`https://example.test/api/app/tools/${name}`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-client-id": "desktop" },
      body: JSON.stringify(body),
    }),
    { params: Promise.resolve({ name }) },
  );
}

describe("POST /api/app/tools/:name", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    authorizeAppRequest.mockResolvedValue({ ok: true, email: "sue@suewheelerstl.com" });
    getPipeline.mockResolvedValue({ stages: {}, totalLeads: 0, truncated: false });
  });

  it("404s an unknown tool name BEFORE authenticating", async () => {
    // An unknown name is not an auth question. Rejecting it first means a probe
    // never reaches the auth path or the database.
    const res = await call("drop_everything");
    expect(res.status).toBe(404);
    expect(authorizeAppRequest).not.toHaveBeenCalled();
  });

  it("401s when auth rejects", async () => {
    authorizeAppRequest.mockResolvedValue({ ok: false, status: 401, error: "no" });
    expect((await call("get_pipeline")).status).toBe(401);
  });

  it("403s an authenticated non-allowlisted caller", async () => {
    authorizeAppRequest.mockResolvedValue({ ok: false, status: 403, error: "no" });
    expect((await call("get_pipeline")).status).toBe(403);
  });

  it("invokes the tool and returns its result", async () => {
    const res = await call("get_pipeline");
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ totalLeads: 0 });
    expect(getPipeline).toHaveBeenCalled();
  });

  it("400s on invalid input rather than 500ing", async () => {
    getPipeline.mockRejectedValue(new Error("Invalid status \"quote_sent\""));
    const res = await call("get_pipeline", { status: "quote_sent" });
    expect(res.status).toBe(400);
  });

  it("never leaks a bearer credential, even if a tool returns one", async () => {
    // Defence in depth. projection.ts should make this impossible, but the
    // boundary asserts it independently of the layer below.
    getPipeline.mockResolvedValue({ leaked: { client_token: "x", reply_token: "y" } });
    const res = await call("get_pipeline");
    const body = await res.text();
    expect(body).not.toContain("client_token");
    expect(body).not.toContain("reply_token");
  });
});
```

- [ ] **Step 2: Run it and confirm it fails**

Expected: FAIL — `Cannot find module '../route'`

- [ ] **Step 3: Implement**

The route must, in this order: reject an unknown tool name with 404 **before** authenticating; authorize; parse the body; dispatch to the matching tool function with `createServiceSupabaseClient()`; record usage; and return JSON.

Map a thrown validation error (message containing `Invalid` or `Missing required`) to **400**, and anything else to **500**. Record usage on both paths.

Set `export const runtime = "nodejs"` — the service-role client is not Edge-safe.

Guard the serialized response against the forbidden keys as a final check, using `FORBIDDEN_COLUMNS` from `@/lib/mcp/columns`.

- [ ] **Step 4: Confirm it passes**

Expected: PASS, 6 tests.

- [ ] **Step 5: Commit**

```bash
git add apps/site/src/app/api/app
git commit -m "feat(app-api): tool dispatch route with auth, metering, and a leak guard"
```

---

### Task 10: `/api/app/me`

**Files:**
- Create: `apps/site/src/app/api/app/me/route.ts`
- Test: alongside it

- [ ] **Step 1: Write the failing test**

Assert: 401 without a token; 200 with an allowlisted session returning `{ email, tools }` where `tools` equals `TOOL_NAMES` from `@suewheelerstl/contract`; and that the response contains no `ADMIN_EMAILS` value or any other env content.

- [ ] **Step 2: Run it and confirm it fails.**

- [ ] **Step 3: Implement.** Returns the verified email and the tool list, so a client renders its capability set from the server rather than hardcoding it.

- [ ] **Step 4: Confirm it passes. Step 5: Commit.**

---

### Task 11: Full verification

- [ ] **Step 1: Gates**

```bash
pnpm run typecheck
pnpm --filter ./apps/site test
cd apps/site && pnpm run build && cd ..
```
Expected: `tsc` exit 0; **212 + the ~20 tests added by Tasks 7–10**; build succeeds and the route table lists `ƒ /api/app/tools/[name]` and `ƒ /api/app/me`.

- [ ] **Step 2: Exercise the contract against a running server**

```bash
cd apps/site && pnpm run build && pnpm run start &
# Unknown tool — expect 404
curl -s -o /dev/null -w '%{http_code}\n' -X POST localhost:3000/api/app/tools/nope -d '{}'
# No auth — expect 401
curl -s -o /dev/null -w '%{http_code}\n' -X POST localhost:3000/api/app/tools/get_pipeline -d '{}'
```
Expected: `404` then `401`. Stop the server afterward.

- [ ] **Step 3: Confirm metering is actually writing**

With a real session token, call `get_pipeline`, then query `usage_events` and confirm exactly one new row with the right `tool_name` and a non-null `duration_ms`.

**This is the check that matters most in this phase.** Bill correctness is not something to discover from an invoice.

- [ ] **Step 4: Commit and merge.**

---

## Self-Review

**Spec coverage.** Monorepo, `packages/contract`, auth, metering, the tool dispatch route and `/api/app/me` all map to tasks. The Tauri shell, keychain, voice, photos and bid drafting are explicitly Plans 2 and 3. `/api/app/voice` is deferred to Plan 3 with the transcription work, since building the endpoint before there is a client to record audio would be untested surface.

**Placeholders.** Tasks 9 Step 3 and 10 Step 3 describe behaviour rather than showing full route code. That is deliberate and bounded: both are conventional Next.js route handlers whose *contract* is fully specified by the tests above them, and both depend on the exact import paths as they exist after the Phase 1 move — writing them out now would encode pre-move paths. Every other code step is complete.

**Type consistency.** `AppAuthResult` is defined in Task 7 and consumed in Tasks 9 and 10. `UsageEvent` is defined in Task 8 and consumed in Task 9. `TOOL_NAMES` is defined in Task 5 and consumed in Tasks 9 and 10. The `usage_events` column names in Task 6's migration match the insert in Task 8 exactly.

**Ordering.** Phase 1 must complete before Phase 2 — every Phase 2 path is `apps/site/…`. Within Phase 2, Task 6 (table) precedes Task 8 (writer) precedes Task 9 (caller).
