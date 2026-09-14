# Security

Wood Refinishing by Sue Wheeler, LLC — `suewheelerstl.com`
Next.js 15.5.19 (App Router) · Supabase (Postgres 17) · Resend · Vercel

Written for whoever next changes auth, adds a route, or works an incident. It states
what is protected, what is not, and what is protected only by convention. Everything
here was verified against the repo at the commit where this file was added; claims
that could not be verified from the repo are labelled **INFERRED** or **UNVERIFIABLE
FROM REPO**.

---

## 1. Threat model

The public marketing site is not the asset. The asset is the CRM behind it. For every
lead the database holds a customer's full name, home street address, ZIP, phone
number, email address, the times of day they are home (`best_time`), a free-text
description of their house, photographs of the inside and outside of it, Sue's private
notes about them and their job, the dollar amount of their estimate, and the complete
two-way message history between them and the business. A bid that has been sent also
carries a live payment prompt. For a business whose work happens inside people's
houses, that set of fields describes which specific homes contain valuable original
woodwork, what they look like inside, who lives there, and when those people are
likely to be out.

The realistic attackers are, in rough order of likelihood: a burglary-oriented
opportunist who wants addresses plus interior photos plus schedule; a competitor who
wants the lead list, the bid amounts, and the pricing language; a spammer or scraper
who wants the email and phone list; and a social engineer who wants to insert himself
into an existing customer's email thread and redirect a payment. The last one is the
cheapest to execute and the easiest to miss, because it leaves the database looking
correct. None of this is a compliance abstraction — a leak here maps onto a physical
address and a photograph of the door.

---

## 2. Authorization model — current state

### 2.1 The guard

`src/lib/auth/admin-guard.ts` is the only definition of "who is an admin". It is 135
lines and exports four things:

| Export | Purpose |
|---|---|
| `AdminUserLike` | Structural type `{ email?: string \| null } \| null \| undefined`. Deliberately structural so the module stays importable from the Edge runtime that middleware runs in. |
| `getAdminAllowlist(): Set<string>` | Parses `ADMIN_EMAILS` into a normalized set. |
| `isAuthorizedAdmin(userOrEmail): boolean` | The policy. Accepts a Supabase user or a bare email string. |
| `adminApiGuard(user): AdminApiGuardResult` | Route-handler wrapper returning a discriminated union. |

**Fail-closed is the load-bearing property.** `getAdminAllowlist()`
(`admin-guard.ts:53-63`) returns an **empty set** when `ADMIN_EMAILS` is missing,
blank, or unparseable. `isAuthorizedAdmin()` (`:89-96`) treats an empty set as *deny
everyone*, not *allow everyone*, and logs `console.error("[admin-guard] ADMIN_EMAILS
is unset or empty — denying ALL admin access. …")`. A misconfiguration therefore locks
the owner out loudly rather than opening the CRM silently. The operational consequence
is section 9: `ADMIN_EMAILS` must be present in **every** environment.

**Matching is case-insensitive and whitespace-trimmed.** `normalizeEmail()` (`:72-74`)
lowercases and trims both the allowlist entries and the incoming address. Google can
hand back `Sue@Example.com`; a case-sensitive compare would lock out a legitimate admin,
and an availability bug of that shape invites someone to "fix" it by removing the check.

**The guard reads `ADMIN_EMAILS` and never `NEXT_PUBLIC_ADMIN_EMAILS`.** The env var
name is pinned in one constant, `ALLOWLIST_ENV_VAR` (`:42`). Any `NEXT_PUBLIC_*` value
is inlined into the browser bundle at build time by Next.js — it is visible to anyone
who views source, and it is modifiable by anyone who can alter what the browser runs.
An authorization decision made from a `NEXT_PUBLIC_*` value is an authorization
decision made from attacker-supplied input. `NEXT_PUBLIC_ADMIN_EMAILS` currently
exists in `.env.local` (line 6) and, per `TODO.md:58`, in Vercel Production and
Development. **It is read by no code.** It should be deleted; see section 9.

The allowlist is read fresh on every call rather than cached at module load, so a
corrected env var takes effect without waiting for a cold start.

### 2.2 Three independent enforcement points

These are **independent gates, not layers**. No request passes through more than one
of them. Each one is individually sufficient for the surface it covers, and
individually the only thing covering it.

**(a) `src/middleware.ts` — the `/admin` pages, at the perimeter.**
The matcher is `matcher: ["/admin/:path*"]` (`middleware.ts:57`). `/admin/login` and
`/admin/auth/*` are exempted as public (`:35-37`); everything else under `/admin`
redirects to `/admin/login` unless `isAuthorizedAdmin(user)` passes (`:47-51`).

