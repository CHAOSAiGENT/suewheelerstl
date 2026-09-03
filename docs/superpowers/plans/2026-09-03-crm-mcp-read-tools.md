# CRM MCP Server — Read Tools Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a remote MCP server that lets Sue's Claude read the CRM — search leads, open a lead, see the pipeline, and search her copyblock library — from desktop, web, and mobile.

**Architecture:** Tool logic lives in pure async functions under `src/lib/mcp/tools/`, each taking a Supabase client and validated input and returning plain data. A thin adapter registers them with `mcp-handler`, and a Next.js route handler at `src/app/api/mcp/route.ts` serves them over Streamable HTTP. Authorization reuses the existing `isAuthorizedAdmin()` allowlist, so the MCP and the web UI share one policy. Keeping the tools free of any MCP dependency means the bulk of the code is unit-testable without a protocol in the loop.

**Tech Stack:** Next.js 15.5.19 (App Router, Node runtime), `mcp-handler@^2`, `@modelcontextprotocol/server@^2`, `zod@^4.2`, `jose` for JWT verification, Supabase (`@supabase/supabase-js`), Vitest.

**Scope:** Read tools only. Create and update tools are a follow-on plan. The one-time import of Sue's Mac bid files and the Claude Project are separate work.

---

## Prerequisites — none of these are in this repo

These block **deployment and connector testing**, not development. Tasks 1–6 can be built and tested locally without them. Task 7 onward cannot be verified end-to-end until all four are done.

- [ ] **Reverse the apex→www redirect** per `docs/DOMAINS.md`. Verified live: `https://suewheelerstl.com/api/mcp` returns `307 → www.suewheelerstl.com`. Claude drops the `Authorization` header across a cross-host redirect and reports "Authorization with the MCP server failed" — a credentials error that is not a credentials problem.
- [ ] **Enable Supabase's OAuth 2.1 Server.** Verified live: `https://khioedholasaxemmtooz.supabase.co/.well-known/oauth-authorization-server/auth/v1` returns `404 {"error_code":"feature_disabled"}`.
- [ ] **Add `ADMIN_EMAILS` to Vercel Preview.** Present in Production and Development only; the guard fails closed.
- [ ] **Disable Vercel Deployment Protection** for the test URL, or test against production. Anthropic egress is `160.79.104.0/21`, IPv4-only.

---

## File Structure

| File | Responsibility |
|---|---|
| `src/lib/mcp/columns.ts` | Column allowlists. The single place that guarantees bearer tokens never leave the database. |
| `src/lib/mcp/tools/search-leads.ts` | Filter submissions, return candidates with UUIDs. |
| `src/lib/mcp/tools/get-lead.ts` | One submission plus its notes, messages, bid blocks. |
| `src/lib/mcp/tools/get-pipeline.ts` | Counts and summaries grouped by status. |
| `src/lib/mcp/tools/search-copyblocks.ts` | Search the static copyblock library. No database access. |
| `src/lib/mcp/register.ts` | Thin adapter: maps the pure tools into an MCP server instance. |
| `src/lib/mcp/auth.ts` | Verifies a Supabase JWT and applies the `ADMIN_EMAILS` allowlist. |
| `src/app/api/mcp/route.ts` | The MCP endpoint. |
| `src/app/.well-known/oauth-protected-resource/route.ts` | RFC 9728 metadata. |
| `src/app/.well-known/oauth-protected-resource/api/mcp/route.ts` | Same document at the path-suffixed variant Claude probes first. |

Tools are one file each because they are independently testable units with no shared state. `columns.ts` is separate specifically so the PII guarantee has one home rather than being repeated in four files where one copy could drift.

---

## Task 1: Install dependencies and pin the mcp-handler API

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install**

```bash
npm install mcp-handler@^2 @modelcontextprotocol/server@^2 jose
npm install --save-dev @types/node
```

- [ ] **Step 2: Verify versions resolved as expected**

Run: `npm ls mcp-handler @modelcontextprotocol/server zod`
Expected: `mcp-handler@2.1.1` (or later 2.x), `@modelcontextprotocol/server@2.x`, `zod@4.2.x` or later.

If `zod` resolves below 4.2, run `npm install zod@^4.2` — `mcp-handler@2` requires it as a peer.

- [ ] **Step 3: Read the README and record the tool-registration signature**

```bash
cat node_modules/mcp-handler/README.md | head -160
```

**This step exists because the exact 2.x tool-registration call is not assumed anywhere in this plan.** Vercel's public MCP documentation page still shows the 1.x API (`server.tool(...)`, `basePath`, `redisUrl`, `maxDuration`) against a 2.x package, and those options were removed. Trust `node_modules/mcp-handler/README.md`, not the web page.

Write the actual registration signature you find into a comment at the top of `src/lib/mcp/register.ts` when you create it in Task 7. Every other task in this plan is written against pure functions that do not depend on it.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore(mcp): add mcp-handler, MCP server SDK, and jose"
```

---

## Task 2: Column allowlists — the PII guarantee

The CRM does `select("*")` almost everywhere, which returns `client_token` and `reply_token`. Those are **bearer credentials**: anyone holding `client_token` can open a customer's portal, and `reply_token` lets a forged email inject into their thread. Neither may ever reach a model's context. The guarantee is enforced by never selecting them.

**Files:**
- Create: `src/lib/mcp/columns.ts`
- Test: `src/lib/mcp/__tests__/columns.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect } from "vitest";
import { SUBMISSION_COLUMNS, FORBIDDEN_COLUMNS } from "../columns";

