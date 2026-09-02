"use client";

import React, { useState } from 'react';
import { 
  Code, Server, Smartphone, CheckCircle, Star, ShieldCheck, Cpu, 
  Layers, Zap, Search, ArrowLeft, MessageCircle, Globe, BarChart, 
  Layout, Clock, DollarSign, HelpCircle, ChevronDown, Sparkles, 
  Award, Check, Briefcase, TrendingUp, Settings, Lock, Compass, 
  FileText, Sliders, Send, CheckSquare, ShoppingBag, ExternalLink
} from 'lucide-react';

// =========================================================================
// بيانات المشاريع بالصور البارزة والمخصصة لكل مشروع بدقة مع الروابط والكلمات المفتاحية
// =========================================================================
const portfolioItems = [
  { 
    title: "منصة Uniquee Web Solutions", 
    category: "Next.js & React (وكالة حلول الويب)", 
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80", 
    tag: "Next.js",
    link: "https://www.uniquee-ws.com/"
  },
  { 
    title: "موقع Travel Friend للسفر والسياحة", 
    category: "ووردبريس WordPress (منصة سفر)", 
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80", 
    tag: "WordPress",
    link: "https://travelfriend-ag.com/"
  },
  { 
    title: "متجر Skyllight الإلكتروني", 
    category: "متجر إلكتروني متكامل (E-Commerce)", 
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80", 
    tag: "E-Commerce",
    link: "https://skyllight.com/"
  },
  { 
    title: "متجر Artistic Touch لمنتجات التجميل", 
    category: "متجر إلكتروني (كريم العناية بالعين)", 
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80", 
    tag: "E-Commerce",
    link: "https://artistic-touch1.myeasyorders.com/products/Eye-Contour-Cream"
  }
];

const newsTickerItems = [
  "🔥 إطلاق منصة Uniquee Web Solutions بتقنية Next.js",
  "⚡ نجاح مشروع Travel Friend عبر نظام WordPress الاحترافي",
  "🛍️ تدشين متجر Skyllight الإلكتروني بأعلى معايير السرعة",
  "💎 إطلاق متجر Artistic Touch لمنتجات العناية والتجميل",
  "🚀 خصومات خاصة على تصميم مواقع للشركات في الرياض وجدة",
  "📈 تخصص في تصميم مواقع متوافقة مع السيو لتصدر نتائج محرك بحث جوجل"
];

const timelineSteps = [
  { step: "01", title: "دراسة المتطلبات والتحليل", desc: "جلسة عصف ذهني وتحليل نشاطك التجاري المستهدف لضمان نجاح تصميم مواقع إلكترونية." },
  { step: "02", title: "تصميم واجهات المستخدم UX/UI", desc: "رسم النماذج الأولية والتصاميم البصرية التي تناسب هوية تصميم مواقع للشركات." },
  { step: "03", title: "البرمجة والتطوير الفني", desc: "تحويل التصاميم إلى أكواد نظيفة عبر أفضل شركة تصميم مواقع في المملكة." },
  { step: "04", title: "الاختبار الشامل والاطلاق", desc: "فحص السرعة، التوافق مع الجوال، وربط السيو قبل نشر تصميم موقع إلكتروني للعلن." }
];

const websiteTypes = [
  { title: "مواقع التعريف بالشركات", desc: "تعكس هوية منشأتك بأسلوب عصري يبرز خدماتك للعملاء.", icon: Briefcase },
  { title: "المتاجر الإلكترونية", desc: "منصات بيع متكاملة مع بوابات دفع آمنة وإدارة مخزون ذكية.", icon: ShoppingBag },
  { title: "المنصات الإخبارية والمدونات", desc: "أنظمة إدارة محتوى قوية قابلة للتوسع ونشر المقالات بسرعة.", icon: FileText },
  { title: "بوابات الويب والتطبيقات الخاصة", desc: "حلول برمجية معقدة مخصصة للشركات الكبرى والمؤسسات.", icon: Cpu }
];

