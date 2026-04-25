# Inbound Email Replies — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let Sue and customers reply to emails directly, with replies captured in the message thread and forwarded to the other party — no portal login needed.

**Architecture:** Per-submission reply addresses (`thread-{token}@reply.suewheelerstl.com`) routed through Resend's inbound webhook to a new `/api/inbound` endpoint. Outbound emails switch their `replyTo` from static addresses to the thread address.

**Tech Stack:** Next.js API routes, Resend (inbound webhooks + svix signature verification), Supabase (Postgres + Storage)

**Spec:** `docs/superpowers/specs/2026-04-22-inbound-email-replies-design.md`

---

## File Structure

### New Files

| File                                           | Responsibility                                                  |
| ---------------------------------------------- | --------------------------------------------------------------- |
| `src/lib/email/reply-address.ts`               | Build thread reply-to address from a submission's `reply_token` |
| `src/lib/email/parse-reply.ts`                 | Strip quoted text and signatures from inbound email body        |
| `src/app/api/inbound/route.ts`                 | Resend webhook handler — verify, parse, store message, forward  |
| `supabase/migrations/20260425_reply_token.sql` | Add `reply_token` column to submissions                         |

### Modified Files

| File                                     | Change                                                 |
| ---------------------------------------- | ------------------------------------------------------ |
| `src/lib/types.ts`                       | Add `reply_token: string` to `Submission` interface    |
| `src/app/api/contact/route.ts`           | Switch `replyTo` to thread address in both email sends |
| `src/app/api/admin/reply/route.ts`       | Switch `replyTo` to thread address                     |
| `src/app/api/client/reply/route.ts`      | Switch `replyTo` to thread address                     |
| `src/app/api/admin/bid/route.ts`         | Switch `replyTo` to thread address                     |
| `src/app/api/client/accept-bid/route.ts` | Add `replyTo` thread address (currently missing)       |

---

### Task 1: Database Migration — Add `reply_token` Column

**Files:**

- Create: `supabase/migrations/20260425_reply_token.sql`

- [ ] **Step 1: Write the migration SQL**

Create `supabase/migrations/20260425_reply_token.sql`:

```sql
-- Add reply_token for inbound email threading
ALTER TABLE submissions
  ADD COLUMN IF NOT EXISTS reply_token text
    NOT NULL UNIQUE
    DEFAULT encode(gen_random_bytes(6), 'hex');

-- Index for webhook lookups
CREATE INDEX IF NOT EXISTS idx_submissions_reply_token
  ON submissions(reply_token);
```

- [ ] **Step 2: Apply migration to Supabase**

Run via Supabase MCP tool `apply_migration` with project ID `khioedholasaxemmtooz` and the SQL above.

- [ ] **Step 3: Verify the column exists**

Run via Supabase MCP tool `execute_sql`:

```sql
SELECT id, name, reply_token FROM submissions ORDER BY created_at DESC LIMIT 3;
```

Expected: All rows have a 12-char hex `reply_token` value.

- [ ] **Step 4: Commit**

```bash
git add supabase/migrations/20260425_reply_token.sql
git commit -m "feat: add reply_token column for inbound email threading"
```

---

### Task 2: Update Submission Type

**Files:**

- Modify: `src/lib/types.ts:46`

- [ ] **Step 1: Add `reply_token` to the Submission interface**

In `src/lib/types.ts`, add `reply_token` after `archived_at`:

```typescript
  archived_at: string | null;
  reply_token: string;
}
```

- [ ] **Step 2: Verify build**

Run: `npx next build 2>&1 | tail -5`

Expected: Build succeeds (no type errors — `reply_token` is always present via DB default, and all queries use `select("*")` which includes it).

- [ ] **Step 3: Commit**

```bash
git add src/lib/types.ts
git commit -m "feat: add reply_token to Submission type"
```

---

### Task 3: Reply Address Helper

**Files:**

- Create: `src/lib/email/reply-address.ts`

