import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ProductCatalog from '@/components/ProductCatalog';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Package, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Katalog Produk & Kemasan Retort Steril B2B | Diza Foods',
  description: 'Katalog maklon lengkap Diza Foods: Saus & Pasta, Bumbu Masak Cair, Ready-to-Eat (RTE), dan Bakery Fillings. Opsi kemasan retort pouch foil/clear, glass jar, dan tin can.',
  keywords: ['katalog maklon diza foods', 'kategori makanan retort', 'kemasan retort pouch', 'maklon bumbu saset HORECA'],
};

export default function KatalogProdukPage() {
  const subpages = [
    {
      title: 'Saus & Pasta Skala Industri',
      href: '/katalog-produk/saus-dan-pasta',
      desc: 'Formulasi khusus saus sambal, tomat, mentai, barbeque, dan pasta kari untuk restoran franchise & retail.',
    },
    {
      title: 'Bumbu Masak Cair & Kaldu',
      href: '/katalog-produk/bumbu-masak-cair',
      desc: 'Aneka bumbu opor, rendang, soto, dan kaldu steril konsentrat untuk efisiensi dapur central kitchen.',
    },
    {
      title: 'Makanan Siap Saji (Ready-to-Eat)',
      href: '/katalog-produk/makanan-siap-saji',
      desc: 'Lauk pauk steril seperti rendang & ayam ungkep kedap udara tahan suhu ruang hingga 24 bulan.',
    },
    {
      title: 'Bakery Fillings & Toppings',
      href: '/katalog-produk/bakery-fillings',
      desc: 'Isian roti dan selai tahan lama buah/cokelat dengan stabilitas pemanggangan (bake-stable).',
    },
  ];

  return (
    <main className="min-h-screen bg-charcoal-50 flex flex-col">
      <Navbar />
      
      {/* Header Banner */}
      <section className="bg-forest-900 text-white py-16 bg-dark-grid relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-sage-300 uppercase tracking-widest bg-forest-800 px-3.5 py-1.5 rounded-full border border-forest-700">
            Katalog Produk B2B &amp; Retort Packaging Options
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Katalog Produk Maklon Pangan</h1>
          <p className="text-base text-forest-200 max-w-2xl mx-auto">
            Jelajahi berbagai kategori produk makanan dan pilihan kemasan retort berstandar industri.
          </p>
        </div>
      </section>

      {/* Subpage Index Navigation Cards */}
      <section className="py-12 bg-white border-b border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal-900">Pilih Kategori Produk Spesifik</h2>
            <p className="text-xs text-charcoal-600">Klik kategori di bawah ini untuk melihat detail formulasi dan spesifikasi teknis.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subpages.map((sub, i) => (
              <Link
                key={i}
                href={sub.href}
                className="p-5 rounded-2xl bg-forest-50/70 border border-forest-100 hover:border-forest-400 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-forest-900 text-base mb-1 group-hover:text-forest-700 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed mb-4">{sub.desc}</p>
                </div>
                <div className="inline-flex items-center text-xs font-bold text-forest-700 group-hover:translate-x-1 transition-transform">
                  <span>Lihat Detail SEO Page</span>
                  <ChevronRight className="w-4 h-4 ml-1 text-forest-600" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Interactive Catalog */}
      <ProductCatalog />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
