import { create } from 'zustand';

export interface InquiryState {
  category: string;
  packaging: string;
  quantity: number;
  customFormula: boolean;
  clientName: string;
  companyName: string;
  phone: string;
  notes: string;

  // Actions
  setCategory: (category: string) => void;
  setPackaging: (packaging: string) => void;
  setQuantity: (quantity: number) => void;
  setCustomFormula: (custom: boolean) => void;
  setClientName: (name: string) => void;
  setCompanyName: (company: string) => void;
  setPhone: (phone: string) => void;
  setNotes: (notes: string) => void;
  resetForm: () => void;

  // Helpers
  getWhatsAppUrl: () => string;
  getEstimatedTime: () => string;
}

const DEFAULT_STATE = {
  category: 'Saus & Pasta Skala Industri',
  packaging: 'Aluminium Foil Retort Pouch',
  quantity: 1000,
  customFormula: true,
  clientName: '',
  companyName: '',
  phone: '',
  notes: '',
};

export const useInquiryStore = create<InquiryState>((set, get) => ({
  ...DEFAULT_STATE,

  setCategory: (category) => set({ category }),
  setPackaging: (packaging) => set({ packaging }),
  setQuantity: (quantity) => set({ quantity }),
  setCustomFormula: (customFormula) => set({ customFormula }),
  setClientName: (clientName) => set({ clientName }),
  setCompanyName: (companyName) => set({ companyName }),
  setPhone: (phone) => set({ phone }),
  setNotes: (notes) => set({ notes }),

  resetForm: () => set(DEFAULT_STATE),

  getEstimatedTime: () => {
    const { customFormula } = get();
    if (customFormula) {
      return '2-3 Minggu (Termasuk R&D Sampel Formula)';
    }
    return '1-2 Minggu (Resep Klien Standar)';
  },

  getWhatsAppUrl: () => {
    const { category, packaging, quantity, customFormula, clientName, companyName, phone, notes } = get();
    
    const phoneNumber = '6289540523332'; // Nomor resmi PT Diza Pangan Bersama
    
    let message = `Halo Tim PT Diza Pangan Bersama (Diza Foods),\n\n`;
    message += `Saya bermaksud mengajukan Konsultasi Layanan Maklon Pangan Sterilisasi (Retort).\n\n`;
    message += `📌 *Detail Perusahaan / Klien:*\n`;
    message += `• Nama: ${clientName || '-'}\n`;
    message += `• Brand / Usaha: ${companyName || '-'}\n`;
    message += `• Kontak: ${phone || '-'}\n\n`;
    message += `📦 *Spesifikasi Maklon:*\n`;
    message += `• Kategori Produk: ${category}\n`;
    message += `• Jenis Kemasan: ${packaging}\n`;
    message += `• Estimasi Volume: ${quantity.toLocaleString('id-ID')} pcs/SKU\n`;
    message += `• Tipe Formula: ${customFormula ? 'Kustom R&D dari Nol (OEM/ODM)' : 'Resep Milik Klien (White-Label)'}\n`;
    
    if (notes) {
      message += `\n📝 *Catatan Tambahan:*\n${notes}\n`;
    }
    
    message += `\nMohon informasi ketersediaan jadwal diskusi teknis dan penawaran harga. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  },
}));
