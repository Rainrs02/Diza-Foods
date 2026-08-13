'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Clock, Search, Shield, Cpu, RefreshCw } from 'lucide-react';

export default function QualityLegality() {
  const certifications = [
    { title: 'Sertifikat Halal MUI', status: 'On Progress', desc: 'Jaminan kehalalan bahan baku & alur produksi sterilisasi.' },
    { title: 'Sertifikasi LSHS', status: 'On Progress', desc: 'Lembaga Sertifikasi Halal & Standar Mutu Suplai Pangan.' },
    { title: 'Sertifikasi CCPOB', status: 'On Progress', desc: 'Cara Pembuatan Obat & Makanan Olahan yang Baik (Badan POM).' },
    { title: 'Sertifikasi HACCP', status: 'On Progress', desc: 'Sistem Analisis Bahaya & Pengendalian Titik Kritis Keamanan Pangan.' },
    { title: 'Sertifikasi PMR-BPOM', status: 'On Progress', desc: 'Program Manajemen Risiko Keamanan Pangan Olahan Berkelanjutan.' },
  ];

  const qaSteps = [
    {
      icon: Shield,
      title: 'Standar Kebersihan APD Ketat',
      desc: 'Seluruh karyawan wajib mengenakan APD steril lengkap (hairnet, masker khusus, sarung tangan food-grade, dan sepatu steril) serta melewati bilik Air Shower.',
    },
    {
      icon: Cpu,
      title: 'Sterilisasi Retort Thermal Processing',
      desc: 'Proses pemanasan autoclave retort dengan kontrol suhu & tekanan presisi tinggi yang mengeliminasi bakteri pembusuk tanpa merusak cita rasa asli.',
    },
    {
      icon: RefreshCw,
      title: 'Traceability System (Pelacakan Batch)',
      desc: 'Pencetakan nomor lot & batch produksi secara akurat pada setiap kemasan untuk kemudahan audit dan kendali mutu yang optimal.',
    },
    {
      icon: Search,
      title: 'Uji Organoleptik & Inkubasi Sampel',
      desc: 'Pemeriksaan laboratorium berkala mencakup pengujian inkubasi fisik, organoleptik (rasa, aroma, warna, tekstur), dan tingkat keawetan produk.',
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-forest-700 uppercase tracking-widest bg-forest-50 px-3.5 py-1.5 rounded-full border border-forest-200">
            Jaminan Standar Mutu &amp; Perizinan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Legalitas &amp; Sistem Manajemen Mutu (QA/QC)
          </h2>
          <p className="text-base text-charcoal-600 leading-relaxed">
            PT Diza Pangan Bersama berkomitmen menerapkan prosedur keamanan pangan industri tingkat tinggi untuk memberikan ketenangan bagi brand mitra kami.
          </p>
        </div>

        {/* Legality Status Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-charcoal-900 flex items-center">
              <Award className="w-5 h-5 text-forest-600 mr-2" />
              <span>Status Sertifikasi Standar Mutu Pangan</span>
            </h3>
            <span className="text-xs font-semibold text-forest-700 bg-forest-50 px-3 py-1 rounded-md border border-forest-200">
              Target Tahap Sertifikasi Resmi
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-forest-50/50 border border-forest-100 rounded-xl p-4 flex flex-col justify-between hover:border-forest-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200 uppercase">
                      {cert.status}
                    </span>
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-forest-900 text-sm mb-1">{cert.title}</h4>
                  <p className="text-[11px] text-charcoal-600 leading-normal">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QA/QC Operational Pillars */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-charcoal-900">4 Pilar Penjaminan Mutu &amp; Keamanan Operasional</h3>
            <p className="text-xs text-charcoal-600 mt-1">Pengawasan dari penerimaan bahan baku hingga pengiriman akhir produk retort.</p>
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
