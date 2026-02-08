import { motion } from "framer-motion";
import { Beaker, Shield, Zap, Brain } from "lucide-react";

const features = [
  {
    icon: Beaker,
    title: "Pureza Laboratorial",
    description: "Todos os peptídeos passam por análise HPLC e espectrometria de massa, garantindo pureza superior a 99%.",
  },
  {
    icon: Shield,
    title: "Segurança Comprovada",
    description: "Protocolos baseados em evidências científicas publicadas em periódicos indexados internacionalmente.",
  },
  {
    icon: Zap,
    title: "Biodisponibilidade",
    description: "Formulações otimizadas para máxima absorção e eficácia biológica no organismo.",
  },
  {
    icon: Brain,
    title: "Consultoria Científica",
    description: "Equipe multidisciplinar de bioquímicos e médicos para orientação personalizada.",
  },
];

export default function ScienceSection() {
  return (
    <section className="py-24 gradient-mesh" id="ciencia">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
            Ciência
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Por que a <span className="text-gradient">Peptide Health</span>?
          </h2>
          <p className="text-muted-foreground">
            Nossa abordagem combina rigor científico com tecnologia farmacêutica de ponta para entregar resultados reais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl p-6 hover:border-primary/30 glow-hover transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
