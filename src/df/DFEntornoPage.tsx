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
  DF_COMPANY_INFO,
  DF_ENTORNO_CITIES,
  DF_ENTORNO_DEFAULT_MESSAGE,
  DF_ENTORNO_FAQ,
  DF_MATERIALS,
  DF_SIZES_PRICING,
  WHATSAPP_DF,
  WHATSAPP_DF_DISPLAY,
  cityWhatsAppMessage,
  quickQuoteMessage,
} from "./config";
import { dfWhatsAppLink } from "./whatsapp";
import {
  trackDFPhoneClick,
  trackDFQuoteFormEvent,
  trackDFWhatsAppClick,
} from "./analytics";

export default function DFEntornoPage() {
  const [cidade, setCidade] = useState(DF_ENTORNO_CITIES[0]?.name || "Luziânia");
  const [bairro, setBairro] = useState("");
  const [tamanho, setTamanho] = useState("Caçamba 3m³");
  const [material, setMaterial] = useState(DF_MATERIALS[0] || "");
  const [data, setData] = useState("");
  const startedRef = useRef(false);

  const handleStart = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackDFQuoteFormEvent("quote_form_start", "entorno_quote_form");
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
      regiao: cidade.trim(),
      bairro: bairro.trim(),
      tamanho,
      material: material.trim(),
      data: dataFormatada,
    });

    trackDFQuoteFormEvent("quote_form_submit", "entorno_quote_form", {
      selected_city: cidade.trim(),
      selected_size: tamanho,
      selected_material: material.trim(),
    });
    trackDFWhatsAppClick("entorno_quote_form");
    window.open(dfWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white text-ink selection:bg-signal selection:text-ink pb-20 sm:pb-0 font-sans antialiased overflow-x-hidden">
      <DFHeader currentPage="entorno" />

      <main id="conteudo">
        {/* 1. HERO — Específico do Entorno do DF */}
        <section id="topo" aria-labelledby="entorno-h1" className="relative isolate overflow-hidden bg-ink text-white">
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
              alt="Aluguel de caçamba e disk entulho no Entorno do DF: Luziânia, Valparaíso de Goiás, Cidade Ocidental, Novo Gama, Águas Lindas e Santo Antônio do Descoberto"
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
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4 text-xs text-white/70">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <a href="/df" className="hover:text-signal transition-colors">
                    Brasília e DF
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-signal font-semibold" aria-current="page">
                  Caçamba no Entorno do DF
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 mb-3 border border-white/10">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                  Disk Entulho Entorno do DF · Atendimento sob consulta de endereço
                </span>
              </div>

              <h1
                id="entorno-h1"
                className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-white leading-[1.12] mb-3 tracking-tight"
              >
                Aluguel de <span className="text-signal">Caçamba</span> no Entorno do DF
              </h1>

              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                Atendimento para obras, reformas e retirada de entulho em{" "}
                <strong className="text-white">
                  Luziânia, Valparaíso de Goiás, Cidade Ocidental, Novo Gama, Águas Lindas de Goiás e Santo Antônio do Descoberto
                </strong>
                , mediante confirmação de endereço e rota pelo WhatsApp.
              </p>

              {/* Navegação direta para cada cidade */}
              <div className="flex flex-wrap gap-2 mb-6">
                {DF_ENTORNO_CITIES.map((city) => (
                  <a
                    key={city.slug}
                    href={`#${city.slug}`}
                    className="rounded-lg border border-white/20 bg-black/45 px-3 py-1.5 text-xs font-semibold text-white/95 hover:border-signal hover:text-signal transition-colors"
                  >
                    {city.name}
                  </a>
                ))}
              </div>

              {/* CTAs principais */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4">
                <DFWhatsAppButton
                  message={DF_ENTORNO_DEFAULT_MESSAGE}
                  location="entorno_hero_primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Consultar minha cidade no WhatsApp
                </DFWhatsAppButton>
                <div className="grid grid-cols-2 gap-2 sm:contents">
                  <a
                    href={`tel:+${WHATSAPP_DF}`}
                    onClick={() => trackDFPhoneClick("entorno_hero_phone")}
                    className="group inline-flex h-12 sm:h-14 min-h-[48px] sm:min-h-[56px] w-full sm:w-auto items-center justify-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border border-white/35 bg-white/10 hover:border-white hover:bg-white/15 px-3 sm:px-6 font-display text-xs sm:text-base font-extrabold uppercase tracking-wide text-white transition-all"
                  >
                    <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span>Ligar agora</span>
                  </a>
                  <DFAnchorButton
                    href="#cidades-entorno"
                    size="lg"
                    className="w-full sm:w-auto !h-12 sm:!h-14 !min-h-[48px] sm:!min-h-[56px] !px-3 sm:!px-6 !text-xs sm:!text-base"
                  >
                    Ver Cidades
                  </DFAnchorButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SEÇÃO ESPECÍFICA POR CIDADE DO ENTORNO */}
        <section id="cidades-entorno" className="border-b border-line bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Cidades Atendidas no Entorno"
              title="Atendimento dedicado por município"
              lead="Cada cidade do Entorno possui características próprias de acesso, condomínios e obras. Selecione sua cidade abaixo para consultar disponibilidade e valor para o seu endereço."
            />

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {DF_ENTORNO_CITIES.map((city) => (
                <article
                  key={city.slug}
                  id={city.slug}
                  className="scroll-mt-20 flex flex-col justify-between rounded-2xl border border-line bg-concrete p-6 sm:p-8 shadow-[0_2px_14px_rgba(12,13,15,0.04)]"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                      <span className="eyebrow text-iron">{city.badge}</span>
                      <span className="rounded-md bg-signal/25 px-2.5 py-0.5 font-display text-[11px] font-extrabold uppercase tracking-wider text-ink">
                        {city.name} · {city.state}
                      </span>
                    </div>

                    <h3 className="display mt-4 text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-ink">
                      {city.keywordTitle}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-ink font-medium">
                      {city.summary}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-iron">
                      {city.localDetails}
                    </p>

                    <div className="mt-4 rounded-xl border border-line bg-white p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-ink">
                        Orientação para entrega em {city.name}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-iron">
                        {city.accessTip}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {city.neighborhoods.map((area) => (
                        <span
                          key={area}
                          className="rounded-md border border-line bg-white px-2.5 py-1 text-[11px] font-semibold text-iron"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-line">
                    <DFWhatsAppButton
                      message={cityWhatsAppMessage(city.name)}
                      location={`entorno_city_${city.slug}`}
                      size="lg"
                      className="w-full"
                    >
                      {city.ctaLabel}
                    </DFWhatsAppButton>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-line bg-concrete/70 p-5 text-xs sm:text-sm text-iron leading-relaxed">
              <strong className="text-ink font-semibold">Transparência operacional:</strong>{" "}
              Nossa sede cadastrada fica em {DF_COMPANY_INFO.addressFull} (CNPJ {DF_COMPANY_INFO.cnpj}). Realizamos atendimento logístico às cidades listadas do Entorno do DF mediante consulta prévia de endereço, rota e viabilidade de acesso para o caminhão.
            </div>
          </div>
        </section>

        {/* 3. FORMULÁRIO DE CONSULTA PARA O ENTORNO */}
        <section id="consulta-entorno" className="border-b border-line bg-concrete py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Consulta de Rota e Valor"
              title="Consulte disponibilidade na sua cidade"
              lead="Informe a cidade do Entorno, o bairro ou setor e o tipo de resíduo para confirmar valor e entrega diretamente no WhatsApp."
              align="center"
            />

            <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_6px_28px_rgba(12,13,15,0.06)]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-ink px-6 py-3.5 text-white">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
                  <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-signal">
                    Orçamento Entorno do DF
                  </span>
                </div>
                <span className="text-xs text-white/75">WhatsApp: {WHATSAPP_DF_DISPLAY}</span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Cidade */}
                  <div>
                    <label htmlFor="ent-cidade" className="block text-xs font-bold uppercase tracking-wider text-iron">
                      Cidade do Entorno
                    </label>
                    <select
                      id="ent-cidade"
                      value={cidade}
                      onFocus={handleStart}
                      onChange={(e) => {
                        handleStart();
                        setCidade(e.target.value);
                      }}
                      required
                      className="mt-2 w-full rounded-xl border border-line bg-concrete px-4 py-3.5 text-sm font-medium text-ink focus:border-ink focus:bg-white focus:outline-none"
                    >
                      {DF_ENTORNO_CITIES.map((c) => (
                        <option key={c.slug} value={c.name}>
                          {c.name} (GO)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Bairro / Setor */}
                  <div>
                    <label htmlFor="ent-bairro" className="block text-xs font-bold uppercase tracking-wider text-iron">
                      Bairro, setor ou condomínio
                    </label>
                    <input
                      id="ent-bairro"
                      type="text"
                      value={bairro}
                      onFocus={handleStart}
                      onChange={(e) => setBairro(e.target.value)}
                      placeholder="Ex: Jardim Ingá, Etapa A, Pedregal"
                      className="mt-2 w-full rounded-xl border border-line bg-concrete px-4 py-3.5 text-sm font-medium text-ink placeholder:text-mist focus:border-ink focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Tamanho */}
                  <div>
                    <label htmlFor="ent-tamanho" className="block text-xs font-bold uppercase tracking-wider text-iron">
                      Capacidade da caçamba
                    </label>
                    <select
                      id="ent-tamanho"
                      value={tamanho}
                      onFocus={handleStart}
                      onChange={(e) => {
                        handleStart();
                        setTamanho(e.target.value);
                      }}
                      className="mt-2 w-full rounded-xl border border-line bg-concrete px-4 py-3.5 text-sm font-medium text-ink focus:border-ink focus:bg-white focus:outline-none"
                    >
                      {DF_SIZES_PRICING.map((item) => (
                        <option key={item.size} value={item.label}>
                          {item.label} ({item.profile})
                        </option>
                      ))}
                      <option value="Preciso de ajuda para escolher">
                        Não sei — preciso de ajuda para escolher
                      </option>
                    </select>
                  </div>

                  {/* Material */}
                  <div>
                    <label htmlFor="ent-material" className="block text-xs font-bold uppercase tracking-wider text-iron">
                      Tipo de material
                    </label>
                    <select
                      id="ent-material"
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
                  <div className="sm:col-span-2">
                    <label htmlFor="ent-data" className="block text-xs font-bold uppercase tracking-wider text-iron">
                      Data desejada <span className="font-normal lowercase text-mist">(opcional)</span>
                    </label>
                    <input
                      id="ent-data"
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
                    Confirmamos rota, valor e disponibilidade para sua cidade no WhatsApp.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl sm:rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] px-6 py-4 min-h-[56px] font-display text-xs sm:text-base font-extrabold uppercase tracking-wide text-white transition-all active:bg-[#1DA851] shadow-[0_4px_16px_rgba(37,211,102,0.28)] cursor-pointer"
                  >
                    <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 fill-current" />
                    <span>Consultar no WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* 4. TAMANHOS E OPERAÇÃO */}
        <section id="operacao-entorno" className="border-b border-line bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <SectionHeader
                  eyebrow="Tamanhos e Destinação"
                  title="Caçambas de 3m³ a 10m³ para obras no Entorno"
                  lead="Disponibilizamos opções para pequenas reformas residenciais, obras médias e grandes volumes de entulho, com coleta e destinação adequada dos resíduos aceitos."
                />

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {DF_SIZES_PRICING.map((item) => (
                    <div key={item.size} className="rounded-xl border border-line bg-concrete p-3.5">
                      <span className="block font-display text-sm font-extrabold uppercase text-ink">
                        {item.label}
                      </span>
                      <span className="block text-[11px] text-iron mt-0.5">{item.profile}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-xs sm:text-sm leading-relaxed text-iron">
                  No Distrito Federal, os valores oficiais partem de R$ 199,99 (caçamba de 3m³). Para o Entorno do DF, informe sua cidade e bairro no WhatsApp para receber o valor atualizado e a disponibilidade de entrega.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <DFWhatsAppButton
                    message={DF_ENTORNO_DEFAULT_MESSAGE}
                    location="entorno_sizes_cta"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    Pedir orçamento no WhatsApp
                  </DFWhatsAppButton>
                  <a
                    href="/valor/orcamento"
                    className="font-display text-xs sm:text-sm font-extrabold uppercase tracking-wide text-ink underline decoration-signal decoration-2 underline-offset-4"
                  >
                    Ver tabela de valores DF →
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-line bg-concrete shadow-[0_8px_30px_rgba(12,13,15,0.06)]">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/images/df/df-operacao-720.webp" type="image/webp" />
                  <img
                    src="/images/df/df-operacao.webp"
                    alt="Caminhão poliguindaste em operação de locação de caçamba no DF e Entorno"
                    width={1200}
                    height={896}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </picture>
                <div className="p-4 bg-ink text-white/80 text-xs font-mono">
                  Entrega e retirada com caminhão poliguindaste · DF e Entorno
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ DO ENTORNO */}
        <section id="duvidas-entorno" className="border-b border-line bg-concrete py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Dúvidas sobre o Entorno do DF"
              title="Perguntas Frequentes"
              lead="Esclareça como funciona o aluguel de caçamba em Luziânia, Valparaíso de Goiás, Cidade Ocidental, Novo Gama, Águas Lindas e Santo Antônio do Descoberto."
              align="center"
            />

            <div className="mt-10 space-y-3.5">
              {DF_ENTORNO_FAQ.map((item, idx) => (
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

        {/* 6. CTA FINAL */}
        <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center lg:px-8">
            <p className="eyebrow text-signal">Atendimento Direto · Entorno do DF</p>
            <h2 className="display mt-4 text-3xl font-extrabold uppercase sm:text-4xl lg:text-5xl text-white">
              Precisa de caçamba na sua cidade?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/80">
              Envie sua cidade, bairro e o tipo de resíduo pelo WhatsApp para confirmar disponibilidade de rota e orçamento sem burocracia.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <DFWhatsAppButton
                message={DF_ENTORNO_DEFAULT_MESSAGE}
                location="entorno_final_cta"
                size="lg"
                className="w-full sm:w-auto"
              >
                Pedir orçamento no WhatsApp
              </DFWhatsAppButton>
            </div>
          </div>
        </section>
      </main>

      <DFFooter currentPage="entorno" />
      <DFStickyBar currentPage="entorno" />
    </div>
  );
}
