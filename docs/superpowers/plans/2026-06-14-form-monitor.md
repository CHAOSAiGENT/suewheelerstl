# Form Monitor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an external monitor that exercises the real contact-form submission path every 6 hours, keeps the free Supabase project warm, and alerts the agency over four channels (Email, SMS, Slack, GitHub) when it breaks.

**Architecture:** A dedicated `/api/health` route inserts→reads→deletes a flagged (`is_test=true`) row in the real `submissions` table, gated by a shared `MONITOR_SECRET`. A GitHub Actions cron runs `scripts/monitor/check.mjs`, which POSTs the endpoint with retries and fans out alerts on failure. An `is_test` column + admin-board filter guarantees synthetic rows never reach Sue even if cleanup fails.

**Tech Stack:** Next.js App Router route handlers, Supabase JS (service client), Postgres migration, GitHub Actions, Node 22 (built-in `fetch`, no new deps), Vitest.

**Spec:** `docs/superpowers/specs/2026-06-14-form-monitor-design.md`

---

## File Structure

- **Create** `supabase/migrations/20260614_add_is_test_column.sql` — adds `is_test` column.
- **Modify** `src/lib/db-contract.ts` — add `is_test` to `REQUIRED_COLUMNS.submissions`.
- **Create** `src/lib/__tests__/db-contract.test.ts` — assert contract includes `is_test`.
- **Modify** `src/app/admin/page.tsx` — filter `is_test=false` on the board query.
- **Create** `src/app/api/health/route.ts` — the health endpoint.
- **Create** `src/app/api/health/__tests__/route.test.ts` — endpoint unit tests.
- **Create** `scripts/monitor/check.mjs` — POST+retry+alert fan-out runner.
- **Create** `scripts/monitor/__tests__/check.test.mjs` — retry/format unit tests.
- **Create** `.github/workflows/form-monitor.yml` — the cron workflow.
- **Create** `docs/MONITORING.md` — runbook + required secrets/env.

**Deploy ordering (critical):** apply the migration to the live DB **first**, then deploy the endpoint, then enable the workflow. The schema-drift gate and the endpoint both fail until the column exists live.

---

## Task 1: Add `is_test` column, contract entry, and admin filter

**Files:**

- Create: `supabase/migrations/20260614_add_is_test_column.sql`
- Modify: `src/lib/db-contract.ts:56-77` (REQUIRED_COLUMNS.submissions)
- Create: `src/lib/__tests__/db-contract.test.ts`
- Modify: `src/app/admin/page.tsx:19-23`

- [ ] **Step 1: Write the migration**

Create `supabase/migrations/20260614_add_is_test_column.sql`:

```sql
-- Flags synthetic rows created by the form health monitor (/api/health) so they
-- are filtered out of all admin views and never counted as real leads. Without
-- this, a failed cleanup-delete in the health check would surface a fake lead in
-- Sue's admin board.
ALTER TABLE submissions
  ADD COLUMN IF NOT EXISTS is_test boolean NOT NULL DEFAULT false;
```

- [ ] **Step 2: Add `is_test` to the DB contract**

In `src/lib/db-contract.ts`, add `"is_test",` to the `submissions` array in `REQUIRED_COLUMNS` (after `"lost_reason"`):

```ts
  submissions: [
    "id",
    "created_at",
    "name",
    "phone",
    "email",
    "address",
    "zip",
    "service_types",
    "best_time",
    "timeline",
    "project_description",
    "referral",
    "photo_urls",
    "status",
    "client_token",
    "reply_token",
    "bid_status",
    "lost_reason",
    "is_test",
  ],
```

- [ ] **Step 3: Write the failing contract test**

Create `src/lib/__tests__/db-contract.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { REQUIRED_COLUMNS } from "../db-contract";

describe("db-contract", () => {
  it("tracks the is_test column the health monitor depends on", () => {
    expect(REQUIRED_COLUMNS.submissions).toContain("is_test");
  });
});
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx vitest run src/lib/__tests__/db-contract.test.ts`
Expected: PASS (1 test). If Step 2 was skipped it FAILs with "expected [...] to contain 'is_test'".

