import { useRef, useEffect } from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const journals = [
  { name: "The New England Journal of Medicine", abbr: "NEJM" },
  { name: "British Journal of Pharmacology", abbr: "BJPharm" },
  { name: "J. of Clinical Endocrinology & Metabolism", abbr: "JCEM" },
  { name: "Peptides — Elsevier", abbr: "Elsevier" },
];

export default function AuthoritySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".authority-heading",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".authority-heading",
            start: "top 85%",
            end: "top 45%",
            scrub: 1,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".authority-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, x: i % 2 === 0 ? -30 : 30 },
          {
            y: 0,
            opacity: 1,
            x: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" id="ciencia">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Two-column layout */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
            {/* Left: Text */}
            <div className="authority-heading">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  Autoridade
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-[1.1]">
                Baseado em{" "}
                <span className="text-gradient">Evidência</span>.
                <br />
                Não em Opinião.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Este material não é especulação. É uma compilação estruturada baseada em{" "}
                <span className="text-primary font-bold">24 referências bibliográficas de elite</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nós traduzimos a complexidade dos ensaios clínicos em{" "}
                <span className="text-primary font-semibold">protocolos práticos</span>{" "}
                que você pode aplicar hoje.
              </p>
            </div>

            {/* Right: Journal cards */}
            <div className="space-y-4 lg:pt-8">
              {journals.map((journal, i) => (
                <div
                  key={journal.name}
                  className="authority-card group glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/30 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <span className="text-[10px] font-bold text-primary tracking-wider">
                      {journal.abbr}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium block truncate">{journal.name}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary/50 transition-colors shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
