"use client";

interface Props {
  archivableCount: number;
  archivedCount: number;
}

export function ArchiveSection({ archivableCount, archivedCount }: Props) {
  return (
    <div>
      <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-4">
        Archive
      </h2>
      <dl className="space-y-3 text-sm font-sans">
        <div className="flex gap-4">
          <dt className="text-[#9e9087] w-32 shrink-0 text-xs pt-0.5">
            Ready to Archive
          </dt>
          <dd className="text-[#2A2421]">{archivableCount} submissions</dd>
        </div>
        <div className="flex gap-4">
          <dt className="text-[#9e9087] w-32 shrink-0 text-xs pt-0.5">
            Already Archived
          </dt>
          <dd className="text-[#2A2421]">{archivedCount} submissions</dd>
        </div>
      </dl>
    </div>
  );
}
