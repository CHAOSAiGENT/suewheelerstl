# Capture & Bid Drafting — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Sue attaches job photos from her Photos library, dictates notes that become text, and drafts a bid in her own language with a price she sets.

**Architecture:** Photos and audio are captured locally in the Tauri app, shrunk locally, and uploaded to the contract. Transcription happens server-side so desktop and mobile share one path. Bid drafting is a sequence of existing tool calls — no new business logic, only a UI that respects the propose/set split.

**Tech Stack:** Tauri v2, `tauri-plugin-dialog`, `/usr/bin/sips`, Deepgram Nova-3, the eleven existing MCP tools via `/api/app/tools/:name`.

**Depends on:** Plan 1 (contract, live) and Plan 2 (shell, auth, API client).

---

## What the spike already settled

All verified by building and running it, not by reading docs.

| | |
|---|---|
| **The Photos picker works with no entitlement** | `tauri-plugin-dialog` → `rfd` → `NSOpenPanel` shows Photos under a **Media** sidebar heading. No Info.plist key, no entitlement, **no TCC prompt** — Photos vends a copy via `NSItemProvider`, so our process never touches `.photoslibrary` |
| **It always transcodes to JPEG, and ignores your filter** | Narrowing the filter to `heic` left every photo selectable and still returned `.jpeg`. **Sniff the bytes; never trust the extension or your own filter** |
| **The returned path is a temp export containing `&` and `=`** | `…/uuid=D28238B5…&code=001&loc=true.jpeg/IMG_0632.jpeg`. Anything treating paths as URLs or shell-interpolating them **will break**. It is purge-eligible — **copy on receipt** |
| **EXIF survives, including GPS** | The temp path literally contains `loc=true`. Stripping location is **explicit work**, not a freebie |
| **Loose files behave completely differently** | Real path, no copy, filter respected, HEIC stays HEIC. Two code paths, not one |
| **`sips` measured, not assumed** | 5712×4284 HEIC (3.1 MB) → 2048×1536 JPEG in **0.29s**. `-Z` is a longest-edge clamp |
| **Transcription: Deepgram Nova-3, $0.0043/min** | True per-second billing, no rounding. Chosen over a cheaper option for **per-word confidence** — see Task 5 |

### The UX risk that is not a bug

The open panel is a **sheet with its own remembered frame**. The spike saw it open at a
stale 1026×448 with the sidebar cut off below `Locations` — **`Media`/`Photos` was
invisible**. A first-run user on a small window may conclude the feature does not
exist. Set the parent window deliberately (Plan 2 open question) and consider a
first-run hint.

---

## Task 1: Image pipeline — `sips`, safely

**Files:** `apps/desktop/src-tauri/src/images.rs` + tests

- [ ] **Step 1: Write the failing test** for a `resize_for_upload(path) -> Result<PathBuf, String>` command.

Cover: a real HEIC fixture shrinks and lands at a **new** path; the **source is byte-identical afterward**; a path containing `&` and `=` is handled; a non-image fails cleanly.

- [ ] **Step 2: Run it, confirm it fails. Step 3: Implement.**

```
sips -s format jpeg -s formatOptions 60 -Z 1600 <in> --out <out>
```

Non-negotiables, each with a reason:
- **Always pass `--out`.** Without it `sips` overwrites the original **irreversibly**. On Sue's job photos that is data loss, and the only copy may be the one in her library.
- **Use `std::process::Command` with separate args — never a shell string.** The temp path contains `&` and `=`; shell interpolation would split it.
- **Use the absolute path `/usr/bin/sips`**, so a stray `PATH` cannot shadow it.
- **Copy the temp export into our own directory first.** Apple's `TemporaryItems` is purge-eligible; operating on it in place is a race.

**Sizing:** measured curve from the spike, on a 5712×4284 source —

| Edge | Q80 | Q60 | Q45 |
|---|---|---|---|
| 2048 | 1.0 MB | 669 KB | 450 KB |
| 1600 | 634 KB | **416 KB** | 279 KB |

`1600 / q60` is the default. The earlier "under 400 KB at 2048/q80" figure was wrong by
2.5×; these numbers were measured.

- [ ] **Step 4: Confirm it passes. Step 5: Commit.**

---

## Task 2: Strip location before anything leaves the machine

**Files:** `apps/desktop/src-tauri/src/images.rs` + tests

EXIF survives `sips`, and the Photos export carries GPS. **These are photographs of
customers' homes.** A bid PDF or a portfolio image carrying coordinates publishes where
a client lives.

- [ ] **Step 1: Write the failing test.** Use a fixture **with** GPS, assert the output
has none. If no GPS fixture is available, say so and get one — a test using a
GPS-less source proves nothing, which is exactly the trap the earlier `sips` check fell
into.

- [ ] **Step 2: Run it, confirm it fails. Step 3: Implement.**

`sips` has no strip-all flag. Options, in order of preference:
1. `sips -d <property>` for the GPS keys, if it addresses them
2. Re-encode through `CGImageDestination` with no metadata dictionary
3. A minimal JPEG APP1-segment strip in Rust

Pick one, **verify it against a real GPS-bearing file**, and record why in a comment.

- [ ] **Step 4: Confirm. Step 5: Commit.**

> Do not strip EXIF wholesale without thinking — orientation lives there too, and
> dropping it rotates photos sideways. Strip the GPS IFD specifically.

---

## Task 3: Attach photos to a job

**Files:** `apps/desktop/src/routes/job-photos.tsx` + tests

