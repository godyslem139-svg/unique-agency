"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await res.json();
        setStatus("error");
        setErrorMessage(errorData.error || "حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("حدث خطأ في الاتصال بالسيرفر.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#06b6d4] via-[#0ea5e9] to-[#38bdf8] py-24 px-6 font-cairo">
      <div className="max-w-5xl mx-auto">
        
        {/* العنوان */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">اتصل بنا</h1>
          <p className="text-white/80 text-lg">نحن هنا لمساعدتك في تحقيق أهدافك الرقمية. تواصل معنا اليوم!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* معلومات التواصل */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-white mb-4">بيانات التواصل</h2>
            {[
              { icon: <Mail />, title: "البريد الإلكتروني", val: "uniquecompany55@gmail.com" },
              { icon: <Phone />, title: "هاتف / واتساب", val: "01505388060" },
              { icon: <MapPin />, title: "الموقع", val: "١٣ش الشهيد محمود جمعه متفرع من جمال عبد الناصر العصافره بحري اعلى كافيه الفيروز الدور الرابع, Alexandria, Egypt" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                <div className="text-amber-200">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-white/70">{item.val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* نموذج الإتصال */}
          <motion.form 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            onSubmit={handleSubmit}
            className="bg-sky-950/40 backdrop-blur-3xl border border-white/20 p-8 rounded-[2rem] shadow-2xl"
          >
            <div className="flex flex-col gap-5">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="الاسم الكريم" 
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-amber-200 outline-none" 
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="بريدك الإلكتروني" 
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-amber-200 outline-none" 
              />
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="رقم الهاتف (اختياري)" 
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-amber-200 outline-none" 
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="كيف يمكننا مساعدتك؟" 
                className="w-full p-4 h-32 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-amber-200 outline-none"
              ></textarea>

              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl font-black bg-amber-200 text-sky-950 hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    جاري الإرسال... <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    إرسال الرسالة <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-center font-bold">
                  تم إرسال رسالتك بنجاح! وسنتواصل معك في أقرب وقت.
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-center font-bold">
                  {errorMessage}
                </div>
              )}
            </div>
          </motion.form>

        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }
      `}</style>
    </main>
  );
}