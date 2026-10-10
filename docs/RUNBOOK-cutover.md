# Cutover Runbook — the four things only Peter can do

_Written 2026-10-10. Everything here is dashboard or account work; none of it is code._

Work these **in order**. Each gate has a verification you should actually run — not
read — before moving to the next. Where a step can fail, the failure and its
reversal are written down.

**Time:** Gate 1 ~10 min. Gate 2 ~20 min. Gate 3 ~15 min. Gate 4 is a decision.

---

## GATE 1 — Reverse the apex→www redirect, 301 the mirror

**Why first:** it is the only item that unblocks a whole workstream. Claude drops the
`Authorization` header across a cross-host redirect and reports *"Authorization with
the MCP server failed"* — a credentials error that is not a credentials problem. It
also ends the three-way split of search authority. And doing it **before** the
monorepo cutover means a later failure has one suspect, not two.

**Full steps:** `docs/DOMAINS.md` §"Fixing it in Vercel". Do not improvise around it —
two hazards are sequenced deliberately:
- Vercel defaults domain redirects to **307**, which consolidates no link equity. It
  must be set to **308**.
- Setting the `www`→apex redirect **before** clearing the apex's own redirect creates
  a loop. Clear the apex first.

**Do not delete `site.suewheelerstl.com`.** The St. Louis Magazine feature links to
it; a 308 forwards that authority, a deletion throws it away permanently.

### Verify — run this, don't assume

```bash
for h in https://suewheelerstl.com https://www.suewheelerstl.com https://site.suewheelerstl.com; do
  printf '%-36s ' "$h"
  curl -s -o /dev/null -w 'HTTP %{http_code} -> %{redirect_url}\n' --max-time 15 "$h"
done
```

**Target:**
```
https://suewheelerstl.com            HTTP 200
https://www.suewheelerstl.com        HTTP 308 -> https://suewheelerstl.com/
https://site.suewheelerstl.com       HTTP 308 -> https://suewheelerstl.com/
```

Then confirm the canonical tags now agree with the serving host — they already point
at the apex, so after this they stop contradicting the redirect:

```bash
curl -s https://suewheelerstl.com/about | grep -o 'rel="canonical" href="[^"]*"'
```
Expected: `https://suewheelerstl.com/about` — same host that served it.

### If it goes wrong

A redirect loop (`curl` reports "Maximum redirects followed") means the apex still has
its own redirect. Clear it; the loop resolves in seconds. **No deploy is involved, so
nothing needs rebuilding and nothing is at risk.**

---

## GATE 2 — The probe project

**Why this cannot be skipped:** Root Directory is a **project-level** setting. A branch
preview on the live project would still build at the repo root and fail — proving
nothing about whether `apps/site` works. The probe is a throwaway project that builds
the branch *with Root Directory already set*, which is the only way to test the cutover
without touching production.

### Steps

1. **Vercel → Add New → Project →** import the same repo, `CHAOSAiGENT/suewheelerstl`.
   Name it something obviously disposable: `suewheelerstl-monorepo-probe`.

2. **Before the first deploy**, set:
   - **Root Directory** = `apps/site`
   - **Framework Preset** = Next.js
   - **Install Command / Build Command** = leave on auto-detect
     > Overriding Install Command is a trap: *"When using an override install command
     > like `pnpm install`, Vercel will use the oldest version of the specified package
     > manager available in the build container"* — which would be pnpm 6.

3. **Settings → Git → Production Branch** = `chore/monorepo-apps-site`

4. **Environment Variables → Production** (not Preview — see below):
   ```
   SUPABASE_DB_URL
   ADMIN_EMAILS
   NEXT_PUBLIC_SUPABASE_URL
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
   SUPABASE_SECRET_KEY
   RESEND_API_KEY
   ENABLE_EXPERIMENTAL_COREPACK=1
   ```
   Copy the values from the live project's Production environment.

   > Deploying the branch as the probe's **production** is deliberate. A preview there
   > would inherit the Preview environment, and admin routes fail closed without
   > `ADMIN_EMAILS` — making the decisive check in step 6 unperformable.

