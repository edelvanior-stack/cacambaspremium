import { DF_MATERIALS, materialMessage } from "@/df/config";
import { dfWhatsAppLink } from "@/df/whatsapp";
import { trackDF } from "@/df/analytics";
import { SectionHeader, WhatsAppIcon } from "./DFPrimitives";

export default function DFMaterials() {
  return (
    <section id="materiais" className="border-b border-line bg-concrete py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Materiais Aceitos"
          title="O que você precisa retirar?"
          lead="Confira os resíduos comuns de construção civil e reforma recebidos em nossas caçambas no Distrito Federal. Clique em qualquer material para consultar disponibilidade rápida."
        />

        <div className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 sm:gap-4">
          {DF_MATERIALS.map((material, idx) => (
            <a
              key={material}
              href={dfWhatsAppLink(materialMessage(material))}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDF("material_click", `material_${idx + 1}`, { material })}
              className="group flex flex-col justify-between rounded-[4px] border border-line bg-white p-5 transition-all duration-150 hover:border-ink hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
              aria-label={`Consultar caçamba para ${material}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-mist group-hover:text-iron">
                  #{String(idx + 1).padStart(2, "0")}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-iron group-hover:text-ink">
                  <WhatsAppIcon className="h-3.5 w-3.5 text-signal" />
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
        <div className="mt-10 rounded-[4px] border-l-4 border-signal bg-white p-6 shadow-sm">
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
      </div>
    </section>
  );
}
