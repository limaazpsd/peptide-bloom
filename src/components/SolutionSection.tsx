import { useRef, useEffect } from "react";
import { Beaker, Target, Shield, Brain } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Beaker,
    title: "A \"Bíblia\" da Reconstituição",
    description:
      "Nunca mais erre na diluição. Saiba exatamente quanto de água bacteriostática usar e como medir na seringa de insulina (U-100) sem matemática complexa.",
    color: "primary" as const,
  },
  {
    icon: Target,
    title: "Mapeamento por Objetivo",
    description:
      "Protocolos específicos para Perda de Gordura (Tirzepatida, Frag 176-191), Ganho Muscular (IGF-1, Tesamorelin) e Reparo Acelerado (TB-500, BPC-157).",
    color: "primary" as const,
  },
  {
    icon: Shield,
    title: "Segurança em Primeiro Lugar",
    description:
      "Uma análise honesta e brutal dos efeitos colaterais reais, contraindicações e interações medicamentosas. Sem filtros.",
    color: "accent" as const,
  },
  {
    icon: Brain,
    title: "Biohacking Cognitivo",
    description:
      "Descubra como Semax e Selank podem destravar novos níveis de foco e reduzir a ansiedade.",
    color: "accent" as const,
  },
];

export default function SolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading parallax
      gsap.fromTo(
        headingRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // Cards: staggered reveal with scale + rotation
      const cards = gridRef.current?.querySelectorAll(".solution-card");
      if (cards) {
        cards.forEach((card, i) => {
          const isLeft = i % 2 === 0;
          gsap.fromTo(
            card,
            {
              y: 120,
              x: isLeft ? -40 : 40,
              opacity: 0,
              rotateY: isLeft ? -5 : 5,
            },
            {
              y: 0,
              x: 0,
              opacity: 1,
              rotateY: 0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
                end: "top 55%",
                scrub: 1,
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden" id="solucao">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/4 blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full bg-accent/4 blur-[130px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div ref={headingRef} className="max-w-4xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Beaker className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              A Solução
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-4">
            O Que Você Vai Encontrar no{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">Guia Manus AI 2026</span>
          </h2>
        </div>

        {/* Benefits grid — 2-column asymmetric */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto" style={{ perspective: "1000px" }}>
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`solution-card group ${i % 2 === 1 ? "md:mt-12" : ""}`}
            >
              <div className="h-full glass rounded-2xl p-8 lg:p-10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                {/* Hover glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/0 group-hover:bg-primary/5 blur-3xl transition-all duration-700" />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                    benefit.color === "primary"
                      ? "bg-primary/10 border border-primary/20"
                      : "bg-accent/10 border border-accent/20"
                  }`}>
                    <benefit.icon className={`w-7 h-7 ${
                      benefit.color === "primary" ? "text-primary" : "text-accent"
                    }`} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
