---
name: form-ux-review-with-monitoring
description: Project #2 — contact form UX redesign, to be done inline with PostHog + Sentry monitoring instrumentation
metadata:
  type: project
---

**Queued work — "Project #2": contact form UX review/redesign.** Do it INLINE with
the backend monitoring instrumentation work on the site (PostHog — already wired at
`src/lib/posthog.ts` — and Sentry, not yet integrated). Per the customer, form
submissions are "incredibly low."

Redesign direction the customer floated:

- Reduce mandatory fields to **name, email, message** only. (Today `ContactForm.tsx`
  - `/api/contact` require 5 things: name, phone, email, ≥1 service type, and the
    project description.)
- Reconsider layout; make the **Send button prominent/higher**, then a secondary
  **"these items also help"** section for the now-optional fields (phone, address,
  zip, service types, timeline, best time, referral, photos).

**Why pair it with monitoring:** PostHog form-funnel / field-drop-off analytics (plus
Sentry for client/runtime errors) would show _which_ fields actually cause
abandonment — so instrument first, then cut required fields with data rather than by
guess. That's the reason to do the review inline with the PostHog+Sentry work, not as
a standalone change.

Status: NOT started as of 2026-06-14. Project #1 (the form health monitor —
[[form monitor design spec]] at `docs/superpowers/specs/2026-06-14-form-monitor-design.md`)
shipped and is live that day; this is the next thing.
