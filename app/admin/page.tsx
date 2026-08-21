import { getBlogPosts } from '@/lib/blogs';
import Link from 'next/link';
import { Plus, Edit, Trash2, LogOut } from 'lucide-react';

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

        <div className="bg-white rounded-xl shadow-sm border border-charcoal-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-charcoal-200">
              <thead className="bg-charcoal-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-charcoal-500 uppercase tracking-wider">Judul</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-charcoal-500 uppercase tracking-wider">Tanggal</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-charcoal-500 uppercase tracking-wider">Penulis</th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-charcoal-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-charcoal-100">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-charcoal-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-charcoal-900">{post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}</div>
                      <div className="text-xs text-charcoal-500 mt-1">/{post.slug}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-charcoal-600">
                        {new Date(post.date).toLocaleDateString('id-ID')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-charcoal-600">{post.author}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-3">
                        <Link href={`/admin/editor/${post.id}`} className="text-forest-600 hover:text-forest-800" title="Edit">
                          <Edit className="w-5 h-5" />
                        </Link>
                        {/* We will implement delete via API later, for now we just show it */}
                        <button className="text-red-600 hover:text-red-800" title="Hapus">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                
                {posts.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-charcoal-500">
                      Belum ada artikel. Silakan buat artikel pertama Anda.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
