const WA_PREFILLED = "Olá, quero alugar uma caçamba em Curitiba. Preciso para o dia: ";

const WA_NUMBER = "554197946609";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;

export const BUSINESS = {
  brand: "Caçambas Premium",
  cnpj: "11.246.768/0001-66",

  whatsapp: WA_NUMBER,
  whatsappDisplay: "(41) 9794-6609",
  whatsappLink: WA_LINK,

  whatsappMessage: WA_PREFILLED,
  whatsappLinkWithMessage: `${WA_LINK}?text=${encodeURIComponent(WA_PREFILLED)}`,

  address: {
    street: "Rua Alcídio Ceccon",
    number: "393, Sala 01",
    neighborhood: "Bela Vista",
    city: "Campina Grande do Sul",
    state: "PR",
    postalCode: "83435-162",
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
      price: "A partir de R$ 199,99 em Curitiba",
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
