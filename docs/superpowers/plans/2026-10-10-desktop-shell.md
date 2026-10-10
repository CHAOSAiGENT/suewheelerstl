# Desktop Shell — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A signed, notarized, auto-updating macOS app that Sue opens, signs into with the Google account she already uses, and sees her pipeline in.

**Architecture:** Tauri v2 at `apps/desktop` in the monorepo. The Rust side stays deliberately small — a window, a Keychain command, an HTTP client, an updater. Everything else is a React frontend talking to the `/api/app/*` contract built in Plan 1. No business logic ships in the app.

**Tech Stack:** Tauri v2 (`tauri 2.12.0`), Rust 1.94.1, React 19 + TypeScript + Vite, `keyring-core` + `apple-native-keyring-store`, `@suewheelerstl/contract`.

**Plan 1 prerequisite:** the monorepo cutover (Plan 1 Tasks 3–4) must be done. Everything here lives at `apps/desktop`, which only exists on `chore/monorepo-apps-site`.

**Out of scope:** photo capture, voice, bid drafting — Plan 3. Mobile — its own spec.

---

## What the research already settled

Do not re-litigate these; they were verified, several by running them.

| | |
|---|---|
| Tauri over Electron | 8.6 MiB vs 244 MiB bundle; 172 MB vs 409 MB RAM. Electron has **no mobile target at all**, which matters because React Native is the mobile plan |
| **No official Tauri keychain plugin** | The community one at `crates.io/crates/tauri-plugin-keyring` is **a different author's** package — v0.1.0, Dec 2024, wrapping the old `keyring` crate. Following the README's install instructions installs the wrong thing. Write our own |
| Keychain accessibility | `access-policy = "after-first-unlock-this-device-only"` via `Entry::new_with_modifiers`. The `ThisDeviceOnly` part stops the token riding an iCloud backup to a second machine, which would break device attribution later |
| iCloud sync | Already off — `kSecAttrSynchronizable` is **opt-in**, not opt-out. No work needed |
| You cannot read back your own hardening | *"the OS hides the access policy information of existing items."* Test the write path deliberately; never assert it from a read |
| **Supabase silently falls back to `localStorage`** | Its `storage` default is `globalThis.localStorage` if present — and in a Tauri webview it **is** present. Forget the adapter and tokens land there with no error and no warning |
| Supabase client defaults are wrong for desktop | `detectSessionInUrl` defaults `true`, `flowType` defaults `'implicit'`. Set `false` and `'pkce'` |
| Bundle ID is permanent | Changing team ID or bundle ID **orphans every Keychain item with no migration path**. Decide before shipping; billing sits downstream |
| `errSecItemNotFound` | A wrong access group returns this, so a token **silently appears absent** — indistinguishable from a logout. Handle not-found as re-auth, never as an error |
| Tauri v3 | Already in alpha, MSRV Rust 1.95, webview runtime becomes a build-time choice. A v2→v3 migration is a cost to price in, not a surprise |

---

## File structure

| Path | Responsibility |
|---|---|
| `apps/desktop/src-tauri/src/lib.rs` | Builder, plugin registration, command registry |
| `apps/desktop/src-tauri/src/keychain.rs` | The three Keychain commands. The only non-trivial Rust in the app |
| `apps/desktop/src-tauri/tauri.conf.json` | Window, bundle, signing, updater endpoint |
| `apps/desktop/src-tauri/capabilities/default.json` | v2 permissions — minimal |
| `apps/desktop/src/lib/storage.ts` | The Supabase storage adapter over the Keychain commands |
| `apps/desktop/src/lib/supabase.ts` | Client construction with the non-default options |
| `apps/desktop/src/lib/api.ts` | Typed client for `/api/app/*` |
| `apps/desktop/src/routes/*` | Sign-in and pipeline views |
| `.github/workflows/desktop-release.yml` | Build, sign, notarize, publish the updater manifest |

---

