import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Flame } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Maklon Makanan Siap Saji (Ready-to-Eat / RTE) Retort | Diza Foods',
  description: 'Maklon makanan siap saji steril kedap udara: Rendang Daging, Ayam Ungkep, Lauk Steril Suhu Ruang tahan hingga 24 bulan tanpa pengawet sintesis.',
  keywords: ['maklon makanan siap saji', 'maklon ready to eat RTE', 'maklon rendang kemasan', 'lauk steril suhu ruang'],
};

export default function MakananSiapSajiPage() {
  return (
    <main className="min-h-screen bg-charcoal-50 flex flex-col">
      <Navbar />
      
      {/* Header Banner */}
      <section className="py-16 pt-24 bg-charcoal-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border" style={{color:'#2d5a27', background:'rgba(45,90,39,0.08)', borderColor:'rgba(45,90,39,0.2)'}}>
            Dedicated Product Category
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight" style={{color:'#2d5a27'}}>Makanan Siap Saji (Ready-to-Eat / RTE)</h1>
          <p className="text-base text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Produksi massal lauk pauk olahan daging &amp; sayur steril dalam kemasan retort pouch tahan simpan 12-24 bulan tanpa kulkas.
          </p>
        </div>
      </section>

      {/* Main SEO Content */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-charcoal-900">Inovasi Pangan Siap Saji Steril Kedap Udara</h2>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Tren konsumsi makanan praktis terus berkembang pesat. Dengan sterilisasi retort dari Diza Foods, produk kuliner Anda siap dijual di supermarket nasional hingga ekspor:
              </p>
              <ul className="space-y-2 text-xs text-charcoal-700">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Daging Rendang Steril &amp; Empal Daging</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Ayam Ungkep &amp; Ayam Bumbu Bumbu Bali</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Gudeg Steril &amp; Olahan Sayur Lauk Nusantara</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Kemasan Retort Pouch Alumunium Foil &amp; Clear Display</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Tanpa Perlu Penyimpanan Freezer / Cold Chain</span></li>
              </ul>
            </div>

            <div className="bg-forest-900 text-white p-6 rounded-2xl border border-forest-800 space-y-4">
              <h3 className="font-bold text-white text-lg">Pilihan Terbaik untuk Travel &amp; Retail Market</h3>
              <p className="text-xs text-forest-200 leading-relaxed">
                Cocok untuk bekal haji &amp; umroh, makanan darurat bencana, ransum outdoor, maupun sajian praktis keluarga di rumah.
              </p>
              <div className="pt-2">
                <Link
                  href="/konsultasi"
                  className="inline-flex items-center px-5 py-2.5 rounded-xl bg-sage-400 text-forest-950 font-bold text-xs hover:bg-sage-300 transition-colors shadow-md"
                >
                  <span>Mulai R&amp;D Produk Ready-to-Eat</span>
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

