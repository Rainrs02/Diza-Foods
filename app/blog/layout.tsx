import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen relative bg-charcoal-50">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: "url('/assets/BG1.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}></div>
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
