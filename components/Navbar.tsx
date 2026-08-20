'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PhoneCall, ChevronRight, Home, Package, Info, MessageCircle, Users, HelpCircle, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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

          </div>
        </div>
      </header>

      {/* Floating Bottom Nav (Mobile Only) */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-charcoal-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 px-1 py-2 pb-safe">
        <div className="flex overflow-x-auto hide-scrollbar gap-1 px-1">
          <Link href="/" className={`flex-shrink-0 w-[60px] flex flex-col items-center justify-center p-1.5 rounded-xl transition-colors ${pathname === '/' ? 'text-forest-700 font-bold bg-forest-50' : 'text-charcoal-500 hover:text-forest-600'}`}>
            <Home className="w-5 h-5 mb-1" />
            <span className="text-[9px]">Beranda</span>
          </Link>
          
          <Link href="/katalog-produk" className={`flex-shrink-0 w-[60px] flex flex-col items-center justify-center p-1.5 rounded-xl transition-colors ${pathname === '/katalog-produk' ? 'text-forest-700 font-bold bg-forest-50' : 'text-charcoal-500 hover:text-forest-600'}`}>
            <Package className="w-5 h-5 mb-1" />
            <span className="text-[9px]">Katalog</span>
          </Link>

          <Link href="/tentang-kami" className={`flex-shrink-0 w-[60px] flex flex-col items-center justify-center p-1.5 rounded-xl transition-colors ${pathname === '/tentang-kami' ? 'text-forest-700 font-bold bg-forest-50' : 'text-charcoal-500 hover:text-forest-600'}`}>
            <Info className="w-5 h-5 mb-1" />
            <span className="text-[9px]">Tentang</span>
          </Link>

          <Link href="/tim-manajemen" className={`flex-shrink-0 w-[60px] flex flex-col items-center justify-center p-1.5 rounded-xl transition-colors ${pathname === '/tim-manajemen' ? 'text-forest-700 font-bold bg-forest-50' : 'text-charcoal-500 hover:text-forest-600'}`}>
            <Users className="w-5 h-5 mb-1" />
            <span className="text-[9px]">Tim Kami</span>
          </Link>

          <Link href="/faq" className={`flex-shrink-0 w-[60px] flex flex-col items-center justify-center p-1.5 rounded-xl transition-colors ${pathname === '/faq' ? 'text-forest-700 font-bold bg-forest-50' : 'text-charcoal-500 hover:text-forest-600'}`}>
            <HelpCircle className="w-5 h-5 mb-1" />
            <span className="text-[9px]">FAQ</span>
          </Link>

          <Link href="/blog" className={`flex-shrink-0 w-[60px] flex flex-col items-center justify-center p-1.5 rounded-xl transition-colors ${pathname === '/blog' ? 'text-forest-700 font-bold bg-forest-50' : 'text-charcoal-500 hover:text-forest-600'}`}>
            <FileText className="w-5 h-5 mb-1" />
            <span className="text-[9px]">Blog</span>
          </Link>
          
          <Link href="/kontak" className={`flex-shrink-0 w-[60px] flex flex-col items-center justify-center p-1.5 rounded-xl transition-colors ${pathname === '/kontak' ? 'text-forest-700 font-bold bg-forest-50' : 'text-charcoal-500 hover:text-forest-600'}`}>
            <PhoneCall className="w-5 h-5 mb-1" />
            <span className="text-[9px]">Kontak</span>
          </Link>

          <Link href="/konsultasi" className={`flex-shrink-0 w-[60px] flex flex-col items-center justify-center p-1.5 rounded-xl transition-colors ${pathname === '/konsultasi' ? 'text-forest-700 font-bold bg-forest-50' : 'text-charcoal-500 hover:text-forest-600'}`}>
            <MessageCircle className="w-5 h-5 mb-1" />
            <span className="text-[9px]">Konsultasi</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

