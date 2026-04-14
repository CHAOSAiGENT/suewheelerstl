import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import type { CrewMember } from "@/lib/types";
import { CrewRoster } from "../CrewRoster";
import { ArchiveSection } from "./ArchiveSection";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  if (!user) redirect("/admin/login");

  const supabase = createServiceSupabaseClient();

  const [crewResult, archivableResult, archivedCountResult] = await Promise.all(
    [
      supabase
        .from("crew_members")
        .select("*")
        .eq("active", true)
        .order("name"),
      supabase
        .from("submissions")
        .select("id", { count: "exact" })
        .in("status", ["fully_complete", "lost"])
        .lt(
          "updated_at",
          new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
        )
        .is("archived_at", null),
      supabase
        .from("submissions")
        .select("id", { count: "exact" })
        .not("archived_at", "is", null),
    ],
  );

  const crew = (crewResult.data ?? []) as CrewMember[];
  const archivableCount = archivableResult.count ?? 0;
  const archivedCount = archivedCountResult.count ?? 0;

  return (
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#6B5E55] mb-8">
        Settings
      </h1>

      {/* Crew Roster */}
      <div
        className="bg-white border border-[rgba(42,36,33,0.1)] p-6 mb-6"
        style={{ borderRadius: 3 }}
      >
        <CrewRoster initialCrew={crew} />
      </div>

      {/* Archive */}
      <div
        className="bg-white border border-[rgba(42,36,33,0.1)] p-6"
        style={{ borderRadius: 3 }}
      >
        <ArchiveSection
          archivableCount={archivableCount}
          archivedCount={archivedCount}
        />
      </div>
    </div>
  );
}
