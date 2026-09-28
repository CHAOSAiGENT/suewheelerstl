# TODO — suewheelerstl

_Last updated 2026-09-22._

Ordered by who has to act, then by leverage. Every claim here was verified against
the live site, the live database, or the codebase — evidence is cited so nothing
has to be re-derived. Items marked **⛔** block other work.

---

## 1. Blocked on Peter — dashboard and config

Nothing in this section is a code change. Several block work that is otherwise finished.

### ⛔ Reverse the apex→www redirect · Vercel → Domains

Verified live: `https://suewheelerstl.com/api/mcp` returns `307 → www.suewheelerstl.com`.

Blocks **two** separate things:

- **The MCP server.** Claude drops the `Authorization` header across a cross-host
  redirect and reports *"Authorization with the MCP server failed"* — a credentials
  error that is not a credentials problem, and which will burn an afternoon if you
  debug it as one.
- **Search authority.** Three hosts serve identical content, splitting ranking three ways.

Runbook with the exact sequence: **`docs/DOMAINS.md`**. Two hazards it sequences around:
Vercel defaults domain redirects to **307**, which consolidates no link equity — it must
be set to 308/301. And setting `www`→apex *before* clearing the apex's own redirect
creates a loop.

### ⛔ 301 `site.suewheelerstl.com` → apex — do NOT delete it

The St. Louis Magazine feature — the strongest backlink this business has —
points at that mirror: `https://www.stlmag.com/design/a-guide-to-furniture-in-st-louis/`
("Perfect Finish" section). A 301 passes the accumulated authority; deleting the
subdomain turns that editorial citation into a 404 permanently.

It is also serving a **76-day-stale build** (`age: 6618510`, `x-vercel-cache: HIT`),
so everyone arriving from the magazine sees months-old content — and AI crawlers
were observed reading the mirror rather than the canonical domain.

### ⛔ Enable Supabase's OAuth 2.1 Server · Supabase → Auth

Verified live: `.../.well-known/oauth-authorization-server/auth/v1` returns
`404 {"error_code":"feature_disabled"}`. It is an opt-in public-beta feature.
OIDC discovery and JWKS already return 200.

Blocks MCP Task 8. Register **one** client manually rather than leaving Dynamic
Client Registration open — DCR would let any MCP client register against the project.

### Add `ADMIN_EMAILS` to Vercel **Preview**

Present in Production and Development only. The admin guard **fails closed**, so
every preview deploy currently rejects all admin access. Production is fine —
Sue will not be locked out on deploy.

### Delete `NEXT_PUBLIC_ADMIN_EMAILS` from Vercel (Production + Development)

Read by no code, and `NEXT_PUBLIC_*` values are **inlined into the browser bundle** —
it publishes an admin email list to anyone who views source, for zero benefit.

### Paste the `ADMIN_EMAILS` block into `.env.local.example`

A pre-tool hook blocks agents from editing `.env*` files, correctly. The block to
paste is in commit `07d09dc`'s body.

### Add `NTFY_TOPIC` as a GitHub repo secret

Arms the fourth form-monitor alert channel. Generate an unguessable topic first —
a public ntfy.sh topic name **is** the secret:

```bash
echo "suewheeler-$(openssl rand -hex 12)"
curl -H "Title: Sue Wheeler STL — test" -H "Priority: urgent" \
     -H "Tags: rotating_light" -d "smoke test" https://ntfy.sh/YOUR-TOPIC
```

### Disable Deployment Protection for the MCP test URL

Vercel Deployment Protection returns 403 to Anthropic's egress (`160.79.104.0/21`,
IPv4-only), which presents as *"Couldn't reach the MCP server."* Test against
production or a protection-bypass URL.

---

## 2. Needs Sue — facts only she has

Each blocks specific work. Cheap to answer, currently stalling real tasks.

