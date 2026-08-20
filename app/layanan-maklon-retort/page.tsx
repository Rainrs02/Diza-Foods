import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import WorkflowSOP from '@/components/WorkflowSOP';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import { ShieldCheck, Flame, Cpu, ArrowRight, CheckCircle2, Package, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Layanan Pabrik Maklon Sterilisasi Retort (OEM/ODM) | Diza Foods',
  description: 'Solusi maklon makanan siap saji & saus tahan lama tanpa pengawet menggunakan teknologi Retort Sterilizer. Terima R&D dari nol atau resep klien (White Label) kapasitas 6-10 ton/bulan.',
  keywords: ['maklon retort sterilizer', 'maklon OEM ODM pangan', 'sterilisasi makanan tanpa pengawet', 'pabrik pengolahan retort'],
};

export default function LayananMaklonRetortPage() {
  return (
    <main className="min-h-screen bg-charcoal-50 flex flex-col">
      <Navbar />
      
      {/* Header Banner */}
      <section className="py-16 pt-24 bg-charcoal-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border" style={{color:'#2d5a27', background:'rgba(45,90,39,0.08)', borderColor:'rgba(45,90,39,0.2)'}}>
            Industrial Retort Thermal Processing
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight" style={{color:'#2d5a27'}}>Layanan Maklon Pangan Sterilisasi (Retort)</h1>
          <p className="text-base text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Proses pengolahan thermal bersuhu dan bertekanan tinggi dalam kemasan kedap udara untuk keawetan alami hingga 24 bulan tanpa pengawet sintesis.
          </p>
        </div>
      </section>

      {/* Main Technology Deep Dive */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-forest-700 font-bold text-xs bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                <Flame className="w-4 h-4 text-forest-600" />
                <span>Prinsip Kerja Mesin Retort Sterilizer</span>
              </div>

              <h2 className="text-3xl font-extrabold text-charcoal-900">
                Mengapa Memilih Teknologi Retort untuk Produk Kuliner Anda?
              </h2>

              <p className="text-sm text-charcoal-600 leading-relaxed">
                Retort Sterilization adalah metode sterilisasi termal terkontrol di mana produk pangan dikemas rapat dalam wadah kedap udara (retort pouch, jar, atau kaleng) lalu dipanaskan dalam autoclave suhu tinggi melebihi titik didih normal (115°C - 121°C).
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal-900 text-sm block">Steril Secara Komersial</strong>
                    <span className="text-xs text-charcoal-600">Mematikan seluruh spora bakteri patogen (seperti Clostridium botulinum) dan mikroba pembusuk.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal-900 text-sm block">100% Bebas Bahan Pengawet Sintesis</strong>
                    <span className="text-xs text-charcoal-600">Produk Anda tetap berlabel Clean Label tanpa perlu tambahan benzoat atau bahan kimia lainnya.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal-900 text-sm block">Hemat Biaya Logistik Rantai Dingin (Cold Chain)</strong>
                    <span className="text-xs text-charcoal-600">Tidak membutuhkan freezer atau chiller saat penyimpanan dan pengiriman. Tahan disimpan pada suhu ruang normal.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scheme Cards */}
            <div className="bg-forest-50 p-8 rounded-2xl border border-forest-200 space-y-6">
              <h3 className="text-xl font-extrabold text-forest-900">Skema Layanan Manufaktur</h3>

              <div className="bg-white p-5 rounded-xl border border-forest-200 shadow-sm space-y-2">
                <span className="text-[10px] font-extrabold text-forest-800 bg-forest-100 px-2 py-0.5 rounded uppercase">
                  Skema 1: OEM / ODM (Full R&amp;D Service)
                </span>
                <h4 className="font-bold text-charcoal-900 text-sm">Racik Resep dari Nol Bersama Tim Food Tech</h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Klien membawa konsep cita rasa yang diinginkan, lalu tim R&amp;D kami akan mengembangkan sampel produk hingga disetujui untuk produksi massal.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-forest-200 shadow-sm space-y-2">
                <span className="text-[10px] font-extrabold text-forest-800 bg-forest-100 px-2 py-0.5 rounded uppercase">
                  Skema 2: White Label / Formula Klien
                </span>
                <h4 className="font-bold text-charcoal-900 text-sm">Produksi Massal dari Resep Rahasia Klien</h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Klien membawa resep standar usaha kuliner sendiri. Kami menjamin kerahasiaan resep melalui NDA dan mereplikasi cita rasa dalam skala industri.
                </p>
              </div>

              <div className="pt-2 text-center">
                <Link
                  href="/konsultasi"
                  className="inline-flex items-center justify-center w-full py-3.5 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs shadow-md"
                >
                  <span>Mulai Konsultasi R&amp;D &amp; Hitung Estimasi</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <WorkflowSOP />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

