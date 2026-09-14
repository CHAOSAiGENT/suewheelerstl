# System Architecture

Wood Refinishing by Sue Wheeler, LLC — `https://suewheelerstl.com`

Next.js 15.5.19 (App Router) · React 19 · Supabase (Postgres 17, project ref
`khioedholasaxemmtooz`, `supabase/config.toml:5`) · Resend · Vercel · Vitest.

Read this before changing anything. The two things most likely to make you wrong
are in §2 (one table is the whole CRM) and §6 (almost every query bypasses RLS).

---

## 1. System overview

Four surfaces, one Next.js app, one Postgres database, one storage account.

```
                          ┌──────────────────────────────────────────┐
  public visitor  ───────▶│ 116 static marketing pages               │
                          │ src/app/**/page.tsx (non-admin)          │
                          └──────────────┬───────────────────────────┘
                                         │ POST /api/contact
                                         ▼
  ┌──────────────────────────────────────────────────────────────────────────┐
  │                        Next.js App Router (Vercel)                        │
  │                                                                           │
  │  src/middleware.ts ── matcher ["/admin/:path*"] only ──┐                  │
  │                                                         │                  │
  │  /admin/**            /my-request/[token]/**   /api/mcp │  /api/**         │
  │  Google OAuth +       unguessable token,       spike,   │  mixed auth      │
  │  ADMIN_EMAILS         no login                 flagged  │  (see §5)        │
  │        │                      │                    │    │      │           │
  └────────┼──────────────────────┼────────────────────┼────┼──────┼───────────┘
           │                      │                    │           │
           └──────────────────────┴────────────────────┴───────────┘
                                  │
                    createServiceSupabaseClient()
                    src/lib/supabase/service.ts:3
                    ── SERVICE ROLE — BYPASSES RLS ──
                                  │
        ┌─────────────────────────┼──────────────────────────┐
        ▼                         ▼                          ▼
  ┌───────────────┐      ┌──────────────────┐     ┌────────────────────┐
  │  Postgres     │      │ Storage buckets  │     │  Resend            │
  │  submissions  │      │ submission-photos│     │  outbound email    │
  │  messages     │      │ bid-files        │     │  ▲                 │
  │  submission_  │      └──────────────────┘     │  │ inbound webhook │
  │    notes      │                                └──┼────────────────┘
  │  bid_blocks   │                                   │ POST /api/inbound
  │  crew_members │                                   │ (Svix-signed)
  └───────────────┘                                   │
                                                 thread-<reply_token>@
                                                 reply.suewheelerstl.com
```

**What the four surfaces share:** the `submissions` table, the service-role
Supabase client, the Resend sender, and `src/lib/types.ts` / `src/lib/db-contract.ts`.
Nothing else. There is no shared session, no API client layer, no ORM.

**Where the boundaries are:**

| Surface | Root | Guarded by |
|---|---|---|
| Marketing | `src/app/**` (116 `page.tsx`, excluding the two below) | nothing — fully public |
| Admin CRM | `src/app/admin/**` (5 pages) | `src/middleware.ts:47` + a per-page `isAuthorizedAdmin` call |
| Customer portal | `src/app/my-request/[token]/page.tsx` | knowledge of a UUID (`page.tsx:24`) |
| MCP server | `src/app/api/mcp/route.ts` | `MCP_SPIKE_ENABLED === "true"`, else 404 (`route.ts:48-55`) |

**Marketing page inventory** (counted, `find src/app -name page.tsx`): 122 total,
116 excluding `admin/**` (5) and `my-request/**` (1). Breakdown: 10 core
top-level, 1 blog index + 11 blog posts, 8 service hubs, 22 non-geo service
sub-pages, 48 service×neighborhood geo pages (3 hubs × 16 neighborhoods), 16
neighborhood pages. 10 + 12 + 8 + 22 + 48 + 16 = 116.

`src/app/sitemap.ts` emits **105** URLs from four hardcoded arrays plus one
generated cross-product — 11 fewer than exist on disk. The 11 omitted routes are
exactly the ones 301-redirected in `next.config.ts:4-50` (the
`commercial-and-hospitality-refinishing` and `institutional-refinishing` trees,
and three `historic-preservation` sub-pages). The pages still exist as files but
are unreachable.

The canonical origin is written out as a literal in four places —
`src/app/sitemap.ts:3`, `src/app/layout.tsx:27`, `src/lib/business.ts:31`,
`src/app/robots.ts:23` — plus `process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com"`
in nine route/lib files. Nothing imports a shared constant.

**Trap:** `next.config.ts:58` allowlists the image host
`zemmpcilhxobljzdhnig.supabase.co`, which is **not** this project's ref
(`khioedholasaxemmtooz`). No `next/image` is imported anywhere in `src/`, so the
entry is dead today — but anyone who reaches for `next/image` on a Supabase
signed URL will hit a wrong-host rejection.

---

## 2. Data model

### `submissions` is the lead, the contact, the bid, the job, and the invoice

There is no `leads` table. No `customers`. No `jobs`. No `bids`. No `invoices`.
Every one of those concepts is a column on `submissions`, and a row's meaning
changes as `status` advances.

| Role | Columns carrying it |
|---|---|
| Lead / contact record | `name`, `phone`, `email`, `address`, `zip`, `referral`, `best_time` |
| Enquiry | `service_types`, `project_description`, `timeline`, `photo_urls` |
| Bid | `bid_amount`, `bid_notes`, `bid_status`, `bid_sent_at`, `bid_accepted_at`, `bid_file_url`, `bid_start_date` + child rows in `bid_blocks` |
| Job | `status`, `crew_member_ids`, `after_photos_uploaded` |
| Invoice-ish | `final_payment_confirmed` (a boolean — there is no amount-paid, no date, no line items) |
| Loss record | `lost_reason`, `lost_note` |
| Access credentials | `client_token`, `client_token_expires_at`, `reply_token` |
| Lifecycle | `created_at`, `archived_at`, `is_test` |

Consequences you will hit:

- Deleting a lead deletes the job history and the bid.
- A customer who hires Sue twice is two unrelated rows. There is no identity key
  across submissions — no dedupe on email or phone anywhere in the codebase.
- `admin_notes` is a single text column that the notes route **overwrites** with
  the most recent note (`src/app/api/admin/submissions/[id]/notes/route.ts:47-50`),
  while the full note history lives in `submission_notes`. The column is a Kanban
  card preview, not a record.

### Table: `submissions`

Base DDL: `supabase/migrations/001_contact_portal.sql:7-25`.

