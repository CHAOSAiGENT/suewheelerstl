import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { redirect } from "next/navigation";
import type { Submission, CrewMember } from "@/lib/types";
import { KanbanBoard } from "./KanbanBoard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  if (!user) redirect("/admin/login");

  const supabase = createServiceSupabaseClient();

  const [submissionsResult, crewResult] = await Promise.all([
    supabase
      .from("submissions")
      .select("*")
      .is("archived_at", null)
      .eq("is_test", false)
      .order("created_at", { ascending: false }),
    supabase.from("crew_members").select("*").eq("active", true).order("name"),
  ]);

  const submissions = (submissionsResult.data ?? []) as Submission[];
  const crew = (crewResult.data ?? []) as CrewMember[];

  return <KanbanBoard initialSubmissions={submissions} crew={crew} />;
}
