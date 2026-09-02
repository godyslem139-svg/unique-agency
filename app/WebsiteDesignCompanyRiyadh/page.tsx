import RiyadhClient from './RiyadhClient';

export const metadata = {
  title: 'أفضل شركة تصميم مواقع إلكترونية في الرياض | برمجة احترافية',
  description: 'نقدم خدمات تصميم وتطوير المواقع والمتاجر الإلكترونية في الرياض بأحدث تقنيات Next.js و Laravel. تهيئة كاملة لمحركات البحث (SEO)، وضمان مضاعفة مبيعاتك.',
  alternates: {
    canonical: '/WebsiteDesignCompanyRiyadh', // المسار الصحيح بناءً على تقرير الفحص
  },
  openGraph: {
    title: 'أفضل شركة تصميم مواقع في الرياض | Next.js',
    description: 'طور حضورك الرقمي في الرياض بموقع إلكتروني فائق السرعة ومحسن لمحركات البحث.',
    url: '/WebsiteDesignCompanyRiyadh',
    siteName: 'Unique',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function WebsiteDesignRiyadhPage() {
  const baseUrl = 'https://www.uniquee-ws.com';
  const pageUrl = `${baseUrl}/WebsiteDesignCompanyRiyadh`;

  // SEO Schema (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'شركة تصميم مواقع إلكترونية في الرياض',
    image: `${baseUrl}/logo.png`,
    '@id': pageUrl,
    url: pageUrl,
    telephone: '+9661505388060',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'الرياض',
      addressRegion: 'الرياض',
      addressCountry: 'SA',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RiyadhClient />
    </>
  );
}