- [ ] **Step 1: Create the helper**

Create `src/lib/email/reply-address.ts`:

```typescript
const REPLY_DOMAIN = process.env.REPLY_DOMAIN ?? "reply.suewheelerstl.com";

export function threadReplyTo(replyToken: string): string {
  return `thread-${replyToken}@${REPLY_DOMAIN}`;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/email/reply-address.ts
git commit -m "feat: add threadReplyTo helper for email threading"
```

---

### Task 4: Quoted Text Stripping Utility

**Files:**

- Create: `src/lib/email/parse-reply.ts`

- [ ] **Step 1: Create the parser**

Create `src/lib/email/parse-reply.ts`:

```typescript
/**
 * Best-effort strip quoted reply text and email signatures.
 * Returns the new content only. If stripping removes everything,
 * returns the original body (better than losing content).
 */
export function stripQuotedText(body: string): string {
  const lines = body.split("\n");
  const cutIndex = lines.findIndex((line) => {
    const trimmed = line.trim();
    // "On <date> <name> wrote:" pattern
    if (/^On .+ wrote:$/i.test(trimmed)) return true;
    // Gmail-style separator
    if (trimmed === "---------- Forwarded message ----------") return true;
    // Outlook-style separator
    if (/^_{5,}$/.test(trimmed)) return true;
    if (/^-{2,}\s*Original Message\s*-{2,}$/i.test(trimmed)) return true;
    // Simple signature delimiter (RFC 3676)
    if (trimmed === "-- ") return true;
    if (trimmed === "--") return true;
    return false;
  });

  const stripped =
    cutIndex > 0 ? lines.slice(0, cutIndex).join("\n").trim() : body.trim();

  // If stripping removed everything, return original
  return stripped.length > 0 ? stripped : body.trim();
}

/**
 * Extract bare email address from a "Display Name <email>" string.
 * Returns the input unchanged if no angle brackets found.
 */
export function extractEmail(from: string): string {
  const match = from.match(/<([^>]+)>/);
  return match ? match[1].toLowerCase() : from.trim().toLowerCase();
}
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/email/parse-reply.ts
git commit -m "feat: add email reply parser — strip quotes, extract address"
```

---

### Task 5: Switch `replyTo` in Contact Route

**Files:**

- Modify: `src/app/api/contact/route.ts:110-126`

- [ ] **Step 1: Add import**

At the top of `src/app/api/contact/route.ts`, add after the existing imports:

```typescript
import { threadReplyTo } from "@/lib/email/reply-address";
```

- [ ] **Step 2: Update both email sends**

Replace the `Promise.allSettled` block (lines 110-127) with:

```typescript
const replyTo = threadReplyTo(submission.reply_token);

await Promise.allSettled([
  resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    cc: ADMIN_CC,
    replyTo,
    subject: adminTpl.subject,
    html: adminTpl.html,
  }),
  resend.emails.send({
    from: FROM_EMAIL,
    to: [email],
    replyTo,
    subject: clientTpl.subject,
    html: clientTpl.html,
  }),
]);
```

- [ ] **Step 3: Commit**

```bash
git add src/app/api/contact/route.ts
git commit -m "feat: use thread reply-to in contact form emails"
```

---

### Task 6: Switch `replyTo` in Admin Reply Route

**Files:**

- Modify: `src/app/api/admin/reply/route.ts:55-61`

- [ ] **Step 1: Add import**

At the top of `src/app/api/admin/reply/route.ts`, add after the existing imports:

```typescript
import { threadReplyTo } from "@/lib/email/reply-address";
```

- [ ] **Step 2: Update the email send**

Replace the `resend.emails.send` call (lines 55-61) with:

```typescript
await resend.emails
  .send({
    from: FROM_EMAIL,
    to: [submission.email],
    replyTo: threadReplyTo(submission.reply_token),
    subject: tpl.subject,
    html: tpl.html,
  })
  .catch((e) => console.error("[admin/reply] email error", e));
```

