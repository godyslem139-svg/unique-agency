import Link from 'next/link';

// Metadata متقدمة للسيو
export const metadata = {
  title: 'أفضل شركة تصميم مواقع إلكترونية في جدة | برمجة Next.js فائقة السرعة',
  description: 'نقدم خدمات تصميم وتطوير المواقع والمتاجر الإلكترونية في جدة بأحدث تقنيات Next.js ووردبريس سرعة خارقة، تهيئة كاملة لمحركات البحث (SEO)، وضمان مضاعفة مبيعاتك.',
  alternates: {
    canonical: '/jeddah-web-design', // تم التعديل إلى مسار نسبي
  },
  openGraph: {
    title: 'أفضل شركة تصميم مواقع إلكترونية في جدة | Next.js',
    description: 'طور حضورك الرقمي في جدة بموقع إلكتروني فائق السرعة ومحسن لمحركات البحث.',
    url: '/jeddah-web-design', // تم التعديل إلى مسار نسبي
    siteName: 'Unique', // تم تعديل اسم الشركة
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function JeddahWebDesignPage() {
  const baseUrl = 'https://www.uniquee-ws.com';
  const pageUrl = `${baseUrl}/jeddah-web-design`;

  // SEO Schema (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'شركة تصميم مواقع إلكترونية في جدة',
    image: `${baseUrl}/logo.png`, // تم التعديل للرابط الفعلي
    '@id': pageUrl, // تم التعديل للرابط الفعلي
    url: pageUrl, // تم التعديل للرابط الفعلي
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
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero (Animated) */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 px-4 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] animate-pulse"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
            الرواد في تطوير الويب بـ Next.js في جدة والمملكة
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            تصميم مواقع إلكترونية في جدة <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-600 bg-clip-text text-transparent">
              بأداء استثنائي ومحركات بحث متصدرة
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
            نحول رؤيتك التجارية إلى منصة رقمية فائقة السرعة، آمنة، ومصممة خصيصاً لمضاعفة مبيعاتك في السوق السعودي متجاوزين حدود المواقع التقليدية.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://wa.me/9661505388060" target="_blank" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1 text-center">
              احصل على استشارة مجانية عبر الواتساب
            </Link>
            <Link href="https://www.uniquee-ws.com/projects" target="_blank" className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold px-8 py-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2">
              استعرض أعمالنا الحصرية
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Trusted Companies */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
            موثوقون من قبل كبرى الشركات والنشاطات التجارية في جدة والمملكة
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition duration-500">
            <span className="text-2xl font-black text-slate-300 tracking-wider">Galenus</span>
            <span className="text-2xl font-black text-slate-300 tracking-wider">Freightclub</span>
            <span className="text-2xl font-black text-slate-300 tracking-wider">Awazel Alsafrrat</span>
            <span className="text-2xl font-black text-slate-300 tracking-wider">Alhamd Academy</span>
          </div>
        </div>
      </section>

      {/* 3. لماذا تفشل معظم المواقع؟ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">لماذا تفشل معظم المواقع الإلكترونية التقليدية؟</h2>
          <p className="text-slate-400 text-lg">الكثير من الشركات تنفق أموالاً طائلة على مواقع بطيئة لا تحقق أي مبيعات أو أرباح حقيقية.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-red-950/20 border border-red-500/20 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-3">بطء شديد في التحميل</h3>
            <p className="text-slate-400">القوالب الجاهزة المليئة بالإضافات تقتل سرعة الموقع وتتسبب في هروب العملاء خلال ثوانٍ معدودة.</p>
          </div>
          <div className="bg-red-950/20 border border-red-500/20 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-3">ضعف نتائج محركات البحث (SEO)</h3>
            <p className="text-slate-400">هيكلة برمجية ضعيفة تعجز عن تصدر كلمات مفتاحية تنافسية في السوق السعودي مثل "تصميم مواقع في جدة".</p>
          </div>
          <div className="bg-red-950/20 border border-red-500/20 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-3">ثغرات أمنية متكررة</h3>
            <p className="text-slate-400">الاعتماد على أنظمة إدارة محتوى مكشوفة يعرض الموقع للاختراق المتكرر وتعطل الأعمال.</p>
          </div>
        </div>
      </section>

      {/* 4. Before / After */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">المقارنة الحاسمة: المواقع التقليدية مقابل حلولنا</h2>
            <p className="text-slate-400 text-lg">فرق شاسع بين ما تقدمه المنصات العادية وما نحققه لك بـ Next.js.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500"></span> المواقع التقليدية (ووردبريس)
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">❌ سرعة تحميل بطيئة (أكثر من 4 ثوانٍ)</li>
                <li className="flex items-center gap-3">❌ ترتيب متأخر في نتائج بحث جوجل</li>
                <li className="flex items-center gap-3">❌ صيانة مستمرة ومشاكل تحديثات الإضافات</li>
                <li className="flex items-center gap-3">❌ تجربة مستخدم مزعجة على الجوال</li>
              </ul>
            </div>
            <div className="bg-blue-950/20 border border-blue-500/40 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-4 py-1.5 rounded-bl-xl font-bold">الأفضل لشركتك</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500 animate-ping"></span> معنا (Next.js & Cloud)
              </h3>
              <ul className="space-y-4 text-slate-200">
                <li className="flex items-center gap-3">✅ سرعة خارقة تفوق 3 أضعاف المواقع العادية</li>
                <li className="flex items-center gap-3">✅ تصدر مباشر لنتائج السيو (SEO-Optimized)</li>
                <li className="flex items-center gap-3">✅ حماية قصوى واستقرار كامل دون توقف</li>
                <li className="flex items-center gap-3">✅ واجهات تفاعلية مخصصة 100% لعلامتك</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. لماذا Next.js؟ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">لماذا نعتمد حصرياً على تقنية Next.js؟</h2>
          <p className="text-slate-400 text-lg">التقنية التي تستخدمها كبرى الشركات العالمية مثل Netflix، TikTok، وNike.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-blue-400 mb-3">التقديم الخوادمي (SSR/SSG)</h3>
            <p className="text-slate-400 text-sm leading-relaxed">توليد الصفحات مسبقاً يمنح زوارك ومحركات البحث استجابة فورية دون أي انتظار.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-blue-400 mb-3">تحسين الأداء الذاتي</h3>
            <p className="text-slate-400 text-sm leading-relaxed">ضغط تلقائي للصور والسكربتات لضمان أعلى مستويات الأداء على شبكات الجوال في السعودية.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-blue-400 mb-3">أمان متكامل ومستقر</h3>
            <p className="text-slate-400 text-sm leading-relaxed">غياب قواعد البيانات المباشرة للواجهة الأمامية يغلق تماماً باب الاختراقات الشائعة.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-blue-400 mb-3">قابلية التوسع الهائلة</h3>
            <p className="text-slate-400 text-sm leading-relaxed">إمكانية ربط الموقع بأي نظام إدارة محتوى (Headless CMS) بكل مرونة وسلاسة.</p>
          </div>
        </div>
      </section>

      {/* 6. مراحل تنفيذ المشروع */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">مراحل تنفيذ المشروع بكل احترافية</h2>
            <p className="text-slate-400 text-lg">منهجية واضحة ومدروسة لنقل فكرتك إلى أرض الواقع بدقة تسليم عالية.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative">
              <span className="text-blue-500 font-mono text-4xl font-bold absolute top-6 left-6 opacity-20">01</span>
              <h3 className="font-bold text-xl mb-3 text-slate-200">التحليل والاستراتيجية</h3>
              <p className="text-slate-400 text-sm">دراسة المنافسين، تحديد الكلمات المفتاحية، وتخطيط هندسة المعلومات.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative">
              <span className="text-blue-500 font-mono text-4xl font-bold absolute top-6 left-6 opacity-20">02</span>
              <h3 className="font-bold text-xl mb-3 text-slate-200">التصميم وتجربة المستخدم</h3>
              <p className="text-slate-400 text-sm">ابتكار واجهات فريدة (UI/UX) تضمن أعلى معدلات رضا وتحويل للزوار.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative">
              <span className="text-blue-500 font-mono text-4xl font-bold absolute top-6 left-6 opacity-20">03</span>
              <h3 className="font-bold text-xl mb-3 text-slate-200">البرمجة والتطوير</h3>
              <p className="text-slate-400 text-sm">كتابة أكواد نظيفة باستخدام Next.js وتفعيل معايير الحماية والسرعة.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative">
              <span className="text-blue-500 font-mono text-4xl font-bold absolute top-6 left-6 opacity-20">04</span>
              <h3 className="font-bold text-xl mb-3 text-slate-200">الاطلاق والتهيئة</h3>
              <p className="text-slate-400 text-sm">الربط مع محركات البحث، أدوات التحليل، والانطلاق رسمياً بالسوق.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Technology Stack */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">ترسانة التقنيات التي نستخدمها</h2>
        <p className="text-slate-400 text-lg mb-12">أحدث وأقوى التقنيات البرمجية العالمية لضمان تفوقك الرقمي.</p>
        <div className="flex flex-wrap justify-center gap-6">
          {['Next.js 14+', 'React.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Vercel Cloud', 'PostgreSQL', 'Headless CMS'].map((tech, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 px-6 py-4 rounded-xl font-bold text-blue-400 shadow-sm">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* 8. Performance Metrics */}
      <section className="py-24 bg-blue-950/20 border-y border-blue-900/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">مقاييس الأداء الأسطورية (Google Lighthouse)</h2>
          <p className="text-slate-400 text-lg mb-16">نتائج لا تقبل المنافسة تضمن لك صدارة نتائج بحث جوجل طبيعياً.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <div className="text-4xl lg:text-5xl font-black text-green-400 mb-2">100</div>
              <p className="text-slate-300 font-semibold">الأداء (Performance)</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <div className="text-4xl lg:text-5xl font-black text-green-400 mb-2">100</div>
              <p className="text-slate-300 font-semibold">إمكانية الوصول (Accessibility)</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <div className="text-4xl lg:text-5xl font-black text-green-400 mb-2">100</div>
              <p className="text-slate-300 font-semibold">أفضل الممارسات (Best Practices)</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <div className="text-4xl lg:text-5xl font-black text-green-400 mb-2">100</div>
              <p className="text-slate-300 font-semibold">تحسين محركات البحث (SEO)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. أنواع المواقع التي ننفذها */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">أنواع المواقع الإلكترونية التي ننفذها</h2>
          <p className="text-slate-400 text-lg">حلول برمجية مخصصة تلبي كافة احتياجات القطاعات التجارية في جدة.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-200 mb-3">مواقع الشركات والقطاعات الخدمية</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">مواقع تعريفية فاخرة تعكس هوية مؤسستك باحترافية وتدعم استقطاب العملاء المستهدفين في السعودية.</p>
            <span className="text-blue-400 font-semibold text-sm">تصميم متجاوب + لوحة تحكم سهلة</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-200 mb-3">المتاجر الإلكترونية المتقدمة</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">منصات تجارة إلكترونية سريعة جداً، مربوطة ببوابات الدفع المحلية (مدى، تابي، تمارا) مع إدارة مخزون فائقة.</p>
            <span className="text-blue-400 font-semibold text-sm">معدلات تحويل عالية + أمان تام</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-200 mb-3">المنصات الرقمية وتطبيقات الويب</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">بناء لوحات تحكم ومواقع خدمية ضخمة تعتمد على معمارية برمجية حديثة وقابلة للتوسع المستمر.</p>
            <span className="text-blue-400 font-semibold text-sm">أداء خوارزمي سريع وقوي</span>
          </div>
        </div>
      </section>

      {/* 10. Portfolio */}
      <section id="portfolio" className="py-24 bg-slate-900/30 border-y border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">معرض أعمالنا الحصرية</h2>
            <p className="text-slate-400 text-lg">نماذج حية لمشاريع برمجية ناجحة قمنا بتطويرها لعملائنا في السعودية.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* المشروع الأول */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 group hover:border-blue-500/50 transition">
              <div className="h-56 bg-gradient-to-tr from-blue-950 to-slate-800 flex items-center justify-center text-slate-300 font-bold text-lg group-hover:scale-105 transition duration-500 p-6 text-center border-b border-slate-800">
                موقع عوازل الصفرات (Awazel Alsafrrat)
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">منصة خدمات هندسية</span>
                <h3 className="text-xl font-bold text-slate-100 mt-2 mb-3">تطوير وبرمجة عوازل الصفرات</h3>
                <p className="text-slate-400 text-sm mb-6">موقع متكامل يقدم خدمات العزل في المملكة بأداء عالي وسرعة تصفح فائقة.</p>
                <Link href="https://awazel-alsafrrat.sa/" target="_blank" className="text-blue-400 font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  زيارة الموقع الحقيقي &larr;
                </Link>
              </div>
            </div>

            {/* المشروع الثاني */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 group hover:border-blue-500/50 transition">
              <div className="h-56 bg-gradient-to-tr from-indigo-950 to-slate-800 flex items-center justify-center text-slate-300 font-bold text-lg group-hover:scale-105 transition duration-500 p-6 text-center border-b border-slate-800">
                موقع غولد شيلد (Gold Shield)
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">منصة تجارية وخدمية</span>
                <h3 className="text-xl font-bold text-slate-100 mt-2 mb-3">تطوير موقع Gold Shield</h3>
                <p className="text-slate-400 text-sm mb-6">واجهات رقمية عصرية متجاوبة بالكامل لتعزيز تجربة المستخدم ومضاعفة العملاء.</p>
                <Link href="https://goldshield-sa.com/" target="_blank" className="text-blue-400 font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  زيارة الموقع الحقيقي &larr;
                </Link>
              </div>
            </div>

            {/* المشروع الثالث */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 group hover:border-blue-500/50 transition">
              <div className="h-56 bg-gradient-to-tr from-slate-900 to-blue-950 flex items-center justify-center text-slate-300 font-bold text-lg group-hover:scale-105 transition duration-500 p-6 text-center border-b border-slate-800">
                موقع البدر للعقارات (Elbadr Real Estate)
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">منصة عقارية متقدمة</span>
                <h3 className="text-xl font-bold text-slate-100 mt-2 mb-3">تطوير شركة البدر للعقارات</h3>
                <p className="text-slate-400 text-sm mb-6">منصة عرض عقاري سريعة ومصممة بعناية فائقة لتسهيل تصفح العقارات والوحدات.</p>
                <Link href="https://www.elbadrrealestate.com/" target="_blank" className="text-blue-400 font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  زيارة الموقع الحقيقي &larr;
                </Link>
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <Link href="https://www.uniquee-ws.com/projects" target="_blank" className="inline-block bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold px-8 py-4 rounded-xl transition">
              عرض المزيد من المشاريع في صفحة الأعمال &larr;
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Case Studies */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-500/30 p-8 sm:p-12 rounded-3xl">
          <span className="text-xs font-bold bg-blue-600 text-white px-3 py-1 rounded-full uppercase">دراسة حالة ناجحة</span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-4">كيف ضاعفنا مبيعات شركة تجارية في جدة بنسبة 240%؟</h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            من خلال إعادة هيكلة موقعهم القديم وبنائه باستخدام Next.js، انخفضت نسبة ارتداد الزوار من 70% إلى 22%، وتحسنت سرعة التصفح على الجوال لترتفع طلبات الشراء أضعافاً مضاعفة في غضون 3 أشهر فقط.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-slate-800 pt-6">
            <div>
              <div className="text-3xl font-black text-blue-400 mb-1">+240%</div>
              <p className="text-sm text-slate-400">زيادة المبيعات</p>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-400 mb-1">0.8s</div>
              <p className="text-sm text-slate-400">سرعة التحميل</p>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-400 mb-1">Top 3</div>
              <p className="text-sm text-slate-400">تصدر نتائج جوجل</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Testimonials */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">آراء عملائنا في جدة والمملكة</h2>
            <p className="text-slate-400 text-lg">ما يقوله قادة الأعمال عن جودة خدماتنا البرمجية.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <p className="text-slate-300 italic mb-6">"الفرق في السرعة بين موقعنا القديم وموقعنا الجديد بـ Next.js لا يصدق! ارتفعت حجوزاتنا بشكل ملحوظ خلال أسابيع قليلة من الإطلاق."</p>
              <h4 className="font-bold text-slate-200">عبد الله الغامدي</h4>
              <span className="text-xs text-slate-500">مدير تسويق - جدة</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <p className="text-slate-300 italic mb-6">"فريق احترافي وفاهم في السيو وتقنيات الويب الحديثة. التزام تام بالمواعيد ودعم فني مستمر بعد الإطلاق."</p>
              <h4 className="font-bold text-slate-200">سارة الشمري</h4>
              <span className="text-xs text-slate-500">مؤسسة متجر إلكتروني</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <p className="text-slate-300 italic mb-6">"أفضل استثمار قمنا به لشركتنا هذا العام هو الانتقال إلى Next.js مع هذا الفريق المتميز."</p>
              <h4 className="font-bold text-slate-200">فيصل الدوسري</h4>
              <span className="text-xs text-slate-500">المدير التنفيذي - شركة خدمات</span>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Pricing */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">باقات الأسعار والاستثمار الرقمي</h2>
          <p className="text-slate-400 text-lg">باقات شفافة ومرنة تناسب حجم شركتك وطموحاتك.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">موقع الشركات (Corporate)</h3>
              <p className="text-slate-400 text-sm mb-6">مثالي للمؤسسات التي تريد حضوراً رقمياً قوياً وسريعاً.</p>
              <div className="text-3xl font-black text-blue-400 mb-6">حسب المتطلبات</div>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li>✅ تصميم واجهات مخصص (UI/UX)</li>
                <li>✅ مبني بتقنية Next.js السريعة</li>
                <li>✅ مهيأ بالكامل لمحركات البحث (SEO)</li>
                <li>✅ لوحة تحكم سهلة لإدارة المحتوى</li>
              </ul>
            </div>
            <Link href="https://wa.me/9661505388060" target="_blank" className="w-full bg-slate-800 hover:bg-slate-700 font-bold py-3 rounded-xl transition text-center block">
              اطلب الباقة
            </Link>
          </div>
          <div className="bg-blue-950/30 border-2 border-blue-500 p-8 rounded-3xl flex flex-col justify-between relative shadow-xl">
            <span className="absolute -top-4 right-8 bg-blue-600 text-white text-xs px-4 py-1 rounded-full font-bold">الأكثر طلباً</span>
            <div>
              <h3 className="text-xl font-bold mb-2">المتجر الإلكتروني (E-Commerce)</h3>
              <p className="text-slate-400 text-sm mb-6">للمتاجر التي تستهدف مبيعات عالية وأداء مستقر.</p>
              <div className="text-3xl font-black text-blue-400 mb-6">حسب المتطلبات</div>
              <ul className="space-y-3 text-slate-200 text-sm mb-8">
                <li>✅ كل مميزات موقع الشركات</li>
                <li>✅ ربط بوابات الدفع المحلية (مدى، تابي)</li>
                <li>✅ إدارة منتجات ومخزون متقدمة</li>
                <li>✅ سرعة فائقة في معالجة طلبات العملاء</li>
              </ul>
            </div>
            <Link href="https://wa.me/9661505388060" target="_blank" className="w-full bg-blue-600 hover:bg-blue-500 font-bold py-3 rounded-xl transition text-center block">
              اطلب الباقة
            </Link>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">المنصات الخاصة (Enterprise)</h3>
              <p className="text-slate-400 text-sm mb-6">للحلول البرمجية الضخمة والشركات الكبرى.</p>
              <div className="text-3xl font-black text-blue-400 mb-6">تواصل معنا</div>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li>✅ بنية تحتية مخصصة بالكامل</li>
                <li>✅ تكامل مع أنظمة ERP الخارجية</li>
                <li>✅ حماية أمنية سيبرانية متقدمة</li>
                <li>✅ مدير حساب خاص ودعم فني 24/7</li>
              </ul>
            </div>
            <Link href="https://wa.me/9661505388060" target="_blank" className="w-full bg-slate-800 hover:bg-slate-700 font-bold py-3 rounded-xl transition text-center block">
              استشر الخبراء
            </Link>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">الأسئلة الشائعة حول تصميم المواقع</h2>
            <p className="text-slate-400 text-lg">كل ما تحتاج معرفته قبل البدء في مشروعك الرقمي القادم.</p>
          </div>
          <div className="space-y-4">
            <details className="bg-slate-900 border border-slate-800 p-6 rounded-2xl cursor-pointer">
              <summary className="font-bold text-slate-100 text-lg">كم تكلفة تصميم موقع إلكتروني في جدة؟</summary>
              <p className="text-slate-400 mt-4 leading-relaxed">تختلف التكلفة بناءً على متطلبات المشروع البرمجية وحجمه (موقع تعريفي، متجر إلكتروني، أو منصة مخصصة). نقدم حلولاً استثمارية تناسب كافة الميزانيات مع ضمان أعلى عائد أرباح.</p>
            </details>
            <details className="bg-slate-900 border border-slate-800 p-6 rounded-2xl cursor-pointer">
              <summary className="font-bold text-slate-100 text-lg">لماذا تفضلون Next.js على ووردبريس في تصميم المواقع؟</summary>
              <p className="text-slate-400 mt-4 leading-relaxed">Next.js يوفر سرعة تحميل فائقة، أماناً مضاعفاً ضد الاختراقات، وتهيئة مثالية لمحركات البحث (SEO) لا تستطيع القوالب التقليدية مجاراتها.</p>
            </details>
            <details className="bg-slate-900 border border-slate-800 p-6 rounded-2xl cursor-pointer">
              <summary className="font-bold text-slate-100 text-lg">ما هي المدة المستغرقة لتنفيذ وإطلاق الموقع؟</summary>
              <p className="text-slate-400 mt-4 leading-relaxed">تتراوح المدة عادةً بين أسبوعين إلى 6 أسابيع حسب تعقيد ومتطلبات المشروع البرمجية، مع التزام تام بالجدول الزمني المحدد.</p>
            </details>
            <details className="bg-slate-900 border border-slate-800 p-6 rounded-2xl cursor-pointer">
              <summary className="font-bold text-slate-100 text-lg">هل توفرون دعماً فنياً وصيانة بعد إطلاق الموقع؟</summary>
              <p className="text-slate-400 mt-4 leading-relaxed">نعم، نقدم باقات دعم فني وصيانة متكاملة لضمان استقرار الموقع وتحديثه بشكل دائم وحمايته بأعلى المعايير.</p>
            </details>
          </div>
        </div>
      </section>

      {/* 15. Footer / CTA Final */}
      <section className="bg-slate-950 border-t border-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-right">
          <div>
            <h3 className="text-2xl font-bold mb-2">جاهز لمضاعفة مبيعاتك في جدة؟</h3>
            <p className="text-slate-400">تواصل معنا الآن واحصل على استشارة مجانية لموقعك الإلكتروني القادم.</p>
          </div>
          <div className="flex gap-4">
            <Link href="https://wa.me/9661505388060" target="_blank" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition">
              تواصل عبر الواتساب
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 text-center text-slate-500 text-sm">
          جميع الحقوق محفوظة © 2026 - تصميم وتطوير المواقع بـ Next.js
        </div>
      </section>

    </div>
  );
} 