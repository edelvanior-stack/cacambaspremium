// ============================================================
// CAÇAMBAS PREMIUM — DISTRITO FEDERAL E ENTORNO (/df, /valor/orcamento, /entorno/cacamba)
// Configuração central da operação DF.
// Este arquivo é usado SOMENTE pelas páginas do DF/Entorno. A home ("/") e "/sc" não importam nada daqui.
// ============================================================

/**
 * WhatsApp EXCLUSIVO do DF e Entorno — somente dígitos, formato internacional.
 */
export const WHATSAPP_DF = "5561999535476";

/**
 * Exibição do número na página.
 */
export const WHATSAPP_DF_DISPLAY = "(61) 99953-5476";

/**
 * Google Ads da operação DF (tag base carregada em df/index.html, valor/orcamento/index.html e entorno/cacamba/index.html).
 */
export const GOOGLE_ADS_ID_DF = "AW-18502471060";

/**
 * CONVERSION LABEL da ação de conversão "Clique no WhatsApp" (DF).
 * Mede o clique que abre o WhatsApp — NÃO mede mensagem efetivamente enviada.
 */
export const GOOGLE_ADS_CONVERSION_LABEL_DF = "JGSnCNK2o64dEJSb1fZE";

/**
 * send_to final da conversão: "AW-18502471060/JGSnCNK2o64dEJSb1fZE".
 * Disparada somente em cliques que abrem o WhatsApp (ver src/df/analytics.ts).
 */
export const GOOGLE_ADS_CONVERSION_DF = GOOGLE_ADS_CONVERSION_LABEL_DF
  ? `${GOOGLE_ADS_ID_DF}/${GOOGLE_ADS_CONVERSION_LABEL_DF}`
  : "";

/** Eventos disparados nos CTAs e interações das páginas DF (gtag + dataLayer). */
export type DFEvent =
  | "whatsapp_hero"
  | "whatsapp_region"
  | "whatsapp_size_help"
  | "whatsapp_final"
  | "material_click"
  | "region_check_start"
  | "region_check_submit"
  | "quote_form_start"
  | "quote_form_submit";

// ------------------------------------------------------------
// Mensagens pré-preenchidas DF e Entorno (sempre completas e diretas)
// ------------------------------------------------------------
export const DF_DEFAULT_MESSAGE =
  "Olá, vim pelo Google e quero alugar uma caçamba em Brasília. Pode me passar disponibilidade e valor?";

export const DF_VALOR_DEFAULT_MESSAGE =
  "Olá, vim pelo Google na página de valores e quero solicitar um orçamento de caçamba no DF. Pode me passar disponibilidade?";

export const DF_ENTORNO_DEFAULT_MESSAGE =
  "Olá, vim pelo Google e quero alugar uma caçamba no Entorno do DF. Pode me informar disponibilidade e valor para minha cidade?";

export const DF_MESSAGES = {
  hero: DF_DEFAULT_MESSAGE,
  region: DF_DEFAULT_MESSAGE,
  sizeHelp: DF_DEFAULT_MESSAGE,
  publicArea: DF_DEFAULT_MESSAGE,
  final: DF_DEFAULT_MESSAGE,
} as const;

export const needMessage = (_label?: string) => DF_DEFAULT_MESSAGE;

export const materialMessage = (_material?: string) => DF_DEFAULT_MESSAGE;

// ------------------------------------------------------------
// Valores oficiais de caçambas no DF (NÃO inventar outros valores)
// ------------------------------------------------------------
export interface DFSizePricing {
  size: number;
  label: string;
  price: string;
  numericPrice: string;
  profile: string;
  idealFor: string;
}

