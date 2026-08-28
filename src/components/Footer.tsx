import { useState } from "react";
import { MapPin, Phone, ArrowUp, ShieldCheck } from "lucide-react";
import Logo from "./Logo";
import LegalModal from "./LegalModal";
import { trackWhatsAppClick } from "../lib/analytics";

const WA_LINK = "https://wa.me/5547992089548";

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
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-14">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Logo light size="sm" className="mb-4" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">
              Locação de caçambas de entulho em Itajaí e litoral catarinense.
            </p>
            <div className="text-xs text-slate-400 space-y-1 mb-4">
              <p><strong className="text-slate-300">Razão Social:</strong> Helio da Rosa Junior</p>
              <p><strong className="text-slate-300">Nome Fantasia:</strong> Jr Entulhos (Caçambas Premium)</p>
              <p><strong className="text-slate-300">CNPJ:</strong> 08.038.618/0001-52</p>
              <p><strong className="text-slate-300">Abertura:</strong> 30/05/2006 (~20 anos de atuação)</p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('footer_phone_1')}
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-xs sm:text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              (47) 99208-9548
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

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-300 mb-4 sm:mb-5">
              Endereço Oficial
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Rua Eredes Serpa, 1003, Bairro Cordeiros, Itajaí - SC, CEP 88310-630
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('footer_phone_2')} className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors">
                  (47) 99208-9548
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
                <ShieldCheck className="w-4 h-4" />
                Empresa Regularizada • CNPJ Ativo
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Jr Entulhos / Caçambas Premium (Helio da Rosa Junior - CNPJ 08.038.618/0001-52). Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setModalType("terms")}
              className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors underline cursor-pointer"
            >
              Termos de Uso
            </button>
            <button
              onClick={() => setModalType("privacy")}
              className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors underline cursor-pointer"
            >
              Política de Privacidade
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-24 sm:bottom-28 right-4 sm:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center shadow-lg transition-all hover:-translate-y-1"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <LegalModal
        isOpen={!!modalType}
        onClose={() => setModalType(null)}
        type={modalType}
      />
    </footer>
  );
}