| Needed | Blocks |
|---|---|
| **Business hours** | `openingHoursSpecification` on all 63 `LocalBusiness` nodes, and GBP completeness. Published nowhere on the site today. Even "by appointment, Mon–Fri" is enough. |
| **Suite/unit number at 900 S Boyle** | GBP verification. The building is a shared 21,000 sq ft warehouse — *The City Cages* batting cages has its own listing at the same street address, so a designator is needed to avoid a collision. |
| **Correct geo coordinates for 900 S Boyle** | Two conflicting pins on the *same* `@id`: homepage says `38.6138,-90.2614`, `/furniture-refinishing` says `38.6158,-90.2545`. `BUSINESS_GEO` in `src/lib/business.ts` is exported and ready once the right one is known. A wrong pin is worse than an inconsistent one. |
| ~~Public email~~ | **Resolved 2026-09-22:** `sue@suewheelerstl.com` everywhere. Privacy policy updated, added to `business.ts` and the homepage `LocalBusiness` node. |

---

## 3. Needs Sue's logins — business listings

**Her home address (5260 Washington Pl) is currently published as the business
address on BBB, Yelp, Yellow Pages, and Yahoo Local.** It is a 1907 single-family
house. Every third-party citation carries it; **zero** carry the workshop. This is a
privacy exposure before it is an SEO problem.

Canonical NAP for all of these — see `.claude/memory/canonical-nap-and-premises.md`:

```
Wood Refinishing by Sue Wheeler, LLC
900 S Boyle Ave, St. Louis, MO 63110
(314) 367-6054
https://suewheelerstl.com
```

**Ordered by damage:**

1. **Google Business Profile** — change address to 900 S Boyle with the suite
   designator. Request **video verification** specifically: it shows the real
   workshop and resolves the shared-address collision. Expect re-verification and a
   short ranking wobble; worth paying once. Premises are **hybrid** (customers may
   drop off), so the address is shown, not hidden, with service areas layered on.
   Add the GBP URL to `sameAs` afterward.
2. **BBB** — wrong three ways: website field points at the `site.` mirror, address is
   the home, founding year says 1988 (the site says 1989). Highest-authority citation.
3. **Yelp** — home address, and the primary category is **"Antiques."** For an
   architectural refinishing contractor that is near-invisible in the categories
   that convert.
4. **Yahoo Local + Yellow Pages** — home address; both also have **no website link
   at all**, so they pass no authority.
5. **Angi / HomeAdvisor** — claim and standardize the name to the legal form.
6. **Facebook** — probable duplicate page (`104397526321591` alongside
   `100034017228127`). Merge if genuinely duplicate.

**Not found anywhere, worth creating:** Houzz and Nextdoor (every competitor is on
both, Sue is on neither, and both skew to exactly her historic-homes homeowner),
plus Apple Business Connect and Bing Places, which feed AI assistants directly.

⚠️ **Before any review-generation push:** sentiment is mixed, not uniformly positive.
Alongside strong praise there are negative reviews citing work quality and customer
service. Driving traffic at review profiles amplifies whatever is already there.

---

## 4. MCP server — in flight

Spec: `docs/superpowers/specs/2026-09-03-crm-mcp-design.md`
Plan: `docs/superpowers/plans/2026-09-03-crm-mcp-read-tools.md`

**Done — all eleven tools, verified over the wire via `tools/list`:**

| | Tools |
|---|---|
| Read | `search_leads` · `get_lead` · `get_pipeline` · `search_copyblocks` |
| Create | `create_lead` · `add_note` · `create_bid_blocks` |
| Update | `update_lead` · `update_bid_blocks` · `propose_bid_amount` · `set_bid_amount` |

Plus column allowlists, the Streamable HTTP route, and schema-drift coverage. 160 tests.
Exercised against the live production database with zero bearer-token leakage.

Two safety properties are **structural, not prompted**, and both were mutation-tested —
six deliberate breakages, every one caught by a failing test: no update writes without
`confirm: true`, and only `set_bid_amount` can write `bid_amount`, requiring an explicit
amount *and* confirm. `propose_bid_amount` has no write path at all. Nothing in
`src/lib/mcp` imports Resend, so no tool can email a customer.

**The endpoint is currently disabled in every environment** by a fail-closed kill
switch (`MCP_SPIKE_ENABLED`) because it has no auth yet. Do not remove that guard
until Task 8 lands.

### ⛔ Task 8 — OAuth. Prove the token audience FIRST

The single largest unresolved risk. **Supabase's documentation never mentions
RFC 8707 resource indicators**, while the MCP spec requires servers to validate that
a token was issued *for them*. Claude sends `resource` on every authorization request.

