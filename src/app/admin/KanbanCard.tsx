"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { Submission, CrewMember } from "@/lib/types";

interface Props {
  submission: Submission;
  crew: CrewMember[];
  isDragging?: boolean;
}

function formatAddress(address: string | null): string {
  if (!address) return "";
  return address;
}

function lastName(name: string): string {
  const parts = name.trim().split(" ");
  return parts[parts.length - 1];
}

function formatStartDate(dateStr: string | null): string {
  if (!dateStr) return "START TBD";
  const d = new Date(dateStr);
  return `START ${d
    .toLocaleDateString("en-US", { month: "short", day: "numeric" })
    .toUpperCase()}`;
}

export function KanbanCard({ submission, crew, isDragging }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: submission.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    cursor: isDragging ? "grabbing" : "grab",
  };

  const assignedCrew = crew.filter((c) =>
    submission.crew_member_ids.includes(c.id),
  );

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white border border-[rgba(42,36,33,0.12)] p-3 rounded-sm shadow-sm hover:shadow-md transition-shadow select-none"
    >
      {/* Last name */}
      <div className="font-sans font-bold text-sm text-[#2A2421] mb-0.5">
        {lastName(submission.name)}
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
        <div className="text-[10px] font-sans italic text-[#9e9087] leading-tight truncate">
          {submission.admin_notes}
        </div>
      )}

      {/* Link to detail */}
      <a
        href={`/admin/${submission.id}`}
        className="block mt-2 text-[9px] font-sans text-[#11B2E8] uppercase tracking-widest hover:underline"
        onClick={(e) => e.stopPropagation()}
      >
        View →
      </a>
    </div>
  );
}
