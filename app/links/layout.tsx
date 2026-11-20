import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Official Links & Kontak Resmi | PT Diza Pangan Bersama (Diza Foods)',
  description: 'Pusat tautan resmi PT Diza Pangan Bersama (Diza Foods). Akses langsung WhatsApp Admin Online Shop (Retail), WhatsApp Konsultan B2B Maklon Retort, Official Store Shopee, Instagram, TikTok, dan Website Utama.',
  openGraph: {
    title: 'Official Links | PT Diza Pangan Bersama (Diza Foods)',
    description: 'Pabrik Maklon Pangan Sterilisasi (Retort) & Produsen Makanan Siap Saji Higienis. Hubungi Admin WhatsApp Online Shop & B2B Maklon.',
    url: 'https://dizafoods.co.id/links',
    siteName: 'Diza Foods',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'PT Diza Pangan Bersama',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