Complete one OAuth flow, capture the access token, and inspect `aud` **before writing
the verifier**:

- `aud` matches the MCP URL → validate strictly.
- `aud` is Supabase's own → configure a **Custom Access Token Hook** to set it.
  Do **not** fall back to accepting any token that project issues; that accepts tokens
  minted for any other client and is a confused-deputy hole.

Then: PRM at `/.well-known/oauth-protected-resource` **and** the path-suffixed variant
Claude probes first, a `401` with `WWW-Authenticate` (Claude ignores that header on a
`200`), JWT verification against Supabase's JWKS, and `isAuthorizedAdmin()` for the
allowlist. Delete the kill switch in the same commit.

### Follow-on work

- ~~Create + update tools~~ — **done 2026-09-22** (`4a18033`). See the table above.
- **One-time import** of her Mac bid files. Dry-run mode writing a report first.
  Format-tolerant — we have not seen real examples yet.
- **The Claude Project** — copyblock library and bidding methodology as Project
  knowledge. MCP is the hands; the Project is the memory.
- **Cowork** — unverified whether it changes the Project recommendation. Does not
  affect the MCP design either way.

---

## 5. SEO / AEO backlog

Ranked by impact ÷ effort. Audit findings; the site is already a strong 116-page
programmatic local build, so this is repair, not construction.

### Highest leverage — nothing is currently measurable

**PostHog is installed and imported by nothing.** `src/lib/posthog.ts` is a two-line
re-export with zero consumers. No GA4, no Vercel Analytics, no Search Console
verification tag. There is presently **no way to tell whether any of this work moves
anything.** This arguably should have come first.

