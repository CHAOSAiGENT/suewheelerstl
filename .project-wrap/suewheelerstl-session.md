---
file: suewheelerstl-session.md
project: suewheelerstl
repo: github.com/CHAOSAiGENT/suewheelerstl
---

# suewheelerstl — Session Doc

## 2026-04-28 — Fix broken deploys, inbound email replies, Google OAuth, Kanban upgrades, contact form enhancements

### Stack

| Component      | Technology                   | Version / Detail             | Notes                                |
| -------------- | ---------------------------- | ---------------------------- | ------------------------------------ |
| Framework      | Next.js (App Router)         | 15.5.14                      | Server components + client islands   |
| Language       | TypeScript                   | ^5                           |                                      |
| UI             | React                        | ^19.0.0                      |                                      |
| Styling        | Tailwind CSS                 | ^4.0.6                       | Brand palette inline styles          |
| Hosting        | Vercel                       | Git-triggered deploys        | team_pPCHrfCm1gPGOhVY2SAgwSsF        |
| Database       | Supabase Postgres            | Project khioedholasaxemmtooz | Service role key for all server ops  |
| Storage        | Supabase Storage             | Bucket: submission-photos    | RLS: service_role only               |
| Email          | Resend                       | ^4.0.0                       | Outbound + inbound webhooks          |
| Webhook verify | svix                         | ^1.92.2                      | Resend webhook signature validation  |
| Auth           | Supabase Auth + Google OAuth |                              | Admin only; customers use token URLs |
| Drag/drop      | @dnd-kit/core                | ^6.3.1                       | Kanban pipeline board                |
| Address lookup | Google Places API            | JS API                       | Autocomplete with 20mi radius bias   |
| DNS            | Porkbun                      |                              | MX for reply.suewheelerstl.com       |
| Node           | Node.js                      | v22.22.0                     |                                      |

**Secrets in use:** `RESEND_API_KEY`, `RESEND_WEBHOOK_SECRET`, `SUPABASE_SECRET_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY`, `CONTACT_EMAIL`, `FROM_EMAIL`, `ADMIN_CC_EMAIL`, `ADMIN_EMAILS`, `NEXT_PUBLIC_ADMIN_EMAILS`, `REPLY_DOMAIN` — all in Vercel env vars. Google OAuth client ID/secret in Supabase dashboard.

**Claude Code config:** Supabase MCP, Vercel MCP, Context7 MCP, Playwright MCP. Skills: brainstorming, writing-plans, subagent-driven-development, supabase-migration, project-wrap. PostHog MCP configured but disconnected mid-session.

---

### Architecture

**System Layers**

**Layer 1 — Contact Intake**
What it does: Public contact form submits to `/api/contact`, inserts into `submissions` table, sends branded emails to both admin and client via Resend.
The pattern: Form → API route → DB insert → dual email notification with per-thread reply address.
Lift to: Any service business with intake forms.

**Layer 2 — Inbound Email Threading**
What it does: Emails sent from the system carry a unique `replyTo` (`thread-{token}@reply.suewheelerstl.com`). Replies hit Resend inbound → `/api/inbound` webhook → parsed, stored as messages, forwarded to the other party.
The pattern: Per-record reply tokens + inbound webhook = email-native CRM without login. Attachments (images) auto-upload to storage.
Lift to: Any project needing email-based conversations tied to records.

**Layer 3 — Admin Pipeline (Kanban)**
What it does: Drag-and-drop board with statuses: To Bid → Contacted → Bid Sent → On Deck → Active → Finishing → Fully Complete / Lost. Cards have archive/delete icons. Board filters out `archived_at IS NOT NULL`.
The pattern: Server-rendered initial load, client-side optimistic updates via PATCH, dnd-kit for drag.
Lift to: Any service pipeline (contractor, agency, freelancer).

**Layer 4 — Auth**
What it does: Admin uses Google OAuth (Supabase Auth). Customers access their request via tokenized URLs (`/my-request/{client_token}`) — no login.
The pattern: OAuth for operators, token URLs for end-users. Zero friction for both sides.
Lift to: Any B2C service portal.

**Full Chain**

`Contact form → Supabase insert → Resend emails (with thread replyTo) → Admin Kanban pipeline → Email replies captured via inbound webhook → Messages stored + forwarded`

**What You'd Swap for a Different Domain**

| This project's element       | Swap for                          |
| ---------------------------- | --------------------------------- |
| Wood refinishing services    | Any service categories            |
| Bid builder / PDF generation | Quote or proposal system          |
| Neighborhood geo pages       | Location-based service area pages |
| Sue's Google Workspace email | Any operator's OAuth provider     |

---

### Tech Log

**Bugs**

