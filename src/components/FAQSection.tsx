import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";
import { BUSINESS } from "@/config/business";
import { trackWhatsAppClick } from "@/lib/analytics";

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
    a: "O período de permanência padrão é de até 7 dias, combinado no momento da solicitação. Caso precise de mais tempo, basta nos avisar pelo WhatsApp para alinharmos a prorrogação.",
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

        {/* CTA */}
        <div className="mt-10 sm:mt-12 text-center reveal flex flex-col items-center">
          <p className="text-slate-600 text-sm sm:text-base mb-4 font-medium">
            Ainda tem dúvidas? Fale agora mesmo com nossa equipe.
          </p>
          <a
            href={BUSINESS.whatsappLinkWithMessage}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("faq_section")}
            className="w-full sm:w-auto min-h-[56px] inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-2xl text-base sm:text-lg font-bold shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg
              className="w-6 h-6 text-white fill-current flex-shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Pedir orçamento no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
