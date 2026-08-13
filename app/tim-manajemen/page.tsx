import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import TeamProfile from '@/components/TeamProfile';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tim Kami | PT Diza Pangan Bersama',
  description: 'Mengenal jajaran pimpinan PT Diza Pangan Bersama: Faisal Muhammad (CEO - Expert Retort & BPOM) dan Yohanes (CMO - Business Development & Expansion).',
  keywords: ['Faisal Muhammad Diza Foods', 'Yohanes Diza Foods', 'Tim Manajemen Diza Foods', 'Ahli Teknologi Retort'],
};

export default function TimManajemenPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{background:'#f5f7f0'}}>
      <Navbar />
      
      {/* Header Banner — Compro style */}
      <section className="text-white py-16 bg-dark-grid relative overflow-hidden" style={{background:'#2d5a27'}}>
        {/* Compro blob decorations */}
        <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-20" style={{background:'#1a3a18', borderRadius:'0 0 0 80%'}} />
        <div className="absolute bottom-0 left-0 w-28 h-28 pointer-events-none opacity-20" style={{background:'#7ab317', borderRadius:'0 60% 0 0'}} />
        {/* Dot decoration */}
        <div className="absolute top-8 right-64 hidden lg:grid grid-cols-3 gap-1.5 opacity-30 pointer-events-none">
          {Array.from({length:9}).map((_,i) => <span key={i} className="w-1.5 h-1.5 rounded-full block" style={{background:'#8dc63f'}} />)}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/20" style={{background:'rgba(255,255,255,0.1)', color:'#8dc63f'}}>
            Leadership &amp; Technical Expertise
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Tim Kami</h1>
          <p className="text-base max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.8)'}}>
            Kombinasi pengalaman teknis sterilisasi pangan belasan tahun dan keahlian penetrasi jaringan distribusi B2B nasional.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <TeamProfile />

      {/* CTA Section */}
      <section className="py-16 bg-white border-t" style={{borderColor:'rgba(45,90,39,0.12)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl font-bold" style={{color:'#2d5a27'}}>Ingin Berdiskusi Formulasi Resep Langsung dengan Tim R&amp;D?</h2>
          <p className="text-sm text-charcoal-600">
            Kami siap menandatangani Non-Disclosure Agreement (NDA) untuk menjamin kerahasiaan racikan resep Anda sebelum uji laboratorium dimulai.
          </p>
          <div className="pt-2">
            <Link
              href="/kalkulator-b2b"
              className="btn-compro-pill text-sm px-8 py-3.5 shadow-md inline-flex items-center gap-2"
            >
              <span>Ajukan Form R&amp;D Sampel</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

