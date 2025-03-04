import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    /\.(jpg|jpeg|png|gif|svg|css|js|ico|ttf|woff|woff2|csv|docx|xlsx|zip|webmanifest)$/.test(pathname)
  ) {
    return NextResponse.next()
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
