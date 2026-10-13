import { DF_FAQ } from "@/df/config";
import { SectionHeader } from "./DFPrimitives";

export default function DFFAQ() {
  return (
    <section id="duvidas" className="border-b border-line bg-concrete py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
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
              className="group rounded-[4px] border border-line bg-white transition-colors duration-150 open:border-iron"
            >
              <summary className="flex cursor-pointer select-none items-center justify-between gap-4 p-5 sm:p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal">
                <span className="flex items-center gap-3.5 text-left font-display text-base font-bold uppercase tracking-tight text-ink sm:text-lg">
                  <span className="font-mono text-xs font-semibold text-mist">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {item.q}
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
              <div className="border-t border-line/60 px-5 pb-6 pt-4 text-sm leading-relaxed text-iron sm:px-6 sm:text-base">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
