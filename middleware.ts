import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const KNOWN_ROUTES = [
  '/',
  '/blog',
  '/services',
  '/contact',
  '/about',
  '/aboutus',
  '/portfolio',
  '/projects',
  '/wizard',
  '/wordpress-nextjs',
  '/api',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. استثناء الملفات الثابتة والمسارات المعروفة
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/blog') ||
    pathname.includes('.') || 
    KNOWN_ROUTES.includes(pathname)
  ) {
    return NextResponse.next();
  }

  // 2. استثناء الصفحات الخاصة بالدول والخدمات
  if (
    pathname.startsWith('/WebsiteDesignCompany') ||
    pathname.startsWith('/SEOCompany')
  ) {
    return NextResponse.next();
  }

  // 3. تحويل المقالات القديمة فقط إلى /blog/slug
  const url = request.nextUrl.clone();
  url.pathname = `/blog${pathname}`;
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: '/:path*',
};