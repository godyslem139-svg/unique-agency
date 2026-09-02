"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "تصميم تطبيقات",
    website: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const fullMessage = `
      الخدمة المطلوبة: ${formData.service}
      رابط الموقع: ${formData.website || "غير متوفر"}
      تفاصيل الطلب: ${formData.message || "لا توجد تفاصيل إضافية"}
    `;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: fullMessage,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatusMessage({ type: "success", text: "تم إرسال طلبك بنجاح! سنتواصل معك قريباً." });
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "تصميم تطبيقات",
          website: "",
          message: "",
        });
      } else {
        setStatusMessage({ type: "error", text: "حدث خطأ أثناء الإرسال، حاول مرة أخرى." });
      }
    } catch (error) {
      setStatusMessage({ type: "error", text: "تعذر الاتصال بالسيرفر." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-[#0D2B42]" dir="rtl">
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

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="الاسم الكريم *" 
              className="w-full bg-[#0D2B42] border border-white/10 p-4 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition" 
            />

            <input 
              type="tel" 
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="رقم الهاتف / الواتساب *" 
              className="w-full bg-[#0D2B42] border border-white/10 p-4 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition" 
            />

            <input 
              type="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="البريد الإلكتروني *" 
              className="w-full bg-[#0D2B42] border border-white/10 p-4 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition" 
            />

            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-[#0D2B42] border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition"
            >
              <option value="تصميم تطبيقات">تصميم تطبيقات</option>
              <option value="تسويق رقمي">تسويق رقمي</option>
              <option value="تطوير مواقع">تطوير مواقع</option>
            </select>

            <input 
              type="text" 
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="رابط موقعك (إن وجد)" 
              className="md:col-span-2 w-full bg-[#0D2B42] border border-white/10 p-4 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400 transition" 
            />
            
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="كيف يمكننا مساعدتك؟" 
              className="md:col-span-2 w-full bg-[#0D2B42] border border-white/10 p-4 rounded-xl text-white placeholder:text-white/30 h-32 focus:outline-none focus:border-cyan-400 transition"
            ></textarea>

            <button 
              type="submit"
              disabled={loading}
              className="md:col-span-2 w-full bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50 text-[#0D2B42] font-black py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              {loading ? "جاري الإرسال..." : "إرسال الطلب الآن ✈️"}
            </button>

            {statusMessage && (
              <p className={`md:col-span-2 text-center text-sm font-bold ${statusMessage.type === "success" ? "text-green-400" : "text-red-400"}`}>
                {statusMessage.text}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}