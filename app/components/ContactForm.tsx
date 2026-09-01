"use client";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="py-24 px-6 bg-[#0D2B42]">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0B2538]/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">هل أنت جاهز للبدء؟</h2>
            <p className="text-white/70">أرسل لنا تفاصيل مشروعك وسنتواصل معك في أسرع وقت لتحديد خطة عملك.</p>
          </div>

          {/* الفورم */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="الاسم الكريم" className="w-full bg-[#0D2B42] border border-white/10 p-4 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition" />
            <input type="email" placeholder="البريد الإلكتروني" className="w-full bg-[#0D2B42] border border-white/10 p-4 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition" />
            <select className="w-full bg-[#0D2B42] border border-white/10 p-4 rounded-xl text-white/50 focus:outline-none focus:border-cyan-400 transition">
              <option>اختر الخدمة المطلوبة</option>
              <option>تصميم تطبيقات</option>
              <option>تسويق رقمي</option>
              <option>تطوير مواقع</option>
            </select>
            <input type="text" placeholder="رابط موقعك (إن وجد)" className="w-full bg-[#0D2B42] border border-white/10 p-4 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition" />
            
            <textarea placeholder="كيف يمكننا مساعدتك؟" className="md:col-span-2 w-full bg-[#0D2B42] border border-white/10 p-4 rounded-xl text-white placeholder:text-white/30 h-32 focus:outline-none focus:border-cyan-400 transition"></textarea>

            <button className="md:col-span-2 w-full bg-yellow-400 hover:bg-yellow-500 text-[#0D2B42] font-black py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
              إرسال الطلب الآن ✈️
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}