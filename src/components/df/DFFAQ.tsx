import { DF_FAQ, DF_DEFAULT_MESSAGE } from "@/df/config";
import { SectionHeader, DFWhatsAppButton } from "./DFPrimitives";

export default function DFFAQ() {
  return (
    <section id="duvidas" className="border-b border-line bg-concrete py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tire Suas Dúvidas"
          title="Perguntas Frequentes"
          lead="Informações objetivas sobre locação, regras operacionais e contratação de caçambas em Brasília e no DF."
          align="center"
        />

        <div className="mt-12 space-y-3.5">
          {DF_FAQ.map((item, idx) => (
            <details
              key={item.q}
              className="group rounded-xl border border-line bg-white transition-colors duration-150 open:border-iron"
            >
              <summary className="flex cursor-pointer select-none items-center justify-between gap-3 p-4 sm:p-5 lg:p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal">
                <span className="flex items-center gap-3 text-left font-display text-sm font-bold uppercase tracking-tight text-ink sm:text-base lg:text-lg">
                  <span className="font-mono text-xs font-semibold text-mist shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{item.q}</span>
                </span>
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-concrete text-iron transition-transform duration-200 group-open:rotate-180 group-open:bg-signal group-open:text-ink"
                  aria-hidden="true"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2.5 4.5l3.5 3.5 3.5-3.5" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-line/60 px-4 pb-5 pt-3.5 text-sm leading-relaxed text-iron sm:px-6 sm:pb-6 sm:pt-4 sm:text-base">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        {/* Botão verde de WhatsApp ao final da seção */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm font-medium text-iron">Ainda tem dúvidas sobre a locação de caçambas no DF?</p>
          <DFWhatsAppButton
            message={DF_DEFAULT_MESSAGE}
            location="faq_bottom"
            size="lg"
            className="w-full sm:w-auto"
          >
            Tirar dúvidas no WhatsApp
          </DFWhatsAppButton>
        </div>
      </div>
    </section>
  );
}
