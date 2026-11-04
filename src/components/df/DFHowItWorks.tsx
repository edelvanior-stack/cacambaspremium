import { SectionHeader, DFWhatsAppButton } from "./DFPrimitives";
import { DF_DEFAULT_MESSAGE } from "@/df/config";

const STEPS = [
  {
    number: "01",
    title: "Chame no WhatsApp",
    description: "Envie o endereço no DF, o tipo de material e para quando precisa da caçamba.",
  },
  {
    number: "02",
    title: "Confirme o orçamento",
    description: "Receba disponibilidade e valores diretamente no WhatsApp antes de contratar.",
  },
  {
    number: "03",
    title: "Entrega e retirada",
    description: "A caçamba é entregue no local indicado com permanência acordada e retirada pontualmente.",
  },
];

export default function DFHowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-line bg-concrete py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Processo Direto"
          title="Sua obra limpa sem complicação."
          lead="Três passos transparentes para locação e destinação no Distrito Federal, sem burocracia e com atendimento direto pelo WhatsApp."
        />

        {/* 3 passos */}
        <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between rounded-2xl border border-line bg-white p-7 shadow-[0_2px_12px_rgba(12,13,15,0.03)] sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <span className="font-display text-3xl font-extrabold tracking-tight text-signal sm:text-4xl">
                    {step.number}
                  </span>
                  <span className="eyebrow text-mist">
                    Passo {index + 1} de 3
                  </span>
                </div>

                <h3 className="display mt-6 text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-iron">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mist">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                Operação ágil no DF
              </div>
            </div>
          ))}
        </div>

        {/* Botão verde de WhatsApp ao final da seção */}
        <div className="mt-12 flex justify-center">
          <DFWhatsAppButton
            message={DF_DEFAULT_MESSAGE}
            location="how_it_works_bottom"
            size="lg"
            className="w-full sm:w-auto"
          >
            Pedir orçamento no WhatsApp
          </DFWhatsAppButton>
        </div>
      </div>
    </section>
  );
}