- [B-01] Submissions invisible on admin board — root cause: 4 consecutive Vercel builds failing due to default vs named import mismatch on `BreadcrumbSchema` and `CTABlock` in 10 geo pages. Production stuck on old code that inserted with `status: 'new'` (not in Kanban columns). Fix: switched imports to named, changed DB default to `to_bid`, updated 2 stuck rows.
- [B-02] Emails not sending after inbound email feature — root cause: `REPLY_DOMAIN` Vercel env var set to `https://reply.suewheelerstl.com` instead of `reply.suewheelerstl.com`. The `https://` made every `replyTo` address invalid, Resend rejected with 422. Fix: corrected env var.
- [B-03] Archive drop zone not working — cards would snap back to original column. Root cause: PATCH route didn't accept `archived_at` field, and `VALID_STATUSES` array was missing `"contacted"`. Fix: added both.
- [B-04] Google Places autocomplete not loading — `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` wasn't saved in Vercel. `NEXT_PUBLIC_*` vars are inlined at build time, so needed a redeploy after adding.

**Pivots**

- Drag-to-archive zone abandoned → replaced with per-card archive/delete icons. The drop zone conflicted with horizontal scroll and dnd-kit collision detection.
- Magic link auth replaced with Google OAuth. Magic links had friction (email delay, link expiry). Google OAuth is one-click for Sue.
- Decided against staging branch for inbound email feature — failure mode was "feature doesn't work" not "site breaks", so shipped to main directly.

**Gotchas**

- `vercel deploy --prod` from CLI creates deployments that may not have the same env var scope as git-triggered deploys. Always prefer `git push` for production.
- `echo "value" | vercel env add` appends a trailing newline to the env var value. Caused subtle bugs.
- Supabase `.select()` after `.insert()` returns all columns including auto-generated ones (like `reply_token`), but RLS policies still apply to the SELECT portion independently.
- `Promise.allSettled` silently swallows email send failures — need explicit result logging to debug.

**Worth it / waste of time**

- Inbound email threading → worth it, eliminates the #1 friction point (portal login to reply)
- Google OAuth → worth it, one-click vs magic link email delay
- Drag-to-archive → waste of time, spent 3 iterations before switching to icon buttons
- Debug email endpoint → worth it, instantly identified the `REPLY_DOMAIN` https:// bug

**Tech debt flagged**

- Debug logging in contact route (Promise.allSettled result logging) — should remove once stable
- `generateAdminMagicLink` function name is now misleading (just returns a URL, no magic link) — should rename
- Duplicate `SubmissionNote` interface in types.ts (lines 98-102 and 115-120)

---

### PM Notes

**Structure used:** Brainstorming → spec → plan → subagent-driven-development for inbound email feature. Freeform for smaller features (Kanban, contact form, OAuth). The spec/plan was worth it for the email feature — clear enough that agents could implement in parallel. Overkill for the smaller items.

**What went well:**

- Rapid root-cause on the invisible submissions bug (DB query → stale deploy → import mismatch → fix in 10 minutes)
- Debug endpoint approach for email issue — faster than trying to get Vercel logs working
- Parallel agent dispatch for utility files + webhook handler saved time
- User was proactive on manual setup steps (DNS, Resend, Supabase OAuth config)

**What was skipped or unnecessary:**

- Full two-stage review (spec + code quality) per subagent task — project is too small and fast-moving for that overhead
- Test framework setup — no tests exist in this project, TDD would have slowed velocity without proportional safety gain
- Staging branch — added complexity without reducing risk for this feature profile

**Pivots or disagreements:**

- User wanted staging/preview deployment. Talked through risk profile — agreed to ship to main since failure mode is benign.
- Drag-to-archive zone went through 3 iterations (bottom → right side → abandoned). Should have proposed icon buttons from the start.

**What structured process would have caught earlier:**

- The `REPLY_DOMAIN` env var bug would have been caught by a simple curl test against the debug endpoint before declaring deployment complete. Need a verification step after env var changes.
- The PATCH route missing `archived_at` and `contacted` would have been caught if the plan had included updating the API route validation alongside the types change.

**Claude's assessment:** Strong session. User is decisive, unblocks fast (DNS, Resend, OAuth setup done in parallel), and gives clear direction when things aren't working. The drag-to-archive pivot cost ~30 minutes that could have been avoided by asking "what interaction pattern do you want?" before building. The email debugging was unavoidable — env var typos are invisible until tested. Collaboration was efficient throughout.

**Next time:**

1. After any env var change, immediately curl-test the affected endpoint before moving on
2. For UI interaction patterns (archive, delete), ask the user's preference before building — don't assume drag-and-drop
3. Skip the brainstorming/spec/plan ceremony for features under 3 files — just implement and ship
4. Add a `vercel env ls | grep KEY` check to the deploy verification step
5. Keep the debug endpoint pattern in mind — temporary diagnostic routes are faster than fighting log streaming
