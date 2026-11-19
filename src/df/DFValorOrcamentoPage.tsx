import { useState, useRef, type FormEvent } from "react";
import DFHeader from "@/components/df/DFHeader";
import DFFooter from "@/components/df/DFFooter";
import DFStickyBar from "@/components/df/DFStickyBar";
import {
  DFAnchorButton,
  DFWhatsAppButton,
  PhoneIcon,
  SectionHeader,
  WhatsAppIcon,
} from "@/components/df/DFPrimitives";
import {
  DF_ACTIVE_REGIONS,
  DF_ENTORNO_CITIES,
  DF_MATERIALS,
  DF_PRIMARY_REGIONS,
  DF_SECONDARY_REGIONS,
  DF_SIZES_PRICING,
  DF_VALOR_DEFAULT_MESSAGE,
  DF_VALOR_FAQ,
  WHATSAPP_DF,
  WHATSAPP_DF_DISPLAY,
  quickQuoteMessage,
  sizePricingMessage,
} from "./config";
import { dfWhatsAppLink } from "./whatsapp";
import {
  trackDFPhoneClick,
  trackDFQuoteFormEvent,
  trackDFWhatsAppClick,
} from "./analytics";

const DELIVERY_STEPS = [
  {
    number: "01",
    title: "Envie os dados da obra",
    description:
      "Informe no WhatsApp ou no formulário o tamanho desejado, o endereço no DF ou Entorno e o tipo de material a ser retirado.",
  },
  {
    number: "02",
    title: "Confirme disponibilidade e condições",
    description:
      "Nossa equipe valida a rota, o acesso para o caminhão poliguindaste, o valor correspondente e as regras de permanência antes de fechar.",
  },
  {
    number: "03",
    title: "Entrega, permanência e retirada",
    description:
      "Entregamos a caçamba no ponto combinado e realizamos a retirada e destinação adequada do entulho conforme o acordado.",
  },
];