describe("MCP column allowlists", () => {
  it("never exposes bearer credentials", () => {
    for (const forbidden of FORBIDDEN_COLUMNS) {
      expect(SUBMISSION_COLUMNS).not.toContain(forbidden);
    }
  });

  it("names client_token and reply_token as forbidden", () => {
    expect(FORBIDDEN_COLUMNS).toContain("client_token");
    expect(FORBIDDEN_COLUMNS).toContain("reply_token");
  });

  it("selects the columns the tools actually need", () => {
    for (const needed of ["id", "name", "email", "phone", "address", "status", "bid_amount"]) {
      expect(SUBMISSION_COLUMNS).toContain(needed);
    }
  });

  it("exposes a comma-joined select string with no whitespace", () => {
    const { SUBMISSION_SELECT } = require("../columns");
    expect(SUBMISSION_SELECT).not.toMatch(/\s/);
    expect(SUBMISSION_SELECT.split(",")).toEqual(SUBMISSION_COLUMNS);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/mcp/__tests__/columns.test.ts`
Expected: FAIL — `Cannot find module '../columns'`

- [ ] **Step 3: Write the implementation**

```ts
/**
 * Column allowlists for MCP tool reads.
 *
 * The rest of this codebase uses `select("*")`, which returns `client_token`
 * and `reply_token` alongside the business data. Both are BEARER CREDENTIALS:
 * `client_token` opens a customer's portal at /my-request/<token>, and
 * `reply_token` is embedded in email headers so anyone who can forge a message
 * to that address can inject into a customer's thread.
 *
 * Anything an MCP tool returns lands in a model's context and persists in
 * conversation history. So MCP reads NEVER use `select("*")` — they select an
 * explicit list, and the guarantee is that these credentials are not on it.
 *
 * Enforced by `__tests__/columns.test.ts`, which asserts no FORBIDDEN_COLUMNS
 * entry appears in any allowlist. Add a column here, not at the call site.
 */

/** Never returned by any MCP tool, under any circumstances. */
export const FORBIDDEN_COLUMNS = ["client_token", "reply_token"] as const;

/** Submission columns MCP read tools may return. */
export const SUBMISSION_COLUMNS = [
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
  "status",
  "admin_notes",
  "bid_amount",
  "bid_status",
  "bid_start_date",
  "crew_member_ids",
  "lost_reason",
  "lost_note",
  "after_photos_uploaded",
  "final_payment_confirmed",
] as const;

/** Ready-to-use PostgREST select string. */
export const SUBMISSION_SELECT = SUBMISSION_COLUMNS.join(",");
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/mcp/__tests__/columns.test.ts`
Expected: PASS, 4 tests.

- [ ] **Step 5: Commit**

```bash
git add src/lib/mcp/columns.ts src/lib/mcp/__tests__/columns.test.ts
git commit -m "feat(mcp): column allowlists excluding bearer credentials"
```

---

## Task 3: `search_copyblocks` — start here, it has no database

Build this tool first. It reads a static JSON file, so it exercises the tool shape with nothing mocked, and it is the tool that makes bid-writing work later.

**Files:**
- Create: `src/lib/mcp/tools/search-copyblocks.ts`
- Test: `src/lib/mcp/tools/__tests__/search-copyblocks.test.ts`

The library is `src/lib/bid/copyblock-library.json`, typed as `CopyblockLibrary` in `src/lib/bid/types.ts`:

```ts
export interface CopyblockItem { key: string; title: string; body: string; }
export interface CopyblockCategory { key: string; label: string; blocks: CopyblockItem[]; }
export type CopyblockLibrary = CopyblockCategory[];
```

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect } from "vitest";
import { searchCopyblocks } from "../search-copyblocks";

describe("searchCopyblocks", () => {
  it("matches on title text, case-insensitively", async () => {
    const result = await searchCopyblocks({ query: "front door" });
    expect(result.blocks.length).toBeGreaterThan(0);
    expect(
      result.blocks.some((b) => b.title.toLowerCase().includes("front door")),
    ).toBe(true);
  });

  it("matches on body text too", async () => {
    const result = await searchCopyblocks({ query: "hand-strip" });
    expect(result.blocks.length).toBeGreaterThan(0);
  });

  it("returns the owning category with each block, so Claude can cite it", async () => {
    const result = await searchCopyblocks({ query: "door" });
    expect(result.blocks[0]).toHaveProperty("categoryLabel");
    expect(result.blocks[0]).toHaveProperty("categoryKey");
  });

  it("returns an empty array rather than throwing when nothing matches", async () => {
    const result = await searchCopyblocks({ query: "zzzznotathing" });
    expect(result.blocks).toEqual([]);
    expect(result.totalMatched).toBe(0);
  });

  it("caps results at the requested limit but reports the true total", async () => {
    const result = await searchCopyblocks({ query: "e", limit: 3 });
    expect(result.blocks.length).toBeLessThanOrEqual(3);
    expect(result.totalMatched).toBeGreaterThanOrEqual(result.blocks.length);
  });

  it("lists categories when given no query, so Claude can browse", async () => {
    const result = await searchCopyblocks({});
    expect(result.categories.length).toBeGreaterThan(0);
    expect(result.categories[0]).toHaveProperty("label");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/mcp/tools/__tests__/search-copyblocks.test.ts`
Expected: FAIL — `Cannot find module '../search-copyblocks'`

- [ ] **Step 3: Write the implementation**

```ts
/**
 * search_copyblocks — searches Sue's copyblock library.
 *
 * The library is ~93 blocks across 14 categories, mined from her past bids. It
 * carries pricing intelligence as prose inside titles and bodies, e.g.
 * "FRONT DOOR — 121 occurrences | Range: $200-$8,000 | Median: $2,500".
 *
 * This is the tool that makes bid-drafting work: it lets Claude write in Sue's
 * own historical language rather than inventing copy, and it is where any
 * pricing suggestion must be grounded.
 *
 * No database access — the library is a static JSON asset.
 */

import { z } from "zod";
import library from "@/lib/bid/copyblock-library.json";
import type { CopyblockLibrary } from "@/lib/bid/types";

const LIBRARY = library as CopyblockLibrary;

export const searchCopyblocksInput = z.object({
  query: z
    .string()
    .optional()
    .describe("Text to match against block titles and bodies. Omit to browse categories."),
  categoryKey: z.string().optional().describe("Restrict the search to one category."),
  limit: z.number().int().positive().max(50).default(20),
});

export type SearchCopyblocksInput = z.input<typeof searchCopyblocksInput>;

export interface CopyblockHit {
  key: string;
  title: string;
  body: string;
  categoryKey: string;
  categoryLabel: string;
}

export interface SearchCopyblocksResult {
  blocks: CopyblockHit[];
  totalMatched: number;
  categories: { key: string; label: string; blockCount: number }[];
}

export async function searchCopyblocks(
  raw: SearchCopyblocksInput,
): Promise<SearchCopyblocksResult> {
  const { query, categoryKey, limit } = searchCopyblocksInput.parse(raw);

  const categories = LIBRARY.map((c) => ({
    key: c.key,
    label: c.label,
    blockCount: c.blocks.length,
  }));

  const scope = categoryKey ? LIBRARY.filter((c) => c.key === categoryKey) : LIBRARY;

  const all: CopyblockHit[] = scope.flatMap((category) =>
    category.blocks.map((block) => ({
      key: block.key,
      title: block.title,
      body: block.body,
      categoryKey: category.key,
      categoryLabel: category.label,
    })),
  );

  if (!query) {
    return { blocks: [], totalMatched: 0, categories };
  }

  const needle = query.toLowerCase();
  const matched = all.filter(
    (b) =>
      b.title.toLowerCase().includes(needle) || b.body.toLowerCase().includes(needle),
  );

  return { blocks: matched.slice(0, limit), totalMatched: matched.length, categories };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/mcp/tools/__tests__/search-copyblocks.test.ts`
Expected: PASS, 6 tests.

If the `hand-strip` assertion fails, grep the library for the actual hyphenation (`grep -o 'hand[- ]strip' src/lib/bid/copyblock-library.json | sort -u`) and use a term that genuinely appears. Do not weaken the test to `expect(true)` — pick a real term.

- [ ] **Step 5: Commit**

```bash
git add src/lib/mcp/tools/search-copyblocks.ts src/lib/mcp/tools/__tests__/search-copyblocks.test.ts
git commit -m "feat(mcp): search_copyblocks tool"
```

---

## Task 4: `search_leads`

**Files:**
- Create: `src/lib/mcp/tools/search-leads.ts`
- Test: `src/lib/mcp/tools/__tests__/search-leads.test.ts`

Two behaviours matter beyond the obvious. Results must exclude health-monitor rows (`is_test = true`) and archived rows, exactly as `src/app/admin/page.tsx:22-23` does — otherwise Sue's pipeline fills with the test row the monitor inserts every six hours. And results must carry UUIDs, because write tools in the follow-on plan will accept only UUIDs, never name matches.

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect, vi } from "vitest";
import { searchLeads } from "../search-leads";
import { SUBMISSION_SELECT } from "../../columns";

function mockClient(rows: unknown[]) {
  const calls: Record<string, unknown[]> = { select: [], eq: [], is: [], or: [], limit: [] };
  const builder: Record<string, unknown> = {};
  const chain = (name: string) => (...args: unknown[]) => {
    calls[name]?.push(args);
    return builder;
  };
  Object.assign(builder, {
    select: chain("select"),
    eq: chain("eq"),
    is: chain("is"),
    or: chain("or"),
    order: chain("order"),
    limit: (...args: unknown[]) => {
      calls.limit.push(args);
      return Promise.resolve({ data: rows, error: null });
    },
  });
  return { client: { from: vi.fn(() => builder) }, calls };
}

describe("searchLeads", () => {
  it("selects only allowlisted columns, never *", async () => {
    const { client, calls } = mockClient([]);
    await searchLeads({ query: "hartmann" }, client as never);
    // Cast through unknown[]: `calls` is Record<string, unknown[]>, so
    // calls.select[0] is `unknown` and indexing it is a TS2571 error.
    expect((calls.select[0] as unknown[])[0]).toBe(SUBMISSION_SELECT);
    expect((calls.select[0] as unknown[])[0]).not.toContain("*");
  });

  it("excludes health-monitor test rows", async () => {
    const { client, calls } = mockClient([]);
    await searchLeads({ query: "x" }, client as never);
    expect(calls.eq).toContainEqual(["is_test", false]);
  });

  it("excludes archived rows", async () => {
    const { client, calls } = mockClient([]);
    await searchLeads({ query: "x" }, client as never);
    expect(calls.is).toContainEqual(["archived_at", null]);
  });

  it("filters by status when given one", async () => {
    const { client, calls } = mockClient([]);
    await searchLeads({ status: "active" }, client as never);
    expect(calls.eq).toContainEqual(["status", "active"]);
  });

  it("rejects a status outside the db contract", async () => {
    const { client } = mockClient([]);
    await expect(
      searchLeads({ status: "quote_sent" } as never, client as never),
    ).rejects.toThrow(/quote_sent/);
  });

  it("returns rows with their UUIDs", async () => {
    const { client } = mockClient([{ id: "uuid-1", name: "Hartmann" }]);
    const result = await searchLeads({ query: "hart" }, client as never);
    expect(result.leads[0].id).toBe("uuid-1");
  });

  it("surfaces a database error as a thrown error, not an empty result", async () => {
    const builder: Record<string, unknown> = {};
    Object.assign(builder, {
      select: () => builder,
      eq: () => builder,
      is: () => builder,
      or: () => builder,
      order: () => builder,
      limit: () => Promise.resolve({ data: null, error: { message: "boom" } }),
    });
    const client = { from: vi.fn(() => builder) };
    await expect(searchLeads({ query: "x" }, client as never)).rejects.toThrow(/boom/);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/mcp/tools/__tests__/search-leads.test.ts`
Expected: FAIL — `Cannot find module '../search-leads'`

- [ ] **Step 3: Write the implementation**

```ts
/**
 * search_leads — finds submissions by name, address, or status.
 *
 * Returns UUIDs deliberately. Claude reasons about names ("the Hartmann job")
 * but the database works in ids, and every write tool accepts ONLY a UUID. That
 * is the difference between editing the right customer and editing a
 * similarly-named one.
 *
 * Filters `is_test = false` and `archived_at IS NULL`, matching the Kanban board
 * at src/app/admin/page.tsx:22-23. The form health monitor inserts a real
 * submissions row every six hours; without this filter it shows up as a lead.
 */

import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import { STATUS_VALUES } from "@/lib/db-contract";
import { SUBMISSION_SELECT } from "../columns";

export const searchLeadsInput = z.object({
  query: z
    .string()
    .optional()
    .describe("Free text matched against customer name, email, and address."),
  status: z
    .enum(STATUS_VALUES, {
      // Zod 4's default invalid_value message lists the ALLOWED options but
      // never echoes the RECEIVED one. A model that guesses `quote_sent` needs
      // to see its own guess reflected back, or it just guesses again.
      error: (issue) =>
        `Invalid status ${JSON.stringify(issue.input)} — expected one of ${STATUS_VALUES.join(", ")}`,
    })
    .optional()
    .describe("Restrict to one pipeline stage."),
  limit: z.number().int().positive().max(50).default(20),
});

export type SearchLeadsInput = z.input<typeof searchLeadsInput>;

export interface SearchLeadsResult {
  leads: Record<string, unknown>[];
  count: number;
}

export async function searchLeads(
  raw: SearchLeadsInput,
  client: SupabaseClient,
): Promise<SearchLeadsResult> {
  const { query, status, limit } = searchLeadsInput.parse(raw);

  let q = client
    .from("submissions")
    .select(SUBMISSION_SELECT)
    .eq("is_test", false)
    .is("archived_at", null);

  if (status) q = q.eq("status", status);
  if (query) {
    const like = `%${query}%`;
    q = q.or(`name.ilike.${like},email.ilike.${like},address.ilike.${like}`);
  }

  const { data, error } = await q.order("created_at", { ascending: false }).limit(limit);

  // Surface failures. Returning [] on error would let Claude report "no leads
  // found" for a database outage, which reads as fact and is not.
  if (error) throw new Error(`search_leads failed: ${error.message}`);

  // Double cast is required, not stylistic. SUBMISSION_SELECT is a runtime
  // .join() rather than a string literal, so PostgREST cannot infer a row shape
  // and types `data` as possibly GenericStringError[]. A single cast is rejected
  // as insufficiently overlapping (TS2352).
  const leads = (data ?? []) as unknown as Record<string, unknown>[];
  return { leads, count: leads.length };
}
```

Note `z.enum(STATUS_VALUES)` gives the "rejects `quote_sent`" test for free, and keeps the vocabulary defined in exactly one place — `src/lib/db-contract.ts`. Two existing routes (`src/app/api/admin/bid/route.ts:73` and `src/app/api/client/accept-bid/route.ts:41`) currently write `'quote_sent'` and `'scheduled'`, which the live CHECK constraint rejects. Do not copy that pattern.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/mcp/tools/__tests__/search-leads.test.ts`
Expected: PASS, 7 tests.

- [ ] **Step 5: Commit**

```bash
git add src/lib/mcp/tools/search-leads.ts src/lib/mcp/tools/__tests__/search-leads.test.ts
git commit -m "feat(mcp): search_leads tool"
```

---

## Task 5: `get_lead`

**Files:**
- Create: `src/lib/mcp/tools/get-lead.ts`
- Test: `src/lib/mcp/tools/__tests__/get-lead.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect, vi } from "vitest";
import { getLead } from "../get-lead";

function mockClient(tables: Record<string, { data: unknown; error: unknown }>) {
  const selects: Record<string, string> = {};
  return {
    from: vi.fn((table: string) => {
      const builder: Record<string, unknown> = {};
      Object.assign(builder, {
        select: (cols: string) => {
          selects[table] = cols;
          return builder;
        },
        eq: () => builder,
        order: () => Promise.resolve(tables[table]),
        maybeSingle: () => Promise.resolve(tables[table]),
      });
      return builder;
    }),
    selects,
  };
}

describe("getLead", () => {
  const ok = {
    submissions: { data: { id: "u1", name: "Hartmann" }, error: null },
    submission_notes: { data: [{ body: "note" }], error: null },
    messages: { data: [{ body: "hello" }], error: null },
    bid_blocks: { data: [{ title: "Front door" }], error: null },
  };

  it("rejects a non-UUID id before touching the database", async () => {
    const client = mockClient(ok);
    await expect(getLead({ id: "the-hartmann-job" }, client as never)).rejects.toThrow();
    expect(client.from).not.toHaveBeenCalled();
  });

  it("returns the submission with its notes, messages, and bid blocks", async () => {
    const client = mockClient(ok);
    const r = await getLead(
      { id: "00000000-0000-4000-8000-000000000001" },
      client as never,
    );
    expect(r.lead.name).toBe("Hartmann");
    expect(r.notes).toHaveLength(1);
    expect(r.messages).toHaveLength(1);
    expect(r.bidBlocks).toHaveLength(1);
  });

  it("never selects bearer tokens from any table", async () => {
    const client = mockClient(ok);
    await getLead({ id: "00000000-0000-4000-8000-000000000001" }, client as never);
    for (const cols of Object.values(client.selects)) {
      expect(cols).not.toContain("client_token");
      expect(cols).not.toContain("reply_token");
      expect(cols).not.toBe("*");
    }
  });

  it("returns null lead when the id does not exist", async () => {
    const client = mockClient({ ...ok, submissions: { data: null, error: null } });
    const r = await getLead(
      { id: "00000000-0000-4000-8000-000000000009" },
      client as never,
    );
    expect(r.lead).toBeNull();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/mcp/tools/__tests__/get-lead.test.ts`
Expected: FAIL — `Cannot find module '../get-lead'`

- [ ] **Step 3: Write the implementation**

```ts
/**
 * get_lead — one submission with its full working context.
 *
 * Accepts a UUID only. A name lookup here would let Claude act on the wrong
 * customer whenever two names are similar, so resolution belongs in
 * search_leads, which returns candidates for a human-visible choice.
 *
 * `messages` holds two-way customer correspondence and `submission_notes` holds
 * Sue's private notes. Both are selected by explicit column list — see
 * ../columns.ts for why that matters.
 */

import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import { SUBMISSION_SELECT } from "../columns";

export const getLeadInput = z.object({
  id: z.string().uuid().describe("Submission UUID, as returned by search_leads."),
});

export type GetLeadInput = z.input<typeof getLeadInput>;

export interface GetLeadResult {
  lead: Record<string, unknown> | null;
  notes: Record<string, unknown>[];
  messages: Record<string, unknown>[];
  bidBlocks: Record<string, unknown>[];
}

export async function getLead(
  raw: GetLeadInput,
  client: SupabaseClient,
): Promise<GetLeadResult> {
  const { id } = getLeadInput.parse(raw);

  const leadRes = await client
    .from("submissions")
    .select(SUBMISSION_SELECT)
    .eq("id", id)
    .maybeSingle();
  if (leadRes.error) throw new Error(`get_lead failed: ${leadRes.error.message}`);
  if (!leadRes.data) return { lead: null, notes: [], messages: [], bidBlocks: [] };

  const [notesRes, messagesRes, blocksRes] = await Promise.all([
    client
      .from("submission_notes")
      .select("id,body,created_at")
      .eq("submission_id", id)
      .order("created_at", { ascending: false }),
    client
      .from("messages")
      .select("id,body,is_from_admin,sent_by_email,created_at")
      .eq("submission_id", id)
      .order("created_at", { ascending: true }),
    client
      .from("bid_blocks")
      .select("id,source_key,title,body,sort_order,photo_paths")
      .eq("submission_id", id)
      .order("sort_order", { ascending: true }),
  ]);

  for (const [label, res] of [
    ["notes", notesRes],
    ["messages", messagesRes],
    ["bid_blocks", blocksRes],
  ] as const) {
    if (res.error) throw new Error(`get_lead ${label} failed: ${res.error.message}`);
  }

  return {
    // Double cast for the same TS2352 reason as search-leads: SUBMISSION_SELECT
    // is a runtime join, so PostgREST falls back to GenericStringError. The
    // other three selects are string literals and need no cast.
    lead: leadRes.data as unknown as Record<string, unknown>,
    notes: (notesRes.data ?? []) as Record<string, unknown>[],
    messages: (messagesRes.data ?? []) as Record<string, unknown>[],
    bidBlocks: (blocksRes.data ?? []) as Record<string, unknown>[],
  };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/mcp/tools/__tests__/get-lead.test.ts`
Expected: PASS, 4 tests.

- [ ] **Step 5: Commit**

```bash
git add src/lib/mcp/tools/get-lead.ts src/lib/mcp/tools/__tests__/get-lead.test.ts
git commit -m "feat(mcp): get_lead tool"
```

---

## Task 6: `get_pipeline`

**Files:**
- Create: `src/lib/mcp/tools/get-pipeline.ts`
- Test: `src/lib/mcp/tools/__tests__/get-pipeline.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect, vi } from "vitest";
import { getPipeline } from "../get-pipeline";
import { STATUS_VALUES } from "@/lib/db-contract";

function mockClient(rows: unknown[], error: unknown = null) {
  const builder: Record<string, unknown> = {};
  Object.assign(builder, {
    select: () => builder,
    eq: () => builder,
    is: () => Promise.resolve({ data: rows, error }),
  });
  return { from: vi.fn(() => builder) };
}

describe("getPipeline", () => {
  it("includes every contracted status, even empty ones", async () => {
    const client = mockClient([{ id: "1", status: "active", name: "A", bid_amount: 100 }]);
    const r = await getPipeline({}, client as never);
    expect(Object.keys(r.stages).sort()).toEqual([...STATUS_VALUES].sort());
  });

  it("counts leads per stage", async () => {
    const client = mockClient([
      { id: "1", status: "active", name: "A", bid_amount: 100 },
      { id: "2", status: "active", name: "B", bid_amount: 200 },
      { id: "3", status: "to_bid", name: "C", bid_amount: null },
    ]);
    const r = await getPipeline({}, client as never);
    expect(r.stages.active.count).toBe(2);
    expect(r.stages.to_bid.count).toBe(1);
    expect(r.stages.lost.count).toBe(0);
  });

  it("sums bid amounts per stage, treating null as zero", async () => {
    const client = mockClient([
      { id: "1", status: "active", name: "A", bid_amount: 100 },
      { id: "2", status: "active", name: "B", bid_amount: null },
    ]);
    const r = await getPipeline({}, client as never);
    expect(r.stages.active.totalBidAmount).toBe(100);
  });

  it("ignores rows whose status is not in the contract", async () => {
    const client = mockClient([{ id: "1", status: "quote_sent", name: "X", bid_amount: 1 }]);
    const r = await getPipeline({}, client as never);
    expect(r.unknownStatusCount).toBe(1);
    expect(r.totalLeads).toBe(0);
  });

  it("throws on a database error", async () => {
    const client = mockClient([], { message: "boom" });
    await expect(getPipeline({}, client as never)).rejects.toThrow(/boom/);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/mcp/tools/__tests__/get-pipeline.test.ts`
Expected: FAIL — `Cannot find module '../get-pipeline'`

- [ ] **Step 3: Write the implementation**

```ts
/**
 * get_pipeline — the Kanban board, summarized.
 *
 * Reports every status in the db contract including empty ones, so Claude can
 * say "nothing in finishing" rather than omitting the stage and leaving Sue to
 * infer it.
 *
 * Rows carrying a status outside the contract are counted separately rather
 * than silently dropped. Two existing routes write 'quote_sent' and 'scheduled',
 * which the live CHECK constraint rejects, so a nonzero unknownStatusCount is a
 * real signal worth surfacing rather than hiding.
 */

import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import { STATUS_VALUES } from "@/lib/db-contract";

export const getPipelineInput = z.object({});
export type GetPipelineInput = z.input<typeof getPipelineInput>;

export interface PipelineStage {
  count: number;
  totalBidAmount: number;
  leads: { id: string; name: string; bid_amount: number | null }[];
}

export interface GetPipelineResult {
  stages: Record<string, PipelineStage>;
  totalLeads: number;
  unknownStatusCount: number;
}

export async function getPipeline(
  raw: GetPipelineInput,
  client: SupabaseClient,
): Promise<GetPipelineResult> {
  getPipelineInput.parse(raw);

  const { data, error } = await client
    .from("submissions")
    .select("id,name,status,bid_amount")
    .eq("is_test", false)
    .is("archived_at", null);

  if (error) throw new Error(`get_pipeline failed: ${error.message}`);

  const stages: Record<string, PipelineStage> = {};
  for (const status of STATUS_VALUES) {
    stages[status] = { count: 0, totalBidAmount: 0, leads: [] };
  }

  let unknownStatusCount = 0;
  let totalLeads = 0;

  for (const row of (data ?? []) as {
    id: string;
    name: string;
    status: string;
    bid_amount: number | null;
  }[]) {
    const stage = stages[row.status];
    if (!stage) {
      unknownStatusCount += 1;
      continue;
    }
    stage.count += 1;
    stage.totalBidAmount += row.bid_amount ?? 0;
    stage.leads.push({ id: row.id, name: row.name, bid_amount: row.bid_amount });
    totalLeads += 1;
  }

  return { stages, totalLeads, unknownStatusCount };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/mcp/tools/__tests__/get-pipeline.test.ts`
Expected: PASS, 5 tests.

- [ ] **Step 5: Commit**

```bash
git add src/lib/mcp/tools/get-pipeline.ts src/lib/mcp/tools/__tests__/get-pipeline.test.ts
git commit -m "feat(mcp): get_pipeline tool"
```

---

## Task 7: Register the tools and serve them (authless spike)

This is Phase 0 of the spec: prove transport, tool schemas, and mobile connector support before adding auth. **The authless deployment is thrown away, not shipped** — a secret URL is a bearer credential that lives in logs and in Claude's config.

**Files:**
- Create: `src/lib/mcp/register.ts`
- Create: `src/app/api/mcp/route.ts`

- [ ] **Step 1: Write `register.ts` using the signature recorded in Task 1**

Open the registration signature you wrote down in Task 1 Step 3 and use it here. The four tools are already written and tested; this file only wires them up. Each registration needs: the tool name (`search_leads`, `get_lead`, `get_pipeline`, `search_copyblocks`), a one-line description, the exported Zod input schema, and a handler that calls the exported function with `createServiceSupabaseClient()` from `@/lib/supabase/service`.

Put the README's actual signature in a comment at the top of the file, with the `mcp-handler` version you resolved, so the next person does not have to rediscover it.

- [ ] **Step 2: Write the route**

```ts
// Node runtime: mcp-handler@2 requires Node 20+, and the service-role Supabase
// client is not Edge-safe.
export const runtime = "nodejs";
export const maxDuration = 60;
```

Export the handler from `createMcpHandler` as both `GET` and `POST`.

- [ ] **Step 3: Verify transport locally**

```bash
npm run dev
curl -sS -X POST http://localhost:3000/api/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | head -40
```

Expected: a JSON-RPC result listing exactly four tools with their input schemas. If you get an HTML error page, the route did not compile; if you get `-32601`, the method name or handler export is wrong.

- [ ] **Step 4: Verify a tool actually returns data**

```bash
curl -sS -X POST http://localhost:3000/api/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"search_copyblocks","arguments":{"query":"front door"}}}' | head -40
```

Expected: matching copyblocks. `search_copyblocks` is the right smoke test because it needs no database credentials.

- [ ] **Step 5: Confirm no bearer tokens can leak through the wire**

```bash
curl -sS -X POST http://localhost:3000/api/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"get_pipeline","arguments":{}}}' \
  | grep -E 'client_token|reply_token' && echo "LEAK — STOP" || echo "clean"
```

Expected: `clean`. If this prints `LEAK — STOP`, do not proceed to Task 8 — fix `columns.ts` first.

- [ ] **Step 6: Commit**

```bash
git add src/lib/mcp/register.ts src/app/api/mcp/route.ts
git commit -m "feat(mcp): serve read tools over Streamable HTTP (authless spike)"
```

---

## Task 8: OAuth — protected resource metadata and token verification

**Do not start this task until all four Prerequisites are done.** It cannot be verified end-to-end otherwise, and a half-verified auth layer is worse than none because it looks finished.

**Files:**
- Create: `src/lib/mcp/auth.ts`
- Create: `src/app/.well-known/oauth-protected-resource/route.ts`
- Create: `src/app/.well-known/oauth-protected-resource/api/mcp/route.ts`
- Modify: `src/app/api/mcp/route.ts`
- Test: `src/lib/mcp/__tests__/auth.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, it, expect, beforeEach, vi } from "vitest";
import { authorizeClaims } from "../auth";

describe("authorizeClaims", () => {
  beforeEach(() => {
    vi.stubEnv("ADMIN_EMAILS", "sue@suewheelerstl.com,peter@revelocity.co");
  });

  it("authorizes an allowlisted email", () => {
    expect(authorizeClaims({ email: "sue@suewheelerstl.com" })).toBe(true);
  });

  it("matches case-insensitively", () => {
    expect(authorizeClaims({ email: "Sue@SueWheelerSTL.com" })).toBe(true);
  });

  it("denies an authenticated but non-allowlisted email", () => {
    expect(authorizeClaims({ email: "stranger@example.com" })).toBe(false);
  });

  it("denies when the token carries no email claim", () => {
    expect(authorizeClaims({})).toBe(false);
  });

  it("denies everyone when ADMIN_EMAILS is unset — fails closed", () => {
    vi.stubEnv("ADMIN_EMAILS", "");
    expect(authorizeClaims({ email: "sue@suewheelerstl.com" })).toBe(false);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/mcp/__tests__/auth.test.ts`
Expected: FAIL — `Cannot find module '../auth'`

- [ ] **Step 3: Write `authorizeClaims`, delegating the policy**

```ts
/**
 * MCP authorization — same policy as the web admin, one definition.
 *
 * Deliberately reuses isAuthorizedAdmin() from src/lib/auth/admin-guard.ts
 * rather than reading ADMIN_EMAILS again. Two parallel authorization models
 * drift apart, and that drift is exactly the class of bug that left this CRM
 * open to any Google account until 2026-09-03.
 *
 * Inherits the fail-closed property: unset ADMIN_EMAILS denies everyone.
 */

import { isAuthorizedAdmin } from "@/lib/auth/admin-guard";

export function authorizeClaims(claims: { email?: unknown }): boolean {
  const email = typeof claims.email === "string" ? claims.email : undefined;
  return isAuthorizedAdmin(email ?? null);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/mcp/__tests__/auth.test.ts`
Expected: PASS, 5 tests.

- [ ] **Step 5: Prove the token-audience question before writing the verifier**

This is the largest technical risk in the spec and it is unresolved. Supabase's documentation never mentions RFC 8707 resource indicators, while the MCP specification requires servers to validate that a token was issued for them.

Complete one OAuth flow against the enabled Supabase OAuth server, capture the resulting access token, and inspect it:

```bash
node -e 'const t=process.argv[1];const p=JSON.parse(Buffer.from(t.split(".")[1],"base64url"));console.log(JSON.stringify({aud:p.aud,iss:p.iss,email:p.email,client_id:p.client_id,scope:p.scope},null,2))' "<paste-token>"
```

Record the actual `aud` value. Then choose:

- **`aud` matches the MCP server URL** → validate `aud` strictly in Step 6.
- **`aud` is Supabase's own value** → strict validation is impossible as-is. Configure a Supabase **Custom Access Token Hook** to set `audience`, re-run this step, and only then continue. Do not skip to accepting any Supabase-issued token: that accepts tokens minted for *any* client of this project, which is a confused-deputy vulnerability.

Write the observed claim shape into a comment in `auth.ts`. The next person will need it and cannot derive it from documentation.

- [ ] **Step 6: Write the JWT verifier**

Using `jose`, verify against Supabase's JWKS at `https://khioedholasaxemmtooz.supabase.co/auth/v1/.well-known/jwks.json` (verified live, returns 200). Check the signature, `exp`, `iss`, the `aud` per Step 5's finding, and pin `client_id` to the single pre-registered client. Then apply `authorizeClaims`. Return `undefined` for any failure so `withMcpAuth` emits the `401` challenge.

- [ ] **Step 7: Serve protected resource metadata at both paths**

Use `protectedResourceHandler({ authServerUrls: ["https://khioedholasaxemmtooz.supabase.co/auth/v1"] })` and export `metadataCorsOptionsRequestHandler` as `OPTIONS`. Both route files serve the same document — Claude probes the path-suffixed variant first, then the bare one.

The `resource` field must match the MCP server URL exactly as typed into Claude, including path. Claude uses only the first entry of `authorization_servers`.

- [ ] **Step 8: Wrap the handler**

Replace the bare export in `src/app/api/mcp/route.ts` with `withMcpAuth(handler, verifyToken, { required: true, resourceMetadataPath: "/.well-known/oauth-protected-resource" })`.

- [ ] **Step 9: Verify the 401 challenge**

```bash
curl -sSi -X POST https://suewheelerstl.com/api/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | head -20
```

Expected: `HTTP/2 401` **and** a `WWW-Authenticate: Bearer resource_metadata="..."` header. A `200` with an error body produces no auth prompt in Claude at all — the status code is what triggers it.

Also confirm no redirect: the request must not return `307`. If it does, the apex→www prerequisite is not done and auth will fail with a misleading credentials error.

- [ ] **Step 10: Connect from Claude and verify on mobile**

Add the connector at `https://suewheelerstl.com/api/mcp`, choosing "Use your own OAuth client" with the pre-registered client ID and a blank secret. Complete consent, then run a query from **the phone** — this is the empirical check for whether custom connectors work on mobile, which Anthropic implies but never states.

- [ ] **Step 11: Commit**

```bash
git add src/lib/mcp/auth.ts src/app/.well-known src/app/api/mcp/route.ts src/lib/mcp/__tests__/auth.test.ts
git commit -m "feat(mcp): OAuth via Supabase AS, reusing the ADMIN_EMAILS allowlist"
```

---

## Task 9: Full-suite verification

- [ ] **Step 1: Run everything**

```bash
npx vitest run && npx tsc --noEmit && npx next build
```

Expected: all tests pass (baseline before this plan is 32 passed / 2 skipped; this plan adds roughly 31), `tsc` exit 0, build succeeds.

- [ ] **Step 2: Assert the PII guarantee across every tool at once**

```bash
grep -rn 'select("\*")\|select(`\*`)' src/lib/mcp/tools/ && echo "FAIL: a tool uses select(*)" || echo "clean"
```

Expected: `clean`.

Scoped to `tools/` deliberately. Searching all of `src/lib/mcp/` matches `columns.ts`'s own
docstring, where the string appears in prose explaining the prohibition — the file that
documents the rule trips the grep that enforces it.

- [ ] **Step 3: Extend the schema-drift gate to cover MCP columns**

Add every column in `SUBMISSION_COLUMNS` to the `submissions` entry in `REQUIRED_COLUMNS` in `src/lib/db-contract.ts`, so `src/lib/__tests__/schema-drift.test.ts` fails when the live database drifts from what the MCP reads.

This matters more here than it looks. `bid_amount`, `bid_status`, and `bid_start_date` have **no committed DDL** — `docs/MIGRATIONS.md` records 10 remote migrations against 4 committed files. The MCP reads columns that exist only by convention. This converts that invisible assumption into a failing test.

Note the drift test self-skips unless `SUPABASE_DB_URL` is set, so it must be run with that variable present to actually gate anything.

- [ ] **Step 4: Commit**

```bash
git add src/lib/db-contract.ts
git commit -m "test(mcp): cover MCP-read columns in the schema drift gate"
```

---

## Self-Review

**Spec coverage.** Transport, auth, the four read tools, column allowlists, UUID-only resolution, status validation, the `is_test`/`archived_at` filters, error surfacing, and the schema-drift extension all map to tasks. Create tools, update tools, confirm-preview semantics, `propose_bid_amount`/`set_bid_amount`, the import script, and the Project are explicitly out of scope for this plan and belong to the follow-on.

**Placeholders.** Two steps deliberately describe intent rather than showing code: Task 7 Step 1 (tool registration) and Task 8 Step 6 (JWT verification). This is not evasion — `mcp-handler`'s 2.x registration signature and Supabase's actual token claim shape were **not verifiable at planning time**, and Vercel's own docs currently show a 1.x API against a 2.x package. Inventing plausible code for either would be worse than instructing the engineer to read the resolved package and the real token. Both steps say exactly where to look and what to record.

**Type consistency.** `SUBMISSION_SELECT` is defined in Task 2 and consumed unchanged in Tasks 4 and 5. `STATUS_VALUES` is imported from `src/lib/db-contract.ts` in Tasks 4 and 6 and never redefined. Every tool exports `<name>Input` as a Zod schema plus a `<name>` async function taking `(input, client)`, and Task 7 depends on exactly that shape.
