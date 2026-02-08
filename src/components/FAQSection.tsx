import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que são peptídeos?",
    answer:
      "Peptídeos são cadeias curtas de aminoácidos que atuam como sinalizadores biológicos no organismo. Eles regulam processos como regeneração tecidual, liberação hormonal, função cognitiva e resposta imune.",
  },
  {
    question: "Os peptídeos são seguros?",
    answer:
      "Quando utilizados sob orientação profissional e com produtos de alta pureza, os peptídeos possuem um excelente perfil de segurança. Todos os nossos produtos passam por rigoroso controle de qualidade laboratorial.",
  },
  {
    question: "Como funciona a compra?",
    answer:
      "Basta clicar em 'Comprar' no produto desejado ou em 'Falar com Especialista'. Você será direcionado ao nosso WhatsApp, onde nossa equipe irá orientá-lo sobre o protocolo ideal para seus objetivos.",
  },
  {
    question: "Vocês oferecem acompanhamento?",
    answer:
      "Sim! Oferecemos consultoria científica completa com nossa equipe de bioquímicos e médicos. O acompanhamento é personalizado de acordo com seus objetivos de saúde e performance.",
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
            FAQ
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
