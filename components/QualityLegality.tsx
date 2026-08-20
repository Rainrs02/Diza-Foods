'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Clock, Search, Shield, Cpu, RefreshCw } from 'lucide-react';

export default function QualityLegality({ bgOverlay = 'none' }: { bgOverlay?: 'bg1' | 'bg2' | 'none' }) {
  const certifications = [
    {
      title: 'Sertifikat Halal',
      status: 'On Proses',
      desc: 'Jaminan kehalalan bahan baku & alur produksi sesuai standar syariat.',
      icon: '/assets/canva/Halal.png',
    },
    {
      title: 'Sertifikasi SLHS',
      status: 'On Proses',
      desc: 'Bukti resmi dari Dinas Kesehatan bahwa tempat pengolahan pangan telah memenuhi standar kebersihan, kesehatan, dan keamanan makanan.',
      icon: '/assets/canva/logo SLhs.png',
    },
    {
      title: 'Sertifikasi CCPOB',
      status: 'On Proses',
      desc: 'Cara Produksi Makanan Olahan yang Baik (Badan POM).',
      icon: '/assets/canva/B POM.png',
    },
    {
      title: 'Sertifikasi HACCP',
      status: 'On Proses',
      desc: 'Sistem Analisis Bahaya & Pengendalian Titik Kritis Keamanan Pangan.',
      icon: '/assets/canva/HACCP.png',
    },
    {
      title: 'Sertifikasi PMR-BPOM',
      status: 'On Proses',
      desc: 'Program Manajemen Risiko Keamanan Pangan Olahan Berkelanjutan.',
      icon: '/assets/canva/pmr.png',
    },
    {
      title: 'ISO 22000',
      status: 'On Proses',
      desc: 'Standar Sistem Manajemen Keamanan Pangan Internasional.',
      icon: '/assets/canva/ISO.png',
    },
  ];

  const qaSteps = [
    {
      icon: Shield,
      title: 'Standar Kebersihan & Higienitas',
      desc: 'Seluruh proses produksi dijalankan secara efektif, efisien, higienis, dan berorientasi pada peningkatan mutu berkelanjutan sesuai standar keamanan pangan nasional.',
    },
    {
      icon: Cpu,
      title: 'Sterilisasi Retort & Pasteurisasi',
      desc: 'Teknologi sterilisasi suhu tinggi (121–135°C) dan tekanan dalam wadah kedap udara yang mematikan seluruh mikroorganisme tanpa mengubah cita rasa asli produk.',
    },
    {
      icon: RefreshCw,
      title: 'Konsistensi Rasa & Kualitas',
      desc: 'Menghasilkan produk pangan yang berkualitas, aman, halal, dan konsisten sesuai dengan standar keamanan pangan yang berlaku.',
    },
    {
      icon: Search,
      title: 'Distribusi Luas & Efisien',
      desc: 'Kemasan kedap udara (hermetically sealed) menjaga kualitas dan keamanan produk dalam proses distribusi ke berbagai wilayah secara efisien tanpa cold chain.',
    },
  ];

  return (
    <section className="py-20 bg-charcoal-50 relative border-t border-forest-100 overflow-hidden">
      {bgOverlay === 'bg1' && (
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      )}
      {bgOverlay === 'bg2' && (
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-forest-700 uppercase tracking-widest bg-forest-50 px-3.5 py-1.5 rounded-full border border-forest-200">
            Jaminan Standar Mutu &amp; Perizinan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Izin, Legalitas &amp; Sertifikasi Mutu
          </h2>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Keamanan dan kualitas adalah prioritas utama kami. Saat ini kami dalam proses finalisasi sertifikasi untuk memastikan seluruh fasilitas produksi memenuhi standar nasional dan internasional yang ketat.
          </p>
        </div>

        {/* Certification Grid with Logo Images */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-charcoal-900 flex items-center">
              <Award className="w-5 h-5 text-forest-600 mr-2" />
              <span>Status Sertifikasi Standar Mutu Pangan</span>
            </h3>
            <span className="text-xs font-semibold text-forest-700 bg-forest-50 px-3 py-1 rounded-md border border-forest-200">
              Dalam Proses Sertifikasi
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-forest-50/50 border border-forest-100 rounded-xl p-3 sm:p-5 flex flex-col items-center text-center hover:border-forest-300 transition-colors"
              >
                {cert.icon ? (
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3">
                    <Image
                      src={cert.icon}
                      alt={cert.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3 rounded-full bg-forest-100 flex items-center justify-center">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-forest-600" />
                  </div>
                )}
                <div className="mb-1.5 sm:mb-2">
                  <span className="text-[8px] sm:text-[10px] font-extrabold text-amber-700 bg-amber-100 px-1.5 sm:px-2 py-0.5 rounded-full border border-amber-200 uppercase">
                    {cert.status}
                  </span>
                </div>
                <h4 className="font-bold text-forest-900 text-[11px] sm:text-sm mb-1">{cert.title}</h4>
                <p className="text-[9px] sm:text-[11px] text-charcoal-600 leading-normal">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* QA/QC Pillars */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-charcoal-900">4 Pilar Keamanan &amp; Kualitas Produksi</h3>
            <p className="text-xs text-charcoal-600 mt-1">Sistem manajemen mutu sebagai bentuk tanggung jawab kami kepada mitra dan konsumen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qaSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-charcoal-50/60 border border-charcoal-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 relative group"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest-700 text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-charcoal-900 text-base mb-2">{step.title}</h4>
                  <p className="text-xs text-charcoal-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
