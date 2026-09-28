const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://suewheelerstl.com";

/**
 * Returns a direct admin URL. Sue authenticates via Google OAuth
 * on first visit — no magic link needed.
 */
export function generateAdminMagicLink(path: string): string {
  return `${SITE_URL}${path}`;
}
