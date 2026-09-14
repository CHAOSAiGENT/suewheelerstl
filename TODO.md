# TODO — suewheelerstl

_Last updated 2026-09-03._

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
| **Public email: `sue@` or `info@`?** | Operational code uses `sue@suewheelerstl.com`; the only published address is `info@` in the privacy policy. Pick one. |

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

**Done:** four read tools (`search_leads`, `get_lead`, `get_pipeline`,
`search_copyblocks`), column allowlists, Streamable HTTP route, schema-drift coverage.
58 tests. Exercised against the live production database with zero bearer-token leakage.

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

- **Create + update tools** — `create_lead`, `add_note`, `create_bid_blocks`,
  `update_lead`, `update_bid_blocks`, and the `propose_bid_amount` / `set_bid_amount`
  split that makes "Sue sets the price" structural rather than a prompt instruction.
  Needs its own plan.
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

- [ ] **`llms.txt` badly under-lists the site** — 6 of 11 blog posts, 6 of 16
      neighborhood pages, and **0 of 48** geo service pages. AI engines read it as the
      map of what exists.
- [ ] **No favicon at all** — no `icon.*`, `apple-icon.*`, or `favicon.ico`. Shows in
      SERPs and tabs; reads as unfinished.
- [ ] **`public/sue-admin-guide.html` (1.4 MB) is publicly crawlable** — an internal
      admin training doc in the web root, unlinked but fetchable and allowed by robots.
- [ ] **`Review` schema is invalid** — 6 nodes with no `reviewRating`, so it earns
      nothing today. Self-hosted reviews are ineligible for review rich results
      regardless; the durable fix is real GBP reviews.
- [ ] **Generic `LocalBusiness`** — a subtype (`HomeAndConstructionBusiness` /
      `Painter`) categorizes the entity more precisely. Low cost, low certainty.
- [ ] **Phone format split** — ~30 pages emit `(314) 367-6054`, the rest E.164.
      `BUSINESS_TELEPHONE` is exported and unused, ready for the sweep.
- [ ] **11 dead page files still on disk** — the `commercial-*`, `institutional-*`,
      and three `historic-preservation/*` routes are 301'd but still build and ship.
      Housekeeping; they will mislead the next person auditing the route tree.

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

| Defect | Where | Risk |
|---|---|---|
| **`/api/inbound` fails open** | `src/app/api/inbound/route.ts:17-21` | If `RESEND_WEBHOOK_SECRET` is unset it logs a warning and returns `true`, accepting unsigned POSTs. It **is** set in Production — but only Production. Compounds the spoofing issue above. |
| **Bid routes report success on a rejected write** | `api/admin/bid/route.ts:73`, `api/client/accept-bid/route.ts:41` | Beyond writing invalid status values, **neither checks the UPDATE result** — so both return `ok:true` and send the customer an email while the database write is rejected with 23514. A silent failure in production. |
| **No CSP or `X-Frame-Options`** | `next.config.ts` | `Referrer-Policy` was added 2026-09-14; the rest of the header set is still absent. |
| **`images.remotePatterns` names the wrong Supabase project** | `next.config.ts:58` | Allowlists `zemmpcilhxobljzdhnig.supabase.co`, not this project's `khioedholasaxemmtooz`. Dead today — nothing uses `next/image` — but it bites the moment images land (§5). |
| **Preview and Development share the production database** | Vercel env | A preview deploy writes to real customer records. |
| **`reply_token` is 48-bit and never expires** | `20260425_reply_token.sql:3-5` | `encode(gen_random_bytes(6),'hex')` = 12 hex chars, far weaker than the UUID `client_token`. Anyone who guesses one can inject into a customer's email thread. |
| **`client/bid-file` skips its own expiry check** | `src/app/api/client/bid-file/route.ts` | Mints a signed URL from `client_token` without checking `client_token_expires_at`, which every sibling route does check. |
| **Two routes write invalid status values** | `api/admin/bid/route.ts:73`, `api/client/accept-bid/route.ts:41` | Write `'quote_sent'` and `'scheduled'`, which the live CHECK constraint rejects. `get_pipeline` now surfaces these as `unknownStatusCount`. |
| **`SubmissionNote` declared twice** | `src/lib/types.ts:102` and `:120` | Identical bodies, legal via declaration merging, almost certainly accidental. |
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

## 8. Done — 2026-09-03

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
