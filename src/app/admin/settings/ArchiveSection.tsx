"use client";

import { useState } from "react";

interface Props {
  archivableCount: number;
  archivedCount: number;
}

export function ArchiveSection({ archivableCount, archivedCount }: Props) {
  const [archiving, setArchiving] = useState(false);
  const [archived, setArchived] = useState(0);
  const [done, setDone] = useState(false);

  async function handleArchive() {
    if (archivableCount === 0) return;
    setArchiving(true);
    try {
      const res = await fetch("/api/admin/archive", {
        method: "POST",
      });
      if (res.ok) {
        const { count } = await res.json();
        setArchived(count);
        setDone(true);
      }
    } finally {
      setArchiving(false);
    }
  }

  return (
    <div>
      <h2 className="text-sm font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-4">
        Archive
      </h2>

      <p className="text-sm font-sans text-[#6B5E55] mb-4">
        Archive completed and lost jobs that haven&apos;t been updated in over 90 days.
        Archived jobs are hidden from the Kanban board.
      </p>

      <div className="flex items-center gap-4 mb-4">
        <div className="text-sm font-sans text-[#2A2421]">
          <span className="font-semibold">{archivableCount}</span> job
          {archivableCount !== 1 ? "s" : ""} eligible to archive
        </div>
        {archivedCount > 0 && (
          <div className="text-sm font-sans text-[#9e9087]">
            {archivedCount} already archived
          </div>
        )}
      </div>

      {done ? (
        <div className="text-sm font-sans text-[#2A7A2A]">
          ✓ {archived} job{archived !== 1 ? "s" : ""} archived successfully.
        </div>
      ) : (
        <button
          onClick={handleArchive}
          disabled={archiving || archivableCount === 0}
          className="px-5 py-2.5 bg-[#2A2421] text-white text-xs font-sans font-semibold uppercase tracking-widest disabled:opacity-40 hover:bg-[#3a3431] transition-colors"
          style={{ borderRadius: 2 }}
        >
          {archiving ? "Archiving…" : "Archive Completed Jobs"}
        </button>
      )}
    </div>
  );
}
