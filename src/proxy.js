import { NextResponse } from "next/server";
import { authClient, useSession } from "./lib/auth-client";
import { headers } from "next/headers";
import { auth } from "./lib/auth";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if (session) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/my-profile", "/all-animals/:id"],
};
