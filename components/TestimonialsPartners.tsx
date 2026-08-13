'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Building2, Utensils, Store, ChefHat, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function TestimonialsPartners() {
  const partners = [
    { name: 'Kedai Selera Nusantara', type: 'Jaringan Resto Kuliner' },
    { name: 'Nasi Goreng Express', type: 'Franchise Kuliner' },
    { name: 'Warung Sambal Mantap', type: 'Retail Packaged Food' },
    { name: 'Dapur Gourmet HORECA', type: 'Central Kitchen & Hotel' },
    { name: 'Rendang Legend ID', type: 'Ready-to-Eat Specialist' },
    { name: 'Sambal Sachet Bistro', type: 'Modern Market Supplier' },
  ];

  const testimonials = [
    {
      quote: 'Sangat terbantu bermaklon di Diza Foods, teknologi retort-nya membuat produk tahan lama tanpa mengubah rasa aslinya.',
      name: 'Budi Santoso',
      role: 'Founder & Owner',
      company: 'Kedai Selera Nusantara',
      rating: 5,
    },
    {
      quote: 'Kapasitas produksi 6–10 ton per bulan sangat membantu stabilitas pasokan di 15 cabang resto kami. Tim R&D-nya sangat kooperatif meracik konsistensi rasa.',
      name: 'Hendria Wijaya',
      role: 'Head of Operations',
      company: 'Dapur Gourmet HORECA',
      rating: 5,
    },
    {
      quote: 'Pendampingan perizinan dan penerapan SOP APD steril di pabriknya membuat kami semakin percaya diri melakukan penetrasi produk saset sambal ke modern market nasional.',
      name: 'Siti Rahmawati',
      role: 'Chief Marketing Officer',
      company: 'Sambal Sachet Bistro',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-forest-50/60 relative border-t border-b border-forest-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-forest-700 uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full border border-forest-200 shadow-sm">
            Mitra &amp; Kepercayaan B2B
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Kepercayaan Brand Kuliner &amp; Testimoni Client
          </h2>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Menjadi mitra manufaktur terpercaya bagi berbagai brand kuliner lokal, UMKM berkembang, dan jaringan restoran modern di Indonesia.
          </p>
        </div>

        {/* Partner Logos/Badges Grid */}
        <div className="mb-16">
          <div className="text-center text-xs font-bold text-charcoal-500 uppercase tracking-wider mb-6">
            Dipercaya Oleh Mitra Brand Kuliner &amp; HORECA
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 border border-charcoal-200 shadow-sm text-center flex flex-col items-center justify-center hover:border-forest-400 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-forest-50 text-forest-700 flex items-center justify-center mb-2 font-bold text-sm">
                  {partner.name.charAt(0)}
                </div>
                <div className="font-bold text-xs text-charcoal-900 line-clamp-1">{partner.name}</div>
                <div className="text-[10px] text-charcoal-500">{partner.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 border border-charcoal-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-forest-200" />
                </div>

                <p className="text-xs text-charcoal-700 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal-100 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-forest-700 text-white font-bold flex items-center justify-center text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-charcoal-900 text-sm">{item.name}</h4>
                  <p className="text-[11px] text-forest-700 font-medium">
                    {item.role} — <span className="text-charcoal-500">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
