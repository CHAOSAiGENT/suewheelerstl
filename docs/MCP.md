# CRM MCP Server

A remote MCP server that lets Sue's own Claude — desktop, web, and phone — work
against the CRM for **Wood Refinishing by Sue Wheeler, LLC**. It searches leads,
opens a lead in full, summarises the pipeline, and searches her bid copyblock
library.

It is a route inside this Next.js app (`src/app/api/mcp/route.ts`), not a separate
service. It reuses the app's Supabase service client and, once OAuth lands, the
app's `ADMIN_EMAILS` allowlist.

Design spec: `docs/superpowers/specs/2026-09-03-crm-mcp-design.md`
Implementation plan: `docs/superpowers/plans/2026-09-03-crm-mcp-read-tools.md`

---

## 1. Status

**Built and tested:** four read tools (`search_leads`, `get_lead`, `get_pipeline`,
`search_copyblocks`), the column allowlist, the Streamable HTTP route, and
schema-drift coverage for every column and table the tools touch. 26 tests under
`src/lib/mcp/`; the full suite is larger and includes the live-database
schema-drift gate.

**Not built:** OAuth. There is no authentication of any kind on the handler.

**Therefore the endpoint is disabled in every environment.** `src/app/api/mcp/route.ts`
returns `404` unless `MCP_SPIKE_ENABLED === "true"`, which is set locally and
nowhere else. Do not remove that guard until OAuth lands — the route reads the
entire CRM, including customer names, home addresses, phone numbers, private
admin notes, and the full message history.

Nothing else is built: no create tools, no update tools, no bid-amount tools.

**Blockers** are in `TODO.md` §4 with the evidence attached. In summary: OAuth
(Task 8) cannot start until three things outside this repo are done — the apex→www
redirect is reversed, Supabase's OAuth 2.1 Server is switched on (currently
`404 feature_disabled`), and `ADMIN_EMAILS` is added to Vercel Preview. Within
Task 8 the largest open risk is the **token audience**: Supabase's documentation
never mentions RFC 8707 resource indicators, while the MCP spec requires a server
to validate that a token was minted for it. That must be proven end-to-end with a
real token before the verifier is written.

---

## 2. Architecture

```
Sue's Claude (desktop / web / mobile)
   │  MCP over Streamable HTTP
   ▼
src/app/api/mcp/route.ts          endpoint + MCP_SPIKE_ENABLED kill switch
   │
   ├─ src/lib/mcp/register.ts     thin adapter: pure tools → MCP server
   │     └─ src/lib/mcp/tools/*.ts    pure async (input, client) => data
   │           └─ src/lib/mcp/columns.ts   column allowlist
   │
   └─ src/lib/supabase/service.ts  existing service-role client
   ▼
Supabase: submissions · submission_notes · messages · bid_blocks
```

| File | Responsibility |
|---|---|
| `src/lib/mcp/tools/search-leads.ts` | Filter submissions, return candidates with UUIDs |
| `src/lib/mcp/tools/get-lead.ts` | One submission plus its notes, messages, bid blocks |
| `src/lib/mcp/tools/get-pipeline.ts` | Counts and bid totals grouped by status |
| `src/lib/mcp/tools/search-copyblocks.ts` | Search the static copyblock library — no database |
| `src/lib/mcp/columns.ts` | The column allowlist; the one home of the PII guarantee |
| `src/lib/mcp/register.ts` | Maps the pure tools onto an `McpServer` |
| `src/app/api/mcp/route.ts` | The endpoint, the runtime config, and the kill switch |

**Why the tools are pure.** Each tool is an exported async function with the shape
`(input, client) => data` plus an exported Zod schema — `searchLeads` /
`searchLeadsInput`, `getLead` / `getLeadInput`, and so on. None of them import
anything from `mcp-handler` or `@modelcontextprotocol/server`. They are unit-tested
by passing a mock Supabase builder directly, with no protocol in the loop and no
server to start. `register.ts` is the only file that knows MCP exists, and it holds
no business logic: if a rule about the CRM is being decided in `register.ts`, it is
in the wrong file.

**Why the tools are thin.** A bid in this system is prose plus one number — an
ordered list of `bid_blocks` (`{ title, body, photo_paths[], sort_order }`) and a
single `submissions.bid_amount`. There are no line items, no labour/materials split,
no arithmetic to get subtly wrong. The intelligence lives in the model and in the
copyblock library, not in code we have to maintain.

