import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Isso substitui meu médico?",
    answer:
      "Absolutamente não. Este é um guia educacional para que você e seu profissional de saúde tomem decisões baseadas em dados, não em \"achismo\". A consulta médica é indispensável para qualquer protocolo.",
  },
  {
    question: "Serve para iniciantes?",
    answer:
      "Sim. A seção de \"Modo de Uso\" explica desde a escolha da agulha até o local exato da aplicação no abdômen. Tudo passo a passo, com imagens e tabelas de fácil compreensão.",
  },
  {
    question: "É seguro?",
    answer:
      "O guia dedica uma seção inteira aos \"Efeitos Colaterais\" e \"Contraindicações\" para que você saiba exatamente onde está pisando. Transparência total sobre riscos e benefícios.",
  },
  {
    question: "Os peptídeos são legais?",
    answer:
      "Peptídeos são comercializados para fins de pesquisa. É importante verificar a legislação local. Nosso guia foca na ciência e nos protocolos baseados em evidência.",
  },
  {
    question: "Qual a pureza dos produtos?",
    answer:
      "Todos os nossos peptídeos possuem pureza superior a 99%, verificada por análise HPLC (Cromatografia Líquida de Alta Eficiência) e espectrometria de massa. Certificados de análise estão disponíveis sob solicitação.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24" id="faq">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
            Quebra-Objeções
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass rounded-xl px-6 border-border/50 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
