"use client";

import { useState } from "react";
import type { CopyblockLibrary, CopyblockCategory } from "@/lib/bid/types";

interface Props {
  library: CopyblockLibrary;
  onAddBlock: (category: CopyblockCategory, blockKey: string) => void;
}

export function LibraryPicker({ library, onAddBlock }: Props) {
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>(
    library[0]?.key ?? "",
  );

  const activeCategory = library.find((c) => c.key === activeCategoryKey);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Category list */}
      <div
        style={{
          background: "#F8F6F1",
          borderBottom: "1px solid #E5E0DB",
          padding: "8px 10px 0",
          flexShrink: 0,
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
          Library
        </div>
        <div style={{ maxHeight: 140, overflowY: "auto" }}>
          {library.map((cat) => (
            <div
              key={cat.key}
              onClick={() => setActiveCategoryKey(cat.key)}
              style={{
                padding: "4px 8px",
                fontSize: 10,
                cursor: "pointer",
                fontWeight: cat.key === activeCategoryKey ? 700 : 400,
                color: cat.key === activeCategoryKey ? "#11B2E8" : "#6B5E55",
                background:
                  cat.key === activeCategoryKey
                    ? "rgba(17,178,232,0.08)"
                    : "transparent",
                borderRadius: 2,
                marginBottom: 1,
              }}
            >
              {cat.label}
            </div>
          ))}
        </div>
      </div>

      {/* Block list for active category */}
      <div
        style={{ flex: 1, overflowY: "auto", padding: 8, background: "white" }}
      >
        <div
          style={{
            fontSize: 9,
            color: "#9e9087",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            marginBottom: 5,
          }}
        >
          Click to add ↓
        </div>
        {activeCategory?.blocks.map((block) => (
          <div
            key={block.key}
            onClick={() =>
              activeCategory && onAddBlock(activeCategory, block.key)
            }
            style={{
              border: "1px solid #E5E0DB",
              borderRadius: 2,
              padding: "6px 8px",
              marginBottom: 4,
              cursor: "pointer",
              background: "#F8F6F1",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#EBE6DE")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#F8F6F1")}
          >
            <div
              style={{
                fontWeight: 700,
                color: "#2A2421",
                marginBottom: 2,
                fontSize: 10,
              }}
            >
              {block.title}
            </div>
            <div
              style={{
                color: "#9e9087",
                fontSize: 9,
                lineHeight: 1.4,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {block.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