---

## 3. The tools

The `description` strings below are quoted verbatim from `register.ts`. They are how
Claude picks a tool, so they are part of the interface — editing one changes runtime
behaviour.

### `search_leads`

> Find leads (contact-form submissions) by customer name, email, address, or pipeline
> stage. Returns a list of matching leads including each lead's UUID `id`. Use this
> FIRST whenever the user refers to a job by name ("the Hartmann job") — get_lead and
> every write tool accept only a UUID, never a name, so this is how a name becomes an
> id. Excludes archived leads and automated health-monitor test rows. Returns a
> summary row per lead, not the full history; call get_lead for that.

**Input** (`searchLeadsInput`, all optional):

| Field | Type | Notes |
|---|---|---|
| `query` | string | Free text, `ILIKE %query%` against `name`, `email`, `address` |
| `status` | enum | One of the 8 `STATUS_VALUES` from `src/lib/db-contract.ts` |
| `limit` | int 1–50 | Default 20 |

**Returns** `{ leads: Row[], count: number }` — each row is the full
`SUBMISSION_COLUMNS` allowlist, ordered `created_at` descending.

**Reach for it when** the user names a customer or a job. It is the only path from a
human-readable name to a UUID.

An invalid `status` is rejected with a message that echoes the rejected value back:
`Invalid status "quote_sent" — expected one of to_bid, contacted, …`. Zod 4's default
enum error lists the allowed options but never the input, which leaves a model that
guessed wrong with nothing to correct against.

**No date-range filter exists**, despite the design spec's tool table listing one.
The code is the truth here.

### `get_lead`

> Open one lead in full: the submission record plus its private admin notes, the
> two-way message thread with the customer, and any bid blocks already drafted for it.
> Use this once you have a UUID and need the working context to answer a question,
> write a reply, or draft a bid. Takes a UUID only — run search_leads first to resolve
> a customer name to an id. Returns lead: null if no lead has that id.

**Input**: `{ id: string }`, validated as a UUID. Nothing else.

**Returns** `{ lead, notes, messages, bidBlocks }`:

- `lead` — the `SUBMISSION_COLUMNS` allowlist, or `null` if no row has that id
- `notes` — `submission_notes` as `id, body, created_at`, newest first
- `messages` — `messages` as `id, body, is_from_admin, sent_by_email, created_at`, oldest first
- `bidBlocks` — `bid_blocks` as `id, source_key, title, body, sort_order, photo_paths`, by `sort_order`

All three child queries run in parallel; any error in any of them throws. When
`lead` is `null` the three arrays are empty and the child queries are never issued.

**Reach for it when** you already have a UUID and need the working context.

It does **not** return crew members, despite the design spec's tool table saying
"notes, messages, bid blocks, crew". The code is the truth here.

### `get_pipeline`

> Snapshot of the whole Kanban board: every pipeline stage with its lead count, the sum
> of bid amounts in that stage, and the id + name + bid amount of each lead in it. Use
> this for "what's on my plate", "what needs bidding", or any question about the
> business as a whole rather than one customer. Empty stages are included with a count
> of 0, so an absent stage means the stage does not exist, not that it is empty. Takes
> no arguments.

**Input**: `z.object({})`. No arguments.

**Returns** `{ stages, totalLeads, unknownStatusCount }`. `stages` is keyed by every
one of the 8 contract statuses — pre-seeded to `{ count: 0, totalBidAmount: 0, leads: [] }`
so empty stages are reported rather than omitted, which lets Claude say "nothing in
finishing" instead of leaving Sue to infer it from an absence.

This tool selects only `id,name,status,bid_amount` — not the full allowlist.

`unknownStatusCount` counts rows carrying a status outside `STATUS_VALUES` rather
than silently dropping them. Two existing routes write `quote_sent` and `scheduled`,
which the live CHECK constraint rejects, so a nonzero value here is a real signal.

### `search_copyblocks`

> Search Sue's copyblock library — reusable bid language mined from her past jobs,
> grouped into categories, with historical pricing carried in the text (occurrence
> counts, ranges, medians). Use this before writing ANY bid copy or suggesting ANY
> price, so the wording is Sue's own and the number is grounded in what she has
> actually charged rather than invented. Omit `query` to list the categories and browse.
> Reads a static library — no customer data, no database.

