'use client';

import Link from 'next/link';
import { ChevronRight, Cookie, Flame, Soup, Leaf } from 'lucide-react';

const categories = [
  {
    icon: Cookie,
    title: 'Filling Bakery & Toppings',
    href: '/katalog-produk/bakery-fillings',
    desc: 'Filling sweet (selai serikaya, pasta kacang, pineapple/apple pie) & savory (chicken baso, ayam suwir, beef teriyaki) bake-stable untuk industri bakery.',
    badge: 'Industri Bakery',
    color: '#a16207',
    bg: '#fef9c3',
    border: '#fde047',
  },
  {
    icon: Flame,
    title: 'Sauce & Sambal',
    href: '/katalog-produk/saus-dan-pasta',
    desc: 'Sambal bawang, terasi, ijo padang, bangkok, matah & sauce blackpepper, mushroom, barbeque, gulai, teriyaki, yakiniku, salted egg untuk HORECA & retail.',
    badge: 'Bestseller B2B',
    color: '#b91c1c',
    bg: '#fff1f2',
    border: '#fca5a5',
  },
  {
    icon: Soup,
    title: 'Bumbu Pasta',
    href: '/katalog-produk/bumbu-masak-cair',
    desc: 'Bumbu gulai, kebuli, krengseng, sate, nasi goreng, woku, rica, rendang, dan bumbu hitam madura. Konsistensi rasa terjaga untuk dapur terpusat & central kitchen.',
    badge: 'HORECA Supply',
    color: '#92400e',
    bg: '#fff7ed',
    border: '#fdba74',
  },
  {
    icon: Leaf,
    title: 'RTE Foods (Ready To Eat)',
    href: '/katalog-produk/makanan-siap-saji',
    desc: 'Rendang daging/ayam, ayam rica kemangi, gulai kari, betutu, tuna woku/rica, cakalang, beef & chicken teriyaki. Tahan 1–2 tahun tanpa pengawet & refrigerasi.',
    badge: 'Retort Specialty',
    color: '#166534',
    bg: '#f0fdf4',
    border: '#86efac',
  },
];

export default function ProductPreview() {
  return (
    <section className="py-16 bg-white border-b" style={{ borderColor: 'rgba(45,90,39,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <span
            className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border inline-block"
            style={{ color: '#2d5a27', background: 'rgba(45,90,39,0.07)', borderColor: 'rgba(45,90,39,0.2)' }}
          >
            Produk & Layanan Maklon
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: '#1a1a1a' }}>
            Kategori Produk Kami
          </h2>
          <p className="text-sm text-charcoal-600 max-w-2xl mx-auto">
            Filling bakery, saus & sambal, bumbu pasta, hingga makanan siap saji (RTE) menggunakan teknologi sterilisasi retort mutakhir — tanpa pengawet, halal, tahan lama.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.title}
                href={cat.href}
                className="group flex flex-col justify-between p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: cat.bg,
                  borderColor: cat.border,
                }}
              >
                <div>
                  {/* Icon + Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'white', border: `1.5px solid ${cat.border}` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: cat.color }} />
                    </div>
                    <span
                      className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md"
                      style={{ background: 'white', color: cat.color, border: `1px solid ${cat.border}` }}
                    >
                      {cat.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: '#1a1a1a' }}>
                    {cat.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-xs leading-relaxed" style={{ color: '#4b5563' }}>
                    {cat.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/katalog-produk"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 shadow-md"
            style={{ background: '#2d5a27' }}
          >
            <span>Lihat Katalog Produk Lengkap</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
