"use client";

import { useDroppable } from "@dnd-kit/core";
import type { Submission, SubmissionStatus, CrewMember } from "@/lib/types";
import { STATUS_LABELS, STATUS_COLORS } from "@/lib/types";
import { KanbanCard } from "./KanbanCard";

interface Props {
  column: SubmissionStatus;
  submissions: Submission[];
  crew: CrewMember[];
  onRemove: (id: string) => void;
}

export function KanbanColumn({ column, submissions, crew, onRemove }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id: column });

  const isLost = column === "lost";
  const color = STATUS_COLORS[column];

  return (
    <div
      className="flex-shrink-0 w-[220px] flex flex-col"
      style={{ opacity: isLost ? 0.75 : 1 }}
    >
      {/* Column header */}
      <div
        className="flex items-center justify-between px-3 py-2 mb-2"
        style={{
          borderTop: `3px solid ${color}`,
          background: "#F8F6F1",
        }}
      >
        <span
          className="text-xs font-sans font-semibold uppercase tracking-widest"
          style={{ color }}
        >
          {STATUS_LABELS[column]}
        </span>
        <span className="text-xs font-sans text-[#9e9087]">
          {submissions.length}
        </span>
      </div>

      {/* Drop zone */}
      <div
        ref={setNodeRef}
        className="flex-1 flex flex-col gap-2 px-1 py-1 rounded transition-colors"
        style={{
          background: isOver ? "rgba(17,178,232,0.06)" : "transparent",
          minHeight: 80,
        }}
      >
        {submissions.map((s) => (
          <KanbanCard
            key={s.id}
            submission={s}
            crew={crew}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}
