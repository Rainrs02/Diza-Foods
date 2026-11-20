import { create } from 'zustand';

export type WhatsAppTarget = 'online-shop' | 'b2b';

export interface PresetMessage {
  id: string;
  title: string;
  badge?: string;
  text: string;
}

export const ONLINE_SHOP_PRESETS: PresetMessage[] = [
  {
    id: 'order-retail',
    title: '🛒 Pemesanan Retail / Ready-to-Eat',
    badge: 'Populer',
    text: 'Halo Admin Online Shop Diza Foods, saya ingin menanyakan katalog produk retail yang ready stock dan promo yang sedang berlaku.',
  },
  {
    id: 'stock-check',
    title: '📦 Cek Stok & Pengiriman',
    text: 'Halo Admin Diza Foods, saya ingin menanyakan ketersediaan varian produk makanan siap saji serta estimasi pengiriman ke alamat saya.',
  },
  {
    id: 'reseller-retail',
    title: '🤝 Peluang Kemitraan / Reseller',
    badge: 'Mitra',
    text: 'Halo Admin, saya berminat untuk menjadi agen/reseller produk retail Diza Foods. Boleh minta informasi syarat dan pricelist khususnya?',
  },
  {
    id: 'general-online',
    title: '💬 Tanya Seputar Produk',
    text: 'Halo Admin Online Shop Diza Foods, saya ingin konsultasi mengenai produk pangan Diza Foods.',
  },
];

export const B2B_PRESETS: PresetMessage[] = [
  {
    id: 'maklon-retort',
    title: '🏭 Konsultasi Maklon Sterilisasi Retort',
    badge: 'Prioritas B2B',
    text: 'Halo Tim B2B PT Diza Pangan Bersama, saya ingin konsultasi terkait layanan maklon pangan sterilisasi retort (suhu ruang tahan lama tanpa pengawet) untuk brand saya.',
  },
  {
    id: 'rd-formula',
    title: '🧪 Trial R&D & Resep Kustom',
    badge: 'R&D Lab',
    text: 'Halo Tim R&D Diza Foods, saya tertarik membuat formulasi produk kustom (OEM/ODM). Boleh minta penjelasan proses trial sampel formula dan NDA?',
  },
  {
    id: 'visit-factory',
    title: '📅 Jadwal Kunjungan Pabrik (Bekasi)',
    text: 'Halo Tim Diza Foods, saya berencana menjadwalkan kunjungan pabrik ke fasilitas PT Diza Pangan Bersama di Jatikramat Bekasi untuk audit calon mitra maklon.',
  },
  {
    id: 'moq-pricing',
    title: '📑 Info MOQ & Penawaran Kerjasama',
    text: 'Halo Tim Komersial Diza Foods, boleh minta Company Profile terbaru, informasi MOQ (Minimum Order Quantity), dan estimasi skema biaya maklon?',
  },
];

export const TARGET_DETAILS: Record<WhatsAppTarget, {
  name: string;
  role: string;
  phone: string;
  phoneFormatted: string;
  avatarText: string;
  badge: string;
  defaultPresetId: string;
}> = {
  'online-shop': {
    name: 'Admin Online Shop',
    role: 'Pemesanan Retail & Konsumen',
    phone: '6281385284780',
    phoneFormatted: '+62 813-8528-4780',
    avatarText: '🛍️',
    badge: 'Retail & Konsumen',
    defaultPresetId: 'order-retail',
  },
  'b2b': {
    name: 'Konsultan B2B & Maklon',
    role: 'Pabrik Maklon & Kemitraan Industri',
    phone: '62895405233323',
    phoneFormatted: '+62 8954-0523-3323',
    avatarText: '🏭',
    badge: 'B2B & Maklon Industri',
    defaultPresetId: 'maklon-retort',
  },
};

export interface LinksStoreState {
  target: WhatsAppTarget;
  isModalOpen: boolean;
  senderName: string;
  companyName: string;
  selectedPresetId: string;
  customMessage: string;
  copiedUrl: boolean;

  // Actions
  openModal: (target: WhatsAppTarget, presetId?: string) => void;
  closeModal: () => void;
  setTarget: (target: WhatsAppTarget) => void;
  setSenderName: (name: string) => void;
  setCompanyName: (company: string) => void;
  setSelectedPresetId: (id: string) => void;
  setCustomMessage: (msg: string) => void;
  setCopiedUrl: (copied: boolean) => void;
  
  // URL Generator using api.whatsapp.com
  getWhatsAppApiUrl: (overrideTarget?: WhatsAppTarget, overrideText?: string) => string;
}

export const useLinksStore = create<LinksStoreState>((set, get) => ({
  target: 'online-shop',
  isModalOpen: false,
  senderName: '',
  companyName: '',
  selectedPresetId: 'order-retail',
  customMessage: ONLINE_SHOP_PRESETS[0].text,
  copiedUrl: false,

  openModal: (target, presetId) => {
    const presets = target === 'online-shop' ? ONLINE_SHOP_PRESETS : B2B_PRESETS;
    const chosenPresetId = presetId || TARGET_DETAILS[target].defaultPresetId;
    const foundPreset = presets.find((p) => p.id === chosenPresetId) || presets[0];

    set({
      target,
      isModalOpen: true,
      selectedPresetId: foundPreset.id,
      customMessage: foundPreset.text,
    });
  },

  closeModal: () => set({ isModalOpen: false }),

  setTarget: (target) => {
    const presets = target === 'online-shop' ? ONLINE_SHOP_PRESETS : B2B_PRESETS;
    const defaultId = TARGET_DETAILS[target].defaultPresetId;
    const foundPreset = presets.find((p) => p.id === defaultId) || presets[0];
    set({
      target,
      selectedPresetId: foundPreset.id,
      customMessage: foundPreset.text,
    });
  },

  setSenderName: (senderName) => set({ senderName }),
  setCompanyName: (companyName) => set({ companyName }),

  setSelectedPresetId: (presetId) => {
    const { target } = get();
    const presets = target === 'online-shop' ? ONLINE_SHOP_PRESETS : B2B_PRESETS;
    const found = presets.find((p) => p.id === presetId);
    if (found) {
      set({
        selectedPresetId: presetId,
        customMessage: found.text,
      });
    }
  },

  setCustomMessage: (customMessage) => set({ customMessage }),

  setCopiedUrl: (copiedUrl) => set({ copiedUrl }),

  getWhatsAppApiUrl: (overrideTarget, overrideText) => {
    const { target, senderName, companyName, customMessage } = get();
    const activeTarget = overrideTarget || target;
    const phone = TARGET_DETAILS[activeTarget].phone;

    let bodyText = overrideText ?? customMessage;
    const trimmedSender = senderName.trim();
    const trimmedCompany = companyName.trim();

    // Add polite salutation if name or company is provided
    let intro = '';
    if (trimmedSender && trimmedCompany) {
      intro = `Halo Admin, perkenalkan saya *${trimmedSender}* dari *${trimmedCompany}*.\n\n`;
    } else if (trimmedSender) {
      intro = `Halo Admin, perkenalkan saya *${trimmedSender}*.\n\n`;
    } else if (trimmedCompany) {
      intro = `Halo Admin, saya mewakili *${trimmedCompany}*.\n\n`;
    }

    const fullMessage = intro ? `${intro}${bodyText}` : bodyText;
    const encoded = encodeURIComponent(fullMessage);

    // Guaranteed format: api.whatsapp.com instead of wa.me
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;
  },
}));
