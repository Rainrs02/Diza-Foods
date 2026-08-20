'use client';

import { motion } from 'framer-motion';
import { Building2, Droplets, Gauge, ShieldAlert, CheckCircle } from 'lucide-react';

export default function AboutFacility({ bgOverlay = 'none' }: { bgOverlay?: 'bg1' | 'bg2' | 'none' }) {
  const specs = [
    {
      icon: Building2,
      title: 'Luas Bangunan 350 m²',
      desc: 'Desain alur kerja higienis dan terisolasi antara area bahan baku, pengolahan, sterilisasi retort, hingga packaging.',
    },
    {
      icon: Droplets,
      title: 'Sistem Air RO & UV Filtration',
      desc: 'Menggunakan standar air minum hasil pemurnian filtrasi ganda, sterilisasi lampu UV, dan Reverse Osmosis (RO).',
    },
    {
      icon: Gauge,
      title: 'Teknologi Retort Sterilizer',
      desc: 'Autoclave sterilisasi thermal tekanan tinggi yang memusnahkan spora mikrobiologi untuk masa simpan hingga 12-24 bulan.',
    },
    {
      icon: ShieldAlert,
      title: 'SOP APD & Air Shower System',
      desc: 'Pengendalian kontaminasi ketat melalui kewajiban APD steril, masker khusus makanan, dan pembersihan Air Shower.',
    },
  ];

  return (
    <section id="tentang" className="py-20 relative overflow-hidden" style={{background:'#f5f7f0'}}>
      {bgOverlay === 'bg1' && (
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      )}
      {bgOverlay === 'bg2' && (
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      )}
      {/* Compro organic blob decorations */}
      <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 pointer-events-none opacity-90" style={{background:'#2d5a27', borderRadius:'0 0 0 80%'}} />
      <div className="absolute bottom-0 left-0 w-36 h-36 pointer-events-none" style={{background:'#2d5a27', borderRadius:'0 60% 0 0'}} />
      {/* Dot decoration */}
      <div className="absolute top-8 right-[280px] hidden lg:grid grid-cols-3 gap-1.5 opacity-40 pointer-events-none">
        {Array.from({length:9}).map((_,i) => <span key={i} className="w-1.5 h-1.5 rounded-full bg-lime-600 block" />)}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border" style={{color:'#2d5a27', background:'rgba(45,90,39,0.08)', borderColor:'rgba(45,90,39,0.2)'}}>
            Profil &amp; Infrastruktur Pabrik
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{color:'#2d5a27'}}>
            Tentang PT Diza Pangan Bersama
          </h2>
          <p className="text-base text-charcoal-700 leading-relaxed font-medium">
            Berdiri sejak <strong style={{color:'#2d5a27'}}>8 Agustus 2026</strong> di Jatiasih, Bekasi, PT Diza Pangan Bersama (Diza Foods) hadir untuk menjawab kebutuhan industri kuliner akan layanan maklon makanan siap saji dengan teknologi sterilisasi modern (retort). Berkomitmen untuk menjadi mitra strategis bagi para pelaku usaha makanan dalam memperluas jangkauan produk mereka secara higienis dan tahan lama tanpa bahan pengawet.
          </p>
        </div>

        {/* Legal Identity Card — compro dark green style */}
        <div className="rounded-2xl p-6 sm:p-8 text-white shadow-xl mb-16 relative overflow-hidden" style={{background:'#2d5a27'}}>
          <div className="absolute right-0 top-0 opacity-10 translate-x-10 -translate-y-10 pointer-events-none">
            <Building2 className="w-80 h-80 text-white" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="space-y-1 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-4">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{color:'#8dc63f'}}>Nama Perusahaan</span>
              <div className="font-bold text-lg text-white">PT Diza Pangan Bersama</div>
              <div className="text-xs text-white/70">Diza Foods</div>
            </div>
            <div className="space-y-1 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-4">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{color:'#8dc63f'}}>Tahun Berdiri</span>
              <div className="font-bold text-lg text-white">2026</div>
              <div className="text-xs text-white/70">Akte Notaris &amp; Kemenkumham</div>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{color:'#8dc63f'}}>Lokasi Pabrik</span>
              <div className="font-semibold text-sm text-white">Jl. Dr. Ratna No. 88, Jatikramat</div>
              <div className="text-xs text-white/70">Jatiasih, Kota Bekasi, Jawa Barat 17421</div>
            </div>
          </div>
        </div>

        

        {/* Plant Infrastructure Specs Grid */}
        <div id="fasilitas" className="pt-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold" style={{color:'#2d5a27'}}>Spesifikasi Infrastruktur &amp; Teknologi Sterilisasi</h3>
            <p className="text-sm text-charcoal-600 mt-1">Standar pabrik pengolahan pangan modern untuk hasil retort tahan lama tanpa pengawet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {specs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-compro-card transition-all duration-300 border"
                  style={{borderColor:'rgba(45,90,39,0.12)'}}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background:'rgba(45,90,39,0.08)', color:'#2d5a27'}}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base mb-2" style={{color:'#2d5a27'}}>{item.title}</h4>
                  <p className="text-xs text-charcoal-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