**This matcher does NOT cover `/api/admin/*`.** Those paths begin with `/api`, not
`/admin`, so `/admin/:path*` never matches them and **middleware never runs on any
admin API route.** If you assume the API routes inherit the middleware gate, you are
wrong, and the assumption is invisible from inside those files.

**(b) `src/app/api/admin/**` — every handler, at the resource.**
14 exported handlers across 12 route files. Each calls `adminApiGuard(user)` and
returns `guard.response` when unauthorized.

The guard returns **401 when nobody is signed in** and **403 when someone is signed
in but not on the allowlist** (`admin-guard.ts:121-135`). The distinction is
deliberate: a non-allowlisted Google account will never succeed by re-authenticating,
so a 401 would send the client round the OAuth loop forever. Return 403.

**(c) `src/app/admin/**` server components — 4 pages, at the resource.**
`src/app/admin/page.tsx:18`, `src/app/admin/settings/page.tsx:19`,
`src/app/admin/[id]/page.tsx:37`, `src/app/admin/[id]/bid-builder/page.tsx:26` each
call `isAuthorizedAdmin(user)` and `redirect("/admin/login")` on failure. This is not
redundant with middleware: all four then read with the **service-role key**, which
bypasses RLS entirely (section 5). A middleware matcher edit that stopped covering
these pages would otherwise expose full customer records with nothing underneath.

### 2.3 Verification method and result

Enumerated, not eyeballed. Run from the repo root:

```bash
# (1) Every exported HTTP handler under the admin API tree, tests excluded.
grep -rnE "^export (async )?function (GET|POST|PATCH|PUT|DELETE)" \
  src/app/api/admin --include="*.ts" --include="*.tsx" | grep -v __tests__

# (2) Every adminApiGuard *call* (imports and the middleware comment filtered out).
grep -rn "adminApiGuard(" src/app/api/admin --include="*.ts" --include="*.tsx" \
  | grep -v __tests__ | grep -v "^.*import"

# (3) Every isAuthorizedAdmin call site outside the guard module and its tests.
grep -rn "isAuthorizedAdmin(" src --include="*.ts" --include="*.tsx" \
  | grep -v __tests__ | grep -v "auth/admin-guard.ts"
```

Result: **14 handlers, 14 `adminApiGuard` calls, 1:1.** The two files carrying two
handlers each are `src/app/api/admin/crew/route.ts` (`GET` line 6 → guard line 11;
`POST` line 31 → guard line 36) and `src/app/api/admin/bid/blocks/[id]/route.ts`
(`PATCH` line 6 → guard line 14; `DELETE` line 54 → guard line 62). The other ten
files carry one handler and one guard call each. In every case the guard call is the
first statement after resolving the session, before any `params` read, body parse, or
database call.

`isAuthorizedAdmin` call sites outside the guard module: **5** — 1 in
`src/middleware.ts:47` and 4 in the server components listed in (c).

This count is not enforced by a test. Adding a 15th handler without a guard call
breaks nothing that would fail CI. See section 10.

---

## 3. The incident this fixed — 2026-09-03

Recorded because the failure mode is worth recognizing again, not because it is
resolved.

Until commit `07d09dc` (*fix(security): gate admin CRM on ADMIN_EMAILS allowlist*,
2026-09-03) the admin surfaces only asked **whether** someone was signed in, never
**who**. Every check was of the form "is `user` non-null". The admin portal shipped in
`cc03a30` on 2026-03-21, so that was the state of the code for **166 days**.

`ADMIN_EMAILS` had been set in `.env.local` and in Vercel and was read by **no code
at all** — dead config for 142 days (`TODO.md:272`; the 142-day figure is from the
project record, not derivable from git, since `.env.local` is untracked. The 166-day
code-side figure above is from `git log`).

The Google OAuth consent screen was configured as **"Internal"**, which restricts
sign-in to accounts in the owning Google Workspace organization. That setting — a
Google Cloud console toggle, in a different system, chosen for a different reason —
was inadvertently the only access control on the CRM. Publishing the consent screen as
**"External"** so the business owner could log in removed it. At that point any Google
account on the internet could complete sign-in, receive a Supabase user, and satisfy
every check the application performed.

Separately, `src/app/admin/[id]/page.tsx` — the page that renders one customer's
complete record: name, address, phone, photographs, private notes, full message
thread — had **no authentication check of its own**. It relied entirely on middleware,
then read with the service-role key. The comment now at `[id]/page.tsx:28-33` records
this.

The general lesson: guards belong at the resource, not only at the perimeter.

---

## 4. Defense in depth currently in place

Two controls, one durable and one not.

