import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { SignOutButtonClient } from "./SignOutButton";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-[#EBE6DE]">
      <nav className="bg-[#2A2421] px-6 py-4 flex items-center justify-between">
        <a
          href="/admin"
          className="text-white font-sans text-sm font-medium hover:text-[#11B2E8] transition-colors"
        >
          Sue Wheeler — Estimate Requests
        </a>
        <div className="flex items-center gap-6">
          <a
            href="/admin/settings"
            className="text-xs font-sans text-[rgba(255,255,255,0.4)] hover:text-white transition-colors uppercase tracking-widest"
          >
            Settings
          </a>
          <a
            href="/"
            target="_blank"
            className="text-xs font-sans text-[rgba(255,255,255,0.4)] hover:text-white transition-colors uppercase tracking-widest"
          >
            View Site
          </a>
          <SignOutButtonClient />
        </div>
      </nav>
      <main className="py-8">{children}</main>
    </div>
  );
}
