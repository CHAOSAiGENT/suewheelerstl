"use client";

import { useState, useCallback } from "react";
import type { Submission, BidBlock } from "@/lib/types";
import type {
  CopyblockLibrary,
  CopyblockCategory,
  BidBlockDraft,
} from "@/lib/bid/types";
import { v4 as uuid } from "uuid";
import { LibraryPicker } from "./LibraryPicker";
import { BidDocumentEditor } from "./BidDocumentEditor";
import { PhotosPanel } from "./PhotosPanel";

interface Props {
  submission: Submission;
  initialBlocks: BidBlock[];
  library: CopyblockLibrary;
}

function lastName(name: string) {
  const parts = name.trim().split(" ");
  return parts[parts.length - 1];
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "TBD";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function BidBuilderClient({
  submission,
  initialBlocks,
  library,
}: Props) {
  // Convert DB blocks to draft format
  const toDraft = (b: BidBlock): BidBlockDraft => ({
    id: b.id,
    source_key: b.source_key,
    title: b.title,
    body: b.body,
    photo_paths: b.photo_paths,
    sort_order: b.sort_order,
  });

  const [blocks, setBlocks] = useState<BidBlockDraft[]>(
    initialBlocks.map(toDraft),
  );
  const [bidAmount, setBidAmount] = useState<string>(
    submission.bid_amount != null ? String(submission.bid_amount) : "",
  );
  const [startDate, setStartDate] = useState<string>(
    submission.bid_start_date ?? "",
  );
  const [generating, setGenerating] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  // Add block from library click
  const handleAddBlock = useCallback(
    async (category: CopyblockCategory, blockKey: string) => {
      const libBlock = category.blocks.find((b) => b.key === blockKey);
      if (!libBlock) return;

      const sort_order = blocks.length;
      const tempId = uuid();

      // Optimistic add
      const draft: BidBlockDraft = {
        id: tempId,
        source_key: libBlock.key,
        title: libBlock.title,
        body: libBlock.body,
        photo_paths: [],
        sort_order,
      };
      setBlocks((prev) => [...prev, draft]);

      // Persist
      try {
        const res = await fetch("/api/admin/bid/blocks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            submission_id: submission.id,
            source_key: libBlock.key,
            title: libBlock.title,
            body: libBlock.body,
            sort_order,
          }),
        });
        if (res.ok) {
          const { block } = await res.json();
          // Replace temp id with real DB id
          setBlocks((prev) =>
            prev.map((b) => (b.id === tempId ? { ...b, id: block.id } : b)),
          );
        }
      } catch {
        // Remove temp block on error
        setBlocks((prev) => prev.filter((b) => b.id !== tempId));
      }
    },
    [blocks.length, submission.id],
  );

  const handlePreviewPdf = async () => {
    setGenerating(true);
    try {
      const res = await fetch("/api/admin/bid/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submission_id: submission.id,
          bid_amount: bidAmount ? parseFloat(bidAmount) : null,
          bid_start_date: startDate || null,
          send: false,
        }),
      });
      if (res.ok) {
        const { url } = await res.json();
        window.open(url, "_blank");
      }
    } finally {
      setGenerating(false);
    }
  };

  const handleSendToClient = async () => {
    setSending(true);
    setSendError(null);
    try {
      const res = await fetch("/api/admin/bid/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submission_id: submission.id,
          bid_amount: bidAmount ? parseFloat(bidAmount) : null,
          bid_start_date: startDate || null,
          send: true,
        }),
      });
      if (!res.ok) {
        setSendError("Failed to send — please try again.");
      }
    } catch {
      setSendError("Network error — please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full px-2.5 py-1.5 bg-white border border-[rgba(42,36,33,0.15)] text-sm font-sans text-[#2A2421] focus:outline-none focus:border-[#11B2E8] transition-colors";

  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 60px)",
        fontFamily: "sans-serif",
        fontSize: "13px",
      }}
    >
      {/* LEFT SIDEBAR */}
      <div
        style={{
          width: 240,
          flexShrink: 0,
          borderRight: "1px solid #E5E0DB",
          display: "flex",
          flexDirection: "column",
          background: "#F8F6F1",
          overflow: "hidden",
        }}
      >
        {/* Client info panel */}
        <div
          style={{
            padding: "12px 12px 8px",
            borderBottom: "1px solid #E5E0DB",
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: "#6B5E55",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: 6,
            }}
          >
            Client
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "#2A2421",
              marginBottom: 2,
            }}
          >
            {lastName(submission.name)}
          </div>
          {submission.address && (
            <div style={{ fontSize: 11, color: "#6B5E55", marginBottom: 2 }}>
              {submission.address}
            </div>
          )}
          {submission.phone && (
            <div style={{ fontSize: 11, color: "#9e9087" }}>
              {submission.phone}
            </div>
          )}
        </div>

        {/* Photos panel */}
        <PhotosPanel photoUrls={submission.photo_urls} />

        {/* Library picker — flex:1 scrollable */}
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <LibraryPicker library={library} onAddBlock={handleAddBlock} />
        </div>

        {/* Footer — Amount + Start Date */}
        <div
          style={{
            borderTop: "1px solid #E5E0DB",
            padding: "8px 10px",
            background: "#F8F6F1",
          }}
        >
          <div style={{ marginBottom: 6 }}>
            <label
              style={{
                display: "block",
                fontSize: 9,
                fontWeight: 700,
                color: "#6B5E55",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: 3,
              }}
            >
              Amount
            </label>
            <input
              type="number"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              placeholder="0.00"
              className={inputClass}
              style={{ borderRadius: 2 }}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                fontSize: 9,
                fontWeight: 700,
                color: "#6B5E55",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: 3,
              }}
            >
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={inputClass}
              style={{ borderRadius: 2 }}
            />
          </div>
        </div>
      </div>

      {/* RIGHT: Document area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        {/* Header bar */}
        <div
          style={{
            padding: "10px 16px",
            borderBottom: "1px solid #E5E0DB",
            background: "#FAFAF8",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <div>
            <div style={{ fontWeight: 700, color: "#2A2421", fontSize: 14 }}>
              Estimate — {submission.name}
            </div>
            <div style={{ color: "#9e9087", fontSize: 11, marginTop: 2 }}>
              {blocks.length} block{blocks.length !== 1 ? "s" : ""}
              {startDate && ` · ${formatDate(startDate)} start`}
              {bidAmount && ` · $${parseFloat(bidAmount).toLocaleString()}`}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={handlePreviewPdf}
              disabled={generating}
              style={{
                background: "white",
                border: "1px solid #E5E0DB",
                borderRadius: 2,
                padding: "6px 14px",
                fontSize: 10,
                color: "#6B5E55",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                cursor: generating ? "not-allowed" : "pointer",
                opacity: generating ? 0.6 : 1,
              }}
            >
              {generating ? "Generating…" : "Preview PDF"}
            </button>
            <button
              onClick={handleSendToClient}
              disabled={sending}
              style={{
                background: "#11B2E8",
                border: "none",
                borderRadius: 2,
                padding: "6px 14px",
                fontSize: 10,
                color: "white",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                cursor: sending ? "not-allowed" : "pointer",
                opacity: sending ? 0.6 : 1,
              }}
            >
              {sending ? "Sending…" : "Send to Client"}
            </button>
          </div>
          {sendError && (
            <div style={{ color: "#A65D37", fontSize: 11, marginTop: 4 }}>
              {sendError}
            </div>
          )}
        </div>

        {/* Document editor */}
        <BidDocumentEditor
          submissionId={submission.id}
          blocks={blocks}
          onBlocksChange={setBlocks}
          photoUrls={submission.photo_urls}
        />
      </div>
    </div>
  );
}
