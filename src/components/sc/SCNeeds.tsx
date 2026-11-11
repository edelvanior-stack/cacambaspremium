import { SC_NEEDS, SC_PRICE_DISCLAIMER } from "@/sc/config";
import { scWhatsAppLink } from "@/sc/whatsapp";
import { trackSCWhatsAppClick } from "@/sc/analytics";
import { SectionHeader, WhatsAppIcon } from "./SCPrimitives";

export default function SCNeeds() {
  return (
    <section id="servicos" className="border-b border-line bg-concrete py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Soluções por Finalidade"
          title="Aluguel de caçamba para obra, reforma e entulho"
          lead="Caçambas a partir de R$199,99 com atendimento em Camboriú, Balneário Camboriú, Itajaí, Navegantes, Itapema, Penha, Balneário Piçarras e Brusque."
        />

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SC_NEEDS.map((item, idx) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-line bg-white p-5 sm:p-6 transition-all duration-150 hover:border-ink hover:shadow-[0_6px_24px_rgba(12,13,15,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span className="eyebrow text-mist">Serviço 0{idx + 1}</span>
                  <span className="rounded bg-signal/35 px-2 py-0.5 font-mono text-[10px] font-bold text-ink">
                    A partir de R$199,99
                  </span>
                </div>

                <h3 className="display mt-4 text-lg sm:text-xl font-extrabold uppercase tracking-tight text-ink">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-iron">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-line/60">
                <a
                  href={scWhatsAppLink(item.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackSCWhatsAppClick("sc_quote_click", `need_${item.id}`, {
                      service_type: item.title,
                    })
                  }
                  className="inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] px-3 py-3 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wide text-white transition-colors shadow-sm"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 fill-current" />
                  <span>{item.ctaLabel}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-iron">
          {SC_PRICE_DISCLAIMER}
        </p>
      </div>
    </section>
  );
}