const technologiesList = [
  { name: "Next.js & React", desc: "للأداء الفائق والسرعة المطلقة وتوافق السيو." },
  { name: "Laravel PHP", desc: "لتطوير الأنظمة المعقدة وقواعد البيانات الضخمة." },
  { name: "WordPress VIP", desc: "للمواقع الإخبارية والمتاجر سريعة الإطلاق." },
  { name: "Tailwind CSS", desc: "تصاميم عصرية، مرنة، ومتجاوبة بدقة مع كافة الشاشات." }
];

const techComparison = [
  { feature: "السرعة والأداء", wp: "متوسط (يحتاج إضافات للتحسين)", next: "فائق السرعة (Static & SSR)", laravel: "سريع وقوي جداً" },
  { feature: "الحماية والأمان", wp: "عرضة للاختراق عند إهمال التحديثات", next: "مستوى حماية عالي جداً ضد الثغرات", laravel: "إطار عمل محمي بطبيعته" },
  { feature: "التوافق مع السيو (SEO)", wp: "ممتاز (عبر إضافات مثل RankMath)", next: "مثالي ومخصص بالكامل لمحركات البحث", laravel: "مرن وقابل للتحسين بالكامل" },
  { feature: "الاستخدام الأنسب", wp: "المتاجر الإلكترونية والمدونات", next: "المواقع الكبرى ومنصات الويب المعقدة", laravel: "تطبيقات الويب الضخمة والنظام الخاص" }
];

const pricingPackages = [
  {
    name: "باقة الشركات الناشئة",
    price: "3,500 ريال",
    desc: "مناسبة لأصحاب العمل الحر والشركات الصغيرة لبدء تصميم موقع إلكتروني احترافي.",
    features: ["تصميم موقع تعريفى متجاوب", "5 إلى 7 صفحات رئيسية", "ربط وسائل التواصل الاجتماعي", "لوحة تحكم سهلة الإدارة", "دعم فني لمدة عام"],
    popular: false,
    color: "border-slate-700 bg-[#081730]"
  },
  {
    name: "باقة تصميم مواقع احترافية",
    price: "7,200 ريال",
    desc: "الاختيار الأول للشركات المتوسطة التي تبحث عن تميز ومضاعفة المبيعات.",
    features: ["موقع كامل متقدم ومتجاوب", "صفحات غير محدودة حسب الطلب", "تهيئة كاملة لمحركات البحث (SEO)", "سرعة تحميل فائقة Core Web Vitals", "ربط بوابات الدفع الإلكتروني"],
    popular: true,
    color: "border-yellow-400/60 bg-gradient-to-b from-[#0e2246] to-[#040d1a] shadow-[0_0_40px_rgba(234,179,8,0.2)]"
  },
  {
    name: "باقة الأنظمة المخصصة",
    price: "حسب الطلب",
    desc: "للمشاريع الكبرى وتطبيقات الويب المعقدة بتقنيات Next.js و Laravel.",
    features: ["تطوير مخصص بالكامل (Custom Development)", "معمارية برمجية قابلة للتوسع الضخم", "حماية وأمان عالي المستوى", "مدير مشروع خاص ومتابعة دورية", "ضمان واستقرار شامل"],
    popular: false,
    color: "border-slate-700 bg-[#081730]"
  }
];

const testimonials = [
  { name: "عبدالله الشمري", role: "مدير شركة تجارية في الرياض", text: "تعاملنا معهم في تصميم مواقع في السعودية وكانت التجربة مذهلة بكل المقاييس، سرعة ودقة واحترافية عالية." },
  { name: "سارة الغامدي", role: "رائدة أعمال في جدة", text: "أفضل شركة تصميم مواقع تعاملت معها، ساعدونا كثيراً في تصميم مواقع متوافقة مع السيو وزادت أرباح متجرنا بفضلهم." },
  { name: "فهد القحطاني", role: "مستثمر تقني", text: "الخدمة ممتازة والدعم الفني مستمر. أنصح بشدة بالاعتماد عليهم في تصميم مواقع للشركات." }
];

