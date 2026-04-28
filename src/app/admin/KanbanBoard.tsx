"use client";

import { useState, useCallback } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  closestCenter,
  useDroppable,
  type DragStartEvent,
  type DragEndEvent,
  type CollisionDetection,
} from "@dnd-kit/core";
import { Archive } from "lucide-react";
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
import { NewLeadModal } from "./NewLeadModal";

// Prioritize archive zone when cursor is over it, otherwise fall back to closestCenter
const archiveFirstCollision: CollisionDetection = (args) => {
  const { droppableContainers, pointerCoordinates } = args;
  if (!pointerCoordinates) return closestCenter(args);

  const archiveContainer = droppableContainers.find((c) => c.id === "archive");
  if (archiveContainer?.rect.current) {
    const rect = archiveContainer.rect.current;
    const { x, y } = pointerCoordinates;
    if (
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
    ) {
      return [
        { id: "archive", data: { droppableContainer: archiveContainer } },
      ];
    }
  }

  return closestCenter(args);
};

interface Props {
  initialSubmissions: Submission[];
  crew: CrewMember[];
}

export function KanbanBoard({ initialSubmissions, crew }: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor),
  );

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

  const [newLeadOpen, setNewLeadOpen] = useState(false);

  const getById = (id: string) => submissions.find((s) => s.id === id);

  const applyMove = useCallback(
    async (
      submissionId: string,
      newStatus: SubmissionStatus,
      extra?: { lost_reason?: LostReason; lost_note?: string },
    ) => {
      // Snapshot before move for accurate revert
      let preMoveSubs: Submission[] = [];
      setSubmissions((prev) => {
        preMoveSubs = prev;
        return prev.map((s) =>
          s.id === submissionId ? { ...s, status: newStatus, ...extra } : s,
        );
      });

      try {
        const res = await fetch(`/api/admin/submissions/${submissionId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus, ...extra }),
        });
        if (!res.ok) throw new Error("PATCH failed");
      } catch {
        setSubmissions(preMoveSubs);
      }
    },
    [],
  );

  const archiveSubmission = useCallback(async (submissionId: string) => {
    let preArchiveSubs: Submission[] = [];
    setSubmissions((prev) => {
      preArchiveSubs = prev;
      return prev.filter((s) => s.id !== submissionId);
    });

    try {
      const res = await fetch(`/api/admin/submissions/${submissionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ archived_at: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error("Archive failed");
    } catch {
      setSubmissions(preArchiveSubs);
    }
  }, []);

  const handleDragStart = ({ active }: DragStartEvent) => {
    setDraggingId(active.id as string);
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    setDraggingId(null);
    if (!over) return;

    const submissionId = active.id as string;

    // Archive drop target
    if (over.id === "archive") {
      archiveSubmission(submissionId);
      return;
    }

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

  function handleNewLead(submission: Submission) {
    setSubmissions((prev) => [submission, ...prev]);
    setNewLeadOpen(false);
  }

  const draggingSubmission = draggingId ? getById(draggingId) : null;

  const byColumn = (col: SubmissionStatus) =>
    submissions.filter((s) => s.status === col);

  return (
    <>
      {/* Board header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(42,36,33,0.08)]">
        <h1
          className="text-lg text-[#2A2421]"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 400,
          }}
        >
          Pipeline
        </h1>
        <button
          type="button"
          onClick={() => setNewLeadOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#11B2E8] text-white text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
          style={{ borderRadius: "2px" }}
        >
          + New Lead
        </button>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={archiveFirstCollision}
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
        {/* Archive drop zone — only visible while dragging */}
        {draggingId && <ArchiveDropZone />}

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

      {newLeadOpen && (
        <NewLeadModal
          onClose={() => setNewLeadOpen(false)}
          onCreated={handleNewLead}
        />
      )}
    </>
  );
}

function ArchiveDropZone() {
  const { setNodeRef, isOver } = useDroppable({ id: "archive" });

  return (
    <div
      ref={setNodeRef}
      className="fixed bottom-0 left-0 right-0 flex items-center justify-center gap-3 transition-all z-50"
      style={{
        height: isOver ? 100 : 72,
        borderTop: `2px dashed ${isOver ? "#A65D37" : "rgba(42,36,33,0.25)"}`,
        background: isOver ? "rgba(166,93,55,0.1)" : "rgba(235,230,222,0.97)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Archive size={22} style={{ color: isOver ? "#A65D37" : "#6B5E55" }} />
      <span
        className="text-sm font-sans font-semibold uppercase tracking-widest"
        style={{ color: isOver ? "#A65D37" : "#6B5E55" }}
      >
        {isOver ? "Drop to archive" : "Archive Record"}
      </span>
    </div>
  );
}
