"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export function AdminPhotoUpload({ submissionId }: { submissionId: string }) {
  const [status, setStatus] = useState<"idle" | "uploading" | "done" | "error">(
    "idle",
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setStatus("uploading");
    const fd = new FormData();
    fd.append("submission_id", submissionId);
    for (const f of Array.from(files)) fd.append("photos", f);

    const res = await fetch("/api/admin/photos", { method: "POST", body: fd });
    if (res.ok) {
      setStatus("done");
      router.refresh();
    } else {
      setStatus("error");
    }
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="mt-5 pt-5 border-t border-[rgba(42,36,33,0.08)]">
      <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-2">
        Add Photos
      </p>
      <label className="inline-flex items-center gap-2 cursor-pointer px-4 py-2 bg-[#F8F6F1] border border-[rgba(42,36,33,0.15)] text-xs font-sans font-semibold uppercase tracking-widest text-[#2A2421] hover:border-[#11B2E8] transition-colors">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          onChange={handleUpload}
          disabled={status === "uploading"}
        />
        {status === "uploading" ? "Uploading…" : "Choose files"}
      </label>
      {status === "done" && (
        <span className="ml-3 text-xs font-sans text-[#2A7A2A]">
          Uploaded ✓
        </span>
      )}
      {status === "error" && (
        <span className="ml-3 text-xs font-sans text-[#A65D37]">
          Upload failed — try again
        </span>
      )}
    </div>
  );
}
