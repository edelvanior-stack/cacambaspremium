import { useEffect } from "react";
import { DF_COMPANY_INFO } from "./config";
import { DFLogo } from "@/components/df/DFHeader";

export default function DFPrivacyPage() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.title = "Política de Privacidade | Caçambas Premium DF";

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
      "Política de Privacidade da Caçambas Premium no Distrito Federal. Conheça as diretrizes de tratamento e proteção de dados em conformidade com a LGPD."
    );
    updateMeta("og:title", "Política de Privacidade | Caçambas Premium DF", true);
    updateMeta(
      "og:description",
      "Política de Privacidade da Caçambas Premium no Distrito Federal em conformidade com a LGPD.",
      true
    );
    updateMeta("og:url", "https://cacambaspremium.com.br/df/politica-de-privacidade", true);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://cacambaspremium.com.br/df/politica-de-privacidade";
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
              Conformidade Legal · LGPD
            </p>
            <h1 className="display mt-4 text-3xl font-extrabold uppercase sm:text-4xl lg:text-5xl text-ink">
              Política de Privacidade
            </h1>
            <p className="mt-3 text-sm text-mist">
              Caçambas Premium · Operação Distrito Federal · Atualizada em Outubro de 2026
            </p>
          </div>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-iron sm:text-base sm:leading-relaxed">
            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                1. Apresentação e Objetivo
              </h2>
              <p className="mt-3">
                A <strong>Caçambas Premium</strong> valoriza a segurança, a transparência e a privacidade de seus clientes e visitantes. Esta Política de Privacidade descreve de forma clara e acessível como tratamos as informações coletadas por meio da nossa landing page institucional e comercial voltada ao atendimento no Distrito Federal (https://cacambaspremium.com.br/df), em total observância à Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                2. Informações Fornecidas Voluntariamente pelo Usuário
              </h2>
              <p className="mt-3">
                Ao utilizar a ferramenta de consulta rápida de disponibilidade ou ao interagir com nossos canais de atendimento, o usuário pode informar espontaneamente os seguintes dados:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-iron">
                <li><strong>Região administrativa do DF</strong> para a qual o serviço é pretendido;</li>
                <li><strong>Bairro, quadra ou ponto de referência</strong> para verificação de rota logística e viabilidade de acesso;</li>
                <li><strong>Tipo de resíduo ou material de construção</strong> a ser descartado (ex.: entulho de alvenaria, concreto, terra, madeira, etc.);</li>
                <li><strong>Data desejada</strong> para colocação da caçamba;</li>
                <li><strong>Informações enviadas voluntariamente via WhatsApp</strong> (como nome do solicitante ou telefone de contato) necessárias para a conversa e cotação de valores.</li>
              </ul>
              <p className="mt-3 text-xs text-mist">
                Não solicitamos dados bancários, números de cartões de crédito, senhas ou quaisquer informações financeiras nesta landing page. A página não possui sistema de checkout ou pagamento integrado.
              </p>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                3. Dados Técnicos de Navegação e Ferramentas Analíticas
              </h2>
              <p className="mt-3">
                Durante sua visita à página, podem ser coletados dados técnicos básicos e anônimos com o propósito exclusivo de garantir o funcionamento correto e medir a performance das nossas campanhas, incluindo:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-iron">
                <li>Endereço IP com truncamento/anonimização padrão do navegador;</li>
                <li>Tipo de dispositivo, versão do sistema operacional e navegador utilizado;</li>
                <li>Páginas visualizadas, tempo de permanência e interações com botões de chamada para ação (CTAs);</li>
                <li>Cookies estritamente necessários e identificadores de campanhas publicitárias (como Google Ads e Google Analytics) para mensuração de eficácia dos anúncios.</li>
              </ul>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                4. Finalidade do Tratamento dos Dados
              </h2>
              <p className="mt-3">
                Os dados fornecidos são utilizados estritamente para as seguintes finalidades legítimas:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-iron">
                <li><strong>Atendimento e orçamento:</strong> Identificar a necessidade da obra, verificar a disponibilidade logística de caçambas e elaborar a proposta de valor conforme o endereço e tipo de material;</li>
                <li><strong>Comunicação direta:</strong> Responder a dúvidas, prestar orientações sobre descarte responsável e alinhar prazos de entrega e retirada;</li>
                <li><strong>Melhoria contínua e mensuração:</strong> Avaliar a usabilidade da página e mensurar a eficiência de campanhas digitais sem identificação individual invasiva.</li>
              </ul>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                5. Segurança e Armazenamento das Informações
              </h2>
              <p className="mt-3">
                Adotamos práticas técnicas e administrativas adequadas para proteger os dados contra acessos não autorizados, perdas ou alterações indevidas. O tráfego do nosso site é protegido por certificado de segurança com criptografia SSL/TLS (HTTPS). O acesso às conversas e dados de solicitação é restrito aos profissionais envolvidos diretamente no atendimento ao cliente.
              </p>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                6. Compartilhamento de Dados
              </h2>
              <p className="mt-3">
                A Caçambas Premium não comercializa, não aluga e não compartilha dados pessoais com terceiros para finalidades publicitárias ou listas de contatos. O compartilhamento ocorre apenas quando indispensável para:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-iron">
                <li>Cumprimento de exigências legais, regulatórias ou ordens de autoridades competentes;</li>
                <li>Viabilização operacional de ferramentas de infraestrutura e hospedagem essenciais ao funcionamento do site.</li>
              </ul>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                7. Direitos do Titular de Dados
              </h2>
              <p className="mt-3">
                Nos termos do artigo 18 da LGPD, você, como titular de dados pessoais, possui o direito de solicitar a qualquer momento a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou inexatos e a eliminação de informações quando aplicável, mediante solicitação aos nossos canais de atendimento.
              </p>
            </section>

            <section>
              <h2 className="display text-xl font-bold uppercase text-ink sm:text-2xl">
                8. Alterações desta Política
              </h2>
              <p className="mt-3">
                Esta Política de Privacidade poderá ser alterada ou revisada periodicamente para refletir eventuais melhorias operacionais ou atualizações regulatórias. Recomendamos a consulta regular desta página para manter-se informado.
              </p>
            </section>

            <section className="rounded-[4px] border border-line bg-concrete p-6 sm:p-8">
              <h2 className="display text-lg font-bold uppercase text-ink sm:text-xl">
                9. Identificação da Empresa Controladora
              </h2>
              <div className="mt-3 text-sm leading-relaxed text-iron space-y-1">
                <p className="font-bold text-ink">{DF_COMPANY_INFO.name}</p>
                <p>CNPJ: {DF_COMPANY_INFO.cnpj}</p>
                <p>{DF_COMPANY_INFO.addressLine1}</p>
                <p>{DF_COMPANY_INFO.addressLine2}</p>
                <p className="text-xs text-mist pt-2">Operação exclusiva de locação de caçambas estacionárias no Distrito Federal.</p>
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
            <a href="/df/termos-de-uso" className="hover:text-ink transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
