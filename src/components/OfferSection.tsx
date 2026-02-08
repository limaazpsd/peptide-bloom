import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";
import { ArrowRight, Shield, Zap, Download } from "lucide-react";

export default function OfferSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
            Oferta Especial
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Domine a <span className="text-gradient">Bioquímica</span> do Seu Corpo
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            O conhecimento contido neste guia pode economizar meses de tentativas e erros — e muito dinheiro em produtos desperdiçados.
          </p>

          {/* Price anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-8 mb-10 max-w-md mx-auto border-primary/30"
          >
            <div className="text-muted-foreground text-lg mb-2 line-through">
              R$ 197,00
            </div>
            <div className="text-5xl font-extrabold text-gradient-cyan mb-4">
              R$ 47,00
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5">
                <Download className="w-4 h-4 text-primary" />
                Acesso Imediato
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" />
                Compra Segura
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-primary" />
                PDF Vitalício
              </span>
            </div>

            <Button variant="hero" size="lg" className="w-full text-base py-6 animate-pulse-glow" asChild>
              <a href={getWhatsAppLink("Guia Completo Manus AI 2026")} target="_blank" rel="noopener noreferrer">
                Baixar Guia Completo Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
