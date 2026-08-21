import { getBlogPosts } from '@/lib/blogs';
import Link from 'next/link';
import { Plus, Edit, LogOut } from 'lucide-react';
import DeleteButton from '@/components/DeleteButton';

export default function AdminDashboard() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-charcoal-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-charcoal-900">Admin Dashboard</h1>
            <p className="text-charcoal-600 mt-1">Kelola artikel blog Anda</p>
          </div>
          <div className="flex gap-4">
            <Link 
              href="/admin/editor/new"
              className="inline-flex items-center px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors font-medium"
            >
              <Plus className="w-4 h-4 mr-2" />
              Tulis Artikel
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-charcoal-200 overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden bg-charcoal-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs text-charcoal-500 mb-2">
                  {new Date(post.date).toLocaleDateString('id-ID')} • {post.author}
                </div>
                <h2 className="text-lg font-bold text-charcoal-900 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <div className="text-xs text-charcoal-400 mb-6 truncate">/{post.slug}</div>
                
                <div className="mt-auto border-t border-charcoal-100 pt-4 flex justify-between items-center">
                  <Link 
                    href={`/admin/editor/${post.id}`} 
                    className="inline-flex items-center text-sm font-semibold text-forest-600 hover:text-forest-700 transition-colors"
                  >
                    <Edit className="w-4 h-4 mr-1.5" /> Edit
                  </Link>
                  <DeleteButton id={post.id} />
                </div>
              </div>
            </article>
          ))}
          
          {posts.length === 0 && (
            <div className="col-span-full py-12 text-center text-charcoal-500 bg-white rounded-2xl border border-charcoal-200">
              Belum ada artikel. Silakan buat artikel pertama Anda.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
