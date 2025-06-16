// middleware.js
import { redirect } from 'next/dist/server/api-utils';
import { NextResponse } from 'next/server';

export function middleware(request) {
    console.log("Middleware triggered for:");
  const token = request.cookies.get('token')?.value;

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  return NextResponse.next(); redirect(new URL('/unauthorized', request.url));
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
