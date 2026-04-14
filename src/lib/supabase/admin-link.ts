import { createServiceSupabaseClient } from "./service";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com";
const ADMIN_EMAILS = (
  process.env.ADMIN_EMAILS ??
  process.env.CONTACT_EMAIL ??
  "sue@suewheelerstl.com"
)
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

/**
 * Generates a Supabase magic link for the primary admin email that redirects
 * directly to a specific admin path after login. Falls back to plain URL if
 * generation fails (e.g. RESEND not configured yet).
 */
export async function generateAdminMagicLink(path: string): Promise<string> {
  const fallback = `${SITE_URL}${path}`;
  const primaryEmail = ADMIN_EMAILS[0];
  if (!primaryEmail) return fallback;

  try {
    const supabase = createServiceSupabaseClient();
    const redirectTo = `${SITE_URL}/admin/auth/callback?next=${encodeURIComponent(path)}`;
    const { data, error } = await supabase.auth.admin.generateLink({
      type: "magiclink",
      email: primaryEmail,
      options: { redirectTo },
    });
    if (error || !data?.properties?.action_link) return fallback;
    return data.properties.action_link;
  } catch {
    return fallback;
  }
}