const faqsList = [
  { q: "ما هي المدة المستغرقة لتصميم وبرمجة موقع إلكتروني؟", a: "تختلف المدة حسب حجم المشروع، وعادة تتراوح بين أسبوعين إلى 6 أسابيع للمواقع الاحترافية." },
  { q: "هل الموقع متوافق مع محركات البحث (SEO)؟", a: "نعم، جميع مواقعنا مصممة خصيصًا لتكون متوافقة بنسبة 100% مع معايير السيو ومحرك بحث Google." },
  { q: "هل تقدمون خدمات تسويق إلكتروني بجانب التصميم؟", a: "نعم، نقدم استراتيجيات متكاملة تشمل خدمات شركة تسويق الكتروني لضمان نجاح مشروعك الرقمي." },
  { q: "هل سيكون الموقع متوافقًا مع الجوال والأجهزة الذكية؟", a: "بالتأكيد، نصمم المواقع بتقنية Responsive Design لتظهر بكفاءة عالية على الهواتف والأجهزة اللوحية." },
  { q: "هل أحتاج لمعرفة برمجية لإدارة الموقع مستقبلاً؟", a: "أبداً، نسلمك لوحة تحكم باللغة العربية سهلة الاستخدام ومرفقة بدليل تدريبي كامل." },
  { q: "ما هي تكلفة تصميم مواقع في الرياض وجدة؟", a: "تختلف الأسعار بناءً على نوع الموقع وحجمه، ولدينا باقات تبدأ من 3,500 ريال سعودي." },
  { q: "هل يتم استضافة الموقع على سيرفرات سريعة؟", a: "نعم، نوفر استضافة سريعة وآمنة مع شهادة حماية SSL مجانية." },
  { q: "هل يمكنني تعديل التصميم أثناء مرحلة العمل؟", a: "نعم، نتيح لعملائنا فرصة مراجعة النماذج وإبداء الملاحظات في المراحل المحددة قبل الإطلاق." },
  { q: "هل تضمنون سرعة تحميل الموقع؟", a: "بالتأكيد، نلتزم بتحقيق أعلى معايير الأداء والسرعة (Core Web Vitals)." },
  { q: "كيف أبدأ معكم العمل على مشروعي؟", a: "يمكنك التواصل معنا مباشرة عبر زر الواتساب في الموقع لنناقش تفاصيل فكرتك ونقدم لك استشارة مجانية." },
  { q: "هل تقدمون عقود صيانة سنوية للمواقع؟", a: "نعم، نوفر باقات صيانة دورية تضمن استقرار وأمان الموقع طوال العام." },
  { q: "هل يمكن ربط الموقع ببوابات الدفع المحلية في السعودية؟", a: "نعم، نربط متجرك ببوابات الدفع الشهيرة مثل تابي، تمارا، ميدي، ومحفظة مدى." },
  { q: "ما الفرق بين تصميم مواقع إلكترونية جاهزة ومخصصة؟", a: "المواقع المخصصة تُبنى خصيصاً لتلبي احتياجاتك الفريدة دون قيود القوالب الجاهزة." },
  { q: "هل تساعدوننا في كتابة المحتوى التسويقي للموقع؟", a: "نعم، لدينا فريق متخصص في صياغة محتوى متوافق مع السيو ويجذب العملاء." },
  { q: "هل يوفر الموقع ميزة تعدد اللغات؟", a: "نعم، يمكننا برمجة وتصميم موقع يدعم اللغة العربية والإنجليزية وأي لغات أخرى حسب الطلب." },
  { q: "هل أملك حقوق ملكية الموقع بالكامل بعد التسليم؟", a: "بالتأكيد، فور اكتمال المشروع وسداد المستحقات تكون أنت المالك الوحيد للأكواد وهوية الموقع." },
  { q: "هل تقدمون استشارات تسويقية بعد إطلاق الموقع؟", a: "نعم، نربط خدماتنا مع خبرات شركة تسويق الكتروني لضمان جلب الزوار والمشترين." },
  { q: "ما هي التقنيات المستخدمة في تصميم مواقع احترافية لديكم؟", a: "نستخدم أحدث التقنيات العالمية مثل Next.js, React, Laravel, و WordPress." },
  { q: "هل تدعمون نقل المواقع القديمة إلى تصميم جديد؟", a: "نعم، نقوم بنقل محبي موقعك القديم وقواعد البيانات بكل أمان ودون فقدان لأرشفتك في جوجل." },
  { q: "هل تمنحون ضماناً على الأكواد والبرمجة؟", a: "نعم، نمنح ضماناً شاملًا ضد أي عيوب برمجية لفترة محددة بعد التسليم." },
  { q: "لماذا تعتبرون أفضل شركة تصميم مواقع في السعودية؟", a: "بسبب خبرتنا الطويلة، التزامنا بالمواعيد، والنتائج الفعلية التي نحققها لعملائنا." },
  { q: "هل يمكن تتبع زوار الموقع وإحصائياتهم؟", a: "نعم، نربط موقعك بأدوات تحليلات متقدمة مثل Google Analytics و Google Search Console." }
];

