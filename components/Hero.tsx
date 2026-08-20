'use client';

import Image from 'next/image';
import { ShieldCheck, Factory, Beaker, ArrowRight, CheckCircle2, Flame, Award } from 'lucide-react';
import GSAPReveal from './GSAPReveal';

export default function Hero({ bgOverlay = 'none' }: { bgOverlay?: 'bg1' | 'bg2' | 'none' }) {
  return (
    <section className="relative overflow-hidden bg-charcoal-50 pt-12 pb-20 lg:pt-20 lg:pb-28">
      {bgOverlay === 'bg1' && (
        <div className="absolute inset-0 opacity-15 pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-12 gap-4 lg:gap-12 items-center">
          
          {/* Left Column: Copywriting & Actions */}
          <div className="col-span-12 lg:col-span-7 space-y-3 sm:space-y-6 text-left">
            <GSAPReveal direction="up" delay={0.1}>
              {/* Top Industrial Badge */}
              <div className="inline-flex items-center space-x-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-forest-50 border border-forest-200 text-forest-700 text-[10px] sm:text-xs font-bold tracking-wide uppercase shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-600" />
                <span>OEM / ODM Food Retort Manufacturer</span>
              </div>
            </GSAPReveal>

            {/* Main Headline */}
            <GSAPReveal direction="up" delay={0.2}>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black text-charcoal-900 leading-tight tracking-tight">
                Food Innovation for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
                  Better Life
                </span>
              </h1>
            </GSAPReveal>

            {/* Subheadline */}
            <GSAPReveal direction="up" delay={0.3}>
              <p className="text-xs sm:text-base lg:text-lg text-charcoal-600 leading-relaxed font-normal max-w-2xl">
                Mitra strategis <strong className="text-forest-800 font-semibold">PT Diza Pangan Bersama</strong> untuk produksi massal makanan siap saji, saus, bumbu pasta, dan filling bakery berstandar industri dengan kapasitas <span className="text-forest-700 font-bold">20 ton/bulan</span>.
              </p>
            </GSAPReveal>

            {/* Bullet Highlights */}
            <GSAPReveal direction="up" delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2">
                {[
                  'Teknologi Retort Sterilizer Modern',
                  'Tanpa Pengawet Kimia & Bebas Refrigerasi',
                  'R&D Kustom Formula & NDA Terjamin',
                  'MOQ Pemesanan Rendah, Fleksibel',
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-charcoal-700">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GSAPReveal>

            {/* Action Buttons */}
            <GSAPReveal direction="up" delay={0.5}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <a
                  href="/konsultasi"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-bold text-white transition-all shadow-md hover:shadow-lg bg-forest-700 hover:bg-forest-600"
                >
                  <span>Konsultasi Sekarang</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>

                <a
                  href="/katalog-produk"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-bold text-forest-700 bg-white border border-forest-200 hover:bg-forest-50 transition-all duration-200 shadow-sm"
                >
                  <span>Lihat Katalog Produk</span>
                </a>
              </div>
            </GSAPReveal>

            {/* Trust Badges */}
            <GSAPReveal direction="up" delay={0.6}>
              <div className="pt-6 border-t border-charcoal-200 flex flex-wrap items-center gap-6 text-xs text-charcoal-500 font-medium">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-forest-600" />
                  <span>Halal, Berkualitas & Aman</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-forest-600" />
                  <span>Standar CCPOB & HACCP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Factory className="w-4 h-4 text-forest-600" />
                  <span>Jatiasih, Kota Bekasi</span>
                </div>
              </div>
            </GSAPReveal>
          </div>

          {/* Right Column: Hero Visual Pure Logo */}
          <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center h-full">
            {/* Pure Logo */}
            <div className="relative w-80 h-80 sm:w-[400px] sm:h-[400px] z-10 drop-shadow-xl hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/logo.png"
                alt="Diza Foods Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