| Column | Type | Default | Notes | DDL source |
|---|---|---|---|---|
| `id` | `uuid` PK | `gen_random_uuid()` | | `001:8` |
| `created_at` | `timestamptz` NOT NULL | `now()` | | `001:9` |
| `name` | `text` NOT NULL | | | `001:10` |
| `phone` | `text` NOT NULL | | normalized to `(###) ###-####` at `src/app/api/contact/route.ts:37-41` | `001:11` |
| `email` | `text` NOT NULL | | | `001:12` |
| `address` | `text` | | | `001:13` |
| `service_types` | `text[]` NOT NULL | `'{}'` | | `001:14` |
| `best_time` | `text` | | | `001:15` |
| `timeline` | `text` | | | `001:16` |
| `project_description` | `text` NOT NULL | | | `001:17` |
| `referral` | `text` | | | `001:18` |
| `photo_urls` | `text[]` NOT NULL | `'{}'` | storage **paths**, not URLs | `001:19` |
| `status` | `text` NOT NULL | `'to_bid'` | CHECK: 8 values, see §4 | `001:20`, default + CHECK rewritten `20260601_reconcile_submission_status_vocabulary.sql:25-32` |
| `admin_notes` | `text` | | last note only | `001:22` |
| `client_token` | `uuid` NOT NULL UNIQUE | `gen_random_uuid()` | portal credential, §7 | `001:23` |
| `client_token_expires_at` | `timestamptz` NOT NULL | `now() + interval '90 days'` | | `001:24` |
| `bid_start_date` | `date` | | | `20260414_mvp2.sql:7` |
| `crew_member_ids` | `uuid[]` NOT NULL | `'{}'` | **no FK** to `crew_members` | `20260414_mvp2.sql:8` |
| `lost_reason` | `text` | | CHECK `price\|timing\|competitor\|unknown` | `20260414_mvp2.sql:9` |
| `lost_note` | `text` | | | `20260414_mvp2.sql:10` |
| `after_photos_uploaded` | `boolean` NOT NULL | `false` | | `20260414_mvp2.sql:11` |
| `final_payment_confirmed` | `boolean` NOT NULL | `false` | | `20260414_mvp2.sql:12` |
| `archived_at` | `timestamptz` | | soft-archive marker | `20260414_mvp2.sql:13` |
| `reply_token` | `text` NOT NULL UNIQUE | `encode(gen_random_bytes(6),'hex')` | email threading, §7 | `20260425_reply_token.sql:2-5` |
| `zip` | `text` | | | `20260601_add_zip_column.sql:6-7` |
| `is_test` | `boolean` NOT NULL | `false` | set only by `/api/health` | `20260614_add_is_test_column.sql:5-6` |
| `bid_amount` | numeric — **INFERRED** | ? | typed `number \| null` at `src/lib/types.ts:34` | **none** |
| `bid_notes` | text — **INFERRED** | ? | `src/lib/types.ts:35` | **none** |
| `bid_file_url` | text — **INFERRED** | ? | stores a storage path, not a URL (`generate-pdf/route.tsx:159`) | **none** |
| `bid_status` | text — **INFERRED** | `'none'` — **INFERRED** | CHECK `submissions_bid_status_check` asserted by the drift test (`db-contract.ts:121`) | **none** |
| `bid_sent_at` | timestamptz — **INFERRED** | ? | `src/lib/types.ts:38` | **none** |
| `bid_accepted_at` | timestamptz — **INFERRED** | ? | `src/lib/types.ts:39` | **none** |
| `updated_at` | timestamptz — **INFERRED** | ? | filtered on at `src/app/api/admin/archive/route.ts:19` and `src/app/admin/settings/page.tsx:35`; **not** in `REQUIRED_COLUMNS` | **none** |

Indexes (`001:38-41`): `status`, `created_at desc`, `client_token`; plus
`bid_blocks(submission_id, sort_order)` (`20260414_mvp2.sql:48-49`) and
`submissions(reply_token)` (`20260425_reply_token.sql:8-9`).

### Table: `messages`

`supabase/migrations/001_contact_portal.sql:28-35`.

| Column | Type | Default | DDL source |
|---|---|---|---|
| `id` | `uuid` PK | `gen_random_uuid()` | `001:29` |
| `created_at` | `timestamptz` NOT NULL | `now()` | `001:30` |
| `submission_id` | `uuid` NOT NULL → `submissions(id) ON DELETE CASCADE` | | `001:31` |
| `is_from_admin` | `boolean` NOT NULL | `false` | `001:32` |
| `body` | `text` NOT NULL | | `001:33` |
| `sent_by_email` | `text` NOT NULL | | `001:34` |
| `is_bid` | boolean — **INFERRED** | ? | **none** — typed at `src/lib/types.ts:57`, written at `src/app/api/admin/bid/route.ts:81` |

### Table: `submission_notes`

**This table has no `CREATE TABLE` anywhere in the repository.** The only DDL
that mentions it is `supabase/migrations/20260601_enable_rls_submission_notes.sql:8`,
an `ALTER TABLE public.submission_notes ENABLE ROW LEVEL SECURITY`. Its shape is
known only from `src/lib/types.ts:102-107` and `src/lib/db-contract.ts:95`:

| Column | Type | Source |
|---|---|---|
| `id` | uuid — **INFERRED** | `types.ts:103` |
| `submission_id` | uuid — **INFERRED**, FK unverifiable | `types.ts:104` |
| `body` | text — **INFERRED** | `types.ts:105` |
| `created_at` | timestamptz — **INFERRED** | `types.ts:106` |

`SubmissionNote` is declared **twice**, identically, at `src/lib/types.ts:102-107`
and `:120-125`. Harmless; delete one.

### Table: `bid_blocks`

`supabase/migrations/20260414_mvp2.sql:37-46`.

| Column | Type | Default |
|---|---|---|
| `id` | `uuid` PK | `gen_random_uuid()` |
| `submission_id` | `uuid` NOT NULL → `submissions(id) ON DELETE CASCADE` | |
| `sort_order` | `int` NOT NULL | `0` |
| `source_key` | `text` NOT NULL | — the copyblock `key` it was cloned from |
| `title` | `text` NOT NULL | |
| `body` | `text` NOT NULL | |
| `photo_paths` | `text[]` NOT NULL | `'{}'` |
| `created_at` | `timestamptz` NOT NULL | `now()` |

### Table: `crew_members`

`supabase/migrations/20260414_mvp2.sql:27-32`. `id uuid` PK, `name text` NOT NULL,
`active boolean` NOT NULL default `true`, `created_at timestamptz` NOT NULL
default `now()`. Deletion is soft — `DELETE /api/admin/crew/[id]` sets
`active = false` (`src/app/api/admin/crew/[id]/route.ts:20-22`).

`submissions.crew_member_ids` is a bare `uuid[]` with **no foreign key**. A
deleted-then-purged crew member leaves dangling ids and nothing complains.

### Migration history is incomplete — read this before touching the schema

`docs/MIGRATIONS.md:3-7` records that the remote ledger held **10 migrations
against 4 committed files**. The repo now has 7 committed files, but the gap was
never reconciled — a migration named `20260527_status_rename_to_9_kanban_states`
is referenced at `20260601_reconcile_submission_status_vocabulary.sql:4-5` and
does not exist in `supabase/migrations/`.

**Everything with no committed DDL:**