export default function DFValorOrcamentoPage() {
  const [tamanho, setTamanho] = useState("Caçamba 3m³ (R$ 199,99)");
  const [regiao, setRegiao] = useState(DF_ACTIVE_REGIONS[0]?.name || "");
  const [bairro, setBairro] = useState("");
  const [material, setMaterial] = useState(DF_MATERIALS[0] || "");
  const [data, setData] = useState("");
  const startedRef = useRef(false);

  const handleStart = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackDFQuoteFormEvent("quote_form_start", "valor_orcamento_form");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let dataFormatada = "";
    if (data) {
      const parts = data.split("-");
      dataFormatada = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : data;
    }

    const message = quickQuoteMessage({
      tamanho,
      regiao: regiao.trim(),
      bairro: bairro.trim(),
      material: material.trim(),
      data: dataFormatada,
    });

    trackDFQuoteFormEvent("quote_form_submit", "valor_orcamento_form", {
      selected_size: tamanho,
      selected_region: regiao.trim(),
      selected_material: material.trim(),
    });
    trackDFWhatsAppClick("valor_orcamento_form");
    window.open(dfWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white text-ink selection:bg-signal selection:text-ink pb-20 sm:pb-0 font-sans antialiased overflow-x-hidden">
      <DFHeader currentPage="orcamento" />

      <main id="conteudo">
        {/* 1. HERO — Resposta imediata de preço, tamanhos e CTA WhatsApp */}
        <section id="topo" aria-labelledby="valor-h1" className="relative isolate overflow-hidden bg-ink text-white">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/images/df/df-hero-mobile.webp"
              width={460}
              height={640}
              type="image/webp"
            />
            <img
              src="/images/df/df-hero.webp"
              alt="Valores e orçamento de aluguel de caçamba de entulho em Brasília e DF"
              width={1376}
              height={768}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_35%] sm:object-center"
            />
          </picture>
          <div className="absolute inset-0 -z-10 bg-slate-950/85 sm:bg-slate-950/80" aria-hidden="true" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5 pb-10 sm:pt-12 sm:pb-16">
            {/* Breadcrumb visível */}
            <nav aria-label="Breadcrumb" className="mb-4 text-xs text-white/70">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <a href="/df" className="hover:text-signal transition-colors">
                    Brasília e DF
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-signal font-semibold" aria-current="page">
                  Valores e Orçamento
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 mb-3 border border-white/10">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                  Tabela Oficial DF · Orçamento rápido no WhatsApp
                </span>
              </div>

              <h1
                id="valor-h1"
                className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-white leading-[1.12] mb-3 tracking-tight"
              >
                Valores e Orçamento de{" "}
                <span className="text-signal">Caçamba</span> em Brasília e DF
              </h1>

              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-5">
                Consulte quanto custa alugar uma caçamba de entulho em Brasília e no Distrito Federal: opções de 3m³ a 10m³ a partir de <strong className="text-signal">R$ 199,99</strong> para obras, reformas e construções.
              </p>

              {/* Resumo rápido de valores acima da dobra */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
                {DF_SIZES_PRICING.map((item) => (
                  <a
                    key={item.size}
                    href={dfWhatsAppLink(sizePricingMessage(item.size))}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackDFWhatsAppClick(`valor_hero_chip_${item.size}m3`)}
                    className="rounded-xl border border-white/15 bg-black/50 px-3 py-2.5 hover:border-signal transition-colors"
                  >
                    <span className="block font-display text-[11px] font-bold uppercase tracking-wider text-signal">
                      {item.size}m³
                    </span>
                    <span className="block font-display text-sm sm:text-base font-extrabold text-white mt-0.5">
                      {item.price}
                    </span>
                  </a>
                ))}
              </div>

              {/* CTAs principais */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4">
                <DFWhatsAppButton
                  message={DF_VALOR_DEFAULT_MESSAGE}
                  location="valor_hero_primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Pedir orçamento no WhatsApp
                </DFWhatsAppButton>
                <div className="grid grid-cols-2 gap-2 sm:contents">
                  <a
                    href={`tel:+${WHATSAPP_DF}`}
                    onClick={() => trackDFPhoneClick("valor_hero_phone")}
                    className="group inline-flex h-12 sm:h-14 min-h-[48px] sm:min-h-[56px] w-full sm:w-auto items-center justify-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border border-white/35 bg-white/10 hover:border-white hover:bg-white/15 px-3 sm:px-6 font-display text-xs sm:text-base font-extrabold uppercase tracking-wide text-white transition-all"
                  >
                    <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span>Ligar agora</span>
                  </a>
                  <DFAnchorButton
                    href="#solicitar-orcamento"
                    size="lg"
                    className="w-full sm:w-auto !h-12 sm:!h-14 !min-h-[48px] sm:!min-h-[56px] !px-3 sm:!px-6 !text-xs sm:!text-base"
                  >
                    Montar Orçamento
                  </DFAnchorButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUANTO CUSTA E QUAIS TAMANHOS ESTÃO DISPONÍVEIS */}
        <section id="tabela-valores" className="border-b border-line bg-concrete py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Quanto Custa Alugar uma Caçamba"
              title="Tamanhos disponíveis e valores oficiais no DF"
              lead="Compare as cinco capacidades de caçamba de entulho e clique na opção mais próxima da sua obra para confirmar disponibilidade e entrega no WhatsApp."
            />

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {DF_SIZES_PRICING.map((item) => (
                <article
                  key={item.size}
                  className="flex flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-[0_2px_12px_rgba(12,13,15,0.04)] transition-colors hover:border-ink"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-line pb-3">
                      <span className="eyebrow text-mist">{item.profile}</span>
                      <span className="rounded-md bg-signal/25 px-2 py-0.5 font-display text-xs font-extrabold text-ink">
                        {item.size}m³
                      </span>
                    </div>

                    <h3 className="display mt-4 text-xl font-extrabold uppercase tracking-tight text-ink">
                      {item.label}
                    </h3>

                    <div className="mt-3">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-mist">
                        Valor oficial DF
                      </span>
                      <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink mt-1">
                        {item.price}
                      </p>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-iron">
                      {item.idealFor}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-line/60">
                    <DFWhatsAppButton
                      message={sizePricingMessage(item.size)}
                      location={`valor_card_${item.size}m3`}
                      size="lg"
                      className="w-full px-3 text-xs sm:text-sm"
                    >
                      Pedir {item.size}m³
                    </DFWhatsAppButton>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl border-l-4 border-signal bg-white p-5 sm:p-6 shadow-sm text-sm text-iron leading-relaxed">
              <strong className="font-semibold text-ink">Condições transparentes antes da contratação:</strong>{" "}
              A disponibilidade de entrega, rota de atendimento (incluindo cidades do Entorno do DF), classificação do material e regras de permanência em área pública são sempre confirmados pelo WhatsApp antes de fechar o pedido.
            </div>
          </div>
        </section>

        {/* 3. FORMULÁRIO RÁPIDO DE ORÇAMENTO */}
        <section id="solicitar-orcamento" className="border-b border-line bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Como Solicitar um Orçamento"
              title="Monte seu pedido e receba retorno no WhatsApp"
              lead="Selecione o tamanho da caçamba, sua região no DF ou Entorno e o tipo de material. Ao clicar no botão verde, sua mensagem já vai pronta para agilizar o atendimento."
              align="center"
            />

            <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_6px_28px_rgba(12,13,15,0.06)]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-ink px-6 py-3.5 text-white">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
                  <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-signal">
                    Solicitação Rápida de Orçamento
                  </span>
                </div>
                <span className="text-xs text-white/75">Atendimento direto: {WHATSAPP_DF_DISPLAY}</span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Tamanho */}
                  <div className="sm:col-span-2">
                    <label htmlFor="val-tamanho" className="block text-xs font-bold uppercase tracking-wider text-iron">
                      Tamanho da caçamba
                    </label>
                    <select
                      id="val-tamanho"
                      value={tamanho}
                      onFocus={handleStart}
                      onChange={(e) => {
                        handleStart();
                        setTamanho(e.target.value);
                      }}
                      className="mt-2 w-full rounded-xl border border-line bg-concrete px-4 py-3.5 text-sm font-medium text-ink focus:border-ink focus:bg-white focus:outline-none"
                    >
                      {DF_SIZES_PRICING.map((item) => (
                        <option key={item.size} value={`${item.label} (${item.price})`}>
                          {item.label} — {item.price} ({item.profile})
                        </option>
                      ))}
                      <option value="Preciso de ajuda para escolher">
                        Não sei o tamanho — preciso de ajuda para escolher
                      </option>
                    </select>
                  </div>

                  {/* Região */}
                  <div>
                    <label htmlFor="val-regiao" className="block text-xs font-bold uppercase tracking-wider text-iron">
                      Região do DF ou cidade do Entorno
                    </label>
                    <select
                      id="val-regiao"
                      value={regiao}
                      onFocus={handleStart}
                      onChange={(e) => {
                        handleStart();
                        setRegiao(e.target.value);
                      }}
                      required
                      className="mt-2 w-full rounded-xl border border-line bg-concrete px-4 py-3.5 text-sm font-medium text-ink focus:border-ink focus:bg-white focus:outline-none"
                    >
                      <optgroup label="Brasília e Regiões do DF">
                        {DF_ACTIVE_REGIONS.map((r) => (
                          <option key={r.name} value={r.name}>
                            {r.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Entorno do DF (sob consulta)">
                        {DF_ENTORNO_CITIES.map((c) => (
                          <option key={c.slug} value={c.name}>
                            {c.name} (GO)
                          </option>
                        ))}
                      </optgroup>
                      <option value="Outra região do DF">Outra região do DF</option>
                    </select>
                  </div>

                  {/* Bairro */}
                  <div>
                    <label htmlFor="val-bairro" className="block text-xs font-bold uppercase tracking-wider text-iron">
                      Bairro, quadra ou setor
                    </label>
                    <input
                      id="val-bairro"
                      type="text"
                      value={bairro}
                      onFocus={handleStart}
                      onChange={(e) => setBairro(e.target.value)}
                      placeholder="Ex: Águas Claras Sul, QNA, Jardim Ingá"
                      className="mt-2 w-full rounded-xl border border-line bg-concrete px-4 py-3.5 text-sm font-medium text-ink placeholder:text-mist focus:border-ink focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Material */}
                  <div>
                    <label htmlFor="val-material" className="block text-xs font-bold uppercase tracking-wider text-iron">
                      Tipo de material
                    </label>
                    <select
                      id="val-material"
                      value={material}
                      onFocus={handleStart}
                      onChange={(e) => {
                        handleStart();
                        setMaterial(e.target.value);
                      }}
                      required
                      className="mt-2 w-full rounded-xl border border-line bg-concrete px-4 py-3.5 text-sm font-medium text-ink focus:border-ink focus:bg-white focus:outline-none"
                    >
                      {DF_MATERIALS.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Data */}
                  <div>
                    <label htmlFor="val-data" className="block text-xs font-bold uppercase tracking-wider text-iron">
                      Data desejada <span className="font-normal lowercase text-mist">(opcional)</span>
                    </label>
                    <input
                      id="val-data"
                      type="date"
                      value={data}
                      onFocus={handleStart}
                      onChange={(e) => setData(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-line bg-concrete px-4 py-3.5 text-sm font-medium text-ink focus:border-ink focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-7 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
                  <p className="text-xs text-iron text-center sm:text-left">
                    Sem compromisso. Você recebe a confirmação de disponibilidade e valor antes de contratar.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl sm:rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] px-6 py-4 min-h-[56px] font-display text-xs sm:text-base font-extrabold uppercase tracking-wide text-white transition-all active:bg-[#1DA851] shadow-[0_4px_16px_rgba(37,211,102,0.28)] cursor-pointer"
                  >
                    <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 fill-current" />
                    <span>Enviar orçamento no WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* 4. COMO FUNCIONA ENTREGA E RETIRADA + OPERAÇÃO REAL */}
        <section id="entrega-retirada" className="border-b border-line bg-concrete py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Entrega e Retirada"
              title="Como funciona a locação de caçamba"
              lead="Processo direto pelo WhatsApp, sem burocracia, com respeito às normas de vias públicas e destinação adequada dos resíduos de obra."
            />

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {DELIVERY_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-line bg-white p-6 sm:p-7 shadow-[0_2px_12px_rgba(12,13,15,0.03)]"
                >
                  <span className="font-display text-3xl font-extrabold text-signal">{step.number}</span>
                  <h3 className="display mt-4 text-xl font-bold uppercase tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-iron">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 items-center gap-8 rounded-2xl border border-line bg-white p-6 sm:p-8 lg:grid-cols-2">
              <div>
                <span className="eyebrow text-iron">Materiais e Regras no DF</span>
                <h3 className="display mt-2 text-2xl font-extrabold uppercase tracking-tight text-ink">
                  O que pode ir na caçamba e cuidados na entrega
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-iron">
                  Recebemos resíduos comuns de construção e reforma como entulho de alvenaria, concreto, tijolos, argamassa, terra, madeira e gesso conforme classificação operacional.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-iron">
                  Não é permitido o descarte de resíduos químicos, baterias, óleos, tintas automotivas ou lixo hospitalar. Para colocação em vias e calçadas do DF, orientamos conforme a legislação local aplicável.
                </p>
                <div className="mt-6">
                  <DFWhatsAppButton
                    message={DF_VALOR_DEFAULT_MESSAGE}
                    location="valor_delivery_cta"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    Tirar dúvida sobre minha obra
                  </DFWhatsAppButton>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-line bg-concrete">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/images/df/df-operacao-720.webp" type="image/webp" />
                  <img
                    src="/images/df/df-operacao.webp"
                    alt="Operação real de entrega e retirada de caçamba de entulho em Brasília e DF"
                    width={1200}
                    height={896}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* 5. REGIÕES ATENDIDAS */}
        <section id="regioes-atendidas" className="border-b border-line bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Cobertura"
              title="Quais regiões são atendidas"
              lead="Atendemos Brasília, Regiões Administrativas do Distrito Federal e cidades do Entorno do DF sob consulta de endereço."
            />

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-line bg-concrete p-6">
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <h3 className="font-display text-sm font-extrabold uppercase tracking-wider text-ink">
                    Brasília e Distrito Federal
                  </h3>
                  <a href="/df" className="text-xs font-bold text-ink underline decoration-signal underline-offset-4">
                    Página DF →
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[...DF_PRIMARY_REGIONS, ...DF_SECONDARY_REGIONS].map((r) => (
                    <span
                      key={r.name}
                      className="rounded-lg border border-line bg-white px-3 py-1.5 text-xs font-semibold text-iron"
                    >
                      {r.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-concrete p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-line pb-3">
                    <h3 className="font-display text-sm font-extrabold uppercase tracking-wider text-ink">
                      Entorno do DF (sob consulta)
                    </h3>
                    <a
                      href="/entorno/cacamba"
                      className="text-xs font-bold text-ink underline decoration-signal underline-offset-4"
                    >
                      Página Entorno →
                    </a>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {DF_ENTORNO_CITIES.map((city) => (
                      <a
                        key={city.slug}
                        href={`/entorno/cacamba#${city.slug}`}
                        className="rounded-lg border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink hover:border-ink transition-colors"
                      >
                        {city.name} (GO)
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-line">
                  <DFWhatsAppButton
                    message={DF_VALOR_DEFAULT_MESSAGE}
                    location="valor_regions_cta"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    Confirmar atendimento no meu endereço
                  </DFWhatsAppButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FAQ */}
        <section id="duvidas-orcamento" className="border-b border-line bg-concrete py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Dúvidas sobre Preços e Contratação"
              title="Perguntas Frequentes"
              lead="Respostas diretas sobre valores, tamanhos, entrega e solicitação de orçamento."
              align="center"
            />

            <div className="mt-10 space-y-3.5">
              {DF_VALOR_FAQ.map((item, idx) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-line bg-white transition-colors open:border-iron"
                >
                  <summary className="flex cursor-pointer select-none items-center justify-between gap-3 p-4 sm:p-5">
                    <span className="flex items-center gap-3 text-left font-display text-sm font-bold uppercase tracking-tight text-ink sm:text-base">
                      <span className="font-mono text-xs font-semibold text-mist shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span>{item.q}</span>
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
                  <div className="border-t border-line/60 px-4 pb-5 pt-3.5 text-sm leading-relaxed text-iron sm:px-6">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTA FINAL */}
        <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center lg:px-8">
            <p className="eyebrow text-signal">Orçamento Sem Complicação</p>
            <h2 className="display mt-4 text-3xl font-extrabold uppercase sm:text-4xl lg:text-5xl text-white">
              Pronto para pedir sua caçamba no DF?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/80">
              Chame no WhatsApp, informe o endereço e o material da obra e receba a confirmação de disponibilidade e valor antes de contratar.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <DFWhatsAppButton
                message={DF_VALOR_DEFAULT_MESSAGE}
                location="valor_final_cta"
                size="lg"
                className="w-full sm:w-auto"
              >
                Pedir orçamento no WhatsApp
              </DFWhatsAppButton>
            </div>
          </div>
        </section>
      </main>

      <DFFooter currentPage="orcamento" />
      <DFStickyBar currentPage="orcamento" />
    </div>
  );
}
