"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";

export function AdminReplyForm({ submissionId }: { submissionId: string }) {
  const [body, setBody] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!body.trim()) return;
    setStatus("sending");

    try {
      const res = await fetch("/api/admin/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ submissionId, body: body.trim() }),
      });
      if (res.ok) {
        setBody("");
        setStatus("idle");
        router.refresh();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={4}
        placeholder="Type your reply to the client…"
        className="w-full px-4 py-3 bg-[#F8F6F1] border border-[rgba(42,36,33,0.15)] text-[#2A2421] text-sm font-sans placeholder-[#9e9087] focus:outline-none focus:border-[#11B2E8] transition-colors"
        style={{ borderRadius: "2px", resize: "vertical" }}
      />
      {status === "error" && (
        <p className="text-xs font-sans text-[#A65D37]">Failed to send. Try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending" || !body.trim()}
        className="flex items-center gap-2 px-5 py-2.5 bg-[#11B2E8] text-white text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#0e96c4] disabled:opacity-50 transition-colors"
        style={{ borderRadius: "2px" }}
      >
        <Send size={12} />
        {status === "sending" ? "Sending…" : "Send Reply"}
      </button>
    </form>
  );
}