| Object | Where the code uses it |
|---|---|
| `submissions.bid_amount` | `types.ts:34`, `api/admin/bid/route.ts:68`, `generate-pdf/route.tsx:163`, `mcp/columns.ts:37` |
| `submissions.bid_notes` | `types.ts:35`, `api/admin/bid/route.ts:69` |
| `submissions.bid_file_url` | `types.ts:36`, `api/admin/bid/route.ts:70`, `api/client/bid-file/route.ts:13` |
| `submissions.bid_status` | `types.ts:37`, `db-contract.ts:33-38`, `api/client/accept-bid/route.ts:29` |
| `submissions.bid_sent_at` | `types.ts:38`, `api/admin/bid/route.ts:72` |
| `submissions.bid_accepted_at` | `types.ts:39`, `api/client/accept-bid/route.ts:40` |
| `submissions.updated_at` | `api/admin/archive/route.ts:19`, `admin/settings/page.tsx:35` |
| CHECK `submissions_bid_status_check` | asserted by the drift test, `db-contract.ts:121` |
| `messages.is_bid` | `types.ts:57`, `api/admin/bid/route.ts:81` |
| **table** `submission_notes` | `admin/[id]/page.tsx:64`, `api/admin/submissions/[id]/notes/route.ts:36`, `mcp/tools/get-lead.ts:46` |
| **storage bucket** `bid-files` | `api/admin/bid/route.ts:56`, `generate-pdf/route.tsx:118,134`, `api/client/bid-file/route.ts:22` (only `submission-photos` is created, `001:76-84`) |

### The mitigation, and its holes

`src/lib/db-contract.ts` is the declared app↔DB contract: `STATUS_VALUES` (:21),
`BID_STATUS_VALUES` (:33), `LOST_REASON_VALUES` (:41), `REQUIRED_COLUMNS` (:56)
and `CHECK_CONSTRAINTS` (:119). `src/lib/types.ts:10-14` derives its unions from
it, so the vocabulary is defined once.

`src/lib/__tests__/schema-drift.test.ts` connects to the live database and
asserts (a) every CHECK constraint's quoted values equal the contract array
(:64-81) and (b) every `REQUIRED_COLUMNS` entry exists (:83-97). It runs at three
gates — pre-push hook, GitHub Action, and Vercel `prebuild` (`package.json:8`).

**It self-skips when `SUPABASE_DB_URL` is unset** (`schema-drift.test.ts:20-21`,
`describe.skip`). `docs/MIGRATIONS.md:55-76` describes activation as an open
checklist item. Until that secret is set in Vercel and GitHub, all three gates
pass while checking nothing.

Even when armed, `REQUIRED_COLUMNS.submissions` omits `client_token_expires_at`,
`bid_notes`, `bid_file_url`, `bid_sent_at`, `bid_accepted_at` and `updated_at`,
and `REQUIRED_COLUMNS.messages` omits `is_bid` — all of which the code reads or
writes. The gate would not catch those going missing.

---

## 3. The bid model

**A bid is prose plus one number.** There are no line items, no rooms, no
surfaces, no quantities, no labour/materials split, no tax, no deposit schedule.
The entire priced content of a bid is `submissions.bid_amount`, a single value.

The document is built from ordered `bid_blocks` rows — `title` + `body` +
`photo_paths` + `sort_order` — each cloned from a static library entry and then
freely editable. `source_key` records which library block it came from; nothing
links back to the library after the copy.

Flow:

1. `src/app/admin/[id]/bid-builder/page.tsx:30-42` loads the submission, its
   blocks, and the whole library.
2. `LibraryPicker` → `BidBuilderClient.handleAddBlock`
   (`BidBuilderClient.tsx:64-90`) optimistically appends a draft and POSTs
   `/api/admin/bid/blocks`.
3. Edits/reorders/photo attachments go to `PATCH /api/admin/bid/blocks/[id]`.
4. `POST /api/admin/bid/generate-pdf` renders `BidDocument`
   (`src/lib/bid/BidDocument.tsx`) with `@react-pdf/renderer`, uploads to the
   `bid-files` bucket, and returns a 1-hour signed URL
   (`generate-pdf/route.tsx:94-145`). With `send: true` it also emails the PDF as
   an attachment (`:191-203`).

### The copyblock library

`src/lib/bid/copyblock-library.json` — **14 categories, 94 blocks** (counted).
Typed as `CopyblockLibrary = CopyblockCategory[]` at `src/lib/bid/types.ts:13`;
each block is `{ key, title, body }` (`types.ts:1-5`).

| # | Category key | Blocks |
|---|---|---|
| 1 | `1a-framework-items-bidding-framework-v2-xlsx` | 7 |
| 2 | `1b-historical-copyblocks-doors-and-frames` | 13 |
| 3 | `2a-framework-items-bidding-framework-v2-xlsx` | 3 |
| 4 | `2b-historical-copyblocks-staircases-and-railings` | 3 |
| 5 | `3a-framework-items-bidding-framework-v2-xlsx` | 5 |
| 6 | `3b-historical-copyblocks-kitchens` | 3 |
| 7 | `4a-framework-items-bidding-framework-v2-xlsx` | 7 |
| 8 | `4b-historical-copyblocks-rooms` | 14 |
| 9 | `5b-historical-copyblocks-epa-lead` | 1 |
| 10 | `6b-historical-copyblocks-furniture` | 2 |
| 11 | `7a-framework-items-bidding-framework-v2-xlsx` | 2 |
| 12 | `7b-historical-copyblocks-porches-and-exterior` | 11 |
| 13 | `8b-historical-copyblocks-service-descriptions` | 7 |
| 14 | `9b-repair-copyblocks-historical` | 16 |

**Pricing intelligence lives as prose inside titles and bodies.** It is not
structured data — no numeric fields, no units, no min/median/max keys. A real
example, verbatim from category `1b`:

> **title:** `FRONT DOOR — 121 occurrences | Range: $200–$8,000 | Median: $2,500`
>
> **body:** `These doors have interior damage from dogs. There are options for the work we can do, and I have listed them for your choice. We will also do a Maintenance coat on the exterior doors to maintain the current finish. …`

54 of the 94 blocks contain a `$`, a rate phrase, or a price word. Some `*a-framework-items-*`
blocks additionally embed a **Markdown table** in the `body` string — e.g. the
`specialty-door-types` block carries `| Door Type | Element | Tier | Severity | Min | Default | Max | Notes |`
rows as raw text. To get structured numbers out of this library you would have to
parse strings.

`search_copyblocks` (§8) exists so a model grounds any suggested price in these
strings rather than inventing one (`src/lib/mcp/tools/search-copyblocks.ts:1-12`).

### Two divergent bid-send paths — they set different statuses

Both are live and both are reachable from the admin detail page
(`src/app/admin/[id]/page.tsx:16` mounts `AdminBidForm`).

| | Legacy form `POST /api/admin/bid` | Builder `POST /api/admin/bid/generate-pdf` |
|---|---|---|
| Input | `multipart/form-data`, operator uploads their own PDF | JSON, PDF rendered server-side from `bid_blocks` |
| Writes | `bid_amount`, `bid_notes`, `bid_file_url`, `bid_status='sent'`, `bid_sent_at` | `bid_file_url`, optionally `bid_amount`, `bid_start_date`; on `send` also `bid_status='sent'`, `bid_sent_at` |
| Sets `status` to | **`'quote_sent'`** (`route.ts:73`) | **`'bid_sent'`** (`generate-pdf/route.tsx:172`) |
| Thread message | inserts a `messages` row with `is_bid: true` (`:78-84`) | none |
| Reply-To | `threadReplyTo(reply_token)` (`:93`) | `FROM_EMAIL` — **no threading** (`:195`) |

