import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export function middleware(request) {
  const Token = cookies().get("clientToken");
  // dashboard page prevent before login
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!Token) {
      // If there's no token, redirect to the login page
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  // login page prevent after login
  if (request.nextUrl.pathname.startsWith("/auth")) {
    if (Token) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*", "/auth/:path*"],
};
