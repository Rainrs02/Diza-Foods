import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes except /admin/login
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const sessionCookie = request.cookies.get('admin_session');
    
    // In a real app, you'd verify a JWT here. 
    // For this simple hardcoded auth, we just check if the cookie exists and matches our expected token.
    const expectedToken = process.env.ADMIN_SESSION_TOKEN || 'diza_foods_admin_secure_token_2026';
    
    if (!sessionCookie || sessionCookie.value !== expectedToken) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