- [ ] Wire PostHog (provider + pageview capture)
- [ ] Verify Search Console for the **canonical** property once the domain fix lands
- [ ] Consider Sentry (also a Project #2 prerequisite)

### Content and technical

- [x] ~~`llms.txt` under-lists the site~~ — **done 2026-09-22** (`5d4a788`). Now 61
      URLs: 11 blog posts, 16 neighborhoods, 13 sub-service pages, and the 48 geo pages
      as a verified-gapless pattern rather than 48 lines.
- [x] ~~No favicon~~ — **done** (`5d4a788`). `src/app/icon.tsx`, generated via
      `ImageResponse` like the OG card. Rendered and checked at 8×, not assumed.
- [x] ~~`sue-admin-guide.html` publicly crawlable~~ — **done** (`ae9ea47`). Moved to
      `private/` and served by an admin-gated route. Verified four ways including a
      live `next start` fetch and an unmocked-filesystem test.
- [x] ~~Phone format split~~ — **done** (`5d4a788`). 26 files normalized; verified by
      parsing all 222 JSON-LD blocks across 107 prerendered pages, not by grep. One
      distinct value across 61 occurrences. Display copy and all 416 `tel:` links
      untouched.
- [x] ~~11 dead page files~~ — **done** (`5d4a788`). Redirect rules verified intact in
      the built `routes-manifest.json`.
- [ ] **`Review` schema is invalid** — 6 nodes with no `reviewRating`. **Decided
      2026-09-28: leave it, wait for real GBP reviews.** Self-hosted reviews are
      ineligible for rich results regardless, so removing the markup gains nothing and
      the durable fix is review volume on the Google profile (currently zero).
- [x] ~~Generic `LocalBusiness` subtype~~ — **Decided 2026-09-28: keep it generic.**
      schema.org types and Google Business Profile categories are unrelated systems; the
      GBP category (`Carpenter`) is what drives local-pack placement, and the schema
      `@type` does not. No schema.org subtype describes architectural wood refinishing —
      the nearest candidates under `HomeAndConstructionBusiness` all name *adjacent*
      trades. A subtype is a factual claim about the entity, so an approximately-right
      one is worse than none: `HousePainter` on 63 pages tells every answer engine
      something false about a real business. Generic `LocalBusiness` is accurate, and the
      `Service` nodes, description and `llms.txt` already carry the specificity truthfully.
      Higher-leverage alternative: GBP supports **secondary categories**, which are free
      and do affect which searches she surfaces for.
- [ ] **`BUSINESS_TELEPHONE` is still unused** — all 61 JSON-LD sites now use the same
      literal string rather than the exported constant. Single-sourcing them means
      touching imports in 61 files; correct, but its own task.
- [ ] **Three neighborhood pages link internally to redirected routes** —
      `neighborhoods/{kirkwood,webster-groves,tower-grove}` link to
      `/historic-preservation/historic-tax-credits/` and `/st-louis-historic-districts/`.
      Nothing is broken (they 308), but internal links should point at live URLs.

> **Correction:** the redirects in `next.config.ts` emit **308**, not 301 —
> `permanent: true` in Next.js is 308. Both are permanent and pass link equity, so
> nothing is wrong, but earlier notes in this file and in `docs/DOMAINS.md` say 301.

### The big one

- [ ] **Zero images on the entire public site**, including a `/portfolio` page with no
      portfolio. A wood-refinishing business sells on before/after proof. This costs
      conversion, the image-search surface, and the GBP photo surface entirely.
      Infrastructure is already configured (`next.config.ts` has AVIF/WebP and a
      Supabase remote pattern). Effort is a photo-sourcing project, not a code change —
      and the CRM's photo pipeline is what would eventually feed it.

---

## 6. Known defects — found, deliberately not fixed

Surfaced during the session audits. None were in scope; all are real.

### 🔴 Highest — sender spoofing on `/api/inbound`

`src/app/api/inbound/route.ts:119-122` decides whether a message is from Sue by
**string-comparing the `From` header** against `CONTACT_EMAIL` / `FROM_EMAIL`.
`grep -rniE "spf|dkim|dmarc|authentication-results" src/` returns nothing — there is no
sender authentication anywhere in this codebase, and a `From` header is forgeable.

Chain: `reply_token` is 48-bit, never expires, and sits in the Reply-To of every email
about a job → mail that token with `From: sue@suewheelerstl.com` → stored
`is_from_admin = true` → renders in the customer's portal **attributed to Sue**, and is
forwarded to their real inbox from the site's own sending domain → that portal shows a
live Venmo payment prompt. That is a payment-redirect fraud setup, against a business
that works inside people's homes.

**Mitigating:** `RESEND_WEBHOOK_SECRET` is set in Production, so the Svix signature gate
holds there — an attacker must get through Resend's inbound processing rather than
forging the webhook. Whether Resend pre-filters spoofed senders is **not determinable
from this repo**, and no code assumes it does. In Preview and Development the secret is
unset and `/api/inbound` fails open as well.

**Fix:** read Resend's SPF/DKIM/DMARC results and refuse `is_from_admin` unless they
pass. Verify what Resend actually forwards before writing it.

**Fixed 2026-09-22** (`ae9ea47`): `/api/inbound` now fails closed · both bid routes
check the UPDATE result and return 500 before emailing · `client/bid-file` checks
expiry · `X-Frame-Options: DENY` added · `images.remotePatterns` corrected ·
duplicate `SubmissionNote` removed.

| Defect | Where | Risk |
|---|---|---|
| **`generate-pdf` has the same unchecked-UPDATE bug** | `api/admin/bid/generate-pdf/route.tsx:175-178` | The third instance. Ignores the UPDATE result, then emails the customer the PDF. Its two siblings were fixed in `ae9ea47`; this one was out of scope and remains. |
| **A hand-retyped copy of `STATUS_VALUES`** | `api/admin/submissions/[id]/route.ts:7-16` | Validates `status` against a duplicated list instead of importing from `db-contract.ts`, so the two can drift silently — the same class of bug as the `quote_sent`/`scheduled` writes just fixed. Also forwards `lost_reason` with **no validation**, so a bad value reaches Postgres as an opaque 500. The MCP's `update_lead` validates both correctly; this route should import from the same source. |
| **`reply_token` is 48-bit and never expires** | `20260425_reply_token.sql:3-5` | 12 hex chars, far weaker than the UUID `client_token`. Anyone holding or guessing one can inject into a customer's email thread. The input half of the spoofing chain above. |
| **CSP is report-only, not enforcing** | `next.config.ts` | **Shipped report-only 2026-09-28.** Origins inventoried from source and build output. It blocks nothing; it collects violations. **To enforce:** browse the public site AND the admin CRM with the console open, add any origin that reports, rename the header key. Do it *after* the monorepo move so a CSP failure and a Root Directory failure cannot be confused. Note `script-src` carries `'unsafe-inline'` for Next hydration, so it does **not** yet stop an injected inline script — real XSS protection needs nonces via middleware, and this report is the input to that. |
| **`/api/contact` and `/api/upload-url` are fully public** | — | No rate limit, no CAPTCHA, no origin check. Both hold a service-role client. |
| **`bid/blocks/[id]` has no ownership check** | `api/admin/bid/blocks/[id]/route.ts` | Any allowlisted admin can edit any block by id. Low severity with two admins; recorded for when that changes. |
| **Preview and Development share the production database** | Vercel env | A preview deploy writes to real customer records. |
| **Migrations are ~⅓ incomplete** | `docs/MIGRATIONS.md:5-6` | 10 remote migrations against 4 committed files. `submission_notes` has no `CREATE TABLE` anywhere. Partly mitigated — the drift gate now covers every column the MCP reads, verified against the live DB. |
| **2 moderate `postcss` audit warnings** | — | Awaiting an upstream Next.js bump. |

---

## 7. Project #2 — contact form UX redesign

Not started. From the roadmap, and **deliberately gated**: instrument PostHog
form-funnel and field-drop-off plus Sentry **first**, then cut required fields to
name/email/message and rework the layout. The 2026-06-14 decision was not to cut
fields by guess, and that still holds — see §5, nothing is measurable yet.

Form lives at `src/components/ContactForm.tsx` (5 required fields today) and
`src/app/api/contact/route.ts`. Source: `.claude/memory/form-ux-review-with-monitoring.md`.

---

## 8. Done

### 2026-09-22

- **Seven MCP write tools** (`4a18033`) — create and update, with the
  `propose_bid_amount` / `set_bid_amount` split. Both safety properties
  mutation-tested: six deliberate breakages, every one caught.
- **Six defects fixed** (`ae9ea47`) — two routes that returned `ok:true` and emailed
  the customer while the database write was rejected with 23514; `client/bid-file`'s
  missing expiry check; `/api/inbound` failing open; `X-Frame-Options`;
  `images.remotePatterns` naming a different Supabase project.
- **Admin guide taken off the public web** (`ae9ea47`) — 1.4 MB internal doc moved
  from `public/` to an admin-gated route, verified four ways including a live fetch.
- **SEO batch** (`5d4a788`) — `llms.txt` completed (61 URLs), favicon added, 26 files'
  JSON-LD phone normalized to E.164, 11 dead page files deleted, `sue@` made the
  single public email.
- **`Referrer-Policy`** (`95e2e15`) — the portal URL *is* the `client_token`, and the
  page loads a QR image from a third party, so the credential was leaving in the
  `Referer` on every render. Also stopped logging `reply_token` on every submission.
- **Documentation** (`9bdd0f3`, `4c811b3`) — decision log, architecture, security, and
  MCP references; roadmap reconciled.

### 2026-09-03

For reference, so nothing here gets re-litigated.

- **Admin CRM authorization** (`07d09dc`) — the CRM only ever checked *that* someone
  was signed in, never *who*. `ADMIN_EMAILS` had been dead config for 142 days.
  Publishing the OAuth consent screen as External (to fix Sue's login) removed the
  org restriction that was inadvertently the only access control. Now gated at 14 API
  handlers, middleware, and 4 server components; fails closed.
- **Title template collision** — 113 of 116 pages double-stamped the brand; 115 of 118
  titles exceeded 60 chars. Now 0 over 60, max brand count 1.
- **Self-referencing canonicals** — 118/118 pages, 118 distinct, 0 www/site leakage.
- **Service area reconciled** — 8 suburbs recovered; ~6,400 words of finished copy had
  been prerendering on every deploy and being intercepted by a 308.
- **NAP single-sourced** — 63/63 `LocalBusiness` nodes carry the address, one
  definition, zero home-address leakage into structured data.
- **ntfy alert channel** — needs `NTFY_TOPIC` to arm (§1).
- **MCP read tools** — §4.

Decisions worth not re-deriving are in `.claude/memory/`:
`canonical-nap-and-premises`, `canonical-host-and-stlmag-backlink`,
`service-area-lead-capture-ruling`.
