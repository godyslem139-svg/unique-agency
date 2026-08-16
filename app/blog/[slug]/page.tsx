import { getPostBySlug, getAllPosts } from '@/lib/wordpress';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  
  const decodedSlug = decodeURIComponent(slug);
  
  const post = await getPostBySlug(decodedSlug);
  const allPosts = await getAllPosts(); 

  if (!post) notFound();

  return (
    <main className="min-h-screen py-32 px-6 bg-gradient-to-tr from-[#06b6d4] via-[#0ea5e9] to-[#38bdf8]" style={{ direction: 'rtl' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <article className="lg:col-span-8">
          <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-[2rem] p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div 
              className="text-gray-800 text-lg leading-9 space-y-6 
              [&_h2]:text-amber-600 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:text-sky-700 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mt-8
              [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pr-8 [&_ol]:list-decimal [&_ol]:pr-8 
              [&_li]:mb-2 [&_a]:text-sky-600 [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>
        </article>

        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-white/10 p-6 rounded-3xl border border-white/20 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/20 pb-4">أحدث المقالات</h3>
            <div className="space-y-6">
              {allPosts && allPosts.slice(0, 5).map((p: any) => (
                <a key={p.slug} href={`/blog/${p.slug}`} className="group flex gap-4 items-center">
                  {p.featuredImage?.node?.sourceUrl && (
                    <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden border border-white/10">
                      <img src={p.featuredImage.node.sourceUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  )}
                  <h4 className="text-white font-medium text-sm leading-tight group-hover:text-amber-200 transition">{p.title}</h4>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-3xl border border-white/20 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/20 pb-4">الأكثر مشاهدة</h3>
            <div className="space-y-6">
              {[
                { title: "دليلك الشامل لأساسيات تحسين محركات البحث SEO", views: "1.2K مشاهدة", img: "https://images.unsplash.com/photo-1571677663480-c114bb607673?w=150" },
                { title: "كيف تختار أفضل استضافة لموقعك في 2026", views: "950 مشاهدة", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=150" },
                { title: "أسرار التسويق الرقمي للشركات الناشئة", views: "800 مشاهدة", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=150" },
                { title: "كيف تحمي موقعك من هجمات الهاكرز", views: "750 مشاهدة", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=150" },
                { title: "أهم إضافات ووردبريس التي يحتاجها موقعك", views: "600 مشاهدة", img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=150" }
              ].map((item, idx) => (
                <div key={idx} className="group flex gap-4 items-center cursor-pointer">
                  <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden border border-white/10">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm leading-tight group-hover:text-amber-200 transition">{item.title}</h4>
                    <span className="text-sky-300 text-xs">{item.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="lg:col-span-12 mt-16">
          <h2 className="text-3xl font-black text-white mb-8 text-center">مقالات قد تهمك أيضاً</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allPosts.slice(0, 20).map((post: any) => (
              <a href={`/blog/${post.slug}`} key={post.slug} className="group block">
                <div className="bg-white border border-white/20 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-amber-400 transition-all duration-300 h-full shadow-lg">
                  {post.featuredImage?.node?.sourceUrl && (
                    <div className="h-40 overflow-hidden">
                      <img src={post.featuredImage.node.sourceUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-md font-bold text-black group-hover:text-amber-700 transition">{post.title}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}