import { SC_COMPANY_INFO, SC_HERO_MESSAGE } from "@/sc/config";
import { scWhatsAppLink } from "@/sc/whatsapp";
import { trackSCWhatsAppClick } from "@/sc/analytics";
import { SCLogo } from "./SCHeader";
import { WhatsAppIcon } from "./SCPrimitives";

export default function SCFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink py-12 text-white/80 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-6">
            <SCLogo tone="light" />
            <p className="mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-white/70">
              Aluguel de caçambas para obras, reformas, limpeza de terrenos e retirada de entulho com atendimento em Camboriú, Balneário Camboriú, Itajaí, Navegantes, Itapema, Penha, Balneário Piçarras e Brusque.
            </p>
            <div className="mt-4 space-y-1 text-xs text-white/75">
              <p className="font-bold text-white">{SC_COMPANY_INFO.name}</p>
              <p>CNPJ: {SC_COMPANY_INFO.cnpj}</p>
              <p>
                {SC_COMPANY_INFO.street} — {SC_COMPANY_INFO.neighborhood}
              </p>
              <p>
                {SC_COMPANY_INFO.cityState} — {SC_COMPANY_INFO.cep}
              </p>
              <p>WhatsApp: {SC_COMPANY_INFO.whatsappDisplay}</p>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col items-start md:items-end justify-between gap-5">
            <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-white/75">
              <a href="#servicos" className="hover:text-white transition-colors">
                Serviços
              </a>
              <a href="#tamanhos" className="hover:text-white transition-colors">
                Tamanhos
              </a>
              <a href="#materiais" className="hover:text-white transition-colors">
                Materiais
              </a>
              <a href="#como-funciona" className="hover:text-white transition-colors">
                Como Funciona
              </a>
              <a href="#cidades" className="hover:text-white transition-colors">
                Cidades
              </a>
              <a href="#duvidas" className="hover:text-white transition-colors">
                FAQ
              </a>
            </div>

            <a
              href={scWhatsAppLink(SC_HERO_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSCWhatsAppClick("sc_quote_click", "footer_whatsapp")}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] px-5 py-3 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wide text-white transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0 fill-current" />
              <span>WhatsApp: {SC_COMPANY_INFO.whatsappDisplay}</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-white/60 sm:flex-row sm:items-center">
          <p>
            © {currentYear} {SC_COMPANY_INFO.name} · CNPJ: {SC_COMPANY_INFO.cnpj} · Camboriú - SC. Todos os direitos reservados.
          </p>
          <p>Atendimento via WhatsApp: {SC_COMPANY_INFO.whatsappDisplay}</p>
        </div>
      </div>
    </footer>
  );
}
