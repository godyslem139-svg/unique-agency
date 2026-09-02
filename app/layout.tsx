import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Script from "next/script";
import dynamic from "next/dynamic";
import "./globals.css";

import Navbar from "./components/Navbar"; 
import LayoutWrapper from "./components/LayoutWrapper"; 
import FooterSection from "./components/Footer";

// تحميل ديناميكي لمكون الثلج لمنع معالجة الـ Canvas أثناء التحميل الأولي
const Snow = dynamic(() => import("./components/Snow"));

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "900"], // تم إزالة 300 لتقليل حجم خطوط WOFF2 المحملة
  display: "swap",
  variable: "--font-cairo",
  adjustFontFallback: true, // يقلل من Cumulative Layout Shift (CLS)
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uniquee-ws.com"), 
  title: "Unique WS - وكالة رقمية متكاملة",
  description: "وكالة رقمية متكاملة لحلول الويب وتصميم المواقع في الكويت والسعودية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="ar" 
      dir="rtl" 
      className={`h-full ${cairo.className}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="h-full min-h-screen bg-[#0B1B3D] text-white flex flex-col justify-between selection:bg-yellow-400 selection:text-[#0B1B3D]">
        {/* GTM Fallback للمتصفحات التي لا تدعم JS */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2JWB3HS"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <div className="flex flex-col min-h-screen relative overflow-x-hidden">
          <Snow /> 
          <Navbar />
          <LayoutWrapper>
            <main className="flex-grow pt-20">
              {children}
            </main>
          </LayoutWrapper>
        </div>
        <FooterSection />

        {/* تحميل GTM بعد اكتمال تفاعل الصفحة لتوفير الـ Main Thread */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N2JWB3HS');`,
          }}
        />
      </body>
    </html>
  );
}