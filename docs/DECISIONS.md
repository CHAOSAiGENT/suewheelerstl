# Decision Log — suewheelerstl

Decisions that cost something to reverse, and the reasoning behind them. Read this
before re-litigating a choice; add to it when a decision is made that the next person
would otherwise have to re-derive from the diff.

**What belongs here:** anything where an alternative was seriously considered, anything
that commits the project to an ongoing cost, anything whose rationale lives outside the
code. **What does not:** implementation detail explained by a comment, and anything
still open — open questions belong in `TODO.md`.

**Format.** Sections are dated, newest first. Entries within a section are newest first.
IDs are assigned chronologically and never reused, so `D17` means the same thing forever.
Entries are as long as the reasoning requires and no longer. Reversed decisions are not
deleted — they move to [Reversals](#reversals) with what changed.

**Related material:** `.claude/memory/*.md` (durable rulings), `TODO.md` (open work),
`.chaosaigent/suewheelerstl-roadmap.md` (sequencing),
`docs/superpowers/specs/2026-09-03-crm-mcp-design.md` (MCP design).

---

## Index

| Theme | IDs |
|---|---|
| Process | D33–D36 |
| MCP server | D21–D32 |
| Security / admin authorization | D17–D20 |
| SEO, identity, canonical NAP | D9–D16 |
| Monitoring | D1–D8 |
| Reversals | R1–R3 |

---

## 2026-09-03

### D36. The schema-drift gate covers every column the MCP reads, verified against the live database

**Decided.** Add all 44 columns across `submissions`, `submission_notes`, `messages`,
and `bid_blocks` to `REQUIRED_COLUMNS` in `src/lib/db-contract.ts`, after probing each
one against the live database rather than reading it off the tool code.

**Why.** Roughly a third of the columns the MCP reads have no committed DDL —
`docs/MIGRATIONS.md` records 10 remote migrations against 4 committed files, and
`submission_notes` has no `CREATE TABLE` anywhere in the repo, only an
`ALTER ... ENABLE ROW LEVEL SECURITY`. Those columns existed by convention. The drift
test self-skips when `SUPABASE_DB_URL` is unset
(`src/lib/__tests__/schema-drift.test.ts:20-21`), so entries added from the tool code
rather than from the database would not fail locally — the first execution of a wrong
assertion would be in CI, against a contributor who did not write it.

**Alternatives.** Transcribe the column list from `src/lib/mcp/columns.ts`: cheaper, and
would have recorded the assumption rather than tested it.

**Consequences.** The day one of these columns is renamed or dropped remotely, a test
fails instead of a tool returning nulls. Adding a column to an MCP allowlist now also
means adding it here.

**Evidence.** All 44 probed via PostgREST with `limit=0`. Contract at
`src/lib/db-contract.ts:56-112`; the MCP additions carry an inline note at `:77-80`.
Commit `9294c3a`.

---

### D35. Each implementation plan produces working software; the first MCP plan was read tools only

**Decided.** Scope `docs/superpowers/plans/2026-09-03-crm-mcp-read-tools.md` to the four
read tools and stop there, rather than planning the full read/create/update surface.

**Why.** A plan that ends mid-capability leaves a branch that cannot be shipped or
evaluated. Read tools alone are usable: Sue can query the pipeline and build trust before
anything writes.

**Consequences.** Create and update tools need their own plan (`TODO.md:180-182`).

---

### D34. Parallel agents do not commit

**Decided.** Agents dispatched in parallel write files; the orchestrator stages and
commits.

**Why.** Git's index is shared mutable state across a worktree. The realistic failure is
not a lock error — it is one agent's `git commit` sweeping up another agent's
half-written file into an unrelated commit, which looks like a successful commit and is
found much later.

**Evidence.** Not recorded in the repo; this is a session process rule. See
[Corroboration](#corroboration-notes).

---

### D33. Commits split by concern

**Decided.** Land each concern as its own commit rather than one large one. The
2026-08-30 session produced six (`3ca34b8`, `8b3a724`, `8f92623`, `a2aa434`, `690482f`,
`94e0b4a`) against an initial five-commit split.

**Why.** Several of these changes carry real risk of a visible regression — a title
rewrite across 116 pages, a canonical-host change, a service-area widening that will move
rankings. Isolated commits mean a wobble can be reverted one piece at a time instead of
taking the session's other work with it.

**Consequences.** More commits to review; `git bisect` and `git revert` stay useful.

---

### D32. The authless MCP spike is gated behind a fail-closed kill switch

**Decided.** `/api/mcp` responds only when `MCP_SPIKE_ENABLED === "true"`, and returns
`404` otherwise.

**Why.** The route's own docstring says the spike is "thrown away, not shipped" — but the
file is on `main` and Vercel deploys on push. Intent expressed in prose is not a control.
Without the switch, the export publishes an unauthenticated endpoint that reads the whole
CRM: customer names, home addresses, phone numbers, private notes, full message history.
The default is "disabled" for the same reason `admin-guard.ts` treats an unset allowlist
as deny-all (D17): a config value that means "wide open" when absent will eventually be
absent.

**Alternatives.** An unguessable path as the only protection — rejected, a secret URL is
a bearer credential that ends up in logs and in Claude's config. Deleting the route until
auth lands — would have discarded the working transport and tool registration the spike
exists to prove.

**Consequences.** `403` was rejected in favour of `404`: an endpoint that is not supposed
to exist should not advertise that it does. The kill switch must be deleted in the same
commit that lands OAuth, or it becomes permanent scaffolding.

**Evidence.** `src/app/api/mcp/route.ts:27-57`. Commit `035816c`. `TODO.md:154-156`
records that the endpoint is currently disabled in every environment.

---

### D31. OAuth with Supabase as the authorization server; no Dynamic Client Registration

**Decided.** Serve Protected Resource Metadata and verify tokens, but implement no
`/authorize` and no `/token` — Supabase Auth is the authorization server. Pre-register
one client manually; leave DCR off.

**Why (auth type).** Claude's other connector auth types collapse both users into one
anonymous principal, which makes `ADMIN_EMAILS` unenforceable per caller and therefore
makes D23 impossible. `none` is authless. `static_headers` is a fixed bearer token, is
beta and limited to certain organizations, and is entered by an org admin — availability
on a personal account is unverified.

**Why (not implementing the AS).** Anthropic names Supabase Auth as a known third-party
IdP, and Claude resolves a cross-host authorization server from the
`authorization_servers` field without special handling. Writing our own `/authorize` and
`/token` would mean owning PKCE, consent, and token lifetime for two users.

**Why (no DCR).** DCR would let any MCP client register against the project. One client,
registered by hand, ID pasted into Claude's "Use your own OAuth client" field with the
secret blank.

**Consequences.** Blocked on Supabase's OAuth 2.1 Server, an opt-in public-beta feature
that is currently off — verified live, the metadata endpoint returns
`404 {"error_code":"feature_disabled"}` while OIDC discovery and JWKS return `200`
(`TODO.md:43-46`). Also blocked on D13's redirect reversal, because Claude drops the
`Authorization` header across a cross-host redirect and the failure presents as
"Authorization with the MCP server failed" — a credentials error that is not a
credentials problem.

**Open, not decided.** Token audience. The MCP spec requires a server to validate that a
token was issued for it, Claude sends the RFC 8707 `resource` parameter, and Supabase's
documentation never mentions RFC 8707. The `aud` must be inspected from a real completed
flow before the verifier is written. Falling back to "accept any token this project
issues" is explicitly ruled out — that accepts tokens minted for any other client and is
a confused-deputy hole. See `TODO.md:158-175` and the spec's "biggest technical risk".

---

### D30. Write tools accept a UUID only, never a name match

**Decided.** No MCP write tool resolves a record by name. `search_leads` returns
candidates with UUIDs; the model passes one back.

**Why.** Claude reasons in names ("the Hartmann job"); the database keys on UUIDs. A
name-matching write tool silently converts a near-miss into an edit of a different
customer's record.

---

### D29. Explicit column allowlists; never `select("*")` in an MCP read

**Decided.** Every MCP read selects from a named list in `src/lib/mcp/columns.ts`.
`client_token` and `reply_token` are in `FORBIDDEN_COLUMNS` and appear in no allowlist.

**Why.** Both are bearer credentials: `client_token` opens a customer's portal at
`/my-request/<token>`, and `reply_token` is embedded in email headers, so anyone holding
one can inject into a customer's email thread. Anything a tool returns lands in the
model's context and persists in conversation history — a place we do not control,
cannot audit, and cannot revoke from.

**Alternatives.** Follow the rest of the codebase, which uses `select("*")` in most read
paths. Rejected: this is a deliberate departure, recorded as such so a future contributor
does not "make it consistent".

**Consequences.** Adding a column to a tool's output is a two-file change (allowlist plus
D36's contract). Column allowlists bound the PII blast radius; they do not eliminate it —
customer addresses and private notes still reach conversation history. That is an
accepted trade, not a solved problem.

**Evidence.** `src/lib/mcp/columns.ts:1-19`. Enforced by
`src/lib/mcp/__tests__/columns.test.ts`, which asserts no `FORBIDDEN_COLUMNS` entry
appears in any allowlist, against serialized tool output rather than by inspection.
Commit `b958c21`.

---

### D28. Tool logic is pure functions with a thin protocol adapter

**Decided.** Each tool is an async function under `src/lib/mcp/tools/` taking a Supabase
client and validated input and returning plain data. `src/lib/mcp/register.ts` maps them
onto `mcp-handler`.

**Why.** Two reasons, one design and one practical. The bulk of the code becomes
unit-testable with no protocol in the loop. And `mcp-handler`'s 2.x tool-registration
signature could not be verified at planning time — writing every task against pure
functions meant the unverifiable part was confined to one file that the implementer reads
the resolved package for, rather than being baked into nine tasks of invented code.

**Evidence.** `src/lib/mcp/tools/*.ts` plus `src/lib/mcp/register.ts`; the plan states the
placeholder explicitly at `docs/superpowers/plans/2026-09-03-crm-mcp-read-tools.md:1173`.
58 tests pass (`npx vitest run` → `Test Files 10 passed | 1 skipped`,
`Tests 58 passed | 2 skipped`).

---

### D27. The MCP cannot send email to a customer

**Decided.** No tool sends. The send flow stays in the admin UI, along with writes to
`bid_status`, `bid_sent_at`, and `bid_file_url`.

**Why.** Drafting, pricing, and saving are all reversible. An email leaving the building
is not.

---

### D26. `propose_bid_amount` and `set_bid_amount` are separate tools

**Decided.** `propose_bid_amount` returns a suggested figure with reasoning and writes
nothing. `set_bid_amount` writes `bid_amount` and requires an explicit confirmed value as
an argument.

**Why.** "Sue sets the price" needs to be a structural property, not a prompt instruction.
Prompt instructions are advisory — a model can talk itself past them, and this one sits
next to a tool that would happily write. If the only tool that writes a price requires a
confirmed number as an argument, Claude cannot set a price Sue has not seen. A bid is an
offer to a customer; the prose is the labour, the number is the judgement.

**Alternatives.** One `set_bid_amount` tool with "always ask Sue first" in its
description. Cheaper by one tool, and enforces nothing.

**Consequences.** Two round trips for every priced bid. The split has to survive future
refactors — collapsing the tools silently removes the guarantee.

---

### D25. Confirm-before-write on updates; creates are frictionless

**Decided.** Update tools called without `confirm` return a preview — old value, new
value — and perform zero writes. Create tools require no confirmation.

**Why.** A junk row is recoverable. An overwritten bid price on a live job is not.

**Evidence.** The safety property is asserted against a mocked Supabase client rather
than assumed (spec, "Testing").

---

### D24. Read, Create, Update — no Delete

**Decided.** No delete tool, no archive tool.

**Why.** Deletes have near-zero value here — the admin UI can already do it — and no
undo.

---

### D23. The MCP reuses the `ADMIN_EMAILS` allowlist

**Decided.** Authorization maps the verified token's email claim through
`isAuthorizedAdmin()` in `src/lib/auth/admin-guard.ts`. No second credential store.

**Why.** Two parallel authorization models drift apart, and that drift is exactly the
class of bug being fixed in the same change window (D17). The MCP inherits fail-closed
behaviour for free.

---

### D22. The MCP server is hosted inside the existing Next.js app

**Decided.** `src/app/api/mcp/route.ts` in the same deployment, not a separate service.

**Why.** Reuses the deployment, the auth, the Supabase clients, and the domain logic.
No second service to run, monitor, or pay for.

**Consequences.** MCP traffic shares Vercel function limits with the public site. The
route pins `runtime = "nodejs"` (the service-role client is not Edge-safe) and
`maxDuration = 60`.

---

### D21. Remote MCP, not local

**Decided.** Streamable HTTP over the public domain, not a local stdio server.

**Why.** Local stdio servers work only in Claude Desktop and Claude Code. Much of Sue's
work is on site. Remote reaches desktop, web, and mobile from one connector, so it is a
superset of local — building local would have been choosing never to have mobile.

**Cost accepted.** Remote is the reason the whole OAuth problem (D31) exists; local would
have needed no auth at all.

**Note.** Mobile was later downgraded from a hard requirement to "strongly wanted"
(see [R2](#r2-mobile-downgraded-from-requirement-to-strong-want)). The decision did not
change, because remote covers desktop regardless.

---

### D20. Authorization reads `ADMIN_EMAILS` only, never `NEXT_PUBLIC_ADMIN_EMAILS`

**Decided.** No authorization decision anywhere reads a `NEXT_PUBLIC_*` value.

**Why.** Any `NEXT_PUBLIC_*` value is inlined into the browser bundle at build time. It is
attacker-visible and attacker-modifiable, and publishing an admin email list to anyone who
views source buys nothing.

**Consequences.** `NEXT_PUBLIC_ADMIN_EMAILS` is currently set in Vercel Production and
Development and read by no code — it should be deleted (`TODO.md:58-61`).

**Evidence.** `src/lib/auth/admin-guard.ts:26-29`.

---

### D19. `403` for authenticated-but-not-permitted, `401` only for not-signed-in

**Decided.** `adminApiGuard` returns `401 Unauthorized` when there is no user and
`403 Forbidden` when a signed-in user is not on the allowlist.

**Why.** A non-allowlisted user re-authenticating will never succeed. A `401` would send
them round the OAuth loop forever.

**Evidence.** `src/lib/auth/admin-guard.ts:121-134`.

---

### D18. Enforced at three independent layers, not defense-in-depth over one door

**Decided.** The allowlist is checked in `src/middleware.ts`, in all 14 `/api/admin/**`
handler entry points, and in all 4 `/admin` server components.

**Why.** These are not redundant layers over a single chokepoint — they cover disjoint
traffic.

- The middleware matcher is `["/admin/:path*"]`, which does **not** match `/api/admin/*`
  — those paths do not begin with `/admin`. Middleware never ran on the API routes at
  all. Believing otherwise is how the hole survives a review.
- The `/admin` server components read with the service-role key, which bypasses RLS
  entirely. A request that reached one of those pages would be served real data by the
  database no matter what policies say.

**Alternatives.** Broaden the middleware matcher to cover `/api/admin/*` and call it done.
Rejected: a single gate whose matcher is one string away from being wrong is what produced
the defect, and it would still leave the service-role reads ungated if middleware were
ever bypassed.

**Consequences.** Adding an `/api/admin/*` handler means adding the two-line guard call —
a checklist item, not an automatic property.

**Evidence.** Matcher at `src/middleware.ts:56-58`, with the non-coverage noted inline at
`:44-46`. 14 `adminApiGuard(` call sites across 12 files under `src/app/api/admin`;
4 files under `src/app/admin` call `isAuthorizedAdmin`.

---

### D17. Admin authorization is an `ADMIN_EMAILS` allowlist that fails closed

**Decided.** Gate every admin surface on a comma-separated `ADMIN_EMAILS` allowlist. An
unset, empty, or unparseable value denies **everyone** and logs a loud server-side error.

**Why.** The CRM only ever asked *whether* someone was signed in, never *who*. That was
survivable only because the Google OAuth consent screen was set to "Internal" — an
inadvertent access control nobody had recorded as one. Publishing the consent screen as
External (done to fix Sue's login) removed it, at which point any Google account could
complete sign-in, receive a Supabase user, and reach real customer PII: names, home
addresses, phone numbers, photos of their houses, private notes, and full message history.
`ADMIN_EMAILS` had been set in `.env.local` and in Vercel for 142 days and read by no
code.

**Why fail closed.** An unset allowlist read as "allow everyone" would silently
reintroduce the exact bug the file exists to fix, and would do it at the worst moment — a
bad deploy, or a new environment missing the variable. The failure mode of failing closed
is an admin locked out, which is loud and immediately fixed.

**Alternatives.** Revert the consent screen to Internal — rejected, it breaks Sue's login,
which is what prompted the change, and it leaves authorization as an invisible property of
a Google Cloud console setting. Supabase RLS alone — does not help the `/admin` server
components, which read with the service-role key (D18). A `role` column on the user —
more machinery than two users need, and a second store to keep in sync with D23.

**Consequences.** `ADMIN_EMAILS` must be present in every environment. It is currently
absent from Vercel Preview, so every preview deploy rejects all admin access
(`TODO.md:52-56`); Production is set, so Sue is not locked out. Emails are normalized
(trim + lowercase) before comparison because identity providers vary casing, and a
case-sensitive compare would be an availability bug that invites someone to "fix" it by
disabling the check.

**Evidence.** `src/lib/auth/admin-guard.ts:19-29` (the property, stated in the file),
`:83-99` (`isAuthorizedAdmin`, empty set → deny + `console.error`). Commit `07d09dc`.

---

## 2026-08-29 / 2026-08-30

### D16. No fabricated `openingHoursSpecification`, no fabricated `AggregateRating`

**Decided.** Leave both out of the structured data, with a comment saying why, rather than
filling them with plausible values.

**Why.** These are exactly the "missing" fields a model will invent confidently — business
hours look like boilerplate, and a rating is a number. Both would publish false factual
claims about a real business to Google and to every AI assistant that reads the page, and
self-asserted ratings are an explicit Google structured-data violation. A missing field
costs a small completeness signal. A fabricated one is a liability, and nobody who later
reads the page can tell it was invented.

**Consequences.** Hours are blocked on Sue supplying them (`TODO.md:93`) — even "by
appointment, Mon–Fri" is enough. Ratings are blocked on real GBP reviews; the 6 existing
self-hosted `Review` nodes have no `reviewRating` and earn nothing today.

**Evidence.** Recorded as a DELIBERATELY ABSENT block at `src/lib/business.ts:15-24` so the
omission reads as a decision rather than an oversight.

---

### D15. The title template was deleted, not the brand stripped from 103 pages

**Decided.** Remove `template: "%s | Sue Wheeler Wood Refinishing"` from
`src/app/layout.tsx` and leave a plain string `title`.

**Why.** 113 of 116 pages already carried the brand in their own title, so the template
double-stamped it; 115 of 118 titles exceeded 60 characters. The fix is either one line in
the layout or 103 individual title edits. Same outcome, one-line blast radius.

**Consequences.** Any new page without its own title falls back to the layout string
rather than getting the brand appended. Result after the change: 0 titles over 60
characters, max brand count 1 (`TODO.md:276-277`).

**Gotcha.** `{ default }` without `template` does not typecheck in Next 15.5.19 — on that
`Metadata["title"]` variant `template` is required. A plain string is behaviourally
identical and does typecheck.

**Evidence.** `src/app/layout.tsx:22-24`. Commit `8b3a724`.

---

### D14. `site.suewheelerstl.com` gets a 301 — it is never deleted

**Decided.** 301 the mirror subdomain to the apex. Do not remove the domain.

**Why.** The St. Louis Magazine feature — the strongest backlink this business has —
points at that mirror: `https://www.stlmag.com/design/a-guide-to-furniture-in-st-louis/`,
the "Perfect Finish" section. A 301 is the only redirect that passes accumulated link
equity. Deleting the subdomain turns an editorial citation from a regional magazine into a
permanent 404 and discards it. The subdomain looks like tidy-up work and is not.

**Supporting evidence that the mirror is the copy being read.** It was serving a build
~76 days stale (`age: 6618510`, `x-vercel-cache: HIT`), and AI search summaries were
observed synthesising Sue's positioning from `site.suewheelerstl.com` rather than the
canonical domain.

**Consequences.** BBB — the highest-authority citation — also points its website field at
the mirror; that field gets corrected to the apex during listing cleanup, but the redirect
has to exist first.

**Evidence.** `TODO.md:32-41`; `.claude/memory/canonical-host-and-stlmag-backlink.md`.

---

### D13. Canonical host is non-www `suewheelerstl.com`

**Decided.** The apex is canonical. Production's `apex → www` redirect gets reversed.

**Why.** Direction was chosen on churn, not preference: the codebase already declared
non-www everywhere — `metadataBase` in `layout.tsx`, `BASE_URL` in `sitemap.ts`, the
sitemap reference in `robots.ts`, and every JSON-LD `@id`/`url`. Choosing www would have
meant editing all of them. Choosing the apex means one Vercel setting.

**The problem being fixed.** Three hosts served identical content with no `rel="canonical"`
anywhere, splitting authority three ways, while the sitemap, `og:url`, and schema all
pointed at a host that immediately 307'd:

```
suewheelerstl.com       -> 307 -> www.suewheelerstl.com
www.suewheelerstl.com   -> 200
site.suewheelerstl.com  -> 200   (third host, same site)
rel="canonical"         -> absent on every host
```

**Consequences.** Self-referencing canonicals now emit on 118/118 pages, 118 distinct,
with zero www/site leakage — but they point at a host that still 307s until the Vercel
change lands, so the fix is only half-live. Two hazards sequenced in `docs/DOMAINS.md`:
Vercel defaults domain redirects to **307**, which consolidates no link equity and must be
set to 308/301; and setting `www → apex` *before* clearing the apex's own redirect creates
a loop. This also became a hard blocker for the MCP (D31), not merely an SEO improvement.

**Evidence.** `src/app/layout.tsx:27-36`. `TODO.md:15-30`;
`.claude/memory/canonical-host-and-stlmag-backlink.md`. Commit `8f92623`.

---

### D12. One Google Business Profile, never two

**Decided.** A single GBP at the canonical address. Do not create a second listing to
cover the other address or the service area.

**Why.** Multiple listings at different addresses split ranking authority *and* split
reviews. Google permits them only for genuinely distinct, staffed, customer-facing
locations, which this is not.

---

### D11. Premises are hybrid, not service-area-only

**Decided.** Show the workshop address on the GBP, with service areas layered on top.

**Why.** Customers *can* come to 900 S Boyle to drop off and collect items, even though
most work happens at the customer's home and drop-off is not the promoted path. A hybrid
business earns a proximity-based local-pack position that a pure service-area business
does not get.

**Reversal.** This was first recorded as pure service-area, with a recommendation to hide
the address. See [R1](#r1-premises-reclassified-from-service-area-only-to-hybrid).

**Evidence.** `.claude/memory/canonical-nap-and-premises.md`.

---

### D10. Canonical NAP address is 900 S Boyle Ave, 63110 — the workshop

**Decided.** `900 S Boyle Ave, St. Louis, MO 63110` is the address for all listings,
schema, and citations. `5260 Washington Pl, 63108` appears nowhere.

**Why.** 5260 Washington Pl is Sue's home — verified against property records as a 1907
single-family house — and it is the address currently on the Google Business Profile and
published as the business address on BBB, Yelp, Yellow Pages, and Yahoo Local. Every
third-party citation carries it; zero carry the workshop. That is a privacy exposure first
and a NAP consistency problem second. Google's own guidance is to list where customers are
served or staff are present, which is the workshop.

**Consequences, and they are not free.** Changing a long-established GBP address triggers
re-verification and a short ranking wobble — worth paying once. 900 S Boyle is a shared
21,000 sq ft warehouse where *The City Cages* batting cages operates with its own Google
listing at the same street address, so the GBP needs a suite/unit designator to avoid a
collision, and the change should use video verification specifically, because that shows
the real workshop. The suite number is currently unknown and blocks verification
(`TODO.md:94`). Directory cleanup needs Sue's logins.

**Evidence.** Single-sourced in `src/lib/business.ts` — one definition feeding 63
`LocalBusiness` nodes, where previously only 2 carried a `PostalAddress`
(`src/lib/business.ts:1-25`, `:47-55`). Commit `690482f`.
`.claude/memory/canonical-nap-and-premises.md`.

---

### D9. Service area widened to all 8 western suburbs; the geo pages stay

**Decided.** Declare coverage of Kirkwood, Webster Groves, Ladue, Town & Country,
Frontenac, Tower Grove, Chesterfield, and Ballwin. Widen `llms.txt` and the homepage
`areaServed` JSON-LD to match the 24 live geo pages. Remove the `/neighborhoods/*` → `/`
redirects rather than deleting the pages.

**Why.** Peter's explicit preference: let every inquiry come in and let Sue decline the
work herself. Lead capture beats pre-filtering. Coverage in Chesterfield and Ballwin is
thinner in practice, which is a reason to answer the phone, not a reason to disown the
territory.

**The part that made the alternative actively harmful.** `public/llms.txt` previously
carried the line *"Does not serve: East of the Mississippi, Fenton and further suburbs"*.
On this project, `llms.txt` and JSON-LD are not ranking inputs — AI answer engines read
them as authoritative factual assertions. That line was answering "no" on Sue's behalf to
every engine that read it. A stale exclusion here does not merely fail to rank; it makes
the engine assert the wrong answer about the business. Narrowing to match would have
codified it.

**Alternatives.** Delete the 24 geo pages so the declarations become true. Rejected on the
same reasoning, and it would have discarded ~6,400 words of finished copy that had been
prerendering on every deploy and being intercepted by a 308.

**Consequences.** Inquiries will arrive from areas Sue may decline; that cost is accepted
deliberately. Genuine exclusions that remain and must not be widened away: no hardwood
floors, no decks, no commercial/restaurant/hospitality, no institutional work.

**Evidence.** `public/llms.txt:46`; `src/lib/business.ts:72`
(`BUSINESS_AREA_SERVED`). Commit `a2aa434`.
`.claude/memory/service-area-lead-capture-ruling.md`.

---

### D8. Supabase MCP retired in favour of the `supabase` CLI

**Decided.** Stop trying to re-auth the Supabase MCP. Use the CLI. The re-auth item on the
roadmap is no longer a pending task.

**Why.** Peter's call. The MCP token was on the wrong account and could not reach the
production project `khioedholasaxemmtooz`.

---

### D7. ntfy is the fourth alert channel, not Twilio or Slack

**Decided.** Add ntfy to the form-monitor alert fan-out and arm it. Leave the Twilio and
Slack code in place, unconfigured.

**Why.** Peter's call, on time-to-armed: ntfy needs only a topic name, so the channel is
live the moment a GitHub secret is set. Twilio needs an account, a verified number, and
billing. An alert channel that is "going to be set up" alerts nobody.

**Why the dead code stays.** `scripts/monitor/check.mjs` skips any channel whose env vars
are unset, so unconfigured Twilio and Slack cost nothing at runtime and are available if
the need arises.

**Consequences, and this one has a sharp edge.** A public ntfy.sh topic name *is* the
credential — anyone who knows it can read the alerts and publish to the topic. So the topic
must be long and random and must live in a GitHub secret, not in the repo. Generate with
`echo "suewheeler-$(openssl rand -hex 12)"` and set `NTFY_TOPIC`.

**Evidence.** `scripts/monitor/check.mjs:85-103` (the four channels and the skip
behaviour). Commit `3ca34b8`. Arming instructions at `TODO.md:68-77`.

---

## 2026-06-14

Settled during the form health monitor build (Project #1). Recorded for the record; none
is currently contested.

### D6. Form-field cuts wait for PostHog funnel data

Project #2 reduces the contact form's 5 required fields to name/email/message — but not
before PostHog form-funnel and field-drop-off instrumentation exists, because which field
causes abandonment is an empirical question and cutting by guess discards the ability to
tell whether it worked. Still holds: `src/lib/posthog.ts` is a two-line re-export with
zero consumers, so nothing on this site is measurable yet (`TODO.md:197-206`).

### D5. GitHub Actions pinned to major `@v6`, not a commit SHA

SHA pinning defends against a compromised action tag, at the cost of manual bumps
forever. Acceptable exposure for non-critical CI on a one-client site.

### D4. Four alert channels fail independently; ship with a subset

Each channel is attempted separately and a failure in one does not suppress the others, so
the monitor could ship with Email + GitHub-job-failure armed and gain SMS/Slack/ntfy later
without a code change. See D7 for what actually got armed.

### D3. External GitHub Actions runner, not Vercel Cron

The monitor's job includes detecting that Vercel or Supabase is down. A cron that runs
*on* Vercel cannot report that Vercel is down — it simply does not run, and silence is
indistinguishable from health. An external runner can.

### D2. `is_test` admin filter is a durable safety net; cleanup-delete is non-fatal

The health check inserts a real `submissions` row every six hours. The admin board filters
`is_test = false` so monitor rows never appear as leads, and that filter — not the
cleanup delete — is the guarantee. The delete is best-effort: if it fails, the run is
still green, because a failed cleanup is noise in a table, not a broken monitor.

### D1. Separate `/api/health` endpoint, not a test branch inside `/api/contact`

A test-mode branch inside the live contact route puts monitor logic in the path every real
lead travels, and creates a flag that could mis-flag a real lead as a test. A separate
endpoint isolates the blast radius. It is secret-gated and performs a real
insert → read → delete against the real table.

---

## Reversals

Decisions that were made and then changed. Kept because the reasoning that produced the
first answer will otherwise be reproduced.

### R1. Premises reclassified from service-area-only to hybrid

**First recorded (2026-08-29).** Pure service-area business. Recommendation: hide the
address on the Google Business Profile, per Google's guidance for businesses that travel
to customers.

**Changed to (2026-08-29).** Hybrid. Address shown, service areas layered on top.

**What changed.** Peter clarified that customers *can* come to the workshop to drop off
and collect items. The original classification was inferred from the fact that most work
happens on site, which is true but not the test Google applies. The "hide the address"
recommendation was withdrawn.

**What it cost.** Nothing was shipped under the wrong classification. Had it been, the GBP
would have forfeited the proximity-based local-pack position a hybrid earns — and that
loss is invisible, because a suppressed address produces no error, just fewer impressions.

**Now recorded as** D11.

### R2. Mobile downgraded from requirement to strong want

**First stated.** Working on Sue's phone is a hard requirement for the MCP.

**Changed to.** "Phenomenal to have" — strongly wanted, not required.

**What changed.** Clarification from Peter about how the tool will actually be used.

**Effect on the architecture: none.** Remote MCP (D21) is a superset — it covers desktop
and web regardless of whether mobile works. The relaxation lowered the cost of being wrong
about mobile connector support, which remains empirically unverified: Anthropic documents
"Claude Mobile — Remote MCP access" and a shared auth callback across web, Desktop, and
mobile, but does not state that *custom* connectors are included. The Phase 0 spike was
scoped partly to answer that.

### R3. `@vercel/mcp-adapter` → `mcp-handler`

**First drafted.** The spec named `@vercel/mcp-adapter` as the transport package.

**Changed to.** `mcp-handler@^2` (v2.1.1). The package was renamed; the old name is
superseded and now only re-exports.

**What changed.** Package resolution during implementation planning.

**The trap this leaves behind.** Vercel's own MCP documentation page still shows the 1.x
API against a 2.x package — `server.tool(...)`, `basePath`,
`app/api/[transport]/route.ts`, `redisUrl`, `maxDuration` as a handler option. Those
options were removed in 2.x. Follow the `mcp-handler` README, not the Vercel docs page.
Two consequences already absorbed: `basePath` and `maxDuration` are set at the route
instead (`src/app/api/mcp/route.ts:20-25`), and Redis is not needed at all — 1.x required
it for SSE resumability, 2.x explicitly does not.

**Evidence.** Commits `1a50945` (dependency) and `ed8c2f3` (spec corrected from
assumptions to verified protocol facts).

---

## Corroboration notes

Two entries above rest on session record rather than on anything in this repository:

- **D34** (parallel agents do not commit) — no written statement of this rule exists in
  the repo. Recorded from the session brief.
- **D8** (Supabase MCP retired for the CLI) — recorded from the session brief. The
  roadmap at `.chaosaigent/suewheelerstl-roadmap.md` still lists the MCP re-auth as
  in-progress and has not been updated.

Everything else carries a cited file, commit, or measurement.
