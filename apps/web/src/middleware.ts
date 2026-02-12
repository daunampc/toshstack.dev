import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
const intlMiddleware = createMiddleware({
  locales: ['en', 'vi'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: false,
});
export async function middleware(req: NextRequest) {
  const res = intlMiddleware(req);
  const token = req.cookies.get('__Host_sess')?.value;
  const authRoutes = ['/auth/login', '/auth/register'];

  const pathname = req.nextUrl.pathname;
  const protectedRoutes = ['/settings', '/user/create-post'];
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(`${route}`));
  const loginUrl = new URL('/auth/login', req.url);
  console.log('OOK');
  if (token && authRoutes.includes(pathname)) {
    const isValid = await verifyToken(token);
    if (isValid) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
  if (pathname.startsWith('/auth') || pathname === '/') {
    return res;
  }
  if (!token && isProtected) {
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }
  if (token && isProtected) {
    try {
      const verify = await fetch(`${process.env.API_URL}/auth/verify`, {
        method: 'POST',
        headers: {
          Cookie: `__Host_sess=${token}`,
        },
      });
      if (!verify.ok) {
        loginUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(loginUrl);
      }
    } catch {
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }
  return res;
}
async function verifyToken(token: string) {
  try {
    const res = await fetch(`${process.env.API_URL}/auth/verify`, {
      method: 'POST',
      headers: {
        Cookie: `__Host_sess=${token}`,
      },
    });
    console.log('Check auth login: ', res.ok);
    return res.ok;
  } catch {
    return false;
  }
}
export const config = {
  matcher: [
    '/((?!_next|.*\\.(?:svg|png|jpg|jpeg|gif|webp)|favicon.ico|sitemap.xml|robots.txt|api).*)',
  ],
};