**`'quote_sent'` is not in the current CHECK constraint.** The constraint was
narrowed to the 8-value vocabulary at
`20260601_reconcile_submission_status_vocabulary.sql:28-32`, which does not
include `quote_sent`. The legacy route's `UPDATE` at `api/admin/bid/route.ts:65-75`
will be rejected with `23514` — and the result is not checked, so the route
still returns `{ ok: true }` and still sends the email.

The same is true of `POST /api/client/accept-bid`, which sets
`status: "scheduled"` (`route.ts:41`) — also not in the 8-value constraint, also
unchecked, also returns `ok`.

`src/lib/mcp/tools/get-pipeline.ts:8-11` names both of these explicitly and
surfaces an `unknownStatusCount` rather than dropping such rows.

---

## 4. The lead lifecycle

Eight statuses, declared once at `src/lib/db-contract.ts:21-30` and ordered for
the board at `src/lib/types.ts:109-118`:

```
to_bid → contacted → bid_sent → on_deck → active → finishing → fully_complete
                                                                       │
                                                    lost ◀─────────────┘ (from anywhere)
```

Labels at `types.ts:80-89`, colours at `types.ts:91-100`.

The board does not enforce this order. `KanbanBoard.handleDragEnd`
(`src/app/admin/KanbanBoard.tsx:96-126`) accepts any column-to-column drop; the
only conditions are the two gates below.

**The Kanban** (`src/app/admin/page.tsx` → `KanbanBoard.tsx`): server component
loads all non-archived, non-test submissions plus active crew
(`admin/page.tsx:22-30`), renders one `KanbanColumn` per status
(`KanbanBoard.tsx:168-177`), and grouping is the naive
`submissions.filter(s => s.status === col)` (`:135-136`) — a row holding any
status outside the 8 vanishes from the board entirely. That exact failure
happened before and is documented at
`20260601_reconcile_submission_status_vocabulary.sql:12-15` (17 of 24 live rows
were invisible).

Drops are optimistic: local state updates first, then `PATCH
/api/admin/submissions/[id]`, reverting to a pre-move snapshot on failure
(`KanbanBoard.tsx:59-86`).

**Gate 1 — `LostReasonModal`** (`src/app/admin/LostReasonModal.tsx`). Any drop
into `lost` is intercepted before the PATCH (`KanbanBoard.tsx:106-109`). The
operator picks one of `price` / `timing` / `competitor` / `unknown` (default
`unknown`, `LostReasonModal.tsx:24`) plus an optional note; those ride along in
the same PATCH (`KanbanBoard.tsx:192-198`). Cancelling abandons the move. This
gate is real — there is no path to `lost` through the board without it.

**Gate 2 — `FinishingGateModal`** (`src/app/admin/FinishingGateModal.tsx`).
Fires only on `finishing → fully_complete` when `after_photos_uploaded` or
`final_payment_confirmed` is false (`KanbanBoard.tsx:112-123`). **It only warns.**
The primary button reads "Mark Complete Anyway" (`FinishingGateModal.tsx:60`) and
calls `applyMove` unchanged. Nothing in the API or the database enforces either
flag — `PATCH /api/admin/submissions/[id]` validates `status` against a
hardcoded list (`route.ts:7-16, 33-38`) and nothing else.

**Archiving** is separate from `lost`/`fully_complete`: `POST /api/admin/archive`
stamps `archived_at` on rows in `fully_complete` or `lost` whose `updated_at` is
older than 90 days (`api/admin/archive/route.ts:13-21`). Archived rows drop out
of the board (`admin/page.tsx:26`) and out of MCP search
(`mcp/tools/search-leads.ts:9-12`).

---

## 5. API surface

Grouped by how they authenticate, because that is the axis that matters.

### A. Session cookie + `ADMIN_EMAILS` allowlist

Every one opens with the same four lines: `createServerSupabaseClient()` →
`auth.getUser()` → `adminApiGuard(user)` → return `guard.response` if not
authorized. 401 = not signed in, 403 = signed in but not allowlisted
(`src/lib/auth/admin-guard.ts:121-135`).

| Route | Methods | What it does |
|---|---|---|
| `/api/admin/submissions` | POST | Create a lead by hand. Requires name/phone/email/project_description/service_types; forces `status='to_bid'`, `bid_status='none'`. `route.ts:6-71` |
| `/api/admin/submissions/[id]` | PATCH | Whitelisted field update — status (validated against 8 values), `admin_notes`, `lost_reason`, `lost_note`, `crew_member_ids`, `after_photos_uploaded`, `final_payment_confirmed`, `bid_start_date`, `bid_amount`, `archived_at`. `route.ts:18-73` |
| `/api/admin/submissions/[id]/notes` | POST | Insert a `submission_notes` row, then overwrite `submissions.admin_notes` with the same text. `route.ts:11-53` |
| `/api/admin/crew` | GET, POST | List active crew / add a crew member. `route.ts:6-56` |
| `/api/admin/crew/[id]` | DELETE | Soft delete — `active = false`. `route.ts:6-29` |
| `/api/admin/archive` | POST | Bulk-stamp `archived_at` on 90-day-stale terminal leads. `route.ts:6-25` |
| `/api/admin/photos` | POST | Multipart upload to `submission-photos` under `submissions/<id>/`, appends to `photo_urls`. No MIME allowlist — extension is taken from the filename (`route.ts:43`). |
| `/api/admin/reply` | POST | Insert an admin `messages` row and email the customer with a threaded Reply-To. `route.ts:13-77` |
| `/api/admin/bid` | POST | Legacy bid send — see §3. Sets `status='quote_sent'`, which the CHECK rejects. `route.ts:13-99` |
| `/api/admin/bid/blocks` | POST | Create a `bid_blocks` row. `route.ts:6-43` |
| `/api/admin/bid/blocks/[id]` | PATCH, DELETE | Edit / remove a block. Existence-checks first, then updates `title`/`body`/`sort_order`/`photo_paths`. **Neither verifies the block belongs to any particular submission** — any admin can edit any block by id. `route.ts:6-82` |
| `/api/admin/bid/generate-pdf` | POST | Render + store + optionally email the bid PDF. Node runtime required (`route.tsx:1-2`). `route.tsx:24-207` |

`src/middleware.ts:57` matches `/admin/:path*` only. **It does not cover
`/api/admin/*`** — those paths do not begin with `/admin`. The comment at
`middleware.ts:44-46` says so explicitly. The two gates are independent, not
layered: an `/api/admin/*` route that forgets `adminApiGuard` is wide open.

### B. Shared-secret header

