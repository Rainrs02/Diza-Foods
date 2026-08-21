'use client';

import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DeleteButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm('Apakah Anda yakin ingin menghapus artikel ini? Tindakan ini tidak dapat dibatalkan.')) return;

    setLoading(true);
    try {
      const res = await fetch('/api/admin/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post: { id }, action: 'delete' })
      });
      
      const data = await res.json();
      if (data.success) {
        alert('Artikel berhasil dihapus! Silakan tunggu 1-2 menit hingga Vercel selesai rebuild.');
        router.refresh();
      } else {
        alert(data.message || 'Gagal menghapus');
      }
    } catch (err) {
      alert('Terjadi kesalahan saat menghapus');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={loading}
      className="inline-flex items-center text-sm font-semibold text-red-500 hover:text-red-700 transition-colors disabled:opacity-50"
    >
      <Trash2 className="w-4 h-4 mr-1.5" /> {loading ? 'Menghapus...' : 'Hapus'}
    </button>
  );
}
