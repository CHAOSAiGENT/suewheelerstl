"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminNotesForm({
  submissionId,
  initialNotes,
}: {
  submissionId: string;
  initialNotes: string;
}) {
  const [notes, setNotes] = useState(initialNotes);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const router = useRouter();

  async function handleSave() {
    setStatus("saving");
    try {
      const res = await fetch(`/api/admin/submissions/${submissionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ admin_notes: notes }),
      });
      if (res.ok) {
        setStatus("saved");
        router.refresh();
        setTimeout(() => setStatus("idle"), 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="space-y-3">
      <textarea
        value={notes}
        onChange={(e) => {
          setNotes(e.target.value);
          if (status === "saved") setStatus("idle");
        }}
        rows={3}
        placeholder="e.g. Needs lead test first. Called back 3/15."
        className="w-full px-4 py-3 bg-[#F8F6F1] border border-[rgba(42,36,33,0.15)] text-[#2A2421] text-sm font-sans placeholder-[#9e9087] focus:outline-none focus:border-[#11B2E8] transition-colors"
        style={{ borderRadius: "2px", resize: "vertical" }}
      />
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleSave}
          disabled={status === "saving"}
          className="px-4 py-2 bg-[#2A2421] text-white text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#3d3532] disabled:opacity-50 transition-colors"
          style={{ borderRadius: "2px" }}
        >
          {status === "saving" ? "Saving…" : "Save Notes"}
        </button>
        {status === "saved" && (
          <span className="text-xs font-sans text-[#2A7A2A]">Saved.</span>
        )}
        {status === "error" && (
          <span className="text-xs font-sans text-[#A65D37]">Save failed.</span>
        )}
      </div>
    </div>
  );
}
