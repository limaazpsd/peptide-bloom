import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

import semaxImg from "@/assets/products/semax.jpg";
import selankImg from "@/assets/products/selank.jpg";
import tb500Img from "@/assets/products/tb500.jpg";
import tirzepatidaImg from "@/assets/products/tirzepatida.jpg";
import ghkCuImg from "@/assets/products/ghk-cu.jpg";
import retatrutideImg from "@/assets/products/retatrutide.jpg";
import bpc157Img from "@/assets/products/bpc-157.jpg";
import sluPp332Img from "@/assets/products/slu-pp332.jpg";
import lineupImg from "@/assets/products/lineup.jpg";

const products = [
  { name: "BPC-157", dose: "10 mg", category: "Recuperação", image: bpc157Img, tag: "Best Seller" },
  { name: "TB-500", dose: "10 mg", category: "Recuperação", image: tb500Img },
  { name: "Tirzepatide", dose: "60 mg", category: "Emagrecimento", image: tirzepatidaImg, tag: "Tendência" },
  { name: "Retatrutide", dose: "40 mg", category: "Emagrecimento", image: retatrutideImg, tag: "Novo" },
  { name: "Semax", dose: "5 mg", category: "Nootrópicos", image: semaxImg },
  { name: "Selank", dose: "5 mg", category: "Nootrópicos", image: selankImg },
  { name: "GHK-cu", dose: "50 mg", category: "Longevidade", image: ghkCuImg },
  { name: "SLU-PP332", dose: "5 mg", category: "Performance", image: sluPp332Img },
];

export default function ProductShowcase() {
  return (
    <section className="py-24 relative overflow-hidden" id="produtos-showcase">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
            Catálogo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Peptídeos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Peptídeos de alta pureza fabricados nos EUA. Cada lote passa por análise HPLC e espectrometria de massa.
          </p>
        </motion.div>

        {/* Featured lineup image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-2xl overflow-hidden glass p-2"
        >
          <img
            src={lineupImg}
            alt="Peptide Health - Linha completa de produtos"
            className="w-full rounded-xl object-cover max-h-[500px]"
            loading="lazy"
          />
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/30 glow-hover transition-all duration-500"
            >
              {/* Product image */}
              <div className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-card aspect-[3/4]">
                <img
                  src={product.image}
                  alt={`Peptide Health - ${product.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {product.tag && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/90 text-primary-foreground">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Product info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {product.category}
                  </span>
                  <span className="text-xs text-primary font-semibold">
                    {product.dose}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-gradient-cyan transition-colors">
                  {product.name}
                </h3>
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <a
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comprar
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
