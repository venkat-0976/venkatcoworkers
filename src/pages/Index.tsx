import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductsSection } from '@/components/ProductsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProductsSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
