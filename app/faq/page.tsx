import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'FAQ Maklon Retort & Keamanan Pangan | Diza Foods',
  description: 'Pertanyaan yang paling sering ditanyakan seputar teknologi sterilisasi retort, masa simpan tanpa pengawet, durasi R&D 2-3 minggu, dan pendampingan izin edar BPOM.',
  keywords: ['faq maklon diza foods', 'pertanyaan maklon retort', 'keamanan pangan retort', 'moq maklon makanan'],
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-charcoal-50 flex flex-col">
      <Navbar />
      
      {/* Header Banner */}
      <section className="bg-forest-900 text-white py-16 bg-dark-grid relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-sage-300 uppercase tracking-widest bg-forest-800 px-3.5 py-1.5 rounded-full border border-forest-700">
            Frequently Asked Questions
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Pusat Informasi &amp; FAQ Maklon</h1>
          <p className="text-base text-forest-200 max-w-2xl mx-auto">
            Temukan jawaban lengkap seputar sterilisasi retort, MOQ, kerahasiaan resep, serta alur perizinan legalitas produk.
          </p>
        </div>
      </section>

      {/* Main Accordion */}
      <FAQSection />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
