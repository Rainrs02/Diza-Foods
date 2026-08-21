'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQSection({ bgOverlay = 'none' }: { bgOverlay?: 'bg1' | 'bg2' | 'none' }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apakah makanan hasil teknologi sterilisasi retort membutuhkan bahan pengawet kimia?',
      a: 'Tidak sama sekali. Produk awet secara alami karena melalui pemrosesan termal suhu dan tekanan presisi tinggi menggunakan mesin Retort Sterilizer dalam kemasan kedap udara. Hal ini memusnahkan spora bakteri pembusuk tanpa penambahan pengawet kimia sintesis.',
    },
    {
      q: 'Berapa lama estimasi durasi proses R&D pengerjaan sampel produk baru?',
      a: 'Rata-rata pembuatan sampel formulasi produk baru membutuhkan waktu sekitar 2 hingga 3 minggu, tergantung pada kerumitan resep, penyesuaian organoleptik rasa, dan ketersediaan bahan baku khusus.',
    },
    {
      q: 'Apakah PT Diza Pangan Bersama membantu pendampingan pengurusan izin edar BPOM & Halal?',
      a: 'Ya, kami menyediakan layanan konsultasi dan pendampingan legalitas lengkap, mulai dari pendaftaran izin edar BPOM-MD, sertifikasi Halal, hingga penataan informasi nilai gizi dan komposisi pada label kemasan.',
    },
    {
      q: 'Berapa syarat Minimum Order Quantity (MOQ) untuk mulai maklon di Diza Foods?',
      a: 'Minimum Order Quantity (MOQ) kami sangat fleksibel, diawali mulai dari 1.000 pcs per SKU. Sangat idaman bagi tahap uji pasar perintisan UMKM maupun ekspansi varian produk baru bagi brand ternama.',
    },
    {
      q: 'Bagaimana jaminan keamanan dan kerahasiaan resep asli milik brand kami?',
      a: 'Sebelum pertukaran formula dan pengerjaan R&D dimulai, kami wajib menandatangani surat Non-Disclosure Agreement (NDA) yang mengikat secara hukum untuk memastikan resep sepenuhnya menjadi hak milik eksklusif brand Anda.',
    },
    {
      q: 'Apa saja opsi kemasan maklon yang tersedia?',
      a: 'Fasilitas kami mendukung kemasan Aluminium Foil Retort Pouch dan Clear/Transparent Retort Pouch dari ukuran saset retail 100g hingga bulk packaging 1kg–5kg.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      {bgOverlay === 'bg1' && (
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      )}
      {bgOverlay === 'bg2' && (
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      )}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-charcoal-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left font-bold text-base text-charcoal-900 flex justify-between items-center hover:bg-forest-50/50 transition-colors"
                >
                  <span className="pr-4 flex items-center">
                    <HelpCircle className="w-5 h-5 text-forest-600 mr-3 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-forest-700 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal-700 leading-relaxed border-t border-charcoal-100 bg-charcoal-50/40">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-forest-50 border border-forest-200 space-y-3">
          <h3 className="font-bold text-forest-900 text-lg">Punya Pertanyaan Khusus Terkait Formulasi Anda?</h3>
          <p className="text-xs text-charcoal-600">Tim R&amp;D dan Konsultan Maklon kami siap berdiskusi secara langsung melalui WhatsApp.</p>
          <div>
            <a
              href="https://wa.me/62895405233323"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-forest-700 text-white font-bold text-xs hover:bg-forest-800 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Tanyakan Langsung ke Tim R&amp;D</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
