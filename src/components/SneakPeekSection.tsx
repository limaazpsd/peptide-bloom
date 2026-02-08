import { useRef, useEffect } from "react";
import { Zap, Lightbulb, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const facts = [
  {
    icon: Zap,
    label: "Tesamorelin",
    text: "O Tesamorelin não apenas queima gordura visceral, mas preserva a pulsatilidade natural do seu GH, diferente das injeções sintéticas tradicionais.",
  },
  {
    icon: Lightbulb,
    label: "BPC-157",
    text: "O BPC-157 é derivado de uma proteína do suco gástrico e pode acelerar a cura de tendões em até 50%.",
  },
];

export default function SneakPeekSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".peek-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 55%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Sneak Peek
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Você <span className="text-gradient">Sabia?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Alguns dos insights mais surpreendentes que você vai encontrar dentro do guia:
          </p>

          <div className="space-y-6 mb-12">
            {facts.map((fact, i) => (
              <div key={i} className="peek-card group">
                <div className="glass rounded-2xl p-8 lg:p-10 border-primary/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/3 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <fact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        {fact.label}
                      </span>
                    </div>
                    <p className="text-foreground text-lg leading-relaxed">
                      {fact.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-primary font-semibold text-lg group cursor-pointer">
            <span>Descubra os detalhes completos de mecanismo e dosagem dentro do guia</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}
