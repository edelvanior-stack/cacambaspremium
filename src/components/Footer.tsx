import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, CreditCard, ShieldCheck, ArrowUp, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { trackWhatsAppClick, trackPhoneClick } from "../lib/analytics";
import { BUSINESS } from "@/config/business";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Tamanhos", href: "#tamanhos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Regiões", href: "#regioes" },
  { label: "Dúvidas", href: "#faq" },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openLegal, setOpenLegal] = useState<"terms" | "privacy" | null>(null);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand & Empresa */}
          <div>
            <Logo light size="sm" className="mb-4" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">
              Locação de caçambas de entulho em Curitiba e Região Metropolitana.
            </p>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-400">
              <p>
                <span className="text-slate-300 font-semibold">Razão / Identificação:</span> {BUSINESS.brand}
              </p>
              <p>
                <span className="text-slate-300 font-semibold">CNPJ:</span> 08.038.618/0001-52
              </p>
            </div>
            <div className="mt-4">
              <a
                href={BUSINESS.whatsappLinkWithMessage}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("footer_whatsapp")}
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm font-semibold transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp: {BUSINESS.whatsappDisplay}
              </a>
            </div>
          </div>

          {/* Endereço & Contato */}
          <div>
            <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-300 mb-4 sm:mb-5">
              Endereço
            </h4>
            <div className="space-y-3 text-slate-400 text-xs sm:text-sm leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span>
                  {BUSINESS.address.street}, {BUSINESS.address.number} — {BUSINESS.address.neighborhood}
                  <br />
                  {BUSINESS.address.city} - {BUSINESS.address.state}, CEP {BUSINESS.address.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a
                  href={`tel:+5541984594225`}
                  onClick={() => trackPhoneClick("footer_phone_call")}
                  className="hover:text-white transition-colors"
                >
                  Telefone: {BUSINESS.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Atendimento e Pagamento */}
          <div>
            <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-300 mb-4 sm:mb-5">
              Atendimento e Pagamento
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 font-medium">Horário de Atendimento:</p>
                  <p>Segunda a Sexta: 08h às 18h</p>
                  <p>Sábado: 08h às 12h</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CreditCard className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 font-medium">Formas de Pagamento:</p>
                  <p>Pix, link de pagamento, boleto, transferência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-300 mb-4 sm:mb-5">
              Navegação
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Informações Legais Inline (Sem Popups) */}
        <div className="border-t border-slate-800 pt-6 mt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-slate-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} {BUSINESS.brand} — CNPJ 08.038.618/0001-52. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-xs sm:text-sm">
              <button
                type="button"
                onClick={() => setOpenLegal(openLegal === "terms" ? null : "terms")}
                className="text-slate-400 hover:text-white underline inline-flex items-center gap-1 cursor-pointer transition-colors"
                aria-expanded={openLegal === "terms"}
              >
                Termos de Uso
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openLegal === "terms" ? "rotate-180" : ""}`} />
              </button>
              <button
                type="button"
                onClick={() => setOpenLegal(openLegal === "privacy" ? null : "privacy")}
                className="text-slate-400 hover:text-white underline inline-flex items-center gap-1 cursor-pointer transition-colors"
                aria-expanded={openLegal === "privacy"}
              >
                Política de Privacidade
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openLegal === "privacy" ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>

          {/* Painel expansível inline (não modal) */}
          {openLegal && (
            <div className="mt-4 bg-slate-800/80 rounded-2xl p-5 sm:p-6 border border-slate-700/80 text-xs sm:text-sm text-slate-300 leading-relaxed animate-fadeIn">
              {openLegal === "terms" ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                    <ShieldCheck className="w-4 h-4 text-orange-400" />
                    <span>Termos de Uso — {BUSINESS.brand}</span>
                  </div>
                  <p>
                    <strong>1. Condições Gerais:</strong> A locação de caçambas é realizada pela empresa {BUSINESS.brand} (CNPJ: 08.038.618/0001-52), localizada na {BUSINESS.address.street}, {BUSINESS.address.number} - {BUSINESS.address.neighborhood}, {BUSINESS.address.city} - {BUSINESS.address.state}.
                  </p>
                  <p>
                    <strong>2. Permanência:</strong> O período padrão de permanência da caçamba no local da obra é de até 7 dias, acordado na confirmação do pedido. Prorrogações podem ser alinhadas pelo WhatsApp {BUSINESS.whatsappDisplay}.
                  </p>
                  <p>
                    <strong>3. Resíduos Permitidos:</strong> Destinada a entulho de obras, reformas, alvenaria, tijolos, cerâmica, concreto e madeira de construção. É expressamente proibido descarte de lixo doméstico, resíduos químicos ou hospitalares.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Política de Privacidade (LGPD) — {BUSINESS.brand}</span>
                  </div>
                  <p>
                    <strong>1. Tratamento de Dados:</strong> Em conformidade com a LGPD (Lei nº 13.709/2018), os dados fornecidos pelo cliente (nome, telefone, endereço para entrega e detalhes da obra) são utilizados estritamente para elaboração de orçamento, entrega, recolhimento de caçambas e emissão de notas fiscais.
                  </p>
                  <p>
                    <strong>2. Segurança e Não Compartilhamento:</strong> Seus dados não são vendidos ou compartilhados com terceiros para fins de marketing. O acesso é restrito à nossa equipe operacional.
                  </p>
                  <p>
                    <strong>3. Direitos do Titular:</strong> Você pode solicitar confirmação, retificação ou exclusão de seus dados a qualquer momento via WhatsApp no número {BUSINESS.whatsappDisplay}.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll to top — positioned higher on mobile to clear the WhatsApp bar */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-8 right-4 sm:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-800/90 hover:bg-slate-700 text-white flex items-center justify-center shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}
    </footer>
  );
}
