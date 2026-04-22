# Inbound Email Replies — Design Spec

## Problem

Sue and her customers must log into web portals to exchange messages about estimate requests. Customers reply to `no-reply@suewheelerstl.com` or directly to Sue's personal email, bypassing the system entirely. Messages are lost, threads are broken, and the admin pipeline has no record of the conversation.

## Solution

Route all email replies through per-submission thread addresses. When anyone hits Reply in their email client, the message is captured via Resend's inbound webhook, stored in the `messages` table, and forwarded to the other party — no login required.

## Architecture

```
Customer/Sue hits Reply in email client
        |
        v
thread-{reply_token}@reply.suewheelerstl.com
        |
        v
Resend inbound → POST /api/inbound (webhook)
        |
        v
Parse reply_token → look up submission → identify sender
        |
        +-- Text body → messages table
        +-- Image attachments → Supabase storage → photo_urls
        +-- Notify the other party via outbound email
            (outbound also carries the thread reply-to address)
```

## Data Changes

### New column: `submissions.reply_token`

```sql
ALTER TABLE submissions
  ADD COLUMN IF NOT EXISTS reply_token text
    NOT NULL UNIQUE
    DEFAULT encode(gen_random_bytes(6), 'hex');
```

- 12-char hex string (e.g. `a3f8b2c91d0e`)
- Generated automatically on insert via column default
- Existing rows backfilled by the migration (the DEFAULT clause handles this)
- Used to construct the reply address: `thread-{reply_token}@reply.suewheelerstl.com`

### No changes to `messages` table

The existing schema handles everything: `submission_id`, `is_from_admin`, `body`, `sent_by_email`.

## Webhook Route: `POST /api/inbound`

### Request

Resend POSTs a JSON payload containing: `from`, `to`, `subject`, `text`, `html`, `headers`, `attachments`.

### Processing Steps

1. **Verify signature.** Validate the `svix-signature` header using `RESEND_WEBHOOK_SECRET`. Reject with 400 if invalid.
2. **Extract token.** Parse the `to` field for `thread-{token}@reply.suewheelerstl.com`. Reject with 200 (no retry) if no match.
3. **Look up submission.** Query `submissions` by `reply_token`. Return 200 if not found (don't retry on bad tokens).
4. **Determine sender role.** Extract the bare email address from the `from` field (strip display name like `"Sue Wheeler" <sue@...>`).
   - If extracted address matches `CONTACT_EMAIL` env var (Sue) → `is_from_admin: true`
   - Otherwise → `is_from_admin: false`, `sent_by_email` = the extracted address
5. **Strip quoted text.** Best-effort regex to remove `On ... wrote:` blocks and signature lines (`--`). If stripping fails, save the full body.
6. **Insert message** into `messages` table.
7. **Process attachments.** For each attachment with `image/*` content type:
   - Decode base64 content
   - Upload to Supabase storage bucket `submission-photos` at path `uploads/{uuid}.{ext}`
   - Append path to `photo_urls` array on the submission
   - Non-image attachments are ignored (v1)
8. **Send notification email** to the other party:
   - If sender is Sue → email the client using `adminReplyEmail` template
   - If sender is client → email Sue using `clientReplyEmail` template
   - The outbound email's `replyTo` is the same thread address, maintaining the loop
9. **Return 200.**

### Error Handling

- Invalid/missing signature → 400 (Resend retries)
- Unrecognized `to` address or missing submission → 200 (no retry, log warning)
- DB or storage errors → 500 (Resend retries with backoff)
- Rate limit: Resend retries failed webhooks for up to 24 hours

## Outbound Email Changes

All 6 email template send calls switch from static `replyTo` to the thread address:

| Template                  | Current `replyTo`       | New `replyTo`                            |
| ------------------------- | ----------------------- | ---------------------------------------- |
| `adminNotificationEmail`  | `client email`          | `thread-{token}@reply.suewheelerstl.com` |
| `clientConfirmationEmail` | `sue@suewheelerstl.com` | `thread-{token}@reply.suewheelerstl.com` |
| `adminReplyEmail`         | `sue@suewheelerstl.com` | `thread-{token}@reply.suewheelerstl.com` |
| `clientReplyEmail`        | `client email`          | `thread-{token}@reply.suewheelerstl.com` |
| `bidSentEmail`            | (none)                  | `thread-{token}@reply.suewheelerstl.com` |
| `bidAcceptedEmail`        | (none)                  | `thread-{token}@reply.suewheelerstl.com` |

The `reply_token` must be available wherever emails are sent. This means:

- `/api/contact/route.ts` — already has the submission (includes `reply_token` after insert)
- `/api/admin/reply/route.ts` — already fetches the submission
- `/api/client/reply/route.ts` — already fetches the submission
- `/api/admin/bid/route.ts` — already fetches the submission
- `/api/client/accept-bid/route.ts` — already fetches the submission
- `/api/inbound/route.ts` — new route, has the submission

No template HTML changes needed. Only the `replyTo` field in each `resend.emails.send()` call.

## DNS / Resend Configuration

### DNS (one-time)

Add MX record on the domain registrar for `reply.suewheelerstl.com`:

```
reply.suewheelerstl.com.  MX  10  inbound-smtp.resend.com.
```

### Resend Dashboard (one-time)

1. Add `reply.suewheelerstl.com` as an inbound domain
2. Set webhook URL: `https://suewheelerstl.com/api/inbound`
3. Copy the webhook signing secret → store as `RESEND_WEBHOOK_SECRET` in Vercel env vars

## Environment Variables

| Variable                | Purpose                                                                     |
| ----------------------- | --------------------------------------------------------------------------- |
| `RESEND_WEBHOOK_SECRET` | Webhook signature verification (new)                                        |
| `REPLY_DOMAIN`          | `reply.suewheelerstl.com` — defaults to this value if unset (new, optional) |

## Edge Cases

| Scenario                                     | Behavior                                                                                                                                |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Unknown sender (not Sue, not client on file) | Save as `is_from_admin: false`, use `from` as `sent_by_email`. Log warning.                                                             |
| Expired client token                         | Still process the reply. Token expiry gates the portal, not the email thread.                                                           |
| Non-image attachment (PDF, doc)              | Ignore silently. Only `image/*` MIME types are processed.                                                                               |
| Quoted text stripping fails                  | Save full body. Better than losing content.                                                                                             |
| Duplicate delivery (Resend retry)            | Insert succeeds (new UUID). Acceptable — rare, and a duplicate message is low harm.                                                     |
| Spam / forged `from`                         | Webhook signature verification ensures the email came through Resend. Content spam is possible but low risk on a private reply address. |

## Out of Scope (v1)

- Pipeline status changes from email replies
- Rich text / HTML preservation in message body (text only)
- Non-image attachment storage
- Deduplication of retried webhook deliveries
- Auto-response ("Sue is out of office")

## Files to Create / Modify

### New

- `src/app/api/inbound/route.ts` — webhook handler
- `src/lib/email/parse-reply.ts` — quoted text stripping utility
- `supabase/migrations/20260422_reply_token.sql` — adds `reply_token` column

### Modified

- `src/app/api/contact/route.ts` — update `replyTo` in email sends
- `src/app/api/admin/reply/route.ts` — update `replyTo`
- `src/app/api/client/reply/route.ts` — update `replyTo`
- `src/app/api/admin/bid/route.ts` — update `replyTo` (bid sent email)
- `src/app/api/client/accept-bid/route.ts` — update `replyTo` (bid accepted email)