**Supabase Auth "Allow new users to sign up" is disabled.** Confirmed by the owner in
the Supabase dashboard. This stops a fresh Google account from being minted into a
Supabase user at all. It is a **dashboard toggle with nothing in this repository
enforcing, asserting, or even reading it.** One click re-enables it, silently, with no
deploy, no diff, no CI failure, and no log line. Nothing in the codebase would notice.

**The `ADMIN_EMAILS` allowlist.** Code-enforced in `src/lib/auth/admin-guard.ts`,
exercised by `src/lib/auth/__tests__/admin-guard.test.ts`, and fails closed.

The allowlist is the durable one, for a mechanical reason: it lives in version
control, its behavior is asserted by tests that run in CI, and its failure direction is
*deny*. The signup toggle has none of those three properties. Treat it as a useful
speed bump, not as a control you may rely on when reasoning about a change.

---

## 5. Data access patterns — why RLS is not load-bearing

`src/lib/supabase/service.ts` is 14 lines. It calls `createClient()` with
`SUPABASE_SECRET_KEY` — the **service-role key, which bypasses Row Level Security
entirely**. Every Postgres policy is irrelevant to any query made through it.

It is imported by **26 non-test files** — essentially every data operation in the app:

*Admin server components (4):* `src/app/admin/page.tsx`,
`src/app/admin/settings/page.tsx`, `src/app/admin/[id]/page.tsx`,
`src/app/admin/[id]/bid-builder/page.tsx`

*Admin API routes (12):* `src/app/api/admin/archive/route.ts`,
`.../bid/route.ts`, `.../bid/blocks/route.ts`, `.../bid/blocks/[id]/route.ts`,
`.../bid/generate-pdf/route.tsx`, `.../crew/route.ts`, `.../crew/[id]/route.ts`,
`.../photos/route.ts`, `.../reply/route.ts`, `.../submissions/route.ts`,
`.../submissions/[id]/route.ts`, `.../submissions/[id]/notes/route.ts`

*Client-portal API routes (3, token-gated):* `src/app/api/client/accept-bid/route.ts`,
`src/app/api/client/bid-file/route.ts`, `src/app/api/client/reply/route.ts`

*Fully public, unauthenticated (3):* `src/app/api/contact/route.ts`,
`src/app/api/upload-url/route.ts`, `src/app/my-request/[token]/page.tsx`

*Other (4):* `src/app/api/inbound/route.ts` (webhook, section 7),
`src/app/api/health/route.ts` (gated on `MONITOR_SECRET`),
`src/lib/mcp/register.ts` (section 6), `src/lib/supabase/service.ts` itself.

Three of those — `/api/contact`, `/api/upload-url`, and the `/my-request/[token]`
page — hold a service-role client and are reachable by anyone on the internet with no
credential of any kind (the portal page takes a token, but the page itself is a public
route that reaches the database before deciding anything).

**The security model is "the route handler contains correct code", not "the database
enforces it."** Nothing in Postgres will stop a handler that forgets a `.eq()`, and no
policy will scope a query that was written against the wrong column. A missing `WHERE`
clause in an admin route returns the whole table.

### RLS policies that exist in committed migrations

From `supabase/migrations/001_contact_portal.sql`:

- `submissions` — RLS enabled. `anon_insert_submissions` allows `anon` INSERT with
  `check (true)`. `deny_select_submissions`, `deny_update_submissions`,
  `deny_delete_submissions` all `using (false)` for `anon, authenticated`.
- `messages` — RLS enabled. `deny_all_messages` for all commands,
  `using (false) with check (false)` for `anon, authenticated`.
- Storage bucket `submission-photos` — created `public: false`, 10 MB limit, MIME
  allowlist of the five image types. Policy `service_role_storage` scopes
  `storage.objects` access to that bucket for `service_role`.

From `supabase/migrations/20260414_mvp2.sql`: `crew_members` and `bid_blocks` have
`ENABLE ROW LEVEL SECURITY` and **no policies at all** — which in Postgres means deny
for everything except the bypassing service role.

From `supabase/migrations/20260601_enable_rls_submission_notes.sql`:
`submission_notes` had RLS **disabled** (flagged critical by the Supabase advisor —
anyone with the anon key could read and write every internal admin note through the
data API). RLS was enabled with no policies.

**UNVERIFIABLE FROM REPO:** the live policy set cannot be determined from these files.
`docs/MIGRATIONS.md:5-6` records **10 remote migrations against 4 committed local
files**, and `submission_notes` has no `CREATE TABLE` anywhere in this repository —
only the `ALTER … ENABLE ROW LEVEL SECURITY`. The `bid-files` storage bucket used by
`/api/admin/bid/route.ts` and `/api/client/bid-file/route.ts` has **no committed
definition**, so its `public` flag is unknown from the repo; the fact that
`bid-file/route.ts` mints a signed URL implies it is private (**INFERRED**). To know
the live state, read it from the database — do not read it from `supabase/migrations/`.

