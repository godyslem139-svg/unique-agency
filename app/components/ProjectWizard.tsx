"use client";

import React, { useState } from "react";

export default function GoogleLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    marketingHistory: "",
    websiteUrl: "",
    googleMapsUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    // تجهيز النص مع التعامل مع الحقول الاختيارية
    const fullMessage = `
      مجال البزنس: ${formData.businessType}
      سابقة التسويق: ${formData.marketingHistory || "لا يوجد"}
      رابط الموقع: ${formData.websiteUrl || "لا يوجد (طلب تصميم جديد/غير متوفر)"}
      رابط خرائط جوجل: ${formData.googleMapsUrl || "غير متوفر"}
    `;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: fullMessage,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatusMessage({ type: "success", text: "تم إرسال بياناتك بنجاح!" });
        setFormData({
          name: "",
          phone: "",
          email: "",
          businessType: "",
          marketingHistory: "",
          websiteUrl: "",
          googleMapsUrl: "",
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
    <div className="min-h-screen bg-[#07111e] text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 font-sans" dir="rtl">
      <div className="text-center max-w-xl mb-8 pt-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          اظهر في أول <span className="text-cyan-400">3 نتائج</span> على Google
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          عاوز تجيب عملاء أكتر؟ املأ الفورم وهنبعتلك فيديو بسيط بيوضح إزاي تعلي ترتيبك على Google.
        </p>
      </div>

      <div className="bg-white text-slate-900 w-full max-w-lg p-6 sm:p-8 rounded-2xl shadow-2xl relative mb-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">الاسم *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">رقم الموبايل *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">الإيميل *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">نوع/مجال البزنس بتاعك؟ *</label>
            <input
              type="text"
              name="businessType"
              required
              value={formData.businessType}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">أي سابقة في التسويق؟ (اختياري)</label>
            <input
              type="text"
              name="marketingHistory"
              value={formData.marketingHistory}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              لينك الموقع الإلكتروني (اختياري - اتركه فارغاً إذا كنت تريد تصميم موقع جديد)
            </label>
            <input
              type="text"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">لينك Google Maps (اختياري)</label>
            <input
              type="text"
              name="googleMapsUrl"
              value={formData.googleMapsUrl}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold py-3 px-4 rounded-xl transition duration-200 shadow-md text-base mt-2 disabled:opacity-50"
          >
            {loading ? "جاري الإرسال..." : "ابعث"}
          </button>

          {statusMessage && (
            <p className={`text-center text-xs mt-2 font-bold ${statusMessage.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {statusMessage.text}
            </p>
          )}

          <p className="text-center text-[11px] text-slate-400 mt-3">
            هيوصلك الفيديو على الإيميل خلال 5 دقايق، مش هنزعجك برياضتك في أمان
          </p>
        </form>
      </div>
    </div>
  );
}