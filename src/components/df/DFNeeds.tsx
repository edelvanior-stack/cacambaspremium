import { DF_NEEDS, DF_MESSAGES, needMessage } from "@/df/config";
import { DFWhatsAppButton, SectionHeader, WhatsAppIcon } from "./DFPrimitives";
import { dfWhatsAppLink } from "@/df/whatsapp";
import { trackDF } from "@/df/analytics";

export default function DFNeeds() {
  return (
    <section id="necessidade" className="border-b border-line bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Orientação por Tipo de Obra"
          title="Qual é a necessidade da sua obra?"
          lead="Identifique o perfil da sua reforma para indicarmos a solução correta de caçamba. Sem medidas ou valores estimados sem avaliação."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {DF_NEEDS.map((need) => (
            <div
              key={need.id}
              className="flex flex-col justify-between rounded-[4px] border border-line bg-concrete p-7 transition-all duration-200 hover:border-iron hover:shadow-[0_8px_30px_rgba(12,13,15,0.06)] sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <span className="eyebrow text-mist">
                    Nível 0{need.level}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-line text-xs font-bold text-iron">
                    {need.level}
                  </span>
                </div>

                <h3 className="display mt-6 text-2xl font-bold uppercase tracking-tight text-ink">
                  {need.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-iron">
                  {need.description}
                </p>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={dfWhatsAppLink(needMessage(need.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackDF("whatsapp_size_help", `need_${need.id}`)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[3px] border border-ink/20 bg-white py-3 font-display text-xs font-bold uppercase tracking-[0.06em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Consultar para este perfil</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA "Não sei qual preciso" */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[4px] border border-line bg-graphite p-6 text-white sm:flex-row sm:p-8">
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
              Não sei qual caçamba preciso
            </p>
            <p className="mt-1 text-sm text-mist">
              Fale com a equipe e ajudamos você a escolher a opção exata para seu espaço e resíduo.
            </p>
          </div>
          <DFWhatsAppButton
            message={DF_MESSAGES.sizeHelp}
            event="whatsapp_size_help"
            location="needs_bottom"
            variant="signal"
            size="md"
            className="w-full shrink-0 sm:w-auto"
          >
            Ajudar a escolher
          </DFWhatsAppButton>
        </div>
      </div>
    </section>
  );
}
