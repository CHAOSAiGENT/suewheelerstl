"use client";

import { useState } from "react";
import type { CrewMember } from "@/lib/types";

interface Props {
  initialCrew: CrewMember[];
}

export function CrewRoster({ initialCrew }: Props) {
  const [crew, setCrew] = useState(initialCrew);
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleAdd() {
    const name = newName.trim();
    if (!name) return;
    setSaving(true);
    try {
      const res = await fetch("/api/admin/crew", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) throw new Error("Failed");
      const { member } = await res.json();
      setCrew((prev) =>
        [...prev, member].sort((a, b) => a.name.localeCompare(b.name)),
      );
      setNewName("");
      setAdding(false);
    } finally {
      setSaving(false);
    }
  }

  async function handleRemove(id: string) {
    const prev = crew;
    setCrew((c) => c.filter((m) => m.id !== id));
    try {
      const res = await fetch(`/api/admin/crew/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed");
    } catch {
      setCrew(prev);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-sans font-semibold uppercase tracking-widest text-[#6B5E55]">
          Crew Roster
        </h2>
        {!adding && (
          <button
            onClick={() => setAdding(true)}
            className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] hover:underline"
          >
            + Add
          </button>
        )}
      </div>

      {adding && (
        <div className="flex gap-2 mb-4">
          <input
            autoFocus
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAdd();
              if (e.key === "Escape") {
                setAdding(false);
                setNewName("");
              }
            }}
            placeholder="Name…"
            className="flex-1 px-3 py-2 bg-[#F8F6F1] border border-[rgba(42,36,33,0.15)] text-sm font-sans text-[#2A2421] focus:outline-none focus:border-[#11B2E8] transition-colors"
            style={{ borderRadius: "2px" }}
          />
          <button
            onClick={handleAdd}
            disabled={saving || !newName.trim()}
            className="px-4 py-2 bg-[#2A2421] text-white text-xs font-sans font-semibold uppercase tracking-widest disabled:opacity-40"
            style={{ borderRadius: "2px" }}
          >
            {saving ? "…" : "Save"}
          </button>
          <button
            onClick={() => {
              setAdding(false);
              setNewName("");
            }}
            className="px-3 py-2 border border-[rgba(42,36,33,0.2)] text-xs font-sans text-[#6B5E55]"
            style={{ borderRadius: "2px" }}
          >
            ✕
          </button>
        </div>
      )}

      {crew.length === 0 && !adding && (
        <p className="text-sm font-sans text-[#9e9087] italic">
          No crew members yet.
        </p>
      )}

      <ul className="space-y-2">
        {crew.map((member) => (
          <li
            key={member.id}
            className="flex items-center justify-between py-2 border-b border-[rgba(42,36,33,0.08)]"
          >
            <span className="text-sm font-sans text-[#2A2421]">
              {member.name}
            </span>
            <button
              onClick={() => handleRemove(member.id)}
              className="text-xs font-sans text-[#9e9087] hover:text-[#A65D37] transition-colors"
            >
              × Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
