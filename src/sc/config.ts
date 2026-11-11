// ============================================================
// CAÇAMBAS PREMIUM — SANTA CATARINA (/sc)
// Configuração central e exclusiva da landing page SC.
// Isolada das rotas "/" (PR) e "/df" (DF).
// ============================================================

export const WHATSAPP_SC = "5547992089548";
export const WHATSAPP_SC_DISPLAY = "47 99208-9548";
export const WHATSAPP_SC_BASE_URL = "https://wa.me/5547992089548";

/**
 * Google Ads da operação SC (tag base carregada em sc/index.html).
 */
export const GOOGLE_ADS_ID_SC = "AW-18493696857";

/**
 * Rótulo da conversão "Contato no whatsapp" (SC).
 */
export const GOOGLE_ADS_CONVERSION_LABEL_SC = "p5MFCPz4wbQdENnWvfJE";

/**
 * send_to final da conversão do Google Ads para /sc:
 * "AW-18493696857/p5MFCPz4wbQdENnWvfJE"
 */
export const GOOGLE_ADS_CONVERSION_SC = `${GOOGLE_ADS_ID_SC}/${GOOGLE_ADS_CONVERSION_LABEL_SC}`;

export interface SCCompanyInfo {
  name: string;
  cnpj: string;
  street: string;
  neighborhood: string;
  cityState: string;
  cep: string;
  addressFull: string;
  whatsappDisplay: string;
  whatsappDigits: string;
}

export const SC_COMPANY_INFO: SCCompanyInfo = {
  name: "Caçambas Premium",
  cnpj: "30.985.157/0001-84",
  street: "Rua Padre Antonio Dias 342",
  neighborhood: "Centro",
  cityState: "Camboriú - SC",
  cep: "CEP 88340-419",
  addressFull: "Rua Padre Antonio Dias 342, Centro, Camboriú - SC, CEP 88340-419",
  whatsappDisplay: WHATSAPP_SC_DISPLAY,
  whatsappDigits: WHATSAPP_SC,
};

// ------------------------------------------------------------
// Mensagens de WhatsApp contextualizadas (todas usam 5547992089548)
// ------------------------------------------------------------
export const SC_HERO_MESSAGE =
  "Olá! Vim pelo Google e quero pedir orçamento de caçamba em Santa Catarina (a partir de R$199,99). Gostaria de consultar disponibilidade e valor para minha região.";

export const SC_SIZE_MESSAGE =
  "Olá! Vim pelo Google e gostaria de pedir orçamento e consultar o tamanho de caçamba disponível em Santa Catarina.";

export const SC_URGENCY_MESSAGE =
  "Olá! Vim pelo Google e preciso de uma caçamba em Santa Catarina. Gostaria de consultar disponibilidade e valor para meu endereço.";

export const SC_QUOTE_MESSAGE =
  "Olá! Vim pelo Google e quero pedir orçamento de caçamba em Santa Catarina. Gostaria de consultar disponibilidade e valor.";

export const scCityMessage = (city: string) =>
  `Olá! Vim pelo Google e quero pedir orçamento de caçamba em ${city}. Gostaria de consultar disponibilidade e valor para minha região.`;

export const scMaterialMessage = (material: string) =>
  `Olá! Vim pelo Google e quero pedir orçamento de caçamba em Santa Catarina para o material: ${material}.`;

// ------------------------------------------------------------
// 1. Hero — Linha de cidades e preço
// ------------------------------------------------------------
export const SC_HERO_CITIES_LINE =
  "Atendimento em Camboriú, Balneário Camboriú, Itajaí, Navegantes, Itapema, Penha, Balneário Piçarras e Brusque.";

export const SC_PRICE_DISCLAIMER =
  "O valor pode variar conforme cidade, tamanho, material e disponibilidade.";

// ------------------------------------------------------------
// 2. Necessidades (4 cards com mensagens específicas)
// ------------------------------------------------------------
export interface SCNeedCard {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  message: string;
}

