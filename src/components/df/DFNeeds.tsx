import { DF_NEEDS, DF_DEFAULT_MESSAGE } from "@/df/config";
import { DFWhatsAppButton, SectionHeader, WhatsAppIcon } from "./DFPrimitives";
import { dfWhatsAppLink } from "@/df/whatsapp";
import { trackDFWhatsAppClick } from "@/df/analytics";

export default function DFNeeds() {
  return (
    <section id="necessidade" className="border-b border-line bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Orientação por Tipo de Obra"
          title="Qual é a necessidade da sua obra?"
          lead="Identifique o perfil da sua reforma para indicarmos a solução correta de caçamba. Sem medidas ou valores estimados sem avaliação."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {DF_NEEDS.map((need) => (
            <div
              key={need.id}
              className="flex flex-col justify-between rounded-2xl border border-line bg-concrete p-7 transition-all duration-200 hover:border-iron hover:shadow-[0_8px_30px_rgba(12,13,15,0.06)] sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <span className="eyebrow text-mist">
                    Perfil 0{need.level}
                  </span>
                  {/* Indicador de escala de volume */}
                  <div className="flex items-center gap-1" aria-label={`Nível ${need.level} de volume`}>
                    {[1, 2, 3].map((bar) => (
                      <span
                        key={bar}
                        className={`h-2 w-3 rounded-[1px] transition-colors ${
                          bar <= need.level ? "bg-signal" : "bg-line"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                <h3 className="display mt-6 text-2xl font-bold uppercase tracking-tight text-ink">
                  {need.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-iron">
                  {need.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-line/60">
                <a
                  href={dfWhatsAppLink(DF_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackDFWhatsAppClick(`need_${need.id}`)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ink/20 bg-white py-3.5 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wide text-ink transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current" />
                  <span>Consultar este perfil</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA "Não sei qual preciso" com botão verde ao final da seção */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-graphite p-6 text-white sm:flex-row sm:p-8">
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-white sm:text-xl uppercase">
              Não sei qual caçamba preciso
            </p>
            <p className="mt-1 text-sm text-mist">
              Fale com a equipe e ajudamos você a escolher a opção exata para seu espaço e resíduo no DF.
            </p>
          </div>
          <DFWhatsAppButton
            message={DF_DEFAULT_MESSAGE}
            location="needs_bottom"
            size="md"
            className="w-full shrink-0 sm:w-auto"
          >
            Pedir ajuda no WhatsApp
          </DFWhatsAppButton>
        </div>
      </div>
    </section>
  );
}
