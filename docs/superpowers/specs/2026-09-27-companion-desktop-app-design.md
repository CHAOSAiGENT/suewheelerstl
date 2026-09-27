# Companion Desktop App — Design

_2026-09-27. Status: approved, ready for implementation planning._

## What this is

A branded desktop application for **Wood Refinishing by Sue Wheeler, LLC** that lets the
owner run her business — pipeline, jobs, photos, bids — through one purpose-built tool
instead of an admin web UI and a general chat window.

It is also the **reference implementation** for a product line. The agency offers three
tiers, and this app is tier one:

| Tier | What it is | Status |
|---|---|---|
| **Stand Alone** | Premium per-tenant custom build. Own site, own database, own app. | **This spec.** Sue is customer zero. |
| **Add To** | Lightweight service bolted onto an existing website and CRM. | Designed for, not built. |
| **SaaS** | Multi-tenant, one deployment, tenant by domain. | Deferred pending customer research. |

The business model across all three is usage-based: commercial frontier models at cost
plus a margin, with a low monthly minimum and spend-down credits.

**The scope of this document is the desktop app, complete** — signed, notarized,
auto-updating, all three subsystems working. Mobile is a separate spec.

## Goals

1. Sue runs her day from one app: see the pipeline, open a job, take notes, attach photos.
2. She drafts bids from spoken or typed notes, in her own language, and sets the price.
3. She pulls photos off her phone and onto a job without a laptop round-trip.
4. It is a real Mac app — signed, notarized, and it updates itself.
5. Everything it does goes through an **API contract** that a second client can consume
   without changes.

## Non-goals

- **Mobile.** React Native, own spec, after this ships. The contract makes it a second
  consumer rather than a rewrite.
- **Local inference.** The app calls the server, which calls a commercial model. Choosing
  React Native forecloses Apple's on-device Foundation Models (Swift-only), and bundling
  weights on an 8 GB M1 Air is not a promise that can be kept — Metal wires down ~75% of
  unified memory and LM Studio's own guidance is 16 GB+.
- **Multi-tenancy.** Sue is client work in her own database, per the standing rule: client
  work gets a standalone database; a product where a client is user #1 gets multi-tenancy.
  This is the former.
- **The control plane.** A separate project provides hybrid-private/BYOK/managed gateway
  and billing. This app will connect to it later; it must not assume it now.
- **Replacing the admin web UI.** It stays. Sending a bid to a customer remains a
  deliberate act there.

## Decisions

| Decision | Why |
|---|---|
| **Tauri v2, not Electron** | 8.6 MiB vs 244 MiB bundle, 172 MB vs 409 MB RAM on the one real measurement available. Electron builds faster (15.8s vs 80.9s), which the team feels daily — not enough to outweigh the rest. |
| **Thin client; key server-side** | Prompts, model choice, tool behaviour and bug fixes ship by deploying the website, not by getting a build onto her laptop. For a client app someone maintains for years, that is worth more than any feature. |
| **New repository, not Chaos Desktop** | It is Tauri v2, but macOS has never been built there, and there is no updater, signing, notarization, CI, or authentication. All of that is written from zero either way. Lift three things: the server-proxy pattern, the `platform-api` IPC convention, and the v2 capabilities baseline. |
| **Supabase Google sign-in, reused** | Same identity she already uses for the admin CRM. No second credential, and — critically — **no dependency on the MCP OAuth work**, which is still blocked. |
| **Contract-first** | The API contract is the product; the app is one consumer. Write it down before writing Tauri code. |
| **Server-side transcription** | One voice path shared by desktop and, later, mobile. One place to swap models. No platform divergence. |
| **Metering from the first request** | Usage-based billing cannot be retrofitted — you cannot bill for the period before you added it. |

## Architecture

```
┌─────────────────────────┐        ┌──────────────────────────┐
│  Tauri v2 desktop app   │        │  React Native app        │
│  (this spec)            │        │  (later, same contract)  │
└───────────┬─────────────┘        └───────────┬──────────────┘
            │  HTTPS + Supabase session JWT    │
            └─────────────┬────────────────────┘
                          ▼
         suewheelerstl.com  —  the contract
            /api/app/*        thin REST over the tool layer
            /api/app/voice    audio in, text out
            /api/app/meter    usage accounting
                          │
            ┌─────────────┼─────────────┐
            ▼             ▼             ▼
      tool layer     model provider   Supabase
      (11 tools)     (key lives here) (Sue's own DB)
```

