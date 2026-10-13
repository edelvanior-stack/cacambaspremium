// ============================================================
// CAÇAMBAS PREMIUM — DISTRITO FEDERAL (/df)
// Configuração central da landing page DF.
// Este arquivo é usado SOMENTE pela página /df. A home ("/") não importa nada daqui.
// ============================================================

/**
 * WhatsApp EXCLUSIVO do DF — somente dígitos, formato internacional.
 * Exemplo: "5561999999999"
 *
 * ⚠️ Não use o número do site principal aqui.
 * Enquanto estiver vazio, os botões abrem o WhatsApp com a mensagem já
 * preenchida e o visitante escolhe o contato manualmente.
 */
export const WHATSAPP_DF = "";

/**
 * Exibição opcional do número na página. Exemplo: "(61) 99999-9999".
 * Só aparece no cabeçalho, CTA final e rodapé quando preenchido.
 */
export const WHATSAPP_DF_DISPLAY = "";

/**
 * Ação de conversão do Google Ads para a página DF.
 * Formato: "AW-XXXXXXXXXX/rotuloDaConversao".
 * Vazio = nenhuma conversão é enviada (apenas os eventos whatsapp_* abaixo).
 * Quando preenchido, no máximo 1 conversão é enviada por sessão.
 */
export const GOOGLE_ADS_CONVERSION_DF = "";

/** Eventos disparados nos CTAs e interações da página DF (gtag + dataLayer). */
export type DFEvent =
  | "whatsapp_hero"
  | "whatsapp_region"
  | "whatsapp_size_help"
  | "whatsapp_final"
  | "material_click"
  | "region_check_start"
  | "region_check_submit";

// ------------------------------------------------------------
// Mensagens pré-preenchidas por origem do CTA
// ------------------------------------------------------------
export const DF_MESSAGES = {
  hero: "Olá! Vim pelo site Caçambas Premium DF e preciso de uma caçamba.",
  region: "Olá! Quero consultar atendimento para meu endereço no DF.",
  sizeHelp: "Olá! Preciso de ajuda para escolher a caçamba correta.",
  publicArea:
    "Olá! Vou colocar a caçamba em área pública no DF e gostaria de orientação para a contratação.",
  final: "Olá! Vim pelo site Caçambas Premium DF e quero solicitar uma caçamba.",
} as const;

export const needMessage = (label: string) =>
  `Olá! Vim pelo site Caçambas Premium DF.\n\nNecessidade: ${label}\n\nGostaria de verificar disponibilidade e valor.`;

export const materialMessage = (material: string) =>
  `Olá! Preciso de uma caçamba para ${material.toLowerCase()} no DF.`;

export interface QuickQuoteData {
  regiao: string;
  bairro: string;
  material: string;
  data: string;
}

export const quickQuoteMessage = ({ regiao, bairro, material, data }: QuickQuoteData) =>
  `Olá! Preciso de uma caçamba no DF.\n\nRegião: ${regiao}\nBairro: ${bairro}\nMaterial: ${material}\nData: ${data}\n\nGostaria de verificar disponibilidade e valor.`;

// ------------------------------------------------------------
// Regiões atendidas
// Para remover uma região da página, marque `active: false`.
// Regiões inativas não aparecem na lista nem no formulário.
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
];

export const DF_ACTIVE_REGIONS = DF_REGIONS.filter((r) => r.active);
export const DF_PRIMARY_REGIONS = DF_ACTIVE_REGIONS.filter((r) => r.featured);
export const DF_SECONDARY_REGIONS = DF_ACTIVE_REGIONS.filter((r) => !r.featured);

// ------------------------------------------------------------
// Necessidade da obra (sem medidas ou preços não confirmados)
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
    description: "Banheiro, cozinha, pequenos reparos e reformas.",
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
    description: "Construções, demolições e grandes quantidades.",
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
// FAQ — mantenha sincronizado com o JSON-LD FAQPage em /df/index.html
// ------------------------------------------------------------
export const DF_FAQ: { q: string; a: string }[] = [
  {
    q: "Quanto custa alugar uma caçamba no DF?",
    a: "O preço depende do endereço, tipo de material e condições da operação. Envie sua localização pelo WhatsApp para receber o orçamento.",
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
// Provas de confiança (licenças, documentos, avaliações, números).
// VAZIO POR PADRÃO. Preencha SOMENTE com dados reais e comprováveis.
// Quando houver itens, o bloco aparece automaticamente na seção de descarte.
// Exemplo: { label: "Avaliação no Google", value: "4,9" }
// ------------------------------------------------------------
export interface DFProof {
  label: string;
  value: string;
}

export const DF_PROOFS: DFProof[] = [];

// ------------------------------------------------------------
// Dados cadastrais e legais da empresa para a operação DF.
// VAZIO POR PADRÃO. Preencha apenas com dados comprovados do DF.
// Não inventar CNPJ, endereço ou telefones.
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
