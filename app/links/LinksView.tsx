'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  MoreVertical,
  Send,
  X,
  Check,
  Share2,
  Sparkles,
  User,
  Briefcase,
  ShoppingBag,
  Factory
} from 'lucide-react';
import {
  useLinksStore,
  ONLINE_SHOP_PRESETS,
  B2B_PRESETS,
  TARGET_DETAILS,
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

  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const handleCopyLink = async (url: string, label: string) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopiedNotification(`Tautan ${label} berhasil disalin!`);
        setTimeout(() => setCopiedNotification(null), 2500);
      }
    } catch {
      // fallback
    }
    setActiveMenuId(null);
  };

  const handleSharePage = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : 'https://dizafoods.co.id/links';
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'PT Diza Pangan Bersama (Diza Foods)',
          text: 'Pusat tautan resmi PT Diza Pangan Bersama: Website, WhatsApp Admin, TikTok, Shopee & Instagram.',
          url,
        });
        return;
      } catch {
        // user cancelled or fallback
      }
    }
    handleCopyLink(url, 'Halaman');
  };

  const currentPresets = target === 'online-shop' ? ONLINE_SHOP_PRESETS : B2B_PRESETS;
  const currentDetails = TARGET_DETAILS[target];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1b14] via-[#0f281e] to-[#0a1812] text-white flex flex-col justify-between items-center py-10 px-4 sm:px-6 relative overflow-hidden selection:bg-emerald-500 selection:text-white font-sans">
      
      {/* Background Decorative Blur Spheres & Overlay Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[550px] bg-gradient-to-b from-emerald-500/15 via-forest-600/10 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="absolute top-48 -left-20 w-72 h-72 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[650px] -right-20 w-80 h-80 bg-lime-600/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Subtle Texture Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none z-0"
        style={{ backgroundImage: "url('/assets/BG1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {copiedNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 z-50 px-4 py-2.5 rounded-full bg-white text-charcoal-900 text-xs font-semibold shadow-2xl flex items-center space-x-2 border border-charcoal-200"
          >
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>{copiedNotification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Column (Mobile-first Linktree container) */}
      <main className="w-full max-w-[430px] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Top Share Button (Discreet Linktree style) */}
        <div className="w-full flex justify-end mb-2">
          <button
            onClick={handleSharePage}
            aria-label="Bagikan Tautan Profil"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md shadow-sm flex items-center justify-center text-white transition-all duration-150 active:scale-95"
            title="Bagikan Tautan Profil"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Profile Avatar */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="relative mb-4 group"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white p-3 shadow-xl border-2 border-emerald-400/40 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="Diza Foods"
              width={100}
              height={100}
              priority
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Handle / Profile Name */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="text-xl sm:text-2xl font-black text-white tracking-tight"
        >
          @dizafoods
        </motion.h1>

        {/* Bio / Description */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.3 }}
          className="mt-2 text-xs sm:text-sm text-charcoal-200 font-medium max-w-xs leading-relaxed space-y-0.5"
        >
          <p className="font-bold text-emerald-400">Food Innovation for Better Life</p>
          <p className="text-[12px] text-charcoal-300">
            Pabrik Maklon Pangan Sterilisasi (Retort) &amp; Produsen Kuliner Nusantara
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* LINKS STACK (CLEAN LINKTREE PILLS DENGAN AKSEN LIGHT)              */}
        {/* URUTAN:                                                            */}
        {/* 1. Website Utama                                                   */}
        {/* 2. WA Admin (Online Shop)                                          */}
        {/* 3. WA Konsultan B2B (Maklon)                                       */}
        {/* 4. TikTok                                                          */}
        {/* 5. Shopee                                                          */}
        {/* 6. Instagram (paling bawah)                                        */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <div className="w-full space-y-3.5 mt-7">

          {/* 1. KUNJUNGI WEBSITE UTAMA */}
          <div className="relative group w-full">
            <Link
              href="/"
              className="w-full flex items-center justify-between py-4 px-4 sm:px-5 rounded-2xl bg-white hover:bg-emerald-50 text-charcoal-900 shadow-xl shadow-black/25 hover:shadow-2xl hover:scale-[1.015] active:scale-[0.99] transition-all duration-200 border border-white/80"
            >
              <div className="w-9 h-9 rounded-xl bg-forest-800 flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                <Globe className="w-5 h-5 text-emerald-300" />
              </div>
              <span className="font-bold text-sm sm:text-[15px] text-center flex-grow px-2 text-charcoal-900">
                Kunjungi Website Resmi
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveMenuId(activeMenuId === 'web' ? null : 'web');
                }}
                className="p-1.5 rounded-lg text-charcoal-400 hover:text-charcoal-800 hover:bg-charcoal-100 transition-colors"
                aria-label="Pilihan tautan website"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </Link>

            {/* Sub-menu popover */}
            {activeMenuId === 'web' && (
              <div className="absolute right-3 top-16 z-30 w-48 bg-white rounded-xl shadow-2xl border border-charcoal-200 py-1.5 text-xs text-charcoal-700 text-left animate-in fade-in zoom-in-95 duration-150">
                <Link
                  href="/katalog-produk"
                  className="block px-3.5 py-2 hover:bg-emerald-50 hover:text-emerald-800 font-medium"
                  onClick={() => setActiveMenuId(null)}
                >
                  Buka Katalog Produk
                </Link>
                <Link
                  href="/layanan-maklon-retort"
                  className="block px-3.5 py-2 hover:bg-emerald-50 hover:text-emerald-800 font-medium"
                  onClick={() => setActiveMenuId(null)}
                >
                  Layanan Maklon Retort
                </Link>
                <button
                  type="button"
                  onClick={() => handleCopyLink('https://dizafoods.co.id', 'Website')}
                  className="w-full text-left px-3.5 py-2 hover:bg-emerald-50 hover:text-emerald-800 font-medium border-t border-charcoal-100"
                >
                  Salin Tautan Website
                </button>
              </div>
            )}
          </div>

          {/* 2. WHATSAPP ADMIN (ONLINE SHOP) */}
          <div className="relative group w-full">
            <a
              href={getWhatsAppApiUrl('online-shop', ONLINE_SHOP_PRESETS[0].text)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between py-4 px-4 sm:px-5 rounded-2xl bg-white hover:bg-emerald-50 text-charcoal-900 shadow-xl shadow-black/25 hover:shadow-2xl hover:scale-[1.015] active:scale-[0.99] transition-all duration-200 border border-white/80"
            >
              {/* WhatsApp Icon */}
              <div className="w-9 h-9 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.78 14.24c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.14.1-3.32-.8-2.78-1.15-4.57-3.98-4.71-4.17-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34.25-.28.56-.35.75-.35.19 0 .37 0 .53.01.17.01.4.06.62.53.23.49.78 1.9.85 2.04.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.3.35-.43.47-.14.13-.29.28-.13.56.16.28.73 1.2 1.56 1.94 1.07.96 1.98 1.26 2.26 1.4.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.64-.14.26.09 1.66.78 1.94.92.29.14.48.21.55.33.07.12.07.7-.17 1.38z" />
                </svg>
              </div>

              {/* Title & subtitle */}
              <div className="flex flex-col items-center justify-center flex-grow px-2">
                <span className="font-bold text-sm sm:text-[15px] text-charcoal-900">
                  WhatsApp Admin (Online Shop)
                </span>
                <span className="text-[10px] text-emerald-700 font-semibold">
                  Pesanan Retail, Stok &amp; Promo
                </span>
              </div>

              {/* Three-dots to open Zustand Custom Message */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openModal('online-shop');
                }}
                className="p-1.5 rounded-lg text-charcoal-400 hover:text-charcoal-800 hover:bg-charcoal-100 transition-colors"
                title="Kustomisasi Pesan WhatsApp"
                aria-label="Kustomisasi pesan WhatsApp Online Shop"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </a>
          </div>

          {/* 3. WHATSAPP KONSULTAN B2B (MAKLON RETORT) */}
          <div className="relative group w-full">
            <a
              href={getWhatsAppApiUrl('b2b', B2B_PRESETS[0].text)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between py-4 px-4 sm:px-5 rounded-2xl bg-white hover:bg-emerald-50 text-charcoal-900 shadow-xl shadow-black/25 hover:shadow-2xl hover:scale-[1.015] active:scale-[0.99] transition-all duration-200 border border-white/80"
            >
              {/* WhatsApp Icon */}
              <div className="w-9 h-9 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.78 14.24c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.14.1-3.32-.8-2.78-1.15-4.57-3.98-4.71-4.17-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34.25-.28.56-.35.75-.35.19 0 .37 0 .53.01.17.01.4.06.62.53.23.49.78 1.9.85 2.04.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.3.35-.43.47-.14.13-.29.28-.13.56.16.28.73 1.2 1.56 1.94 1.07.96 1.98 1.26 2.26 1.4.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.64-.14.26.09 1.66.78 1.94.92.29.14.48.21.55.33.07.12.07.7-.17 1.38z" />
                </svg>
              </div>

              {/* Title & subtitle */}
              <div className="flex flex-col items-center justify-center flex-grow px-2">
                <span className="font-bold text-sm sm:text-[15px] text-charcoal-900">
                  WhatsApp Konsultan B2B (Maklon)
                </span>
                <span className="text-[10px] text-emerald-700 font-semibold">
                  Sterilisasi Retort, R&amp;D Formula &amp; MOQ
                </span>
              </div>

              {/* Three-dots to open Zustand Custom Message */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openModal('b2b');
                }}
                className="p-1.5 rounded-lg text-charcoal-400 hover:text-charcoal-800 hover:bg-charcoal-100 transition-colors"
                title="Kustomisasi Pesan WhatsApp"
                aria-label="Kustomisasi pesan WhatsApp Konsultan B2B"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </a>
          </div>

          {/* 4. TIKTOK (URUTAN KEEMPAT) */}
          <div className="relative group w-full">
            <a
              href="https://www.tiktok.com/@dizafoods"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between py-4 px-4 sm:px-5 rounded-2xl bg-white hover:bg-emerald-50 text-charcoal-900 shadow-xl shadow-black/25 hover:shadow-2xl hover:scale-[1.015] active:scale-[0.99] transition-all duration-200 border border-white/80"
            >
              {/* TikTok Icon */}
              <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.3 6.3 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.45c1.47 1.05 3.26 1.67 5.2 1.69v-3.45a4.83 4.83 0 0 1-1.43 0z"/>
                </svg>
              </div>

              <span className="font-bold text-sm sm:text-[15px] text-center flex-grow px-2 text-charcoal-900">
                TikTok @dizafoods
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCopyLink('https://www.tiktok.com/@dizafoods', 'TikTok');
                }}
                className="p-1.5 rounded-lg text-charcoal-400 hover:text-charcoal-800 hover:bg-charcoal-100 transition-colors"
                title="Salin tautan TikTok"
                aria-label="Salin tautan TikTok"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </a>
          </div>

          {/* 5. SHOPEE (URUTAN KELIMA) */}
          <div className="relative group w-full">
            <a
              href="https://shopee.co.id/dizafoods"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between py-4 px-4 sm:px-5 rounded-2xl bg-white hover:bg-emerald-50 text-charcoal-900 shadow-xl shadow-black/25 hover:shadow-2xl hover:scale-[1.015] active:scale-[0.99] transition-all duration-200 border border-white/80"
            >
              {/* Shopee Brand Icon */}
              <div className="w-9 h-9 rounded-xl bg-[#EE4D2D] flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.9 6.2c-.4-.5-1-.8-1.7-.8h-2.1c-.2-1.9-1.8-3.4-3.8-3.4s-3.6 1.5-3.8 3.4H6.4c-.7 0-1.3.3-1.7.8-.4.5-.6 1.1-.4 1.8l1.7 11.2c.2 1.3 1.3 2.3 2.6 2.3h10.4c1.3 0 2.4-1 2.6-2.3l1.7-11.2c.2-.7 0-1.3-.4-1.8zm-7.6-2.2c1 0 1.9.7 2 1.7H10.3c.1-1 1-1.7 2-1.7zm3.1 11.5c-.3.6-.9 1-1.6 1.2v.7c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-.7c-1.3-.2-2-1.1-2-2.1 0-.3.2-.5.5-.5s.5.2.5.5c0 .6.4 1.1 1.2 1.2v-2.8c-.8-.2-1.8-.7-1.8-1.8 0-1 .7-1.7 1.8-1.9v-.7c0-.3.2-.5.5-.5s.5.2.5.5v.7c1.1.2 1.8 1 1.8 1.9 0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-.5-.4-.9-1-.9v2.7c.9.3 1.8.7 1.8 1.8 0 .4-.1.7-.3 1z" />
                </svg>
              </div>

              <span className="font-bold text-sm sm:text-[15px] text-center flex-grow px-2 text-charcoal-900">
                Shopee Official Store
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCopyLink('https://shopee.co.id/dizafoods', 'Shopee');
                }}
                className="p-1.5 rounded-lg text-charcoal-400 hover:text-charcoal-800 hover:bg-charcoal-100 transition-colors"
                title="Salin tautan Shopee"
                aria-label="Salin tautan Shopee"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </a>
          </div>

          {/* 6. INSTAGRAM (PALING BAWAH) */}
          <div className="relative group w-full">
            <a
              href="https://www.instagram.com/diza.foods/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between py-4 px-4 sm:px-5 rounded-2xl bg-white hover:bg-emerald-50 text-charcoal-900 shadow-xl shadow-black/25 hover:shadow-2xl hover:scale-[1.015] active:scale-[0.99] transition-all duration-200 border border-white/80"
            >
              {/* Instagram Gradient Icon */}
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>

              <span className="font-bold text-sm sm:text-[15px] text-center flex-grow px-2 text-charcoal-900">
                Instagram @diza.foods
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCopyLink('https://www.instagram.com/diza.foods/', 'Instagram');
                }}
                className="p-1.5 rounded-lg text-charcoal-400 hover:text-charcoal-800 hover:bg-charcoal-100 transition-colors"
                title="Salin tautan Instagram"
                aria-label="Salin tautan Instagram"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </a>
          </div>

        </div>

      </main>

      {/* Bottom Minimalist Footer */}
      <footer className="w-full flex flex-col items-center justify-center text-center pt-10 pb-4 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center space-x-1 font-black text-white text-base tracking-tight hover:opacity-80 transition-opacity"
        >
          <span>Diza Foods</span>
          <span className="text-emerald-400 text-lg">✦</span>
        </Link>
        <p className="text-[11px] text-charcoal-400 mt-0.5">
          PT Diza Pangan Bersama
        </p>
      </footer>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ZUSTAND INTERACTIVE CUSTOM MESSAGE MODAL */}
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
              className="absolute inset-0 bg-black/75 backdrop-blur-xs"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-[#0f281e] border border-emerald-500/30 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-left text-white"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center text-lg font-bold">
                    {currentDetails.avatarText}
                  </div>
                  <div>
                    <h2 className="font-bold text-sm sm:text-base text-white">
                      Kustom Pesan WhatsApp
                    </h2>
                    <p className="text-xs text-emerald-400 font-mono font-semibold">
                      {currentDetails.phoneFormatted}
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  aria-label="Tutup dialog"
                  className="p-1.5 rounded-full hover:bg-white/10 text-charcoal-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Form Body */}
              <div className="p-4 sm:p-5 space-y-4 overflow-y-auto flex-grow">
                
                {/* Admin Switcher Tabs */}
                <div>
                  <label className="text-xs font-bold text-charcoal-300 block mb-1.5">
                    Tujuan Admin:
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
                        Order retail, stok &amp; promo
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

                {/* Identity Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-charcoal-300 flex items-center space-x-1 mb-1">
                      <User className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Nama Anda (Opsional):</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Budi"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400 focus:outline-none text-xs text-white placeholder-charcoal-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-charcoal-300 flex items-center space-x-1 mb-1">
                      <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Brand / Usaha (Opsional):</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Sambal Lezat"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400 focus:outline-none text-xs text-white placeholder-charcoal-500"
                    />
                  </div>
                </div>

                {/* Preset Chips */}
                <div>
                  <label className="text-xs font-bold text-charcoal-300 block mb-1.5">
                    Pilih Topik Pesan:
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

                {/* Custom Message Area */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-charcoal-300">
                      Teks Pesan WhatsApp:
                    </label>
                    <span className="text-[10px] text-charcoal-400">
                      Dapat diedit bebas
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400 focus:outline-none text-xs text-white leading-relaxed resize-none placeholder-charcoal-500"
                    placeholder="Tuliskan pesan Anda..."
                  />
                </div>

                {/* Live Preview WhatsApp Bubble */}
                <div className="rounded-xl p-3 bg-[#075e54]/30 border border-emerald-600/30 text-left">
                  <div className="flex items-center space-x-1.5 text-[10px] font-bold text-emerald-300 mb-1">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>Pratinjau Pesan yang Akan Dikirim:</span>
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
                  className="flex-grow inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-98"
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