**Input**: `query?`, `categoryKey?`, `limit` (int 1–50, default 20).

**Returns** `{ blocks, totalMatched, categories }`. `categories` is always the full
list — 14 categories, 94 blocks, counted from `src/lib/bid/copyblock-library.json` —
on every call, matched or not. With no `query`, `blocks` is `[]` and `totalMatched`
is `0`; the call is a category listing. `totalMatched` is the match count before
`limit` is applied, so it can exceed `blocks.length`.

Matching is a case-insensitive substring over title and body. No stemming, no
ranking.

**Reach for it before writing any bid copy or naming any price.** Pricing
intelligence lives as prose inside the block bodies, e.g.
`FRONT DOOR — 121 occurrences | Range: $200–$8,000 | Median: $2,500`.

This is the one tool that reads no database and needs no credentials, which makes it
the right smoke test for the transport.

### The UUID-only rule

`get_lead` — and every write tool when they exist — accepts a UUID and never a name.
`search_leads` is the only way a name becomes an id, and it returns candidates so a
human can see the choice being made.

This is the difference between editing the right customer and editing a
similarly-named one. `get-lead.test.ts` asserts it structurally: passing
`{ id: "the-hartmann-job" }` rejects, and `client.from` is never called — validation
happens before the database is touched.

### The `is_test` / `archived_at` filters

`search_leads` and `get_pipeline` both apply `.eq("is_test", false)` and
`.is("archived_at", null)`, matching the Kanban board at
`src/app/admin/page.tsx:25-27`.

The form health monitor (`docs/MONITORING.md`) inserts a **real** `submissions` row
every six hours. Without the `is_test` filter it appears in Sue's pipeline as a lead,
every six hours, forever.

`get_lead` deliberately does not filter — if you hand it the id of an archived or
test row, you get that row. It is a direct lookup by a caller who already has the id.

---

## 4. The PII guarantee

**No MCP read may use `select("*")`.**

`submissions.client_token` and `submissions.reply_token` are **bearer credentials**:

- `client_token` opens a customer's portal at `/my-request/<token>`
- `reply_token` is embedded in email headers, so anyone holding it can forge a
  message that injects into that customer's thread

Anything an MCP tool returns lands in a model's context and **persists in
conversation history**. A leaked token is not a transient exposure; it is written
into a transcript.

### The mechanism

Every tool selects an explicit list. The list lives in `src/lib/mcp/columns.ts` and
nowhere else:

- `FORBIDDEN_COLUMNS` — `["client_token", "reply_token"]`
- `SUBMISSION_COLUMNS` — the 22 columns MCP reads may return
- `SUBMISSION_SELECT` — `SUBMISSION_COLUMNS.join(",")`, the PostgREST select string

`search_leads` and `get_lead` pass `SUBMISSION_SELECT`. `get_pipeline` passes a
narrower literal. `get_lead`'s three child tables pass explicit literals.
`search_copyblocks` touches no database.

`columns.ts` is a separate file specifically so the guarantee has one home rather
than four copies that can drift. **Add a column there, not at a call site.**

### How it is tested

- `src/lib/mcp/__tests__/columns.test.ts` — no `FORBIDDEN_COLUMNS` entry appears in
  `SUBMISSION_COLUMNS`; `SUBMISSION_SELECT` round-trips to the same array with no
  whitespace.
- `src/lib/mcp/tools/__tests__/search-leads.test.ts` — the select argument **is**
  `SUBMISSION_SELECT` and does not contain `*`.
- `src/lib/mcp/tools/__tests__/get-lead.test.ts` — records the select string for all
  four tables and asserts each contains neither token and is not `"*"`.

### It was mutation-tested

An assertion that no forbidden column is present passes trivially if the code path
it guards never runs. Both assertions were checked by breaking the code and
confirming the tests notice. Re-verified 2026-09-14 against a scratchpad copy of
the repo, not the working tree:

| Mutation | Result |
|---|---|
| `.select(SUBMISSION_SELECT)` → `.select("*")` in `search-leads.ts` and `get-lead.ts` | 2 tests fail in 2 files |
| `"client_token"` added to `SUBMISSION_COLUMNS` | 2 tests fail in 2 files |

The unmutated suite is 26 passing tests, so both failures are real signal.

### This is a deliberate departure

