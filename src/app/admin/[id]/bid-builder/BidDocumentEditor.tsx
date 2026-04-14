"use client";

import { useCallback, useRef } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { BidBlockDraft } from "@/lib/bid/types";

interface Props {
  submissionId: string;
  blocks: BidBlockDraft[];
  onBlocksChange: (blocks: BidBlockDraft[]) => void;
  photoUrls: string[];
}

// Debounce helper
function useDebounce<T extends unknown[]>(
  fn: (...args: T) => void,
  delay: number,
) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  return useCallback(
    (...args: T) => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => fn(...args), delay);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fn, delay],
  );
}

interface BlockItemProps {
  block: BidBlockDraft;
  onTitleChange: (id: string, title: string) => void;
  onBodyChange: (id: string, body: string) => void;
  onRemove: (id: string) => void;
}

function BlockItem({
  block,
  onTitleChange,
  onBodyChange,
  onRemove,
}: BlockItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: block.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        border: "1px solid #E5E0DB",
        borderRadius: 3,
        marginBottom: 8,
        overflow: "hidden",
        background: "white",
      }}
    >
      {/* Block header bar */}
      <div
        style={{
          background: "#F8F6F1",
          borderBottom: "1px solid #E5E0DB",
          padding: "5px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
        }}
      >
        {/* Drag handle */}
        <span
          {...attributes}
          {...listeners}
          style={{
            cursor: "grab",
            color: "#C5B9B2",
            fontSize: 14,
            lineHeight: 1,
            userSelect: "none",
            flexShrink: 0,
          }}
          title="Drag to reorder"
        >
          ⠿
        </span>

        {/* Editable title */}
        <input
          type="text"
          value={block.title}
          onChange={(e) => onTitleChange(block.id, e.target.value)}
          style={{
            flex: 1,
            border: "none",
            background: "transparent",
            fontSize: 11,
            fontWeight: 700,
            color: "#6B5E55",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            outline: "none",
            fontFamily: "sans-serif",
          }}
        />

        {/* Source label */}
        <span
          style={{
            fontSize: 9,
            color: "#9e9087",
            fontStyle: "italic",
            flexShrink: 0,
          }}
        >
          {block.source_key}
        </span>

        {/* Remove button */}
        <button
          onClick={() => onRemove(block.id)}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: 11,
            color: "#9e9087",
            fontWeight: 700,
            padding: "0 2px",
            lineHeight: 1,
            flexShrink: 0,
          }}
          title="Remove block"
        >
          ✕
        </button>
      </div>

      {/* Editable body */}
      <div style={{ padding: "8px 10px" }}>
        <textarea
          value={block.body}
          onChange={(e) => onBodyChange(block.id, e.target.value)}
          rows={3}
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            fontSize: 12,
            color: "#2A2421",
            lineHeight: 1.6,
            resize: "vertical",
            background: "transparent",
            fontFamily: "sans-serif",
          }}
        />
      </div>
    </div>
  );
}

export function BidDocumentEditor({
  blocks,
  onBlocksChange,
  photoUrls: _photoUrls,
}: Props) {
  const sensors = useSensors(useSensor(PointerSensor));

  // Auto-save title/body (debounced 500ms)
  const saveBlock = useCallback(
    async (id: string, update: { title?: string; body?: string }) => {
      await fetch(`/api/admin/bid/blocks/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(update),
      });
    },
    [],
  );

  const debouncedSaveTitle = useDebounce(
    (id: string, title: string) => saveBlock(id, { title }),
    500,
  );
  const debouncedSaveBody = useDebounce(
    (id: string, body: string) => saveBlock(id, { body }),
    500,
  );

  const handleTitleChange = (id: string, title: string) => {
    onBlocksChange(blocks.map((b) => (b.id === id ? { ...b, title } : b)));
    debouncedSaveTitle(id, title);
  };

  const handleBodyChange = (id: string, body: string) => {
    onBlocksChange(blocks.map((b) => (b.id === id ? { ...b, body } : b)));
    debouncedSaveBody(id, body);
  };

  const handleRemove = async (id: string) => {
    onBlocksChange(blocks.filter((b) => b.id !== id));
    await fetch(`/api/admin/bid/blocks/${id}`, { method: "DELETE" });
  };

  const handleDragEnd = async ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;

    const oldIndex = blocks.findIndex((b) => b.id === active.id);
    const newIndex = blocks.findIndex((b) => b.id === over.id);
    const reordered = arrayMove(blocks, oldIndex, newIndex).map((b, i) => ({
      ...b,
      sort_order: i,
    }));

    onBlocksChange(reordered);

    // Save new order for each moved block
    await Promise.all(
      reordered.map((b, i) =>
        fetch(`/api/admin/bid/blocks/${b.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sort_order: i }),
        }),
      ),
    );
  };

  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "16px",
        background: "white",
      }}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={blocks.map((b) => b.id)}
          strategy={verticalListSortingStrategy}
        >
          {blocks.map((block) => (
            <BlockItem
              key={block.id}
              block={block}
              onTitleChange={handleTitleChange}
              onBodyChange={handleBodyChange}
              onRemove={handleRemove}
            />
          ))}
        </SortableContext>
      </DndContext>

      {/* Empty state */}
      {blocks.length === 0 && (
        <div
          style={{
            border: "1px dashed #E5E0DB",
            borderRadius: 3,
            padding: 24,
            textAlign: "center",
            color: "#9e9087",
            fontSize: 13,
          }}
        >
          ← Click a block in the library to add it here
        </div>
      )}
    </div>
  );
}
