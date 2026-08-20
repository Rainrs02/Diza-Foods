'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Clock, ExternalLink, ArrowUp, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-white pt-16 pb-12 border-t border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-forest-800">
          
          {/* Col 1: Brand & Profile */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-lg p-1">
                <Image
                  src="/images/logo.png"
                  alt="Diza Foods Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight leading-none uppercase">PT DIZA PANGAN BERSAMA</h3>
                <p className="text-xs text-forest-400 mt-0.5">Food Innovation for Better Life</p>
              </div>
            </div>

            <p className="text-xs text-forest-200 leading-relaxed max-w-md">
              Pabrik maklon pangan sterilisasi (retort) terpercaya & higienis. Spesialis pengolahan makanan siap saji (RTE), saus, bumbu pasta, dan filling bakery berstandar industri tanpa pengawet.
            </p>

            <div className="space-y-1.5 text-xs text-forest-300 pt-2">
              <div><strong>Tahun Berdiri:</strong> 8 Agustus 2026</div>
              <div><strong>Kapasitas Suplai:</strong> 20 Ton / Bulan</div>
              <div><strong>Website:</strong> www.dizafoods.com</div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider" style={{color:'#8dc63f'}}>Halaman Utama</h4>
            <ul className="space-y-2 text-xs text-forest-200">
              <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
              <li><Link href="/tentang-kami" className="hover:text-white transition-colors">Tentang Perusahaan</Link></li>
              <li><Link href="/layanan-maklon-retort" className="hover:text-white transition-colors">Layanan Maklon Retort</Link></li>
              <li><Link href="/katalog-produk" className="hover:text-white transition-colors">Katalog Produk &amp; Kemasan</Link></li>
              <li><Link href="/tim-manajemen" className="hover:text-white transition-colors">Profil Tim Ekspert</Link></li>
              <li><Link href="/legalitas-sertifikasi" className="hover:text-white transition-colors">Legalitas &amp; Sistem Mutu</Link></li>
              <li><Link href="/konsultasi" className="hover:text-white transition-colors">Kalkulator B2B</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ &amp; Izin Edar</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog &amp; Artikel Edukasi</Link></li>
              <li><Link href="/kontak" className="hover:text-white transition-colors">Kontak Perusahaan</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider" style={{color:'#8dc63f'}}>Alamat &amp; Kontak Resmi</h4>
            
            <div className="space-y-3 text-xs text-forest-200">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sage-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Alamat Pabrik:</div>
                  <p>Jl. Dr. Ratna No. 88, RT.002/RW.08, Jatikramat, Jatiasih, Kota Bekasi, Jawa Barat 17421</p>
                  <a
                    href="https://maps.google.com/?q=Jl.+Dr.+Ratna+No.+88,+Jatikramat,+Jatiasih,+Bekasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[11px] font-bold text-sage-300 hover:text-white mt-1"
                  >
                    <span>Buka Petunjuk Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">WhatsApp B2B:</span>{' '}
                  <a href="https://wa.me/6289540523332" className="hover:text-white transition-colors">+62 8954 0523 3323</a>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Website:</span>{' '}
                  <a href="https://www.dizafoods.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.dizafoods.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Jam Operasional:</span> Senin - Sabtu (08.00 - 17.00 WIB)
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-forest-400">
          <div>
            © 2026 <strong>PT Diza Pangan Bersama (Diza Foods)</strong>. All Rights Reserved. Food Innovation for Better Life.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-forest-900 border border-forest-700 hover:bg-forest-800 text-forest-200 transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