---

## 6. Bearer credentials

Two, with an order-of-magnitude difference in strength. Both are stored in plaintext
columns on `submissions` and both are, on their own, sufficient to act as a customer.

### `client_token`

- **Shape:** `uuid not null unique default gen_random_uuid()`
  (`001_contact_portal.sql`). ~122 bits of entropy. Indexed
  (`idx_submissions_token`).
- **Grants:** full access to that customer's portal — the record, the photographs, the
  entire message thread, the bid amount, the ability to send messages as them, and the
  ability to accept the bid.
- **Expiry:** `client_token_expires_at timestamptz not null default (now() + interval
  '90 days')`.
- **Delivered:** in the confirmation email body as `${SITE_URL}/my-request/<token>`,
  and returned in the JSON response of `POST /api/contact` (`contact/route.ts:160`).

**Where 90-day expiry IS enforced:**

| Location | Check |
|---|---|
| `src/app/my-request/[token]/page.tsx:29-30` | Compares `client_token_expires_at`; renders an "expired" page. |
| `src/app/api/client/reply/route.ts:36-41` | Returns 410 "This link has expired". |
| `src/app/api/client/accept-bid/route.ts:32-34` | Returns 410 "Token expired". |

**Where it is NOT enforced:**

`src/app/api/client/bid-file/route.ts` — the whole file, 33 lines. It reads
`?token=`, queries `.eq("client_token", token)` (`:14`), and if a `bid_file_url` is
present mints a **30-minute signed storage URL** and 302s to it (`:21-32`). It never
reads `client_token_expires_at`. Every sibling route does. An expired token still
downloads the bid document.

### `reply_token`

- **Shape:** `text not null unique default encode(gen_random_bytes(6), 'hex')`
  (`20260425_reply_token.sql:3-5`). Six random bytes rendered as **12 hex characters
  = 48 bits of entropy.** That is roughly 2⁷⁴ times smaller a keyspace than
  `client_token`.
- **Expiry:** **none.** There is no expiry column, and nothing anywhere reads one.
- **Where it appears:** `threadReplyTo()` (`src/lib/email/reply-address.ts:3-5`)
  builds `thread-<token>@reply.suewheelerstl.com`, which is set as the `Reply-To`
  header on **every** outbound email — contact confirmation, bid sent, bid accepted,
  admin reply, client reply. It is therefore present in the headers of every message
  the customer and the owner have ever received about the job.
- **What it grants:** `/api/inbound` matches the token out of the `to` address
  (`inbound/route.ts:43`, `:100-105`), looks up the submission, and inserts a row into
  `messages` on that thread, then forwards it by email to the other party. **Anyone who
  forges a message to that address injects into a customer's thread** — it appears in
  the customer's portal and in Sue's CRM as part of the conversation.

48 bits is not brute-forceable over SMTP at any practical rate, so the realistic
exposure is disclosure, not guessing: the value is in the headers of every email in
both parties' mailboxes, in any forwarded copy, in any mailing-list archive, and (see
section 7) in the application's own logs.

### Why neither may appear in an MCP tool response

Anything an MCP tool returns enters a model's context and persists in conversation
history — logs, transcripts, the model provider's retention, and any surface the
conversation is later pasted into. A bearer credential that reaches that surface should
be treated as disclosed. `client_token` grants a customer's whole record;
`reply_token` grants write access to their correspondence.

`src/lib/mcp/columns.ts` is the mechanism that guarantees they do not. It declares
`FORBIDDEN_COLUMNS = ["client_token", "reply_token"]` and
`SUBMISSION_COLUMNS` (22 named columns), joined into `SUBMISSION_SELECT`. MCP read
tools select that explicit string and **never** `select("*")` —
`src/lib/mcp/tools/search-leads.ts:52` and `src/lib/mcp/tools/get-lead.ts:40`.
`get_lead`'s other three reads are likewise explicit column lists
(`get-lead.ts:45-58`), and `get_pipeline` selects `"id,name,status,bid_amount"`
(`get-pipeline.ts:41`).

The guarantee is enforced by `src/lib/mcp/__tests__/columns.test.ts`, which asserts no
`FORBIDDEN_COLUMNS` entry appears in any allowlist. **Add a column to `columns.ts`, not
at the call site** — a call site that builds its own select string is outside the test's
reach.

For contrast, `select("*")` or a bare `.select()` — both of which return every column,
including both tokens — is used in 29 places outside the MCP tools, including
`src/app/api/inbound/route.ts:110` and every admin page. That is fine where the result
stays server-side and is rendered selectively. It is the reason the MCP path needed its
own rule.

---

## 7. Known weaknesses — unfixed, deliberately

