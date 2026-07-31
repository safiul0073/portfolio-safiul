import { NextResponse } from "next/server";
import { verifyToken } from "./utils/jwt";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("ttll");

  if ((!token || !token?.value) && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token?.value) {
    const decoded = verifyToken(token.value);
    if (!decoded) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else {
    // Handle the case where token?.value is undefined
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Config to specify which routes should use this middleware
export const config = {
  matcher: ["/api/protected", "/dashboard/:path*"],
};
