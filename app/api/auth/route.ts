import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const validUser = 'Admin';
    const validPass = 'AdminDiza2026';

    if (username === validUser && password === validPass) {
      const token = process.env.ADMIN_SESSION_TOKEN || 'diza_foods_admin_secure_token_2026';
      
      const response = NextResponse.json({ success: true });
      
      // Set HttpOnly cookie for session
      response.cookies.set({
        name: 'admin_session',
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });
      
      return response;
    }

    return NextResponse.json({ success: false, message: 'Kredensial tidak valid' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
