# CRM MCP Server — Design

_2026-09-03. Status: approved, ready for implementation planning._

## Problem

Sue writes bids offline. Her Claude instance already manages bid customer data from
files on her Mac, but that work is disconnected from the CRM at `suewheelerstl.com`:
bids get written in one place and re-entered in another, and nothing she does on site
reaches the system until she is back at a desk.

We want her Claude to work directly against the CRM — read the pipeline, draft bids
from her notes, and keep records current — including from her phone while on a job.

## Goals

1. Claude **writes bids from Sue's notes**, using her own historical language.
2. Claude **reads and updates the CRM** — leads, statuses, crew, notes.
3. It works **on her phone**, not only at her desk.
4. A **one-time import** brings her existing Mac bid files into the CRM.
5. Nothing reaches a customer without a deliberate human act.

## Non-goals

- **Payments.** Explicitly out of scope. There is also nothing to integrate with:
  the codebase has no payment processing at all — only a Venmo deep link on the
  client portal and a `final_payment_confirmed` boolean Sue ticks by hand.
- **Deleting or archiving records.** Near-zero value, no undo. The admin UI can do it.
- **Sending email to customers.** See "The send stays human" below.
- **Replacing the bid builder.** The web UI remains; the MCP is a second path to the
  same data, not a migration off it.
- **Crew access.** Sue and Peter only. Crew logging in to see work orders is a
  separate, later, web-UI concern.

## Decisions

| Decision | Rationale |
|---|---|
| **Remote MCP, not local** | Local stdio servers work only in Claude Desktop and Claude Code. Sue does substantial on-site work, and a remote server reaches desktop, web, and mobile from one connector. Remote is a superset; building local would be choosing never to have mobile. |
| **Hosted inside the existing Next.js app** | Reuses the deployed app, its auth, its Supabase clients, and its domain logic. No second service to run, monitor, or pay for. |
| **Reuses `ADMIN_EMAILS` allowlist** | One authorization policy for both the web UI and the MCP. Two parallel policies drift apart — that is the exact class of bug being fixed in the same change window. |
| **Read + Create + Update; no Delete** | Matches what Sue actually needs. Creates are additive and recoverable; deletes are not. |
| **Confirm-before-write for updates** | Updates and overwrites need a human yes. Creates are frictionless — a junk row is recoverable, an overwritten bid price is not. |
| **Claude proposes a price; Sue sets it** | The prose is the labour; the price is the judgement. A bid is effectively an offer to a customer. |
| **The send stays human** | Drafting, pricing, and saving are reversible. An email leaving the building is not. |
| **A Claude Project carries the methodology** | MCP is the hands; the Project is the memory. The Project holds the copyblock library and how Sue bids; the MCP lets the result land in the CRM. Neither substitutes for the other. |

## Architecture

```
Sue's Claude (desktop / web / mobile)
   │  MCP over Streamable HTTP, OAuth
   ▼
suewheelerstl.com/api/mcp                    ← new
   │
   ├─ src/lib/auth/admin-guard.ts            ← existing, fails closed
   ├─ src/lib/mcp/tools/*.ts                 ← new, thin
   └─ src/lib/supabase/service.ts            ← existing service-role client
   ▼
Supabase: submissions · bid_blocks · submission_notes · messages · crew_members
```

The MCP layer is deliberately thin. Because a bid in this system is **prose plus one
number** — no line items, no rooms, no labour/materials split — the tools are close to
direct table access. Almost all the intelligence lives in the model and the Project,
not in code we have to maintain.

### Why the tools are thin

A bid consists of:

- an ordered list of `bid_blocks` — each a `{ title, body }` narrative block, plus
  `photo_paths[]` and `sort_order`
- a single `submissions.bid_amount` scalar
- an optional `bid_start_date`

There is no arithmetic to get subtly wrong. The existing 93-entry copyblock library
(`src/lib/bid/copyblock-library.json`) already carries pricing intelligence as prose,
e.g. `FRONT DOOR — 121 occurrences | Range: $200–$8,000 | Median: $2,500`. That library
functions as a purpose-built retrieval corpus for exactly this task.