export const DF_SIZES_PRICING: DFSizePricing[] = [
  {
    size: 3,
    label: "Caçamba 3m³",
    price: "R$ 199,99",
    numericPrice: "199.99",
    profile: "Obra pequena",
    idealFor: "Reformas de banheiro, cozinha, pequenos reparos e retirada pontual de entulho.",
  },
  {
    size: 4,
    label: "Caçamba 4m³",
    price: "R$ 249,99",
    numericPrice: "249.99",
    profile: "Reforma residencial",
    idealFor: "Reformas de apartamentos, troca de pisos, revestimentos e ajustes em cômodos.",
  },
  {
    size: 5,
    label: "Caçamba 5m³",
    price: "R$ 299,99",
    numericPrice: "299.99",
    profile: "Obra média",
    idealFor: "Reformas completas de casas, lojas, escritórios e obras com volume intermediário.",
  },
  {
    size: 7,
    label: "Caçamba 7m³",
    price: "R$ 370,00",
    numericPrice: "370.00",
    profile: "Obra maior",
    idealFor: "Construções em andamento, ampliações estruturais e maior acúmulo de resíduos.",
  },
  {
    size: 10,
    label: "Caçamba 10m³",
    price: "R$ 499,99",
    numericPrice: "499.99",
    profile: "Grande volume",
    idealFor: "Demolições, grandes obras e canteiros com alto volume de entulho de construção.",
  },
];

export const sizePricingMessage = (size: number) =>
  `Olá, vim pelo Google e quero alugar uma caçamba de ${size}m³ em Brasília. Pode me passar disponibilidade?`;

export const cityWhatsAppMessage = (cityName: string) =>
  `Olá, vim pelo Google e quero alugar uma caçamba em ${cityName}. Pode me passar disponibilidade e valor para meu endereço?`;

export interface QuickQuoteData {
  regiao: string;
  bairro: string;
  material: string;
  data: string;
  tamanho?: string;
}

export const quickQuoteMessage = ({ regiao, bairro, material, data, tamanho }: QuickQuoteData) => {
  const isEntorno = DF_ENTORNO_CITIES.some((c) => c.name === regiao);
  const localTexto = isEntorno ? `em ${regiao}` : "em Brasília/DF";
  const details: string[] = [];

  if (tamanho && tamanho !== "Preciso de ajuda para escolher") {
    details.push(`Caçamba: ${tamanho}`);
  }
  if (regiao) {
    if (isEntorno) {
      if (bairro) details.push(`Bairro/Setor: ${bairro}`);
    } else {
      details.push(bairro ? `Região: ${regiao} (${bairro})` : `Região: ${regiao}`);
    }
  } else if (bairro) {
    details.push(`Local: ${bairro}`);
  }
  if (material) {
    details.push(`Material: ${material}`);
  }
  if (data && data !== "A combinar") {
    details.push(`Data desejada: ${data}`);
  }

  if (details.length === 0) {
    return isEntorno ? cityWhatsAppMessage(regiao) : DF_DEFAULT_MESSAGE;
  }

  return `Olá, vim pelo Google e quero alugar uma caçamba ${localTexto} (${details.join(", ")}). Pode me passar disponibilidade e valor?`;
};

// ------------------------------------------------------------
// Regiões atendidas no Distrito Federal
// ------------------------------------------------------------
export interface DFRegion {
  name: string;
  active: boolean;
  featured?: boolean;
}

export const DF_REGIONS: DFRegion[] = [
  { name: "Brasília / Plano Piloto", active: true, featured: true },
  { name: "Águas Claras", active: true, featured: true },
  { name: "Taguatinga", active: true, featured: true },
  { name: "Ceilândia", active: true, featured: true },
  { name: "Samambaia", active: true, featured: true },
  { name: "Vicente Pires", active: true, featured: true },
  { name: "Guará", active: true, featured: true },
  { name: "Gama", active: true, featured: true },
  { name: "Santa Maria", active: true, featured: false },
  { name: "Recanto das Emas", active: true, featured: false },
  { name: "Riacho Fundo", active: true, featured: false },
  { name: "Núcleo Bandeirante", active: true, featured: false },
  { name: "Park Way", active: true, featured: false },
  { name: "Arniqueira", active: true, featured: false },
  { name: "Lago Sul", active: true, featured: false },
  { name: "Lago Norte", active: true, featured: false },
  { name: "Sudoeste", active: true, featured: false },
  { name: "Noroeste", active: true, featured: false },
  { name: "Sobradinho", active: true, featured: false },
  { name: "Planaltina", active: true, featured: false },
];

