'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, UserCheck, Briefcase } from 'lucide-react';

export default function TeamProfile() {
  const leadership = [
    {
      name: 'Faisal Muhammad',
      role: 'Direktur / CEO',
      image: '/images/faisal.jpg',
      exp: '11+ Tahun Industri FnB & Food Tech',
      bio: 'Profesional lebih dari 11 tahun di industri FnB, mencakup Product Development, Teknologi Sterilisasi (Retort Product), Teknologi Pasteurisasi, Regulatory, serta pengurus Izin Edar PIRT, BPOM-MD, dan Merk Dagang.',
      regulatory: [
        'Sistem Jaminan Halal (SJH)',
        'GMP & CCPOB',
        'HACCP, FSSC 22000, ISO 22000',
        'PMR-POM & Izin Edar BPOM-MD / PIRT',
      ],
      technical: [
        'Product Development & R&D',
        'Retort & Thermal Processing',
        'Pasteurisasi Suhu Terkontrol',
        'SOP & Instruksi Kerja (IK) Produksi',
      ],
    },
    {
      name: 'Yohanes',
      role: 'Chief Marketing Officer (CMO)',
      image: '/images/yohanes.jpg',
      exp: '19+ Tahun Business Development & B2B Expansion',
      bio: 'Profesional berpengalaman lebih dari 19 tahun dengan fokus pada pengembangan bisnis (Business Development), perluasan jaringan outlet, serta strategi marketing promosi yang efektif untuk penetrasi pasar nasional dan modern market.',
      regulatory: [
        'Perluasan Jaringan Outlet Retail & HORECA',
        'Strategi Marketing & Promosi B2B',
        'Penetrasi Modern Market Nasional',
        'Kemitraan Maklon OEM/ODM Long-term',
      ],
      technical: [
        'B2B Enterprise Partnership',
        'Market Penetration Strategy',
        'Supply Chain & Outlet Expansion',
        'Client Relationship Management',
      ],
    },
  ];

  return (
    <section id="tim" className="py-20 bg-forest-50/50 relative border-t border-b border-forest-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-forest-700 uppercase tracking-widest bg-forest-100 px-3.5 py-1.5 rounded-full border border-forest-200">
            Pimpinan &amp; Tim Ahli Pangan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Profil Tim Inti (Key Personnel)
          </h2>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Dikelola secara profesional oleh praktisi senior berpengalaman belasan tahun dalam formulasi, regulasi izin edar BPOM, teknologi retort, dan pengembangan pasar B2B.
          </p>
        </div>

        {/* Operational Team Facility Banner */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-charcoal-200 mb-16 grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 relative h-[320px] sm:h-[380px] w-full">
            <Image
              src="/images/team-facility.jpg"
              alt="Tim Operasional PT Diza Pangan Bersama bersertifikat APD Lengkap"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-block bg-sage-500 text-forest-950 font-extrabold text-[11px] px-3 py-1 rounded-md uppercase tracking-wider mb-1">
                Fasilitas Produksi Bekas / Jatiasih
              </span>
              <p className="text-xs text-forest-100 font-medium">
                Tim Operasional Pabrik berbusana APD Steril Lengkap di bawah Papan Logo Resmi PT Diza Pangan Bersama.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
            <div className="inline-flex items-center space-x-2 text-forest-700 font-bold text-sm">
              <UserCheck className="w-5 h-5 text-forest-600" />
              <span>Jaminan Higienitas &amp; Pengawasan Ketat</span>
            </div>
            <h3 className="text-2xl font-black text-charcoal-900">
              Tim Operasional Bersertifikat APD &amp; SOP Steril
            </h3>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              Setiap proses produksi maklon diawasi langsung oleh personel bersertifikasi yang menjalankan Standar Operasional Prosedur (SOP) higienis, pengoperasian mesin sterilisasi retort suhu tinggi, serta pencatatan batch number yang dapat dilacak penuh (traceable).
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-forest-50 p-3 rounded-xl border border-forest-100">
                <div className="font-extrabold text-forest-800 text-base">100% APD</div>
                <div className="text-xs text-charcoal-600">Masker, Hairnet, Sarung Tangan Steril</div>
              </div>
              <div className="bg-forest-50 p-3 rounded-xl border border-forest-100">
                <div className="font-extrabold text-forest-800 text-base">Air Shower</div>
                <div className="text-xs text-charcoal-600">Dekontaminasi Udara Sebelum Masuk Area</div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leadership.map((person, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-charcoal-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 mb-6 text-center sm:text-left">
                  <div className="relative w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-forest-500 shadow-md">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-1">
                      {person.exp}
                    </span>
                    <h3 className="text-2xl font-extrabold text-charcoal-900">{person.name}</h3>
                    <p className="text-sm font-semibold text-forest-700">{person.role}</p>
                    <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">{person.bio}</p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-charcoal-100">
                  {/* Regulatory Expertise */}
                  <div>
                    <h4 className="text-xs font-bold text-forest-800 uppercase tracking-wider mb-2 flex items-center">
                      <ShieldCheck className="w-4 h-4 text-forest-600 mr-1.5" />
                      Regulatory &amp; System Expertise
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {person.regulatory.map((item, i) => (
                        <div key={i} className="flex items-center text-xs text-charcoal-700 bg-charcoal-50 px-2.5 py-1.5 rounded-lg border border-charcoal-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 mr-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Expertise */}
                  <div>
                    <h4 className="text-xs font-bold text-forest-800 uppercase tracking-wider mb-2 flex items-center">
                      <Briefcase className="w-4 h-4 text-forest-600 mr-1.5" />
                      Keahlian Teknis &amp; Strategis
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {person.technical.map((item, i) => (
                        <div key={i} className="flex items-center text-xs text-charcoal-700 bg-charcoal-50 px-2.5 py-1.5 rounded-lg border border-charcoal-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 mr-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
