"use client";

import { useState } from "react";
import type { SubmissionNote } from "@/lib/types";

interface Props {
  submissionId: string;
  initialNotes: SubmissionNote[];
}

function formatTimestamp(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    timeZone: "America/Chicago",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function NotesPanel({ submissionId, initialNotes }: Props) {
  const [notes, setNotes] = useState<SubmissionNote[]>(initialNotes);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");

  async function handleAdd() {
    const body = draft.trim();
    if (!body) return;
    setStatus("saving");
    try {
      const res = await fetch(`/api/admin/submissions/${submissionId}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body }),
      });
      if (!res.ok) throw new Error("save failed");
      const note: SubmissionNote = await res.json();
      setNotes((prev) => [note, ...prev]);
      setDraft("");
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="space-y-4">
      {/* Add note form */}
      <div className="space-y-2">
        <textarea
          value={draft}
          onChange={(e) => {
            setDraft(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          rows={3}
          placeholder="e.g. Called back — no answer. Will retry Friday."
          className="w-full px-4 py-3 bg-[#F8F6F1] border border-[rgba(42,36,33,0.15)] text-[#2A2421] text-sm font-sans placeholder-[#9e9087] focus:outline-none focus:border-[#11B2E8] transition-colors"
          style={{ borderRadius: "2px", resize: "vertical" }}
        />
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleAdd}
            disabled={status === "saving" || !draft.trim()}
            className="px-4 py-2 bg-[#2A2421] text-white text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#3d3532] disabled:opacity-50 transition-colors"
            style={{ borderRadius: "2px" }}
          >
            {status === "saving" ? "Saving…" : "Add Note"}
          </button>
          {status === "error" && (
            <span className="text-xs font-sans text-[#A65D37]">
              Save failed — try again.
            </span>
          )}
        </div>
      </div>

      {/* Notes list */}
      {notes.length > 0 && (
        <div className="space-y-2 pt-2 border-t border-[rgba(42,36,33,0.08)]">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-[#F8F6F1] border border-[rgba(42,36,33,0.1)] px-4 py-3"
              style={{ borderRadius: "2px" }}
            >
              <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#9e9087] mb-1.5">
                {formatTimestamp(note.created_at)} CT
              </p>
              <p className="text-sm font-sans text-[#2A2421] whitespace-pre-wrap leading-relaxed">
                {note.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {notes.length === 0 && (
        <p className="text-xs font-sans text-[#9e9087] italic">No notes yet.</p>
      )}
    </div>
  );
}
