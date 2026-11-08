import { SC_FAQ, SC_QUOTE_MESSAGE } from "@/sc/config";
import { SCWhatsAppButton, SectionHeader } from "./SCPrimitives";

export default function SCFAQ() {
  return (
    <section id="duvidas" className="border-b border-line bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Dúvidas Frequentes"
          title="Perguntas sobre aluguel de caçamba"
          lead="Respostas diretas sobre atendimento, materiais e consulta de disponibilidade em Camboriú e região."
          align="center"
        />

        <div className="mt-10 space-y-3.5">
          {SC_FAQ.map((item, idx) => (
            <details
              key={item.q}
              className="group rounded-xl border border-line bg-concrete transition-colors duration-150 open:border-ink open:bg-white"
            >
              <summary className="flex cursor-pointer select-none items-center justify-between gap-3 p-4 sm:p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal">
                <span className="flex items-center gap-3 text-left font-display text-sm font-bold uppercase tracking-tight text-ink sm:text-base">
                  <span className="font-mono text-xs font-semibold text-mist shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{item.q}</span>
                </span>
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-iron transition-transform duration-200 group-open:rotate-180 group-open:bg-signal group-open:text-ink"
                  aria-hidden="true"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2.5 4.5l3.5 3.5 3.5-3.5" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-line/60 px-4 pb-5 pt-3.5 text-sm leading-relaxed text-iron sm:px-6">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm font-medium text-iron">
            Precisa confirmar disponibilidade para o seu endereço em Santa Catarina?
          </p>
          <SCWhatsAppButton
            message={SC_QUOTE_MESSAGE}
            contextEvent="sc_quote_click"
            label="faq_bottom_cta"
            size="lg"
            className="w-full sm:w-auto"
          >
            Consultar Disponibilidade no WhatsApp
          </SCWhatsAppButton>
        </div>
      </div>
    </section>
  );
}
