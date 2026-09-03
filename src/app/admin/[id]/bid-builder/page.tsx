import { notFound, redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceSupabaseClient } from "@/lib/supabase/service";
import { isAuthorizedAdmin } from "@/lib/auth/admin-guard";
import type { Submission, BidBlock } from "@/lib/types";
import { BidBuilderClient } from "./BidBuilderClient";
import copyblockLibrary from "@/lib/bid/copyblock-library.json";
import type { CopyblockLibrary } from "@/lib/bid/types";

export const dynamic = "force-dynamic";

export default async function BidBuilderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabaseAuth = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabaseAuth.auth.getUser();
  // Authorization, not just authentication — this page reads PII with the
  // service-role key, which bypasses RLS. Middleware should already have
  // caught this; the duplicate check is deliberate defense in depth.
  if (!isAuthorizedAdmin(user)) redirect("/admin/login");

  const supabase = createServiceSupabaseClient();

  const [submissionResult, blocksResult] = await Promise.all([
    supabase.from("submissions").select("*").eq("id", id).single(),
    supabase
      .from("bid_blocks")
      .select("*")
      .eq("submission_id", id)
      .order("sort_order"),
  ]);

  if (submissionResult.error || !submissionResult.data) notFound();

  const submission = submissionResult.data as Submission;
  const blocks = (blocksResult.data ?? []) as BidBlock[];

  return (
    <BidBuilderClient
      submission={submission}
      initialBlocks={blocks}
      library={copyblockLibrary as CopyblockLibrary}
    />
  );
}