These are open. Nothing below is in progress.

### 7.1 `/api/inbound` fails open on webhook verification — HIGH

`src/app/api/inbound/route.ts:13`, `:15-21`. `WEBHOOK_SECRET` is read from
`RESEND_WEBHOOK_SECRET` with a `?? ""` fallback. `verifyWebhook()` opens with:

```ts
if (!WEBHOOK_SECRET) {
  console.warn("[inbound] RESEND_WEBHOOK_SECRET not set — skipping verification");
  return true;
}
```

An unset secret means **every unsigned POST to `/api/inbound` is accepted**. The
endpoint then inserts into `messages`, uploads attachments to storage, updates
`submissions.photo_urls`, and sends email. `RESEND_WEBHOOK_SECRET` is set in Vercel
**Production only** — so Preview and Development deployments of this route accept
anonymous input against the same production database (they share
`NEXT_PUBLIC_SUPABASE_URL` / `SUPABASE_SECRET_KEY`). The svix verification path itself
(`:23-40`) is correct when the secret is present.

### 7.2 `reply_token` is 48-bit and never expires — MEDIUM

`supabase/migrations/20260425_reply_token.sql:3-5`. Detail in section 6. A permanently
valid, comparatively weak credential distributed in the headers of every email ever
sent about a job, which grants write access to that job's correspondence.

### 7.3 `/api/client/bid-file` skips its own expiry check — MEDIUM

`src/app/api/client/bid-file/route.ts` (whole file). Detail in section 6. An expired
`client_token` still retrieves the bid document via a fresh 30-minute signed URL, while
every sibling route correctly 410s.

### 7.4 Public write endpoints have no rate limit, CAPTCHA, or origin check — MEDIUM

`src/app/api/contact/route.ts` and `src/app/api/upload-url/route.ts` are fully public
by design (the contact form must work for anonymous visitors). A repo-wide grep for
`ratelimit|rate-limit|captcha|turnstile|recaptcha|Origin|referer` across `src/`
returns **zero** hits outside tests. Consequences:

- `/api/contact` — unbounded row insertion into `submissions`, each one sending two
  Resend emails. That is database fill, inbox flood, and Resend quota burn from a
  single script.
- `/api/upload-url` — unbounded signed **upload** URLs into the `submission-photos`
  bucket at `contact-uploads/<uuid>.<ext>`. Content type is allowlisted to six image
  types (`upload-url/route.ts:5-12`, `:41-46`) and the bucket carries a 10 MB limit and
  its own MIME allowlist, so this is storage cost and quota exhaustion rather than
  arbitrary file hosting. Objects uploaded without a matching `/api/contact` submission
  are orphaned and never garbage-collected — nothing in the repo deletes them.

### 7.5 `bid_blocks` routes have no ownership check beyond existence — LOW

`src/app/api/admin/bid/blocks/[id]/route.ts`. Both `PATCH` (`:20-26`) and `DELETE`
(`:67-73`) verify only that a row with that `id` exists; neither checks which
`submission_id` it belongs to, and neither compares it against anything the caller is
scoped to. Any allowlisted admin can edit or delete any bid block by id.

Low severity, and say why: the allowlist currently contains two trusted people who are
both already authorized to read and edit every submission through the CRM UI. There is
no privilege boundary between admins for this resource to cross. It is recorded because
the severity is a function of the allowlist's size, not of the code — add a third,
less-trusted admin and this becomes a real gap with no code change to signal it.

### 7.6 The MCP endpoint has no authentication — currently 404'd by a kill switch

`src/app/api/mcp/route.ts`. `createMcpHandler(registerCrmTools)` registers four read
tools (`search_leads`, `get_lead`, `get_pipeline`, `search_copyblocks`) backed by a
service-role client. **There is no authentication on the handler.** `withMcpAuth` is
planned (Task 8) and not implemented.

What stands between that and the internet is `enabled()` (`:48-50`):

```ts
function enabled(): boolean {
  return process.env.MCP_SPIKE_ENABLED === "true";
}
```

`guarded()` returns **404** (not 403 — an endpoint that should not exist must not
advertise that it does) unless `MCP_SPIKE_ENABLED` is exactly `"true"`. It is set
locally and nowhere else. Unset, misspelled, or absent in a new environment all mean
disabled, on the same principle as the admin allowlist: a config value that means "wide
open" when absent will eventually be absent.

**The kill switch is temporary and must be deleted when OAuth lands.** Leaving both in
place after Task 8 means a real auth layer whose activation depends on an env var
someone will eventually "clean up", and a 404 that hides broken auth from anyone
testing it. Delete the `enabled()` / `guarded()` block in the same commit that adds
`withMcpAuth`.

