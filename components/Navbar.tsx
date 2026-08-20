'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Tim Kami', href: '/tim-manajemen' },
    { name: 'Katalog', href: '/katalog-produk' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <>
      {/* Top Banner Announcement */}
      <div className="bg-forest-900 text-forest-100 text-xs py-2 px-4 border-b border-forest-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-sage-500 text-forest-950 uppercase tracking-wider">
              B2B Retort Factory
            </span>
            <span className="hidden sm:inline text-forest-200">
              Pabrik Maklon Pangan Sterilisasi Kedap Udara — Kapasitas 20 Ton/Bulan
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/62895405233323"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-sage-300 transition-colors font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sage-400" />
              <span>Hotline B2B: 0895-4052-33323</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-charcoal-100'
            : 'bg-white py-4 border-b border-charcoal-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Diza Foods Logo"
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                  priority
                />
              </div>

            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-forest-100 text-forest-800 font-bold'
                        : 'text-charcoal-700 hover:text-forest-700 hover:bg-forest-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button — Compro lime-green pill */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/konsultasi"
                className="btn-compro-pill text-sm px-5 py-2.5 shadow-sm"
              >
                <span>Konsultasi Sekarang</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-lg text-charcoal-700 hover:text-forest-700 hover:bg-forest-50 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed top-[96px] left-0 w-full bg-white border-b border-charcoal-200 shadow-2xl z-30 overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4 max-w-md mx-auto">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-forest-100 text-forest-800 font-bold'
                          : 'text-charcoal-800 hover:bg-forest-50 hover:text-forest-700'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-charcoal-400" />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-charcoal-200 space-y-3">
                <Link
                  href="/konsultasi"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-compro-pill w-full justify-center text-sm py-3"
                >
                  Konsultasi Sekarang
                </Link>
                <a
                  href="https://wa.me/62895405233323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-5 py-3 rounded-lg text-sm font-bold text-forest-700 bg-forest-50 border border-forest-200 hover:bg-forest-100"
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  Hubungi WhatsApp (Fast Response)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

