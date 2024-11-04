import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import NextAuth from "next-auth";
import authConfig from "./app/api/auth/middleware/auth.config";

const auth = NextAuth(authConfig);

export async function middleware(request: NextRequest) {
  const user = await auth.auth();

  // if user isn't logged in and redirect them to / (corner cases are '/' and '/auth/signin')
  if (
    !user &&
    request.nextUrl.pathname !== "/" &&
    !request.nextUrl.pathname.startsWith("/auth")
  )
    return NextResponse.redirect(new URL("/", request.url));

  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // Add a new header x-current-path which passes the path to downstream components
  response.headers.set("x-current-path", request.nextUrl.pathname);

  return response;
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