## Auth

Remote MCP connectors expect an OAuth handshake — this is the single largest piece of
build work and the main technical risk in the project.

Requirements:

- Authorization reuses `isAuthorizedAdmin()` from `src/lib/auth/admin-guard.ts`.
  A caller who is authenticated but not on `ADMIN_EMAILS` is rejected.
- **Fails closed.** An unset or unparseable `ADMIN_EMAILS` denies everyone, matching
  the web guard's behaviour.
- No separate credential store, no MCP-specific user list, no bearer token in a config
  file that outlives its owner.

**Deployment prerequisite:** `ADMIN_EMAILS` must be set in every Vercel environment.
It is currently set in Production and Development but **not Preview**, which means
preview deploys reject all admin access. This must be fixed before the MCP ships, or
it will appear broken on every preview.

## Tool surface

### Read

| Tool | Behaviour |
|---|---|
| `search_leads` | Filter by name, address, status, date range. Returns candidates with UUIDs. |
| `get_lead` | Full detail for one submission: notes, messages, bid blocks, crew. |
| `get_pipeline` | Kanban summary grouped by the 8 `status` values. |
| `search_copyblocks` | Query the copyblock library. **This is the tool that makes bid-writing work.** |

All read tools:

- use an **explicit column allowlist** — never `select("*")`
- **never return `client_token` or `reply_token`**. These are bearer credentials
  granting portal access to a customer's record. The codebase currently does
  `select("*")` in most read paths, so this is a deliberate departure.
- filter `is_test = false` and `archived_at IS NULL`, matching the Kanban board.
  The health monitor inserts a real `submissions` row every six hours; without this
  filter Sue's pipeline fills with monitor noise.

### Create

| Tool | Behaviour |
|---|---|
| `create_lead` | New `submissions` row. Forces `status: 'to_bid'`, `bid_status: 'none'`, mirroring `POST /api/admin/submissions`. |
| `add_note` | Inserts `submission_notes`, mirrors text into `submissions.admin_notes` for the Kanban card preview. |
| `create_bid_blocks` | Batch-inserts ordered blocks for one submission. |

Creates do not require confirmation.

### Update

| Tool | Behaviour |
|---|---|
| `update_lead` | Whitelisted fields only, mirroring `PATCH /api/admin/submissions/[id]`: `status`, `admin_notes`, `lost_reason`, `lost_note`, `crew_member_ids`, `after_photos_uploaded`, `final_payment_confirmed`, `bid_start_date`. |
| `update_bid_blocks` | Edit `title`, `body`, `sort_order`. |
| `propose_bid_amount` | **Returns a suggestion with reasoning. Writes nothing.** |
| `set_bid_amount` | Writes `bid_amount`. Requires an explicit confirmed value. |

Splitting `propose_bid_amount` from `set_bid_amount` makes "Sue always sets the number"
a **structural** property rather than a prompt instruction. Prompt instructions are
advisory; a model can talk itself past them. If the only tool that writes a price
requires a confirmed value as an argument, Claude cannot set a price Sue has not seen.

### Not built, deliberately

- No delete, no archive
- No sending email to customers
- No writes to `messages` (the customer-facing correspondence table)
- No writes to `bid_status`, `bid_sent_at`, `bid_file_url` — those belong to the send
  flow, which stays in the admin UI

## Data flow

### Writing a bid from Sue's notes

```
Sue: "New bid, Hartmann on Flad — front door, two interior doors, newel post"
  → search_leads / create_lead        resolve or create the record
  → search_copyblocks                 her historical language + medians
  → create_bid_blocks                 draft narrative
  → propose_bid_amount                "$4,200 — FRONT DOOR median $2,500, +…"
Sue: "make it 3,900"
  → set_bid_amount(confirmed: 3900)
  → Sue opens the admin UI, reviews the rendered PDF, sends      ← human
```

### On-site CRM work (mobile)

`get_lead` for status, `update_lead` to move a card or assign crew, `add_note` for what
the homeowner just said. This is why remote was worth the auth cost.