Related and open (`TODO.md:43-50`): Supabase's OAuth 2.1 server is not yet enabled on
the project (`.well-known/oauth-authorization-server/auth/v1` returns
`404 feature_disabled`). When it is, register **one** client manually — leaving Dynamic
Client Registration open would let any MCP client register against the project.

### 7.7 The Venmo QR is generated by a third party — LOW/MEDIUM

`src/app/my-request/[token]/page.tsx:259-265`. When `NEXT_PUBLIC_VENMO_HANDLE` is set
and `bid_status === "sent"`, the portal renders an `<img>` whose `src` is
`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=…`, with the payload
containing the Venmo handle, `submission.bid_amount`, and
`submission.service_types.join(", ")`.

Two consequences. First, `api.qrserver.com` receives the bid amount and the service
list for every customer who opens a sent bid, in the query string, where it lands in
their access logs — plus the visitor's IP and the `Referer`, which is the portal URL,
**which contains the `client_token`** unless referrer policy strips it (no
`Referrer-Policy` header is set anywhere in this repo — see 7.10). Second, the QR code
that customers are told to scan **in order to send money** is rendered by a third party
with no integrity check; whoever controls that response controls what the customer's
camera resolves to. The adjacent "Open in Venmo" button (`:276`) is built locally and
is not subject to this.

### 7.8 Inbound message attribution is decided by a forgeable header — MEDIUM/HIGH

Found while writing this document; not previously recorded.

`src/app/api/inbound/route.ts:119-122`:

```ts
const senderEmail = extractEmail(email.from);
const isFromAdmin =
  senderEmail === CONTACT_EMAIL.toLowerCase() ||
  senderEmail === FROM_EMAIL.toLowerCase();
```

`extractEmail` (`src/lib/email/parse-reply.ts:28-31`) simply pulls the address out of
the `From` display-name string. There is no SPF, DKIM, or DMARC check in this repo, and
no check that Resend performed one. A message whose `From` header claims
`sue@suewheelerstl.com` is inserted into `messages` with `is_from_admin = true`, which
means it renders in the customer's portal styled and labelled as **"Sue Wheeler"**
(`src/app/my-request/[token]/page.tsx:320-327`), and `/api/inbound` then forwards it to
the customer's real email address from the site's own sending domain
(`:189-200`).

To exploit it an attacker needs one `reply_token` (48 bits, non-expiring, present in
the headers of every email about the job — 7.2) and the ability to set a `From`
header. The result is an attacker-authored message appearing to the customer as
authentic communication from the business, in the correct thread, at the correct
stage — which is the exact position from which "the payment details have changed" is
convincing. This compounds 7.1: with `RESEND_WEBHOOK_SECRET` unset, no webhook
signature is required either, so the attack does not even need to go through email.

**UNVERIFIABLE FROM REPO:** whether Resend's inbound pipeline itself rejects or flags
messages failing SPF/DKIM before delivering the webhook. If it does, that is the only
thing standing here — and it is not visible from, or asserted by, this codebase.

### 7.9 `reply_token` is written to application logs — MEDIUM

Found while writing this document; not previously recorded.

`src/app/api/contact/route.ts:122-131` logs, on every single contact-form submission:

```ts
console.log("[contact] sending emails, replyTo:", replyTo, "from:", FROM_EMAIL,
            "to:", TO_EMAIL, "client:", email);
```

`replyTo` is `thread-<reply_token>@reply.suewheelerstl.com`. Every lead's
non-expiring bearer credential (7.2) is therefore written in plaintext to Vercel's
runtime logs alongside the customer's email address, and persists for the log retention
period, reachable by anyone with read access to the Vercel project. Section 6's
argument about MCP responses applies identically to logs: a credential that reaches a
log is disclosed.

### 7.10 No security response headers — LOW

`next.config.ts` defines no `headers()` function. There is no Content-Security-Policy,
`Referrer-Policy`, `X-Frame-Options`/`frame-ancestors`, or
`X-Content-Type-Options` anywhere in the repo. Vercel supplies HSTS by default
(**INFERRED** — platform behavior, not verified here). The absent `Referrer-Policy` is
what makes 7.7's token-in-referrer path live; the absent CSP is what makes 7.7's
third-party image load unconstrained.

---

## 8. PII inventory

Blast radius of a `submissions` row disclosure, by column. Free-text fields are
marked — they may contain anything a customer or Sue chose to type, including data not
anticipated by the column name.

### `submissions`

