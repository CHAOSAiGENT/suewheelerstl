"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { SubmissionStatus } from "@/lib/types";
import { STATUS_LABELS, STATUS_COLORS } from "@/lib/types";

export function StatusUpdater({
  submissionId,
  currentStatus,
}: {
  submissionId: string;
  currentStatus: SubmissionStatus;
}) {
  const [status, setStatus] = useState(currentStatus);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value as SubmissionStatus;
    setStatus(newStatus);
    setSaving(true);
    try {
      await fetch(`/api/admin/submissions/${submissionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      router.refresh();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex items-center gap-2 shrink-0">
      <span
        className="w-2.5 h-2.5 rounded-full shrink-0"
        style={{ background: STATUS_COLORS[status] }}
      />
      <select
        value={status}
        onChange={handleChange}
        disabled={saving}
        className="text-xs font-sans font-semibold uppercase tracking-widest border px-3 py-2 focus:outline-none focus:border-[#11B2E8] transition-colors bg-white disabled:opacity-60"
        style={{
          borderRadius: "2px",
          borderColor: STATUS_COLORS[status],
          color: STATUS_COLORS[status],
        }}
      >
        {Object.entries(STATUS_LABELS).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
      {saving && (
        <span className="text-xs font-sans text-[#9e9087]">Saving…</span>
      )}
    </div>
  );
}
