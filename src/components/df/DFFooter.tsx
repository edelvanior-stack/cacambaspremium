import { WHATSAPP_DF_DISPLAY, DF_COMPANY_INFO } from "@/df/config";
import { DFLogo } from "./DFHeader";

export default function DFFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-concrete py-12 text-iron sm:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <DFLogo tone="dark" />
            <p className="mt-3 max-w-md text-xs leading-relaxed text-mist">
              Locação de caçambas estacionárias para coleta e destinação de entulho e resíduos da construção civil em Brasília e Regiões Administrativas do Distrito Federal.
            </p>
            <div className="mt-4 border-t border-line/60 pt-3 text-[11px] leading-relaxed text-mist space-y-0.5">
              <p className="font-bold text-iron">{DF_COMPANY_INFO.name}</p>
              <p>CNPJ: {DF_COMPANY_INFO.cnpj}</p>
              <p>{DF_COMPANY_INFO.addressLine1}</p>
              <p>{DF_COMPANY_INFO.addressLine2}</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 text-xs font-semibold uppercase tracking-wider text-iron sm:flex-row sm:items-center sm:gap-6 lg:gap-8">
            <a href="#como-funciona" className="hover:text-ink transition-colors">
              Como Funciona
            </a>
            <a href="#regioes" className="hover:text-ink transition-colors">
              Regiões Atendidas
            </a>
            <a href="#materiais" className="hover:text-ink transition-colors">
              Materiais
            </a>
            <a href="#duvidas" className="hover:text-ink transition-colors">
              Dúvidas
            </a>
            <a href="/df/politica-de-privacidade" className="hover:text-ink transition-colors text-iron/90">
              Política de Privacidade
            </a>
            <a href="/df/termos-de-uso" className="hover:text-ink transition-colors text-iron/90">
              Termos de Uso
            </a>
            {WHATSAPP_DF_DISPLAY && (
              <span className="text-ink font-mono normal-case">
                {WHATSAPP_DF_DISPLAY}
              </span>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-[11px] text-mist sm:flex-row sm:items-center">
          <p>© {currentYear} Caçambas Premium · CNPJ: {DF_COMPANY_INFO.cnpj} · Operação Distrito Federal. Todos os direitos reservados.</p>
          <p className="text-mist">Atendimento exclusivo DF via WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
