import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";
import { BUSINESS } from "@/config/business";

const FAQS = [
  {
    q: "Qual o tamanho da caçamba?",
    a: "Consulte os tamanhos de caçambas disponíveis para o seu endereço diretamente pelo nosso WhatsApp. Nossa equipe orienta na escolha ideal para a sua obra.",
  },
  {
    q: "Quanto tempo posso ficar com a caçamba?",
    a: "O período padrão e as condições de permanência são alinhados no momento da solicitação. Caso precise de mais tempo, basta nos avisar pelo WhatsApp.",
  },
  {
    q: "O que pode ser colocado na caçamba?",
    a: "Resíduos de obras e reformas como alvenaria, concreto, tijolos, cerâmica, argamassa e madeira. Para outros materiais ou itens especiais, consulte previamente nossa equipe pelo WhatsApp. Não é permitido o descarte de lixo orgânico, produtos químicos, pneus ou lixo hospitalar.",
  },
  {
    q: "Como solicitar uma caçamba?",
    a: `Basta entrar em contato pelo nosso WhatsApp ${BUSINESS.whatsappDisplay} informando o endereço da obra e o tipo de resíduo. Nossa equipe atenderá você para alinhar todos os detalhes.`,
  },
  {
    q: "Qual o valor da locação?",
    a: "O valor varia conforme a localidade e o endereço de entrega. Solicite sua cotação pelo WhatsApp informando o seu bairro para passarmos os valores.",
  },
  {
    q: "Vocês atendem aos finais de semana?",
    a: "Consulte nossa equipe pelo WhatsApp para verificar a disponibilidade de agendamento conforme a necessidade da sua obra.",
  },
  {
    q: "A caçamba pode ficar na rua?",
    a: "Sim, a caçamba pode ser posicionada na rua desde que siga as normas da prefeitura local. Orientamos sobre a sinalização e posicionamento correto para garantir segurança.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-orange-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Perguntas Frequentes
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4">
            Dúvidas{" "}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Encontre as respostas para as perguntas mais comuns sobre nossos serviços.
          </p>
        </div>

        <div className="reveal">
          <Accordion className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-2xl border border-slate-100 px-6 overflow-hidden data-[state=open]:shadow-lg data-[state=open]:shadow-orange-600/5 transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-slate-800 text-base py-5 hover:text-orange-600 transition-colors">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 leading-relaxed pb-5">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
