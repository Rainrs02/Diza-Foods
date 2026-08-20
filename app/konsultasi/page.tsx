import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Kalkulator Estimasi Layanan Maklon B2B | Diza Foods',
  description: 'Simulasi dan kalkulator interaktif spesifikasi maklon pangan sterilisasi retort: pilih kategori, jenis kemasan, volume MOQ, dan kirim pesan otomatis ke WhatsApp tim R&D.',
  keywords: ['kalkulator maklon b2b', 'estimasi biaya maklon retort', 'moq maklon diza foods', 'inquiry maklon makanan'],
};

export default function KalkulatorB2BPage() {
  return (
    <main className="min-h-screen bg-charcoal-50 flex flex-col">
      <Navbar />
      
      {/* Header Banner */}
      <section className="py-16 pt-24 bg-charcoal-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border" style={{color:'#2d5a27', background:'rgba(45,90,39,0.08)', borderColor:'rgba(45,90,39,0.2)'}}>
            Interactive B2B Quotation Estimator
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight" style={{color:'#2d5a27'}}>Kalkulator &amp; Form Konsultasi Maklon</h1>
          <p className="text-base text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Gunakan kalkulator interaktif di bawah ini untuk menghitung estimasi volume MOQ, skema R&amp;D resep, dan membuka pesan konsultasi WhatsApp secara instan.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <InquiryForm bgOverlay="bg1" />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
