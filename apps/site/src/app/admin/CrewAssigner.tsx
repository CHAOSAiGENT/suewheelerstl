"use client";

import { useState } from "react";
import type { CrewMember } from "@/lib/types";

interface Props {
  submissionId: string;
  allCrew: CrewMember[];
  initialAssigned: string[]; // crew member IDs
}

export function CrewAssigner({
  submissionId,
  allCrew,
  initialAssigned,
}: Props) {
  const [assigned, setAssigned] = useState<string[]>(initialAssigned);
  const [saving, setSaving] = useState(false);

  async function toggle(id: string) {
    const next = assigned.includes(id)
      ? assigned.filter((x) => x !== id)
      : [...assigned, id];
    setAssigned(next);
    setSaving(true);
    try {
      await fetch(`/api/admin/submissions/${submissionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ crew_member_ids: next }),
      });
    } finally {
      setSaving(false);
    }
  }

  if (allCrew.length === 0) {
    return (
      <p className="text-sm font-sans text-[#9e9087] italic">
        No crew members. Add some in{" "}
        <a href="/admin/settings" className="text-[#11B2E8] hover:underline">
          Settings
        </a>
        .
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {allCrew.map((member) => {
        const isOn = assigned.includes(member.id);
        return (
          <button
            key={member.id}
            onClick={() => toggle(member.id)}
            disabled={saving}
            className="px-3 py-1.5 text-xs font-sans font-semibold uppercase tracking-wider border transition-colors"
            style={{
              borderRadius: "2px",
              background: isOn ? "#2A2421" : "#F8F6F1",
              color: isOn ? "white" : "#6B5E55",
              borderColor: isOn ? "#2A2421" : "rgba(42,36,33,0.2)",
            }}
          >
            {member.name}
          </button>
        );
      })}
    </div>
  );
}
