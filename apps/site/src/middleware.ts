import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { isAuthorizedAdmin } from "@/lib/auth/admin-guard";

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Refresh session — required by @supabase/ssr
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Protect /admin routes (except login and auth callback)
  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname.startsWith("/admin");
  const isPublicAdminRoute =
    pathname === "/admin/login" ||
    pathname.startsWith("/admin/auth/");

  // Two separate questions. `!user` = nobody is signed in. `!isAuthorizedAdmin`
  // = someone IS signed in but is not on the ADMIN_EMAILS allowlist — since the
  // Google consent screen is published as External, any Google account can reach
  // this point. Both get bounced to the login page.
  //
  // NOTE: this matcher is `/admin/:path*` and does NOT cover `/api/admin/*`
  // (those paths do not begin with `/admin`). The API routes carry their own
  // `adminApiGuard` call — the two gates are independent, not layered.
  if (isAdminRoute && !isPublicAdminRoute && !isAuthorizedAdmin(user)) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/login";
    return NextResponse.redirect(loginUrl);
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/admin/:path*"],
};
