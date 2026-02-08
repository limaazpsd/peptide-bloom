import { motion } from "framer-motion";
import { Lightbulb, Zap } from "lucide-react";

const facts = [
  {
    icon: Zap,
    text: "O Tesamorelin não apenas queima gordura visceral, mas preserva a pulsatilidade natural do seu GH, diferente das injeções sintéticas tradicionais.",
  },
  {
    icon: Lightbulb,
    text: "O BPC-157 é derivado de uma proteína do suco gástrico e pode acelerar a cura de tendões em até 50%.",
  },
];

export default function SneakPeekSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
            Sneak Peek
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Você <span className="text-gradient">Sabia?</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 border-primary/20 hover:border-primary/40 glow-hover transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <fact.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed text-lg">
                  {fact.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-primary font-semibold text-lg"
        >
          Descubra os detalhes completos de mecanismo e dosagem dentro do guia →
        </motion.p>
      </div>
    </section>
  );
}
