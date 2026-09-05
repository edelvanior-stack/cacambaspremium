import { X, Shield, FileText } from "lucide-react";
import { BUSINESS } from "@/config/business";

type LegalModalProps = {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms" | null;
};

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen || !type) return null;

  const isPrivacy = type === "privacy";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
              {isPrivacy ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                {isPrivacy ? "Política de Privacidade" : "Termos de Uso"}
              </h3>
              <p className="text-xs text-slate-500">{BUSINESS.brand}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-slate-600 text-xs sm:text-sm leading-relaxed">
          {/* Identificação */}
          <div className="bg-orange-50/60 border border-orange-100 rounded-2xl p-4 space-y-1 text-slate-700">
            <p className="font-bold text-slate-900">{BUSINESS.brand}</p>
            <p><strong className="text-slate-800">Endereço:</strong> {BUSINESS.address.street}, {BUSINESS.address.number}, {BUSINESS.address.neighborhood}, {BUSINESS.address.city} - {BUSINESS.address.state}, CEP {BUSINESS.address.postalCode}</p>
            <p><strong className="text-slate-800">Contato:</strong> {BUSINESS.whatsappDisplay}</p>
          </div>

          {isPrivacy ? (
            <>
              <h4 className="font-display font-bold text-slate-900 text-base">1. Coleta e Tratamento de Dados (LGPD)</h4>
              <p>
                Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), a <strong>{BUSINESS.brand}</strong> informa que os dados pessoais fornecidos nos formulários do site (como nome, telefone, e-mail e endereço de entrega) são coletados exclusivamente para a prestação de serviços de locação de caçambas, orçamento e comunicação com o cliente.
              </p>

              <h4 className="font-display font-bold text-slate-900 text-base">2. Compartilhamento e Segurança</h4>
              <p>
                Seus dados não são vendidos, alugados ou compartilhados com terceiros para fins de marketing. O acesso às informações é restrito à equipe responsável pela logística de atendimento e emissão de orçamentos.
              </p>

              <h4 className="font-display font-bold text-slate-900 text-base">3. Direitos do Titular</h4>
              <p>
                O usuário pode solicitar a qualquer momento a confirmação, correção, atualização ou eliminação de seus dados pessoais armazenados, mediante contato via WhatsApp no número {BUSINESS.whatsappDisplay}.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-display font-bold text-slate-900 text-base">1. Condições Gerais de Locação</h4>
              <p>
                Os serviços de locação de caçambas são prestados pela <strong>{BUSINESS.brand}</strong>. O prazo de permanência da caçamba no local da obra e as condições de pagamento são acordados no momento da solicitação de orçamento.
              </p>

              <h4 className="font-display font-bold text-slate-900 text-base">2. Resíduos Permitidos e Proibidos</h4>
              <p>
                As caçambas destinam-se exclusivamente ao recolhimento de entulhos de construção civil, reformas e demolições. É estritamente proibido o descarte de resíduos perigosos, lixo hospitalar, produtos químicos, pneus ou lixo doméstico orgânico.
              </p>

              <h4 className="font-display font-bold text-slate-900 text-base">3. Posicionamento e Normas Municipais</h4>
              <p>
                O contratante deve garantir que o local reservado para a colocação da caçamba seja acessível para o caminhão e esteja em conformidade com as normas municipais de trânsito e sinalização da cidade de entrega.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/50 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