export const SC_NEEDS: SCNeedCard[] = [
  {
    id: "obra",
    title: "Caçamba para obra",
    description:
      "Locação de caçamba estacionária para construções residenciais, comerciais e etapas de alvenaria ou fundação.",
    ctaLabel: "Pedir Orçamento no WhatsApp",
    message:
      "Olá! Vim pelo Google e quero pedir orçamento de caçamba para obra em Santa Catarina. Gostaria de consultar disponibilidade e valor.",
  },
  {
    id: "reforma",
    title: "Caçamba para reforma",
    description:
      "Atendimento para reformas de casas, apartamentos, lojas e condomínios com recolhimento organizado de resíduos.",
    ctaLabel: "Pedir Orçamento no WhatsApp",
    message:
      "Olá! Vim pelo Google e quero pedir orçamento de caçamba para reforma em Santa Catarina. Gostaria de consultar disponibilidade e valor.",
  },
  {
    id: "entulho",
    title: "Retirada de entulho",
    description:
      "Coleta de caliça, restos de concreto, tijolos, pisos, azulejos e materiais gerados durante demolições ou melhorias.",
    ctaLabel: "Pedir Orçamento no WhatsApp",
    message:
      "Olá! Vim pelo Google e quero pedir orçamento de caçamba para retirada de entulho em Santa Catarina. Gostaria de consultar disponibilidade e valor.",
  },
  {
    id: "terreno",
    title: "Limpeza de terreno",
    description:
      "Apoio para limpeza e organização de lotes, quintais e áreas antes de iniciar a construção ou após obras.",
    ctaLabel: "Pedir Orçamento no WhatsApp",
    message:
      "Olá! Vim pelo Google e quero pedir orçamento de caçamba para limpeza de terreno em Santa Catarina. Gostaria de consultar disponibilidade e valor.",
  },
];

// ------------------------------------------------------------
// 4. Materiais (10 itens exatos, sem prometer aceitação automática de especiais)
// ------------------------------------------------------------
export interface SCMaterialItem {
  name: string;
  status: "regular" | "consulta";
  note: string;
}

export const SC_MATERIALS: SCMaterialItem[] = [
  { name: "Caliça", status: "regular", note: "Restos de reboco, argamassa e alvenaria" },
  { name: "Concreto", status: "regular", note: "Blocos, pisos e estruturas quebradas" },
  { name: "Tijolos", status: "regular", note: "Tijolos cerâmicos ou blocos de vedação" },
  { name: "Cerâmica", status: "regular", note: "Pisos, revestimentos, telhas e azulejos" },
  { name: "Resíduos de construção", status: "regular", note: "Sobras de obra civil e edificações" },
  { name: "Resíduos de reforma", status: "regular", note: "Demolição interna e troca de acabamentos" },
  { name: "Madeira sob consulta", status: "consulta", note: "Verifique condições antes da reserva" },
  { name: "Terra sob consulta", status: "consulta", note: "Sujeito à avaliação de peso e transporte" },
  { name: "Gesso sob consulta", status: "consulta", note: "Pode exigir operação diferenciada" },
  { name: "Outros materiais sob análise", status: "consulta", note: "Informe o material pelo WhatsApp" },
];

// ------------------------------------------------------------
// 5. Como Funciona (5 passos exatos)
// ------------------------------------------------------------
export interface SCStep {
  step: string;
  title: string;
  description: string;
}

export const SC_STEPS: SCStep[] = [
  {
    step: "Passo 1",
    title: "Informe cidade e endereço",
    description: "Envie a cidade, o bairro e a rua onde a caçamba será posicionada.",
  },
  {
    step: "Passo 2",
    title: "Informe o material",
    description: "Diga qual tipo de resíduo será descartado (caliça, concreto, reforma, terra ou outros).",
  },
  {
    step: "Passo 3",
    title: "Informe o volume aproximado",
    description: "Explique o porte da obra ou o volume estimado para identificarmos a opção disponível.",
  },
  {
    step: "Passo 4",
    title: "Informe quando precisa",
    description: "Indique a data ou período desejado para verificarmos a programação na sua região.",
  },
  {
    step: "Passo 5",
    title: "Receba a confirmação pelo WhatsApp",
    description: "Nossa equipe retorna pelo WhatsApp com a disponibilidade e as condições para o seu endereço.",
  },
];

// ------------------------------------------------------------
// 7. Cidades Prioritárias (8 cards individuais com texto próprio)
// ------------------------------------------------------------
export interface SCCityCard {
  name: string;
  tag: string;
  description: string;
}

