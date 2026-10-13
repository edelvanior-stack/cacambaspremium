import { useEffect } from "react";
import { DF_COMPANY_INFO } from "./config";
import { DFLogo } from "@/components/df/DFHeader";

export default function DFTermsPage() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.title = "Termos de Uso | Caçambas Premium DF";

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    updateMeta(
      "description",
      "Termos de Uso da Caçambas Premium no Distrito Federal. Condições gerais para consulta de disponibilidade e solicitação de orçamento."
    );
    updateMeta("og:title", "Termos de Uso | Caçambas Premium DF", true);
    updateMeta(
      "og:description",
      "Termos de Uso da Caçambas Premium no Distrito Federal para consulta e solicitação de orçamento.",
      true
    );
    updateMeta("og:url", "https://cacambaspremium.com.br/df/termos-de-uso", true);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://cacambaspremium.com.br/df/termos-de-uso";
  }, []);

  return (
    <div className="min-h-screen bg-white text-ink selection:bg-signal selection:text-ink font-sans antialiased">
      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 sm:px-8">
          <a href="/df" className="focus-visible:outline-2 focus-visible:outline-signal">
            <DFLogo tone="dark" />
          </a>
          <a
            href="/df"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-iron hover:text-ink transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>Voltar ao início</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <article className="prose prose-slate max-w-none">
          <div className="border-b border-line pb-8">
            <p className="eyebrow flex items-center gap-2.5 text-iron">
              <span className="inline-block h-px w-6 bg-current" aria-hidden="true" />
              Condições Gerais de Uso
            </p>
            <h1 className="display mt-4 text-3xl font-extrabold uppercase sm:text-4xl lg:text-5xl text-ink">
              Termos de Uso
            </h1>
            <p className="mt-3 text-sm text-mist">
              Caçambas Premium · Operação Distrito Federal · Atualizado em Outubro de 2026
            </p>
          </div>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-iron sm:text-base sm:leading-relaxed">
            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                1. Finalidade do Site e Natureza do Serviço
              </h2>
              <p className="mt-3">
                Este site (https://cacambaspremium.com.br/df) é mantido pela <strong>Caçambas Premium</strong> como canal digital institucional e informativo voltado ao público do Distrito Federal. Sua finalidade é viabilizar a verificação prévia de atendimento regional, apresentação de orientações operacionais e o contato direto com a equipe para cotação de locação de caçambas estacionárias para resíduos da construção civil.
              </p>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                2. Solicitação de Orçamento e Ausência de Contratação Automática
              </h2>
              <p className="mt-3">
                O preenchimento da ferramenta de consulta de disponibilidade ou o clique em botões de direcionamento ao WhatsApp constituem exclusivamente uma <strong>solicitação prévia de cotação</strong>. O uso da página não configura contrato de prestação de serviços nem obriga qualquer das partes antes da confirmação mútua dos seguintes pontos durante o atendimento:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-iron">
                <li>Endereço exato e viabilidade de acesso seguro para caminhão poliguindaste;</li>
                <li>Disponibilidade física de caçambas na data pretendida;</li>
                <li>Valor final do frete/locação e condições de pagamento acordadas;</li>
                <li>Prazo determinado de permanência da caçamba no local.</li>
              </ul>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                3. Classificação de Materiais e Restrições de Descarte
              </h2>
              <p className="mt-3">
                Nossas caçambas destinam-se ao acondicionamento de resíduos comuns da construção civil e pequenas reformas (alvenaria, concreto, argamassa, cerâmica, gesso, madeira e sobras de canteiro). É <strong>expressamente proibido</strong> o descarte de:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-iron">
                <li>Lixo hospitalar, ambulatorial ou infectante;</li>
                <li>Resíduos químicos, solventes, tintas líquidas automotivas e óleos;</li>
                <li>Pneus, baterias e materiais inflamáveis ou explosivos;</li>
                <li>Quaisquer substâncias classificadas como resíduos perigosos (Classe I).</li>
              </ul>
              <p className="mt-3 text-xs text-mist">
                O descumprimento das regras de triagem pode ensejar a recusa da retirada até regularização pelo cliente ou custos adicionais de triagem especializada.
              </p>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                4. Instalação de Caçambas em Áreas Públicas no Distrito Federal
              </h2>
              <p className="mt-3">
                No Distrito Federal, a colocação e permanência de caçambas estacionárias em vias, logradouros, calçadas e áreas públicas estão sujeitas à legislação urbana local. É responsabilidade do solicitante certificar-se de que o ponto indicado para descarga não obstrui garagens, passagens de pedestres, hidrantes ou faixas de rolamento, bem como respeitar as normas vigentes na respectiva Região Administrativa.
              </p>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                5. Responsabilidades do Usuário
              </h2>
              <p className="mt-3">
                O usuário compromete-se a fornecer informações verídicas e precisas quanto à localização e aos materiais a serem descartados. O usuário é responsável por garantir livre acesso para a entrega e retirada da caçamba no endereço indicado, respeitando as orientações de segurança operacional passadas pela equipe.
              </p>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                6. Cobertura Geográfica e Disponibilidade Operacional
              </h2>
              <p className="mt-3">
                A listagem de regiões administrativas exibida no site tem caráter indicativo da área de atuação. O atendimento efetivo em determinado bairro ou condomínio está sujeito à confirmação prévia no momento do contato, levando em conta restrições viárias, topografia e logística da frota na data solicitada.
              </p>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                7. Propriedade Intelectual
              </h2>
              <p className="mt-3">
                Todo o conteúdo, layout, logotipos, fotografias e textos presentes nesta página são protegidos pela legislação de propriedade intelectual e direitos autorais. É vedada a reprodução total ou parcial sem autorização prévia por escrito.
              </p>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                8. Alterações e Vigência
              </h2>
              <p className="mt-3">
                Estes Termos de Uso poderão ser alterados a qualquer momento para adequação às práticas operacionais ou exigências legais. A continuidade de navegação na página após eventuais alterações implica aceitação dos termos revisados.
              </p>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                9. Legislação Aplicável e Foro
              </h2>
              <p className="mt-3">
                Estes Termos são regidos pelas leis da República Federativa do Brasil. Para dirimir quaisquer controvérsias decorrentes da utilização deste site, fica eleito o Foro da Circunscrição Judiciária de Brasília, Distrito Federal, com exclusão de qualquer outro.
              </p>
            </section>

            <section className="rounded-[4px] border border-line bg-concrete p-6 sm:p-8">
              <h2 className="display text-lg font-bold uppercase text-ink sm:text-xl">
                10. Dados Empresariais e Identificação
              </h2>
              <div className="mt-3 text-sm leading-relaxed text-iron space-y-1">
                <p className="font-bold text-ink">{DF_COMPANY_INFO.name}</p>
                <p>CNPJ: {DF_COMPANY_INFO.cnpj}</p>
                <p>{DF_COMPANY_INFO.addressLine1}</p>
                <p>{DF_COMPANY_INFO.addressLine2}</p>
                <p className="text-xs text-mist pt-2">Operação de locação de caçambas estacionárias no Distrito Federal.</p>
              </div>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-concrete py-10 text-iron">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-5 text-xs text-mist sm:flex-row sm:px-8">
          <p>© {currentYear} {DF_COMPANY_INFO.name} · CNPJ: {DF_COMPANY_INFO.cnpj}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="/df" className="hover:text-ink transition-colors">Início DF</a>
            <a href="/df/politica-de-privacidade" className="hover:text-ink transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
