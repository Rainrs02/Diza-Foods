'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function EditorPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const isNew = id === 'new';

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(!isNew);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    id: isNew ? Date.now().toString() : id,
    title: '',
    slug: '',
    date: new Date().toISOString().split('T')[0],
    author: 'Admin',
    excerpt: '',
    image: '/images/blog/default.png',
    tags: '',
    content: ''
  });

  useEffect(() => {
    if (!isNew) {
      // Fetch the existing post
      fetch('/api/admin/post?id=' + id)
        .then(res => res.json())
        .then(data => {
          if (data.post) {
            setFormData({
              ...data.post,
              tags: data.post.tags.join(', ')
            });
          } else {
            setError('Artikel tidak ditemukan');
          }
          setFetching(false);
        })
        .catch(() => {
          setError('Gagal memuat artikel');
          setFetching(false);
        });
    }
  }, [id, isNew]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateSlug = () => {
    if (formData.title) {
      const slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      setFormData({ ...formData, slug });
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const postData = {
        ...formData,
        tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean)
      };

      const res = await fetch('/api/admin/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post: postData, action: isNew ? 'create' : 'update' })
      });

      const result = await res.json();
      if (result.success) {
        alert('Artikel berhasil disimpan ke GitHub! Perubahan akan tayang di website dalam 1-2 menit setelah Vercel selesai rebuild.');
        router.push('/admin');
      } else {
        setError(result.message || 'Gagal menyimpan.');
      }
    } catch (err) {
      setError('Terjadi kesalahan jaringan.');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <div className="p-10 text-center">Memuat data...</div>;

  return (
    <div className="min-h-screen bg-charcoal-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin" className="p-2 bg-white rounded-full border border-charcoal-200 hover:bg-charcoal-100 transition-colors">
            <ArrowLeft className="w-5 h-5 text-charcoal-700" />
          </Link>
          <h1 className="text-2xl font-bold text-charcoal-900">
            {isNew ? 'Tulis Artikel Baru' : 'Edit Artikel'}
          </h1>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        <form onSubmit={handleSave} className="bg-white rounded-xl shadow-sm border border-charcoal-200 p-6 sm:p-8 space-y-6">
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-bold text-charcoal-700 mb-1">Judul Artikel</label>
              <input
                type="text" name="title" required value={formData.title} onChange={handleChange} onBlur={generateSlug}
                className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-forest-500 focus:border-forest-500"
              />
            </div>
            
            <div className="sm:col-span-2">
              <label className="block text-sm font-bold text-charcoal-700 mb-1">URL Slug</label>
              <input
                type="text" name="slug" required value={formData.slug} onChange={handleChange}
                className="w-full px-4 py-2 border border-charcoal-300 rounded-lg bg-charcoal-50 text-charcoal-600 focus:ring-forest-500 focus:border-forest-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-charcoal-700 mb-1">Penulis</label>
              <input
                type="text" name="author" required value={formData.author} onChange={handleChange}
                className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-forest-500 focus:border-forest-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-charcoal-700 mb-1">Tanggal</label>
              <input
                type="date" name="date" required value={formData.date} onChange={handleChange}
                className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-forest-500 focus:border-forest-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-bold text-charcoal-700 mb-1">URL Gambar Cover</label>
              <input
                type="text" name="image" required value={formData.image} onChange={handleChange}
                placeholder="/images/blog/nama-gambar.png"
                className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-forest-500 focus:border-forest-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-bold text-charcoal-700 mb-1">Kategori / Tags (pisahkan dengan koma)</label>
              <input
                type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Teknologi Retort, Maklon"
                className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-forest-500 focus:border-forest-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-charcoal-700 mb-1">Ringkasan (Excerpt)</label>
            <textarea
              name="excerpt" required value={formData.excerpt} onChange={handleChange} rows={2}
              className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-forest-500 focus:border-forest-500"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-charcoal-700 mb-1">Konten Artikel (HTML / Markdown)</label>
            <div className="mb-2 text-xs text-charcoal-500">Gunakan editor di bawah untuk memformat tulisan Anda dengan mudah.</div>
            <div className="bg-white">
              <ReactQuill 
                theme="snow" 
                value={formData.content} 
                onChange={(value) => setFormData({ ...formData, content: value })} 
                className="h-64 mb-12"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-charcoal-200 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-6 py-3 bg-forest-600 text-white font-bold rounded-lg hover:bg-forest-700 transition-colors disabled:opacity-50"
            >
              <Save className="w-5 h-5 mr-2" />
              {loading ? 'Menyimpan & Push ke GitHub...' : 'Simpan Artikel'}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
