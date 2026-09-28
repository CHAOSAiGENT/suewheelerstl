"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import type { LostReason } from "@/lib/types";

interface Props {
  open: boolean;
  onConfirm: (reason: LostReason, note: string) => void;
  onCancel: () => void;
}

const REASONS: { value: LostReason; label: string }[] = [
  { value: "price", label: "Price — too high" },
  { value: "timing", label: "Timing — couldn't schedule" },
  { value: "competitor", label: "Competitor — chose someone else" },
  { value: "unknown", label: "Unknown" },
];

const inputClass =
  "w-full px-3 py-2 bg-[#F8F6F1] border border-[rgba(42,36,33,0.15)] text-sm font-sans text-[#2A2421] focus:outline-none focus:border-[#11B2E8] transition-colors";

export function LostReasonModal({ open, onConfirm, onCancel }: Props) {
  const [reason, setReason] = useState<LostReason>("unknown");
  const [note, setNote] = useState("");

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Dialog.Content
          className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 w-full max-w-sm shadow-xl"
          style={{ borderRadius: "3px" }}
        >
          <Dialog.Title
            className="font-serif text-xl text-[#2A2421] mb-1"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Mark as Lost
          </Dialog.Title>
          <Dialog.Description className="text-sm font-sans text-[#6B5E55] mb-5">
            Why didn&apos;t this job move forward?
          </Dialog.Description>

          <div className="space-y-3 mb-5">
            {REASONS.map((r) => (
              <label
                key={r.value}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="lost_reason"
                  value={r.value}
                  checked={reason === r.value}
                  onChange={() => setReason(r.value)}
                  className="accent-[#11B2E8]"
                />
                <span className="text-sm font-sans text-[#2A2421]">
                  {r.label}
                </span>
              </label>
            ))}
          </div>

          <div className="mb-5">
            <label className="block text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-1.5">
              Note{" "}
              <span className="normal-case font-normal tracking-normal">
                (optional)
              </span>
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              className={inputClass + " resize-none"}
              style={{ borderRadius: "2px" }}
              placeholder="Any context worth remembering…"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onConfirm(reason, note)}
              className="flex-1 py-2.5 bg-[#2A2421] text-white text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#3a3431] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Mark Lost
            </button>
            <button
              onClick={onCancel}
              className="flex-1 py-2.5 border border-[rgba(42,36,33,0.2)] text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] hover:border-[#2A2421] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Cancel
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