The rest of the codebase uses `select("*")` in 11 places, including the admin Kanban
board. That is fine — those paths render to an authenticated admin browser, not into
a model's transcript. **Do not "simplify" a new MCP tool back to `select("*")`.**

---

## 5. Running it locally

The route returns `404` unless `MCP_SPIKE_ENABLED=true`. It is not in `.env.local`;
set it on the command line so it stays scoped to that one process.

```bash
cd /Users/peterledgrowth/CHAOS/_clients/client_sites/suewheelerstl
MCP_SPIKE_ENABLED=true npm run dev
```

> **The tools read the live production Supabase database.** There is no local or
> seeded database in this project. Anything you print is real customer data.

### The wire format is Server-Sent Events

Responses arrive as `event: message\ndata: {…}`, not as a bare JSON body. **Piping
straight to `jq` fails** with `jq: parse error: Invalid numeric literal at line 1,
column 6`, which looks exactly like a broken route. Strip the prefix first:

```
| sed -n 's/^data: //p' | jq
```

### `tools/list`

```bash
curl -sS -X POST http://localhost:3000/api/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' \
  | sed -n 's/^data: //p' | jq -r '.result.tools[].name'
```

Expected:

```
search_leads
get_lead
get_pipeline
search_copyblocks
```

An HTML error page means the route did not compile. `-32601` means the method name
or the handler export is wrong. `{"error":"Not found"}` with `404` means
`MCP_SPIKE_ENABLED` is not set on the dev-server process.

### `tools/call`

`search_copyblocks` is the right smoke test — it needs no database credentials and
returns no customer data:

```bash
curl -sS -X POST http://localhost:3000/api/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"search_copyblocks","arguments":{"query":"front door","limit":2}}}' \
  | sed -n 's/^data: //p' | jq -r '.result.content[0].text' | jq '{totalMatched, keys: [.blocks[].key]}'
```

### Confirming no token can reach the wire

Run this against **`search_leads` or `get_lead`**, never `get_pipeline`.
`get_pipeline` selects only `id,name,status,bid_amount`, so a clean result there
proves nothing even if `columns.ts` were completely wrong. The tools that exercise
the guarantee are the ones querying `submissions` with `SUBMISSION_SELECT` — the
table that actually holds the credentials.

Check that data came back before trusting the grep, or a 500 page, a `-32601`, and
an empty result set all print "clean":

```bash
BODY=$(curl -sS -X POST http://localhost:3000/api/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"search_leads","arguments":{"limit":5}}}')

echo "$BODY" | grep -q '\\"name\\"' || { echo "NO DATA CAME BACK — the grep below is meaningless"; exit 1; }
echo "$BODY" | grep -qE 'client_token|reply_token' && echo "LEAK — STOP" || echo "clean"
```

The `grep -q` prints nothing, so no customer data reaches your terminal. If this
prints `LEAK — STOP`, fix `columns.ts` before doing anything else.

### `GET` returns 405

The route exports the handler as both `GET` and `POST`, but `mcp-handler` serves
statelessly and answers `405` to GET and DELETE session operations. That is correct
behaviour, not a misconfigured route.

---

## 6. Connecting from Claude

**This does not work yet.** There is no OAuth, and the endpoint is disabled in every
deployed environment. This section records what will be required once Task 8 lands.

1. Claude → Settings → Connectors → **Add custom connector**
2. URL: `https://suewheelerstl.com/api/mcp`
3. Expand **Advanced settings** → tick **Use your own OAuth client**
4. Paste the pre-registered Supabase client ID. **Leave the client secret blank** —
   Claude is a public client and uses PKCE S256, which it sends on every
   authorization request.
5. Connect → Supabase consent screen → back to Claude

Dynamic Client Registration stays off. One client is registered by hand; leaving DCR
open would let any MCP client register against the Supabase project.

### The redirect trap

**Claude drops the `Authorization` header across a cross-host redirect.** The failure
presents as *"Authorization with the MCP server failed"* — a credentials error that
is not a credentials problem, and which will cost an afternoon if you debug it as one.

The apex currently `307`s to `www` (verified live: `https://suewheelerstl.com/api/mcp`
→ `307 https://www.suewheelerstl.com/api/mcp`). So the domain consolidation in
**`docs/DOMAINS.md` is a hard prerequisite**, not an SEO nicety. Two hazards that
runbook sequences around: Vercel defaults domain redirects to 307, which must be set
to 308; and setting `www`→apex before clearing the apex's own redirect creates a loop.

