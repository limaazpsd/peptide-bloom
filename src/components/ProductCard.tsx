import { Button } from "@/components/ui/button";
import { getWhatsAppLink, type Product } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative glass rounded-2xl p-6 flex flex-col justify-between min-h-[320px] glow-hover transition-all duration-500 hover:border-primary/30"
    >
      {/* Tag */}
      {product.tag && (
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30">
          {product.tag}
        </span>
      )}

      <div>
        {/* Category */}
        <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
          {product.category}
        </span>

        {/* Name */}
        <h3 className="text-2xl font-bold mt-2 mb-3 group-hover:text-gradient-cyan transition-all duration-300">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {product.description}
        </p>

        {/* Benefit tag */}
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          {product.benefit}
        </div>
      </div>

      {/* CTA */}
      <Button variant="hero" size="sm" className="mt-6 w-full" asChild>
        <a href={getWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer">
          Comprar
          <ArrowUpRight className="ml-2 w-4 h-4" />
        </a>
      </Button>
    </motion.div>
  );
}