5. **Deploy**, then read the build log for three things:
   - **which pnpm version** ran. `lockfileVersion: 9.0` maps to "pnpm 9 **or** 10", and
     pnpm 10 skips dependency lifecycle scripts by default. `ENABLE_EXPERIMENTAL_COREPACK=1`
     plus the `packageManager` pin should force 9.
   - `sharp` and `protobufjs` **build scripts running**. If they are absent, pnpm 10 was
     used and the pin did not take.
   - `prebuild` running `test:schema` **green against the live database**.

6. **The decisive check — `/admin/guide`.**

   This is the only failure that survives a fully green build: the route reads
   `path.join(process.cwd(), "private", "sue-admin-guide.html")` at runtime, so a broken
   file trace 500s in production only.

   Enable **Settings → Deployment Protection → Protection Bypass for Automation**, copy
   the generated secret, then:

   ```bash
   curl -sS -D- -o /tmp/guide.html \
     -H "x-vercel-protection-bypass: YOUR_SECRET" \
     "https://PROBE-URL/admin/guide" | head -3
   wc -c /tmp/guide.html
   ```

   **Byte length is the measurement, not the status code.** The route 307s to
   `/admin/login` on an auth failure and 500s on a trace miss — only the size proves the
   file shipped.

   | Result | Meaning |
   |---|---|
   | **200 + ~1,505,105 bytes** | ✅ Pass. Proceed to Gate 3 |
   | **307 → /admin/login** | ⚠️ Partial pass — route and trace are fine, you simply are not signed in. Acceptable |
   | **500** | ❌ **Fail. Stop.** The file trace is broken. Do not proceed to Gate 3 |

7. **Spot-check the rest:**
   ```bash
   curl -sI  https://PROBE-URL/ | head -1                              # 200
   curl -sS  https://PROBE-URL/sitemap.xml | grep -c "<loc>"           # 105
   curl -sI  https://PROBE-URL/architectural-woodwork-refinishing \
        | grep -i location                                             # 308 to built-ins
   ```

### If step 6 fails

Fix on the branch, push, let the probe rebuild, repeat. **The live site has not been
touched and cannot be** — this is the entire purpose of the probe.

---

## GATE 3 — The cutover

Only after Gate 2 step 6 passes.

### Step 1 — Record what you cannot recover later

Dashboard → the **live** project → Settings → Build and Deployment. Write down all
seven verbatim: Root Directory, Framework Preset, Build Command + Override state,
Output Directory + Override, Install Command + Override, Node.js Version, and whether a
**Skip deployment** toggle is present.

Then record the rollback target:
```bash
npx vercel list --prod
```
Note the ID of the current `READY` production deployment. **This is your undo button.**

### Step 2 — Merge and push. Expect the build to FAIL.

```bash
cd /Users/peterledgrowth/CHAOS/_clients/client_sites/suewheelerstl
git switch main
git merge --no-ff chore/monorepo-apps-site
git push origin main
```

The Vercel deployment will show **Error** — Root Directory is still the repo root and
there is no longer a `package.json` there.

**Verify the live site is unaffected by fetching it, not by reading the dashboard:**
```bash
curl -sI https://suewheelerstl.com/ | head -1
```
Expected: `200`. Vercel never promotes a failed build, so the previous deployment keeps
serving. **This failure is the safety mechanism, not an incident.**

> Push-first is deliberate. Flipping Root Directory *before* the push means any
> unrelated redeploy in the gap builds an `apps/site` that does not exist yet — turning
> a controlled failure into an uncontrolled window.

### Step 3 — Flip Root Directory

Settings → Build and Deployment → **Root Directory = `apps/site`** → Save.

Leave Framework Preset, Build Command, Output Directory and Install Command exactly as
recorded in step 1. Add `ENABLE_EXPERIMENTAL_COREPACK=1` to the project environment.

Verify the field reads `apps/site` after a page reload, and that nothing else changed.

### Step 4 — Redeploy the merge commit

Deployments → ⋮ on the failed deployment → **Redeploy**. Do **not** push an empty
commit — you want the same commit built under the new setting.

### Step 5 — Verify production, measuring the perceived thing each time

```bash
H=https://suewheelerstl.com
curl -sI  $H/ | head -1                                    # 200
curl -sS  $H/ | grep -c 'class='                           # non-zero: Tailwind resolved
curl -sS  $H/sitemap.xml | grep -c "<loc>"                 # 105
curl -sI  $H/architectural-woodwork-refinishing | grep -i location   # 308
curl -sI  $H/ | grep -icE "referrer-policy|x-frame-options|content-security-policy-report"  # 3
curl -sI  $H/sue-admin-guide.html | head -1                # 404
```