### Two more connection failures with misleading symptoms

- **Vercel Deployment Protection returns 403 to Anthropic's egress** (`160.79.104.0/21`,
  IPv4 only), which presents as *"Couldn't reach the MCP server."* Test against
  production or a protection-bypass URL.
- **A `200` with `isError: true` produces no auth prompt at all,** and Claude ignores
  `WWW-Authenticate` on a `200`. The unauthenticated response must be a real `401`.

---

## 7. Verified protocol facts

Verified against `node_modules/` on 2026-09-03 and re-verified 2026-09-14. This
ecosystem moved fast and most writing about it is stale; check the version before
trusting anything below.

| Fact | Verified against |
|---|---|
| Package is **`mcp-handler@2.1.1`**, peers `@modelcontextprotocol/server ^2.0.0` and `next >=13.0.0`, `engines.node >=20` | `node_modules/mcp-handler/package.json` |
| Resolved tree: `mcp-handler@2.1.1`, `@modelcontextprotocol/server@2.0.0`, `zod@4.5.4`, `next@15.5.19` | `npm ls` |
| **`server.tool(...)` is gone.** Use `server.registerTool(name, config, cb)` | `@modelcontextprotocol/server/dist/createMcpHandler-*.d.cts` — no `tool(` member declared |
| `inputSchema` takes a **full `z.object({...})`**. The raw-shape overload exists but is `@deprecated "Wrap with z.object({...}) instead"` | same file, the two `registerTool` overloads |
| `createMcpHandler(initializeServer, options?)` returns `(request: Request) => Promise<Response>` | `mcp-handler/dist/index.d.ts` — it is `createMcpRouteHandler`, exported under the `createMcpHandler` alias |
| `options` is `ServerOptions & { serverInfo?, verboseLogs?, onEvent?, maxSubscriptions? }` | `McpHandlerOptions` in the same file |
| **Removed in 2.x:** `basePath`, `streamableHttpEndpoint`, `sseEndpoint`, `sseMessageEndpoint`, `disableSse`, `redisUrl`, `maxDuration`, `sessionIdGenerator`. Mount at the route; set duration with Next's `export const maxDuration` | `mcp-handler/README.md` line 105 |
| **Redis is not needed.** "Redis is no longer needed or used" | `mcp-handler/README.md` line 87 |
| Transport is **Streamable HTTP**. HTTP+SSE (2024-11-05) is removed in 2.x | `mcp-handler/README.md` line 87 |
| Protocol `2026-07-28` is served natively and is **stateless — no sessions**; 2025-era clients are served from the same handler via the SDK's stateless legacy fallback, and GET/DELETE session operations answer `405` | `mcp-handler/README.md` lines 85–86; the `405` reproduced live |
| Auth context in tool callbacks is **`ctx.http?.authInfo`** (1.x called it `extra.authInfo`) | `@modelcontextprotocol/server/dist/index.d.cts:57` — "surfaces to MCP request handlers via `ctx.http.authInfo`" |
| `withMcpAuth`, `protectedResourceHandler`, `generateProtectedResourceMetadata`, `metadataCorsOptionsRequestHandler` are all exported from `mcp-handler` | `mcp-handler/dist/index.d.ts:155` |
| The README links `docs/AUTHORIZATION.md`, `docs/CLIENTS.md`, `docs/ADVANCED.md` — **all dead.** `package.json` has `"files": ["dist"]`, so the tarball ships only `dist/`, `package.json`, and `README.md` | `ls node_modules/mcp-handler/` → `dist README.md package.json` |

**Authoritative sources when the above goes stale:** `node_modules/mcp-handler/README.md`
and `node_modules/mcp-handler/dist/index.d.ts` for the handler;
`node_modules/@modelcontextprotocol/server/dist/createMcpHandler-*.d.cts` for
`registerTool` and the server surface.

**Vercel's own MCP documentation page is stale** — it documents the 1.x API
(`server.tool(...)`, `basePath`, `app/api/[transport]/route.ts`, `redisUrl`,
`maxDuration`) against a 2.x package. Every one of those was removed. Do not lift
snippets from it.

