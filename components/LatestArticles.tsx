
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Image from 'next/image';

import { getBlogPosts } from '@/lib/blogs';

export default function LatestArticles() {
  const articles = getBlogPosts().slice(0, 3).map(post => ({
    title: post.title,
    desc: post.excerpt,
    date: new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    author: post.author,
    image: post.image,
    href: `/blog/${post.slug}`
  }));

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-10 gap-4 text-center sm:text-left">
          <div className="max-w-2xl space-y-3 flex flex-col items-center sm:items-start">
            <span className="text-xs font-bold text-forest-700 uppercase tracking-widest bg-forest-50 px-3.5 py-1.5 rounded-full border border-forest-200">
              Blog & Edukasi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Artikel Terbaru
            </h2>
          </div>
          <Link href="/blog" className="inline-flex items-center text-forest-700 font-bold hover:text-forest-600 transition-colors">
            <span>Lihat Semua Artikel</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <Link key={idx} href={article.href} className="group block bg-white border border-charcoal-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden bg-charcoal-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-[11px] font-semibold text-charcoal-500 uppercase tracking-wide">
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>{article.author}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-charcoal-900 mb-2 leading-snug group-hover:text-forest-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed line-clamp-2">
                    {article.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
