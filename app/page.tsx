import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutFacility from '@/components/AboutFacility';
import TeamProfile from '@/components/TeamProfile';
import QualityLegality from '@/components/QualityLegality';
import ProductCatalog from '@/components/ProductCatalog';
import WorkflowSOP from '@/components/WorkflowSOP';
import InquiryForm from '@/components/InquiryForm';
import TestimonialsPartners from '@/components/TestimonialsPartners';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-charcoal-50 flex flex-col">
      <Navbar />
      <Hero />
      <AboutFacility />
      <TeamProfile />
      <QualityLegality />
      <ProductCatalog />
      <WorkflowSOP />
      <InquiryForm />
      <TestimonialsPartners />
      <FAQSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
