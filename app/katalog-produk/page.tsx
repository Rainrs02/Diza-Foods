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
      


      {/* Main Interactive Catalog */}
      <ProductCatalog bgOverlay="bg1" />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
