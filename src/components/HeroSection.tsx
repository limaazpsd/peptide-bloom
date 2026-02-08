import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";
import ParticleField from "@/components/ParticleField";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Interactive Particle Background */}
      <ParticleField />

      {/* Radial gradients for depth */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-0 left-0 w-[60%] h-full bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/60 to-transparent" />
        {/* Accent glow */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
          {/* Left: Copy */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-primary/30 bg-primary/5 text-primary mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Guia Manus AI 2026
              </span>
            </motion.div>

            {/* H1 — Split into dramatic lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h1 className="mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
                >
                  Pare de Adivinhar.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-gradient mt-1"
                >
                  Comece a Otimizar.
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mb-3 leading-relaxed"
            >
              O Manual Definitivo de Peptídeos: A Ciência Exata por trás da Alta Performance, Recuperação e Longevidade.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
              className="text-sm text-muted-foreground/60 max-w-lg mb-10 leading-relaxed"
            >
              Chega de fóruns obscuros e informações contraditórias. Protocolos de dosagem, mecanismos de ação e guias de segurança de 25 substâncias — de Ozempic a BPC-157.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="lg" className="text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 group" asChild>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  Quero Acessar o Protocolo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14" asChild>
                <a href="#problema">Entenda o Problema</a>
              </Button>
            </motion.div>
          </div>

          {/* Right: Stats grid — unique asymmetric layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { value: "99.5%", label: "Pureza HPLC", accent: true },
              { value: "25+", label: "Substâncias Analisadas", accent: false },
              { value: "24", label: "Referências Científicas", accent: false },
              { value: "2.500+", label: "Clientes Ativos", accent: true },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className={`glass rounded-2xl p-6 ${
                  stat.accent ? "border-primary/20" : "border-border/30"
                } hover:border-primary/40 transition-all duration-500 group ${
                  i === 0 ? "row-span-1" : ""
                }`}
              >
                <div className={`text-3xl font-extrabold mb-1 ${
                  stat.accent ? "text-gradient-cyan" : "text-foreground"
                }`}>
                  {stat.value}
                </div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">Scroll</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground/40 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