| Route | Methods | Auth | What it does |
|---|---|---|---|
| `/api/health` | POST | `x-monitor-secret` header must equal `MONITOR_SECRET`; if the env var is unset it 401s everything (`route.ts:13-19`) | Inserts a real `submissions` row with `is_test: true`, reads it back, deletes it. Delete failure is non-fatal. Returns `{ ok, dbWriteMs }`. `route.ts:12-84` |

### C. Svix webhook signature

| Route | Methods | Auth | What it does |
|---|---|---|---|
| `/api/inbound` | POST | `svix-id` / `svix-timestamp` / `svix-signature` verified against `RESEND_WEBHOOK_SECRET` (`route.ts:15-41`) | Parses `thread-<12 hex>@…` out of the To address (`:43`, `:99-105`), finds the submission by `reply_token`, inserts a `messages` row, stores image attachments, forwards the message to the other party. |

**Trap:** if `RESEND_WEBHOOK_SECRET` is unset, `verifyWebhook` logs a warning and
returns `true` (`route.ts:16-21`) — the endpoint becomes an unauthenticated
message-injection surface. This is the one place in the codebase that fails open.

### D. Bearer token in the request body or query string

No session, no header. The token *is* the authorization.

| Route | Methods | Token source | What it does |
|---|---|---|---|
| `/api/client/reply` | POST | `token` in JSON body | Validates `client_token`, **checks expiry** (`route.ts:36-41`, 410), inserts a customer `messages` row, emails Sue. |
| `/api/client/accept-bid` | POST | `token` in JSON body | Validates `client_token`, requires `bid_status === 'sent'` (409), **checks expiry** (`route.ts:32-34`, 410), sets `bid_status='accepted'` + `status='scheduled'`, emails Sue. |
| `/api/client/bid-file` | GET | `?token=` query param | Looks up `bid_file_url`, mints a 30-minute signed URL, 302s to it. **No expiry check.** `route.ts:4-33` |

### E. No authentication at all

| Route | Methods | What it does |
|---|---|---|
| `/api/contact` | POST | The public contact form. Requires name/phone/email/project + ≥1 service type (`route.ts:43-54`), inserts with `status='to_bid'`, filters `photo_paths` against `/^(uploads\|contact-uploads)\/[a-f0-9-]+\.[a-z]+$/` (`:96`), emails Sue and the customer. No rate limit, no CAPTCHA, no honeypot. |
| `/api/upload-url` | POST | Mints a Supabase signed **upload** URL into `submission-photos` at `contact-uploads/<uuid>.<ext>`. MIME allowlisted to 6 image types (`route.ts:5-12`). Explicitly unauthenticated by design (`route.ts:49-51`). Anyone can mint unlimited upload URLs. |

### F. Feature-flag gated

| Route | Methods | What it does |
|---|---|---|
| `/api/mcp` | GET, POST | Streamable-HTTP MCP server. Returns 404 unless `MCP_SPIKE_ENABLED === "true"` (`route.ts:48-55`). **No authentication behind the flag** — the flag is the only control. `runtime = "nodejs"`, `maxDuration = 60`. See §8. |

### G. OAuth callback

| Route | Methods | What it does |
|---|---|---|
| `/admin/auth/callback` | GET | Exchanges the OAuth `code` for a session, redirects to `next` if it starts with `/admin`, else `/admin`; on failure `/admin/login?error=auth_failed`. `route.ts:4-19`. Exempted from the middleware guard at `middleware.ts:35-37`. |

---

## 6. Auth and data access — three distinct Supabase clients

### 1. Browser client — `src/lib/supabase/client.ts:3`

`createBrowserClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY)`.

Used in exactly two components, both only for OAuth:
`src/app/admin/login/page.tsx:15-21` (`signInWithOAuth({ provider: "google" })`)
and `src/app/admin/SignOutButton.tsx`. It never touches business data.

### 2. Server cookie-bound client — `src/lib/supabase/server.ts:4`

`createServerClient` with the publishable key and the Next cookie store. Used
only to answer "who is signed in?" — every call site is
`const { data: { user } } = await supabaseAuth.auth.getUser()`, immediately
followed by `adminApiGuard(user)` or `isAuthorizedAdmin(user)`. It never reads a
business table. The identical construction is inlined in `src/middleware.ts:8-25`
so the module stays Edge-importable.

### 3. Service-role client — `src/lib/supabase/service.ts:3`

`createClient(NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SECRET_KEY)`. **This bypasses
RLS entirely.** Essentially every data operation in the application goes through
it.

25 non-test files import it:

```
src/app/admin/page.tsx                            src/app/api/admin/photos/route.ts
src/app/admin/[id]/page.tsx                       src/app/api/admin/reply/route.ts
src/app/admin/[id]/bid-builder/page.tsx           src/app/api/admin/submissions/route.ts
src/app/admin/settings/page.tsx                   src/app/api/admin/submissions/[id]/route.ts
src/app/api/admin/archive/route.ts                src/app/api/admin/submissions/[id]/notes/route.ts
src/app/api/admin/bid/route.ts                    src/app/api/client/accept-bid/route.ts
src/app/api/admin/bid/blocks/route.ts             src/app/api/client/bid-file/route.ts
src/app/api/admin/bid/blocks/[id]/route.ts        src/app/api/client/reply/route.ts
src/app/api/admin/bid/generate-pdf/route.tsx      src/app/api/contact/route.ts
src/app/api/admin/crew/route.ts                   src/app/api/health/route.ts
src/app/api/admin/crew/[id]/route.ts              src/app/api/inbound/route.ts
                                                  src/app/api/upload-url/route.ts
                                                  src/app/my-request/[token]/page.tsx
                                                  src/lib/mcp/register.ts
```

(plus two test files: `api/admin/crew/__tests__/route.test.ts`,
`api/health/__tests__/route.test.ts`)

**Three fully public endpoints hold a service-role client:** `/api/contact`,
`/api/upload-url`, and `/api/inbound`. So do the three token-only `/api/client/*`
routes and the token-only portal page.

**State this plainly: the security model of this application is "the route
handler contains correct code", not "the database enforces access".** RLS is not
a second layer here — the service-role key means RLS is not consulted at all on
any path that matters. A missing `adminApiGuard` call, a missing `.eq("id", …)`
filter, or a missing expiry check is a direct data exposure with nothing behind
it. That is why the four `/admin/**` server components each re-check
`isAuthorizedAdmin` on top of middleware (`admin/page.tsx:15-18`,
`admin/[id]/page.tsx:29-37`, `admin/[id]/bid-builder/page.tsx:23-26`,
`admin/settings/page.tsx:16-19`) and why `src/lib/mcp/columns.ts` exists.

### The allowlist

`src/lib/auth/admin-guard.ts`. `ADMIN_EMAILS` is comma-separated, read fresh on
every call (`:53-63`), trimmed and lowercased (`:72-74`). **It fails closed**: an
unset, blank, or unparseable value yields an empty set, which denies everyone and
logs a `console.error` (`:89-96`). The Google consent screen is published as
External, so authentication alone admits any Google account — the allowlist is
the only thing separating the internet from customer PII (`:6-12`).

