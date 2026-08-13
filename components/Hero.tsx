'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Factory, Beaker, ArrowRight, CheckCircle2, Flame, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-28 bg-dark-grid">
      {/* Background Decorative Glow Highlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sage-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-forest-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copywriting & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Industrial Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest-800/80 border border-sage-500/30 text-sage-300 text-xs font-bold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4 text-sage-400" />
              <span>OEM / ODM Food Retort Manufacturer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Solusi Pabrik Maklon Pangan Sterilisasi (Retort){' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-300 via-sage-400 to-emerald-300">
                Terpercaya &amp; Higienis
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-forest-100/90 leading-relaxed font-normal max-w-2xl">
              Mitra strategis <strong className="text-white font-semibold">PT Diza Pangan Bersama</strong> untuk produksi massal makanan siap saji, saus, bumbu cair, dan pasta berstandar industri dengan kapasitas <span className="text-sage-300 font-bold">6–10 ton/bulan</span>.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-sm text-forest-100">
                <CheckCircle2 className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <span>Teknologi Retort Sterilizer Modern</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-forest-100">
                <CheckCircle2 className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <span>Tanpa Pengawet Kimia Sintesis</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-forest-100">
                <CheckCircle2 className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <span>R&amp;D Kustom Formula &amp; NDA Terjamin</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-forest-100">
                <CheckCircle2 className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <span>Pendampingan Izin Edar BPOM &amp; Halal</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-bold text-forest-900 bg-gradient-to-r from-sage-400 to-emerald-400 hover:from-sage-300 hover:to-emerald-300 shadow-lg hover:shadow-emerald-glow transition-all duration-200"
              >
                <span>Konsultasi Sekarang</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>

              <a
                href="#katalog"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-forest-800/80 border border-forest-600 hover:bg-forest-700 transition-all duration-200"
              >
                <span>Lihat Katalog Produk</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-forest-800 flex flex-wrap items-center gap-6 text-xs text-forest-300">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-sage-400" />
                <span>Sistem Jaminan Halal (Process)</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-sage-400" />
                <span>Standar CCPOB &amp; HACCP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Factory className="w-4 h-4 text-sage-400" />
                <span>Fasilitas 350m² Bekas/Jatiasih</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-forest-700 bg-forest-800/60 p-3">
              <div className="relative h-[340px] sm:h-[400px] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/team-facility.jpg"
                  alt="Fasilitas Pabrik PT Diza Pangan Bersama"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent"></div>

                {/* Overlaid Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-forest-900/90 backdrop-blur-md p-4 rounded-xl border border-forest-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-sage-500/20 flex items-center justify-center flex-shrink-0 border border-sage-500/30">
                      <Flame className="w-5 h-5 text-sage-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Fasilitas Retort Modern Sterilizer</h3>
                      <p className="text-forest-200 text-xs mt-0.5">
                        Area produksi dengan sistem air RO &amp; UV, SOP APD ketat, dan air shower terintegrasi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Cards Overlay Floating */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-forest-800/80 border border-forest-700 p-4 rounded-xl text-center">
                <div className="text-2xl font-black text-sage-300">6–10 Ton</div>
                <div className="text-xs text-forest-200 font-medium">Kapasitas / Bulan</div>
              </div>
              <div className="bg-forest-800/80 border border-forest-700 p-4 rounded-xl text-center">
                <div className="text-2xl font-black text-sage-300">350 m²</div>
                <div className="text-xs text-forest-200 font-medium">Luas Area Pabrik</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
