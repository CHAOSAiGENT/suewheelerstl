"use client";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export function SignOutButtonClient() {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createBrowserSupabaseClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="text-xs font-sans text-[rgba(255,255,255,0.5)] hover:text-white transition-colors uppercase tracking-widest"
    >
      Sign Out
    </button>
  );
}
