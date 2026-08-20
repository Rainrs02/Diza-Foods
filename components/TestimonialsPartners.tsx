'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote, Building2 } from 'lucide-react';

export default function TestimonialsPartners({ bgOverlay = 'none' }: { bgOverlay?: 'bg1' | 'bg2' | 'none' }) {
  const partners = [
    { name: 'Janji Jiwa', type: 'Kuliner Modern', logo: '/assets/canva/Client (1).png' },
    { name: 'Juragan Aqiqah', type: 'Katering & HORECA', logo: '/assets/canva/Client (2).png' },
    { name: 'Khasanah Sari Bakery', type: 'Industri Bakery', logo: '/assets/canva/Client (3).png' },
    { name: 'PT. Kencana Anakmas Lestari', type: 'Korporasi Pangan', logo: '/assets/canva/Client (4).png' },
  ];

  const testimonials = [
    {
      quote: 'Kami bangga menjadi mitra Diza Foods. Teknologi retort-nya membuat produk kami tahan lama tanpa mengubah rasa aslinya — solusi ideal untuk skala distribusi nasional.',
      name: 'Tim Juragan Aqiqah',
      role: 'Mitra Maklon',
      company: 'Juragan Aqiqah',
      rating: 5,
    },
    {
      quote: 'Kapasitas produksi 20 ton per bulan sangat membantu stabilitas suplai kami. Tim R&D Diza sangat kooperatif dalam meracik konsistensi rasa untuk kebutuhan industri bakery kami.',
      name: 'Tim Khasanah Sari',
      role: 'Head of Operations',
      company: 'Khasanah Sari Bakery',
      rating: 5,
    },
    {
      quote: 'Kepercayaan yang kami berikan kepada Diza Foods terbukti tepat. Standar kualitas, keamanan, dan konsistensi rasa terjaga di setiap batch produksi yang kami terima.',
      name: 'Tim PT. Kencana Anakmas',
      role: 'Procurement Manager',
      company: 'PT. Kencana Anakmas Lestari',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-forest-50/60 relative border-t border-b border-forest-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-forest-700 uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full border border-forest-200 shadow-sm">
            Client &amp; Mitra Terpercaya
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Client Kami
          </h2>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Kami bangga telah menjadi mitra strategis bagi berbagai pelaku bisnis, mulai dari UMKM inovatif hingga korporasi pangan berskala besar.
          </p>
        </div>

        {/* Partner Logos Grid — menggunakan logo dari Canva */}
        <div className="mb-16">
          <div className="text-center text-xs font-bold text-charcoal-500 uppercase tracking-wider mb-8">
            Dipercaya Oleh Mitra Brand Kuliner &amp; Industri Pangan
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border border-charcoal-200 shadow-sm flex flex-col items-center justify-center hover:border-forest-400 hover:shadow-md transition-all"
              >
                <div className="relative w-20 h-20 mb-3">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="font-bold text-sm text-charcoal-900 text-center leading-tight">{partner.name}</div>
                <div className="text-[11px] text-charcoal-500 mt-1 text-center">{partner.type}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Layanan Kami Banner */}
        <div className="mb-12 rounded-2xl p-6 sm:p-8" style={{background:'#2d5a27'}}>
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-3">Layanan Kami</h3>
            <p className="text-white/85 text-sm leading-relaxed max-w-3xl mx-auto">
              Kepercayaan yang diberikan oleh mitra kami adalah bukti nyata atas dedikasi kami dalam menjaga standar kualitas, keamanan, dan konsistensi rasa di setiap produk yang kami hasilkan. Kami juga melayani konsultasi resep, sample produk, dan berbagai hal lain yang menunjang kebutuhan industri FnB.
            </p>
          </div>
        </div>



      </div>
    </section>
  );
}
