import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogs';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const metadata = {
  title: 'Blog & Artikel Edukasi Maklon | PT Diza Pangan Bersama',
  description: 'Kumpulan artikel dan panduan seputar bisnis makanan ready to eat, teknologi retort, perizinan BPOM, dan jasa maklon pangan.',
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-4 tracking-tight">
            Pusat Edukasi & <span className="text-forest-600">Artikel Bisnis</span>
          </h1>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Temukan wawasan terbaru seputar industri pangan, teknologi retort, tren bisnis ready-to-eat (RTE), dan panduan legalitas produk B2B.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-charcoal-100 overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-charcoal-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3 line-clamp-2 hover:text-forest-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-charcoal-600 mb-6 text-sm line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0,2).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-forest-50 text-forest-700 text-xs font-medium rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-forest-600 font-semibold text-sm hover:text-forest-700 transition-colors group">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
