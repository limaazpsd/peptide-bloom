import { motion } from "framer-motion";
import { Beaker, Target, Shield, Brain } from "lucide-react";

const benefits = [
  {
    icon: Beaker,
    title: "A \"Bíblia\" da Reconstituição",
    description:
      "Nunca mais erre na diluição. Saiba exatamente quanto de água bacteriostática usar e como medir na seringa de insulina (U-100) sem matemática complexa.",
  },
  {
    icon: Target,
    title: "Mapeamento por Objetivo",
    description:
      "Protocolos específicos para Perda de Gordura (Tirzepatida, Frag 176-191), Ganho Muscular (IGF-1, Tesamorelin) e Reparo Acelerado (TB-500, BPC-157).",
  },
  {
    icon: Shield,
    title: "Segurança em Primeiro Lugar",
    description:
      "Uma análise honesta e brutal dos efeitos colaterais reais, contraindicações e interações medicamentosas. Sem filtros.",
  },
  {
    icon: Brain,
    title: "Biohacking Cognitivo",
    description:
      "Descubra como Semax e Selank podem destravar novos níveis de foco e reduzir a ansiedade.",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-24 gradient-mesh relative overflow-hidden" id="solucao">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
            A Solução
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            O Que Você Vai Encontrar no{" "}
            <span className="text-gradient">Guia Manus AI 2026</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group glass rounded-2xl p-8 hover:border-primary/30 glow-hover transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