INFERRED, not confirmed against `node_modules/`: that `@vercel/mcp-adapter` is the
old name of this package and now only re-exports it. The rename is recorded in the
design spec; `@vercel/mcp-adapter` is not installed here, so it could not be checked.
`mcp-handler`'s README does not mention the old name.

Also noted while verifying: `package.json` `exports` points the CJS types at
`./dist/index.d.cjs`, but the file on disk is `dist/index.d.ts`. This has not caused a
problem — the route resolves through the ESM path — but it is worth knowing if a CJS
consumer ever reports missing types.

---

## 8. Adding a new tool

1. **Write the pure function** in `src/lib/mcp/tools/<name>.ts`, shaped
   `(input, client) => data`. Export the function and its Zod schema
   (`export const <name>Input = z.object({...})`). Import nothing from `mcp-handler`
   or `@modelcontextprotocol/server` — that dependency is what would make it
   untestable without a protocol.
2. **Parse the input inside the function** (`<name>Input.parse(raw)`), not only at the
   registration boundary. That is what makes the unit test meaningful.
3. **If it reads customer data, use a column allowlist.** Add to `SUBMISSION_COLUMNS`
   in `src/lib/mcp/columns.ts`, or add a new allowlist there. Never `select("*")`,
   and never inline a column list at the call site.
4. **Accept UUIDs, not names,** for anything that targets a specific record.
   `z.string().uuid()`. Name resolution belongs in `search_leads`.
5. **Validate `status` against `STATUS_VALUES`** from `src/lib/db-contract.ts` —
   likewise `BID_STATUS_VALUES` and `LOST_REASON_VALUES`. Do not retype the strings.
   Give the enum an error message that echoes the rejected input back.
6. **Throw on database errors. Never return an empty result.** A swallowed error lets
   a model report "no leads found" during an outage, which reads to Sue as fact and
   is not. Every existing tool throws `<tool> failed: ${error.message}` on a
   non-null `error`.
7. **Filter `is_test = false` and `archived_at IS NULL`** for anything that lists or
   aggregates leads, unless the tool is a direct lookup by id.
8. **Register it in `src/lib/mcp/register.ts`** with a description written for a model:
   what comes back, and when to reach for it. Name any prerequisite tool explicitly —
   `search_leads`'s description tells Claude to call it first precisely because that
   sentence is what makes the UUID rule stick at runtime.
9. **Extend `REQUIRED_COLUMNS` in `src/lib/db-contract.ts`** if the tool touches
   columns or tables not already listed. The schema-drift test asserts every entry
   exists in the live database. Several `submissions` columns the MCP reads have no
   committed DDL anywhere in this repo — `docs/MIGRATIONS.md` records 10 remote
   migrations against 4 committed files — so this listing is what turns an invisible
   assumption into a failing test the day it stops being true.
10. **Write the test first.** Mock the Supabase builder and assert the select string,
    the filters, and that a database error throws. See
    `src/lib/mcp/tools/__tests__/search-leads.test.ts` for the pattern.

---

## 9. Planned work

- **Create tools** — `create_lead`, `add_note`, `create_bid_blocks`. Creates are
  additive and recoverable, so they do not require confirmation.
- **Update tools** — `update_lead` (whitelisted fields only, mirroring
  `PATCH /api/admin/submissions/[id]`), `update_bid_blocks`.
- **`propose_bid_amount` / `set_bid_amount`** — `propose_bid_amount` returns a
  suggestion with reasoning and writes nothing; `set_bid_amount` writes
  `bid_amount` and requires an explicit confirmed value as an argument. The split
  exists because it makes "Sue sets the price" **structural** rather than a prompt
  instruction a model can talk itself past: if the only tool that writes a price
  demands a confirmed number, Claude cannot set a price Sue has not seen.
- **One-time import** of Sue's Mac bid files, dry-run first.
- **The Claude Project** carrying the copyblock library and her bidding methodology.
  MCP is the hands; the Project is the memory.

Deliberately not built: no delete, no archive, no sending email to customers, no
writes to `messages`, no writes to `bid_status` / `bid_sent_at` / `bid_file_url`.
Those belong to the send flow, which stays in the admin UI.

Full detail — tool tables, data flows, failure modes, phasing — is in
`docs/superpowers/specs/2026-09-03-crm-mcp-design.md`. Create and update tools need
their own implementation plan; one does not exist yet.
