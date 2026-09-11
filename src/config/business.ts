const WA_PREFILLED = `Olá! Vim pelo Google e preciso de uma caçamba.

Cidade/Bairro:
Material:
Tamanho da caçamba:
Para quando preciso:`;

const WA_LINK = "https://wa.me/5541991414452";

export const BUSINESS = {
  brand: "Caçambas Premium",

  whatsapp: "5541991414452",
  whatsappDisplay: "(41) 99141-4452",
  whatsappLink: WA_LINK,

  whatsappMessage: WA_PREFILLED,
  whatsappLinkWithMessage: `${WA_LINK}?text=${encodeURIComponent(WA_PREFILLED)}`,

  address: {
    street: "Rua Maria de Lourdes Kudri",
    number: "127",
    neighborhood: "Barreirinha",
    city: "Curitiba",
    state: "PR",
    postalCode: "82700-050",
    country: "BR",
  },

  region: "Curitiba e Região Metropolitana",

  cities: [
    "Curitiba",
    "São José dos Pinhais",
    "Pinhais",
    "Araucária",
    "Colombo",
    "Fazenda Rio Grande",
    "Campo Largo",
  ],

  sizes: [
    {
      volume: "3m³",
      title: "Caçamba 3m³",
      subtitle: "Pequenas Reformas",
      description: "Ideal para reformas de banheiro, cozinha ou pequenos reparos residenciais.",
      examples: ["Banheiro", "Cozinha", "Reparos"],
    },
    {
      volume: "4m³",
      title: "Caçamba 4m³",
      subtitle: "Reformas Médias",
      description: "Para reformas de apartamento, quartos ou áreas internas maiores.",
      examples: ["Apartamento", "Quartos", "Áreas internas"],
    },
    {
      volume: "5m³",
      title: "Caçamba 5m³",
      subtitle: "Reformas Grandes",
      description: "Para reformas completas de casas, lojas ou obras de maior porte.",
      examples: ["Casa completa", "Loja", "Obra maior"],
    },
    {
      volume: "7m³",
      title: "Caçamba 7m³",
      subtitle: "Obras e Demolições",
      description: "Para construções, demolições e grandes volumes de entulho.",
      examples: ["Construção", "Demolição", "Grande volume"],
    },
  ],
} as const;