### One-time import of her Mac files

A script, not an MCP tool, because it is not an ongoing capability. Runs on her Mac,
parses her existing bid files, and creates submissions plus bid blocks. **Dry-run mode
writes a report first**; nothing is committed until that report is reviewed.

## Failure modes

**Wrong-record writes.** Claude reasons about names ("the Hartmann job"); the database
uses UUIDs. Write tools accept **only a UUID**, never a name match. `search_leads`
returns candidates and Claude selects one. This is the difference between editing the
right customer and a similarly-named one.

**Status drift.** `src/app/api/admin/bid/route.ts` and
`src/app/api/client/accept-bid/route.ts` currently write `'quote_sent'` and
`'scheduled'` — values the live CHECK constraint rejects. MCP write tools validate
`status` against `STATUS_VALUES` in `src/lib/db-contract.ts` **before** the round-trip
and return the valid set on error. An opaque Postgres error invites Claude to guess.

**Confirmation is protocol-level.** Update tools called without `confirm` return a
preview — old value, new value — and write nothing.

**Partial writes.** A bid is several blocks. If block three fails, the tool reports
exactly which landed rather than claiming success on a half-written bid.

**PII in conversation history.** Anything a tool returns persists in Sue's Claude
history — customer addresses, private notes. Column allowlists bound the blast radius;
they do not eliminate it. This is an accepted trade, recorded rather than glossed.

**Incomplete migrations.** `bid_amount`, `bid_notes`, `bid_file_url`, `bid_status`,
`bid_sent_at`, `bid_accepted_at`, `updated_at`, `messages.is_bid`, and the entire
`submission_notes` table have **no committed DDL** — `docs/MIGRATIONS.md` records 10
remote migrations against 4 committed files. Roughly a third of the columns this MCP
writes to have no schema definition in version control. Mitigation: extend
`src/lib/__tests__/schema-drift.test.ts` to cover every column the MCP touches, which
converts an invisible assumption into a failing test the day it stops holding.

## Testing

Standard handler and auth tests, plus three that encode the guarantees:

1. **No read tool response contains `client_token` or `reply_token`** — asserted
   against the real serialized output of every read tool, not by inspection.
2. **Update tools without `confirm` perform zero writes** — asserted against a mocked
   Supabase client, so the safety property is proven rather than assumed.
3. **`set_bid_amount` rejects any call lacking an explicit confirmed value.**

Plus: authorization tests mirroring `src/lib/auth/__tests__/admin-guard.test.ts`
(allowlisted, non-allowlisted, unset `ADMIN_EMAILS` denies all), and status-validation
tests against `db-contract.ts`.

## Phasing

1. **Auth + transport.** `/api/mcp` speaking MCP over HTTP, OAuth handshake, guard
   wired. No tools beyond a health/identity probe. This is the risk; land it first.
2. **Read tools.** `search_leads`, `get_lead`, `get_pipeline`, `search_copyblocks`,
   with the token-leak test. Sue can use it and build trust before anything writes.
3. **Create tools.** `create_lead`, `add_note`, `create_bid_blocks`.
4. **Update tools.** `update_lead`, `update_bid_blocks`, `propose_bid_amount`,
   `set_bid_amount`, with confirm-preview semantics.
5. **Import script.** One-time migration of her Mac bid files, dry-run first.
6. **The Project.** Copyblock library and bidding methodology as Project knowledge.

## Open questions

- **OAuth specifics.** The exact handshake Claude's custom connectors expect, and
  whether an existing adapter (e.g. Vercel's MCP adapter) covers it, needs verifying
  against current documentation before Phase 1 is planned in detail.
- **Cowork.** Whether Cowork changes the Project recommendation is unverified. The
  MCP design is unaffected either way — it is the context layer that would change.
- **Her bid file formats.** Unknown until we see real examples. The import script
  should be built format-tolerant and adjusted against actual files.
- **`bid-files` bucket policy.** Never created in a migration; inferred private
  because the code always mints signed URLs. Only relevant if the MCP ever reads
  bid PDFs, which Phase 1–4 does not.
