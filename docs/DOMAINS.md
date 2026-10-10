# Domains & Canonical Host

The site is reachable on three hostnames. Exactly one of them is canonical:

| Host                     | Role          | Should serve        |
| ------------------------ | ------------- | ------------------- |
| `suewheelerstl.com`      | **canonical** | The site (HTTP 200) |
| `www.suewheelerstl.com`  | alias         | 308 redirect → apex |
| `site.suewheelerstl.com` | legacy mirror | 308 redirect → apex |

**Canonical host is the bare apex, `https://suewheelerstl.com` — no `www`.** The
whole codebase already declares it: `metadataBase` in `src/app/layout.tsx`,
`BASE_URL` in `src/app/sitemap.ts`, the sitemap reference in `src/app/robots.ts`,
and every JSON-LD `@id`/`url`. Choosing apex means zero code churn.

## Current state vs. target

Production today redirects the **wrong way** — apex 307s to `www`, which is
backwards from what the code declares:

```bash
curl -sI https://suewheelerstl.com/faq | grep -i 'HTTP\|location'
# HTTP/2 307
# location: https://www.suewheelerstl.com/faq
```

That redirect does **not** come from this repo. `next.config.ts` contains only
path-level redirects, `src/middleware.ts` matches `/admin/:path*` only, and there
is no `vercel.json`. It is a **Vercel domain setting**, so it is fixed in the
dashboard, not in code. (Tell: Vercel's domain redirect returns `307` with
`content-type: text/plain`; a `permanent: true` rule in `next.config.ts` would
return `308` with an `x-nextjs-redirect` header.)

## Fixing it in Vercel

All of this happens in **Vercel → project `suewheelerstl` → Settings → Domains**.
Nothing here requires a redeploy.

### 1. Make the apex the Primary Domain

1. Find `suewheelerstl.com` in the domain list.
2. Open its **⋯** menu and choose **Set as Primary Domain** (if it already shows
   the _Primary_ badge, skip this step).

Primary Domain is what Vercel uses as the default redirect target and what it
shows in deployment UI. It does not by itself change any redirect — steps 2 and 3
do that.

### 2. Reverse the `www` redirect

`www.suewheelerstl.com` is currently the redirect **target**. It must become the
redirect **source**.

1. On `suewheelerstl.com`, open **Edit** and clear the redirect — set
   **Redirect to** to **No Redirect**. The apex must serve the site directly.
2. On `www.suewheelerstl.com`, open **Edit** and set **Redirect to** →
   `suewheelerstl.com`.
3. Set **Redirect Status Code** to **308 Permanent Redirect**. Vercel defaults to
   307 (temporary), which does not pass link equity. 308 is the modern permanent
   redirect and preserves the request method; 301 is also acceptable if 308 is not
   offered.
4. Save.

Do these in this order. Setting the `www` redirect before clearing the apex one
briefly creates a redirect loop.

### 3. Point the `site.` mirror at the apex

`site.suewheelerstl.com` currently serves a full independent copy of the site at
HTTP 200 — a duplicate-content mirror competing with the canonical host.

1. On `site.suewheelerstl.com`, open **Edit** and set **Redirect to** →
   `suewheelerstl.com`.
2. Set **Redirect Status Code** to **308 Permanent Redirect**.
3. Save.

> ⚠️ **Do not remove or delete the `site.` domain.** The business's single best
> backlink — the St. Louis Magazine feature at
> `https://www.stlmag.com/design/a-guide-to-furniture-in-st-louis/` — points at
> `site.suewheelerstl.com`, so deleting the domain would turn that link into a 404
> and throw away its ranking value permanently; a 301/308 forwards that value to
> the canonical host instead.

> **Correction, 2026-10-10.** This section previously said the mirror was serving a
> build ~76 days stale (`age: 6618510`). That is no longer true — it now reports
> `age: 0` because the deploys of 2026-09-28 and 2026-10-10 rebuilt it. The stale-
> content argument for urgency is gone; the duplicate-content and split-authority
> argument stands unchanged, and so does the backlink reason not to delete it.

## Verifying

Run this after the Vercel changes propagate (usually under a minute):

```bash
for u in https://www.suewheelerstl.com/faq \
         https://site.suewheelerstl.com/ \
         https://suewheelerstl.com/faq; do
  echo "== $u"
  curl -sI "$u" | grep -i '^HTTP\|^location'
done
```

Expected:

- `www` → `308` + `location: https://suewheelerstl.com/faq`
- `site.` → `308` + `location: https://suewheelerstl.com/`
- apex → `200` (no `location`)

Then confirm the canonical tag agrees with the host that served it:

```bash
curl -s https://suewheelerstl.com/faq | grep -o '<link rel="canonical"[^>]*>'
# <link rel="canonical" href="https://suewheelerstl.com/faq"/>
```

Every page emits its own self-referencing canonical. That comes from
`alternates: { canonical: "./" }` in the root `metadata` export in
`src/app/layout.tsx`, which Next resolves per-route against `metadataBase`.

> **If you ever add `alternates` to a single page's `metadata`, it replaces the
> layout's value for that page** rather than merging with it. Only do that when a
> page genuinely needs to point at a different URL, and write the full absolute
> URL when you do.

## What to expect afterward

- **Redirect chains collapse.** Today an inbound `site.` link can chain through
  multiple hops. After the change every alias is one 308 straight to the apex,
  which is what search engines want to see.
- **Search Console needs the canonical property.** Add and verify
  `https://suewheelerstl.com` as its own property (or use a Domain property, which
  covers every subdomain at once). Submit `https://suewheelerstl.com/sitemap.xml`
  there. Any existing `www` or `site.` property will show traffic decaying to zero
  as the redirects take hold — that is the change working, not a traffic loss.
- **Reindexing takes weeks.** Google re-crawls and consolidates duplicate hosts on
  its own schedule. Expect ranking signals to consolidate onto the apex over
  roughly 4–8 weeks. Do not revert the redirects partway through — flapping the
  canonical host is worse than either direction alone.
- **Nothing in this repo changes.** No redeploy, no env var, no code edit is part
  of steps 1–3.

## What this does NOT cover

DNS records themselves (the A/CNAME entries at the registrar) are not touched
here — all three hostnames already resolve to Vercel correctly. This document only
covers which host is canonical and how the other two forward to it.
