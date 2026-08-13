'use client';

import { useInquiryStore } from '@/store/useInquiryStore';
import { motion } from 'framer-motion';
import { MessageCircle, Calculator, Clock, ShieldCheck, Factory, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

export default function InquiryForm() {
  const {
    category,
    packaging,
    quantity,
    customFormula,
    clientName,
    companyName,
    phone,
    notes,
    setCategory,
    setPackaging,
    setQuantity,
    setCustomFormula,
    setClientName,
    setCompanyName,
    setPhone,
    setNotes,
    resetForm,
    getWhatsAppUrl,
    getEstimatedTime,
  } = useInquiryStore();

  const categories = [
    'Saus & Pasta Skala Industri',
    'Bumbu Masak Cair & Kaldu',
    'Makanan Siap Saji (Ready-to-Eat)',
    'Bakery Fillings & Toppings',
  ];

  const packagings = [
    'Aluminium Foil Retort Pouch',
    'Clear / Transparent Retort Pouch',
    'Jar Kaca (Glass Jar)',
    'Kaleng Industri (Tin Can)',
  ];

  const presetQuantities = [1000, 3000, 5000, 10000, 25000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppUrl();
    window.open(url, '_blank');
  };

  return (
    <section id="inquiry" className="py-20 bg-forest-50 relative border-t border-b border-forest-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-forest-700 uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full border border-forest-200 shadow-sm">
            Kalkulator &amp; Form Konsultasi Interactive
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Kalkulator Estimasi Layanan Maklon B2B
          </h2>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Pilih spesifikasi produk, jenis kemasan, dan volume produksi untuk langsung menghasilkan draf estimasi pesanan dan konsultasi resmi via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Form Controls */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-charcoal-200 shadow-lg space-y-6">
            
            <div className="flex items-center justify-between border-b border-charcoal-100 pb-4">
              <div className="flex items-center space-x-2 text-forest-800 font-bold">
                <Calculator className="w-5 h-5 text-forest-600" />
                <span>Input Spesifikasi Maklon</span>
              </div>
              <button
                type="button"
                onClick={resetForm}
                className="text-xs text-charcoal-500 hover:text-forest-700 flex items-center space-x-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Form</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* 1. Category Selection */}
              <div>
                <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-2">
                  1. Pilih Kategori Produk Pangan
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`px-3.5 py-3 rounded-xl text-xs font-bold text-left border transition-all ${
                        category === cat
                          ? 'bg-forest-700 text-white border-forest-700 shadow-md'
                          : 'bg-white text-charcoal-700 border-charcoal-200 hover:bg-forest-50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Packaging Selection */}
              <div>
                <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-2">
                  2. Opsi Jenis Kemasan Retort Steril
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {packagings.map((pack) => (
                    <button
                      key={pack}
                      type="button"
                      onClick={() => setPackaging(pack)}
                      className={`px-3.5 py-3 rounded-xl text-xs font-bold text-left border transition-all ${
                        packaging === pack
                          ? 'bg-forest-700 text-white border-forest-700 shadow-md'
                          : 'bg-white text-charcoal-700 border-charcoal-200 hover:bg-forest-50'
                      }`}
                    >
                      {pack}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Formula R&D Option */}
              <div>
                <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-2">
                  3. Skema Formulasi Resep (OEM / ODM)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setCustomFormula(true)}
                    className={`px-3.5 py-3 rounded-xl text-xs font-bold text-left border transition-all ${
                      customFormula
                        ? 'bg-forest-700 text-white border-forest-700 shadow-md'
                        : 'bg-white text-charcoal-700 border-charcoal-200 hover:bg-forest-50'
                    }`}
                  >
                    <div className="font-bold">✨ R&amp;D Kustom dari Nol (OEM/ODM)</div>
                    <div className="text-[11px] opacity-80 font-normal mt-0.5">Diza Foods meracik resep khusus sesuai keinginan brand.</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCustomFormula(false)}
                    className={`px-3.5 py-3 rounded-xl text-xs font-bold text-left border transition-all ${
                      !customFormula
                        ? 'bg-forest-700 text-white border-forest-700 shadow-md'
                        : 'bg-white text-charcoal-700 border-charcoal-200 hover:bg-forest-50'
                    }`}
                  >
                    <div className="font-bold">📄 Resep Milik Klien (White-Label)</div>
                    <div className="text-[11px] opacity-80 font-normal mt-0.5">Memproduksi massal berdasarkan formula bawaan klien.</div>
                  </button>
                </div>
              </div>

              {/* 4. Estimasi Volume MOQ Slider & Buttons */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                    4. Volume Produksi per SKU (MOQ)
                  </label>
                  <span className="text-sm font-extrabold text-forest-700 bg-forest-100 px-3 py-1 rounded-lg border border-forest-200">
                    {quantity.toLocaleString('id-ID')} pcs
                  </span>
                </div>

                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-charcoal-200 rounded-lg appearance-none cursor-pointer accent-forest-700"
                />

                <div className="flex flex-wrap gap-2 mt-3">
                  {presetQuantities.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setQuantity(preset)}
                      className={`px-3 py-1 rounded-md text-xs font-semibold border ${
                        quantity === preset
                          ? 'bg-forest-800 text-white border-forest-800'
                          : 'bg-charcoal-50 text-charcoal-700 border-charcoal-200 hover:bg-charcoal-100'
                      }`}
                    >
                      {preset.toLocaleString('id-ID')} pcs
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-charcoal-500 mt-1.5">
                  * Minimum Order Quantity (MOQ) diawali dari 1.000 pcs/SKU (fleksibel untuk perintisan brand baru).
                </p>
              </div>

              {/* 5. Client Contact Inputs */}
              <div className="pt-4 border-t border-charcoal-100 space-y-4">
                <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                  5. Informasi Pemohon / Kontak Usaha
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Nama Lengkap Anda *"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-charcoal-200 text-xs text-charcoal-800 focus:outline-none focus:border-forest-600"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Nama Brand / Usaha Kuliner *"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-charcoal-200 text-xs text-charcoal-800 focus:outline-none focus:border-forest-600"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      placeholder="Nomor WhatsApp / Telepon *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-charcoal-200 text-xs text-charcoal-800 focus:outline-none focus:border-forest-600"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Catatan Spesifik (Opsional)"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-charcoal-200 text-xs text-charcoal-800 focus:outline-none focus:border-forest-600"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg hover:shadow-emerald-glow transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Kirim Konsultasi via WhatsApp</span>
              </button>

            </form>
          </div>

          {/* Right Column: Real-Time Summary & Estimation Box */}
          <div className="lg:col-span-5 bg-forest-900 text-white rounded-2xl p-6 sm:p-8 border border-forest-800 shadow-xl space-y-6">
            <div>
              <span className="text-[10px] font-extrabold text-sage-300 bg-forest-800 px-3 py-1 rounded-md uppercase tracking-wider">
                Ringkasan Draf Maklon B2B
              </span>
              <h3 className="text-xl font-bold text-white mt-2">Ringkasan Spesifikasi</h3>
            </div>

            <div className="space-y-3 bg-forest-800/80 p-4 rounded-xl border border-forest-700 text-xs">
              <div className="flex justify-between pb-2 border-b border-forest-700">
                <span className="text-forest-300">Kategori Produk:</span>
                <span className="font-bold text-white text-right">{category}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-forest-700">
                <span className="text-forest-300">Jenis Kemasan:</span>
                <span className="font-bold text-white text-right">{packaging}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-forest-700">
                <span className="text-forest-300">Skema Formulasi:</span>
                <span className="font-bold text-sage-300 text-right">
                  {customFormula ? 'Kustom R&D (OEM/ODM)' : 'Resep Klien (White-Label)'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-forest-300">Volume Produksi:</span>
                <span className="font-extrabold text-sage-300 text-right">{quantity.toLocaleString('id-ID')} pcs</span>
              </div>
            </div>

            {/* Dynamic Estimation Metrics */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-sage-500/20 flex items-center justify-center text-sage-300 border border-sage-500/30 flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-sage-300 block">Estimasi Durasi Pengerjaan:</span>
                  <span className="text-xs font-bold text-white">{getEstimatedTime()}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-sage-500/20 flex items-center justify-center text-sage-300 border border-sage-500/30 flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-sage-300 block">Masa Simpan (Shelf-Life):</span>
                  <span className="text-xs font-bold text-white">12 – 24 Bulan pada Suhu Ruang (Retort Sterilized)</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-sage-500/20 flex items-center justify-center text-sage-300 border border-sage-500/30 flex-shrink-0">
                  <Factory className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-sage-300 block">Kapasitas Suplai Pabrik:</span>
                  <span className="text-xs font-bold text-white">6 – 10 Ton / Bulan (Ready Scaling Up)</span>
                </div>
              </div>
            </div>

            <div className="bg-forest-950 p-4 rounded-xl border border-forest-800 text-[11px] text-forest-200 leading-relaxed">
              💡 <strong>Kerahasiaan Terjamin:</strong> Seluruh diskusi formulasi dan spesifikasi produk Anda dilindungi Non-Disclosure Agreement (NDA) resmi sebelum sampel R&amp;D dikirimkan.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