export const DF_ACTIVE_REGIONS = DF_REGIONS.filter((r) => r.active);
export const DF_PRIMARY_REGIONS = DF_ACTIVE_REGIONS.filter((r) => r.featured);
export const DF_SECONDARY_REGIONS = DF_ACTIVE_REGIONS.filter((r) => !r.featured);

// ------------------------------------------------------------
// Cidades confirmadas do Entorno do DF (conteúdo próprio por cidade)
// Sem inventar filiais, preços extras ou prazos fixos.
// ------------------------------------------------------------
export interface DFEntornoCity {
  slug: string;
  name: string;
  state: "GO";
  keywordTitle: string;
  badge: string;
  summary: string;
  localDetails: string;
  accessTip: string;
  neighborhoods: string[];
  ctaLabel: string;
}

export const DF_ENTORNO_CITIES: DFEntornoCity[] = [
  {
    slug: "luziania",
    name: "Luziânia",
    state: "GO",
    keywordTitle: "Aluguel de caçamba em Luziânia",
    badge: "Eixo Sul · BR-040",
    summary:
      "Atendimento sob consulta de endereço para obras residenciais, reformas comerciais e retirada de entulho em Luziânia, incluindo áreas centrais e distritos com forte expansão imobiliária.",
    localDetails:
      "Por ser um município de grande extensão territorial, quem precisa de caçamba em Luziânia costuma realizar desde reformas em imóveis antigos no Centro até construções completas em bairros residenciais e no Jardim Ingá.",
    accessTip:
      "Ao pedir orçamento pelo WhatsApp, informe o setor exato e um ponto de referência para validarmos a rota e o espaço de manobra do caminhão poliguindaste.",
    neighborhoods: ["Centro", "Jardim Ingá", "Parque Estrela Dalva", "Setor Fumal"],
    ctaLabel: "Pedir caçamba em Luziânia",
  },
  {
    slug: "valparaiso-de-goias",
    name: "Valparaíso de Goiás",
    state: "GO",
    keywordTitle: "Disk entulho em Valparaíso de Goiás",
    badge: "Condomínios e Comércio",
    summary:
      "Serviço de disk entulho em Valparaíso de Goiás voltado a reformas em condomínios, apartamentos, casas e estabelecimentos comerciais próximos à BR-040, mediante consulta de endereço.",
    localDetails:
      "Valparaíso concentra grande volume de reformas internas (troca de piso, revestimentos, gesso e alvenaria) em residenciais e áreas comerciais movimentadas, onde a organização do descarte evita acúmulo em áreas comuns.",
    accessTip:
      "Em condomínios fechados ou prédios, verifique previamente com a portaria ou administração o horário permitido e o local autorizado para estacionar a caçamba.",
    neighborhoods: ["Etapas A a E", "Parque Rio Branco", "Esplanada", "Céu Azul"],
    ctaLabel: "Disk entulho em Valparaíso",
  },
  {
    slug: "cidade-ocidental",
    name: "Cidade Ocidental",
    state: "GO",
    keywordTitle: "Caçamba em Cidade Ocidental",
    badge: "Quadras Residenciais",
    summary:
      "Locação de caçamba em Cidade Ocidental para reformas residenciais, ampliações de casas e retirada organizada de resíduos de construção civil, sob confirmação de endereço.",
    localDetails:
      "As obras em Cidade Ocidental concentram-se em superquadras planejadas, reformas de telhados, muros e construções familiares que exigem escolha correta da capacidade da caçamba para evitar viagens extras.",
    accessTip:
      "Escolha um ponto de descarga livre de fiação baixa e que não bloqueie garagens vizinhas ou a circulação de pedestres na quadra.",
    neighborhoods: ["Superquadras (SQs)", "Parque Nápolis", "Friburgo", "Mesquita"],
    ctaLabel: "Pedir caçamba em Cidade Ocidental",
  },
  {
    slug: "novo-gama",
    name: "Novo Gama",
    state: "GO",
    keywordTitle: "Aluguel de caçamba em Novo Gama",
    badge: "Divisa Sul · Gama e Santa Maria",
    summary:
      "Aluguel de caçamba em Novo Gama para obras pequenas, reformas completas e retirada de entulho de construção, com atendimento coordenado junto às rotas da região sul do DF.",
    localDetails:
      "Em Novo Gama, há alta procura por caçambas para reformas residenciais, retirada de concreto, tijolos, argamassa e limpeza de canteiros em setores residenciais e áreas comerciais.",
    accessTip:
      "Informe pelo WhatsApp se o material será entulho misto de reforma, terra ou madeira para orientarmos o melhor tamanho de caçamba antes da entrega.",
    neighborhoods: ["Pedregal", "Parque Estrela Dalva VI", "Lunabel", "Lago Azul"],
    ctaLabel: "Pedir caçamba em Novo Gama",
  },
  {
    slug: "aguas-lindas-de-goias",
    name: "Águas Lindas de Goiás",
    state: "GO",
    keywordTitle: "Caçamba de entulho em Águas Lindas de Goiás",
    badge: "Obras e Construções · BR-070",
    summary:
      "Fornecimento de caçamba de entulho em Águas Lindas de Goiás sob consulta de endereço, atendendo construções novas, ampliações residenciais e reformas comerciais.",
    localDetails:
      "Com intenso ritmo de novas construções, erguimento de muros, lajes e reformas de fachada, Águas Lindas demanda tanto caçambas compactas para pequenos reparos quanto volumes maiores para obras estruturais.",
    accessTip:
      "Certifique-se de que a rua e o ponto de apoio tenham solo firme e acesso livre para o caminhão realizar a colocação e a retirada com segurança.",
    neighborhoods: ["Jardim Brasília", "Mansões Odisseia", "Parque da Barragem", "Setor Coimbra"],
    ctaLabel: "Pedir caçamba em Águas Lindas",
  },
  {
    slug: "santo-antonio-do-descoberto",
    name: "Santo Antônio do Descoberto",
    state: "GO",
    keywordTitle: "Aluguel de caçamba em Santo Antônio do Descoberto",
    badge: "Eixo Oeste · Próximo a Samambaia",
    summary:
      "Aluguel de caçamba em Santo Antônio do Descoberto sob consulta de endereço e rota, com suporte para obras residenciais, pequenas demolições e retirada de entulho.",
    localDetails:
      "A ligação direta pela região oeste do Distrito Federal facilita a avaliação logística a partir da nossa sede em Samambaia Norte, atendendo reformas de casas, comércios locais e sobras de alvenaria.",
    accessTip:
      "Envie o endereço ou localização no WhatsApp junto com o tipo de resíduo para confirmar disponibilidade de entrega e valores atualizados.",
    neighborhoods: ["Centro", "Parque Estrela Dalva XI", "Jardim de Alah", "Vila Paraíso"],
    ctaLabel: "Pedir caçamba em Santo Antônio",
  },
];