## Task 1: Scaffold

**Files:** `apps/desktop/**` (new)

- [ ] **Step 1: Create the app**

From the repo root:
```bash
pnpm create tauri-app@latest desktop --manager pnpm --template react-ts --identifier com.chaosaigent.suewheelerstl-companion
mv desktop apps/desktop
```

**The identifier is permanent.** Changing it later orphans every Keychain item with no migration path, and billing attribution sits downstream of it. Confirm it with Peter before running this.

- [ ] **Step 2: Join the workspace**

Set `apps/desktop/package.json` `"name": "suewheelerstl-desktop"` (unique names are required for Vercel's monorepo build-skipping), add `"@suewheelerstl/contract": "workspace:*"` to its dependencies, then `pnpm install` from the root.

- [ ] **Step 3: Keep Rust artifacts out of git**

Add to `.gitignore` **before the first `cargo build`** — the `target/` directory reaches gigabytes:
```
apps/desktop/src-tauri/target/
apps/desktop/src-tauri/gen/
```

- [ ] **Step 4: Verify it runs**

```bash
pnpm --filter ./apps/desktop tauri dev
```
Expected: a window opens. First build compiles the Rust toolchain and is slow; subsequent builds are seconds.

- [ ] **Step 5: Verify the site build is unaffected**

```bash
cd apps/site && pnpm run build
```
Expected: 127/127 pages, unchanged. If the desktop app has broken the site build, the workspace is misconfigured — stop and fix before continuing.

- [ ] **Step 6: Commit**

---

## Task 2: The Keychain command

The only substantial Rust in this app. Everything else is a thin wrapper.

**Files:**
- Create: `apps/desktop/src-tauri/src/keychain.rs`
- Modify: `apps/desktop/src-tauri/src/lib.rs`, `Cargo.toml`

- [ ] **Step 1: Add the dependencies**

```toml
keyring-core = "0.7"
apple-native-keyring-store = "0.2"
```

Verify the resolved versions and that `apple-native-keyring-store` is compatible with the `keyring-core` you got — the ecosystem moved from the older monolithic `keyring` crate to `keyring-core` plus per-platform stores, and the two must match. Do **not** add `tauri-plugin-keyring`: the published crate under that name belongs to a different author and wraps the old API.

- [ ] **Step 2: Write three commands**

`keychain_set(key, value)`, `keychain_get(key) -> Option<String>`, `keychain_delete(key)`.

Requirements:
- Use `Entry::new_with_modifiers` with `access-policy = "after-first-unlock-this-device-only"`. The default is `WhenUnlocked`, which is wrong — the app should survive a reboot before first unlock.
- **`keychain_get` returns `None` for not-found, never an error.** `errSecItemNotFound` is also what a wrong access group returns, so the token can silently appear absent. The frontend must treat absence as "sign in again", which is correct in both cases.
- Return `Result<_, String>` for genuine failures. A Keychain error that is not not-found should surface.

- [ ] **Step 3: Register them** in `lib.rs`'s `invoke_handler`.

- [ ] **Step 4: Verify the round trip against the real Keychain**

This cannot be unit-tested meaningfully — the point is the OS interaction. Add a temporary debug command or a dev-only button that does set → get → delete → get, and run it in `tauri dev`:

Expected: second get returns the value; fourth returns `None`, not an error.

Then confirm the item is really there:
```bash
security find-generic-password -s com.chaosaigent.suewheelerstl-companion 2>&1 | head -5
```

**You cannot verify the accessibility attribute by reading it back** — the OS hides the access policy of existing items, and a search returns the default regardless of what was written. Verify the write path by code review, and record in a comment that it is unverifiable by read.

- [ ] **Step 5: Remove the debug command. Commit.**

---

## Task 3: Auth, and the silent-fallback trap

**Files:**
- Create: `apps/desktop/src/lib/storage.ts`, `apps/desktop/src/lib/supabase.ts`
- Test: `apps/desktop/src/lib/__tests__/storage.test.ts`

- [ ] **Step 1: Write the failing test for the storage adapter**

Assert the three methods map to the right `invoke` calls, and critically: **`getItem` resolves to `null` when the Keychain has nothing** — not `undefined`, not a throw. Supabase's client awaits `initializePromise` internally and a throwing adapter breaks session restoration in a way that looks like a login bug.

- [ ] **Step 2: Run it, confirm it fails. Step 3: Implement.**

```ts
/**
 * Supabase session storage, backed by the macOS Keychain.
 *
 * THIS FILE EXISTS BECAUSE THE DEFAULT IS SILENTLY WRONG. Supabase's `storage`
 * option defaults to `globalThis.localStorage` when present — and in a Tauri
 * webview it IS present. Omit this adapter and the refresh token lands in
 * localStorage with no error, no warning, and no sign anything is amiss. It is
 * the exact outcome the Keychain work exists to prevent, arriving silently.
 *
 * getItem returns null rather than throwing on a miss. errSecItemNotFound is
 * also what a wrong access group produces, so "absent" and "misconfigured" are
 * indistinguishable here — both should mean "sign in again", which is safe in
 * either case.
 */
```

- [ ] **Step 4: Construct the client with the non-default options**

```ts
createClient(url, key, {
  auth: {
    storage: keychainStorage,
    // Defaults are wrong for a desktop app:
    //   detectSessionInUrl defaults TRUE — there is no URL to parse, and
    //     leaving it on makes the client wait on a redirect that never comes.
    //   flowType defaults 'implicit' — PKCE is required for a public client
    //     that cannot hold a secret, which is every desktop app.
    detectSessionInUrl: false,
    flowType: "pkce",
    persistSession: true,
    autoRefreshToken: true,
  },
});
```

- [ ] **Step 5: Prove the fallback is actually closed**

A test asserting the adapter is passed is not enough — the failure mode is forgetting to pass it. After signing in during `tauri dev`, open the webview inspector and run:
```js
Object.keys(localStorage).filter(k => k.includes('supabase') || k.includes('auth'))
```
Expected: **empty array**. If anything appears, the adapter is not wired and the token is on disk in the clear.

- [ ] **Step 6: Commit.**

---

## Task 4: Sign-in flow

**Files:** `apps/desktop/src/routes/signin.tsx`, deep-link registration

- [ ] **Step 1:** Add `tauri-plugin-deep-link`, register a custom scheme in `tauri.conf.json`.

- [ ] **Step 2:** Sign-in opens the **system browser**, not the webview — Google blocks OAuth in embedded webviews, and a user cannot see the address bar to verify they are on a real Google page.

- [ ] **Step 3:** Handle the deep-link callback, `exchangeCodeForSession(code)`.

**Known dev trap:** `tauri dev` cannot register macOS deep links — they require a fully bundled `.app`. Test this path with `tauri build` and the built app, not in dev. Budget for it; discovering it mid-task reads as a broken implementation.

- [ ] **Step 4: Verify** against the built app: sign in, quit, relaunch, confirm the session restores from the Keychain without re-authenticating.

- [ ] **Step 5: Commit.**

---

## Task 5: The API client

**Files:** `apps/desktop/src/lib/api.ts` + test

- [ ] **Step 1: Write the failing test.** Assert: the bearer token is attached; `CLIENT_ID_HEADER` is sent as `desktop`; a 401 triggers one refresh-and-retry and no more; a 403 does **not** retry (re-authenticating never helps — that is why the server distinguishes them); a 404 surfaces as "unknown tool" rather than a generic failure.

- [ ] **Step 2: Run it, confirm it fails. Step 3: Implement**, importing `TOOL_NAMES` and `CLIENT_ID_HEADER` from `@suewheelerstl/contract` so the client cannot call a tool the server does not expose.

- [ ] **Step 4: Confirm it passes. Step 5: Commit.**

---

## Task 6: The pipeline view

**Files:** `apps/desktop/src/routes/pipeline.tsx` + test

- [ ] **Step 1: Write the failing test.** The cases that matter:
  - stages render in `STATUS_VALUES` order, including empty ones
  - **`truncated: true` is surfaced visibly** — the server reports it and a UI that ignores it reintroduces exactly the "confident wrong totals" problem the bound was added to prevent
  - a network failure shows an error state, never an empty pipeline. An empty board and a failed request must not look the same

- [ ] **Step 2: Run it, confirm it fails. Step 3: Implement. Step 4: Confirm.**

- [ ] **Step 5: Verify against the real server.** With the site running locally and a real session, confirm the pipeline matches what `/admin` shows. Two clients disagreeing about the same data is the bug this whole architecture exists to avoid.

- [ ] **Step 6: Commit.**

---

## Task 7: Signing, notarization, updater

Nothing here is optional — "fully to the finish line" means an app that installs without a Gatekeeper warning and updates itself.

- [ ] **Step 1: Signing.** `tauri.conf.json` → `bundle.macOS.signingIdentity`, hardened runtime on. CI reads `APPLE_CERTIFICATE`, `APPLE_CERTIFICATE_PASSWORD`, `KEYCHAIN_PASSWORD` from secrets.

**Do not copy an Electron entitlements file.** Tauri uses WKWebView, whose JIT runs in a separate Apple-signed process, so `com.apple.security.cs.allow-jit` is likely unnecessary. Start with no entitlements and add only what fails.

- [ ] **Step 2: Notarization.** App Store Connect API key. Note notarization *"is not App Review"* — it is an automated malware scan, so there is no review delay and no Guideline 4.2 exposure for a Developer ID build distributed outside the App Store.

- [ ] **Step 3: Updater.** `tauri-plugin-updater`, pointing at a static JSON manifest. **Minisign signing is mandatory and cannot be disabled** — generate the keypair, put the private key in CI secrets and the public key in `tauri.conf.json`.

Host the manifest somewhere stable. Serving it from the site is the obvious choice and costs nothing.

- [ ] **Step 4: Verify the full chain, which is the only verification that counts:**
```bash
spctl -a -vvv -t install /path/to/SueWheeler.app
codesign -dv --verbose=4 /path/to/SueWheeler.app
```
Expected: `accepted`, `source=Notarized Developer ID`, hardened runtime flag set.

Then install v1, publish v2, and **confirm the running app offers and applies the update**. A signed app that cannot update itself is a one-shot deliverable, and the whole point of the thin client is that fixes ship without touching her laptop.

- [ ] **Step 5: Commit.**

---

## Failure modes

**Server unreachable.** A thin client is useless offline by construction. The pipeline view should serve a cached copy with a visible staleness indicator; writes must queue or refuse, never silently drop.

**Session expires mid-work.** Re-authenticate without losing in-progress state. A half-written note lost to a token refresh is the kind of defect that ends adoption.

**Keychain item orphaned.** If the bundle ID or team ID ever changes, every stored token becomes unreachable with no migration path. The app must treat that as "sign in again" rather than an error — which it will, if `keychain_get` returns `None` for not-found as specified in Task 2.

**Gatekeeper rejection on first launch.** Caught by Task 7 Step 4, which is why that step is a real verification and not a formality.

---

## Open questions

- **The bundle identifier.** Permanent, and billing sits downstream. Needs Peter before Task 1.
- **Where the updater manifest is hosted.** The site is the obvious answer; confirm.
- **Window size on first run.** Not cosmetic: the Photos picker in Plan 3 is a sheet that inherits a remembered frame, and the spike found it can open with the sidebar cut off, hiding the Photos entry entirely. Set a deliberate default now.
- **Offline cache in v1, or require connectivity and say so clearly?** Either is defensible; drifting into a half-cache is not.
