'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Share2,
  CheckCircle2,
  ShieldCheck,
  Building2,
  ShoppingBag,
  MessageCircle,
  ExternalLink,
  SlidersHorizontal,
  Send,
  X,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  Package,
  Factory,
  ChevronRight,
  User,
  Briefcase
} from 'lucide-react';
import {
  useLinksStore,
  ONLINE_SHOP_PRESETS,
  B2B_PRESETS,
  TARGET_DETAILS,
  WhatsAppTarget,
} from '@/store/useLinksStore';

export default function LinksView() {
  const {
    target,
    isModalOpen,
    senderName,
    companyName,
    selectedPresetId,
    customMessage,
    openModal,
    closeModal,
    setTarget,
    setSenderName,
    setCompanyName,
    setSelectedPresetId,
    setCustomMessage,
    getWhatsAppApiUrl,
  } = useLinksStore();

  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'wa' | 'sosmed'>('all');

  const handleShare = async () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://dizafoods.co.id/links';
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'PT Diza Pangan Bersama - Official Links',
          text: 'Pusat tautan resmi PT Diza Pangan Bersama (WhatsApp Admin, Website, Shopee, Instagram & TikTok)',
          url: shareUrl,
        });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const currentPresets = target === 'online-shop' ? ONLINE_SHOP_PRESETS : B2B_PRESETS;
  const currentDetails = TARGET_DETAILS[target];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1b14] via-[#0f281e] to-[#0a1812] text-white relative overflow-hidden flex flex-col justify-between selection:bg-emerald-500 selection:text-white">
      {/* Background Decorative Blur Spheres & Canva Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[550px] bg-gradient-to-b from-emerald-500/10 via-forest-600/10 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[600px] -right-20 w-80 h-80 bg-lime-600/10 rounded-full blur-3xl pointer-events-none z-0" />
      
      {/* Subtle Pattern Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0" 
        style={{ backgroundImage: "url('/assets/BG1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} 
      />

      {/* Main Container */}
      <main className="w-full max-w-lg mx-auto px-4 pt-10 pb-16 relative z-10 flex-grow flex flex-col items-center">
        
        {/* Top Floating Share Pill */}
        <div className="w-full flex justify-between items-center mb-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 text-xs font-semibold text-emerald-300 transition-all duration-200 hover:scale-105"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>dizafoods.co.id</span>
          </Link>

          <button
            onClick={handleShare}
            aria-label="Bagikan Tautan"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 text-xs font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Tersalin!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Bagikan</span>
              </>
            )}
          </button>
        </div>

        {/* Profile Card / Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-6 w-full"
        >
          {/* Logo Badge with Glowing Ring */}
          <div className="relative mb-4 group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-500 via-lime-400 to-forest-500 opacity-75 blur-sm group-hover:opacity-100 transition duration-500 animate-pulse-wa" />
            <div className="relative w-24 h-24 rounded-full bg-white p-2.5 shadow-2xl flex items-center justify-center border-2 border-emerald-400/50 overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="PT Diza Pangan Bersama"
                width={88}
                height={88}
                priority
                className="object-contain"
              />
            </div>
            {/* Verified Badge */}
            <div className="absolute bottom-0 right-0 bg-emerald-500 text-white p-1 rounded-full shadow-lg border-2 border-[#0f281e]" title="Verified Official Account">
              <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white" />
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-1">
            <div className="flex items-center justify-center space-x-2">
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                PT Diza Pangan Bersama
              </h1>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-emerald-400 flex items-center justify-center gap-1.5">
              <span>@dizafoods</span>
              <span>•</span>
              <span className="text-emerald-300/80">Food Innovation for Better Life</span>
            </p>
          </div>

          {/* Short Bio */}
          <p className="mt-3 text-xs text-charcoal-200 leading-relaxed max-w-sm px-2">
            Pabrik Maklon Pangan Sterilisasi (Retort) &amp; Produsen Kuliner Nusantara. Higienis, tahan lama di suhu ruang, dan bebas pengawet kimia.
          </p>

          {/* Industrial Trust Badges Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3.5">
            <span className="inline-flex items-center text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
              <ShieldCheck className="w-3 h-3 mr-1 text-emerald-400" />
              Retort Sterilization
            </span>
            <span className="inline-flex items-center text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
              <Factory className="w-3 h-3 mr-1 text-emerald-400" />
              Kapasitas 20 Ton/Bulan
            </span>
            <span className="inline-flex items-center text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
              <Building2 className="w-3 h-3 mr-1 text-emerald-400" />
              Bekasi, Jawa Barat
            </span>
          </div>
        </motion.div>

        {/* Quick Filter Tabs */}
        <div className="w-full grid grid-cols-3 gap-1 p-1 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 mb-5">
          <button
            onClick={() => setActiveTab('all')}
            className={`py-1.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'all'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-charcoal-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Semua Link
          </button>
          <button
            onClick={() => setActiveTab('wa')}
            className={`py-1.5 text-xs font-bold rounded-xl transition-all flex items-center justify-center space-x-1 ${
              activeTab === 'wa'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-charcoal-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <MessageCircle className="w-3 h-3" />
            <span>WhatsApp</span>
          </button>
          <button
            onClick={() => setActiveTab('sosmed')}
            className={`py-1.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'sosmed'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-charcoal-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Toko &amp; Sosmed
          </button>
        </div>

        {/* Action Link Cards Section */}
        <div className="w-full space-y-3.5">

          {/* ══════════════════════════════════════════════════════════ */}
          {/* SECTION 1: WHATSAPP DIRECT ACTION CARDS (POWERED BY ZUSTAND) */}
          {/* ══════════════════════════════════════════════════════════ */}
          {(activeTab === 'all' || activeTab === 'wa') && (
            <>
              {/* WA ADMIN 1: ONLINE SHOP (RETAIL) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-emerald-500/60 via-lime-500/30 to-emerald-600/60 shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/20 transition-all duration-300"
              >
                <div className="relative rounded-2xl bg-[#0f281e]/95 backdrop-blur-xl p-4 sm:p-5 flex flex-col justify-between">
                  {/* Top Bar: Icon, Name & Fast Response Badge */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-md flex-shrink-0 text-white group-hover:scale-105 transition-transform duration-200">
                        <ShoppingBag className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center space-x-1.5">
                          <h2 className="font-bold text-sm sm:text-base text-white group-hover:text-emerald-300 transition-colors">
                            WhatsApp Admin (Online Shop)
                          </h2>
                        </div>
                        <p className="text-[11px] text-emerald-400 font-mono font-bold">
                          +62 813-8528-4780
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold whitespace-nowrap">
                      Retail / End Consumer
                    </span>
                  </div>

                  <p className="text-left text-xs text-charcoal-200 mb-3.5 leading-relaxed">
                    Khusus pemesanan produk kuliner retail ready-to-eat, cek promo diskon, ketersediaan stok, dan info reseller retail.
                  </p>

                  {/* Dual Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Direct 1-Click WhatsApp */}
                    <a
                      href={getWhatsAppApiUrl('online-shop', ONLINE_SHOP_PRESETS[0].text)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs font-bold shadow-md transition-all duration-200"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Chat Langsung</span>
                    </a>

                    {/* Open Zustand Interactive Custom Message Drawer */}
                    <button
                      onClick={() => openModal('online-shop')}
                      className="inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition-all duration-200"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>Kustom Pesan</span>
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* WA ADMIN 2: B2B & MAKLON RETORT */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-forest-400/50 via-emerald-500/40 to-lime-500/50 shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/20 transition-all duration-300"
              >
                <div className="relative rounded-2xl bg-[#0f281e]/95 backdrop-blur-xl p-4 sm:p-5 flex flex-col justify-between">
                  {/* Top Bar: Icon, Name & Fast Response Badge */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-forest-600 to-forest-800 flex items-center justify-center shadow-md flex-shrink-0 text-white group-hover:scale-105 transition-transform duration-200 border border-emerald-400/30">
                        <Factory className="w-6 h-6 text-emerald-300" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center space-x-1.5">
                          <h2 className="font-bold text-sm sm:text-base text-white group-hover:text-emerald-300 transition-colors">
                            WhatsApp Konsultan B2B &amp; Maklon
                          </h2>
                        </div>
                        <p className="text-[11px] text-emerald-400 font-mono font-bold">
                          +62 8954-0523-3323
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-forest-500/30 text-emerald-300 border border-forest-400/40 text-[10px] font-bold whitespace-nowrap">
                      OEM / ODM Maklon
                    </span>
                  </div>

                  <p className="text-left text-xs text-charcoal-200 mb-3.5 leading-relaxed">
                    Layanan manufaktur pangan komersial: sterilisasi retort suhu ruang, R&amp;D formulasi kustom, minimum order (MOQ), dan audit pabrik.
                  </p>

                  {/* Dual Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Direct 1-Click WhatsApp */}
                    <a
                      href={getWhatsAppApiUrl('b2b', B2B_PRESETS[0].text)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-forest-700 hover:bg-forest-600 active:scale-95 text-white text-xs font-bold shadow-md transition-all duration-200 border border-forest-500/50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Chat Konsultan</span>
                    </a>

                    {/* Open Zustand Interactive Custom Message Drawer */}
                    <button
                      onClick={() => openModal('b2b')}
                      className="inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition-all duration-200"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>Kustom Pesan</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}

          {/* ══════════════════════════════════════════════════════════ */}
          {/* SECTION 2: OFFICIAL WEBSITE & CATALOG */}
          {/* ══════════════════════════════════════════════════════════ */}
          {(activeTab === 'all') && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 p-4 transition-all duration-200 text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-forest-800/80 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Website Utama Diza Foods</h3>
                    <p className="text-[11px] text-charcoal-300">Profil pabrik, sertifikasi, SOP &amp; simulasi</p>
                  </div>
                </div>
                <Link
                  href="/"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Kunjungi Website Utama"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Sub-links quick pills */}
              <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-white/10 mt-3">
                <Link
                  href="/katalog-produk"
                  className="px-2 py-1.5 rounded-lg bg-black/20 hover:bg-black/40 border border-white/5 text-[10px] text-center font-semibold text-emerald-300 transition-colors flex items-center justify-center space-x-1"
                >
                  <Package className="w-3 h-3" />
                  <span>Katalog</span>
                </Link>
                <Link
                  href="/layanan-maklon-retort"
                  className="px-2 py-1.5 rounded-lg bg-black/20 hover:bg-black/40 border border-white/5 text-[10px] text-center font-semibold text-emerald-300 transition-colors flex items-center justify-center space-x-1"
                >
                  <Factory className="w-3 h-3" />
                  <span>Maklon</span>
                </Link>
                <Link
                  href="/konsultasi"
                  className="px-2 py-1.5 rounded-lg bg-black/20 hover:bg-black/40 border border-white/5 text-[10px] text-center font-semibold text-emerald-300 transition-colors flex items-center justify-center space-x-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Kalkulator</span>
                </Link>
              </div>
            </motion.div>
          )}

          {/* ══════════════════════════════════════════════════════════ */}
          {/* SECTION 3: SOCIAL MEDIA & E-COMMERCE */}
          {/* ══════════════════════════════════════════════════════════ */}
          {(activeTab === 'all' || activeTab === 'sosmed') && (
            <>
              {/* SHOPEE OFFICIAL STORE */}
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                href="https://shopee.co.id/dizafoods"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/40 transition-all duration-200"
              >
                <div className="flex items-center space-x-3.5">
                  {/* Shopee Authentic Brand Icon */}
                  <div className="w-11 h-11 rounded-xl bg-[#EE4D2D] flex items-center justify-center shadow-lg shadow-orange-950/40 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M19.9 6.2c-.4-.5-1-.8-1.7-.8h-2.1c-.2-1.9-1.8-3.4-3.8-3.4s-3.6 1.5-3.8 3.4H6.4c-.7 0-1.3.3-1.7.8-.4.5-.6 1.1-.4 1.8l1.7 11.2c.2 1.3 1.3 2.3 2.6 2.3h10.4c1.3 0 2.4-1 2.6-2.3l1.7-11.2c.2-.7 0-1.3-.4-1.8zm-7.6-2.2c1 0 1.9.7 2 1.7H10.3c.1-1 1-1.7 2-1.7zm3.1 11.5c-.3.6-.9 1-1.6 1.2v.7c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-.7c-1.3-.2-2-1.1-2-2.1 0-.3.2-.5.5-.5s.5.2.5.5c0 .6.4 1.1 1.2 1.2v-2.8c-.8-.2-1.8-.7-1.8-1.8 0-1 .7-1.7 1.8-1.9v-.7c0-.3.2-.5.5-.5s.5.2.5.5v.7c1.1.2 1.8 1 1.8 1.9 0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-.5-.4-.9-1-.9v2.7c.9.3 1.8.7 1.8 1.8 0 .4-.1.7-.3 1z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center space-x-1.5">
                      <h3 className="font-bold text-sm text-white group-hover:text-orange-400 transition-colors">
                        Shopee Official Store
                      </h3>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-orange-500/20 text-orange-300 font-bold border border-orange-500/30">
                        Official
                      </span>
                    </div>
                    <p className="text-[11px] text-charcoal-300">
                      shopee.co.id/dizafoods • Belanja produk retail &amp; promo gratis ongkir
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-charcoal-400 group-hover:text-orange-400 transition-colors flex-shrink-0" />
              </motion.a>

              {/* INSTAGRAM */}
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                href="https://www.instagram.com/diza.foods/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/40 transition-all duration-200"
              >
                <div className="flex items-center space-x-3.5">
                  {/* Instagram Authentic Gradient Icon */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-lg shadow-pink-950/40 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-white group-hover:text-pink-400 transition-colors">
                      Instagram @diza.foods
                    </h3>
                    <p className="text-[11px] text-charcoal-300">
                      Inovasi produk pangan, edukasi retort &amp; update pabrik
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-charcoal-400 group-hover:text-pink-400 transition-colors flex-shrink-0" />
              </motion.a>

              {/* TIKTOK */}
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                href="https://www.tiktok.com/@dizafoods"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all duration-200"
              >
                <div className="flex items-center space-x-3.5">
                  {/* TikTok Icon */}
                  <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center border border-white/20 shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.3 6.3 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.45c1.47 1.05 3.26 1.67 5.2 1.69v-3.45a4.83 4.83 0 0 1-1.43 0z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                      TikTok @dizafoods
                    </h3>
                    <p className="text-[11px] text-charcoal-300">
                      Video proses produksi mesin autoklaf &amp; resep siap saji
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-charcoal-400 group-hover:text-cyan-300 transition-colors flex-shrink-0" />
              </motion.a>
            </>
          )}
        </div>

        {/* Industrial Quality & Legality Certifications Badges */}
        <div className="mt-8 pt-6 border-t border-white/10 w-full text-center">
          <p className="text-[10px] uppercase tracking-wider font-bold text-charcoal-400 mb-3">
            Standar Mutu &amp; Kepatuhan Industri Pangan
          </p>
          <div className="grid grid-cols-4 gap-2 px-2 max-w-xs mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/10 flex flex-col items-center justify-center">
              <span className="text-[11px] font-black text-emerald-400">BPOM</span>
              <span className="text-[8px] text-charcoal-300">Standar MD</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/10 flex flex-col items-center justify-center">
              <span className="text-[11px] font-black text-emerald-400">HALAL</span>
              <span className="text-[8px] text-charcoal-300">MUI Resmi</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/10 flex flex-col items-center justify-center">
              <span className="text-[11px] font-black text-emerald-400">HACCP</span>
              <span className="text-[8px] text-charcoal-300">Food Safety</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/10 flex flex-col items-center justify-center">
              <span className="text-[11px] font-black text-emerald-400">ISO</span>
              <span className="text-[8px] text-charcoal-300">22000 Certified</span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer info */}
      <footer className="w-full text-center py-6 border-t border-white/5 relative z-10 bg-black/30 backdrop-blur-sm text-charcoal-400 text-xs">
        <p className="font-semibold text-charcoal-300">
          PT Diza Pangan Bersama
        </p>
        <p className="text-[11px] text-charcoal-400 mt-0.5">
          Jl. Dr. Ratna No. 88, Jatikramat, Jatiasih, Kota Bekasi, Jawa Barat
        </p>
        <p className="text-[10px] text-charcoal-500 mt-2">
          &copy; {new Date().getFullYear()} Diza Foods. All rights reserved.
        </p>
      </footer>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ZUSTAND INTERACTIVE CUSTOM MESSAGE MODAL / BOTTOM SHEET */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#0e241b] border border-emerald-500/30 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-lg">
                    {currentDetails.avatarText}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm sm:text-base text-white">
                      Kustom Pesan WhatsApp
                    </h3>
                    <p className="text-xs text-emerald-400 font-mono">
                      {currentDetails.phoneFormatted} • {currentDetails.name}
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  aria-label="Tutup Dialog"
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-charcoal-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Form Body */}
              <div className="p-4 sm:p-5 space-y-4 overflow-y-auto text-left flex-grow">
                
                {/* Admin Switcher Tabs */}
                <div>
                  <label className="text-xs font-bold text-charcoal-300 block mb-1.5">
                    Pilih Tujuan WhatsApp Admin:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTarget('online-shop')}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                        target === 'online-shop'
                          ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 shadow-sm'
                          : 'bg-white/5 border-white/10 text-charcoal-400 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-1.5 mb-0.5">
                        <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Online Shop (Retail)</span>
                      </div>
                      <span className="text-[10px] text-charcoal-300 block font-normal">
                        Pesanan ecer, stok &amp; promo
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTarget('b2b')}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                        target === 'b2b'
                          ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 shadow-sm'
                          : 'bg-white/5 border-white/10 text-charcoal-400 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-1.5 mb-0.5">
                        <Factory className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Konsultan B2B</span>
                      </div>
                      <span className="text-[10px] text-charcoal-300 block font-normal">
                        Maklon retort &amp; R&amp;D formula
                      </span>
                    </button>
                  </div>
                </div>

                {/* Identity Inputs (Name & Company) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-charcoal-300 flex items-center space-x-1 mb-1">
                      <User className="w-3 h-3 text-emerald-400" />
                      <span>Nama Anda (Opsional):</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Budi Pratama"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400 focus:outline-none text-xs text-white placeholder-charcoal-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-charcoal-300 flex items-center space-x-1 mb-1">
                      <Briefcase className="w-3 h-3 text-emerald-400" />
                      <span>Brand / Usaha (Opsional):</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Sambal Juara"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400 focus:outline-none text-xs text-white placeholder-charcoal-500"
                    />
                  </div>
                </div>

                {/* Preset Message Chips */}
                <div>
                  <label className="text-xs font-bold text-charcoal-300 block mb-1.5">
                    Pilih Topik Percakapan:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {currentPresets.map((preset) => {
                      const isSelected = selectedPresetId === preset.id;
                      return (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => setSelectedPresetId(preset.id)}
                          className={`px-3 py-2 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                              : 'bg-white/5 border-white/10 text-charcoal-300 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <span className="truncate pr-1">{preset.title}</span>
                          {preset.badge && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-400/20 text-emerald-300 font-bold">
                              {preset.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Message Textarea */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-charcoal-300">
                      Isi Pesan WhatsApp:
                    </label>
                    <span className="text-[10px] text-charcoal-400">
                      Bisa diedit manual sesuai kebutuhan
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400 focus:outline-none text-xs text-white leading-relaxed resize-none"
                    placeholder="Tuliskan pesan pertanyaan Anda di sini..."
                  />
                </div>

                {/* Live Message Preview Card (WhatsApp Bubble Style) */}
                <div className="rounded-xl p-3 bg-[#075e54]/30 border border-emerald-600/30 text-left">
                  <div className="flex items-center space-x-1.5 text-[10px] font-bold text-emerald-300 mb-1">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>Pratinjau Pesan yang Akan Terkirim:</span>
                  </div>
                  <div className="bg-[#128c7e]/20 p-2.5 rounded-lg border border-emerald-500/20 text-[11px] text-charcoal-100 font-sans leading-relaxed whitespace-pre-wrap">
                    {senderName.trim() && companyName.trim() ? (
                      <p className="font-semibold text-emerald-300 mb-1">
                        Halo Admin, perkenalkan saya *{senderName.trim()}* dari *{companyName.trim()}*.
                      </p>
                    ) : senderName.trim() ? (
                      <p className="font-semibold text-emerald-300 mb-1">
                        Halo Admin, perkenalkan saya *{senderName.trim()}*.
                      </p>
                    ) : companyName.trim() ? (
                      <p className="font-semibold text-emerald-300 mb-1">
                        Halo Admin, saya mewakili *{companyName.trim()}*.
                      </p>
                    ) : null}
                    <p>{customMessage}</p>
                  </div>
                </div>

              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:p-5 border-t border-white/10 bg-black/30 flex items-center space-x-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-charcoal-200 transition-colors"
                >
                  Batal
                </button>
                <a
                  href={getWhatsAppApiUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => closeModal()}
                  className="flex-grow inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-950/60 transition-all active:scale-98"
                >
                  <Send className="w-4 h-4 fill-current" />
                  <span>Kirim via WhatsApp (API)</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
