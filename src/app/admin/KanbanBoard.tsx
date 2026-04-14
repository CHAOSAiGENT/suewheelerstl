"use client";

import { useState, useCallback } from "react";
import {
  DndContext,
  DragOverlay,
  closestCenter,
  type DragStartEvent,
  type DragEndEvent,
} from "@dnd-kit/core";
import type {
  Submission,
  CrewMember,
  SubmissionStatus,
  LostReason,
} from "@/lib/types";
import { KANBAN_COLUMNS } from "@/lib/types";
import { KanbanColumn } from "./KanbanColumn";
import { KanbanCard } from "./KanbanCard";
import { LostReasonModal } from "./LostReasonModal";
import { FinishingGateModal } from "./FinishingGateModal";

interface Props {
  initialSubmissions: Submission[];
  crew: CrewMember[];
}

export function KanbanBoard({ initialSubmissions, crew }: Props) {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [draggingId, setDraggingId] = useState<string | null>(null);

  // Lost reason modal state
  const [lostModal, setLostModal] = useState<{
    submissionId: string;
    targetColumn: SubmissionStatus;
  } | null>(null);

  // Finishing gate modal state
  const [finishingGate, setFinishingGate] = useState<{
    submissionId: string;
    missingAfterPhotos: boolean;
    missingPayment: boolean;
  } | null>(null);

  const getById = (id: string) => submissions.find((s) => s.id === id);

  const applyMove = useCallback(
    async (
      submissionId: string,
      newStatus: SubmissionStatus,
      extra?: { lost_reason?: LostReason; lost_note?: string },
    ) => {
      // Optimistic update
      setSubmissions((prev) =>
        prev.map((s) =>
          s.id === submissionId ? { ...s, status: newStatus, ...extra } : s,
        ),
      );

      try {
        const res = await fetch(`/api/admin/submissions/${submissionId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus, ...extra }),
        });
        if (!res.ok) throw new Error("PATCH failed");
      } catch {
        // Revert
        setSubmissions((prev) =>
          prev.map((s) =>
            s.id === submissionId
              ? (initialSubmissions.find((i) => i.id === submissionId) ?? s)
              : s,
          ),
        );
      }
    },
    [initialSubmissions],
  );

  const handleDragStart = ({ active }: DragStartEvent) => {
    setDraggingId(active.id as string);
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    setDraggingId(null);
    if (!over) return;

    const submissionId = active.id as string;
    const newStatus = over.id as SubmissionStatus;
    const submission = getById(submissionId);
    if (!submission || submission.status === newStatus) return;

    // Gate: dropping into Lost → open modal first
    if (newStatus === "lost") {
      setLostModal({ submissionId, targetColumn: newStatus });
      return;
    }

    // Gate: finishing → fully_complete with soft warning
    if (
      submission.status === "finishing" &&
      newStatus === "fully_complete" &&
      (!submission.after_photos_uploaded || !submission.final_payment_confirmed)
    ) {
      setFinishingGate({
        submissionId,
        missingAfterPhotos: !submission.after_photos_uploaded,
        missingPayment: !submission.final_payment_confirmed,
      });
      return;
    }

    applyMove(submissionId, newStatus);
  };

  const draggingSubmission = draggingId ? getById(draggingId) : null;

  const byColumn = (col: SubmissionStatus) =>
    submissions.filter((s) => s.status === col);

  return (
    <>
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-3 px-4 pb-8 overflow-x-auto min-h-[calc(100vh-120px)]">
          {KANBAN_COLUMNS.map((col) => (
            <KanbanColumn
              key={col}
              column={col}
              submissions={byColumn(col)}
              crew={crew}
            />
          ))}
        </div>
        <DragOverlay>
          {draggingSubmission && (
            <KanbanCard
              submission={draggingSubmission}
              crew={crew}
              isDragging
            />
          )}
        </DragOverlay>
      </DndContext>

      {lostModal && (
        <LostReasonModal
          open
          onConfirm={(reason, note) => {
            applyMove(lostModal.submissionId, "lost", {
              lost_reason: reason,
              lost_note: note || undefined,
            });
            setLostModal(null);
          }}
          onCancel={() => setLostModal(null)}
        />
      )}

      {finishingGate && (
        <FinishingGateModal
          open
          missingAfterPhotos={finishingGate.missingAfterPhotos}
          missingPayment={finishingGate.missingPayment}
          onConfirm={() => {
            applyMove(finishingGate.submissionId, "fully_complete");
            setFinishingGate(null);
          }}
          onCancel={() => setFinishingGate(null)}
        />
      )}
    </>
  );
}
