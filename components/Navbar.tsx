'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall, ChevronRight, Home, Package, Info, MessageCircle } from 'lucide-react';
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
      <nav className="lg:hidden fixed bottom-0 w-full bg-white border-t border-charcoal-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 px-2 py-2 pb-safe">
        <div className="flex justify-around items-center">
          <Link href="/" className={`flex flex-col items-center justify-center p-2 rounded-xl transition-colors ${pathname === '/' ? 'text-forest-700 font-bold' : 'text-charcoal-500 hover:text-forest-600'}`}>
            <Home className="w-5 h-5 mb-1" />
            <span className="text-[10px]">Beranda</span>
          </Link>
          
          <Link href="/katalog-produk" className={`flex flex-col items-center justify-center p-2 rounded-xl transition-colors ${pathname === '/katalog-produk' ? 'text-forest-700 font-bold' : 'text-charcoal-500 hover:text-forest-600'}`}>
            <Package className="w-5 h-5 mb-1" />
            <span className="text-[10px]">Katalog</span>
          </Link>

          <div className="relative -top-5">
            <Link href="/konsultasi" className="flex items-center justify-center w-14 h-14 bg-forest-700 text-white rounded-full shadow-lg border-4 border-charcoal-50 hover:bg-forest-600 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </Link>
          </div>

          <Link href="/tentang-kami" className={`flex flex-col items-center justify-center p-2 rounded-xl transition-colors ${pathname === '/tentang-kami' ? 'text-forest-700 font-bold' : 'text-charcoal-500 hover:text-forest-600'}`}>
            <Info className="w-5 h-5 mb-1" />
            <span className="text-[10px]">Tentang</span>
          </Link>
          
          <Link href="/kontak" className={`flex flex-col items-center justify-center p-2 rounded-xl transition-colors ${pathname === '/kontak' ? 'text-forest-700 font-bold' : 'text-charcoal-500 hover:text-forest-600'}`}>
            <PhoneCall className="w-5 h-5 mb-1" />
            <span className="text-[10px]">Kontak</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

