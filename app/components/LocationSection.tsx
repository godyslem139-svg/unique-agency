"use client";
import { motion } from "framer-motion";

export default function LocationSection() {
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent("١٣ ش الشهيد محمود جمعه، العصافرة بحري، الإسكندرية، مصر");

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.8718228308485!2d30.0135!3d31.2725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDE2JzIxLjAiTiAzMMKwMDAnNDguNiJF!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg";

  return (
    <section className="py-24 px-6 bg-[#0D2B42] text-white" id="location" aria-label="موقع الوكالة الجغرافي">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-black mb-8 font-cairo">مقر الوكالة الرئيسي</h2>
          
          <div className="bg-[#0B2538] p-8 rounded-3xl border border-white/5 shadow-inner space-y-5 text-base md:text-lg font-medium leading-relaxed">
            <div className="flex items-start gap-4">
              <span className="text-2xl shrink-0" aria-hidden="true">📍</span>
              <p>١٣ش الشهيد محمود جمعه متفرع من جمال عبد الناصر العصافره بحري اعلى كافيه الفيروز الدور الرابع، الإسكندرية، مصر.</p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-2xl shrink-0" aria-hidden="true">⏰</span>
              <p>ساعات العمل: من <time dateTime="09:00">9:00 صباحاً</time> وحتى <time dateTime="18:00">6:00 مساءً</time></p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-2xl shrink-0" aria-hidden="true">🎧</span>
              <p>دعم العملاء (الخليج ومصر): متوفر على مدار 24 ساعة</p>
            </div>
          </div>

          <a 
            href={googleMapsDirectionsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            title="افتح موقع الوكالة على خرائط جوجل للحصول على اتجاهات السير"
            className="inline-block mt-4 bg-[#0096e6] text-white font-black py-3.5 px-8 rounded-xl hover:bg-yellow-400 hover:text-sky-950 hover:scale-105 transition-all shadow-md font-cairo text-sm"
          >
            افتح الاتجاهات في Google Maps ←
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full h-96 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl hover:border-white/20 transition-all group"
        >
          <iframe 
            src={mapEmbedUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            title="خريطة تفاعلية توضح موقع مقر الوكالة الرئيسي بالإسكندرية" 
            className="w-full h-full grayscale-[15%] contrast-[110%] group-hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </motion.div>
        
      </div>
    </section>
  );
}