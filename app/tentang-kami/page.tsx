import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import AboutFacility from '@/components/AboutFacility';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Perusahaan & Infrastruktur Pabrik | PT Diza Pangan Bersama',
  description: 'Profil resmi PT Diza Pangan Bersama (Diza Foods). Perusahaan maklon sterilisasi retort di Jatikramat Bekasi dengan fasilitas 350m², air RO & UV, serta legalitas NPWP 1000.0000.1039.9409.',
  keywords: ['tentang diza foods', 'pabrik makanan jatiasih bekasi', 'infrastruktur pabrik retort', 'PT Diza Pangan Bersama'],
};

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen bg-charcoal-50 flex flex-col">
      <Navbar />
      {/* Header Banner */}
      <section className="py-16 pt-24 bg-forest-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <span className="text-xs font-bold text-sage-300 uppercase tracking-widest bg-forest-800 px-3.5 py-1.5 rounded-full border border-forest-700">
            Profil Perusahaan
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Profil Lengkap Diza Foods</h1>
        </div>
      </section>

      {/* Tentang Kami & Makna Nama DIZA FOODS */}
      <section className="py-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-charcoal-900 mb-6">Tentang Kami</h2>
            <p className="text-base text-charcoal-700 leading-relaxed font-medium">
              Berdiri sejak 8 Agustus 2026 di Jatiasih, Bekasi, PT Diza Pangan Bersama (Diza Foods) hadir untuk menjawab kebutuhan industri kuliner akan layanan maklon makanan siap saji dengan teknologi sterilisasi modern (retort). Berkomitmen untuk menjadi mitra strategis bagi para pelaku usaha makanan dalam memperluas jangkauan produk mereka secara higienis dan tahan lama tanpa bahan pengawet.
            </p>
          </div>

          <div className="space-y-8 pt-6 border-t border-charcoal-100">
            <h3 className="text-2xl font-extrabold text-charcoal-900 text-center">Filosofi Nama <span className="text-forest-700">DIZA FOODS</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-forest-50 p-6 rounded-2xl border border-forest-100 shadow-sm text-center">
                <div className="text-4xl font-black text-forest-700 mb-3">DIZA</div>
                <p className="text-sm text-charcoal-700">Memiliki makna <strong>Bersinar, Gembira / Membawa Kebahagiaan</strong>.</p>
              </div>
              <div className="bg-forest-50 p-6 rounded-2xl border border-forest-100 shadow-sm text-center">
                <div className="text-4xl font-black text-forest-700 mb-3">FOODS</div>
                <p className="text-sm text-charcoal-700">Bermakna <strong>Makanan / Produk Olahan Makanan</strong>.</p>
              </div>
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 shadow-sm text-center md:col-span-3 lg:col-span-1">
              <div className="text-2xl font-black text-emerald-800 mb-3">DIZA FOODS</div>
              <p className="text-sm text-charcoal-700">Menyampaikan harapan bahwa apa yang kami sajikan bisa membawa harapan, kebahagiaan, keceriaan, sumber rezeki, kepuasan dan kenikmatan bagi siapapun. Dari mulai pegawai, vendor, hingga Konsumen.</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Filosofi D.I.Z.A */}
      <section className="py-16 bg-charcoal-50 border-t border-charcoal-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-charcoal-100">
            <div className="lg:w-2/5 bg-forest-800 text-white p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-6">Filosofi Perusahaan D.I.Z.A</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-sage-300">D : Dragon</h3>
                  <p className="text-sm text-forest-100 mt-2">Melambangkan sosok yang kuat, tekad pantang menyerah, tangguh, dan memiliki karisma tinggi.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sage-300">IZA</h3>
                  <p className="text-sm text-forest-100 mt-2">Bahasa Ibrani dan Arab yang berarti: Kemuliaan, kehormatan, kekuatan dan keselamatan.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 p-10 flex flex-col justify-center">
              <p className="text-base text-charcoal-700 leading-relaxed">
                Perusahaan kami membawa filosofi bahwa perusahaan ini dijalankan oleh orang-orang yang kuat, tangguh, bertekad, berdedikasi tinggi, dan pantang menyerah. 
              </p>
              <br/>
              <p className="text-base text-charcoal-700 leading-relaxed">
                Sehingga kami membawa harapan untuk menjadi perusahaan yang terus tumbuh, membawa kehormatan dan kemuliaan, serta dapat kuat bertahan dari berbagai tantangan dan rintangan di masa yang akan datang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi dan Misi */}
      <section className="py-16 bg-white border-t border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-sage-50 p-8 rounded-3xl border border-sage-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-forest-700 text-white rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-black text-forest-900">Visi Kami</h2>
              </div>
              <p className="text-base text-forest-900 leading-relaxed font-semibold">
                Menjadi Perusahaan Pangan Inovatif dan terpercaya dengan mengembangkan teknologi Sterilisasi (Retort) yang menghadirkan produk Halal, Berkualitas, Aman, Bernilai tambah, serta berkelanjutan untuk memenuhi kebutuhan Masyarakat, Horeca dan Industry Pangan di Indonesia.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-forest-50 p-8 rounded-3xl border border-forest-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-black text-forest-900">Misi Kami</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Menghasilkan produk pangan yang berkualitas, aman, halal, dan konsisten sesuai dengan standar keamanan pangan.",
                  "Mengembangkan inovasi produk dan teknologi pangan untuk memberikan solusi yang relevan dengan kebutuhan pasar.",
                  "Menjalankan proses produksi yang efektif, efisien, higienis, dan berorientasi pada peningkatan mutu berkelanjutan.",
                  "Membangun kemitraan yang kuat dan saling menguntungkan dengan pelanggan, pemasok, serta seluruh pemangku kepentingan.",
                  "Mengembangkan sumber daya manusia yang profesional, kompeten, kreatif, dan berintegritas.",
                  "Memberikan nilai tambah dan pertumbuhan yang berkelanjutan bagi pelanggan, mitra usaha, karyawan, masyarakat, dan perusahaan.",
                  "Mengembangkan bisnis pangan yang bertanggung jawab terhadap lingkungan dan keberlanjutan sumber daya.",
                  "Memberikan Layanan Maklon Berstandar tinggi yang Halal, hygienis dan aman dikonsumsi",
                  "Mendukung Pertumbuhan UMKM dan Brand Kuliner melalui fleksibilitas produksi"
                ].map((misi, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-forest-200 text-forest-800 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">{idx + 1}</span>
                    <span className="text-sm text-charcoal-800 leading-relaxed">{misi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Infrastruktur Pabrik (AboutFacility) */}
      <AboutFacility bgOverlay="bg1" />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
