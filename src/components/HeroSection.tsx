import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";
import DNAHelix from "@/components/DNAHelix";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D DNA Background */}
      <DNAHelix />

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-[1]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float z-[1]" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float z-[1]" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass border border-primary/30 text-primary mb-6">
              Guia Manus AI 2026 — Protocolos Científicos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.08] tracking-tight mb-4"
          >
            Pare de Adivinhar.{" "}
            <span className="text-gradient">
              Comece a Otimizar.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed"
          >
            O Manual Definitivo de Peptídeos: A Ciência Exata por trás da Alta Performance, Recuperação e Longevidade.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl mb-10 leading-relaxed"
          >
            Chega de fóruns obscuros e informações contraditórias. Tenha acesso imediato aos protocolos de dosagem, mecanismos de ação e guias de segurança de 25 substâncias revolucionárias — de Ozempic a BPC-157.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Quero Acessar o Protocolo Científico
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#produtos-showcase">
                Ver Produtos
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
            className="flex gap-8 sm:gap-12 mt-16 pt-8 border-t border-border/50"
          >
            {[
              { value: "99.5%", label: "Pureza HPLC" },
              { value: "25+", label: "Substâncias" },
              { value: "24", label: "Referências Científicas" },
              { value: "2.500+", label: "Clientes" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-gradient-cyan">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
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
