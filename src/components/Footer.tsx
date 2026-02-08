import { Link } from "react-router-dom";
import { getWhatsAppLink } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/30 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                Peptide<span className="text-primary">Health</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Ciência avançada para otimização humana. Peptídeos de alta pureza com protocolos baseados em evidência.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Falar com Especialista
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-5">Navegação</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Início", href: "/" },
                { label: "Ciência", href: "/#ciencia" },
                { label: "Produtos", href: "/produtos" },
                { label: "FAQ", href: "/#faq" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-5">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                WhatsApp
              </a>
              <span className="text-sm text-muted-foreground">contato@peptidehealth.com.br</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted-foreground/60">
            © {new Date().getFullYear()} Peptide Health. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-muted-foreground/40">
            Uso exclusivamente para fins de pesquisa.
          </p>
        </div>
      </div>
    </footer>
  );
}
