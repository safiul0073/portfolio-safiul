import { NextResponse } from 'next/server';
import { verifyToken } from './utils/jwt';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token');
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  req.user = decoded; // Add the decoded user to the request object
  return NextResponse.next();
}

// Config to specify which routes should use this middleware
export const config = {
  matcher: ['/api/protected'],
};