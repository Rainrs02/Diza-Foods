import { getBlogPosts, getBlogPostBySlug } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: 'Not Found' };
  }
  return {
    title: `${post.title} | Blog Diza Foods`,
    description: post.excerpt,
    keywords: post.tags,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Related posts (simple: next 2 posts)
  const relatedPosts = getBlogPosts().filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-charcoal-500 mb-8">
          <Link href="/" className="hover:text-forest-600">Beranda</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/blog" className="hover:text-forest-600">Blog</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-charcoal-900 font-medium truncate max-w-[200px] sm:max-w-none">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10 text-center">
          <div className="flex justify-center gap-2 mb-6">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-forest-50 text-forest-700 text-xs font-semibold rounded-full uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-charcoal-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-charcoal-500 text-sm">
            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden mb-12 shadow-md">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <article 
          className="prose prose-lg prose-forest max-w-none mb-16
            prose-headings:font-bold prose-headings:text-charcoal-900 prose-headings:mt-10 prose-headings:mb-4
            prose-h2:text-3xl prose-h3:text-2xl
            prose-p:text-charcoal-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-forest-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:text-charcoal-700
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:text-charcoal-700
            prose-li:mb-2
            prose-strong:text-charcoal-900 prose-strong:font-bold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer actions */}
        <div className="border-t border-charcoal-200 pt-8 mt-12 flex justify-between items-center">
          <Link href="/blog" className="inline-flex items-center text-forest-600 font-semibold hover:text-forest-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Artikel Lainnya
          </Link>
        </div>

      </div>

      {/* Related Posts */}
      <div className="bg-charcoal-50 py-16 mt-16 border-t border-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-charcoal-900 mb-8 text-center">Artikel Terkait</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((p) => (
              <Link href={`/blog/${p.slug}`} key={p.id} className="group bg-white rounded-xl shadow-sm border border-charcoal-100 overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow">
                <div className="relative h-48 sm:h-auto sm:w-1/3 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 sm:w-2/3">
                  <h4 className="text-lg font-bold text-charcoal-900 group-hover:text-forest-600 transition-colors mb-2 line-clamp-2">{p.title}</h4>
                  <p className="text-charcoal-600 text-sm line-clamp-2 mb-3">{p.excerpt}</p>
                  <span className="text-xs text-charcoal-400">{new Date(p.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