- [ ] **Step 5: Add the admin-board filter**

In `src/app/admin/page.tsx`, add `.eq("is_test", false)` to the submissions query (after the `.is("archived_at", null)` line):

```ts
    supabase
      .from("submissions")
      .select("*")
      .is("archived_at", null)
      .eq("is_test", false)
      .order("created_at", { ascending: false }),
```

- [ ] **Step 6: Typecheck**

Run: `npm run typecheck`
Expected: exit 0.

- [ ] **Step 7: Apply the migration to the live database**

The Supabase MCP in this workspace is authed to a **different** account, so apply manually to project `khioedholasaxemmtooz`:

- Supabase Dashboard → project `khioedholasaxemmtooz` → SQL Editor → paste and run the contents of `supabase/migrations/20260614_add_is_test_column.sql`.
- (Or `supabase db push` if the CLI is linked to that project.)

Verify: in SQL Editor run
`select column_name from information_schema.columns where table_name='submissions' and column_name='is_test';`
Expected: one row, `is_test`.

- [ ] **Step 8: Run the schema-drift gate against live DB (if SUPABASE_DB_URL available)**

Run: `npm run test:schema`
Expected: PASS (or "skipped" if `SUPABASE_DB_URL` not set locally — it self-skips; it will enforce in CI).

- [ ] **Step 9: Commit**

```bash
git add supabase/migrations/20260614_add_is_test_column.sql src/lib/db-contract.ts src/lib/__tests__/db-contract.test.ts src/app/admin/page.tsx
git commit -m "feat: add is_test column + admin filter for form health monitor"
```

---

## Task 2: `/api/health` endpoint

**Files:**

- Create: `src/app/api/health/route.ts`
- Create: `src/app/api/health/__tests__/route.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `src/app/api/health/__tests__/route.test.ts`:

```ts
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/supabase/service", () => ({
  createServiceSupabaseClient: vi.fn(),
}));
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { POST } from "../route";

/** Builds a Supabase client mock whose insert/read/delete resolve to given values. */
function mockClient(opts: {
  insert: { data: unknown; error: unknown };
  read: { data: unknown; error: unknown };
  del: { error: unknown };
}) {
  return {
    from: () => ({
      insert: () => ({
        select: () => ({ single: () => Promise.resolve(opts.insert) }),
      }),
      select: () => ({
        eq: () => ({ single: () => Promise.resolve(opts.read) }),
      }),
      delete: () => ({ eq: () => Promise.resolve(opts.del) }),
    }),
  };
}

function req(secret?: string) {
  const headers: Record<string, string> = {};
  if (secret !== undefined) headers["x-monitor-secret"] = secret;
  return new Request("http://localhost/api/health", {
    method: "POST",
    headers,
  });
}

beforeEach(() => {
  vi.stubEnv("MONITOR_SECRET", "test-secret");
  vi.mocked(createServiceSupabaseClient).mockReset();
});

