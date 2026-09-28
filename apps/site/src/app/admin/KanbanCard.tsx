"use client";

import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Archive, Trash2 } from "lucide-react";
import type { Submission, CrewMember } from "@/lib/types";

interface Props {
  submission: Submission;
  crew: CrewMember[];
  isDragging?: boolean;
  onRemove?: (id: string) => void;
}

function formatAddress(address: string | null): string {
  if (!address) return "";
  return address;
}

function formatStartDate(dateStr: string | null): string {
  if (!dateStr) return "START TBD";
  const d = new Date(dateStr);
  return `START ${d
    .toLocaleDateString("en-US", { month: "short", day: "numeric" })
    .toUpperCase()}`;
}

export function KanbanCard({ submission, crew, isDragging, onRemove }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: submission.id,
  });
  const [confirmDelete, setConfirmDelete] = useState(false);

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    cursor: isDragging ? "grabbing" : "grab",
  };

  const assignedCrew = crew.filter((c) =>
    submission.crew_member_ids.includes(c.id),
  );

  async function handleArchive(e: React.MouseEvent) {
    e.stopPropagation();
    try {
      const res = await fetch(`/api/admin/submissions/${submission.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ archived_at: new Date().toISOString() }),
      });
      if (res.ok) onRemove?.(submission.id);
    } catch {
      /* revert silently */
    }
  }

  async function handleDelete(e: React.MouseEvent) {
    e.stopPropagation();
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }
    try {
      const res = await fetch(`/api/admin/submissions/${submission.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ archived_at: new Date().toISOString() }),
      });
      if (res.ok) onRemove?.(submission.id);
    } catch {
      /* revert silently */
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white border border-[rgba(42,36,33,0.12)] p-3 rounded-sm shadow-sm hover:shadow-md transition-shadow select-none group"
    >
      {/* Full name */}
      <div className="font-sans font-bold text-sm text-[#2A2421] mb-0.5">
        {submission.name}
      </div>

      {/* Address */}
      {submission.address && (
        <div className="text-xs font-sans text-[#6B5E55] mb-1.5 leading-tight">
          {formatAddress(submission.address)}
        </div>
      )}

      {/* Start date badge */}
      <div className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#9e9087] mb-1.5">
        {formatStartDate(submission.bid_start_date)}
      </div>

      {/* Bid amount */}
      {submission.bid_amount != null && (
        <div className="text-xs font-sans font-semibold text-[#2A7A2A] mb-1.5">
          ${submission.bid_amount.toLocaleString()}
        </div>
      )}

      {/* Crew tags */}
      {assignedCrew.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-1.5">
          {assignedCrew.map((c) => (
            <span
              key={c.id}
              className="text-[9px] font-sans px-1.5 py-0.5 bg-[#EBE6DE] text-[#6B5E55] rounded-sm"
            >
              {c.name}
            </span>
          ))}
        </div>
      )}

      {/* Last note snippet */}
      {submission.admin_notes && (
        <div className="text-[10px] font-sans italic text-[#9e9087] leading-tight line-clamp-2 mt-1">
          {submission.admin_notes}
        </div>
      )}

      {/* Actions row */}
      <div className="flex items-center justify-between mt-2.5">
        <a
          href={`/admin/${submission.id}`}
          className="px-3 py-1.5 text-center text-xs font-sans font-semibold text-[#11B2E8] border border-[#11B2E8] hover:bg-[#11B2E8] hover:text-white transition-colors"
          style={{ borderRadius: "2px" }}
          onClick={(e) => e.stopPropagation()}
        >
          View
        </a>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            title="Archive"
            onClick={handleArchive}
            onPointerDown={(e) => e.stopPropagation()}
            className="p-1.5 text-[#9e9087] hover:text-[#6B5E55] transition-colors"
          >
            <Archive size={14} />
          </button>
          <button
            type="button"
            title={confirmDelete ? "Click again to confirm" : "Delete"}
            onClick={handleDelete}
            onPointerDown={(e) => e.stopPropagation()}
            onBlur={() => setConfirmDelete(false)}
            className={`p-1.5 transition-colors ${
              confirmDelete
                ? "text-[#A65D37]"
                : "text-[#9e9087] hover:text-[#A65D37]"
            }`}
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