// ------------------------------------------------------------
// Necessidade da obra
// ------------------------------------------------------------
export interface DFNeed {
  id: "pequena" | "media" | "grande";
  title: string;
  description: string;
  level: 1 | 2 | 3;
}

export const DF_NEEDS: DFNeed[] = [
  {
    id: "pequena",
    title: "Obra pequena",
    description: "Banheiro, cozinha, pequenos reparos e reformas residenciais.",
    level: 1,
  },
  {
    id: "media",
    title: "Obra média",
    description: "Casas, apartamentos, lojas e reformas completas.",
    level: 2,
  },
  {
    id: "grande",
    title: "Grande volume",
    description: "Construções, demolições e grandes quantidades de entulho.",
    level: 3,
  },
];

// ------------------------------------------------------------
// Materiais
// ------------------------------------------------------------
export const DF_MATERIALS: string[] = [
  "Entulho de construção",
  "Concreto e tijolos",
  "Argamassa",
  "Terra",
  "Madeira",
  "Gesso",
  "Resíduos de reforma",
  "Outros materiais sob consulta",
];

// ------------------------------------------------------------
// FAQ — /df (mantenha sincronizado com JSON-LD FAQPage em df/index.html)
// ------------------------------------------------------------
export const DF_FAQ: { q: string; a: string }[] = [
  {
    q: "Quanto custa alugar uma caçamba no DF?",
    a: "Temos caçambas de 3m³ por R$ 199,99, 4m³ por R$ 249,99, 5m³ por R$ 299,99, 7m³ por R$ 370,00 e 10m³ por R$ 499,99. Peça pelo WhatsApp e confirme disponibilidade e entrega para o seu endereço.",
  },
  {
    q: "Vocês atendem o Entorno do DF?",
    a: "Sim. Atendemos o Entorno do DF, como Valparaíso de Goiás, Cidade Ocidental, Novo Gama, Águas Lindas de Goiás, Luziânia e Santo Antônio do Descoberto, sob consulta de endereço.",
  },
  {
    q: "Como peço o orçamento da caçamba?",
    a: "Chame no WhatsApp e informe o endereço, o tipo de material e para quando precisa. Você recebe disponibilidade e valores antes de contratar.",
  },
  {
    q: "Posso pedir caçamba para uma obra pequena ou reforma?",
    a: "Sim. Atendemos obras pequenas, médias e grandes volumes. Fale com a equipe e ajudamos a escolher a opção certa para o seu caso.",
  },
  {
    q: "Vocês atendem minha região?",
    a: "Atendemos Brasília e diversas regiões administrativas do Distrito Federal. Envie seu endereço ou CEP para confirmação.",
  },
  {
    q: "Qual caçamba devo escolher?",
    a: "Depende do volume e do material. Informe o tipo de obra e ajudaremos a identificar a opção adequada.",
  },
  {
    q: "Quanto tempo posso ficar com a caçamba?",
    a: "A permanência depende da localização e das regras aplicáveis. Caçambas instaladas em vias e logradouros públicos do DF estão sujeitas à legislação local. Confirme o prazo no momento da contratação.",
  },
  {
    q: "O que posso colocar na caçamba?",
    a: "Resíduos comuns de construção e reforma podem ser aceitos conforme classificação e operação. Materiais perigosos ou especiais exigem tratamento específico.",
  },
  {
    q: "Posso deixar a caçamba na rua?",
    a: "Existem regras específicas para instalação de caçambas em logradouros públicos do Distrito Federal. Consulte antes da entrega.",
  },
];

