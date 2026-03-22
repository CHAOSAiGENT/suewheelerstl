# CRM Setup Instructions

Three manual steps are required to activate the contact form database, admin portal, and client portal.

---

## Step 1 — Run the SQL migration

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → project **zemmpcilhxobljzdhnig**
2. Go to **SQL Editor** → **New query**
3. Paste the entire contents of `supabase/migrations/001_contact_portal.sql`
4. Click **Run**

This creates the `submissions` and `messages` tables, indexes, RLS policies, and the `submission-photos` storage bucket.

---

## Step 2 — Add environment variables to Vercel

1. Open [Vercel Dashboard](https://vercel.com/chaosaigent/suewheelerstl) → **Settings** → **Environment Variables**
2. Add the following variables (apply to **Production**, **Preview**, and **Development**):

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://zemmpcilhxobljzdhnig.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | `sb_publishable_zfclE3BBcDy4eDVOmh7mOg_HhphLvzc` |
| `SUPABASE_SECRET_KEY` | *(your secret key from Supabase → Settings → API)* |
| `NEXT_PUBLIC_SITE_URL` | `https://suewheelerstl.com` |

The following should already be set — confirm they exist:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | *(your Resend API key)* |
| `CONTACT_EMAIL` | `sue@suewheelerstl.com` |
| `FROM_EMAIL` | `no-reply@suewheelerstl.com` |

3. Click **Save** after adding each variable.

---

## Step 3 — Add redirect URLs in Supabase Auth

These are required for the admin magic-link login to work.

1. Open Supabase Dashboard → **Authentication** → **URL Configuration**
2. Under **Redirect URLs**, click **Add URL** and add both of these:
   ```
   https://suewheelerstl.com/admin/auth/callback
   https://*.vercel.app/admin/auth/callback
   ```
3. Click **Save**

---

## Step 4 — Redeploy

After saving the Vercel env vars, trigger a redeploy:

1. Vercel Dashboard → **Deployments** → click the three-dot menu on the latest deployment → **Redeploy**

Or push any commit to `main` — Vercel will pick it up automatically.

---

## How it works (once live)

### Contact form (`/contact`)
- Visitors fill out the enhanced form (service type, timeline, photos, etc.)
- Submission is saved to Supabase
- Sue gets an email notification with a link directly to the admin detail page
- Visitor gets a confirmation email with a link to their personal status page

### Client portal (`/my-request/[token]`)
- No login required — the unique link in the confirmation email is the access key
- Client can see their submission details and status
- Client can read messages from Sue and reply
- Links expire after 90 days

### Admin portal (`/admin`)
- Sue goes to `/admin` and clicks **Send Magic Link**
- She clicks the link in her email → she's in
- Dashboard shows all submissions sorted by date, with status chips
- Click any submission to see full details, photos, message thread
- Sue can update status (New → Reviewed → Quote Sent → Scheduled → Completed)
- Sue can add private notes (not visible to client)
- Sue can send a message to the client — they get an email notification

---

## File reference

| File | Purpose |
|---|---|
| `supabase/migrations/001_contact_portal.sql` | Database schema — run once in Supabase SQL Editor |
| `src/components/ContactForm.tsx` | Public contact form |
| `src/app/my-request/[token]/page.tsx` | Client portal |
| `src/app/admin/page.tsx` | Admin dashboard |
| `src/app/admin/[id]/page.tsx` | Admin submission detail |
| `src/lib/supabase/service.ts` | Service-role Supabase client (server-only) |
| `src/lib/email/templates.ts` | All 4 email templates |
| `.env.local.example` | Full list of required environment variables |
