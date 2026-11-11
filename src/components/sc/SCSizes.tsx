import { SC_SIZE_MESSAGE, SC_PRICE_DISCLAIMER } from "@/sc/config";
import { SCWhatsAppButton, SectionHeader } from "./SCPrimitives";

const VOLUME_PROFILES = [
  {
    tag: "Pequeno Volume",
    title: "Reformas pontuais e reparos",
    description:
      "Indicado para reformas de banheiro, cozinha, troca de pisos ou pequenas manutenções residenciais e comerciais.",
  },
  {
    tag: "Médio Volume",
    title: "Obras residenciais e comerciais",
    description:
      "Adequado para etapas de alvenaria, quebras de parede, reformas completas de imóveis e limpeza de obras em andamento.",
  },
  {
    tag: "Demanda Maior",
    title: "Construções e limpeza de lotes",
    description:
      "Voltado para obras com geração contínua de entulho, movimentação de caliça ou limpeza de terrenos na região.",
  },
];

export default function SCSizes() {
  return (
    <section id="tamanhos" className="border-b border-line bg-white py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Orientação de Capacidade"
              title="Diferentes tamanhos de caçamba conforme a sua obra"
              lead="Opções de caçamba estacionária a partir de R$199,99 para atender desde pequenas reformas até construções completas e limpeza de terrenos."
            />

            <div className="mt-6 rounded-2xl border-l-4 border-signal bg-concrete p-5 sm:p-6 shadow-sm">
              <p className="text-sm sm:text-base font-semibold leading-relaxed text-ink">
                Informe o volume aproximado do material e ajudamos a identificar a opção disponível para sua necessidade.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-iron">
                {SC_PRICE_DISCLAIMER}
              </p>
            </div>

            <div className="mt-6">
              <SCWhatsAppButton
                message={SC_SIZE_MESSAGE}
                contextEvent="sc_quote_click"
                label="sizes_cta"
                size="lg"
                className="w-full sm:w-auto"
              >
                Pedir Orçamento no WhatsApp
              </SCWhatsAppButton>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {VOLUME_PROFILES.map((profile, idx) => (
              <div
                key={profile.title}
                className="rounded-2xl border border-line bg-concrete p-5 sm:p-6 shadow-[0_2px_12px_rgba(12,13,15,0.03)]"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-iron">{profile.tag}</span>
                  <span className="font-mono text-xs font-bold text-mist">0{idx + 1}</span>
                </div>
                <h3 className="display mt-2 text-lg sm:text-xl font-extrabold uppercase tracking-tight text-ink">
                  {profile.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-iron">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
