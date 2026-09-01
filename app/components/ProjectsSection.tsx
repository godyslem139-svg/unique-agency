"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { title: "Quraaany", url: "https://quraaany.com/", image: "/quraaany.webp" },
  { title: "Riyadh Gateway", url: "https://riyadhgateway.com/", image: "/riyadhgateway.webp" },
  { title: "Taatim", url: "https://taatim.com/", image: "/taatim.webp" },
  { title: "Almustaemal", url: "https://almustaemal.com/", image: "/almustaemal.webp" },
  { title: "Saudi Car Buy", url: "https://saudicarbuy.com/", image: "/saudicarbuy.webp" },
  { title: "Taxi 24 KW", url: "https://taxi24-kw.com/", image: "/taxi24-kw.webp" },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 px-6 bg-sky-950" id="projects" aria-label="مشاريعنا المميزة">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16">
          مشاريعنا المميزة
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isCentered = index === 2 || index === 5;
            
            return (
              <motion.div
                key={index}
                className={isCentered ? "md:col-span-2 md:px-32" : ""}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link 
                  href={project.url} 
                  target="_blank"
                  rel="noopener noreferrer" // معيار أمان هام جداً للـ SEO عند استخدام target="_blank"
                  title={`زيارة موقع ${project.title}`}
                  className="group block overflow-hidden rounded-2xl shadow-xl border border-white/10 hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="relative h-72 overflow-hidden bg-sky-900">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full relative"
                    >
                      <Image 
                        src={project.image} 
                        alt={`لقطة شاشة من مشروع موقع ${project.title}`} 
                        fill
                        sizes="(max-w-768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500"
                        loading="lazy" // جلب الصورة فقط عندما يقترب الزائر من السكشن لسرعة خارقة
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-sky-950/40 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                  <div className="p-6 text-center bg-sky-900/50">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}