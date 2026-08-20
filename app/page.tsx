import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import QualityLegality from '@/components/QualityLegality';
import WorkflowSOP from '@/components/WorkflowSOP';
import ProductPreview from '@/components/ProductPreview';
import LatestArticles from '@/components/LatestArticles';
import TestimonialsPartners from '@/components/TestimonialsPartners';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-charcoal-50 flex flex-col">
      <Navbar />
      <Hero />
      <ProductPreview />
      <QualityLegality bgOverlay="bg2" />
      <WorkflowSOP />
      <TestimonialsPartners bgOverlay="bg1" />
      <LatestArticles />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
