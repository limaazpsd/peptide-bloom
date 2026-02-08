import { motion } from "framer-motion";
import { X } from "lucide-react";

const painPoints = [
  "Dosagens erradas que anulam os efeitos ou causam colaterais severos.",
  "Produtos subdosados ou contaminados por falta de critérios de escolha.",
  "Protocolos de \"bro-science\" sem base em estudos clínicos.",
];

export default function PainSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="problema">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-destructive mb-2 block">
            O Problema
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            A Linha Tênue entre o Resultado e o Risco é o{" "}
            <span className="text-gradient">Conhecimento</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O mundo dos peptídeos explodiu. Todos falam sobre "peptídeos milagrosos" para emagrecer ou curar lesões em tempo recorde. Mas a verdade é perigosa:
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-5 mb-16">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex items-start gap-4 glass rounded-xl p-5 border-destructive/20 hover:border-destructive/40 transition-colors"
            >
              <div className="mt-0.5 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center shrink-0">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <p className="text-foreground leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Você não precisa ser um cientista para ter resultados, mas precisa de um guia que foi escrito com o{" "}
          <span className="text-primary font-semibold">rigor de um</span>.
        </motion.p>
      </div>
    </section>
  );
}
