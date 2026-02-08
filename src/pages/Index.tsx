import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ProductCarousel from "@/components/ProductCarousel";
import ScienceSection from "@/components/ScienceSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MarqueeStrip direction="left" variant="primary" />
      <ProductCarousel />
      <ScienceSection />
      <MarqueeStrip direction="right" variant="accent" />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