export default function RiyadhClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);  
  
  // حاسبة تكلفة المشروع (State)
  const [calcType, setCalcType] = useState('corporate');
  const [calcPages, setCalcPages] = useState('5-10');
  const [calcSEO, setCalcSEO] = useState(true);
  const [calcPayment, setCalcPayment] = useState(false);

  const calculateEstimate = () => {
    let base = calcType === 'corporate' ? 4000 : calcType === 'store' ? 7000 : 10000;
    if (calcPages === '10-25') base += 2000;
    if (calcPages === 'unlimited') base += 5000;
    if (calcSEO) base += 1500;
    if (calcPayment) base += 1500;
    return base;
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <main className="bg-[#040D1A] min-h-screen text-slate-100 font-sans selection:bg-yellow-400 selection:text-sky-950" dir="rtl">
      
      {/* ========================================================================= */}
      {/* 1. HERO احترافي */}
      {/* ========================================================================= */}
      <section className="relative pt-28 pb-20 px-6 md:px-12 overflow-hidden border-b border-slate-800/80">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs md:text-sm font-bold text-cyan-400">الريادة في الابتكار الرقمي بالمملكة</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              أفضل <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-400 to-amber-400">شركة تصميم مواقع</span> في السعودية والرياض
            </h1>

            <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed">
              نقدم خدمات <span className="text-yellow-400 font-bold">تصميم مواقع إلكترونية</span> احترافية <span className="text-cyan-400 font-bold">تصميم مواقع متوافقة مع السيو</span> لتكون دائمًا في صدارة نتائج البحث. نعتبر الخيار الأول لعمليات <span className="text-yellow-400 font-bold">تصميم مواقع للشركات</span> والمتاجر عبر خدمات <span className="text-cyan-400 font-bold">تصميم موقع إلكتروني</span> بمعايير عالمية.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://wa.me/201505388060" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sky-950 bg-gradient-to-r from-yellow-400 to-amber-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(234,179,8,0.4)] text-base"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                اطلب استشارتك المجانية الآن
              </a>
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-6 h-6 text-cyan-400" />
                <span className="text-sm font-bold text-slate-200">ضمان جودة الأكواد والسرعة</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-br from-cyan-500/30 via-yellow-500/20 to-purple-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
              <div className="rounded-[2.3rem] overflow-hidden bg-[#081730] border border-slate-700/80 p-6 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                  alt="تصميم مواقع في الرياض" 
                  className="rounded-2xl w-full h-64 object-cover mb-4 shadow-lg"
                />
                <h3 className="text-xl font-bold text-white mb-2">تصميم مواقع في الرياض وجدة</h3>
                <p className="text-xs text-slate-400">نحول أفكارك إلى منصات رقمية متكاملة تحقق أهدافك التجارية بدقة عالية.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. لماذا نحن */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-[#040D1A] border-b border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-400 font-bold text-xs uppercase tracking-widest block mb-2">OUR STRENGTHS</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">لماذا نحن الخيار الأمثل لمنشأتك؟</h2>
            <p className="text-slate-300 text-base">باعتبارنا <span className="text-yellow-400 font-bold">أفضل شركة تصميم مواقع</span>، نبتكر تجارب مستخدم فريدة تضمن تفوقك في سوق الرياض وجدة وباقي مدن السعودية.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-[#081730] border border-slate-700/80 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">خبرة واسعة في السوق السعودي</h3>
              <p className="text-slate-300 text-sm leading-relaxed">نفهم بدقة تطلعات المستهلك السعودي في <span className="text-cyan-400 font-bold">تصميم مواقع في السعودية</span> ومتطلبات قطاع الأعمال المحلي.</p>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#081730] border border-slate-700/80 hover:border-yellow-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">جودة أكواد تضاهي المعايير العالمية</h3>
              <p className="text-slate-300 text-sm leading-relaxed">نحرص على بناء <span className="text-yellow-400 font-bold">تصميم مواقع احترافية</span> بأكواد نظيفة وآمنة تماماً وخالية من الثغرات البرمجية.</p>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#081730] border border-slate-700/80 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">حلول متكاملة ومستمرة</h3>
              <p className="text-slate-300 text-sm leading-relaxed">نقدم خدمات داعمة تشمل استشارات التسويق لتعزيز قوة <span className="text-purple-400 font-bold">تصميم مواقع في الرياض</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. إحصائيات */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 md:px-12 bg-[#02060E] border-b border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-[2.5rem] bg-gradient-to-r from-[#081730] to-[#040d1a] border border-slate-700">
            <div className="text-center">
              <h4 className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">+250</h4>
              <p className="text-xs md:text-sm text-slate-300 font-medium">موقع تم إنجازه بنجاح</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl md:text-4xl font-black text-cyan-400 mb-1">99%</h4>
              <p className="text-xs md:text-sm text-slate-300 font-medium">نسبة رضا العملاء</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl md:text-4xl font-black text-purple-400 mb-1">+8 سنوات</h4>
              <p className="text-xs md:text-sm text-slate-300 font-medium">خبرة في <span className="text-purple-400">تصميم مواقع في جدة</span></p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">24/7</h4>
              <p className="text-xs md:text-sm text-slate-300 font-medium">دعم فني واستجابة سريعة</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. معرض أعمال (المشاريع الفعلية للعميل بالصور البارزة المخصصة) */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-[#040D1A] border-b border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2">OUR PORTFOLIO & PROJECTS</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">نماذج من أحدث مشاريعنا المنفذة</h2>
            <p className="text-slate-300 text-base">استعرض مشاريعنا التي تعكس تفوقنا في <span className="text-cyan-400 font-bold">تصميم مواقع إلكترونية</span> ومتاجر ذكية:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, idx) => (
              <div key={idx} className="group rounded-[2rem] overflow-hidden bg-[#081730] border border-slate-700/80 hover:border-yellow-400/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <span className="absolute top-4 right-4 bg-yellow-400 text-sky-950 font-black text-xs px-3 py-1.5 rounded-full shadow-lg">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-cyan-400 font-bold mb-1 block">{item.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-300">تم تنفيذ هذا المشروع بأعلى معايير الجودة البرمجية وتجربة مستخدم مثالية لضمان أعلى عائد استثماري.</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-bold transition-colors"
                  >
                    <span>زيارة المشروع الحقيقي</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. شريط الأخبار وكروت متعددة (Ticker / Cards Section) */}
      {/* ========================================================================= */}
      <section className="py-16 px-6 md:px-12 bg-[#02060E] border-b border-slate-800 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">⚡ نبض المشاريع والتحديثات الحية</h2>
            <p className="text-slate-400 text-xs md:text-sm">تابع أحدث الإنجازات والعروض الخاصة في مجال <span className="text-yellow-400 font-bold">تصميم مواقع للشركات</span>.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newsTickerItems.map((news, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#081730] border border-slate-700/80 hover:border-cyan-500/40 transition-all flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-cyan-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="text-xs md:text-sm font-bold text-slate-200 leading-snug">{news}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. مراحل تنفيذ المشروع (Timeline) */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-[#040D1A] border-b border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">⏳ مراحل تنفيذ المشروع بدقة منهجية</h2>
            <p className="text-slate-300 text-sm">خطوات مدروسة تضمن إطلاق موقعك باحترافية عبر <span className="text-cyan-400 font-bold">أفضل شركة تصميم مواقع</span>.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#081730] border border-slate-700/80 relative flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-cyan-400 mb-4 block">{step.step}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. أنواع المواقع التي نصممها */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-[#02060E] border-b border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">🌐 أنواع المواقع التي نصممها</h2>
            <p className="text-slate-300 text-sm">نلبي كافة احتياجاتك الرقمية من خلال <span className="text-yellow-400 font-bold">تصميم مواقع إلكترونية</span> مخصصة ومتكاملة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {websiteTypes.map((type, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-[#081730] border border-slate-700/80 hover:border-cyan-500/50 transition-colors flex flex-col items-start">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400">
                  <type.icon />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. التقنيات المستخدمة */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-[#040D1A] border-b border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">⚙️ التقنيات المستخدمة في التطوير</h2>
            <p className="text-slate-300 text-sm">نعتمد على أدوات عالمية لضمان أداء فائق لكل <span className="text-cyan-400 font-bold">تصميم موقع إلكتروني</span>.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologiesList.map((tech, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#081730] border border-slate-700/80">
                <Cpu className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. لماذا مواقعنا أسرع من المنافسين */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-[#02060E] border-b border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block">LIGHTNING FAST PERFORMANCE</span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">لماذا مواقعنا أسرع بكثير من المنافسين؟</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                نحن ندمج معايير السرعة الفائقة في كل <span className="text-yellow-400 font-bold">تصميم مواقع متوافقة مع السيو</span> لتتجاوز اختبارات جوجل وتحقق أفضل تجربة للمستخدم في المملكة.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>ضغط ملفات السيرفر وتحسين التخزين المؤقت (Caching)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>استخدام شبكات توزيع المحتوى العالمية CDN</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>صور محسنة بأحدث صيغ الضغط دون فقدان الجودة</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 p-8 rounded-[2.5rem] bg-[#081730] border border-slate-700 text-center">
              <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-2">سرعة تحميل أقل من ثانية</h3>
              <p className="text-xs text-slate-300">معدل تقييم أداء يبلغ 99/100 على منصة Google PageSpeed Insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. تحسين محركات البحث المدمج */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-[#040D1A] border-b border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">🔍 تحسين محركات البحث (SEO) المدمج</h2>
            <p className="text-slate-300 text-sm">موقعك جاهز تماماً للظهور في الصفحة الأولى من جوجل عبر استراتيجيات <span className="text-cyan-400 font-bold">تصميم مواقع متوافقة مع السيو</span>.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-[#081730] border border-slate-700">
              <Search className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">أكواد مهيأة تماماً للأرشفة</h3>
              <p className="text-xs text-slate-300">هيكل بيانات منظم Schema Markup يسهل على محركات البحث فهم محتوى موقعك.</p>
            </div>
            <div className="p-6 rounded-3xl bg-[#081730] border border-slate-700">
              <BarChart className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">تكامل مع أدوات التحليل</h3>
              <p className="text-xs text-slate-300">ربط أدوات Google Search Console و Google Analytics لمتابعة الزوار بدقة.</p>
            </div>
            <div className="p-6 rounded-3xl bg-[#081730] border border-slate-700">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">استراتيجيات نمو مستدامة</h3>
              <p className="text-xs text-slate-300">نمنحك أساساً قوياً يتماشى مع خطط التسويق الرقمي لجذب عملاء جدد باستمرار.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. مقارنة التقنيات */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-[#02060E] border-b border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              📊 مقارنة بين التقنيات: WordPress vs Next.js vs Laravel
            </h2>
            <p className="text-slate-300 text-sm">نساعدك في اختيار التقنية البرمجية الأنسب لكل <span className="text-yellow-400 font-bold">تصميم موقع إلكتروني</span>.</p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-slate-700 bg-[#081730] shadow-xl">
            <table className="w-full text-right border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-700 bg-[#061226]">
                  <th className="p-5 font-black text-yellow-400 text-base">وجه المقارنة</th>
                  <th className="p-5 font-black text-cyan-400 text-base">ووردبريس (WordPress)</th>
                  <th className="p-5 font-black text-purple-400 text-base">نكست جيه إس (Next.js)</th>
                  <th className="p-5 font-black text-emerald-400 text-base">لارافل (Laravel)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm">
                {techComparison.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/[0.02]">
                    <td className="p-5 font-bold text-white">{row.feature}</td>
                    <td className="p-5 text-slate-300">{row.wp}</td>
                    <td className="p-5 text-slate-300">{row.next}</td>
                    <td className="p-5 text-slate-300">{row.laravel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. عوامل نجاح الموقع */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-[#040D1A] border-b border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">🏆 عوامل نجاح الموقع الإلكتروني</h2>
            <p className="text-slate-300 text-sm">العناصر الأساسية التي نضمن توافرها في كل خدمة <span className="text-cyan-400 font-bold">تصميم مواقع احترافية</span>.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#081730] border border-slate-700">
              <Layout className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">تجربة المستخدم UI/UX المريحة</h3>
              <p className="text-xs text-slate-300">تصاميم سلسة تجعل تصفح موقعك تجربة ممتعة تدفع العميل لاتخاذ قرار الشراء.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#081730] border border-slate-700">
              <Lock className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">الأمان والحماية العالية</h3>
              <p className="text-xs text-slate-300">تأمين بيانات العملاء والصفحات ضد الاختراقات والهجمات السيبرانية.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#081730] border border-slate-700">
              <Smartphone className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">التوافق التام مع الجوال</h3>
              <p className="text-xs text-slate-300">عرض مثالى ومتقن على الهواتف الذكية والأجهزة اللوحية بمختلف أحجامها.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. أسعار تصميم المواقع */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-[#02060E] border-b border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-400 font-bold text-xs uppercase tracking-widest block mb-2">PRICING PLANS</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">أسعار تصميم المواقع في السعودية</h2>
            <p className="text-slate-300 text-base">باقات أسعار شفافة ومدروسة لكل من يرغب في خدمات <span className="text-yellow-400 font-bold">تصميم مواقع في السعودية</span> بدون أي رسوم خفية.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPackages.map((pkg, pIdx) => (
              <div key={pIdx} className={`p-8 rounded-[2.5rem] border-2 ${pkg.color} flex flex-col justify-between relative`}>
                {pkg.popular && (
                  <span className="absolute -top-4 right-8 bg-yellow-400 text-sky-950 font-black text-xs px-4 py-1.5 rounded-full shadow-lg">
                    الأكثر طلباً
                  </span>
                )}
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                  <p className="text-slate-300 text-xs mb-6">{pkg.desc}</p>
                  <div className="text-3xl font-black text-yellow-400 mb-6">{pkg.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-200">
                        <Check className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="https://wa.me/201505388060" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl font-bold text-center bg-white/10 hover:bg-yellow-400 hover:text-sky-950 transition-all text-sm block"
                >
                  اختر الباقة واطلب الآن
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14. حاسبة تكلفة المشروع (Interactive Cost Calculator) */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-[#040D1A] border-b border-slate-800">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">🧮 حاسبة تكلفة المشروع الفورية</h2>
            <p className="text-slate-300 text-sm">حدد مواصفات مشروعك المقترحة واحصل على تقدير تكلفة مبدئي للحال.</p>
          </div>

          <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#081730] border border-slate-700 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-white mb-3">نوع الموقع المطلوب:</label>
                <select 
                  value={calcType} 
                  onChange={(e) => setCalcType(e.target.value)}
                  className="w-full p-4 rounded-xl bg-[#040D1A] border border-slate-700 text-white text-sm focus:outline-none focus:border-yellow-400"
                >
                  <option value="corporate">موقع شركات وتعريفي</option>
                  <option value="store">متجر إلكتروني متكامل</option>
                  <option value="custom">تطبيق ويب معقد / نظام خاص</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-3">عدد الصفحات التقريبي:</label>
                <select 
                  value={calcPages} 
                  onChange={(e) => setCalcPages(e.target.value)}
                  className="w-full p-4 rounded-xl bg-[#040D1A] border border-slate-700 text-white text-sm focus:outline-none focus:border-yellow-400"
                >
                  <option value="5-10">من 5 إلى 10 صفحات</option>
                  <option value="10-25">من 10 إلى 25 صفحة</option>
                  <option value="unlimited">صفحات غير محدودة</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={calcSEO} 
                  onChange={(e) => setCalcSEO(e.target.checked)} 
                  className="w-5 h-5 accent-yellow-400 rounded"
                />
                <span className="text-sm font-medium text-slate-200">تهيئة متقدمة لمحركات البحث (SEO)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={calcPayment} 
                  onChange={(e) => setCalcPayment(e.target.checked)} 
                  className="w-5 h-5 accent-yellow-400 rounded"
                />
                <span className="text-sm font-medium text-slate-200">ربط بوابات دفع إلكترونية سعودية</span>
              </label>
            </div>

            <div className="p-6 rounded-2xl bg-[#040D1A] border border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <span className="text-xs text-slate-400 block mb-1">التقدير المبدئي للتكلفة:</span>
                <span className="text-3xl font-black text-yellow-400">{calculateEstimate()} ريال سعودي</span>
              </div>
              <a 
                href="https://wa.me/201505388060" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl font-bold text-sky-950 bg-yellow-400 hover:scale-105 transition-all text-sm"
              >
                اطلب هذا العرض عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 15. دراسة حالة بالأرقام */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-[#02060E] border-b border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">📈 دراسة حالة بالأرقام لعميل ناجح</h2>
            <p className="text-slate-300 text-sm">كيف ساهمنا في مضاعفة أرباح أحد عملائنا عبر إعادة هندسة وتطوير موقعه الرقمي.</p>
          </div>

          <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#081730] border border-slate-700 grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
            <div>
              <h4 className="text-4xl font-black text-yellow-400 mb-2">+320%</h4>
              <p className="text-sm text-slate-300">زيادة في معدل المبيعات الشهرية</p>
            </div>
            <div>
              <h4 className="text-4xl font-black text-cyan-400 mb-2">0.8s</h4>
              <p className="text-sm text-slate-300">سرعة تحميل الصفحة النهائية</p>
            </div>
            <div>
              <h4 className="text-4xl font-black text-purple-400 mb-2">#1</h4>
              <p className="text-sm text-slate-300">الظهور في نتائج جوجل الأولى</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 16. مراجعات العملاء */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-[#040D1A] border-b border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">⭐ آراء ومراجعات عملائنا</h2>
            <p className="text-slate-300 text-sm">ماذا يقول عنا أصحاب الشركات ورواد الأعمال في المملكة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-[#081730] border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">"{t.text}"</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <span className="text-[11px] text-cyan-400">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 17. الأسئلة الشائعة (22 سؤالاً) */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-[#02060E] border-b border-slate-800">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">❓ الأسئلة الشائعة (دليل شامل)</h2>
            <p className="text-slate-300 text-sm">أكثر من 22 إجابة مفصلة لكل ما يدور في ذهنك قبل بدء مشروعك الرقمي.</p>
          </div>

          <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
            {faqsList.map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-[#081730] border border-slate-700/80 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-right flex justify-between items-center font-bold text-white hover:text-yellow-400 transition-colors"
                >
                  <span className="text-sm md:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-yellow-400' : 'text-slate-400'}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-800 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 18. CTA قوي ومتكرر */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#081730] via-[#040d1a] to-[#02060E] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-400/5 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10 space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            جاهز للانطلاق بمشروعك الرقمي نحو <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">القمة؟</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر مخصص لموقعك الإلكتروني مع <span className="text-yellow-400 font-bold">أفضل شركة تصميم مواقع</span> في السعودية والرياض وجدة.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/201505388060"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-5 rounded-2xl font-black text-sky-950 bg-gradient-to-r from-yellow-400 to-amber-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(234,179,8,0.4)] text-lg"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              تواصل عبر واتساب الآن
            </a>
          </div>
        </div>
      </section>

      {/* التنسيقات العامة */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #040D1A;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 4px;
        }
      `}</style>
    </main>
  );
}