- [ ] **Step 3: Commit**

```bash
git add src/app/api/admin/reply/route.ts
git commit -m "feat: use thread reply-to in admin reply emails"
```

---

### Task 7: Switch `replyTo` in Client Reply Route

**Files:**

- Modify: `src/app/api/client/reply/route.ts:65-73`

- [ ] **Step 1: Add import**

At the top of `src/app/api/client/reply/route.ts`, add after the existing imports:

```typescript
import { threadReplyTo } from "@/lib/email/reply-address";
```

- [ ] **Step 2: Update the email send**

Replace the `resend.emails.send` call (lines 65-73) with:

```typescript
await resend.emails
  .send({
    from: FROM_EMAIL,
    to: [ADMIN_EMAIL],
    replyTo: threadReplyTo(submission.reply_token),
    subject: tpl.subject,
    html: tpl.html,
  })
  .catch((e) => console.error("[client/reply] email error", e));
```

- [ ] **Step 3: Commit**

```bash
git add src/app/api/client/reply/route.ts
git commit -m "feat: use thread reply-to in client reply emails"
```

---

### Task 8: Switch `replyTo` in Bid Sent Route

**Files:**

- Modify: `src/app/api/admin/bid/route.ts:89-95`

- [ ] **Step 1: Add import**

At the top of `src/app/api/admin/bid/route.ts`, add after the existing imports:

```typescript
import { threadReplyTo } from "@/lib/email/reply-address";
```

- [ ] **Step 2: Update the email send**

Replace the `resend.emails.send` call (lines 89-95) with:

```typescript
await resend.emails.send({
  from: FROM_EMAIL,
  to: [submission.email],
  replyTo: threadReplyTo(submission.reply_token),
  subject: tpl.subject,
  html: tpl.html,
});
```

- [ ] **Step 3: Commit**

```bash
git add src/app/api/admin/bid/route.ts
git commit -m "feat: use thread reply-to in bid sent emails"
```

---

### Task 9: Add `replyTo` in Accept Bid Route

**Files:**

- Modify: `src/app/api/client/accept-bid/route.ts:48-54`

- [ ] **Step 1: Add import**

At the top of `src/app/api/client/accept-bid/route.ts`, add after the existing imports:

```typescript
import { threadReplyTo } from "@/lib/email/reply-address";
```

- [ ] **Step 2: Update the email send**

Replace the `resend.emails.send` call (lines 48-54) with:

```typescript
await resend.emails.send({
  from: FROM_EMAIL,
  to: [CONTACT_EMAIL],
  cc: ADMIN_CC,
  replyTo: threadReplyTo(submission.reply_token),
  subject: tpl.subject,
  html: tpl.html,
});
```

- [ ] **Step 3: Commit**

```bash
git add src/app/api/client/accept-bid/route.ts
git commit -m "feat: use thread reply-to in bid accepted emails"
```

---

### Task 10: Inbound Webhook Route

**Files:**

- Create: `src/app/api/inbound/route.ts`

This is the core of the feature. It receives Resend's inbound email webhook, stores the message, processes image attachments, and forwards to the other party.

- [ ] **Step 1: Create the webhook handler**

Create `src/app/api/inbound/route.ts`:

