import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X, AlertTriangle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  {
    text: "Dosagens erradas que anulam os efeitos ou causam colaterais severos.",
    detail: "78% dos usuários erram na dosagem inicial",
  },
  {
    text: "Produtos subdosados ou contaminados por falta de critérios de escolha.",
    detail: "Sem análise HPLC = risco real",
  },
  {
    text: "Protocolos de \"bro-science\" sem base em estudos clínicos.",
    detail: "Fóruns ≠ Ciência revisada por pares",
  },
];

export default function PainSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax — moves slower than scroll
      gsap.to(bgRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Heading reveal with parallax offset
      gsap.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // Staggered card reveal with parallax
      const cards = cardsRef.current?.querySelectorAll(".pain-card");
      if (cards) {
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { y: 100 + i * 20, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 50%",
                scrub: 1,
              },
            }
          );
        });
      }

      // Closing text
      gsap.fromTo(
        closingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: closingRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden" id="problema">
      {/* Parallax background */}
      <div ref={bgRef} className="absolute inset-0 -top-20 -bottom-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/80 to-background" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-destructive/3 blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div ref={headingRef} className="max-w-4xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-destructive">
              O Problema
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            A Linha Tênue entre o Resultado e o Risco é o{" "}
            <span className="text-gradient">Conhecimento</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            O mundo dos peptídeos explodiu. Todos falam sobre "peptídeos milagrosos" para emagrecer ou curar lesões em tempo recorde. Mas a verdade é perigosa:
          </p>
        </div>

        {/* Pain points — asymmetric staggered layout */}
        <div ref={cardsRef} className="max-w-4xl mx-auto space-y-6 mb-20">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="pain-card group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-5 glass rounded-2xl p-6 sm:p-8 border-destructive/10 hover:border-destructive/30 transition-all duration-500"
                style={{ marginLeft: `${i * 2}%` }}
              >
                <div className="flex items-center gap-4 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                    <X className="w-5 h-5 text-destructive" />
                  </div>
                  <span className="sm:hidden text-[10px] font-bold uppercase tracking-wider text-destructive/60">
                    {point.detail}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-foreground text-lg leading-relaxed mb-2">{point.text}</p>
                  <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-destructive/50 mt-1">
                    {point.detail}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div ref={closingRef} className="max-w-3xl mx-auto text-center">
          <div className="glass rounded-2xl p-8 sm:p-10 border-primary/10">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Você não precisa ser um cientista para ter resultados, mas precisa de um guia que foi escrito com o{" "}
              <span className="text-primary font-bold">rigor de um</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
