"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ClientReplyForm({ token }: { token: string }) {
  const [body, setBody] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!body.trim()) return;
    setStatus("sending");

    try {
      const res = await fetch("/api/client/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, body: body.trim() }),
      });
      if (res.ok) {
        setStatus("sent");
        setBody("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-sm font-sans text-[#2A7A2A]">
        Message sent. Sue will see it shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={3}
        placeholder="Type your message…"
        className="w-full px-4 py-3 bg-[#F8F6F1] border border-[rgba(42,36,33,0.15)] text-[#2A2421] text-sm font-sans placeholder-[#9e9087] focus:outline-none focus:border-[#11B2E8] transition-colors"
        style={{ borderRadius: "2px", resize: "vertical" }}
      />
      {status === "error" && (
        <p className="text-xs font-sans text-[#A65D37]">Something went wrong. Please call (314) 367-6054.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending" || !body.trim()}
        className="flex items-center gap-2 px-5 py-2.5 bg-[#11B2E8] text-white text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#0e96c4] disabled:opacity-50 transition-colors"
        style={{ borderRadius: "2px" }}
      >
        <Send size={12} />
        {status === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