- [ ] **Step 1: Write the failing test.** Multi-select; each file resized before upload;
upload failure of one does **not** silently drop the others; progress is visible.

- [ ] **Step 2–4: Run, implement, confirm.**

Filters: offer `heic`, `jpg`, `jpeg`, `png` — **and sniff the returned bytes anyway.**
The Photos picker ignores the filter entirely.

- [ ] **Step 5: Verify end to end** — pick two photos from the real Photos library in a
built app, confirm both land on the job and are under ~500 KB each.

- [ ] **Step 6: Commit.**

---

## Task 4: The voice endpoint

**Files:** `apps/site/src/app/api/app/voice/route.ts` + tests

Deferred from Plan 1 deliberately: building it before a client could record audio would
have been untested surface.

- [ ] **Step 1: Write the failing test.** Auth required; a non-audio body is 400; a
successful transcription returns text **plus per-word confidence**; a provider failure
is 502 and **still writes a usage row**.

- [ ] **Step 2: Run, confirm fail. Step 3: Implement.**

- **Deepgram Nova-3**, `$0.0043/min`, true per-second billing.
- **`mip_opt_out=true` goes in the request builder on this commit, not later.**
  Deepgram's docs state participation in model training is **the default**. This is
  client audio — customer names, addresses, and job details.
- Accepts mp4/m4a/AAC and webm/Opus **directly**; no `ffmpeg` transcode.
- Meter it: `model: "deepgram-nova-3"`, duration, and cost. Usage billing needs the
  per-call number, and audio is the first genuinely metered cost in the system.

- [ ] **Step 4: Confirm. Step 5: Commit.**

---

## Task 5: Voice notes in the app

**Files:** `apps/desktop/src/routes/voice-note.tsx` + tests

- [ ] **Step 1: Write the failing test.** Record → upload → transcript appears →
**editable before saving**; a failed transcription keeps the audio so nothing is lost.

- [ ] **Step 2–4: Run, implement, confirm.**

**The transcript is always editable before it is saved.** This is the whole reason
Deepgram was chosen over a cheaper provider:

> Whisper-family models fail on noisy audio by **hallucinating fluently**, not by
> producing garbled text. In a workshop, an invented sentence looks perfectly plausible
> and writes silently into the CRM. Per-word confidence lets the UI flag the uncertain
> spans; the edit step is what makes the flag useful.

Surface low-confidence words visually. A transcript that is 60% confident must not look
identical to one that is 99% confident.

- [ ] **Step 5: Commit.**

---

## Task 6: Bid drafting

**Files:** `apps/desktop/src/routes/bid-draft.tsx` + tests

No new business logic. A UI over tools that already exist and are already tested.

The flow:
1. `search_leads` / `create_lead` — resolve or create
2. `search_copyblocks` — her own historical language
3. `create_bid_blocks` — draft the narrative
4. `propose_bid_amount` — **evidence only, writes nothing**
5. `set_bid_amount` — the number she confirms
6. Stop. **Sending stays in the admin web UI.**

- [ ] **Step 1: Write the failing tests.** The three that matter:

```
it("does not pre-fill the confirm field with the proposed number")
it("shows the copyblock pricing text verbatim, not a computed total")
it("has no path that marks a bid sent or emails a customer")
```

- [ ] **Step 2: Run, confirm fail. Step 3: Implement. Step 4: Confirm.**

**Why the first test exists.** The propose/set split makes "Sue sets the price" a
property of the API — `set_bid_amount` cannot write without an explicit confirmed
value. A UI that pre-fills the confirm field with the proposed number **defeats that
in the interface** while every server-side test still passes. The safety property
would become theatre.

**Why the second.** `propose_bid_amount` returns copyblock pricing **verbatim** —
`FRONT DOOR — 121 occurrences | Range: $200–$8,000 | Median: $2,500`. Rendering that
as a calculated subtotal manufactures false precision from a wide, condition-dependent
spread. Show the evidence; let her decide.

- [ ] **Step 5: Verify end to end** against a real lead: dictate notes, draft blocks,
see the pricing evidence, set a number, confirm it lands in the CRM and that the bid is
**not** marked sent.

- [ ] **Step 6: Commit.**

---

## Failure modes

**A photo fails mid-batch.** Report which landed. `create_bid_blocks` already models
this; the photo path must too. Silent partial success is worse than a visible failure.

**Transcription returns nonsense.** The edit step catches it — provided the UI makes
low confidence visible. If it does not, this failure mode is invisible by construction.

**Optimize Mac Storage is on.** iCloud-only originals may not appear in the picker at
all. **Check Sue's actual setting before concluding the feature works** — it is a
settings question, not an engineering one, and it could make capture look broken for
her specifically while working perfectly for us.

**She picks 40 photos.** Resize is 0.29s each, so ~12s plus upload. Show progress, and
do not block the window.

---

## Open questions

- **Which GPS-strip mechanism**, verified against a real GPS-bearing file. Task 2.
- **A GPS fixture** for the test. Without one the test is vacuous.
- **Sue's Optimize Mac Storage setting.** Could invalidate Task 3's primary path for her.
- **Audio format from the Tauri webview.** `MediaRecorder` on macOS WKWebView yields
  `mp4` or `webm` — unrecorded in MDN's compat data. Deepgram accepts both, so this is
  a detail to observe rather than a risk, but observe it rather than assume.
- **Whether photos feed the public portfolio.** Out of scope here, but this pipeline is
  the precondition — the site still has zero images, and `/portfolio` has no portfolio.