`NEXT_PUBLIC_ADMIN_EMAILS` exists in `.env.local` and is deliberately **never**
read for an authorization decision (`:26-29`). A regression test asserts that at
`src/lib/auth/__tests__/admin-guard.test.ts:81-83`. Note that `ADMIN_EMAILS` is
read indirectly through a constant (`:42`, `:54`), so `grep process.env.ADMIN_EMAILS`
finds nothing.

### RLS as committed

| Table | RLS | Policies in migrations |
|---|---|---|
| `submissions` | enabled (`001:44`) | `anon_insert_submissions` — anon INSERT `with check (true)` (`001:48-51`); `deny_select` / `deny_update` / `deny_delete` for anon+authenticated `using (false)` (`001:54-67`) |
| `messages` | enabled (`001:45`) | `deny_all_messages` for anon+authenticated, `using (false) with check (false)` (`001:69-73`) |
| `crew_members` | enabled (`20260414_mvp2.sql:34`) | **none** — enabled with no policies = deny all non-service-role |
| `bid_blocks` | enabled (`20260414_mvp2.sql:51`) | **none** |
| `submission_notes` | enabled (`20260601_enable_rls_submission_notes.sql:8`) | **none** |
| `storage.objects` | — | `service_role_storage` for `bucket_id = 'submission-photos'` (`001:87-91`) |

The `anon_insert_submissions` policy is vestigial: `/api/contact` inserts with
the service-role client (`api/contact/route.ts:56`), not the anon key.

**Live policies cannot be determined from this repository.** The migration
history is incomplete (§2), the Supabase MCP is documented as read-only
(`docs/MIGRATIONS.md:23-26`), and at least one applied migration
(`20260527_status_rename_to_9_kanban_states`) has no committed file. Treat the
table above as a floor, not an inventory. To know the truth, introspect
`pg_policies` on the live database.

---

## 7. The customer portal token model

Two tokens on the same row, with materially different properties. Do not treat
them as interchangeable.

### `client_token` — portal access

| Property | Value |
|---|---|
| Type | `uuid NOT NULL UNIQUE`, DB default `gen_random_uuid()` (`001:23`) |
| Entropy | 122 bits |
| Expiry | `client_token_expires_at`, DB default `now() + interval '90 days'` (`001:24`) |
| Generated | by Postgres on insert. No application code generates it. |
| Index | `idx_submissions_token` (`001:40`) |
| Delivered | in the confirmation email, as `{SITE_URL}/my-request/{client_token}` (`api/contact/route.ts:113`) |
| Rotation | none. No code path ever changes it. |

Where it grants access, and whether expiry is enforced:

| Consumer | Expiry enforced? |
|---|---|
| `src/app/my-request/[token]/page.tsx:29-50` | **Yes** — renders an "expired" page and stops before loading messages or minting photo URLs |
| `POST /api/client/reply` (`route.ts:36-41`) | **Yes** — 410 |
| `POST /api/client/accept-bid` (`route.ts:32-34`) | **Yes** — 410 |
| `GET /api/client/bid-file` (`route.ts:4-33`) | **No** — looks up by `client_token`, mints a 30-minute signed URL, redirects. An expired token still downloads the bid PDF. |

Expiry is checked in application code in three places and forgotten in the
fourth. There is no database-level enforcement and no RLS policy referencing
`client_token_expires_at`.

### `reply_token` — email threading

| Property | Value |
|---|---|
| Type | `text NOT NULL UNIQUE`, DB default `encode(gen_random_bytes(6), 'hex')` (`20260425_reply_token.sql:2-5`) |
| Entropy | 6 bytes → **12 hex characters, 48 bits** |
| Expiry | **none — it never expires**, and there is no expiry column for it |
| Generated | by Postgres on insert |
| Index | `idx_submissions_reply_token` (`20260425_reply_token.sql:8-9`) |
| Rotation | none |

Rendered into an address by `src/lib/email/reply-address.ts:3-5`:

```ts
`thread-${replyToken}@${REPLY_DOMAIN}`   // REPLY_DOMAIN defaults to reply.suewheelerstl.com
```

That address is set as `Reply-To` on essentially every outbound message —
`api/contact/route.ts:121`, `api/admin/reply/route.ts:69`,
`api/admin/bid/route.ts:93`, `api/client/reply/route.ts:70`,
`api/client/accept-bid/route.ts:53`, `api/inbound/route.ts:187`. (The bid-builder
send path does not use it — `generate-pdf/route.tsx:195` sets `replyTo: FROM_EMAIL`.)

Validated on the way back in at `api/inbound/route.ts:43`:
`/^thread-([a-f0-9]{12})@/i`, then looked up with
`.eq("reply_token", replyToken).single()` (`:108-112`).

**The trap:** 48 bits, never expiring, printed in the headers of every email in
the thread, is a permanent write credential into a customer's message thread.
Anyone who can send mail to `thread-<token>@reply.suewheelerstl.com` and either
knows the token or gets past `RESEND_WEBHOOK_SECRET` can inject a message —
and the sender address decides whether it lands as admin or customer
(`api/inbound/route.ts:119-122`).

Both tokens are therefore classified as bearer credentials and excluded from
every MCP read: `FORBIDDEN_COLUMNS = ["client_token", "reply_token"]`
(`src/lib/mcp/columns.ts:19`), enforced by
`src/lib/mcp/__tests__/columns.test.ts`. The rest of the codebase uses
`select("*")` and hands both tokens around freely.

---

## 8. The MCP server

> Full detail lives in [`docs/MCP.md`](./MCP.md). This section covers only how it
> fits the architecture.

Four shapes, deliberately separated:

1. **Pure tool functions** — `src/lib/mcp/tools/{search-leads,get-lead,get-pipeline,search-copyblocks}.ts`.
   Each exports a Zod input schema and an `async (args, client) => data` function.
   They take a `SupabaseClient` as a parameter rather than importing one, which is
   why they are unit-testable without a network
   (`src/lib/mcp/tools/__tests__/*.test.ts`, four files).
2. **Thin adapter** — `src/lib/mcp/register.ts:82-145`. `registerCrmTools(server)`
   calls `server.registerTool(name, config, cb)` four times, injecting
   `createServiceSupabaseClient()` at the call site (`:96`, `:111`, `:127`) and
   wrapping the return in a content block (`:71-73`). Its own docblock says it:
   "if a rule about the CRM is being decided in this file, it is in the wrong
   file" (`:3-4`). Lines 6-56 are a verified API note for `mcp-handler@2.1.1` —
   read it before touching this file, because the public Vercel docs describe the
   1.x API.
3. **Route** — `src/app/api/mcp/route.ts`. `createMcpHandler(registerCrmTools, …)`
   at `:23`, `runtime = "nodejs"` and `maxDuration = 60` at `:20-21`, and a kill
   switch at `:48-55` that 404s unless `MCP_SPIKE_ENABLED === "true"`. There is
   no authentication behind that flag; the file's own comments describe it as
   Phase 0 and point at a future `withMcpAuth` wrap (`:1-12`, `:46`).
