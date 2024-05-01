import { NextRequest, NextResponse } from 'next/server'
import NextCrypto from 'next-crypto'
import { cookies } from 'next/headers'
 
const protectedRoutes = ['/recipes']
const publicRoutes = ['/login', '/']
 
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  const crypto = new NextCrypto('x1BHVT7xYQeSiAzL60VBX+hH+zyYrjT3CujdWechVBM');
  const cookie = cookies().get('session')?.value
  const session = await crypto.decrypt(cookie);
 
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith('/')
  ) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}