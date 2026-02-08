import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import ProductShowcase from "@/components/ProductShowcase";
import AuthoritySection from "@/components/AuthoritySection";
import SneakPeekSection from "@/components/SneakPeekSection";
import FAQSection from "@/components/FAQSection";
import OfferSection from "@/components/OfferSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MarqueeStrip direction="left" variant="primary" />
      <PainSection />
      <SolutionSection />
      <MarqueeStrip direction="right" variant="accent" />
      <ProductShowcase />
      <AuthoritySection />
      <SneakPeekSection />
      <MarqueeStrip direction="left" variant="primary" />
      <FAQSection />
      <OfferSection />
      <Footer />
    </div>
  );
};

export default Index;