The Rust side of the Tauri app stays small on purpose: a window, a keychain entry, an
HTTP client, and the updater. Anything larger is a signal that logic has leaked out of the
server.

### The generalized tool contract

The eleven existing tools are already `(input, client)` — the data client is **injected,
not imported**. That is the seam the "Add To" tier needs, and it exists by accident rather
than design. The only change required is that the parameter is typed `SupabaseClient`
rather than an interface.

Define a `DataAdapter` interface covering what the tools actually use, and have the
Supabase adapter implement it. Sue's build binds the Supabase adapter; an "Add To"
customer binds one for Toast, Square, or a WordPress REST endpoint. **The safety
properties travel; only the adapter changes.**

Do this now, while there is exactly one implementation to change.

What travels as the reusable module is not the tools — it is the **tool contract**:

- a Zod input schema per tool
- an injected data adapter
- explicit column allowlists, never `select("*")`
- confirm-before-write on every update
- UUID-only targeting, never name matching
- errors thrown, never swallowed into an empty result

## The API contract

This is the deliverable that outlives the app. It gets a versioned document and a
generated OpenAPI spec.

### Shape

`POST /api/app/tools/:name` — one endpoint per tool, request body validated by that tool's
existing Zod schema, response the tool's return value. The eleven tools are already
defined and tested; this exposes them over HTTP with session auth instead of MCP.

`POST /api/app/voice` — multipart audio upload, returns a transcript plus a confidence
signal. Model choice lives server-side.

`GET /api/app/me` — identity, entitlements, and current credit balance, so the client can
render state without guessing.

`POST /api/app/meter` is **not** a client endpoint. Metering is recorded server-side on
every billable call; the client never reports its own usage.

### Authorization

Every request carries Sue's Supabase session JWT. The route verifies it and applies
`isAuthorizedAdmin()` — the same allowlist that guards the web UI and fails closed on an
unset `ADMIN_EMAILS`. One policy, one definition.

**Note a property of Supabase that must not be assumed away:** OAuth scopes do not
restrict database access. A token carries the user's full RLS privileges. Any
per-client restriction has to be expressed in RLS policies or in the route handler, not
in a scope.

### Metering

Record per call: tool name, model, input and output tokens, provider cost, timestamp,
user, and a client identifier. Cost-plus-margin is computed from this, so it must be
written in the same transaction as the work, not inferred from provider invoices later.

The client identifier is also the groundwork for per-device attribution when mobile
arrives — the same plumbing, one field.

## The three subsystems

Build in this order. Each is usable on its own, and each de-risks the next.

### 1. CRM surface — first, because it proves the whole stack

Pipeline view grouped by the eight status values. Open a job: notes, messages, bid blocks,
crew. Add a note. Move a card. Assign crew.

Every one of these maps to a tool that already exists and is tested. If this works
end to end — window, auth, contract, tool, database, back — then the architecture is
proven and everything after it is feature work.

**Confirm-before-write is preserved in the UI**, not just the API. An update shows the
current value beside the proposed one and requires an explicit action. The tools enforce
this structurally; the interface should make it visible rather than hide it behind a
spinner.

### 2. Capture — photos and voice notes

The subsystem that justifies a desktop app over a web page.

- Pull photos from the local filesystem and the Photos library, resize before upload,
  attach to a job.
- Record a voice note, upload to `/api/app/voice`, get a transcript, attach it as a note.

Tauri v2's official plugin coverage here is thinner than the desktop marketing implies —
verify `dialog` and `fs` cover the Photos library case on macOS before committing to an
approach, and fall back to a file picker if not.

This subsystem is also what eventually solves the site's zero-images problem: a pipeline
that routinely gets job photos into the CRM is the precondition for a real portfolio.

### 3. Bid drafting — last, because it depends on both

Sue dictates or types notes from a walkthrough. The app:

