// ============================================================
// CAÇAMBAS PREMIUM — SANTA CATARINA (/sc)
// Configuração central e exclusiva da landing page SC.
// Isolada das rotas "/" (PR) e "/df" (DF).
// ============================================================

export const WHATSAPP_SC = "5547992089548";
export const WHATSAPP_SC_DISPLAY = "47 99208-9548";
export const WHATSAPP_SC_BASE_URL = "https://wa.me/5547992089548";

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
  "Olá, preciso de uma caçamba em Santa Catarina. Gostaria de consultar disponibilidade.\n\nCidade:\nBairro:\nMaterial:\nQuando preciso:";

export const SC_SIZE_MESSAGE =
  "Olá, gostaria de consultar o tamanho de caçamba disponível para minha necessidade em Santa Catarina. Posso informar o material e o volume aproximado?";

export const SC_URGENCY_MESSAGE =
  "Olá, preciso de uma caçamba para hoje ou para os próximos dias. Gostaria de consultar a disponibilidade para meu endereço.";

export const SC_QUOTE_MESSAGE =
  "Olá, gostaria de consultar disponibilidade de caçamba em Camboriú e região.";

export const scCityMessage = (city: string) =>
  `Olá, gostaria de consultar disponibilidade de caçamba em ${city}.`;

export const scMaterialMessage = (material: string) =>
  `Olá, gostaria de consultar disponibilidade de caçamba em Santa Catarina para o material: ${material}.`;

// ------------------------------------------------------------
// 1. Hero — Linha de cidades abaixo do CTA
// ------------------------------------------------------------
export const SC_HERO_CITIES_LINE =
  "Camboriú • Balneário Camboriú • Itajaí • Navegantes • Itapema • Penha • Piçarras • Brusque";

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
    ctaLabel: "Consultar para Obra",
    message:
      "Olá, preciso de uma caçamba para obra em Santa Catarina. Gostaria de consultar disponibilidade para meu endereço.",
  },
  {
    id: "reforma",
    title: "Caçamba para reforma",
    description:
      "Atendimento para reformas de casas, apartamentos, lojas e condomínios com recolhimento organizado de resíduos.",
    ctaLabel: "Consultar para Reforma",
    message:
      "Olá, preciso de uma caçamba para reforma em Santa Catarina. Gostaria de consultar disponibilidade para meu endereço.",
  },
  {
    id: "entulho",
    title: "Retirada de entulho",
    description:
      "Coleta de caliça, restos de concreto, tijolos, pisos, azulejos e materiais gerados durante demolições ou melhorias.",
    ctaLabel: "Solicitar Retirada",
    message:
      "Olá, preciso de uma caçamba para retirada de entulho em Santa Catarina. Gostaria de consultar disponibilidade para meu endereço.",
  },
  {
    id: "terreno",
    title: "Limpeza de terreno",
    description:
      "Apoio para limpeza e organização de lotes, quintais e áreas antes de iniciar a construção ou após obras.",
    ctaLabel: "Consultar para Terreno",
    message:
      "Olá, preciso de uma caçamba para limpeza de terreno em Santa Catarina. Gostaria de consultar disponibilidade para meu endereço.",
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
      "Aluguel de caçamba em Camboriú para obras, reformas e retirada de entulho. Consulte disponibilidade para seu endereço.",
  },
  {
    name: "Balneário Camboriú",
    tag: "Atendimento Regional",
    description:
      "Atendemos Balneário Camboriú na locação de caçambas para reformas residenciais, comerciais e obras civis. Consulte disponibilidade para sua rua ou condomínio.",
  },
  {
    name: "Itajaí",
    tag: "Atendimento Regional",
    description:
      "Atendimento em Itajaí com caçambas estacionárias para coleta de caliça, restos de alvenaria e limpeza de canteiros. Consulte disponibilidade no seu bairro.",
  },
  {
    name: "Navegantes",
    tag: "Atendimento Regional",
    description:
      "Locação de caçamba de entulho com atendimento em Navegantes para construções, ampliações e limpeza de lotes. Consulte disponibilidade para o local da obra.",
  },
  {
    name: "Itapema",
    tag: "Atendimento Regional",
    description:
      "Atendemos Itapema com caçambas para recolhimento de resíduos de construção e reformas em geral. Consulte disponibilidade informando seu endereço.",
  },
  {
    name: "Penha",
    tag: "Atendimento Regional",
    description:
      "Disk entulho e aluguel de caçamba com atendimento em Penha para obras residenciais, reformas e organização de terrenos. Consulte disponibilidade na região.",
  },
  {
    name: "Balneário Piçarras",
    tag: "Atendimento Regional",
    description:
      "Atendimento em Balneário Piçarras para retirada de entulho de obra, cerâmica, tijolos e reformas. Consulte disponibilidade para entrega no seu endereço.",
  },
  {
    name: "Brusque",
    tag: "Atendimento Regional",
    description:
      "Aluguel de caçamba com atendimento em Brusque para obras comerciais, residenciais e reformas. Consulte disponibilidade conforme localização e material.",
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
    a: "O valor depende da cidade, endereço, material e operação necessária. Consulte pelo WhatsApp.",
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