```typescript
import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { resend } from "@/lib/email/resend";
import { adminReplyEmail, clientReplyEmail } from "@/lib/email/templates";
import { generateAdminMagicLink } from "@/lib/supabase/admin-link";
import { threadReplyTo } from "@/lib/email/reply-address";
import { stripQuotedText, extractEmail } from "@/lib/email/parse-reply";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "no-reply@suewheelerstl.com";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "sue@suewheelerstl.com";
const WEBHOOK_SECRET = process.env.RESEND_WEBHOOK_SECRET ?? "";

// Resend inbound email webhook uses svix for signature verification
async function verifyWebhook(req: Request, body: string): Promise<boolean> {
  if (!WEBHOOK_SECRET) {
    console.warn(
      "[inbound] RESEND_WEBHOOK_SECRET not set — skipping verification",
    );
    return true;
  }

  const svixId = req.headers.get("svix-id");
  const svixTimestamp = req.headers.get("svix-timestamp");
  const svixSignature = req.headers.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) return false;

  const { Webhook } = await import("svix");
  try {
    const wh = new Webhook(WEBHOOK_SECRET);
    wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });
    return true;
  } catch {
    return false;
  }
}

const TOKEN_RE = /^thread-([a-f0-9]{12})@/i;

const IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);

function extFromMime(mime: string): string {
  const map: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/heic": "heic",
    "image/heif": "heif",
  };
  return map[mime] ?? "jpg";
}

export async function POST(req: Request) {
  const rawBody = await req.text();

  // 1. Verify webhook signature
  if (!(await verifyWebhook(req, rawBody))) {
    console.error("[inbound] webhook signature verification failed");
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  let payload: {
    type?: string;
    data?: {
      from: string;
      to: string[];
      subject?: string;
      text?: string;
      html?: string;
      attachments?: Array<{
        filename: string;
        content: string; // base64
        content_type: string;
      }>;
    };
  };

  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Resend wraps inbound emails in { type: "email.received", data: { ... } }
  const email = payload.data;
  if (!email || payload.type !== "email.received") {
    // Not an inbound email event — acknowledge and ignore
    return NextResponse.json({ ok: true });
  }

  // 2. Extract reply token from the `to` address
  const toAddress = email.to?.[0] ?? "";
  const tokenMatch = toAddress.match(TOKEN_RE);
  if (!tokenMatch) {
    console.warn("[inbound] no reply token in to address:", toAddress);
    return NextResponse.json({ ok: true }); // 200 — don't retry
  }
  const replyToken = tokenMatch[1];

  // 3. Look up submission
  const supabase = createServiceSupabaseClient();
  const { data: submission } = await supabase
    .from("submissions")
    .select("*")
    .eq("reply_token", replyToken)
    .single();

  if (!submission) {
    console.warn("[inbound] no submission for token:", replyToken);
    return NextResponse.json({ ok: true }); // 200 — don't retry
  }

  // 4. Determine sender
  const senderEmail = extractEmail(email.from);
  const isFromAdmin =
    senderEmail === CONTACT_EMAIL.toLowerCase() ||
    senderEmail === FROM_EMAIL.toLowerCase();

  // 5. Strip quoted text
  const rawText = email.text ?? "";
  const body = stripQuotedText(rawText);

  if (!body) {
    console.warn("[inbound] empty body after stripping, skipping");
    return NextResponse.json({ ok: true });
  }

  // 6. Insert message
  const { data: message, error: msgError } = await supabase
    .from("messages")
    .insert({
      submission_id: submission.id,
      is_from_admin: isFromAdmin,
      body,
      sent_by_email: senderEmail,
    })
    .select()
    .single();

  if (msgError || !message) {
    console.error("[inbound] failed to insert message", msgError);
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 },
    );
  }

  // 7. Process image attachments
  const imageAttachments = (email.attachments ?? []).filter((a) =>
    IMAGE_TYPES.has(a.content_type),
  );

  if (imageAttachments.length > 0) {
    const newPaths: string[] = [];

    for (const att of imageAttachments) {
      const ext = extFromMime(att.content_type);
      const path = `uploads/${crypto.randomUUID()}.${ext}`;
      const buffer = Buffer.from(att.content, "base64");

      const { error: uploadError } = await supabase.storage
        .from("submission-photos")
        .upload(path, buffer, {
          contentType: att.content_type,
          upsert: false,
        });

      if (!uploadError) {
        newPaths.push(path);
      } else {
        console.error("[inbound] photo upload failed", uploadError);
      }
    }

    if (newPaths.length > 0) {
      const existingUrls: string[] = submission.photo_urls ?? [];
      await supabase
        .from("submissions")
        .update({ photo_urls: [...existingUrls, ...newPaths] })
        .eq("id", submission.id);
    }
  }

  // 8. Forward to the other party
  if (process.env.RESEND_API_KEY) {
    const replyTo = threadReplyTo(submission.reply_token);

    if (isFromAdmin) {
      // Sue replied → email the client
      const portalUrl = `${SITE_URL}/my-request/${submission.client_token}`;
      const tpl = adminReplyEmail(message, submission, portalUrl);
      await resend.emails
        .send({
          from: FROM_EMAIL,
          to: [submission.email],
          replyTo,
          subject: tpl.subject,
          html: tpl.html,
        })
        .catch((e) => console.error("[inbound] forward to client failed", e));
    } else {
      // Client replied → email Sue
      const adminUrl = await generateAdminMagicLink(`/admin/${submission.id}`);
      const tpl = clientReplyEmail(message, submission, adminUrl);
      await resend.emails
        .send({
          from: FROM_EMAIL,
          to: [CONTACT_EMAIL],
          replyTo,
          subject: tpl.subject,
          html: tpl.html,
        })
        .catch((e) => console.error("[inbound] forward to admin failed", e));
    }
  }

  // 9. Return 200
  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 2: Install svix dependency**

```bash
npm install svix
```

- [ ] **Step 3: Verify build**

```bash
npx next build 2>&1 | tail -10
```

Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/api/inbound/route.ts package.json package-lock.json
git commit -m "feat: add inbound email webhook — reply via email without login"
```

