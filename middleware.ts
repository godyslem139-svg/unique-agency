import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lowerPath = pathname.toLowerCase();

  // 1. استثناء الملفات الثابتة، الـ static assets، وطلبات الـ API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/blog') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 2. فحص ما إذا كان الرابط يطابق أي صفحة أساسية أو صفحة خدمة/مدينة (غير حساس لحالة الأحرف)
  const isStaticPage = 
    lowerPath === '/' ||
    lowerPath === '/blog' ||
    lowerPath === '/services' ||
    lowerPath === '/contact' ||
    lowerPath === '/about' ||
    lowerPath === '/aboutus' ||
    lowerPath === '/portfolio' ||
    lowerPath === '/projects' ||
    lowerPath === '/wizard' ||
    lowerPath === '/wordpress-nextjs' ||
    lowerPath.startsWith('/websitedesigncompany') ||
    lowerPath.startsWith('/seocompany');

  if (isStaticPage) {
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