describe("POST /api/health", () => {
  it("401s without the secret header", async () => {
    const res = await POST(req());
    expect(res.status).toBe(401);
  });

  it("401s with a wrong secret", async () => {
    const res = await POST(req("nope"));
    expect(res.status).toBe(401);
  });

  it("200s on a successful insert/read/delete round-trip", async () => {
    vi.mocked(createServiceSupabaseClient).mockReturnValue(
      mockClient({
        insert: { data: { id: "abc" }, error: null },
        read: { data: { id: "abc" }, error: null },
        del: { error: null },
      }) as unknown as ReturnType<typeof createServiceSupabaseClient>,
    );
    const res = await POST(req("test-secret"));
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ ok: true });
  });

  it("500s when the insert fails", async () => {
    vi.mocked(createServiceSupabaseClient).mockReturnValue(
      mockClient({
        insert: { data: null, error: { message: "boom" } },
        read: { data: null, error: null },
        del: { error: null },
      }) as unknown as ReturnType<typeof createServiceSupabaseClient>,
    );
    const res = await POST(req("test-secret"));
    expect(res.status).toBe(500);
    expect(await res.json()).toMatchObject({ ok: false });
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run src/app/api/health/__tests__/route.test.ts`
Expected: FAIL — cannot import `../route` (module does not exist yet).

- [ ] **Step 3: Implement the endpoint**

Create `src/app/api/health/route.ts`:

```ts
import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";

export const dynamic = "force-dynamic";

/**
 * Form health check. Exercises the REAL submissions write path the contact form
 * uses (same table, same required columns) so it catches schema/env/DB failures
 * the public form would hit. Inserts a flagged test row, reads it back, deletes
 * it. Never emails or touches photo storage. Gated by MONITOR_SECRET.
 */
export async function POST(req: Request) {
  const secret = req.headers.get("x-monitor-secret");
  if (!process.env.MONITOR_SECRET || secret !== process.env.MONITOR_SECRET) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  const startedAt = Date.now();
  const supabase = createServiceSupabaseClient();

  // Mirror /api/contact's insert shape so DB/schema failures surface identically.
  const { data: inserted, error: insertError } = await supabase
    .from("submissions")
    .insert({
      name: "Form Monitor",
      phone: "(000) 000-0000",
      email: "monitor@suewheelerstl.com",
      address: null,
      zip: null,
      service_types: ["Other"],
      best_time: null,
      timeline: null,
      project_description: "Automated health check — safe to ignore.",
      referral: null,
      status: "to_bid",
      is_test: true,
    })
    .select("id")
    .single();

  if (insertError || !inserted) {
    return NextResponse.json(
      {
        ok: false,
        error: `insert: ${insertError?.message ?? "no row returned"}`,
      },
      { status: 500 },
    );
  }

  // Read back to prove the write is visible.
  const { error: readError } = await supabase
    .from("submissions")
    .select("id")
    .eq("id", inserted.id)
    .single();

  // Always attempt cleanup, even if the read failed.
  const { error: deleteError } = await supabase
    .from("submissions")
    .delete()
    .eq("id", inserted.id);

  if (readError) {
    return NextResponse.json(
      { ok: false, error: `read: ${readError.message}` },
      { status: 500 },
    );
  }

  if (deleteError) {
    // Non-fatal: the is_test admin filter hides the row. Log and still report ok.
    console.error(
      "[health] cleanup delete failed for",
      inserted.id,
      deleteError,
    );
  }

  return NextResponse.json({ ok: true, dbWriteMs: Date.now() - startedAt });
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run src/app/api/health/__tests__/route.test.ts`
Expected: PASS (4 tests).

- [ ] **Step 5: Typecheck**

Run: `npm run typecheck`
Expected: exit 0.

- [ ] **Step 6: Commit**

```bash
git add src/app/api/health/route.ts src/app/api/health/__tests__/route.test.ts
git commit -m "feat: add /api/health form monitor endpoint"
```

---

## Task 3: Monitor runner script (`check.mjs`)

**Files:**

- Create: `scripts/monitor/check.mjs`
- Create: `scripts/monitor/__tests__/check.test.mjs`

- [ ] **Step 1: Write the failing tests**

Create `scripts/monitor/__tests__/check.test.mjs`:

```js
import { describe, it, expect } from "vitest";
import { checkHealth, formatAlert } from "../check.mjs";

describe("checkHealth", () => {
  it("returns ok on a 200 + {ok:true} body", async () => {
    const fakeFetch = async () => ({
      ok: true,
      status: 200,
      json: async () => ({ ok: true, dbWriteMs: 12 }),
    });
    const result = await checkHealth(fakeFetch, { retries: 0, backoffMs: 0 });
    expect(result.ok).toBe(true);
    expect(result.status).toBe(200);
  });

  it("retries then fails on persistent 500", async () => {
    let calls = 0;
    const fakeFetch = async () => {
      calls++;
      return {
        ok: false,
        status: 500,
        json: async () => ({ ok: false, error: "boom" }),
      };
    };
    const result = await checkHealth(fakeFetch, { retries: 2, backoffMs: 0 });
    expect(result.ok).toBe(false);
    expect(result.status).toBe(500);
    expect(calls).toBe(3); // initial + 2 retries
  });

  it("treats a thrown fetch (site down) as failure", async () => {
    const fakeFetch = async () => {
      throw new Error("ECONNREFUSED");
    };
    const result = await checkHealth(fakeFetch, { retries: 0, backoffMs: 0 });
    expect(result.ok).toBe(false);
    expect(result.status).toBe(0);
  });
});

describe("formatAlert", () => {
  it("includes status, detail, and run url", () => {
    const msg = formatAlert(
      { ok: false, status: 500, body: { error: "insert: boom" } },
      "https://example.com/run/1",
    );
    expect(msg).toContain("500");
    expect(msg).toContain("insert: boom");
    expect(msg).toContain("https://example.com/run/1");
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run scripts/monitor/__tests__/check.test.mjs`
Expected: FAIL — cannot import `../check.mjs` (does not exist).

- [ ] **Step 3: Implement the runner**

Create `scripts/monitor/check.mjs`:

```js
// Form health monitor runner. Run by .github/workflows/form-monitor.yml.
// POSTs /api/health with retries; on failure fans out Email/SMS/Slack alerts
// and exits non-zero (which also fails the GitHub job — the 4th alert channel).
// Uses only Node 22 built-ins (fetch, Buffer) — no dependencies.

const HEALTH_URL =
  process.env.MONITOR_URL ?? "https://suewheelerstl.com/api/health";
const SECRET = process.env.MONITOR_SECRET ?? "";

export async function checkHealth(
  fetchImpl = fetch,
  { retries = 2, backoffMs = 2000 } = {},
) {
  let last = { ok: false, status: 0, body: {} };
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetchImpl(HEALTH_URL, {
        method: "POST",
        headers: { "x-monitor-secret": SECRET },
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok && body.ok) return { ok: true, status: res.status, body };
      last = { ok: false, status: res.status, body };
    } catch (err) {
      last = { ok: false, status: 0, body: { error: String(err) } };
    }
    if (attempt < retries) {
      await new Promise((r) => setTimeout(r, backoffMs * (attempt + 1)));
    }
  }
  return last;
}

export function formatAlert(result, runUrl) {
  return [
    "🚨 Sue Wheeler contact form health check FAILED",
    `Status: ${result.status}`,
    `Detail: ${JSON.stringify(result.body)}`,
    runUrl ? `Run: ${runUrl}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

async function sendEmail(message) {
  if (!process.env.RESEND_API_KEY || !process.env.ALERT_EMAIL_TO) return;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.ALERT_EMAIL_FROM ?? "no-reply@suewheelerstl.com",
      to: [process.env.ALERT_EMAIL_TO],
      subject: "🚨 Sue Wheeler form health check FAILED",
      text: message,
    }),
  });
}

async function sendSms(message) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM;
  const to = process.env.ALERT_SMS_TO;
  if (!sid || !token || !from || !to) return;
  const body = new URLSearchParams({
    From: from,
    To: to,
    Body: message.slice(0, 320),
  });
  await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    },
  );
}

async function sendSlack(message) {
  if (!process.env.SLACK_WEBHOOK_URL) return;
  await fetch(process.env.SLACK_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: message }),
  });
}

export async function sendAlerts(message) {
  // Each channel independent — one failing never blocks the others.
  await Promise.allSettled([
    sendEmail(message),
    sendSms(message),
    sendSlack(message),
  ]);
}

// Run as main (not when imported by tests).
if (import.meta.url === `file://${process.argv[1]}`) {
  const result = await checkHealth();
  if (result.ok) {
    console.log("[monitor] OK", JSON.stringify(result.body));
    process.exit(0);
  }
  const message = formatAlert(result, process.env.GITHUB_RUN_URL);
  console.error("[monitor] FAILED\n" + message);
  await sendAlerts(message);
  process.exit(1);
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run scripts/monitor/__tests__/check.test.mjs`
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add scripts/monitor/check.mjs scripts/monitor/__tests__/check.test.mjs
git commit -m "feat: add form monitor runner with retry + alert fan-out"
```

---

## Task 4: GitHub Actions workflow + runbook

**Files:**

- Create: `.github/workflows/form-monitor.yml`
- Create: `docs/MONITORING.md`

- [ ] **Step 1: Write the workflow**

Create `.github/workflows/form-monitor.yml`:

```yaml
name: form-monitor

on:
  schedule:
    - cron: "0 */6 * * *" # every 6 hours
  workflow_dispatch: {}

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Run form health check
        env:
          MONITOR_URL: https://suewheelerstl.com/api/health
          MONITOR_SECRET: ${{ secrets.MONITOR_SECRET }}
          RESEND_API_KEY: ${{ secrets.RESEND_API_KEY }}
          ALERT_EMAIL_TO: ${{ secrets.ALERT_EMAIL_TO }}
          ALERT_EMAIL_FROM: no-reply@suewheelerstl.com
          TWILIO_ACCOUNT_SID: ${{ secrets.TWILIO_ACCOUNT_SID }}
          TWILIO_AUTH_TOKEN: ${{ secrets.TWILIO_AUTH_TOKEN }}
          TWILIO_FROM: ${{ secrets.TWILIO_FROM }}
          ALERT_SMS_TO: ${{ secrets.ALERT_SMS_TO }}
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
          GITHUB_RUN_URL: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}
        run: node scripts/monitor/check.mjs
```

- [ ] **Step 2: Write the runbook**

Create `docs/MONITORING.md`:

```markdown
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
```

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/form-monitor.yml docs/MONITORING.md
git commit -m "feat: add form-monitor GitHub Actions workflow + runbook"
```

- [ ] **Step 4: Configure secrets (manual, outside the repo)**

- Generate a secret: `openssl rand -hex 32`.
- Set `MONITOR_SECRET` to that value in **Vercel** (project env, Production) and in **GitHub** repo secrets.
- Add the remaining GitHub secrets per `docs/MONITORING.md` (Resend reuse; Twilio + Slack need one-time account setup).

- [ ] **Step 5: Deploy and verify end-to-end**

- Confirm the migration (Task 1, Step 7) is applied to live DB.
- Deploy to Vercel (push to `main` or `vercel --prod`) so `/api/health` ships with `MONITOR_SECRET`.
- Manually run the workflow (Actions → form-monitor → Run workflow).
- Expected: green run; logs show `[monitor] OK`. No new row in Sue's admin board.

---

## Self-Review

**Spec coverage:**

- Dedicated `/api/health` endpoint, secret-gated, insert→read→delete real table → Task 2. ✓
- `is_test` column + admin filter safety net → Task 1. ✓
- GitHub Actions cron every 6h + workflow_dispatch → Task 4. ✓
- Retry-before-alert → Task 3 (`checkHealth` retries). ✓
- 4-channel fan-out (Email/SMS/Slack + job failure) → Task 3 + Task 4. ✓
- Alerts external to site (run inside Action) → Task 3 (runs in workflow). ✓
- Keep-warm via real write every 6h → Tasks 1–4 combined. ✓
- Prerequisites/secrets documented → Task 4 (`docs/MONITORING.md`). ✓
- Testing: endpoint auth/success/failure + runner retry/format → Tasks 2, 3. ✓

**Placeholder scan:** none — all steps contain runnable code/commands.

**Type/name consistency:** `MONITOR_SECRET`, `x-monitor-secret`, `is_test`, `checkHealth`,
`formatAlert`, `sendAlerts`, `/api/health` used consistently across endpoint, script,
workflow, and tests. Endpoint insert mirrors `/api/contact` columns + `is_test`.

**Out of scope (correct):** form UX redesign (Project #2); Resend/storage E2E coverage
(deferred per spec).
