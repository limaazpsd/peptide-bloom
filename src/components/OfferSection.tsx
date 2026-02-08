import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";
import { ArrowRight, Shield, Zap, Download } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OfferSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".offer-content",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".offer-content",
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".offer-card",
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".offer-card",
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
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          {/* Left: Copy */}
          <div className="offer-content">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Oferta Especial
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-[1.1]">
              Domine a <span className="text-gradient">Bioquímica</span>
              <br />
              do Seu Corpo
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O conhecimento contido neste guia pode economizar meses de tentativas e erros — e muito dinheiro em produtos desperdiçados.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 text-primary" />
                Acesso Imediato
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Compra Segura
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                PDF Vitalício
              </span>
            </div>
          </div>

          {/* Right: Price card */}
          <div className="offer-card">
            <div className="glass rounded-3xl p-8 sm:p-10 border-primary/20 relative overflow-hidden">
              {/* Corner glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="text-muted-foreground text-lg mb-1 line-through">
                  R$ 197,00
                </div>
                <div className="text-5xl sm:text-6xl font-extrabold text-gradient-cyan mb-2">
                  R$ 47,00
                </div>
                <p className="text-muted-foreground/60 text-sm mb-8">
                  Pagamento único • Sem mensalidades
                </p>

                <Button variant="hero" size="lg" className="w-full text-base py-7 animate-pulse-glow group" asChild>
                  <a href={getWhatsAppLink("Guia Completo Manus AI 2026")} target="_blank" rel="noopener noreferrer">
                    Baixar Guia Completo Agora
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
