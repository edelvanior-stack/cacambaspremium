import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { trackWhatsAppClick } from "../lib/analytics";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Por Que Nós", href: "#porque" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Regiões", href: "#regioes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const WA_LINK = "https://wa.me/5547992089548";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FIX: flex-wrap to prevent logo+CTA collision on narrow screens */}
        <div className="flex items-center justify-between h-16 md:h-20 gap-2">
          <a href="#inicio" className="flex-shrink-0">
            <Logo light={!scrolled} size="sm" />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-slate-600 hover:text-orange-600 hover:bg-orange-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* FIX: Show text only on sm+ to prevent overflow on 320px */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('navbar_desktop')}
              className={`flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange-600/25 ${
                scrolled ? "hidden sm:flex" : "hidden sm:flex"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Orçamento Grátis</span>
              <span className="sm:hidden">Orçamento</span>
            </a>
            {/* FIX: Always show WhatsApp icon on mobile when not scrolled */}
            {!scrolled && (
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('navbar_mobile')}
                className="flex sm:hidden items-center justify-center w-9 h-9 rounded-lg bg-orange-600 text-white"
                aria-label="Solicitar orçamento pelo WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Abrir menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-slate-100 px-4 pb-4 pt-2 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className="block px-4 py-3 rounded-xl text-slate-700 hover:text-orange-600 hover:bg-orange-50 font-medium text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              handleClick();
              trackWhatsAppClick('navbar_mobile_menu');
            }}
            className="flex items-center justify-center gap-2 bg-orange-600 text-white px-5 py-3 rounded-xl text-sm font-semibold mt-2"
          >
            <Phone className="w-4 h-4" />
            Solicitar Orçamento Grátis
          </a>
        </div>
      </div>
    </nav>
  );
}
