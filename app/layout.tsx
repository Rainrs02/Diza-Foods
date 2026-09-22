import type { Metadata } from 'next';
import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'PT Diza Pangan Bersama (Diza Foods) | Solusi Pabrik Maklon Pangan Sterilisasi (Retort) B2B',
  description: 'Mitra strategis PT Diza Pangan Bersama untuk produksi massal makanan siap saji, saus, bumbu cair, dan pasta berstandar industri dengan kapasitas 6–10 ton/bulan. Pengolahan higienis, sterilisasi retort kedap udara, tanpa pengawet.',
  keywords: [
    'maklon makanan retort',
    'pabrik maklon retort',
    'PT Diza Pangan Bersama',
    'Diza Foods',
    'maklon saus industri',
    'makanan siap saji RTE',
    'maklon bumbu cair',
    'retort pouch sterilizer',
    'maklon pangan bekasi',
  ],
  authors: [{ name: 'PT Diza Pangan Bersama' }],
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased text-charcoal-900 bg-charcoal-50 font-sans font-medium selection:bg-forest-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
