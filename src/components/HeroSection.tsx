import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";
import DNAHelix from "@/components/DNAHelix";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D DNA Background — full bleed */}
      <DNAHelix />

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-[1]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase glass border border-primary/30 text-primary mb-8">
              Guia Manus AI 2026 — Protocolos Científicos
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
          >
            Pare de Adivinhar.
            <br />
            <span className="text-gradient">Comece a Otimizar.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl mb-3 leading-relaxed"
          >
            O Manual Definitivo de Peptídeos: A Ciência Exata por trás da Alta Performance, Recuperação e Longevidade.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="text-sm text-muted-foreground/70 max-w-lg mb-10 leading-relaxed"
          >
            Chega de fóruns obscuros e informações contraditórias. Protocolos de dosagem, mecanismos de ação e guias de segurança de 25 substâncias — de Ozempic a BPC-157.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="lg" className="text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14" asChild>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Quero Acessar o Protocolo
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14" asChild>
              <a href="#produtos-showcase">Ver Produtos</a>
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-8 sm:gap-10 mt-14 pt-6 border-t border-border/40"
          >
            {[
              { value: "99.5%", label: "Pureza HPLC" },
              { value: "25+", label: "Substâncias" },
              { value: "24", label: "Ref. Científicas" },
              { value: "2.500+", label: "Clientes" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl sm:text-2xl font-bold text-gradient-cyan">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