---

### Task 11: Build Verification and Deploy

- [ ] **Step 1: Full build check**

```bash
npm run build 2>&1 | tail -15
```

Expected: Clean build, no errors. The `/api/inbound` route should appear in the output as a dynamic function.

- [ ] **Step 2: Push to deploy**

```bash
git push
```

Expected: Vercel picks up the commit, build succeeds, deployment goes to production.

- [ ] **Step 3: Verify deployment succeeded**

Check Vercel deployments via MCP tool — latest should be `READY` state.

---

### Task 12: DNS and Resend Configuration (Manual)

These steps require manual action outside the codebase.

- [ ] **Step 1: Add MX record**

In the domain registrar (wherever `suewheelerstl.com` DNS is managed), add:

```
Type: MX
Host: reply
Value: inbound-smtp.resend.com
Priority: 10
```

- [ ] **Step 2: Configure Resend inbound domain**

In the Resend dashboard:

1. Go to Domains → Add Domain → `reply.suewheelerstl.com` → set as inbound
2. Set webhook URL: `https://suewheelerstl.com/api/inbound`
3. Copy the webhook signing secret

- [ ] **Step 3: Set environment variables in Vercel**

Add to Vercel environment variables (all environments):

```
RESEND_WEBHOOK_SECRET=whsec_xxxxxxxxx
REPLY_DOMAIN=reply.suewheelerstl.com
```

- [ ] **Step 4: Redeploy after env vars are set**

Trigger a redeployment so the new env vars take effect.

---

### Task 13: End-to-End Verification

- [ ] **Step 1: Submit a test request**

Use the contact form at `https://suewheelerstl.com/contact` with a test email you control. Verify the confirmation email arrives with a `Reply-To` header containing `thread-...@reply.suewheelerstl.com`.

- [ ] **Step 2: Reply from the customer side**

Hit Reply on the confirmation email and send a test message. Verify:

- Sue receives a notification email
- The message appears in the admin portal under the submission's thread
- The notification email Sue receives also has the thread `Reply-To`

- [ ] **Step 3: Reply from Sue's side**

Reply to the notification email Sue received. Verify:

- The customer receives a notification email
- The message appears in the client portal at `/my-request/{token}`

- [ ] **Step 4: Test with image attachment**

Reply with a photo attached. Verify:

- The photo appears in the submission's `photo_urls` in the database
- The message text is saved without the attachment data
