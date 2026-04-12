# Launch Checklist — suewheelerstl.com

## 1 — Supabase: Run SQL Migration

- [ ] Open [Supabase Dashboard](https://supabase.com/dashboard) → project **zemmpcilhxobljzdhnig**
- [ ] SQL Editor → New query → paste contents of `supabase/migrations/001_contact_portal.sql` → Run
- [ ] Confirm tables exist: `submissions`, `messages`
- [ ] Confirm storage bucket exists: `submission-photos`

---

## 2 — Vercel: Add Environment Variables

Go to [Vercel → suewheelerstl → Settings → Environment Variables](https://vercel.com/chaosaigent/suewheelerstl/settings/environment-variables)

Apply each to **Production + Preview + Development**.

| Variable                               | Value                                            |
| -------------------------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SUPABASE_URL`             | `https://zemmpcilhxobljzdhnig.supabase.co`       |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | `sb_publishable_zfclE3BBcDy4eDVOmh7mOg_HhphLvzc` |
| `SUPABASE_SECRET_KEY`                  | _(Supabase → Settings → API → service_role key)_ |
| `NEXT_PUBLIC_SITE_URL`                 | `https://suewheelerstl.com`                      |
| `RESEND_API_KEY`                       | _(Resend dashboard → API Keys)_                  |
| `CONTACT_EMAIL`                        | `sue@suewheelerstl.com`                          |
| `FROM_EMAIL`                           | `no-reply@suewheelerstl.com`                     |

- [ ] All 7 variables saved in Vercel

---

## 3 — Supabase: Add Auth Redirect URLs

Go to Supabase → Authentication → URL Configuration → Redirect URLs

- [ ] Add `https://suewheelerstl.com/admin/auth/callback`
- [ ] Add `https://*.vercel.app/admin/auth/callback`

---

## 4 — Vercel: Add Custom Domain

Go to [Vercel → suewheelerstl → Settings → Domains](https://vercel.com/chaosaigent/suewheelerstl/settings/domains)

- [ ] Add `suewheelerstl.com`
- [ ] Add `www.suewheelerstl.com` (redirect to apex)
- [ ] Note the A record / CNAME values Vercel provides

---

## 5 — DNS: Point Domain to Vercel

At your domain registrar (GoDaddy / Namecheap / etc.):

- [ ] Update A record for `@` → Vercel IP (shown in step 4)
- [ ] Update CNAME for `www` → `cname.vercel-dns.com`
- [ ] Allow up to 24h for propagation (usually <1h)

---

## 6 — Resend: Verify Sending Domain

Go to [Resend → Domains](https://resend.com/domains)

- [ ] Add domain `suewheelerstl.com` (or confirm it's verified)
- [ ] Confirm `no-reply@suewheelerstl.com` can send
- [ ] Add DNS records Resend requires (SPF, DKIM)

---

## 7 — Redeploy & Smoke Test

- [ ] Vercel → Deployments → redeploy latest after env vars are saved
- [ ] Visit `https://suewheelerstl.com` — site loads correctly
- [ ] Submit a test form entry → check Supabase `submissions` table for the row
- [ ] Confirm admin notification email arrives at `sue@suewheelerstl.com`
- [ ] Confirm client confirmation email arrives at test address
- [ ] Visit `/my-request/[token]` link from confirmation email
- [ ] Visit `/admin` → request magic link → confirm login works

---

## 8 — DNS: Remove Old Google Form Embed

Once the new site is confirmed live and form is working:

- [ ] Remove / disable the old Google Form
- [ ] Confirm contact page at suewheelerstl.com shows the new form

---

## Post-Launch

- [ ] Submit sitemap to Google Search Console: `https://suewheelerstl.com/sitemap.xml`
- [ ] Confirm `https://suewheelerstl.com/robots.txt` is accessible
- [ ] Set up sue@suewheelerstl.com email forwarding if not already done
