import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Box } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Maklon Saus & Pasta Skala Industri | Diza Foods',
  description: 'Jasa maklon produksi saus sambal, saus mentai, saus barbeque, pasta kari, dan bumbu dasar steril dalam kemasan pouch & jar kaca untuk franchise resto dan retail.',
  keywords: ['maklon saus sambal', 'maklon saus mentai', 'pabrik saus industri', 'maklon pasta kari', 'Diza Foods saus'],
};

export default function SausDanPastaPage() {
  return (
    <main className="min-h-screen bg-charcoal-50 flex flex-col">
      <Navbar />
      
      {/* Header Banner */}
      <section className="py-16 pt-24 bg-charcoal-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border" style={{color:'#2d5a27', background:'rgba(45,90,39,0.08)', borderColor:'rgba(45,90,39,0.2)'}}>
            Dedicated Product Category
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight" style={{color:'#2d5a27'}}>Maklon Saus &amp; Pasta Skala Industri</h1>
          <p className="text-base text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Solusi pengolahan saus kustom dengan tingkat viskositas, rasa khas brand, dan tingkat kepedasan terukur untuk ekspansi franchise kuliner Anda.
          </p>
        </div>
      </section>

      {/* Main SEO Content */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-charcoal-900">Varian Saus &amp; Pasta yang Dapat Diproduksi</h2>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Kami melayani formulasi kustom (OEM/ODM) maupun replikasi resep rahasia brand Anda untuk varian saus berikut:
              </p>
              <ul className="space-y-2 text-xs text-charcoal-700">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Saus Sambal Asli &amp; Sambal Extra Pedas</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Saus Mentai Japanese Grade</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Saus Barbeque (BBQ) &amp; Blackpepper</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Pasta Kari Jepang &amp; Pasta Bumbu Nusantara</span></li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /><span>Saus Keju &amp; Dipping Sauce Modern Market</span></li>
              </ul>
            </div>

            <div className="bg-forest-50 p-6 rounded-2xl border border-forest-200 space-y-4">
              <h3 className="font-bold text-forest-900 text-lg">Spesifikasi Kemasan Saus</h3>
              <div className="text-xs text-charcoal-700 space-y-2">
                <div className="bg-white p-3 rounded-lg border border-forest-100">
                  <strong>Pouch Saset (100g - 250g):</strong> Sangat cocok untuk pasar retail dan saset resto takeout.
                </div>
                <div className="bg-white p-3 rounded-lg border border-forest-100">
                  <strong>Bulk Bag (1kg - 5kg):</strong> Pilihan paling efisien untuk stok dapur central kitchen franchise.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-forest-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Ingin Menguji Sampel Saus Racikan Kami?</h3>
              <p className="text-xs text-forest-200 mt-1">Tim R&amp;D kami siap mengirimkan sampel percobaan rasa sesuai brief kriteria Anda.</p>
            </div>
            <Link
              href="/konsultasi"
              className="px-6 py-3 rounded-xl bg-sage-400 text-forest-950 font-bold text-xs hover:bg-sage-300 transition-colors shadow-lg flex-shrink-0"
            >
              Minta Sampel R&amp;D Saus
            </Link>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

