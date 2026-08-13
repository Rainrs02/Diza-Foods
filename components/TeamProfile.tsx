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
    <section id="tim" className="py-20 relative overflow-hidden border-t border-b" style={{background:'#f5f7f0', borderColor:'rgba(45,90,39,0.1)'}}>
      {/* Compro blob decorations */}
      <div className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 pointer-events-none" style={{background:'#2d5a27', borderRadius:'0 0 0 80%', opacity:0.12}} />
      <div className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none" style={{background:'#7ab317', borderRadius:'0 60% 0 0', opacity:0.15}} />
      {/* Dot decoration */}
      <div className="absolute top-10 left-[280px] hidden lg:grid grid-cols-3 gap-1.5 opacity-30 pointer-events-none">
        {Array.from({length:9}).map((_,i) => <span key={i} className="w-1.5 h-1.5 rounded-full block" style={{background:'#7ab317'}} />)}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border" style={{color:'#2d5a27', background:'rgba(45,90,39,0.08)', borderColor:'rgba(45,90,39,0.2)'}}>
            Pimpinan &amp; Tim Ahli Pangan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{color:'#2d5a27'}}>
            Tim Kami
          </h2>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Dikelola secara profesional oleh praktisi senior berpengalaman belasan tahun dalam formulasi, regulasi izin edar BPOM, teknologi retort, dan pengembangan pasar B2B.
          </p>
        </div>

        {/* Operational Team Facility Banner */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-compro-card border mb-16 grid grid-cols-1 lg:grid-cols-12 items-center" style={{borderColor:'rgba(45,90,39,0.15)'}}>
          <div className="lg:col-span-6 relative h-[320px] sm:h-[380px] w-full">
            <Image
              src="/images/team-facility.jpg"
              alt="Tim Operasional PT Diza Pangan Bersama bersertifikat APD Lengkap"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(45,90,39,0.85) 0%, transparent 55%)'}}></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-block font-extrabold text-[11px] px-3 py-1 rounded-md uppercase tracking-wider mb-1" style={{background:'#7ab317', color:'white'}}>
                Fasilitas Produksi Bekas / Jatiasih
              </span>
              <p className="text-xs text-white/80 font-medium">
                Tim Operasional Pabrik berbusana APD Steril Lengkap di bawah Papan Logo Resmi PT Diza Pangan Bersama.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
            <div className="inline-flex items-center space-x-2 font-bold text-sm" style={{color:'#2d5a27'}}>
              <UserCheck className="w-5 h-5" style={{color:'#2d5a27'}} />
              <span>Jaminan Higienitas &amp; Pengawasan Ketat</span>
            </div>
            <h3 className="text-2xl font-black" style={{color:'#1a1a1a'}}>
              Tim Operasional Bersertifikat APD &amp; SOP Steril
            </h3>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              Setiap proses produksi maklon diawasi langsung oleh personel bersertifikasi yang menjalankan Standar Operasional Prosedur (SOP) higienis, pengoperasian mesin sterilisasi retort suhu tinggi, serta pencatatan batch number yang dapat dilacak penuh.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl border" style={{background:'#f5f7f0', borderColor:'rgba(45,90,39,0.15)'}}>
                <div className="font-extrabold text-base" style={{color:'#2d5a27'}}>100% APD</div>
                <div className="text-xs text-charcoal-600">Masker, Hairnet, Sarung Tangan Steril</div>
              </div>
              <div className="p-3 rounded-xl border" style={{background:'#f5f7f0', borderColor:'rgba(45,90,39,0.15)'}}>
                <div className="font-extrabold text-base" style={{color:'#2d5a27'}}>Air Shower</div>
                <div className="text-xs text-charcoal-600">Dekontaminasi Udara Sebelum Masuk Area</div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Leadership Grid — Compro hexagon frames */}
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
                  {/* Hexagon photo frame — compro style */}
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
                    {/* Name in compro lime-green */}
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
