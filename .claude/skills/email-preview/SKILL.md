---
name: email-preview
description: Preview any Sue Wheeler email template rendered as HTML in the browser. Pass a template name (bid, contact, reply, accept-bid, magic-link) and optionally mock data to override defaults.
---

# Email Preview

Renders a Sue Wheeler email template to a temp HTML file and opens it in the default browser.

## Template locations

All templates are in `src/lib/email/templates.ts`. Available templates:

| Name         | Function               | Purpose                                     |
| ------------ | ---------------------- | ------------------------------------------- |
| `bid`        | `bidSentEmail`         | Estimate sent to client                     |
| `contact`    | `contactReceivedEmail` | New request notification to admin           |
| `reply`      | `clientReplyEmail`     | Client reply notification to admin          |
| `accept-bid` | `bidAcceptedEmail`     | Client accepted bid — notification to admin |
| `magic-link` | `adminMagicLinkEmail`  | Admin login link                            |

## How to preview

1. Read `src/lib/email/templates.ts` to understand the function signatures
2. Create a small preview script at `/tmp/email-preview.mjs` that:
   - Imports the template function using dynamic require/tsx
   - Calls it with mock data
   - Writes the HTML to `/tmp/email-preview.html`
3. Run: `open /tmp/email-preview.html`

## Mock data defaults

```typescript
const mockSubmission = {
  id: "preview-id",
  name: "Jane Park",
  email: "jane@example.com",
  phone: "(314) 555-0123",
  address: "2204 Cherokee St, St. Louis, MO 63118",
  project_description:
    "Refinish front door and two interior doors. Also interested in staircase railings.",
  service_types: ["doors", "staircases"],
  best_time: "mornings",
  timeline: "within 3 months",
  referral: "Google",
  photo_urls: [],
  status: "to_bid",
  admin_notes: null,
  client_token: "preview-token",
  client_token_expires_at: new Date(Date.now() + 86400000).toISOString(),
  bid_amount: 1450,
  bid_notes: "Front door strip/sand/prime/2 coats. Pocket door both sides.",
  bid_file_url: null,
  bid_status: "sent",
  bid_sent_at: new Date().toISOString(),
  bid_accepted_at: null,
  bid_start_date: "2026-05-06",
  crew_member_ids: [],
  lost_reason: null,
  lost_note: null,
  after_photos_uploaded: false,
  final_payment_confirmed: false,
  archived_at: null,
  created_at: new Date().toISOString(),
};
```

## Execution

Since the templates are TypeScript files, use `npx tsx` to run the preview script:

```bash
cd /Users/peterledgrowth/CHAOS/CLIENT_SITES/suewheelerstl
npx tsx /tmp/email-preview.mts
open /tmp/email-preview.html
```

Create `/tmp/email-preview.mts` with the appropriate import and render call.
