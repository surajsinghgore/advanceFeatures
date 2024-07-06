import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export function middleware(request) {

  const Token = cookies().get("clientToken");

  if (!Token) {
    // If there's no token, redirect to the login page
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // If the token exists, continue to the requested page
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*"],
};
