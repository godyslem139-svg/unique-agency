import React from "react";
import Link from "next/link";

export default function FooterSection() {
  const pagesLinks = [
    { name: "شركة سيو في السعودية", slug: "SEOCompanySaudiArabia" },
    { name: "شركة سيو في الرياض", slug: "SEOcompanyinRiyadh" },
    { name: "شركة سيو في جدة", slug: "seocompanyjeddah" },
    { name: "شركة سيو في الامارات", slug: "SEOCompanyUAE" },
    { name: "شركة سيو في الشارقة", slug: "SEOCompanySharjah" },
    { name: "شركة سيو في دبي", slug: "SEOCompanyDubai" },
    { name: "شركة سيو في الكويت", slug: "SEOCompanyKuwait" },
    { name: "شركة سيو في مصر", slug: "SEOCompanyEgypt" },
    { name: "شركة سيو في اسكندرية", slug: "SEOCompanyAlexandria" },
    { name: "شركة سيو في القاهرة", slug: "SEOCompanyCairo" },
    { name: "شركة تصميم مواقع الكترونية في السعودية", slug: "WebsiteDesignCompanySaudiArabia" },
    { name: "شركة تصميم مواقع الكترونية في الرياض", slug: "WebsiteDesignCompanyRiyadh" },
    { name: "شركة تصميم مواقع الكترونية في جدة", slug: "WebsiteDesignCompanyJeddah" },
    { name: "شركة تصميم مواقع الكترونية في الكويت", slug: "WebsiteDesignCompanyKuwait" },
    { name: "شركة تصميم مواقع الكترونية في الامارات", slug: "WebsiteDesignCompanyUAE" },
    { name: "شركة تصميم مواقع الكترونية في الشارقة", slug: "WebsiteDesignCompanySharjah" },
    { name: "شركة تصميم مواقع الكترونية في دبي", slug: "WebsiteDesignCompanyDubai" },
    { name: "شركة تصميم مواقع الكترونية في مصر", slug: "WebsiteDesignCompanyEgypt" },
    { name: "شركة تصميم مواقع الكترونية في اسكندرية", slug: "WebsiteDesignCompanyAlexandria" },
    { name: "شركة تصميم مواقع الكترونية في القاهرة", slug: "WebsiteDesignCompanyCairo" }
  ];

  return (
    <footer className="bg-[#FFB703] text-[#0B1B3D] pt-16 pb-8 px-6 border-t-4 border-[#0B1B3D]/25" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12 border-b border-[#0B1B3D]/20 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0B1B3D] text-[#FFB703] text-sm font-bold mb-3 shadow-md">
              شريك نجاحك الرقمي
            </div>
            <h2 className="text-3xl font-black text-[#0B1B3D]">
              نضع مشروعك في صدارة محركات البحث
            </h2>
          </div>
          
          <div className="lg:col-span-2 flex flex-wrap gap-4 items-center justify-start lg:justify-end">
            {/* رقم الهاتف كما هو */}
            <a 
              href="tel:01505388060" 
              className="bg-[#0B1B3D] text-[#FFB703] px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow hover:opacity-90 transition-opacity"
            >
              <span>📞</span>
              <span>0 15 05388060</span>
            </a>

            <a 
              href="mailto:uniquecompany55@gmail.com" 
              className="bg-[#0B1B3D] text-[#FFB703] px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow hover:opacity-90 transition-opacity"
            >
              <span>✉️</span>
              <span>uniquecompany55@gmail.com</span>
            </a>

            <a 
              href="https://wa.me/201505388060"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتساب"
              className="w-11 h-11 bg-[#25D366] text-white rounded-xl flex items-center justify-center shadow hover:scale-105 transition-transform"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
              </svg>
            </a>

            <a 
              href="https://www.facebook.com/share/1DsBxouXJq/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="فيسبوك"
              className="w-11 h-11 bg-[#0B1B3D] text-[#FFB703] rounded-xl flex items-center justify-center shadow hover:scale-105 transition-transform"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a 
              href="https://www.linkedin.com/company/unique-web-services-ai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="لينكد إن"
              className="w-11 h-11 bg-[#0B1B3D] text-[#FFB703] rounded-xl flex items-center justify-center shadow hover:scale-105 transition-transform"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v5c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="py-12">
          <h3 className="text-xl font-black text-[#0B1B3D] mb-6">استكشف خدماتنا</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {pagesLinks.map((item, index) => (
              <Link
                key={index}
                href={`/${item.slug}`}
                className="p-3 bg-[#0B1B3D] text-white hover:text-[#FFB703] rounded-xl text-sm font-bold transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#0B1B3D]/20 text-center font-bold text-sm">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}