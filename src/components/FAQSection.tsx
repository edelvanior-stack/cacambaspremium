import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";

const FAQS = [
  {
    q: "Qual o tamanho da caçamba?",
    a: "Trabalhamos com caçambas de 3m³, 4m³ e 5m³. A mais utilizada é a de 5m³, ideal para reformas residenciais e pequenas obras. Nossa equipe ajuda a escolher o tamanho ideal para sua necessidade.",
  },
  {
    q: "Quanto tempo posso ficar com a caçamba?",
    a: "O período padrão é de 3 a 5 dias úteis. Caso precise de mais tempo, entre em contato conosco para combinar uma extensão. Cobramos apenas uma pequena taxa adicional por dia excedente.",
  },
  {
    q: "O que pode ser colocado na caçamba?",
    a: "Resíduos de construção civil como concreto, tijolos, cerâmica, argamassa, madeira, ferragens, terra e pedras. Não é permitido o descarte de lixo orgânico, materiais perigosos, produtos químicos, pneus ou lixo hospitalar.",
  },
  {
    q: "Vocês possuem licença ambiental?",
    a: "Sim! Somos uma empresa totalmente regularizada com todas as licenças ambientais necessárias para o transporte e destinação correta de resíduos da construção civil.",
  },
  {
    q: "Como solicitar uma caçamba?",
    a: "É muito simples! Basta entrar em contato pelo nosso WhatsApp (47) 99257-9095 informando o endereço da obra e o tipo de resíduo. Respondemos em poucos minutos e enviamos a caçamba em até 2 horas.",
  },
  {
    q: "Qual o valor da locação?",
    a: "O valor varia conforme o tamanho da caçamba e a localidade da entrega. Solicite um orçamento sem compromisso pelo WhatsApp e teremos prazer em enviar o melhor preço.",
  },
  {
    q: "Vocês trabalham aos finais de semana?",
    a: "Sim! Nosso atendimento funciona de segunda a sábado, e disponibilizamos entregas emergenciais aos domingos e feriados mediante agendamento prévio.",
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
