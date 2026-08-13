'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Sparkles, Layers, Box, CheckCircle2, ChevronRight, Scale, ShieldCheck } from 'lucide-react';

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState<'categories' | 'packaging'>('categories');

  const categories = [
    {
      id: 'sauce-paste',
      title: 'Saus & Pasta Skala Industri',
      badge: 'Bestseller B2B',
      desc: 'Saus sambal, saus tomat, saus mentai, saus barbeque, pasta kari, dan bumbu dasar siap pakai dengan formulasi khusus presisi tinggi.',
      target: 'Restoran Franchise, Kedai Modern, Retail Brand',
      features: ['Tahan Suhu Ruang', 'Viskositas Kustom', 'Formulasi Khas Brand'],
    },
    {
      id: 'seasoning-broth',
      title: 'Bumbu Masak Cair & Kaldu',
      badge: 'HORECA Supply',
      desc: 'Aneka bumbu opor, rendang, soto, dan kaldu cair steril konsentrat yang memudahkan operasional dapur terpusat (central kitchen).',
      target: 'Central Kitchen, Hotel, Katering Massal',
      features: ['Efisiensi Dapur 80%', 'Konsistensi Rasa 100%', 'Format Bulk 1-5kg'],
    },
    {
      id: 'rte-meals',
      title: 'Makanan Siap Saji (Ready-to-Eat)',
      badge: 'Retort Specialty',
      desc: 'Lauk pauk steril dalam kemasan kedap udara (seperti daging rendang, ayam ungkep, olahan daging & sayur) yang awet tanpa pengawet.',
      target: 'Supermarket, Ekspor, Travel Food, Retail RTE',
      features: ['Shelf-Life 12-24 Bulan', 'Tanpa Refrigerasi', 'Rasa Otentik Terjaga'],
    },
    {
      id: 'bakery-fillings',
      title: 'Bakery Fillings & Toppings',
      badge: 'Industrial Grade',
      desc: 'Isian roti dan selai tahan lama berbasis buah segar atau cokelat berkualitas untuk industri katering dan pabrik roti berskala besar.',
      target: 'Pabrik Bakery, Industri Roti, Katering Premium',
      features: ['Bake-Stable Formulation', 'Anti-Separasi Minyak', 'Profil Manis Terkontrol'],
    },
  ];

  const packagings = [
    {
      title: 'Aluminium Foil Retort Pouch',
      type: 'Flexible Packaging',
      desc: 'Memberikan perlindungan 100% terhadap sinar UV, oksigen, dan kelembapan untuk masa simpan produk maksimal hingga 2 tahun.',
      ideal: 'Ready-to-Eat, Saus Premium, Rendang & Lauk Steril',
      icon: Box,
    },
    {
      title: 'Clear / Transparent Retort Pouch',
      type: 'Flexible Packaging',
      desc: 'Bahan transparan tahan panas yang memungkinkan calon konsumen melihat langsung kesegaran & daya tarik isi produk di rak display.',
      ideal: 'Sambal Basah, Isian Buah, Bumbu Cair Display',
      icon: Package,
    },
    {
      title: 'Jar Kaca (Glass Jar)',
      type: 'Rigid Packaging',
      desc: 'Menampilkan kesan produk premium, elegan, dan sangat higienis. Memberikan nilai tambah visual yang tinggi untuk pasar modern.',
      ideal: 'Saus Artisan, Sambal Botolan, Selai Buah Gourmet',
      icon: Layers,
    },
    {
      title: 'Kaleng Industri (Tin Can)',
      type: 'Heavy-Duty Packaging',
      desc: 'Kemasan klasik super kokoh yang tahan terhadap guncangan berat logistik ekspor, distribusi nasional jauh, dan pasokan HORECA besar.',
      ideal: 'Kaldu Bulk HORECA, Pasokan Logistik Ekspor',
      icon: Scale,
    },
  ];

  return (
    <section id="katalog" className="py-20 bg-forest-900 text-white relative bg-dark-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-sage-300 uppercase tracking-widest bg-forest-800 px-3.5 py-1.5 rounded-full border border-forest-700">
            Katalog Produk &amp; Kemasan Maklon
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kategori Produk B2B &amp; Opsi Kemasan Retort
          </h2>
          <p className="text-base text-forest-200 leading-relaxed">
            Diza Foods melayani kustomisasi lengkap mulai dari formulasi rasa eksklusif (OEM/ODM) hingga pemilihan tipe kemasan steril berstandar industri.
          </p>

          {/* Toggle Buttons */}
          <div className="inline-flex p-1 rounded-xl bg-forest-800 border border-forest-700 mt-4">
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'categories'
                  ? 'bg-sage-500 text-forest-950 shadow-md'
                  : 'text-forest-200 hover:text-white'
              }`}
            >
              Kategori Produk Maklon
            </button>
            <button
              onClick={() => setActiveTab('packaging')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'packaging'
                  ? 'bg-sage-500 text-forest-950 shadow-md'
                  : 'text-forest-200 hover:text-white'
              }`}
            >
              Opsi Kemasan Retort Steril
            </button>
          </div>
        </div>

        {/* Categories Tab Content */}
        {activeTab === 'categories' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-forest-800/70 border border-forest-700 rounded-2xl p-6 sm:p-8 hover:border-sage-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold text-forest-950 bg-sage-400 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {cat.badge}
                    </span>
                    <Sparkles className="w-4 h-4 text-sage-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-xs text-forest-200 leading-relaxed mb-4">{cat.desc}</p>

                  <div className="bg-forest-900/60 p-3 rounded-xl border border-forest-700 mb-4">
                    <span className="text-[11px] font-semibold text-sage-300 block mb-1">Target Segmen Pasar:</span>
                    <span className="text-xs text-white font-medium">{cat.target}</span>
                  </div>

                  <div className="space-y-2">
                    {cat.features.map((feat, i) => (
                      <div key={i} className="flex items-center text-xs text-forest-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sage-400 mr-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-forest-700 flex items-center justify-between">
                  <span className="text-xs text-forest-300 font-medium">OEM / ODM Available</span>
                  <a
                    href="#inquiry"
                    className="inline-flex items-center text-xs font-bold text-sage-300 hover:text-white transition-colors"
                  >
                    <span>Minta Sample / Quotation</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Packaging Tab Content */}
        {activeTab === 'packaging' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {packagings.map((pack, idx) => {
              const Icon = pack.icon;
              return (
                <div
                  key={idx}
                  className="bg-forest-800/70 border border-forest-700 rounded-2xl p-6 hover:border-sage-500/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sage-500/20 text-sage-300 border border-sage-500/30 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-bold text-sage-300 uppercase tracking-wider block mb-1">
                      {pack.type}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{pack.title}</h3>
                    <p className="text-xs text-forest-200 leading-relaxed mb-4">{pack.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-forest-700">
                    <span className="text-[10px] font-semibold text-sage-400 block mb-1">Cocok Untuk:</span>
                    <span className="text-xs text-white font-medium">{pack.ideal}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Bulk Packaging Banner */}
        <div className="mt-12 bg-gradient-to-r from-forest-800 to-forest-950 border border-forest-700 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-sage-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Fleksibilitas Ukuran Kemasan</span>
            </div>
            <h3 className="text-xl font-black text-white">Saset 100g Retail hingga Bulk Packaging 1kg – 5kg</h3>
            <p className="text-xs text-forest-200 max-w-2xl">
              Kami memfasilitasi kemasan porsi tunggal saset retail untuk konsumen akhir hingga pail/bag bulk 1kg–5kg khusus pasokan efisien hotel, restoran, dan katering (HORECA).
            </p>
          </div>

          <a
            href="#inquiry"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-sage-400 text-forest-950 font-bold text-sm hover:bg-sage-300 transition-colors shadow-lg"
          >
            Hitung Estimasi MOQ
          </a>
        </div>

      </div>
    </section>
  );
}