4. **Column allowlist** — `src/lib/mcp/columns.ts`. `SUBMISSION_COLUMNS` (:22-45)
   is a 22-entry explicit list and `SUBMISSION_SELECT` (:48) is the PostgREST
   string built from it. MCP reads never use `select("*")`, because anything a
   tool returns lands in a model's context and persists in conversation history.

`search_leads` filters `is_test = false` and `archived_at IS NULL` to match the
Kanban (`tools/search-leads.ts:9-12`), and `get_pipeline` reports rows whose
status is outside the contract as `unknownStatusCount` rather than dropping them
(`tools/get-pipeline.ts:6-11`).

---

## 9. Email

### Outbound — Resend

`src/lib/email/resend.ts:4` constructs a single shared client with
`process.env.RESEND_API_KEY ?? "placeholder"` so the constructor cannot throw
during build. **Every** `send()` call site is individually guarded by
`if (process.env.RESEND_API_KEY)`. With the key unset, email silently no-ops and
the surrounding operation still reports success.

Six templates, all returning `{ subject, html }` from
`src/lib/email/templates.ts`:

| Function | Line | Triggered by |
|---|---|---|
| `adminNotificationEmail` | `:76` | new contact-form submission → Sue |
| `clientConfirmationEmail` | `:104` | new contact-form submission → customer |
| `adminReplyEmail` | `:131` | `/api/admin/reply`, and `/api/inbound` when the sender is Sue |
| `bidSentEmail` | `:150` | both bid-send paths |
| `bidAcceptedEmail` | `:174` | `/api/client/accept-bid` → Sue |
| `clientReplyEmail` | `:196` | `/api/client/reply`, and `/api/inbound` when the sender is the customer |

Addresses come from three env vars with per-route fallbacks: `FROM_EMAIL`
(defaults to `no-reply@suewheelerstl.com` in contact/reply/inbound but
`sue@suewheelerstl.com` in the two bid routes), `CONTACT_EMAIL` (defaults
`sue@suewheelerstl.com`), and optional `ADMIN_CC_EMAIL`.

### Inbound — Svix-verified webhook

`POST /api/inbound`. Resend posts an `email.received` event; anything else is
acked and ignored (`route.ts:95-97`).

1. Verify the Svix signature triple against `RESEND_WEBHOOK_SECRET`
   (`:15-41`). **Unset secret ⇒ verification skipped and the request accepted**
   (`:16-21`).
2. Extract the token: `/^thread-([a-f0-9]{12})@/i` against `to[0]` (`:43`, `:99-105`).
   No match ⇒ warn and ack.
3. Find the submission by `reply_token` (`:108-112`).
4. Decide direction: sender matches `CONTACT_EMAIL` or `FROM_EMAIL` ⇒
   `is_from_admin = true` (`:119-122`). The From address is the only evidence.
5. Strip quoted text (`src/lib/email/parse-reply.ts:6`), skip if empty (`:127-130`).
6. Insert the `messages` row (`:132-141`).
7. Store image attachments (5 MIME types, `:45-51`) into `submission-photos` under
   `uploads/<uuid>.<ext>` and append to `photo_urls` (`:151-184`).
8. Forward: admin message → customer, customer message → `CONTACT_EMAIL`
   (`:186-214`), with the same threaded Reply-To so the loop continues.

### The reply-address scheme

`src/lib/email/reply-address.ts` is four lines. `REPLY_DOMAIN` defaults to
`reply.suewheelerstl.com` and appears in no `.env` file — the default is load-bearing.
The scheme's properties are covered in §7.

---

## 10. Testing, CI and monitoring

### Vitest

`vitest.config.ts`: `environment: "node"`, `include: ["src/**/*.test.ts", "scripts/**/*.test.mjs"]`,
`@` aliased to `./src` (`:9-13` — the alias was previously absent and worked only
because every `@/` import a test reached was also mocked).

Eleven test files:

```
src/lib/__tests__/db-contract.test.ts              src/lib/mcp/tools/__tests__/get-lead.test.ts
src/lib/__tests__/schema-drift.test.ts             src/lib/mcp/tools/__tests__/get-pipeline.test.ts
src/lib/auth/__tests__/admin-guard.test.ts         src/lib/mcp/tools/__tests__/search-copyblocks.test.ts
src/lib/mcp/__tests__/columns.test.ts              src/lib/mcp/tools/__tests__/search-leads.test.ts
src/app/api/admin/crew/__tests__/route.test.ts     scripts/monitor/__tests__/check.test.mjs
src/app/api/health/__tests__/route.test.ts
```

Coverage is concentrated on the invariants: the DB contract, the admin
allowlist, the MCP column allowlist, the four MCP tools, the health endpoint and
the monitor runner. The bid routes, the contact route, the inbound webhook and
every React component are untested.

`npm run test` = `vitest run`. `npm run typecheck` = `tsc --noEmit`.

### The schema-drift gate

`npm run test:schema` runs only `src/lib/__tests__/schema-drift.test.ts`, at
three points:

| Gate | Definition | Runs |
|---|---|---|
| Pre-push hook | `scripts/hooks/pre-push:7-11`, activated by `npm run setup:hooks` | `typecheck` + `test:schema` |
| GitHub Action | `.github/workflows/schema-drift.yml` (push to main + every PR) | `npm ci`, `typecheck`, `test:schema` |
| Vercel build | `package.json:8` — `"prebuild": "npm run test:schema"` | `test:schema` before every production build |

**The skip condition governs all three.** `schema-drift.test.ts:20-21` selects
`describe.skip` when `SUPABASE_DB_URL` is absent, printing a warning
(`:23-29`). None of the three gates is enforcing until that secret is set in both
Vercel and GitHub Actions — `docs/MIGRATIONS.md:55-76` tracks that as open.

TLS is always verified. The Supabase pooler's root is pinned from the committed
`certs/supabase-prod-ca-2021.crt`, overridable via `SUPABASE_DB_CA`
(`schema-drift.test.ts:45-56`).

`scripts/hooks/pre-commit` is a separate, unrelated chaos-controller hook that
no-ops if the engine is not installed.

### Form health monitor

Runbook: [`docs/MONITORING.md`](./MONITORING.md). Architecture in one pass:

`.github/workflows/form-monitor.yml` runs `cron: "0 */6 * * *"` plus
`workflow_dispatch`, on Node 22, executing `node scripts/monitor/check.mjs`.

`check.mjs` POSTs `MONITOR_URL` with an `x-monitor-secret` header, retrying twice
with 2s/4s linear backoff (`:9-28`). `/api/health` performs a real
insert → read → delete against the live `submissions` table with `is_test: true`
(`api/health/route.ts:25-83`) — same table and same required columns as
`/api/contact`, so a schema or env break surfaces identically. Cleanup-delete
failure is non-fatal; the `is_test = false` filter on the board
(`admin/page.tsx:27`) and in `search_leads` keeps the stray row invisible.

