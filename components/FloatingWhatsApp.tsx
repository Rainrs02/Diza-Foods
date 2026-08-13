'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = "https://wa.me/6281234567890?text=Halo%20Tim%20Diza%20Foods,%20saya%20ingin%20konsultasi%20layanan%20maklon%20sterilisasi%20(retort).";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-3 max-w-xs bg-charcoal-900 text-white text-xs p-3.5 rounded-xl shadow-2xl border border-charcoal-700 relative"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-charcoal-700 hover:bg-charcoal-600 rounded-full p-1 text-white border border-charcoal-500"
              aria-label="Tutup Tooltip"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-bold text-sage-300">Tim Konsultan Maklon Online</span>
            </div>
            <p className="text-charcoal-200 text-[11px] leading-relaxed">
              Punya konsep produk kuliner? Tanya teknis sterilisasi retort &amp; estimasi biaya maklon via WhatsApp!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi via WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 animate-pulse-wa"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden group-hover:block bg-charcoal-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          Hubungi Tim Maklon B2B
        </span>
      </a>
    </div>
  );
}
