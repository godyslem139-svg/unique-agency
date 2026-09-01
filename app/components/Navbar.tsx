"use client";
import React, { useState, useEffect, FormEvent } from "react";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "الخدمات", href: "/services" },
  { name: "بورتفوليو", href: "/portfolio" },
  { name: "مشاريعنا", href: "/projects" },
  { name: "المدونة", href: "/blog" },
  { name: "اتصل بنا", href: "/contact" },
  { name: "من نحن", href: "/aboutus" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/blog?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-10 flex items-center justify-between transition-all duration-300 font-cairo ${
        isScrolled 
          ? "bg-[#00223d]/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,34,61,0.5)] border-b border-white/10" 
          : "bg-[#00223d] shadow-[0_4px_25px_rgba(0,34,61,0.3)] border-b border-white/5"
      }`} 
      style={{ direction: "rtl" }}
    >
      <div className="flex-shrink-0">
        <Link href="/" title="العودة للصفحة الرئيسية" className="w-14 h-14 md:w-16 md:h-16 relative block hover:opacity-90 transition-opacity">
          <Image 
            src="/logooo.webp" 
            alt="شعار الشركة الرسمي" 
            fill 
            sizes="(max-width: 768px) 56px, 64px"
            className="object-contain" 
            priority 
          />
        </Link>
      </div>

      <div className="hidden lg:flex items-center justify-center flex-1 px-12">
        <div className="flex items-center gap-8 xl:gap-10 bg-white/5 border border-white/10 py-3 px-10 rounded-2xl shadow-md backdrop-blur-sm hover:border-white/20 transition-all">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              className="text-white/90 font-bold text-base hover:text-yellow-400 transition-colors duration-200 whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 flex-shrink-0 justify-end">
        <form onSubmit={handleSearchSubmit} className="hidden md:flex relative items-center w-full max-w-[200px] lg:max-w-[280px]">
          <input
            type="text"
            placeholder="ابحث عن المقالات..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#001729] border border-white/10 text-white placeholder-white/40 text-sm font-medium pr-10 pl-4 py-2 rounded-xl focus:outline-none focus:border-yellow-400 shadow-inner transition-all duration-200"
          />
          <Search className="absolute right-3 text-white/40 w-4 h-4 pointer-events-none" />
        </form>

        <a 
          href="https://wa.me/201505388060" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block px-5 py-2 rounded-xl text-sm font-black text-[#00223d] bg-yellow-400 hover:bg-yellow-500 hover:scale-105 transition-all shadow-[0_4px_14px_rgba(234,179,8,0.3)] shrink-0"
        >
          ابدأ الآن
        </a>

        {/* زر القائمة للموبايل */}
        <button 
          className="lg:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10 hover:text-yellow-400 hover:border-yellow-400/30 transition-all" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "إغلاق القائمة" : "فتح قائمة التنقل"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[100%] right-0 w-full bg-[#00223d]/98 backdrop-blur-2xl text-white p-6 flex flex-col items-center gap-4 lg:hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] border-t border-white/15 transition-all">
          <form onSubmit={handleSearchSubmit} className="flex relative items-center w-full max-w-sm md:hidden mb-2">
            <input
              type="text"
              placeholder="ابحث عن المقالات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#001729] border border-white/10 text-white placeholder-white/50 text-sm pr-10 pl-4 py-2.5 rounded-xl focus:outline-none focus:border-yellow-400"
            />
            <Search className="absolute right-3 text-white/50 w-4 h-4 pointer-events-none" />
          </form>

          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              className="font-bold text-base text-white/90 hover:text-yellow-400 transition-colors w-full text-center py-2 border-b border-white/5 last:border-none" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <a 
            href="https://wa.me/201505388060" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-sm text-center py-3 mt-2 rounded-xl font-black text-[#00223d] bg-yellow-400 hover:bg-yellow-500 transition-all shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            ابدأ الآن
          </a>
        </div>
      )}
    </nav>
  );
}