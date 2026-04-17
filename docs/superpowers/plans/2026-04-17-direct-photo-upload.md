# Direct-to-Storage Photo Upload Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upload contact form photos directly from the browser to Supabase Storage via signed URLs, eliminating the Vercel function body size limit as a failure point.

**Architecture:** A new `/api/upload-url` route uses the service client to generate a Supabase Storage signed upload URL for each file. The browser uploads directly to Supabase via that URL (plain `fetch` PUT — no client SDK needed). The form then submits photo storage paths as strings instead of files, so the contact route only handles lightweight JSON.

**Tech Stack:** Next.js App Router, Supabase Storage (`createSignedUploadUrl`), TypeScript

---

## File Map

| Action | File                              | Responsibility                                                          |
| ------ | --------------------------------- | ----------------------------------------------------------------------- |
| Create | `src/app/api/upload-url/route.ts` | Generate a signed upload URL for one file                               |
| Modify | `src/components/ContactForm.tsx`  | Upload each photo immediately on selection; submit paths not files      |
| Modify | `src/app/api/contact/route.ts`    | Accept `photo_paths` string instead of file uploads; remove upload loop |

---

## Task 1: Signed upload URL endpoint

**Files:**

- Create: `src/app/api/upload-url/route.ts`

- [ ] **Step 1: Create the route**

```ts
// src/app/api/upload-url/route.ts
import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";

export async function POST(req: Request) {
  let body: { filename: string; contentType: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { filename, contentType } = body;
  if (!filename || !contentType) {
    return NextResponse.json(
      { error: "filename and contentType required" },
      { status: 400 },
    );
  }

  const ext = filename.split(".").pop()?.toLowerCase() ?? "jpg";
  const path = `uploads/${crypto.randomUUID()}.${ext}`;

  const supabase = createServiceSupabaseClient();
  const { data, error } = await supabase.storage
    .from("submission-photos")
    .createSignedUploadUrl(path);

  if (error || !data) {
    console.error("[upload-url]", error);
    return NextResponse.json(
      { error: "Could not generate upload URL" },
      { status: 500 },
    );
  }

  return NextResponse.json({ path, signedUrl: data.signedUrl });
}
```

- [ ] **Step 2: Smoke-test the endpoint manually**

With the dev server running (`npm run dev`), run:

```bash
curl -s -X POST http://localhost:3000/api/upload-url \
  -H "Content-Type: application/json" \
  -d '{"filename":"test.jpg","contentType":"image/jpeg"}' | jq .
```

Expected: `{ "path": "uploads/<uuid>.jpg", "signedUrl": "https://..." }`

- [ ] **Step 3: Commit**

```bash
git add src/app/api/upload-url/route.ts
git commit -m "feat: add /api/upload-url — server-generated Supabase signed upload URLs"
```

---

## Task 2: Update ContactForm — upload on select, submit paths

**Files:**

- Modify: `src/components/ContactForm.tsx`

The key change: replace `photos: File[]` with a richer state that tracks upload status per file. Photos upload immediately on selection. The form submit sends paths, not files.

- [ ] **Step 1: Replace the photo state type and add the upload helper**

Replace the existing `photos` state and `handlePhotos` function with the following (keep all other state unchanged):

```tsx
// Replace these two lines near the top of ContactForm():
//   const [photos, setPhotos] = useState<File[]>([]);
// With:

type PhotoEntry = {
  file: File;
  path: string | null; // null = still uploading or failed
  error: boolean;
};

const [photos, setPhotos] = useState<PhotoEntry[]>([]);

async function uploadPhoto(file: File): Promise<string | null> {
  try {
    const res = await fetch("/api/upload-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filename: file.name,
        contentType: file.type || "image/jpeg",
      }),
    });
    if (!res.ok) return null;
    const { signedUrl, path } = await res.json();

    const uploadRes = await fetch(signedUrl, {
      method: "PUT",
      headers: { "Content-Type": file.type || "image/jpeg" },
      body: file,
    });
    return uploadRes.ok ? path : null;
  } catch {
    return null;
  }
}
```

- [ ] **Step 2: Replace `handlePhotos` to upload immediately on selection**

Replace the existing `handlePhotos` function:

```tsx
async function handlePhotos(e: React.ChangeEvent<HTMLInputElement>) {
  const files = Array.from(e.target.files ?? []);
  e.target.value = "";

  // Respect the 3-photo cap
  const slots = 3 - photos.length;
  if (slots <= 0) return;
  const toAdd = files.slice(0, slots);

  // Add entries as "uploading" immediately so UI updates
  const entries: PhotoEntry[] = toAdd.map((file) => ({
    file,
    path: null,
    error: false,
  }));
  setPhotos((prev) => [...prev, ...entries]);

  // Upload each concurrently and update state as they resolve
  await Promise.all(
    toAdd.map(async (file, i) => {
      const path = await uploadPhoto(file);
      setPhotos((prev) => {
        const next = [...prev];
        // Find the matching pending entry (same file reference)
        const idx = next.findIndex(
          (e) => e.file === file && e.path === null && !e.error,
        );
        if (idx !== -1) {
          next[idx] = { file, path, error: path === null };
        }
        return next;
      });
    }),
  );
}
```

- [ ] **Step 3: Replace `removePhoto` (type change only)**

