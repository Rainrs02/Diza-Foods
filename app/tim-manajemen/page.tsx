import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import TeamProfile from '@/components/TeamProfile';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Profil Tim Ekspert & Direksi | PT Diza Pangan Bersama',
  description: 'Mengenal jajaran pimpinan PT Diza Pangan Bersama: Faisal Muhammad (CEO - Expert Retort & BPOM) dan Yohanes (CMO - Business Development & Expansion).',
  keywords: ['Faisal Muhammad Diza Foods', 'Yohanes Diza Foods', 'Tim Manajemen Diza Foods', 'Ahli Teknologi Retort'],
};

export default function TimManajemenPage() {
  return (
    <main className="min-h-screen bg-charcoal-50 flex flex-col">
      <Navbar />
      
      {/* Header Banner */}
      <section className="bg-forest-900 text-white py-16 bg-dark-grid relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-sage-300 uppercase tracking-widest bg-forest-800 px-3.5 py-1.5 rounded-full border border-forest-700">
            Leadership &amp; Technical Expertise
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Profil Tim Manajemen &amp; Operator Steril</h1>
          <p className="text-base text-forest-200 max-w-2xl mx-auto">
            Kombinasi pengalaman teknis sterilisasi pangan belasan tahun dan keahlian penetrasi jaringan distribusi B2B nasional.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <TeamProfile />

      {/* Additional Expert Credentials SEO Card */}
      <section className="py-16 bg-white border-t border-charcoal-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-charcoal-900">Ingin Berdiskusi Formulasi Resep Langsung dengan Tim R&amp;D?</h2>
          <p className="text-sm text-charcoal-600">
            Kami siap menandatangani Non-Disclosure Agreement (NDA) untuk menjamin kerahasiaan racikan resep Anda sebelum uji laboratorium dimulai.
          </p>
          <div className="pt-2">
            <Link
              href="/kalkulator-b2b"
              className="inline-flex items-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md"
            >
              <span>Ajukan Form R&amp;D Sampel</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
