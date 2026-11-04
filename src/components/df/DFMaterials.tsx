import { DF_MATERIALS, DF_DEFAULT_MESSAGE } from "@/df/config";
import { dfWhatsAppLink } from "@/df/whatsapp";
import { trackDFWhatsAppClick } from "@/df/analytics";
import { SectionHeader, WhatsAppIcon, DFWhatsAppButton } from "./DFPrimitives";

export default function DFMaterials() {
  return (
    <section id="materiais" className="border-b border-line bg-concrete py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Materiais Aceitos"
          title="O que você precisa retirar?"
          lead="Confira os resíduos comuns de construção civil e reforma recebidos em nossas caçambas no Distrito Federal. Clique em qualquer material para consultar disponibilidade rápida."
        />

        <div className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 sm:gap-4">
          {DF_MATERIALS.map((material, idx) => (
            <a
              key={material}
              href={dfWhatsAppLink(DF_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDFWhatsAppClick(`material_${idx + 1}`)}
              className="group flex flex-col justify-between rounded-xl border border-line bg-white p-5 transition-all duration-150 hover:border-[#25D366] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
              aria-label={`Consultar caçamba para ${material}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-mist group-hover:text-iron">
                  #{String(idx + 1).padStart(2, "0")}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-iron group-hover:text-[#25D366]">
                  <WhatsAppIcon className="h-3.5 w-3.5 fill-current" />
                  <span className="hidden sm:inline">Consultar</span>
                </span>
              </div>
              <p className="mt-4 font-display text-base font-bold uppercase tracking-tight text-ink group-hover:text-black">
                {material}
              </p>
            </a>
          ))}
        </div>

        {/* Aviso de conformidade / resíduos perigosos */}
        <div className="mt-10 rounded-xl border-l-4 border-signal bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal text-xs font-black text-ink" aria-hidden="true">
              !
            </span>
            <div className="text-sm leading-relaxed text-iron">
              <strong className="font-semibold text-ink">Aviso sobre triagem e destinação:</strong>{" "}
              Alguns resíduos possuem regras específicas de acondicionamento e destinação. Consulte nossa equipe antes da contratação.{" "}
              <span className="block mt-1 text-xs text-mist">
                Não é permitido o descarte de resíduos químicos, baterias, óleos, tintas automotivas, lixo hospitalar ou quaisquer materiais classificados como perigosos.
              </span>
            </div>
          </div>
        </div>

        {/* Botão verde de WhatsApp ao final da seção */}
        <div className="mt-12 flex justify-center">
          <DFWhatsAppButton
            message={DF_DEFAULT_MESSAGE}
            location="materials_bottom"
            size="lg"
            className="w-full sm:w-auto"
          >
            Consultar material no WhatsApp
          </DFWhatsAppButton>
        </div>
      </div>
    </section>
  );
}
