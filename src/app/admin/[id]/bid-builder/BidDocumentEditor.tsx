"use client";

import type { BidBlockDraft } from "@/lib/bid/types";

interface Props {
  submissionId: string;
  blocks: BidBlockDraft[];
  onBlocksChange: (blocks: BidBlockDraft[]) => void;
  photoUrls: string[];
}

export function BidDocumentEditor({ blocks }: Props) {
  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "16px",
        background: "white",
      }}
    >
      {blocks.length === 0 ? (
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
      ) : (
        <div style={{ color: "#6B5E55", fontSize: 12 }}>
          {blocks.length} block{blocks.length !== 1 ? "s" : ""} — full editor
          coming in next step
        </div>
      )}
    </div>
  );
}
