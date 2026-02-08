import { useState, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Ciência", href: "/#ciencia" },
  { label: "Produtos", href: "/produtos" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const location = useLocation();

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const navRect = navRef.current?.getBoundingClientRect();
    if (!navRect) return;
    const targetRect = target.getBoundingClientRect();
    setHovered({
      left: targetRect.left - navRect.left,
      width: targetRect.width,
    });
  }, []);

  const handleNavLeave = useCallback(() => {
    setHovered(null);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="w-full max-w-7xl px-4 sm:px-6 pt-4 md:pt-6 flex items-center justify-between pointer-events-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">P</span>
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">
            Peptide<span className="text-primary">Health</span>
          </span>
        </Link>

        {/* Desktop Floating Pill Nav */}
        <nav
          className="hidden md:block relative"
          onMouseLeave={handleNavLeave}
        >
          {/* Pill container */}
          <div className="relative rounded-full bg-background/60 backdrop-blur-2xl border border-border/40 p-1">
            {/* Sliding highlight */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  className="absolute top-1 bottom-1 rounded-full bg-primary/15 backdrop-blur-sm border border-primary/20"
                  initial={{ opacity: 0, left: hovered.left, width: hovered.width }}
                  animate={{ opacity: 1, left: hovered.left, width: hovered.width }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8,
                  }}
                  style={{ zIndex: 0 }}
                  layoutId="nav-highlight"
                />
              )}
            </AnimatePresence>

            <ul ref={navRef} className="flex items-center gap-0 relative z-10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || 
                  (link.href !== "/" && location.pathname + location.hash === link.href);
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onMouseEnter={handleMouseEnter}
                      className={`block px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-200 relative z-10 whitespace-nowrap ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Right side - CTA */}
        <div className="hidden md:flex items-center">
          <Button
            variant="hero"
            size="sm"
            asChild
            className="rounded-full"
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Falar com Especialista
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-2 pointer-events-auto"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 bg-background/90 backdrop-blur-2xl border border-border/40 rounded-2xl overflow-hidden pointer-events-auto z-50"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors py-3 px-4 rounded-xl"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-border/30">
                <Button variant="hero" size="sm" asChild className="w-full rounded-full">
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    Falar com Especialista
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