1. resolves or creates the lead (`search_leads` / `create_lead`)
2. searches her copyblock library (`search_copyblocks`)
3. drafts narrative blocks (`create_bid_blocks`)
4. shows pricing evidence (`propose_bid_amount`) — **verbatim historical text, never a
   computed total**
5. writes the amount she confirms (`set_bid_amount`)
6. stops. **Sending stays in the admin web UI.**

The propose/set split is the mechanism that makes "Sue sets the price" a property of the
API rather than a claim in a prompt. The UI must not undermine it by pre-filling the
confirm field with the proposed number.

## Packaging

"Fully to the finish line" means these are in scope, not deferred:

- **Code signing and notarization** in CI, from the first build rather than bolted on.
  Developer account and certificates already exist.
- **Auto-update.** Tauri's updater requires a hosted endpoint — a static JSON plus
  artifacts — with mandatory minisign signing that cannot be disabled. Host it alongside
  the site.
- **Crash and error reporting**, so a failure on her machine is visible without a phone
  call.
- **Branding** — icon, window chrome, the design system. Not the Chaos Desktop phosphor
  tokens; this is a business tool for a wood refinisher, and it should look like one.

## Failure modes

**The server is unreachable.** A thin client is useless offline by construction. Decide
per surface: reading the pipeline should serve a cached copy with a visible staleness
indicator; writing should queue or refuse, and must never silently drop.

**The session expires.** Re-authenticate without losing in-progress work. A half-written
bid lost to a token refresh is the kind of defect that ends adoption.

**A tool returns a partial write.** `create_bid_blocks` and `update_bid_blocks` report
which items landed. The UI must surface that rather than treating a non-throwing response
as success.

**Model output is wrong.** Every generated artifact is editable before it is committed,
and nothing generated reaches a customer without a human action.

**Credentials on disk.** The session token goes in the macOS Keychain, not
`localStorage` and not a Tauri store. There is **no official Tauri keychain plugin** — the
community one is v0.2.0 with 6 stars, which is not a dependency to accept unexamined for a
product that will later touch money. Budget a small Rust command over `keyring-core`.

## Testing

- The tool layer is already covered — 160 tests, with the PII and confirm-before-write
  guarantees mutation-tested.
- **Contract tests** against every `/api/app/*` route: authorized, unauthorized,
  malformed input, and the shape of the response. These are what mobile will depend on.
- **A token-leak test on every response**, as on the MCP layer: no route may emit
  `client_token` or `reply_token` — the two bearer credentials that grant portal access
  and email-thread injection respectively.
- **A metering test**: every billable call writes exactly one usage row. Bill correctness
  is not something to discover from an invoice.
- The Tauri shell gets smoke coverage — launch, sign in, load the pipeline — not a full
  UI suite.

## Risks

**Tauri's macOS story is solid; its plugin coverage is thinner than advertised.** The iOS
research surfaced missing camera, push and keychain plugins. Desktop is better served, but
verify Photos-library access early rather than assuming it.

**Tauri v3 is in alpha.** It changes the webview runtime to a build-time choice and raises
the MSRV. A v2→v3 migration is a cost to price in, not a surprise to absorb.

**The Rust surface must stay small.** The moment a capability needs a custom plugin, the
cost is Swift plus Rust FFI with manual C-string memory management. If that appears in
scope, question whether the capability belongs on the server instead.

**Scope.** Three subsystems plus signing, notarization and an updater is a large build.
"Build, bloat, break, roll it back" is the stated intent, so the risk is accepted — but the
implementation plan should phase it so subsystem one ships before subsystem three starts.

## Open questions

- **Where the repo lives** and what it is called. The app is a new codebase; this spec
  lives in Sue's repo because that is where the contract and the tool layer are.
- **Photos library access on macOS under Tauri v2** — which plugin, and whether a file
  picker is the pragmatic fallback. Verify before planning subsystem two.
- **Transcription provider.** Server-side, so it is swappable, but the first choice and
  its cost per minute feed directly into the metering model.
- **Offline read cache** — whether the pipeline view caches at all in v1, or whether the
  app simply requires connectivity and says so clearly.
- **The `DataAdapter` interface surface.** Defining it against exactly one implementation
  risks encoding Supabase's shape into what is supposed to be neutral. Worth reviewing
  against a second real target — a restaurant POS API — before treating it as stable.
