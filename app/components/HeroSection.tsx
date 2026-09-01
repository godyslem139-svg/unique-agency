"use client";

export default function HeroSection() {
  return (
    /* aspect-video: تعطي السكشن أبعاد الفيديو الصحيحة تماماً على الموبايل (16:9) ليظهر كاملاً دون قص.
      md:aspect-auto md:h-screen: تعيد السكشن لملء الشاشة بالكامل على أجهزة الكمبيوتر.
    */
    <section className="relative w-full aspect-video md:aspect-auto md:h-screen overflow-hidden bg-[#0D2B42]">
      
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/Videokjk .mp4" type="video/mp4" />
      </video>

      {/* طبقة التعتيم فوق الفيديو */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* المحتوى يطفو فوق الفيديو في المنتصف تماماً */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-xl sm:text-3xl md:text-6xl font-black mb-2 md:mb-6 leading-tight max-w-4xl">
          تصميم مواقع وردبريس احترافية مع تصدر محركات البحث (SEO)
        </h1>
        <p className="text-xs sm:text-base md:text-xl mb-4 md:mb-8 max-w-2xl">
          نحول رؤيتك إلى واقع رقمي سريع ومربح.
        </p>
        <a 
          href="/wizard" 
          className="inline-block bg-amber-200 text-sky-950 font-black py-2 px-6 md:py-3 md:px-8 rounded-full hover:bg-white transition-all shadow-xl text-xs sm:text-sm md:text-lg"
        >
          احسب تكلفة مشروعك
        </a>
      </div>
    </section>
  );
}