import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import MarqueeStrip from "@/components/MarqueeStrip";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
              Catálogo Completo
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Nossos <span className="text-gradient">Produtos</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Explore nossa linha completa de peptídeos de alta pureza. Filtre por categoria para encontrar o protocolo ideal.
            </p>
          </motion.div>

          <ProductGrid />
        </div>
      </section>

      <MarqueeStrip direction="left" variant="primary" />
      <Footer />
    </div>
  );
}
