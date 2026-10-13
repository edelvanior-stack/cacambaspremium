import { DF_MESSAGES, DF_PROOFS } from "@/df/config";
import { DFWhatsAppButton, SectionHeader } from "./DFPrimitives";

export default function DFCompliance() {
  return (
    <section id="conformidade" className="border-b border-line bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Lado esquerdo: texto institucional sério */}
          <div>
            <SectionHeader
              eyebrow="Responsabilidade e Normas"
              title="Descarte responsável do início ao fim."
              lead="Resíduos da construção civil possuem regras próprias no Distrito Federal. Toda a movimentação de entulho deve observar as exigências de coleta, transporte e destinação adequadas para evitar passivos ambientais e transtornos à sua obra."
            />

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-iron">
              <p>
                O transporte de agregados reciclados, alvenaria e sobras de obras requer planejamento logístico para que o material seja encaminhado para pontos autorizados de descarte ou reciclagem, preservando as vias urbanas do DF.
              </p>
              <p>
                Nossa equipe orienta sobre a separação correta dos materiais no canteiro, assegurando que sua contratação ocorra dentro das práticas recomendadas para o Distrito Federal.
              </p>
            </div>

            {/* Espaço reservado para provas documentadas (vazio por padrão até fornecimento) */}
            {DF_PROOFS.length > 0 && (
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6">
                {DF_PROOFS.map((proof) => (
                  <div key={proof.label} className="rounded-[3px] bg-concrete p-4">
                    <span className="font-display text-xl font-bold text-ink">{proof.value}</span>
                    <span className="mt-1 block text-xs text-mist">{proof.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Lado direito: foto real da operação de caçamba em Brasília */}
          <div className="relative overflow-hidden rounded-[4px] border border-line bg-concrete shadow-[0_8px_30px_rgba(12,13,15,0.06)]">
            <picture>
              <source media="(max-width: 640px)" srcSet="/images/df/df-operacao-720.webp" type="image/webp" />
              <img
                src="/images/df/df-operacao.webp"
                alt="Caminhão poliguindaste realizando içamento de caçamba de entulho em obra no Distrito Federal"
                width={1200}
                height={896}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </picture>
            <div className="p-4 bg-ink text-white/80 text-xs font-mono">
              Operação logística de locação de caçambas no Distrito Federal
            </div>
          </div>
        </div>

        {/* Bloco educativo: Vai colocar a caçamba em área pública? */}
        <div className="mt-16 rounded-[4px] border border-line bg-graphite p-7 text-white sm:p-10 lg:p-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="eyebrow text-signal">
                Legislação Urbana do DF
              </span>
              <h3 className="display mt-3 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                Vai colocar a caçamba em área pública?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                No Distrito Federal existem regras específicas para posicionamento, sinalização e tempo de permanência de caçambas estacionárias em vias, calçadas e logradouros públicos. É fundamental planejar o ponto exato da entrega para não obstruir pedestres, garagens ou o trânsito local.
              </p>
              <p className="mt-2 text-xs font-medium text-signal">
                Fale com nossa equipe para orientar a contratação conforme as normas da sua região administrativa.
              </p>
            </div>

            <div className="w-full shrink-0 lg:w-auto">
              <DFWhatsAppButton
                message={DF_MESSAGES.publicArea}
                event="whatsapp_region"
                location="compliance_public_area"
                variant="signal"
                size="lg"
                className="w-full lg:w-auto"
              >
                Orientar contratação
              </DFWhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