// ------------------------------------------------------------
// FAQ — /valor/orcamento (sincronizado com valor/orcamento/index.html)
// ------------------------------------------------------------
export const DF_VALOR_FAQ: { q: string; a: string }[] = [
  {
    q: "Quanto custa alugar uma caçamba em Brasília e no DF?",
    a: "Os valores oficiais são: caçamba de 3m³ por R$ 199,99, 4m³ por R$ 249,99, 5m³ por R$ 299,99, 7m³ por R$ 370,00 e 10m³ por R$ 499,99. Envie seu endereço pelo WhatsApp para confirmar disponibilidade e condições de entrega para o seu local.",
  },
  {
    q: "Quais tamanhos de caçamba estão disponíveis?",
    a: "Trabalhamos com 5 opções de capacidade: 3m³, 4m³, 5m³, 7m³ e 10m³, atendendo desde pequenos reparos residenciais até grandes obras e demolições.",
  },
  {
    q: "Como solicitar um orçamento pelo WhatsApp?",
    a: "Basta clicar em qualquer botão de WhatsApp da página ou preencher o formulário de orçamento rápido informando a região, o tipo de material e, se souber, o tamanho desejado. A equipe retorna diretamente no WhatsApp com a confirmação antes da contratação.",
  },
  {
    q: "Como funciona a entrega e a retirada da caçamba?",
    a: "Após a confirmação do orçamento, da rota e do ponto de descarga pelo WhatsApp, a caçamba é entregue no endereço combinado. A permanência segue as condições acordadas e a legislação local, e a retirada é feita no local indicado.",
  },
  {
    q: "Quais regiões são atendidas no DF e Entorno?",
    a: "Atendemos Brasília, Plano Piloto, Águas Claras, Taguatinga, Ceilândia, Samambaia, Vicente Pires, Guará, Gama e demais regiões administrativas do DF, além de cidades do Entorno como Luziânia, Valparaíso de Goiás, Cidade Ocidental, Novo Gama, Águas Lindas de Goiás e Santo Antônio do Descoberto sob consulta de endereço.",
  },
  {
    q: "O que pode ser descartado na caçamba?",
    a: "Resíduos comuns de construção e reforma como entulho, concreto, tijolos, argamassa, terra, madeira e gesso podem ser aceitos conforme classificação e operação. Materiais químicos, baterias, óleos, tintas automotivas e lixo hospitalar não são permitidos.",
  },
];

