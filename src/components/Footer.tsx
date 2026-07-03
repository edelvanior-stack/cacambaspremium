import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import Logo from "./Logo";
import { trackWhatsAppClick } from "../lib/analytics";

const WA_LINK = "https://wa.me/5547992579095";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Por Que Nós", href: "#porque" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Regiões", href: "#regioes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const SERVICES = [
  "Caçamba de Entulho",
  "Limpeza de Terreno",
  "Resíduos de Obra",
  "Resíduos Comerciais",
  "Reformas Residenciais",
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        {/* FIX: Better grid on small screens */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-14">
          {/* Brand — span 2 cols on mobile */}
          <div className="col-span-2 sm:col-span-1">
            <Logo light size="sm" className="mb-4" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
              Empresa especializada em locação de caçambas de entulho no litoral norte de Santa Catarina.
              Mais de 12 anos de experiência no mercado.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('footer_phone_1')}
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-xs sm:text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              (47) 99257-9095
            </a>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-300 mb-4 sm:mb-5">
              Links Rápidos
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-300 mb-4 sm:mb-5">
              Serviços
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — span 2 cols on mobile */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-300 mb-4 sm:mb-5">
              Contato
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-400 text-xs sm:text-sm">Itajaí, Santa Catarina — Brasil</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('footer_phone_2')} className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors">
                  +55 47 99257-9095
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:contato@cacambaspremium.com.br" className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors">
                  contato@locacamba.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-slate-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Caçambas Premium — Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#faq" className="text-slate-500 hover:text-slate-300 text-xs sm:text-sm transition-colors">
              Termos de Uso
            </a>
            <a href="#faq" className="text-slate-500 hover:text-slate-300 text-xs sm:text-sm transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>

      {/* FIX: Adjust back-to-top to not conflict with WhatsApp button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 sm:bottom-28 right-4 sm:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center shadow-lg transition-all hover:-translate-y-1"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </footer>
  );
}
