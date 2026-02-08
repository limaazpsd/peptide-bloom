import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const journals = [
  "The New England Journal of Medicine",
  "British Journal of Pharmacology",
  "Journal of Clinical Endocrinology & Metabolism",
  "Peptides — Elsevier",
];

export default function AuthoritySection() {
  return (
    <section className="py-24 relative overflow-hidden" id="ciencia">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
              Autoridade
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Baseado em{" "}
              <span className="text-gradient">Evidência</span>. Não em Opinião.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Este material não é especulação. É uma compilação estruturada baseada em{" "}
              <span className="text-primary font-semibold">24 referências bibliográficas de elite</span>, incluindo:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {journals.map((journal, i) => (
              <motion.div
                key={journal}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">{journal}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Nós traduzimos a complexidade dos ensaios clínicos em{" "}
            <span className="text-primary font-semibold">protocolos práticos</span>{" "}
            que você pode aplicar hoje.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