// ------------------------------------------------------------
// FAQ — /entorno/cacamba (sincronizado com entorno/cacamba/index.html)
// ------------------------------------------------------------
export const DF_ENTORNO_FAQ: { q: string; a: string }[] = [
  {
    q: "Quais cidades do Entorno do DF vocês atendem?",
    a: "Atendemos sob consulta de endereço em Luziânia, Novo Gama, Valparaíso de Goiás, Cidade Ocidental, Águas Lindas de Goiás e Santo Antônio do Descoberto, além de Brasília e Regiões Administrativas do DF.",
  },
  {
    q: "Como solicitar orçamento de caçamba para o Entorno do DF?",
    a: "Clique no botão de WhatsApp da sua cidade ou use o formulário de consulta rápida informando cidade, bairro ou setor e tipo de material. Confirmamos disponibilidade de rota e valor antes de fechar a contratação.",
  },
  {
    q: "Quais tamanhos de caçamba podem ser solicitados no Entorno?",
    a: "Trabalhamos com caçambas de 3m³, 4m³, 5m³, 7m³ e 10m³. No DF os valores oficiais partem de R$ 199,99 (3m³); para o Entorno, confirme disponibilidade e condições para o seu endereço diretamente no WhatsApp.",
  },
  {
    q: "Vocês entregam em condomínios em Valparaíso de Goiás e Cidade Ocidental?",
    a: "Sim, mediante consulta prévia de endereço e acesso. Em condomínios fechados, é importante confirmar na portaria as regras internas de entrada de caminhão e o local permitido para posicionamento da caçamba.",
  },
  {
    q: "Quais materiais posso colocar na caçamba?",
    a: "Aceitamos resíduos comuns de construção civil e reforma (entulho, concreto, tijolos, argamassa, terra, madeira e gesso) conforme classificação e operação. Não é permitido descartar produtos químicos, tintas automotivas, óleos, baterias ou lixo hospitalar.",
  },
  {
    q: "Onde fica a base da Caçambas Premium?",
    a: "Nossa operação para o DF e Entorno tem endereço em Samambaia Norte, Brasília/DF (QR 602, Conj. 15, Lt. 01 — CEP 72322-015, CNPJ 21.802.241/0001-24), com atendimento logístico às cidades do Entorno mediante confirmação de endereço.",
  },
];

// ------------------------------------------------------------
// Provas de confiança (VAZIO por padrão — não inventar números ou selos)
// ------------------------------------------------------------
export interface DFProof {
  label: string;
  value: string;
}

export const DF_PROOFS: DFProof[] = [];

// ------------------------------------------------------------
// Dados cadastrais e legais da empresa para a operação DF e Entorno
// ------------------------------------------------------------
export interface DFCompanyInfo {
  name: string;
  cnpj: string;
  addressLine1: string;
  addressLine2: string;
  addressFull: string;
  phone?: string;
  privacyPolicyUrl: string;
  termsUrl: string;
}

export const DF_COMPANY_INFO: DFCompanyInfo = {
  name: "Caçambas Premium",
  cnpj: "21.802.241/0001-24",
  addressLine1: "QR 602, Conj. 15, Lt. 01 — Samambaia Norte",
  addressLine2: "Brasília/DF — CEP 72322-015",
  addressFull: "QR 602, Conj. 15, Lt. 01 — Samambaia Norte, Brasília/DF — CEP 72322-015",
  phone: WHATSAPP_DF_DISPLAY || "",
  privacyPolicyUrl: "/df/politica-de-privacidade",
  termsUrl: "/df/termos-de-uso",
};
