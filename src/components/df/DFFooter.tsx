import { WHATSAPP_DF_DISPLAY, WHATSAPP_DF, DF_COMPANY_INFO } from "@/df/config";
import { DFLogo, type DFPageKey } from "./DFHeader";
import { trackDFPhoneClick } from "@/df/analytics";

export default function DFFooter({ currentPage = "df" }: { currentPage?: DFPageKey }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-concrete py-12 text-iron sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-start">
          <div>
            <a href="/df" className="inline-block">
              <DFLogo tone="dark" />
            </a>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-iron">
              Aluguel e locação de caçambas estacionárias de entulho para obras, reformas e construções em Brasília, Regiões Administrativas do Distrito Federal e Entorno do DF.
            </p>
            <div className="mt-4 border-t border-line/60 pt-3 text-[11px] leading-relaxed text-iron space-y-0.5">
              <p className="font-bold text-ink">{DF_COMPANY_INFO.name}</p>
              <p>CNPJ: {DF_COMPANY_INFO.cnpj}</p>
              <p>{DF_COMPANY_INFO.addressLine1}</p>
              <p>{DF_COMPANY_INFO.addressLine2}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-xs">
            <div>
              <p className="font-display font-bold uppercase tracking-wider text-ink">Páginas DF</p>
              <ul className="mt-3 space-y-2 text-iron font-medium">
                <li>
                  <a href="/df" className="hover:text-ink transition-colors">
                    Brasília e DF
                  </a>
                </li>
                <li>
                  <a href="/valor/orcamento" className="hover:text-ink transition-colors">
                    Valores e Orçamento
                  </a>
                </li>
                <li>
                  <a href="/entorno/cacamba" className="hover:text-ink transition-colors">
                    Caçamba no Entorno do DF
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-display font-bold uppercase tracking-wider text-ink">Seções</p>
              <ul className="mt-3 space-y-2 text-iron font-medium">
                <li>
                  <a href={currentPage === "df" ? "#valores" : "/valor/orcamento#tabela-valores"} className="hover:text-ink transition-colors">
                    Tamanhos e Valores
                  </a>
                </li>
                <li>
                  <a href={currentPage === "df" ? "#como-funciona" : "/df#como-funciona"} className="hover:text-ink transition-colors">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href={currentPage === "df" ? "#regioes" : "/df#regioes"} className="hover:text-ink transition-colors">
                    Regiões Atendidas
                  </a>
                </li>
                <li>
                  <a href={currentPage === "df" ? "#materiais" : "/df#materiais"} className="hover:text-ink transition-colors">
                    Materiais Aceitos
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-display font-bold uppercase tracking-wider text-ink">Atendimento e Legal</p>
              <ul className="mt-3 space-y-2 text-iron font-medium">
                {WHATSAPP_DF_DISPLAY && (
                  <li>
                    <a
                      href={`tel:+${WHATSAPP_DF}`}
                      onClick={() => trackDFPhoneClick(`footer_phone_${currentPage}`)}
                      className="text-ink font-mono font-bold hover:text-black transition-colors"
                    >
                      {WHATSAPP_DF_DISPLAY}
                    </a>
                  </li>
                )}
                <li>
                  <a href="/df/politica-de-privacidade" className="hover:text-ink transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="/df/termos-de-uso" className="hover:text-ink transition-colors">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-[11px] text-iron sm:flex-row sm:items-center">
          <p>
            © {currentYear} Caçambas Premium · CNPJ: {DF_COMPANY_INFO.cnpj} · Operação Distrito Federal e Entorno. Todos os direitos reservados.
          </p>
          <p>Atendimento em Brasília, DF e Entorno via WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
