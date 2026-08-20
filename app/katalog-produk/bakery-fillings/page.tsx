import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Maklon Bakery Fillings & Toppings Industri | Diza Foods',
  description: 'Jasa manufaktur maklon isian roti (bakery fillings) dan selai buah/cokelat tahan lama dengan formulasi khusus bake-stable untuk industri bakery & katering.',
  keywords: ['maklon bakery fillings', 'maklon selai roti industri', 'isian roti tahan lama', 'bake stable fillings'],
};

export default function BakeryFillingsPage() {
  return (
    <main className="min-h-screen bg-charcoal-50 flex flex-col">
      <Navbar />
      
      {/* Header Banner */}
      <section className="py-16 pt-24 bg-charcoal-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border" style={{color:'#2d5a27', background:'rgba(45,90,39,0.08)', borderColor:'rgba(45,90,39,0.2)'}}>
            Dedicated Product Category
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight" style={{color:'#2d5a27'}}>Bakery Fillings &amp; Industrial Toppings</h1>
          <p className="text-base text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Solusi pasokan isian roti, pastry, dan selai buah/cokelat berkualitas tinggi dengan kestabilan pemanggangan (bake-stable) presisi.
          </p>
        </div>
      </section>

      {/* Main SEO Content */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-charcoal-900">Formulasi Bakery Fillings Khusus Industri</h2>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Kami meracik isian roti dengan ketahanan suhu tinggi saat dipanggang di oven (bake-stable) tanpa mengalami perubahan rasa atau pelelehan berlebih:
              </p>
              <ul className="space-y-2 text-xs text-charcoal-700">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Selai Buah Nanas, Stroberi &amp; Blueberry Fresh</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Cokelat Pasta &amp; Choco Crunch Bakery Fillings</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Krim Keju &amp; Custard Filling Bake-Stable</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Kemasan Pouch Saset, Jar Kaca &amp; Pail Industri</span></li>
              </ul>
            </div>

            <div className="bg-forest-50 p-6 rounded-2xl border border-forest-200 space-y-4">
              <h3 className="font-bold text-forest-900 text-lg">Konsultasi R&amp;D Bakery</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Tim food tech kami siap menyesuaikan tingkat keintiman warna, kekentalan (viskositas), serta indeks kadar gula (Brix) sesuai spesifikasi oven Anda.
              </p>
              <div className="pt-2">
                <Link
                  href="/konsultasi"
                  className="inline-flex items-center px-5 py-2.5 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs shadow-md"
                >
                  <span>Minta Sampel Bakery Fillings</span>
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

