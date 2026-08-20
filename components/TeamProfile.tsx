'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, UserCheck, Briefcase } from 'lucide-react';

export default function TeamProfile({ bgOverlay = 'none' }: { bgOverlay?: 'bg1' | 'bg2' | 'none' }) {
  const leadership = [
    {
      name: 'Faisal Muhammad',
      role: 'Founder & Direktur Utama',
      image: '/images/faisal.jpg',
      exp: '11+ Tahun Industri FnB & Food Tech',
      bio: 'Sebagai perusahaan yang berdedikasi pada inovasi kuliner, kami PT Diza Pangan Bersama (Diza Foods) berkomitmen untuk menghadirkan solusi untuk berbagai kebutuhan bagi industri pangan dan kuliner yang berkualitas tinggi, steril, halal, dan aman bagi seluruh mitra kami.',
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
    <section id="tim" className="py-20 relative overflow-hidden border-t border-b" style={{background:'#f5f7f0', borderColor:'rgba(45,90,39,0.1)'}}>
      {bgOverlay === 'bg1' && (
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      )}
      {bgOverlay === 'bg2' && (
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      )}
      {/* Compro blob decorations */}
      <div className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 pointer-events-none z-0" style={{background:'#2d5a27', borderRadius:'0 0 0 80%', opacity:0.12}} />
      <div className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none z-0" style={{background:'#7ab317', borderRadius:'0 60% 0 0', opacity:0.15}} />
      <div className="absolute top-10 left-[280px] hidden lg:grid grid-cols-3 gap-1.5 opacity-30 pointer-events-none z-0">
        {Array.from({length:9}).map((_,i) => <span key={i} className="w-1.5 h-1.5 rounded-full block" style={{background:'#7ab317'}} />)}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Foto Fasilitas Banner */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-compro-card border mb-16 grid grid-cols-1 lg:grid-cols-12 items-center" style={{borderColor:'rgba(45,90,39,0.15)'}}>
          <div className="lg:col-span-6 relative h-[320px] sm:h-[380px] w-full">
            <Image
              src="/images/team-facility.jpg"
              alt="Tim Operasional PT Diza Pangan Bersama"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(45,90,39,0.85) 0%, transparent 55%)'}}></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-block font-extrabold text-[11px] px-3 py-1 rounded-md uppercase tracking-wider mb-1" style={{background:'#7ab317', color:'white'}}>
                Fasilitas Produksi Jatiasih, Bekasi
              </span>
              <p className="text-xs text-white/80 font-medium">
                Dengan dukungan teknologi sterilisasi modern (retort), kami hadir untuk membantu para pelaku usaha memperluas jangkauan produk mereka secara higienis dan tahan lama.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
            <div className="inline-flex items-center space-x-2 font-bold text-sm" style={{color:'#2d5a27'}}>
              <UserCheck className="w-5 h-5" style={{color:'#2d5a27'}} />
              <span>Profesional &amp; Berpengalaman</span>
            </div>
            <h3 className="text-2xl font-black" style={{color:'#1a1a1a'}}>
              Dikelola Tim FnB &amp; Sterilisasi Berpengalaman
            </h3>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              Dengan dukungan teknologi sterilisasi modern, kami membantu para pelaku usaha — mulai dari UMKM hingga korporasi besar — dalam memperluas jangkauan produk mereka secara higienis, praktis, dan tahan lama tanpa bahan pengawet.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl border" style={{background:'#f5f7f0', borderColor:'rgba(45,90,39,0.15)'}}>
                <div className="font-extrabold text-base" style={{color:'#2d5a27'}}>20 Ton</div>
                <div className="text-xs text-charcoal-600">Kapasitas Produksi / Bulan</div>
              </div>
              <div className="p-3 rounded-xl border" style={{background:'#f5f7f0', borderColor:'rgba(45,90,39,0.15)'}}>
                <div className="font-extrabold text-base" style={{color:'#2d5a27'}}>MOQ Rendah</div>
                <div className="text-xs text-charcoal-600">Fleksibel untuk UMKM & Korporasi</div>
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
              className="bg-white rounded-2xl p-6 sm:p-8 border shadow-sm hover:shadow-compro-card transition-all duration-300 flex flex-col justify-between"
              style={{borderColor:'rgba(45,90,39,0.12)'}}
            >
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-5 sm:space-y-0 sm:space-x-6 mb-6 text-center sm:text-left">
                  {/* Hexagon photo frame */}
                  <div className="hexagon-wrapper flex-shrink-0" style={{width:112, height:112}}>
                    <div className="hexagon-frame" style={{width:112, height:112}}>
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={112}
                        height={112}
                        className="object-cover object-top w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2" style={{background:'rgba(122,179,23,0.12)', color:'#5d8c12'}}>
                      {person.exp}
                    </span>
                    <h3 className="text-2xl font-extrabold" style={{color:'#7ab317'}}>{person.name}</h3>
                    <p className="text-sm font-bold" style={{color:'#2d5a27'}}>{person.role}</p>
                    <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">{person.bio}</p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t" style={{borderColor:'rgba(45,90,39,0.1)'}}>
                  {/* Regulatory Expertise */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center" style={{color:'#2d5a27'}}>
                      <ShieldCheck className="w-4 h-4 mr-1.5" style={{color:'#2d5a27'}} />
                      Regulatory &amp; System Expertise
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {person.regulatory.map((item, i) => (
                        <div key={i} className="compro-check-item text-xs text-charcoal-700 px-2.5 py-1.5 rounded-lg border" style={{background:'#f5f7f0', borderColor:'rgba(45,90,39,0.1)'}}>
                          <div className="compro-check-icon" style={{borderColor:'#7ab317', width:16, height:16}}>
                            <CheckCircle2 className="w-2.5 h-2.5" style={{color:'#7ab317'}} />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Expertise */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center" style={{color:'#2d5a27'}}>
                      <Briefcase className="w-4 h-4 mr-1.5" style={{color:'#2d5a27'}} />
                      Keahlian Teknis &amp; Strategis
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {person.technical.map((item, i) => (
                        <div key={i} className="compro-check-item text-xs text-charcoal-700 px-2.5 py-1.5 rounded-lg border" style={{background:'#f5f7f0', borderColor:'rgba(45,90,39,0.1)'}}>
                          <div className="compro-check-icon" style={{borderColor:'#7ab317', width:16, height:16}}>
                            <CheckCircle2 className="w-2.5 h-2.5" style={{color:'#7ab317'}} />
                          </div>
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