| Column | Contains |
|---|---|
| `name` | Customer's full name |
| `phone` | Phone number, normalized to `(###) ###-####` |
| `email` | Email address |
| `address` | **Home street address** |
| `zip` | ZIP code |
| `best_time` | When the customer is reachable — infers when they are home |
| `timeline` | When work is wanted |
| `service_types` | Which parts of the house are in scope |
| `project_description` | **Free text.** Customer's own description of their home |
| `referral` | **Free text.** How they found the business; often names a third party |
| `photo_urls` | **Photographs** of the interior and exterior of the home (storage paths in `submission-photos`) |
| `admin_notes` | **Free text.** Sue's private notes about the customer and the job |
| `lost_note` | **Free text.** Why the job was lost |
| `lost_reason` | One of `price`/`timing`/`competitor`/`unknown` |
| `bid_notes` | **Free text.** Estimate narrative |
| `bid_amount` | Dollar value of the estimate |
| `bid_file_url` | Storage path of the bid document in `bid-files` |
| `bid_status`, `bid_sent_at`, `bid_accepted_at`, `bid_start_date` | Commercial timeline; `bid_start_date` indicates when crew will be at the property |
| `crew_member_ids` | Which employees are assigned (employee PII by reference) |
| `status`, `archived_at`, `created_at` | Pipeline state and dates |
| `client_token` | **Bearer credential** — section 6 |
| `client_token_expires_at` | Expiry for the above |
| `reply_token` | **Bearer credential** — section 6 |
| `is_test` | Flags synthetic rows from `/api/health` |

### `messages`

