'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageSquare, FileCheck, Beaker, CheckCircle2, ShieldCheck, Factory, Truck } from 'lucide-react';

export default function WorkflowSOP({ bgOverlay = 'none' }: { bgOverlay?: 'bg1' | 'bg2' | 'none' }) {
  const steps = [
    {
      num: '01',
      icon: MessageSquare,
      title: 'Konsultasi Awal & Konsep',
      desc: 'Diskusi mendalam mengenai kategori produk, profil rasa, pilihan kemasan retort/pasteurisasi, dan target harga pokok produksi.',
    },
    {
      num: '02',
      icon: FileCheck,
      title: 'Penandatanganan NDA',
      desc: 'Penandatanganan Non-Disclosure Agreement (NDA) resmi untuk menjamin kerahasiaan formula & hak milik brand Anda.',
    },
    {
      num: '03',
      icon: Beaker,
      title: 'Formulasi & Sampel R&D',
      desc: 'Pengembangan dan uji coba sampel resep oleh Tim R&D Food Tech kami. Estimasi pengerjaan 2–3 minggu.',
    },
    {
      num: '04',
      icon: CheckCircle2,
      title: 'ACC Sampel Klien',
      desc: 'Klien melakukan uji organoleptik & ACC sampel akhir hingga mencapai rasa, viskositas, dan tekstur yang diinginkan.',
    },
    {
      num: '05',
      icon: ShieldCheck,
      title: 'Pendampingan Legalitas',
      desc: 'Proses pendampingan perizinan seperti izin edar BPOM-MD, sertifikasi Halal, dan kesiapan label kemasan produk.',
    },
    {
      num: '06',
      icon: Factory,
      title: 'Produksi Massal & QC',
      desc: 'Proses produksi skala industri menggunakan mesin retort sterilizer & pasteurisasi modern dengan kapasitas 20 ton/bulan.',
    },
    {
      num: '07',
      icon: Truck,
      title: 'Pengiriman & Suplai B2B',
      desc: 'Pengemasan akhir dan distribusi aman produk jadi steril langsung ke fasilitas gudang atau outlet Anda.',
    },
  ];

  return (
    <section id="alur" className="py-20 bg-white relative overflow-hidden">
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
            SOP Kerjasama Terstruktur
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            7 Tahap Alur Kerjasama Maklon Diza Foods
          </h2>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Proses bisnis terstruktur, transparan, dan profesional dari tahap ide awal hingga produk makanan steril siap dipasarkan secara luas.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-charcoal-50/70 border border-charcoal-200 rounded-2xl p-6 relative hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-forest-700 font-mono">{step.num}</span>
                    <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center border border-forest-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-bold text-charcoal-900 text-base mb-2">{step.title}</h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-charcoal-200 text-[10px] font-bold text-forest-700 uppercase tracking-wider">
                  Tahap {step.num} dari 07
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
