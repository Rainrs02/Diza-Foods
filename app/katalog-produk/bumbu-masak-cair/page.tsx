import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Maklon Bumbu Masak Cair & Kaldu Steril HORECA | Diza Foods',
  description: 'Jasa maklon produksi bumbu opor, rendang, soto, dan kaldu cair steril konsentrat untuk efisiensi dapur central kitchen restoran & hotel.',
  keywords: ['maklon bumbu cair', 'maklon kaldu cair steril', 'bumbu masak industri HORECA', 'maklon bumbu opor rendang'],
};

export default function BumbuMasakCairPage() {
  return (
    <main className="min-h-screen bg-charcoal-50 flex flex-col">
      <Navbar />
      
      {/* Header Banner */}
      <section className="py-16 pt-24 bg-charcoal-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border" style={{color:'#2d5a27', background:'rgba(45,90,39,0.08)', borderColor:'rgba(45,90,39,0.2)'}}>
            Dedicated Product Category
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight" style={{color:'#2d5a27'}}>Maklon Bumbu Masak Cair &amp; Kaldu Steril</h1>
          <p className="text-base text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Solusi efisiensi dapur restoran dan katering massal lewat pasokan bumbu cair steril yang siap pakai dan konsisten di setiap cabang.
          </p>
        </div>
      </section>

      {/* Main SEO Content */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-charcoal-900">Keunggulan Bumbu Masak Cair Steril Retort</h2>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Menyiapkan bumbu dasar di setiap outlet restoran memakan waktu lama dan riskan mengubah standar rasa. Bumbu cair steril Diza Foods memberikan jawaban:
              </p>
              <ul className="space-y-2 text-xs text-charcoal-700">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Konsistensi Rasa 100% Antar Cabang Resto</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Menghemat Waktu Prep Dapur Hingga 80%</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Aneka Bumbu Opor, Rendang, Soto, Rawon &amp; Gulai</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Kaldu Ayam &amp; Sapi Steril Konsentrat Kaya Nutrisi</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Format Pouch Saset Retail &amp; Bulk Bag 1-5kg</span></li>
              </ul>
            </div>

            <div className="bg-forest-50 p-6 rounded-2xl border border-forest-200 space-y-4">
              <h3 className="font-bold text-forest-900 text-lg">Solusi Central Kitchen Restoran</h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                Dengan kapasitas pabrik 6–10 ton per bulan, kami mampu menjadi mitra suplai bumbu cair jangka panjang untuk rantai restoran cepat saji dan hotel.
              </p>
              <div className="pt-2">
                <Link
                  href="/konsultasi"
                  className="inline-flex items-center px-5 py-2.5 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs shadow-md"
                >
                  <span>Konsultasi Bumbu HORECA</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

