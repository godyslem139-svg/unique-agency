import JeddahClient from './JeddahClient';

// Metadata متقدمة للسيو
export const metadata = {
  title: 'أفضل شركة تصميم مواقع إلكترونية في جدة | برمجة Next.js فائقة السرعة',
  description: 'نقدم خدمات تصميم وتطوير المواقع والمتاجر الإلكترونية في جدة بأحدث تقنيات Next.js ووردبريس سرعة خارقة، تهيئة كاملة لمحركات البحث (SEO)، وضمان مضاعفة مبيعاتك.',
  alternates: {
    canonical: '/WebsiteDesignCompanyJeddah', // المسار الصحيح
  },
  openGraph: {
    title: 'أفضل شركة تصميم مواقع إلكترونية في جدة | Next.js',
    description: 'طور حضورك الرقمي في جدة بموقع إلكتروني فائق السرعة ومحسن لمحركات البحث.',
    url: '/WebsiteDesignCompanyJeddah',
    siteName: 'Unique',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function WebsiteDesignJeddahPage() {
  const baseUrl = 'https://www.uniquee-ws.com';
  const pageUrl = `${baseUrl}/WebsiteDesignCompanyJeddah`;

  // SEO Schema (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'شركة تصميم مواقع إلكترونية في جدة',
    image: `${baseUrl}/logo.png`,
    '@id': pageUrl,
    url: pageUrl,
    telephone: '+9661505388060',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'طريق الملك عبد العزيز',
      addressLocality: 'جدة',
      addressRegion: 'مكة المكرمة',
      postalCode: '21411',
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
      <JeddahClient />
    </>
  );
}