| Column | Contains |
|---|---|
| `body` | **Free text.** Complete two-way correspondence between customer and business, including inbound email bodies relayed by `/api/inbound` |
| `sent_by_email` | Email address of the sender (customer's, or the verified admin email) |
| `is_from_admin` | Attribution. On the `/api/inbound` path this is derived from the email `From` header and is therefore forgeable — see 7.9 |
| `is_bid`, `submission_id`, `created_at` | Threading metadata |

### `submission_notes`

| Column | Contains |
|---|---|
| `body` | **Free text.** Private internal notes, never shown to the customer |
| `submission_id`, `created_at`, `id` | Linkage |

**No `CREATE TABLE` for this table exists in the repository** — its full live shape is
unverified. The four columns above are those `db-contract.ts:95` asserts exist.

### `bid_blocks`

| Column | Contains |
|---|---|
| `title`, `body` | **Free text.** Bid narrative, may describe the customer's property |
| `photo_paths` | **Photographs** of the property |
| `source_key`, `sort_order`, `submission_id` | Composition metadata |

### `crew_members`

`name` — employee name (not customer PII, but personal data).

### Storage

- Bucket `submission-photos` (private, 10 MB, image MIME allowlist) — path prefixes
  `contact-uploads/` (public pre-submission uploads), `uploads/` (inbound email
  attachments), `submissions/<submission_id>/` (admin uploads). **Photographs of the
  inside and outside of customers' homes.**
- Bucket `bid-files` — bid documents at `bids/<submission_id>/<uuid>.<ext>`. No
  committed bucket definition; see section 5.
- Portal photo links are **7-day signed URLs**
  (`my-request/[token]/page.tsx:64`) — each is itself a bearer credential for that
  image, outliving nothing but its own clock.

---

## 9. Secrets

**Never record a secret's value in this repository, in a commit message, in a log line,
or in an agent transcript.** Names and locations only. A pre-tool hook blocks agents
from editing `.env*` files; that is deliberate, and rotating or setting a value is a
human action in the Vercel and Supabase dashboards.

### Secret (must never reach the browser or a log)

| Variable | Read at | Notes |
|---|---|---|
| `SUPABASE_SECRET_KEY` | `src/lib/supabase/service.ts:6` | Service-role key. Bypasses all RLS. The single highest-value secret in the system — it is full read/write on every table and bucket. |
| `ADMIN_EMAILS` | `src/lib/auth/admin-guard.ts:42,54` | Not a secret in the confidentiality sense; it *is* security-critical availability config. See the rule below. |
| `RESEND_API_KEY` | `src/lib/email/resend.ts`; presence-checked in `api/contact`, `api/admin/reply`, `api/admin/bid`, `api/client/reply`, `api/client/accept-bid`, `api/inbound` | Send-on-behalf-of the domain. |
| `RESEND_WEBHOOK_SECRET` | `src/app/api/inbound/route.ts:13` | Production only. Unset = fail open (7.1). |
| `MONITOR_SECRET` | `src/app/api/health/route.ts:14-15` | Gates the health endpoint, which performs a real insert/read/delete on `submissions`. Compared with `!==`, and an unset value rejects everything (fails closed). |
| `MCP_SPIKE_ENABLED` | `src/app/api/mcp/route.ts:49` | Not secret, but load-bearing — it is the only thing preventing an unauthenticated CRM read endpoint (7.6). |
| `SUPABASE_DB_URL`, `SUPABASE_DB_CA` | `src/lib/__tests__/schema-drift.test.ts` (CI/dev only) | Direct Postgres connection for the drift gate. |
| `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM` | `scripts/monitor/check.mjs` | Currently unset — channel skips silently. |
| `SLACK_WEBHOOK_URL` | `scripts/monitor/check.mjs` | Currently unset. A webhook URL is itself the credential. |
| `NTFY_TOPIC`, `NTFY_TOKEN`, `NTFY_SERVER` | `scripts/monitor/check.mjs` | Unset. On public ntfy.sh **the topic name is the secret** — generate it randomly (`TODO.md:71-78`). |

### Non-secret configuration

`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (anon key — safe to
publish *only because* RLS denies it everything; see section 5),
`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_VENMO_HANDLE`,
`NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` (restrict by referrer at Google, since it is
public by construction), `CONTACT_EMAIL`, `FROM_EMAIL`, `ADMIN_CC_EMAIL`,
`REPLY_DOMAIN`, `ALERT_EMAIL_TO`, `ALERT_EMAIL_FROM`, `ALERT_SMS_TO`, `MONITOR_URL`,
`GITHUB_RUN_URL`.

### Operational rules

**`ADMIN_EMAILS` must be set in every environment.** The guard fails closed, so an
environment without it denies all admin access — which is the correct failure
direction and also a complete outage of the CRM for that environment. It is currently
**missing from Vercel Preview** (present in Production and Development —
`TODO.md:52-56`), so every preview deploy rejects all admin access today. Production is
unaffected; nobody gets locked out by a deploy.

**`NEXT_PUBLIC_ADMIN_EMAILS` should be deleted** from Vercel Production and
Development and from `.env.local` (line 6). It is read by no code, and `NEXT_PUBLIC_*`
values are inlined into the browser bundle — it publishes the admin email list to
anyone who views source, in exchange for nothing. Deleting it also removes the standing
temptation to "just read the public one" from a client component.

**`.env.local.example` is incomplete** — it lists only `CONTACT_EMAIL`, `FROM_EMAIL`,
and `RESEND_API_KEY`. Anyone setting up a new environment from it produces a deployment
with no `ADMIN_EMAILS` (total admin lockout, loudly) and no `SUPABASE_SECRET_KEY`
(total failure). The `ADMIN_EMAILS` block to paste is in the body of commit `07d09dc`.

**Preview and Development deployments point at the production Supabase project.**
There is one database. A non-production environment with weaker env coverage (7.1) is
writing to live customer data.

---

## 10. Checklist for a new admin route

For anything under `src/app/api/admin/**`:

1. **Call the guard first.** Resolve the session with `createServerSupabaseClient()`,
   then `const guard = adminApiGuard(user); if (!guard.authorized) return
   guard.response;` — before reading `params`, parsing the body, or touching the
   database. Middleware will **not** cover you: its matcher is `/admin/:path*`, which
   does not match `/api/admin/*`.
2. **Return 403, not 401, for a signed-in non-admin.** `adminApiGuard` already does
   this. Do not hand-roll the status.
3. **Use `guard.email` when recording who acted.** It is the verified, normalized
   address the guard actually checked. `src/app/api/admin/reply/route.ts:49` is the
   pattern. Do not re-reach into a possibly-null `user`.
4. **Use a column allowlist if the response could reach a model or a log.** Anything
   returned by an MCP tool, written to a log line, or included in an error payload must
   select explicit columns — add them to `src/lib/mcp/columns.ts`, never at the call
   site. `client_token` and `reply_token` must never appear
   (`src/lib/mcp/__tests__/columns.test.ts` enforces this for the allowlists it can
   see; it cannot see a select string you build inline).
5. **Validate `status` against `src/lib/db-contract.ts`.** `STATUS_VALUES`,
   `BID_STATUS_VALUES`, and `LOST_REASON_VALUES` mirror the live CHECK constraints and
   are asserted against the database by
   `src/lib/__tests__/schema-drift.test.ts`. `src/app/api/admin/submissions/[id]/route.ts:7-16`
   currently hand-duplicates the eight statuses into a local `VALID_STATUSES` array —
   import from `db-contract.ts` instead so a vocabulary change cannot drift.
   Two routes already write values the live constraint rejects
   (`api/admin/bid/route.ts:73` writes `'quote_sent'`;
   `api/client/accept-bid/route.ts:41` writes `'scheduled'`) — do not copy them.
6. **Do not reach for `select("*")` or a bare `.select()`.** Both return every column
   including both bearer tokens. Name the columns you need.
7. **Scope the write.** Existence is not ownership (7.5). If the resource belongs to a
   submission, filter on `submission_id`, not just `id`.
8. **Add the route to this document** if it introduces a new credential, a new public
   surface, a new third-party call, or a new column holding personal data.
