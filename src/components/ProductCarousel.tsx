import { useRef } from "react";
import { PRODUCTS } from "@/lib/constants";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 relative" id="produtos-showcase">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
              Catálogo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Nossos <span className="text-gradient">Peptídeos</span>
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <Button
              variant="hero-outline"
              size="icon"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="hero-outline"
              size="icon"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-[max(1rem,calc((100vw-1400px)/2+1rem))] pb-4 no-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {PRODUCTS.slice(0, 6).map((product, i) => (
          <div
            key={product.id}
            className="snap-start shrink-0 w-[300px] sm:w-[320px]"
          >
            <ProductCard product={product} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
