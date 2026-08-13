import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontak Resmi & Lokasi Pabrik | PT Diza Pangan Bersama',
  description: 'Alamat pabrik resmi PT Diza Pangan Bersama di Jl. Dr. Ratna No. 88 Jatikramat Jatiasih Bekasi. Hotline WhatsApp B2B 0812-3456-7890 dan konsultasi R&D.',
  keywords: ['kontak diza foods', 'alamat pabrik diza pangan bersama', 'pabrik maklon bekasi jatiasih', 'telepon maklon retort'],
};

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-charcoal-50 flex flex-col">
      <Navbar />
      
      {/* Header Banner */}
      <section className="bg-forest-900 text-white py-16 bg-dark-grid relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-sage-300 uppercase tracking-widest bg-forest-800 px-3.5 py-1.5 rounded-full border border-forest-700">
            Official B2B Contact &amp; Location
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Hubungi PT Diza Pangan Bersama</h1>
          <p className="text-base text-forest-200 max-w-2xl mx-auto">
            Kunjungi pabrik kami di Jatikramat Bekasi atau diskusikan kebutuhan produksi massal Anda langsung dengan tim konsultan maklon kami.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Official Contact Card */}
            <div className="lg:col-span-6 bg-forest-50 p-8 rounded-2xl border border-forest-200 space-y-6">
              <div>
                <span className="text-[10px] font-extrabold text-forest-800 bg-forest-100 px-2.5 py-1 rounded uppercase tracking-wider">
                  Corporate Information
                </span>
                <h2 className="text-2xl font-extrabold text-forest-950 mt-2">PT DIZA PANGAN BERSAMA</h2>
                <p className="text-xs text-charcoal-600">Diza Foods — Maklon Pangan Sterilisasi (Retort)</p>
              </div>

              <div className="space-y-4 text-xs text-charcoal-700">
                <div className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-forest-100 shadow-sm">
                  <MapPin className="w-5 h-5 text-forest-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal-900 text-sm block mb-0.5">Alamat Pabrik &amp; Kantor:</strong>
                    <p className="leading-relaxed">Jl. Dr. Ratna No. 88, RT.002/RW.08, Jatikramat, Jatiasih, Kota Bekasi, Jawa Barat 17421</p>
                    <a
                      href="https://maps.google.com/?q=Jl.+Dr.+Ratna+No.+88,+Jatikramat,+Jatiasih,+Bekasi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-forest-700 hover:underline mt-2"
                    >
                      <span>Petunjuk Arah Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-forest-100 shadow-sm">
                  <Phone className="w-5 h-5 text-forest-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal-900 text-sm block mb-0.5">Hotline WhatsApp B2B:</strong>
                    <p className="font-mono text-sm font-bold text-forest-800">0812-3456-7890</p>
                    <span className="text-[11px] text-charcoal-500">Respon cepat hari kerja Senin - Sabtu</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-forest-100 shadow-sm">
                  <Building2 className="w-5 h-5 text-forest-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal-900 text-sm block mb-0.5">Identitas Badan Hukum:</strong>
                    <p>Tahun Berdiri: <span className="font-semibold text-charcoal-900">2026</span></p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/6281234567890?text=Halo%20Tim%20Diza%20Foods,%20saya%20ingin%20jadwal%20kunjungan%20pabrik%20/%20konsultasi%20maklon."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat Konsultasi WhatsApp Instan</span>
              </a>
            </div>

            {/* Right: Embedded Google Maps Iframe */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-xl font-bold text-charcoal-900">Peta Lokasi Pabrik (Google Maps)</h2>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-charcoal-200 relative bg-charcoal-100">
                <iframe
                  title="Lokasi Pabrik PT Diza Pangan Bersama"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9!2d106.94!3d-6.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTYnNDguMCJTIDEwNsKwNTYnMjQuMCJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
