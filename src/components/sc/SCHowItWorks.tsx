import { SC_STEPS, SC_URGENCY_MESSAGE } from "@/sc/config";
import { SCWhatsAppButton, SectionHeader } from "./SCPrimitives";

export default function SCHowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-line bg-concrete py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Atendimento Direto"
          title="Como funciona a consulta e locação"
          lead="Processo simples em 5 passos pelo WhatsApp para verificar disponibilidade de caçamba na sua cidade."
        />

        {/* 5 Passos */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SC_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="flex flex-col justify-between rounded-2xl border border-line bg-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(12,13,15,0.03)]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span className="font-display text-2xl font-extrabold text-signal-strong">
                    0{idx + 1}
                  </span>
                  <span className="eyebrow text-mist">{item.step}</span>
                </div>
                <h3 className="display mt-4 text-base sm:text-lg font-extrabold uppercase tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-iron">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 6. Bloco de Urgência */}
        <div
          id="disponibilidade"
          className="mt-12 rounded-2xl border border-line bg-ink p-6 sm:p-8 lg:p-10 text-white shadow-[0_8px_30px_rgba(12,13,15,0.12)]"
        >
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="eyebrow text-signal">Programação Regional</span>
              <h3 className="display mt-2 text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                Precisa de uma caçamba hoje ou nos próximos dias?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/80">
                Consulte a disponibilidade para seu endereço.
              </p>
            </div>

            <div className="w-full shrink-0 lg:w-auto">
              <SCWhatsAppButton
                message={SC_URGENCY_MESSAGE}
                contextEvent="sc_quote_click"
                label="urgency_ver_disponibilidade"
                size="lg"
                className="w-full lg:w-auto"
              >
                Ver Disponibilidade
              </SCWhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