An **unstyled page is the signature of a Tailwind `@source` resolution miss** — that is
why the `class=` count is in the list rather than just a 200.

Then, signed in as an allowlisted admin in a browser: `/admin/guide` loads the document.

### Step 6 — Re-arm local tooling

```bash
pnpm run setup:hooks
git config core.hooksPath          # must print scripts/hooks
```
Then make a throwaway commit and push, to confirm `pre-push` fires and passes.

### Step 7 — Verify the alerting path

Manually dispatch the `form-monitor` workflow (`workflow_dispatch`) in GitHub Actions.
Expected: green, reporting the live endpoint healthy. **Do not wait six hours to
discover the monitor broke.**

### Step 8 — Clean up

Delete the probe project. Enable **Skip deployment** on the live project once
`apps/desktop` exists — it does nothing useful with only one app.

### Rollback

| Situation | Action |
|---|---|
| **Step 2 build fails** | That is the plan. Continue to step 3 |
| **Step 4 fails to build** | Production untouched. Fix forward on a branch and repeat Gate 2, or revert Root Directory to empty and `git revert` the merge. No urgency — the site is up |
| **Step 4 builds but step 5 finds production broken** | The only real incident. ~30 seconds to reverse ↓ |

**Instant Rollback:** Dashboard → project overview → **Instant Rollback** → select the
deployment ID from step 1 → Confirm. Domains re-point instantly, **no rebuild**. Leave
Root Directory set to `apps/site`; the rolled-back deployment is already built.

Then **verify perceptually** — fetch the site and the broken route, confirm old
behaviour is back. Do not trust the dashboard badge.

⚠️ **After a rollback, Vercel turns OFF auto-assignment of production domains.** Pushes
to `main` will not go live until you **Undo Rollback** or run `vercel promote <id>`.
Env vars are also *not* rolled back.

One judgement call: if `/admin/guide` is the only breakage, consider whether a rollback
is warranted at all. It is an admin-only document, and rolling back disables production
auto-deploy — a bigger operational cost than a broken admin route for an hour.

---

## GATE 4 — Confirm the bundle identifier

Not a task. A decision, and a permanent one.

**Proposed:** `com.chaosaigent.suewheelerstl-companion`

**Why it cannot be changed later:** macOS Keychain items are scoped to
`$(teamID).$(bundleID)`. Change either and **every stored token is orphaned with no
migration path** — Sue silently signs out and nothing in the app explains why. Usage
attribution and billing also key off the installed app, so it is load-bearing for the
business model, not just for auth.

**Worth deciding now, with the product line in mind.** If this becomes a template for
other clients, the pattern matters: `com.chaosaigent.<client>-companion` scales;
`com.suewheeler.app` does not.

Answer this before anyone runs `pnpm create tauri-app`.

---

## Small items — any time, no ordering

### Apply the `usage_events` migration
```bash
cd apps/site        # on the branch; after Gate 3, this is just the normal path
npx supabase db push
```
Then confirm the drift gate **runs** rather than skips:
```bash
SUPABASE_DB_URL="$(grep '^SUPABASE_DB_URL=' .env.local | cut -d= -f2-)" pnpm run test:schema
```
If it reports skipped, `SUPABASE_DB_URL` is not set locally and the assertion has not
actually been checked.

### Move `.env.local`
```bash
mv .env.local apps/site/.env.local
```
A pre-tool hook blocks agents from touching `.env*`, correctly. Local dev will not pick
up env until this is done. **Vercel is unaffected** — it supplies env from its own
project config.

### `NTFY_TOPIC`
Generate an unguessable topic — a public ntfy.sh topic name **is** the secret:
```bash
echo "suewheeler-$(openssl rand -hex 12)"
curl -H "Title: Sue Wheeler STL — test" -H "Priority: urgent" \
     -H "Tags: rotating_light" -d "smoke test" https://ntfy.sh/YOUR-TOPIC
```
Add it as a **GitHub repo secret** named `NTFY_TOPIC`, then subscribe to that topic in
the ntfy app.

### `.env.local.example`
Paste the `ADMIN_EMAILS` block from commit `07d09dc`'s body into
`apps/site/.env.local.example`. Agents cannot write `.env*` files.