export const SC_CITIES: SCCityCard[] = [
  {
    name: "Camboriú",
    tag: "Base Operacional",
    description:
      "Aluguel de caçamba em Camboriú a partir de R$199,99 para obras, reformas e retirada de entulho. Solicite orçamento para sua região.",
  },
  {
    name: "Balneário Camboriú",
    tag: "Atendimento Regional",
    description:
      "Atendemos Balneário Camboriú na locação de caçambas a partir de R$199,99 para reformas residenciais, comerciais e obras civis. Solicite orçamento para sua região.",
  },
  {
    name: "Itajaí",
    tag: "Atendimento Regional",
    description:
      "Atendimento em Itajaí com caçambas estacionárias a partir de R$199,99 para coleta de caliça, restos de alvenaria e limpeza de canteiros. Solicite orçamento para sua região.",
  },
  {
    name: "Navegantes",
    tag: "Atendimento Regional",
    description:
      "Locação de caçamba de entulho com atendimento em Navegantes a partir de R$199,99 para construções, ampliações e limpeza de lotes. Solicite orçamento para sua região.",
  },
  {
    name: "Itapema",
    tag: "Atendimento Regional",
    description:
      "Atendemos Itapema com caçambas a partir de R$199,99 para recolhimento de resíduos de construção e reformas em geral. Solicite orçamento para sua região.",
  },
  {
    name: "Penha",
    tag: "Atendimento Regional",
    description:
      "Disk entulho e aluguel de caçamba com atendimento em Penha a partir de R$199,99 para obras residenciais, reformas e organização de terrenos. Solicite orçamento para sua região.",
  },
  {
    name: "Balneário Piçarras",
    tag: "Atendimento Regional",
    description:
      "Atendimento em Balneário Piçarras a partir de R$199,99 para retirada de entulho de obra, cerâmica, tijolos e reformas. Solicite orçamento para sua região.",
  },
  {
    name: "Brusque",
    tag: "Atendimento Regional",
    description:
      "Aluguel de caçamba com atendimento em Brusque a partir de R$199,99 para obras comerciais, residenciais e reformas. Solicite orçamento para sua região.",
  },
];

// ------------------------------------------------------------
// 8. Confiança (somente afirmações seguras autorizadas)
// ------------------------------------------------------------
export interface SCTrustItem {
  title: string;
  description: string;
}

export const SC_TRUST_ITEMS: SCTrustItem[] = [
  {
    title: "Atendimento regional",
    description: "Operação voltada para Camboriú, Balneário Camboriú, Itajaí e cidades próximas do litoral e vale.",
  },
  {
    title: "Cotação pelo WhatsApp",
    description: "Contato direto pelo WhatsApp, sem formulários longos ou cadastros demorados.",
  },
  {
    title: "Orientação sobre tamanho",
    description: "Auxiliamos na escolha da opção disponível de acordo com o volume aproximado e tipo de material.",
  },
  {
    title: "Consulta de disponibilidade",
    description: "Verificação prévia conforme cidade, endereço, acesso e programação operacional.",
  },
  {
    title: "Atendimento para obras e reformas",
    description: "Soluções para pequenas reformas, construções residenciais, comerciais e limpeza de terrenos.",
  },
  {
    title: "Dados empresariais transparentes",
    description: "Endereço físico em Camboriú - SC e canal oficial de atendimento claramente informados.",
  },
];

// ------------------------------------------------------------
// 10. FAQ (7 perguntas e respostas exatas)
// ------------------------------------------------------------
export const SC_FAQ: { q: string; a: string }[] = [
  {
    q: "Quanto custa alugar uma caçamba?",
    a: "Temos caçambas a partir de R$199,99. O valor pode variar conforme cidade, tamanho, material e disponibilidade. Consulte pelo WhatsApp.",
  },
  {
    q: "Vocês atendem Balneário Camboriú?",
    a: "Consulte disponibilidade para seu endereço em Balneário Camboriú.",
  },
  {
    q: "Vocês atendem Itajaí?",
    a: "Consulte disponibilidade para seu endereço em Itajaí.",
  },
  {
    q: "Qual tamanho de caçamba preciso?",
    a: "Informe o tipo de material e o volume aproximado para receber orientação.",
  },
  {
    q: "Pode colocar terra?",
    a: "Consulte antes da reserva devido ao peso e às condições de transporte.",
  },
  {
    q: "Pode colocar gesso?",
    a: "Consulte antes, pois materiais específicos podem exigir operação diferenciada.",
  },
  {
    q: "Vocês entregam no mesmo dia?",
    a: "A disponibilidade depende da cidade, horário e operação. Consulte pelo WhatsApp.",
  },
];
