import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import semaxImg from "@/assets/products/semax.jpg";
import selankImg from "@/assets/products/selank.jpg";
import tb500Img from "@/assets/products/tb500.jpg";
import tirzepatidaImg from "@/assets/products/tirzepatida.jpg";
import ghkCuImg from "@/assets/products/ghk-cu.jpg";
import retatrutideImg from "@/assets/products/retatrutide.jpg";
import bpc157Img from "@/assets/products/bpc-157.jpg";
import sluPp332Img from "@/assets/products/slu-pp332.jpg";
import lineupImg from "@/assets/products/lineup.jpg";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Lineup image parallax
      gsap.fromTo(
        ".lineup-image",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".lineup-image",
            start: "top 85%",
            end: "top 45%",
            scrub: 1,
          },
        }
      );

      // Product cards
      gsap.utils.toArray<HTMLElement>(".product-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              end: "top 65%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" id="produtos-showcase">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header — left-aligned */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Catálogo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-[1.1]">
            Nossos <span className="text-gradient">Peptídeos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Peptídeos de alta pureza fabricados nos EUA. Cada lote passa por análise HPLC e espectrometria de massa.
          </p>
        </div>

        {/* Featured lineup image */}
        <div className="lineup-image mb-16 rounded-3xl overflow-hidden glass p-1.5">
          <img
            src={lineupImg}
            alt="Peptide Health - Linha completa de produtos"
            className="w-full rounded-2xl object-cover max-h-[500px]"
            loading="lazy"
          />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
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
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-[0.15em]">
                    {product.category}
                  </span>
                  <span className="text-[10px] text-primary font-bold tracking-wider">
                    {product.dose}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-4">{product.name}</h3>
                <Button variant="hero" size="sm" className="w-full group/btn" asChild>
                  <a href={getWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer">
                    Comprar
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
