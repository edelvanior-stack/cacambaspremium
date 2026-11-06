import { DF_SIZES_PRICING, sizePricingMessage } from "@/df/config";
import { DFWhatsAppButton, SectionHeader } from "./DFPrimitives";

export default function DFPricing() {
  return (
    <section id="valores" className="border-b border-line bg-concrete py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tamanhos e Preços"
          title="Valores das caçambas"
          lead="Escolha a capacidade ideal para a sua obra ou reforma em Brasília e no DF e solicite diretamente pelo WhatsApp."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {DF_SIZES_PRICING.map((item) => (
            <div
              key={item.size}
              className="flex flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-[0_2px_12px_rgba(12,13,15,0.04)] transition-colors hover:border-ink"
            >
              <div>
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span className="eyebrow text-mist">Capacidade</span>
                  <span className="rounded-md bg-signal/20 px-2 py-0.5 font-display text-xs font-extrabold text-ink">
                    {item.size}m³
                  </span>
                </div>

                <h3 className="display mt-5 text-xl font-extrabold uppercase tracking-tight text-ink">
                  {item.label}
                </h3>

                <div className="mt-4">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-mist">
                    Valor oficial
                  </span>
                  <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink mt-1">
                    {item.price}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-line/60">
                <DFWhatsAppButton
                  message={sizePricingMessage(item.size)}
                  location={`pricing_${item.size}m3`}
                  size="lg"
                  className="w-full px-4 text-xs sm:text-sm"
                >
                  Pedir esta caçamba
                </DFWhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