```tsx
function removePhoto(idx: number) {
  setPhotos((prev) => prev.filter((_, i) => i !== idx));
}
```

- [ ] **Step 4: Update `handleSubmit` — send paths, not files; block if any still uploading**

Replace the submit handler's photo-related lines. The full updated `handleSubmit`:

```tsx
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  if (selectedServices.length === 0) {
    setServiceError(true);
    return;
  }

  // Block submit if any photo is still uploading (path === null and no error)
  const uploading = photos.some((p) => p.path === null && !p.error);
  if (uploading) return;

  setStatus("submitting");

  const form = e.currentTarget;
  const fd = new FormData(form);

  selectedServices.forEach((s) => fd.append("service_types", s));

  // Send uploaded paths as a JSON string — no raw files
  const uploadedPaths = photos
    .filter((p) => p.path !== null)
    .map((p) => p.path as string);
  if (uploadedPaths.length > 0) {
    fd.append("photo_paths", JSON.stringify(uploadedPaths));
  }

  try {
    const res = await fetch("/api/contact", { method: "POST", body: fd });
    const json = await res.json();
    if (res.ok) {
      setToken(json.token ?? null);
      setStatus("success");
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
}
```

- [ ] **Step 5: Update the photo UI — show uploading/error states**

In the `photos.map` render block, replace the list item contents:

```tsx
{
  photos.map((entry, i) => (
    <li
      key={i}
      className="flex items-center justify-between px-3 py-1.5 bg-[#F8F6F1] border border-[rgba(42,36,33,0.1)]"
      style={{ borderRadius: "2px" }}
    >
      <span
        className={[
          "text-xs font-sans truncate max-w-[80%]",
          entry.error ? "text-[#A65D37]" : "text-[#6B5E55]",
        ].join(" ")}
      >
        {entry.error
          ? `${entry.file.name} — upload failed`
          : entry.path === null
            ? `${entry.file.name} — uploading…`
            : entry.file.name}
      </span>
      <button
        type="button"
        onClick={() => removePhoto(i)}
        className="text-[#9e9087] hover:text-[#A65D37] transition-colors"
        aria-label="Remove photo"
      >
        <X size={12} />
      </button>
    </li>
  ));
}
```

- [ ] **Step 6: Update the attach button label — use `photos.length` correctly**

The existing attach label checks `photos.length`. That still works — no change needed there. But the `disabled` prop on the file input should also block while an upload is in progress:

```tsx
// Update the file input disabled prop:
disabled={photos.length >= 3 || photos.some((p) => p.path === null && !p.error)}
```

- [ ] **Step 7: Update the submit button label — show "uploading photos…" when blocked**

```tsx
// Replace the button label ternary:
{
  photos.some((p) => p.path === null && !p.error)
    ? "Uploading photos…"
    : status === "submitting"
      ? "Sending…"
      : "Send My Request";
}
```

- [ ] **Step 8: Commit**

```bash
git add src/components/ContactForm.tsx
git commit -m "feat: upload photos directly to Supabase on select — submit paths not files"
```

---

## Task 3: Update contact route — accept paths, remove upload loop

**Files:**

- Modify: `src/app/api/contact/route.ts`

- [ ] **Step 1: Remove the photo upload loop and replace with path parsing**

In `src/app/api/contact/route.ts`, replace the entire photo upload block (lines 75–105 approximately):

```ts
// REMOVE this block:
//   const photoFiles = formData.getAll("photos") as File[];
//   const photo_urls: string[] = [];
//   for (const file of photoFiles) { ... }
//   if (photo_urls.length > 0) { ... }

// REPLACE WITH:
const rawPaths = formData.get("photo_paths") as string | null;
const photo_urls: string[] = rawPaths ? JSON.parse(rawPaths) : [];

if (photo_urls.length > 0) {
  await supabase
    .from("submissions")
    .update({ photo_urls })
    .eq("id", submission.id);
  submission.photo_urls = photo_urls;
}
```

- [ ] **Step 2: Verify the route no longer imports anything photo-upload-specific**

The route uses `supabase.storage` only for the upload loop — once that's removed, the service client is still needed for the DB insert. No import changes required.

- [ ] **Step 3: Commit**

```bash
git add src/app/api/contact/route.ts
git commit -m "feat: contact route accepts photo_paths strings — removes server-side upload"
```

---

## Task 4: End-to-end smoke test

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Submit a test form with a photo**

Go to `http://localhost:3000/contact`. Fill in required fields, attach a photo (ideally a large one, >5MB). Submit.

Expected:

- Photo thumbnail shows "uploading…" briefly while selected, then shows filename normally
- Form submits successfully and shows the success screen with "Track My Request" link
- No 413 or 500 errors in the terminal

- [ ] **Step 3: Verify photo landed in Supabase Storage**

In the Supabase dashboard → Storage → `submission-photos` bucket, confirm a file exists under `uploads/`.

- [ ] **Step 4: Verify the submission record in the DB**

In Supabase → Table Editor → `submissions`, confirm the latest row has a non-empty `photo_urls` array with the correct path.

- [ ] **Step 5: Push and let Vercel deploy**

```bash
git push origin main
```

Wait for the Vercel deployment to complete, then repeat the smoke test on the live site.
