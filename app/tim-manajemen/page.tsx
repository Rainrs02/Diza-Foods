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
      
      {/* Header Banner */}
      <section className="py-16 pt-24 relative overflow-hidden" style={{background:'#f5f7f0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border" style={{color:'#2d5a27', background:'rgba(45,90,39,0.08)', borderColor:'rgba(45,90,39,0.2)'}}>
            Leadership &amp; Technical Expertise
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight" style={{color:'#2d5a27'}}>Tim Kami</h1>
          <p className="text-base text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Kombinasi pengalaman teknis sterilisasi pangan belasan tahun dan keahlian penetrasi jaringan distribusi B2B nasional.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <TeamProfile bgOverlay="bg1" />

      {/* CTA Section */}
      <section className="py-16 bg-white border-t" style={{borderColor:'rgba(45,90,39,0.12)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl font-bold" style={{color:'#2d5a27'}}>Ingin Berdiskusi Formulasi Resep Langsung dengan Tim R&amp;D?</h2>
          <p className="text-sm text-charcoal-600">
            Kami siap menandatangani Non-Disclosure Agreement (NDA) untuk menjamin kerahasiaan racikan resep Anda sebelum uji laboratorium dimulai.
          </p>
          <div className="pt-2">
            <Link
              href="/konsultasi"
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


