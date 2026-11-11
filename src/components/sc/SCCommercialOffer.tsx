import { SC_HERO_MESSAGE, SC_HERO_CITIES_LINE, SC_PRICE_DISCLAIMER } from "@/sc/config";
import { SCWhatsAppButton } from "./SCPrimitives";

export default function SCCommercialOffer() {
  return (
    <section
      id="orcamento"
      aria-labelledby="sc-oferta-title"
      className="border-b border-line bg-concrete py-10 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-ink bg-white p-5 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(12,13,15,0.08)]">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-md bg-signal px-3 py-1 font-display text-xs font-extrabold uppercase tracking-wider text-ink">
                Orçamento Rápido • Santa Catarina
              </span>

              <h2
                id="sc-oferta-title"
                className="display mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-ink"
              >
                Precisa de uma caçamba?
              </h2>

              <div className="mt-3 flex flex-wrap items-baseline gap-2">
                <span className="font-display text-lg sm:text-2xl font-extrabold uppercase text-ink">
                  A partir de
                </span>
                <span className="rounded-lg bg-signal px-2.5 py-0.5 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-ink">
                  R$199,99
                </span>
              </div>

              <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-ink">
                Informe sua cidade, material e tamanho para consultar disponibilidade e valor.
              </p>

              <p className="mt-1.5 text-xs text-iron">
                {SC_PRICE_DISCLAIMER}
              </p>

              <p className="mt-3 text-xs sm:text-sm font-semibold text-iron border-t border-line pt-3">
                {SC_HERO_CITIES_LINE}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col items-stretch lg:items-end justify-center gap-3">
              <SCWhatsAppButton
                message={SC_HERO_MESSAGE}
                contextEvent="sc_quote_click"
                label="commercial_offer_cta"
                size="lg"
                className="w-full"
              >
                Pedir Orçamento no WhatsApp
              </SCWhatsAppButton>
              <p className="text-center text-xs text-iron">
                Atendimento direto pelo WhatsApp para sua obra ou reforma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
