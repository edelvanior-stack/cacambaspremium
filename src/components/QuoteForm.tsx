import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { X, CheckCircle2, Send, ImageIcon, ShieldCheck } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

const WA_NUMBER = "5547992579095";

const CIDADES = [
  "Itajaí",
  "Balneário Camboriú",
  "Camboriú",
  "Navegantes",
  "Penha",
  "Piçarras",
  "Itapema",
  "Brusque",
];

const TAMANHOS = ["3m³", "4m³", "5m³", "Não tenho certeza, preciso de ajuda"];

const TIPOS = [
  "Entulho de Construção",
  "Reforma",
  "Demolição",
  "Madeira",
  "Gesso",
  "Terra",
  "Entulho de Jardim",
  "Misto",
  "Outro",
];

const inputBase =
  "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm min-w-0";

type FormState = {
  nome: string;
  telefone: string;
  email: string;
  cidade: string;
  bairro: string;
  endereco: string;
  tamanho: string;
  tipo: string;
  data: string;
  info: string;
};

const initialForm: FormState = {
  nome: "",
  telefone: "",
  email: "",
  cidade: "",
  bairro: "",
  endereco: "",
  tamanho: "",
  tipo: "",
  data: "",
  info: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [lgpd, setLgpd] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [key]: e.target.value });
    if (errors[key]) {
      const next = { ...errors };
      delete next[key];
      setErrors(next);
    }
  };

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setErrors({ ...errors, foto: "A imagem deve ter no máximo 10MB." });
      return;
    }
    setPhotoPreview(URL.createObjectURL(file));
    if (errors.foto) {
      const next = { ...errors };
      delete next.foto;
      setErrors(next);
    }
  };

  const removePhoto = () => {
    setPhotoPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.nome.trim()) next.nome = "Informe seu nome completo.";
    if (!form.telefone.trim()) next.telefone = "Informe seu telefone / WhatsApp.";
    if (!form.cidade) next.cidade = "Selecione a cidade.";
    if (!form.bairro.trim()) next.bairro = "Informe o bairro.";
    if (!form.endereco.trim()) next.endereco = "Informe o endereço completo.";
    if (!form.tamanho) next.tamanho = "Selecione o tamanho da caçamba.";
    if (!form.tipo) next.tipo = "Selecione o tipo de resíduo.";
    if (!lgpd) next.lgpd = "É necessário aceitar a política de privacidade.";
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = document.querySelector<HTMLElement>("[aria-invalid='true']");
      if (first) first.focus();
      return;
    }

    const dataFormatada = form.data
      ? new Date(form.data + "T00:00:00").toLocaleDateString("pt-BR")
      : "—";

    const lines = [
      "Olá! Gostaria de solicitar um orçamento para locação de caçamba.",
      "",
      `*Nome:* ${form.nome}`,
      `*Telefone:* ${form.telefone}`,
      `*E-mail:* ${form.email || "—"}`,
      `*Cidade:* ${form.cidade}`,
      `*Bairro:* ${form.bairro}`,
      `*Endereço:* ${form.endereco}`,
      `*Tamanho da Caçamba:* ${form.tamanho}`,
      `*Tipo de Resíduo:* ${form.tipo}`,
      `*Data Preferida:* ${dataFormatada}`,
      `*Informações Adicionais:* ${form.info || "—"}`,
    ];
    if (photoPreview) {
      lines.push("", "⚠️ Envie a foto do local/entulho em seguida nesta conversa.");
    }

    const msg = encodeURIComponent(lines.join("\n"));
    trackWhatsAppClick('quote_form_submit');
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm(initialForm);
    setLgpd(false);
    removePhoto();
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 md:p-10 shadow-sm text-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4 sm:mb-5">
          <CheckCircle2 className="w-7 h-7 sm:w-9 sm:h-9 text-green-600" />
        </div>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-3">
          Solicitação enviada com sucesso!
        </h3>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-6 sm:mb-7">
          Abrimos o WhatsApp com a sua mensagem pronta para envio. Basta confirmar no app e nossa equipe
          responderá em poucos minutos com o melhor orçamento. 🚛
        </p>
        <button
          onClick={resetForm}
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:shadow-orange-600/25"
        >
          Enviar nova solicitação
        </button>
      </div>
    );
  }

  const Field = ({
    name,
    label,
    required,
    error,
    children,
  }: {
    name: string;
    label: string;
    required?: boolean;
    error?: string;
    children: React.ReactNode;
  }) => (
    <div className="min-w-0">
      <label htmlFor={name} className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 sm:mt-1.5 text-xs font-medium text-red-500 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-red-500" />
          {error}
        </p>
      )}
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl border border-slate-100 p-4 sm:p-6 md:p-8 shadow-sm space-y-4 sm:space-y-5"
    >
      <Field name="nome" label="Nome Completo" required error={errors.nome}>
        <input
          id="nome"
          type="text"
          value={form.nome}
          onChange={set("nome")}
          aria-invalid={!!errors.nome}
          placeholder="Seu nome completo"
          className={`${inputBase} ${errors.nome ? "border-red-300" : "border-slate-200"}`}
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <Field name="telefone" label="Telefone / WhatsApp" required error={errors.telefone}>
          <input
            id="telefone"
            type="tel"
            value={form.telefone}
            onChange={set("telefone")}
            aria-invalid={!!errors.telefone}
            placeholder="(47) 99999-9999"
            className={`${inputBase} ${errors.telefone ? "border-red-300" : "border-slate-200"}`}
          />
        </Field>
        <Field name="email" label="E-mail">
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="seu@email.com"
            className={`${inputBase} border-slate-200`}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <Field name="cidade" label="Cidade" required error={errors.cidade}>
          <select
            id="cidade"
            value={form.cidade}
            onChange={set("cidade")}
            aria-invalid={!!errors.cidade}
            className={`${inputBase} ${errors.cidade ? "border-red-300" : "border-slate-200"}`}
          >
            <option value="">Selecione a cidade</option>
            {CIDADES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field name="bairro" label="Bairro" required error={errors.bairro}>
          <input
            id="bairro"
            type="text"
            value={form.bairro}
            onChange={set("bairro")}
            aria-invalid={!!errors.bairro}
            placeholder="Ex: Centro, Bairro da Praia..."
            className={`${inputBase} ${errors.bairro ? "border-red-300" : "border-slate-200"}`}
          />
        </Field>
      </div>

      <Field name="endereco" label="Endereço Completo de Entrega" required error={errors.endereco}>
        <input
          id="endereco"
          type="text"
          value={form.endereco}
          onChange={set("endereco")}
          aria-invalid={!!errors.endereco}
          placeholder="Rua, número, complemento"
          className={`${inputBase} ${errors.endereco ? "border-red-300" : "border-slate-200"}`}
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <Field name="tamanho" label="Tamanho da Caçamba" required error={errors.tamanho}>
          <select
            id="tamanho"
            value={form.tamanho}
            onChange={set("tamanho")}
            aria-invalid={!!errors.tamanho}
            className={`${inputBase} ${errors.tamanho ? "border-red-300" : "border-slate-200"}`}
          >
            <option value="">Selecione o tamanho</option>
            {TAMANHOS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field name="tipo" label="Tipo de Resíduo" required error={errors.tipo}>
          <select
            id="tipo"
            value={form.tipo}
            onChange={set("tipo")}
            aria-invalid={!!errors.tipo}
            className={`${inputBase} ${errors.tipo ? "border-red-300" : "border-slate-200"}`}
          >
            <option value="">Selecione o tipo</option>
            {TIPOS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field name="data" label="Data Preferida para Entrega">
        <input
          id="data"
          type="date"
          value={form.data}
          onChange={set("data")}
          className={`${inputBase} border-slate-200`}
        />
      </Field>

      <Field name="info" label="Informações Adicionais">
        <textarea
          id="info"
          rows={3}
          value={form.info}
          onChange={set("info")}
          placeholder="Detalhe sua necessidade: volume de entulho, acesso ao local, restrições..."
          className={`${inputBase} border-slate-200 resize-none`}
        />
      </Field>

      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">
          Foto do Local ou Entulho <span className="text-slate-400 font-normal">(opcional)</span>
        </label>
        {photoPreview ? (
          <div className="relative rounded-xl overflow-hidden border border-slate-200 inline-block">
            <img src={photoPreview} alt="Pré-visualização" className="h-28 sm:h-32 w-auto object-cover" />
            <button
              type="button"
              onClick={removePhoto}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
              aria-label="Remover foto"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="w-full flex flex-col items-center justify-center gap-2 py-5 sm:py-6 rounded-xl border-2 border-dashed border-slate-200 hover:border-orange-400 hover:bg-orange-50/40 transition-all text-slate-400 hover:text-orange-600"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-xs sm:text-sm font-medium">Clique para anexar uma foto</span>
            <span className="text-[10px] sm:text-xs text-slate-400">JPG ou PNG • até 10MB</span>
          </button>
        )}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handlePhoto}
          className="hidden"
        />
        {errors.foto && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-red-500">
            {errors.foto}
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-2.5 sm:gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={lgpd}
            onChange={(e) => {
              setLgpd(e.target.checked);
              if (errors.lgpd) {
                const next = { ...errors };
                delete next.lgpd;
                setErrors(next);
              }
            }}
            aria-invalid={!!errors.lgpd}
            className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500/30 cursor-pointer flex-shrink-0"
          />
          <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Autorizo o tratamento dos meus dados pessoais conforme a{" "}
            <span className="font-semibold text-slate-800">LGPD (Lei nº 13.709/2018)</span> para fins de
            contato e envio de orçamento. *
          </span>
        </label>
        {errors.lgpd && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-red-500 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-red-500" />
            {errors.lgpd}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all hover:shadow-lg hover:shadow-orange-600/25"
      >
        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
        Solicitar Orçamento pelo WhatsApp
      </button>

      <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-slate-400">
        <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
        Seus dados estão seguros. Sem spam, compromisso ou taxa oculta.
      </div>
    </form>
  );
}
