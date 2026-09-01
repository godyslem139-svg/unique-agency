import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lowerPath = pathname.toLowerCase();

  // 1. استثناء خرائط الموقع وملفات محركات البحث والملفات الثابتة و /blog و /api
  if (
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/blog') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const knownCategoriesAndPages = [
    'backlinks',
    'android',
    'content-writing',
    'e-commerce',
    'seo',
    'services',
    'contact',
    'about',
    'aboutus',
    'portfolio',
    'projects',
    'wizard',
    'wordpress-nextjs'
  ];

  const isStaticOrCategory = 
    lowerPath === '/' ||
    knownCategoriesAndPages.some(route => lowerPath === `/${route}`) ||
    lowerPath.startsWith('/websitedesigncompany') ||
    lowerPath.startsWith('/seocompany');

  if (isStaticOrCategory) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/blog${pathname}`;
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: '/:path*',
};