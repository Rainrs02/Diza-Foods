import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import QualityLegality from '@/components/QualityLegality';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import { ShieldCheck, Award, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legalitas Perusahaan & Sertifikasi Mutu Pangan | Diza Foods',
  description: 'Informasi legalitas PT Diza Pangan Bersama (NPWP: 1000.0000.1039.9409) dan komitmen sertifikasi Halal MUI, LSHS, CCPOB, HACCP, PMR-BPOM, serta SOP Air Shower & Batch Traceability.',
  keywords: ['legalitas diza foods', 'npwp diza pangan bersama', 'sertifikasi halal retort', 'haccp ccpob bpom bekasi'],
};

export default function LegalitasSertifikasiPage() {
  return (
    <main className="min-h-screen bg-charcoal-50 flex flex-col">
      <Navbar />
      
      {/* Header Banner */}
      <section className="bg-forest-900 text-white py-16 bg-dark-grid relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-sage-300 uppercase tracking-widest bg-forest-800 px-3.5 py-1.5 rounded-full border border-forest-700">
            Compliance &amp; Quality Assurance System
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Legalitas &amp; Sistem Manajemen Mutu</h1>
          <p className="text-base text-forest-200 max-w-2xl mx-auto">
            Komitmen transparansi hukum perizinan usaha dan implementasi standar keamanan pangan tertinggi di pabrik kami.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <QualityLegality />

      {/* Additional Detailed Legality Content */}
      <section className="py-16 bg-white border-t border-charcoal-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-forest-50 p-8 rounded-2xl border border-forest-200 space-y-4">
            <h2 className="text-2xl font-extrabold text-forest-900">Pendampingan Izin Edar BPOM &amp; Halal untuk Brand Partner</h2>
            <p className="text-sm text-charcoal-700 leading-relaxed">
              Memiliki produk kuliner berkualitas tidaklah cukup tanpa izin edar resmi. Sebagai pabrik maklon B2B, PT Diza Pangan Bersama tidak hanya memproduksi massal produk Anda, tetapi juga mendampingi pengurusan pendaftaran **BPOM-MD** dan **Sertifikasi Halal MUI** secara transparan agar produk Anda siap didistribusikan ke jaringan retail modern.
            </p>
            <div className="pt-2">
              <Link
                href="/kontak"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-forest-700 hover:bg-forest-800 text-white text-xs font-bold shadow-md"
              >
                <span>Konsultasikan Izin Edar Brand Anda</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
