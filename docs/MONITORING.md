# Form Monitoring

The contact form is monitored by `.github/workflows/form-monitor.yml`, which runs
every 6 hours and on manual dispatch. It POSTs `/api/health`, which inserts→reads→
deletes a flagged (`is_test=true`) row in the real `submissions` table. On failure
the job fails AND fans out Email + SMS + Slack + ntfy alerts via `scripts/monitor/check.mjs`.

## Required configuration

**Vercel env (production)** — needed by the `/api/health` endpoint:

- `MONITOR_SECRET` — shared secret (generate a long random string).

**GitHub repo secrets** — needed by the workflow:

- `MONITOR_SECRET` — same value as the Vercel env var.
- `RESEND_API_KEY` — reuse the app's Resend key.
- `ALERT_EMAIL_TO` — recipient for failure emails.
- `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM`, `ALERT_SMS_TO` — SMS.
- `SLACK_WEBHOOK_URL` — Slack incoming webhook.
- `NTFY_TOPIC` — ntfy topic to publish to (arms the ntfy channel). See below.
- `NTFY_SERVER` — optional; defaults to `https://ntfy.sh`. Set for self-hosted ntfy.
- `NTFY_TOKEN` — optional; sent as `Authorization: Bearer <token>` for protected topics.

Any unset alert channel is silently skipped, so you can ship with a subset and add
the rest later.

## ntfy push alerts

[ntfy](https://ntfy.sh) is a no-account pub/sub push service: the monitor POSTs the
alert text to `https://ntfy.sh/<topic>` and every device subscribed to that topic gets
a push notification. Alerts are sent with `Priority: urgent` and a 🚨 tag so they cut
through Do Not Disturb on most phones.

**Choosing a topic name — this is a shared secret.** On public ntfy.sh there are no
accounts and no ACLs: _anyone who knows or guesses the topic can read your alerts and
publish fake ones_. Do not use `suewheeler` or anything guessable. Use a long random
string, e.g.:

```bash
echo "suewheeler-$(openssl rand -hex 12)"
```

Store that value as the `NTFY_TOPIC` GitHub secret. (For real access control, self-host
ntfy or use a paid ntfy.sh account with a protected topic, then set `NTFY_SERVER` and
`NTFY_TOKEN` as well.)

**Smoke-test the topic** before wiring the secret:

```bash
curl -H "Title: Sue Wheeler STL — test" -H "Priority: urgent" -H "Tags: rotating_light" \
  -d "ntfy smoke test" https://ntfy.sh/YOUR-TOPIC-HERE
```

**Subscribe from your phone:**

1. Install the ntfy app (iOS App Store / Google Play / F-Droid).
2. Tap **+** (Subscribe to topic).
3. Enter the exact topic string. Leave the server as `ntfy.sh` unless you set
   `NTFY_SERVER`; for a self-hosted/protected instance, toggle "Use another server"
   and enter the server URL plus credentials.
4. Tap **Subscribe**, then re-run the `curl` above to confirm the push arrives.

Desktop works the same way at `https://ntfy.sh/YOUR-TOPIC-HERE` in a browser tab, or
via the ntfy desktop app.

## Manual test

GitHub → Actions → form-monitor → "Run workflow". A green run = healthy. To verify
alerts deliver, temporarily set `MONITOR_SECRET` in the GitHub secret to a wrong
value (forces a 401), run, and confirm every armed alert channel (Email, SMS, Slack,
ntfy) fires — the job itself also shows red in GitHub Actions as a final signal.
Restore the secret afterward.

## What it does NOT cover

Email send (Resend) and photo storage are not exercised (photos are optional). See
`docs/superpowers/specs/2026-06-14-form-monitor-design.md` "Open Questions".
