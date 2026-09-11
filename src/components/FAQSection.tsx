import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";
import { BUSINESS } from "@/config/business";

const FAQS = [
  {
    q: "Qual o tamanho ideal de caçamba para minha obra?",
    a: "Oferecemos caçambas de 3m³, 4m³, 5m³ e 7m³. A caçamba de 3m³ é indicada para pequenas reformas (banheiro, cozinha). Para reformas maiores ou demolições, recomendamos 5m³ ou 7m³. Se tiver dúvidas, nossa equipe orienta pelo WhatsApp.",
  },
  {
    q: "Quanto custa alugar uma caçamba em Curitiba?",
    a: "O valor varia conforme o tamanho da caçamba e o endereço de entrega. Solicite sua cotação pelo WhatsApp informando o bairro e o tipo de material para receber o valor atualizado.",
  },
  {
    q: "Vocês entregam no meu bairro?",
    a: `Atendemos Curitiba e Região Metropolitana, incluindo São José dos Pinhais, Pinhais, Araucária, Colombo, Fazenda Rio Grande e Campo Largo. Consulte a disponibilidade para o seu endereço pelo WhatsApp ${BUSINESS.whatsappDisplay}.`,
  },
  {
    q: "Quanto tempo posso ficar com a caçamba?",
    a: "O período de permanência é combinado no momento da solicitação. Caso precise de mais tempo, basta nos avisar pelo WhatsApp para alinharmos a prorrogação.",
  },
  {
    q: "O que pode e o que não pode colocar na caçamba?",
    a: "Pode: entulho de obras e reformas como concreto, alvenaria, tijolos, cerâmica, argamassa e madeira de obra. Não pode: lixo orgânico, produtos químicos, pneus, lixo hospitalar. Para outros materiais, consulte nossa equipe antes.",
  },
  {
    q: "Como solicitar uma caçamba pelo WhatsApp?",
    a: `Clique em qualquer botão de WhatsApp do site ou envie uma mensagem para ${BUSINESS.whatsappDisplay} informando o endereço, tipo de material e o tamanho desejado. Nossa equipe retorna com o orçamento.`,
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-14 sm:py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-block text-orange-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Perguntas Frequentes
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 mb-4">
            Dúvidas{" "}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            As respostas para as dúvidas mais comuns sobre locação de caçambas.
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
