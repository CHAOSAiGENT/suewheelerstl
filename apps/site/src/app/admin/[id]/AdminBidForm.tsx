"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { BidStatus } from "@/lib/types";

interface Props {
  submissionId: string;
  bidStatus: BidStatus;
  currentAmount: number | null;
  currentNotes: string | null;
}

export function AdminBidForm({
  submissionId,
  bidStatus,
  currentAmount,
  currentNotes,
}: Props) {
  const [amount, setAmount] = useState(currentAmount?.toString() ?? "");
  const [notes, setNotes] = useState(currentNotes ?? "");
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">(
    "idle",
  );
  const router = useRouter();

  const alreadySent = bidStatus === "sent";
  const accepted = bidStatus === "accepted";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    const fd = new FormData(e.currentTarget as HTMLFormElement);
    fd.set("submission_id", submissionId);
    const res = await fetch("/api/admin/bid", { method: "POST", body: fd });
    if (res.ok) {
      setStatus("done");
      router.refresh();
    } else {
      setStatus("error");
    }
  }

  if (accepted) {
    return (
      <div
        className="p-4 bg-[#F0FBF0] border border-[#2A7A2A] text-sm font-sans text-[#2A7A2A]"
        style={{ borderRadius: "2px" }}
      >
        ✓ Client accepted the estimate of{" "}
        <strong>${currentAmount?.toFixed(2)}</strong>
      </div>
    );
  }

  const inputClass =
    "w-full px-3 py-2 bg-[#F8F6F1] border border-[rgba(42,36,33,0.15)] text-sm font-sans text-[#2A2421] focus:outline-none focus:border-[#11B2E8] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {alreadySent && (
        <div
          className="p-3 bg-[#FFF8F0] border border-[#A65D37] text-xs font-sans text-[#A65D37]"
          style={{ borderRadius: "2px" }}
        >
          Estimate already sent — resubmitting will update it.
        </div>
      )}
      <div>
        <label className="block text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-1.5">
          Estimate Amount ($)
        </label>
        <input
          name="bid_amount"
          type="number"
          min="0"
          step="0.01"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g. 1200.00"
          className={inputClass}
          style={{ borderRadius: "2px" }}
        />
      </div>
      <div>
        <label className="block text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-1.5">
          Description / Scope
        </label>
        <textarea
          name="bid_notes"
          rows={5}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Describe the work included in this estimate…"
          className={inputClass + " resize-y"}
          style={{ borderRadius: "2px" }}
        />
      </div>
      <div>
        <label className="block text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-1.5">
          Attach File{" "}
          <span className="normal-case font-normal tracking-normal">
            (PDF or image, optional)
          </span>
        </label>
        <input
          name="bid_file"
          type="file"
          accept=".pdf,image/*"
          className="text-sm font-sans text-[#2A2421] file:mr-3 file:px-3 file:py-1.5 file:border file:border-[rgba(42,36,33,0.2)] file:bg-[#F8F6F1] file:text-xs file:font-sans file:font-semibold file:uppercase file:tracking-widest file:text-[#2A2421] hover:file:border-[#11B2E8] file:transition-colors file:cursor-pointer"
        />
      </div>
      <button
        type="submit"
        disabled={status === "saving"}
        className="px-6 py-2.5 bg-[#11B2E8] text-white text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#0e96c4] disabled:opacity-60 transition-colors"
        style={{ borderRadius: "2px" }}
      >
        {status === "saving"
          ? "Sending…"
          : alreadySent
            ? "Update & Resend Estimate"
            : "Send Estimate to Client"}
      </button>
      {status === "done" && (
        <p className="text-xs font-sans text-[#2A7A2A]">Estimate sent ✓</p>
      )}
      {status === "error" && (
        <p className="text-xs font-sans text-[#A65D37]">
          Something went wrong — try again.
        </p>
      )}
    </form>
  );
}
