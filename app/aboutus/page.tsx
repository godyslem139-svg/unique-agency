"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Zap, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const features = [
    { icon: <Target className="w-8 h-8" />, title: "رؤيتنا", desc: "أن نكون الشريك التقني الأول للشركات التي تطمح للريادة والابتكار الرقمي في المنطقة." },
    { icon: <Zap className="w-8 h-8" />, title: "مهمتنا", desc: "تقديم حلول برمجية وتسويقية ذكية تعتمد على أحدث تقنيات الـ AI لضمان صدارة عملائنا." },
    { icon: <Users className="w-8 h-8" />, title: "فريقنا", desc: "نخبة من المطورين والمسوقين الذين يجمعون بين الإبداع التقني والخبرة التسويقية." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "قيمنا", desc: "الشفافية، الالتزام بالمواعيد، والنتائج الملموسة التي تضاعف أرباح شركائنا." }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#06b6d4] via-[#0ea5e9] to-[#38bdf8] py-32 px-6 font-cairo" style={{ direction: "rtl" }}>
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            نحن <span className="text-amber-200">UNIQUE</span>
          </motion.h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto font-medium">
            وكالة رقمية متكاملة، بدأت بشغف التكنولوجيا، وتطورت لتصبح وجهة الشركات التي تبحث عن الجودة والنتائج الحقيقية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-sky-950/30 backdrop-blur-xl border border-white/20 hover:border-amber-200/50 transition-all duration-300"
            >
              <div className="text-amber-200 mb-6">{item.icon}</div>
              <h3 className="text-2xl font-black text-white mb-3">{item.title}</h3>
              <p className="text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-10 md:p-16 rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">لماذا تختار UNIQUE؟</h2>
          <p className="text-white/90 text-lg md:text-xl leading-loose max-w-3xl mx-auto">
            لأننا لا نبيع خدمات، نحن نبني "أصولاً رقمية". كل موقع ننشئه، وكل خطة سيو نضعها، مصممة خصيصاً لتفهم سلوك جمهورك وتحوله من مجرد زائر إلى عميل دائم. نجمع بين سرعة Next.js، ذكاء فيديوهات الـ AI، وقوة استراتيجيات الـ SEO لتكون في المكان الذي يبحث فيه عملاؤك دائماً.
          </p>
        </motion.div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }
      `}</style>
    </main>
  );
}