'use client';

import { motion } from 'framer-motion';
import { Building2, Droplets, Gauge, ShieldAlert, Award, FileText, CheckCircle } from 'lucide-react';

export default function AboutFacility() {
  const specs = [
    {
      icon: Building2,
      title: 'Luas Bangunan 350 m²',
      desc: 'Desain alur kerja higienis dan terisolasi antara area bahan baku, pengolahan, sterilisasi retort, hingga packaging.',
      color: 'bg-forest-100 text-forest-700 border-forest-200',
    },
    {
      icon: Droplets,
      title: 'Sistem Air RO & UV Filtration',
      desc: 'Menggunakan standar air minum hasil pemurnian filtrasi ganda, sterilisasi lampu UV, dan Reverse Osmosis (RO).',
      color: 'bg-forest-100 text-forest-700 border-forest-200',
    },
    {
      icon: Gauge,
      title: 'Teknologi Retort Sterilizer',
      desc: 'Autoclave sterilisasi thermal tekanan tinggi yang memusnahkan spora mikrobiologi untuk masa simpan hingga 12-24 bulan.',
      color: 'bg-forest-100 text-forest-700 border-forest-200',
    },
    {
      icon: ShieldAlert,
      title: 'SOP APD & Air Shower System',
      desc: 'Pengendalian kontaminasi ketat melalui kewajiban APD steril, masker khusus makanan, dan pembersihan Air Shower.',
      color: 'bg-forest-100 text-forest-700 border-forest-200',
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-forest-600 uppercase tracking-widest bg-forest-50 px-3.5 py-1.5 rounded-full border border-forest-200">
            Profil &amp; Infrastruktur Pabrik
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Tentang PT Diza Pangan Bersama
          </h2>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Berdiri sejak <strong className="text-forest-700">08 Agustus 2026</strong> di Jatiasih, Bekasi, kami hadir sebagai mitra manufaktur makanan siap saji yang higienis, legal, dan aman untuk skala B2B.
          </p>
        </div>

        {/* Legal Identity Card */}
        <div className="bg-gradient-to-br from-forest-900 to-forest-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 translate-x-10 -translate-y-10 pointer-events-none">
            <Building2 className="w-80 h-80 text-white" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="space-y-1 border-b md:border-b-0 md:border-r border-forest-700 pb-4 md:pb-0 md:pr-4">
              <span className="text-xs font-semibold text-sage-300 uppercase tracking-wider">Nama Perusahaan</span>
              <div className="font-bold text-lg text-white">PT Diza Pangan Bersama</div>
              <div className="text-xs text-forest-200">Diza Foods</div>
            </div>

            <div className="space-y-1 border-b md:border-b-0 md:border-r border-forest-700 pb-4 md:pb-0 md:pr-4">
              <span className="text-xs font-semibold text-sage-300 uppercase tracking-wider">Pendirian Resmi</span>
              <div className="font-bold text-lg text-white">08 Agustus 2026</div>
              <div className="text-xs text-forest-200">Akte Notaris &amp; Kemenkumham</div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-sage-300 uppercase tracking-wider">Lokasi Pabrik</span>
              <div className="font-semibold text-sm text-white">Jl. Dr. Ratna No. 88, Jatikramat</div>
              <div className="text-xs text-forest-200">Jatiasih, Kota Bekasi, Jawa Barat 17421</div>
            </div>
          </div>
        </div>

        {/* Vision, Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-forest-50/70 border border-forest-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-forest-700 text-white flex items-center justify-center font-bold text-lg mb-4">
              V
            </div>
            <h3 className="text-xl font-bold text-forest-900 mb-2">Visi Perusahaan</h3>
            <p className="text-sm text-charcoal-700 leading-relaxed">
              Menjadi perusahaan maklon pangan sterilisasi (retort) terkemuka di Indonesia yang mengutamakan kualitas tinggi, higienitas ketat, dan inovasi berkelanjutan.
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mb-4">
              M
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-2">Misi Utama</h3>
            <ul className="text-sm text-charcoal-700 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Layanan maklon berstandar higienis tinggi &amp; aman dikonsumsi.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Mendukung UMKM &amp; brand kuliner lewat fleksibilitas produksi.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Mengembangkan teknologi pengolahan pangan yang efisien.</span>
              </li>
            </ul>
          </div>

          <div className="bg-charcoal-50 border border-charcoal-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-charcoal-800 text-white flex items-center justify-center font-bold text-lg mb-4">
              N
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-2">Nilai Inti (Core Values)</h3>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-white p-2.5 rounded-lg border border-charcoal-200 text-center font-bold text-xs text-forest-800">
                ✨ HIGIENIS
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-charcoal-200 text-center font-bold text-xs text-forest-800">
                🤝 TERPERCAYA
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-charcoal-200 text-center font-bold text-xs text-forest-800">
                💡 INOVATIF
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-charcoal-200 text-center font-bold text-xs text-forest-800">
                🎯 PROFESIONAL
              </div>
            </div>
          </div>
        </div>

        {/* Plant Infrastructure Specs Grid */}
        <div id="fasilitas" className="pt-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-charcoal-900">Spesifikasi Infrastruktur &amp; Teknologi Sterilisasi</h3>
            <p className="text-sm text-charcoal-600 mt-1">Standar pabrik pengolahan pangan modern untuk hasil retort tahan lama tanpa pengawet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 border border-charcoal-200 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-charcoal-900 text-base mb-2">{item.title}</h4>
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
