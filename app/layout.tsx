import type { Metadata } from "next";
import { Cairo } from "next/font/google"; // استيراد الخط الرسمي والمحسن تلقائياً
import { GoogleTagManager } from "@next/third-parties/google"; // استيراد مكتبة Google Tag Manager
import "./globals.css";

import Navbar from "./components/Navbar"; 
import LayoutWrapper from "./components/LayoutWrapper"; 
import Snow from "./components/Snow"; 
import FooterSection from "./components/Footer";

// تهيئة الخط وتحديد الأوزان المطلوبة والـ subsets والـ display
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap", // يمنع حجب النص أثناء تحميل الخط ويحسن الـ LCP والـ CLS
  variable: "--font-cairo", // لربطه بمتغيرات CSS في حال احتجته
});

export const metadata: Metadata = {
  // 👇 هذا هو السطر السحري الذي سيحل المشكلة في كل صفحات الموقع
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
      className={`h-full ${cairo.className}`} // تطبيق الخط المحسن على كامل الصفحة بشكل تلقائي
      data-scroll-behavior="smooth"
    >
      <head>
        {/* تم التخلص من وسوم preconnect الخارجية لتحقيق سكور 100% في لولايت */}
        <link rel="dns-prefetch" href="https://www.uniquee-ws.com" />
      </head>
      <body className="h-full min-h-screen bg-[#0B1B3D] text-white flex flex-col justify-between selection:bg-yellow-400 selection:text-[#0B1B3D]">
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
        {/* إدارة العلامات من جوجل (Google Tag Manager) */}
        <GoogleTagManager gtmId="GTM-N2JWB3HS" />
      </body>
    </html>
  );
}