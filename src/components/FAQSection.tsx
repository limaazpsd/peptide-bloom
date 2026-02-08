import { useRef, useEffect } from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-heading",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-heading",
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative" id="faq">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-[0.8fr_1fr] gap-12 items-start">
          {/* Left: Heading */}
          <div className="faq-heading lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-[1.1]">
              Perguntas{" "}
              <span className="text-gradient">Frequentes</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tudo que você precisa saber antes de tomar sua decisão.
            </p>
          </div>

          {/* Right: Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="glass rounded-xl px-6 border-border/30 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
