"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AcceptBidButton({ token }: { token: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const router = useRouter();

  async function handleAccept() {
    if (
      !confirm(
        "Accept this estimate? Sue will be notified and will follow up with scheduling.",
      )
    )
      return;
    setStatus("loading");
    const res = await fetch("/api/client/accept-bid", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    if (res.ok) {
      setStatus("done");
      router.refresh();
    } else {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        className="mt-4 p-3 bg-[#F0FBF0] border border-[#2A7A2A] text-sm font-sans text-[#2A7A2A]"
        style={{ borderRadius: "2px" }}
      >
        ✓ Estimate accepted — Sue will be in touch to schedule your project.
      </div>
    );
  }

  return (
    <button
      onClick={handleAccept}
      disabled={status === "loading"}
      className="mt-4 w-full px-6 py-3 bg-[#2A7A2A] text-white text-sm font-sans font-semibold uppercase tracking-widest hover:bg-[#236323] disabled:opacity-60 transition-colors"
      style={{ borderRadius: "2px" }}
    >
      {status === "loading" ? "Processing…" : "Accept This Estimate"}
    </button>
  );
}
