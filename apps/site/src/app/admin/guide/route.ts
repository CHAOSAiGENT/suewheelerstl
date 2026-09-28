/**
 * Sue's admin training guide, served behind the admin gate.
 *
 * This document used to sit at `public/sue-admin-guide.html` — 1.4 MB of
 * internal operating instructions in the web root. Unlinked, but anyone who
 * guessed or crawled the filename could read it, and robots allowed it. It now
 * lives at `private/sue-admin-guide.html`, outside `public/`, and is only
 * reachable through this handler.
 *
 * TWO THINGS MAKE THIS WORK, AND BOTH ARE EASY TO BREAK:
 *
 * 1. AUTHORIZATION reuses `isAuthorizedAdmin` — the same predicate middleware
 *    and every `/api/admin/*` handler use. There is no second definition of
 *    "who is an admin" here. `/admin/guide` is also covered by the middleware
 *    matcher (`/admin/:path*`), so this check is the inner of two gates; it is
 *    kept because middleware is a routing convenience, not a security boundary.
 *
 * 2. THE FILE HAS TO SHIP. Next bundles what it can statically see; a runtime
 *    read of a path outside the app tree is invisible to that analysis, so a
 *    naive `readFile` works locally and 404s on Vercel. `next.config.ts` has an
 *    `outputFileTracingIncludes` entry keyed on `/admin/guide` that pulls
 *    `private/sue-admin-guide.html` into this route's build trace. If this
 *    route is ever renamed or the file moved, that entry must move with it.
 */

import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isAuthorizedAdmin } from "@/lib/auth/admin-guard";

// @react-pdf aside: this route needs the Node filesystem, so it must not be
// moved to the Edge runtime.
export const runtime = "nodejs";
// Reads cookies to authorize; never prerender or cache it.
export const dynamic = "force-dynamic";

const GUIDE_PATH = path.join(process.cwd(), "private", "sue-admin-guide.html");

/** Read once per lambda instance — the file is 1.4 MB and never changes. */
let cachedGuide: Buffer | null = null;

async function loadGuide(): Promise<Buffer> {
  if (!cachedGuide) cachedGuide = await readFile(GUIDE_PATH);
  return cachedGuide;
}

export async function GET(request: NextRequest) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not signed in, or signed in but not on the ADMIN_EMAILS allowlist. Both go
  // to the login page, exactly as middleware does for the rest of /admin — this
  // is a browser-facing document, not an API, so a redirect is the useful
  // answer and a JSON 403 is not.
  if (!isAuthorizedAdmin(user)) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/login";
    loginUrl.search = "";
    return NextResponse.redirect(loginUrl);
  }

  let html: Buffer;
  try {
    html = await loadGuide();
  } catch (error) {
    // Reaching here in production means the file did not make it into the
    // build trace — see the `outputFileTracingIncludes` note above.
    console.error("[admin/guide] could not read the guide", {
      path: GUIDE_PATH,
      error,
    });
    return NextResponse.json(
      { error: "Guide unavailable" },
      { status: 500 },
    );
  }

  return new NextResponse(new Uint8Array(html), {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
