import { SC_TRUST_ITEMS, SC_COMPANY_INFO, SC_QUOTE_MESSAGE } from "@/sc/config";
import { SCWhatsAppButton, SectionHeader } from "./SCPrimitives";

export default function SCTrustAndCompany() {
  return (
    <section id="confianca" className="border-b border-line bg-concrete py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 8. Confiança */}
        <SectionHeader
          eyebrow="Compromisso e Transparência"
          title="Por que escolher a Caçambas Premium?"
          lead="Atendimento claro, objetivo e voltado para agilizar a rotina de obras e reformas na região de Camboriú."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SC_TRUST_ITEMS.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-white p-6 shadow-[0_2px_12px_rgba(12,13,15,0.03)]"
            >
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="font-mono text-xs font-bold text-mist">0{idx + 1}</span>
                <span className="h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
              </div>
              <h3 className="display mt-4 text-lg font-extrabold uppercase tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-iron">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 9. Dados Empresariais + Imagem Operacional */}
        <div
          id="empresa"
          className="mt-14 grid grid-cols-1 items-center gap-8 rounded-2xl border border-line bg-white p-6 sm:p-8 lg:grid-cols-12 lg:p-10 shadow-[0_4px_24px_rgba(12,13,15,0.05)]"
        >
          <div className="lg:col-span-7">
            <span className="eyebrow text-iron">Dados Empresariais</span>
            <h3 className="display mt-2 text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-ink">
              {SC_COMPANY_INFO.name}
            </h3>
            <p className="mt-2 text-sm text-iron">
              Informações cadastrais e endereço de referência da operação em Santa Catarina:
            </p>

            <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 border-t border-line pt-5 text-sm">
              <div className="rounded-xl bg-concrete p-4">
                <dt className="text-xs font-bold uppercase tracking-wider text-mist">Razão / Marca</dt>
                <dd className="mt-1 font-display text-base font-extrabold text-ink">{SC_COMPANY_INFO.name}</dd>
              </div>
              <div className="rounded-xl bg-concrete p-4">
                <dt className="text-xs font-bold uppercase tracking-wider text-mist">CNPJ</dt>
                <dd className="mt-1 font-mono text-base font-bold text-ink">{SC_COMPANY_INFO.cnpj}</dd>
              </div>
              <div className="rounded-xl bg-concrete p-4">
                <dt className="text-xs font-bold uppercase tracking-wider text-mist">Endereço</dt>
                <dd className="mt-1 font-medium text-ink leading-snug">
                  {SC_COMPANY_INFO.street}
                  <br />
                  {SC_COMPANY_INFO.neighborhood} — {SC_COMPANY_INFO.cityState}
                  <br />
                  {SC_COMPANY_INFO.cep}
                </dd>
              </div>
              <div className="rounded-xl bg-concrete p-4">
                <dt className="text-xs font-bold uppercase tracking-wider text-mist">WhatsApp Oficial</dt>
                <dd className="mt-1 font-mono text-base font-bold text-ink">{SC_COMPANY_INFO.whatsappDisplay}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <SCWhatsAppButton
                message={SC_QUOTE_MESSAGE}
                contextEvent="sc_quote_click"
                label="company_info_cta"
                size="lg"
                className="w-full sm:w-auto"
              >
                Falar com a Equipe no WhatsApp
              </SCWhatsAppButton>
            </div>
          </div>

          <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-line bg-concrete">
            <img
              src="/images/sc/sc-operacao.webp"
              alt="Caminhão poliguindaste e caçambas estacionárias - Caçambas Premium SC"
              width={800}
              height={552}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="bg-ink px-4 py-3 text-xs font-mono text-white/80">
              Atendimento em Camboriú, Balneário Camboriú, Itajaí e região
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
