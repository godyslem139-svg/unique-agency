import React from 'react';
import Link from 'next/link';

async function getWordPressPosts() {
  const query = `
    query GetAllPosts {
      posts (first: 100) {
        nodes {
          title
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch('https://unique-ws.com/graphql', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ query }),
      cache: 'no-store'
    });

    if (!res.ok) return [];

    const json = await res.json();
    return json.data?.posts?.nodes || [];
  } catch (err) {
    console.error("خطأ حرج في جلب البيانات:", err);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getWordPressPosts();

  const snowflakes = Array.from({ length: 60 }).map((_, i) => ({ 
    id: i, 
    left: `${(i * 1.7) % 100}%`, 
    size: `${(i % 5) + 3}px`, 
    delay: `${(i % 12) * 0.5}s`, 
    duration: `${(i % 10) + 7}s`, 
    opacity: ((i % 6) + 4) / 10
  }));

  return (
    <main className="relative min-h-screen bg-gradient-to-tr from-[#06b6d4] via-[#0ea5e9] to-[#38bdf8] overflow-x-hidden pt-10 pb-20 font-cairo" style={{ direction: "rtl" }}>
      
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {snowflakes.map((snow) => (
          <div 
            key={snow.id} 
            className="absolute bg-white rounded-full animate-snow" 
            style={{ 
              top: "-20px", 
              left: snow.left, 
              width: snow.size, 
              height: snow.size, 
              opacity: snow.opacity, 
              animationDelay: snow.delay, 
              animationDuration: snow.duration 
            }} 
          />
        ))}
      </div>

      <div className="relative z-10 px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">أحدث المقالات والأخبار</h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            تابع آخر الشروحات، النصائح، والمقالات الحصرية في عالم التسويق الرقمي وتطوير الويب.
          </p>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center text-white pt-20">
            <p className="text-xl font-bold mb-2">لا توجد مقالات لعرضها حالياً.</p>
            <p className="text-white/70 text-sm">برجاء التأكد من تحديث الرابط الأساسي واستقرار الاتصال المباشر بالسيرفر الرئيسي.</p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link href={`/${post.slug}`} key={post.slug} className="group block h-full">
                <div className="bg-white border border-white/20 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-amber-400 transition-all duration-300 h-full shadow-lg flex flex-col">
                  
                  {post.featuredImage?.node?.sourceUrl && (
                    <div className="h-48 overflow-hidden bg-sky-950/5">
                      <img 
                        src={post.featuredImage.node.sourceUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-black mb-3 group-hover:text-amber-700 transition line-clamp-2">
                        {post.title}
                      </h2>
                      <div 
                        className="text-gray-600 text-sm font-medium line-clamp-3 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }} 
                      />
                    </div>
                    
                    <div className="text-sky-600 font-bold text-sm flex items-center gap-1 group-hover:translate-x-[-4px] transition-transform duration-300 self-start">
                      اقرأ المقال بالكامل ←
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }
        .animate-snow { animation: snowFall 10s linear infinite; }
        @keyframes snowFall { to { transform: translateY(105vh); } }
      `}</style>
    </main>
  );
}