On failure the runner fans out to four independent channels via
`Promise.allSettled` — Email (Resend), SMS (Twilio), Slack webhook, ntfy
(`check.mjs:101-117`) — then `process.exit(1)`, which reds the GitHub job. That
job failure is a fifth signal, and the code's own comment at `:111` calls it "the
4th channel" while four fan-out channels exist. **Unset channels return early and
are skipped silently** (`:42`, `:63`, `:76`, `:85`), so shipping with a subset is
supported by design.

### Analytics — not wired

`src/lib/posthog.ts` is two lines: `import posthog from "posthog-js"; export
default posthog;`. **Nothing in `src/` imports it.** There is no `posthog.init`,
no provider, no capture call anywhere in the codebase. PostHog is a dependency
and a file, not an integration.

There is no Sentry, no error reporting, and no structured logging — diagnostics
are `console.error` into Vercel's log stream.

---

## 11. Environment variables

`?` = never output; values were not read.

| Name | Public? | Read at | For |
|---|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | public | `supabase/client.ts:5`, `server.ts:7`, `service.ts:5`, `middleware.ts:9` | Supabase project URL, all three clients |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | public | `supabase/client.ts:6`, `server.ts:8`, `middleware.ts:10` | anon key for the RLS-scoped browser + SSR clients |
| `SUPABASE_SECRET_KEY` | **secret** | `supabase/service.ts:6` | service-role key — bypasses RLS (§6) |
| `ADMIN_EMAILS` | **secret** | `auth/admin-guard.ts:42,54` | comma-separated admin allowlist; unset ⇒ deny all |
| `NEXT_PUBLIC_SITE_URL` | public | 10 sites incl. `supabase/admin-link.ts:2`, `api/contact/route.ts:12`, `admin/login/page.tsx:7` | origin for portal links, admin links, OAuth redirect |
| `RESEND_API_KEY` | **secret** | `email/resend.ts:4` + 7 send guards + `monitor/check.mjs:42,46` | Resend auth; absent ⇒ all email silently no-ops |
| `FROM_EMAIL` | secret | `api/{admin/reply,admin/bid,admin/bid/generate-pdf,contact,inbound,client/accept-bid,client/reply}` | outbound From. Two different defaults (`no-reply@` vs `sue@`) depending on route |
| `CONTACT_EMAIL` | secret | `api/contact:13`, `api/inbound:12`, `api/client/accept-bid:9`, `api/client/reply:11` | Sue's inbox; also the admin-sender test in `/api/inbound` |
| `ADMIN_CC_EMAIL` | secret | `api/contact/route.ts:15`, `api/client/accept-bid/route.ts:12` | optional CC |
| `RESEND_WEBHOOK_SECRET` | **secret** | `api/inbound/route.ts:13` | Svix verification. **Unset ⇒ verification skipped, requests accepted** |
| `REPLY_DOMAIN` | secret | `email/reply-address.ts:1` | inbound reply domain; defaults `reply.suewheelerstl.com` |
| `MONITOR_SECRET` | **secret** | `api/health/route.ts:14`, `monitor/check.mjs:7` | gates `/api/health`; unset ⇒ 401 everything |
| `MONITOR_URL` | config | `monitor/check.mjs:6` | health endpoint the runner probes |
| `MCP_SPIKE_ENABLED` | **secret** | `api/mcp/route.ts:49` | kill switch; anything but `"true"` ⇒ 404 |
| `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` | public | `components/ContactForm.tsx:113` | address autocomplete. A real credential shipped to the browser — must be domain-restricted in Google Cloud |
| `NEXT_PUBLIC_VENMO_HANDLE` | public | `my-request/[token]/page.tsx:252,260,271,276` | payment QR + deep link in the portal |
| `SUPABASE_DB_URL` | **secret** | `__tests__/schema-drift.test.ts:20` | direct Postgres URL. **Its absence disables the entire drift gate** |
| `SUPABASE_DB_CA` | secret | `__tests__/schema-drift.test.ts:46` | optional override for the pinned `certs/supabase-prod-ca-2021.crt` |
| `ALERT_EMAIL_TO` | secret | `monitor/check.mjs:42,51` | email alert recipient |
| `ALERT_EMAIL_FROM` | config | `monitor/check.mjs:50` | email alert sender |
| `TWILIO_ACCOUNT_SID` | **secret** | `monitor/check.mjs:59` | SMS alert channel |
| `TWILIO_AUTH_TOKEN` | **secret** | `monitor/check.mjs:60` | SMS alert channel |
| `TWILIO_FROM` | secret | `monitor/check.mjs:61` | SMS sending number |
| `ALERT_SMS_TO` | secret | `monitor/check.mjs:62` | SMS alert recipient |
| `SLACK_WEBHOOK_URL` | **secret** | `monitor/check.mjs:76,77` | Slack alert channel |
| `NTFY_TOPIC` | **secret** | `monitor/check.mjs:85` | ntfy topic — on public ntfy.sh the topic *is* the shared secret |
| `NTFY_SERVER` | config | `monitor/check.mjs:87` | defaults `https://ntfy.sh` |
| `NTFY_TOKEN` | **secret** | `monitor/check.mjs:88` | ntfy bearer for protected topics |
| `GITHUB_RUN_URL` | config | `monitor/check.mjs:126` | run link in the alert body; computed in the workflow |

### Set but read by no code

| Name | Status |
|---|---|
| `NEXT_PUBLIC_ADMIN_EMAILS` | Present in `.env.local`. **Read by no production code.** Its only reference is the regression test at `auth/admin-guard.test.ts:81-83` that asserts it is *not* consulted. It is browser-exposed and the near-twin of the real allowlist — a future edit reaching for the obvious name reopens the hole `admin-guard.ts:26-29` exists to close. `TODO.md:58` tracks deleting it from Vercel. |
| `VERCEL_OIDC_TOKEN` | Auto-written by `vercel env pull`. Zero references. |

### Read by code, absent from both `.env.local` and `.env.local.example`

`RESEND_API_KEY`, `RESEND_WEBHOOK_SECRET`, `REPLY_DOMAIN`, `MONITOR_SECRET`,
`MONITOR_URL`, `MCP_SPIKE_ENABLED`, `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY`,
`NEXT_PUBLIC_VENMO_HANDLE`, `SUPABASE_DB_URL`, `SUPABASE_DB_CA`, and all
`ALERT_*` / `TWILIO_*` / `SLACK_*` / `NTFY_*`.

`.env.local.example` lists only `CONTACT_EMAIL`, `FROM_EMAIL`, `RESEND_API_KEY` —
it is missing 7 of the 10 names actually in `.env.local`, including
`SUPABASE_SECRET_KEY` and `ADMIN_EMAILS`. A fresh clone following the example
file produces an app that cannot reach the database and denies all admin access.

---

## Related documents

- [`docs/MIGRATIONS.md`](./MIGRATIONS.md) — the migration rule (CLI writes, MCP reads) and the drift-gate activation checklist
- [`docs/MONITORING.md`](./MONITORING.md) — form health monitor runbook
- [`docs/MCP.md`](./MCP.md) — the MCP server in full
- [`docs/SECURITY.md`](./SECURITY.md)
- [`docs/DECISIONS.md`](./DECISIONS.md)
