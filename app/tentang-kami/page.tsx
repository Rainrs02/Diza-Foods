import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import AboutFacility from '@/components/AboutFacility';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Perusahaan & Infrastruktur Pabrik | PT Diza Pangan Bersama',
  description: 'Profil resmi PT Diza Pangan Bersama (Diza Foods). Perusahaan maklon sterilisasi retort di Jatikramat Bekasi dengan fasilitas 350m², air RO & UV, serta legalitas NPWP 1000.0000.1039.9409.',
  keywords: ['tentang diza foods', 'pabrik makanan jatiasih bekasi', 'infrastruktur pabrik retort', 'PT Diza Pangan Bersama'],
};

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen bg-charcoal-50 flex flex-col">
      <Navbar />
      
      {/* Header Banner */}
      <section className="bg-forest-900 text-white py-16 bg-dark-grid relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-sage-300 uppercase tracking-widest bg-forest-800 px-3.5 py-1.5 rounded-full border border-forest-700">
            Company Identity &amp; Factory Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Tentang PT Diza Pangan Bersama</h1>
          <p className="text-base text-forest-200 max-w-2xl mx-auto">
            Mengenal lebih dekat arah visi, nilai komitmen higienitas, serta fasilitas pabrik sterilisasi retort modern 350m² kami di Bekasi.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <AboutFacility />

      {/* Detailed SEO Story Section */}
      <section className="py-16 bg-white border-t border-charcoal-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl font-bold text-charcoal-900">Sejarah &amp; Dedikasi Manufaktur Pangan Horeca &amp; Retail</h2>
          <div className="prose prose-slate text-sm leading-relaxed text-charcoal-700 space-y-4">
            <p>
              Berdiri secara resmi pada <strong>08 Agustus 2026</strong> di Jatikramat, Jatiasih, Kota Bekasi, PT Diza Pangan Bersama dirancang khusus untuk memecahkan kendala utama para pelaku bisnis makanan di Indonesia: <em>bagaimana menghasilkan produk kuliner siap saji tahan lama tanpa mengorbankan kualitas rasa dan tanpa menggunakan pengawet kimia sintesis.</em>
            </p>
            <p>
              Dengan investasi pada fasilitas seluas 350 m² yang dilengkapi teknologi <strong>Retort Thermal Sterilization</strong> dan pengolahan air bersih bersertifikasi baku mutu air minum (Filtrasi + UV + Reverse Osmosis RO), kami memastikan setiap batch produk saus, bumbu cair, lauk pauk RTE, hingga bakery fillings aman didistribusikan ke seluruh Indonesia.
            </p>
          </div>

          <div className="bg-forest-50 p-6 rounded-2xl border border-forest-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-forest-900 text-base">Tertarik Menjelajahi Katalog Produk Maklon Kami?</h3>
              <p className="text-xs text-charcoal-600">Lihat berbagai variasi saus, bumbu cair, hingga makanan siap saji yang dapat diproduksi.</p>
            </div>
            <Link
              href="/katalog-produk"
              className="px-6 py-3 rounded-xl bg-forest-700 hover:bg-forest-800 text-white text-xs font-bold shadow-md flex items-center"
            >
              <span>Katalog Produk</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
