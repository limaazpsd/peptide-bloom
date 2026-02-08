import { Link } from "react-router-dom";
import { getWhatsAppLink } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                Peptide<span className="text-primary">Health</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Ciência avançada para otimização humana. Peptídeos de alta pureza com protocolos personalizados.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Navegação</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Início</Link>
              <Link to="/#ciencia" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ciência</Link>
              <Link to="/produtos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Produtos</Link>
              <Link to="/#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Contato</h4>
            <div className="flex flex-col gap-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
              <span className="text-sm text-muted-foreground">contato@peptidehealth.com.br</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Peptide Health. Todos os direitos reservados. Uso exclusivamente para fins de pesquisa.
          </p>
        </div>
      </div>
    </footer>
  );
}
