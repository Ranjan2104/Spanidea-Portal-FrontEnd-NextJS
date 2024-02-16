import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export function middleware(request: NextRequest) {
    const authToken = request.cookies.get('auth_token')?.value;
    const loggedUser = request.nextUrl.pathname === '/';
    if(loggedUser) {
        if(authToken) {
            return NextResponse.redirect(new URL('/routes/dashboard', request.url));
        }
    } else {
        if(!authToken) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }
}
 
export const config = {
  matcher: ['/routes/dashboard/:path*', '/']
}