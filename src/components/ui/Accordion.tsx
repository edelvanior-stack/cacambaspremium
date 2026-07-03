import { useState, createContext, useContext, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type ItemContextType = {
  isOpen: boolean;
  toggle: () => void;
};

const ItemContext = createContext<ItemContextType | null>(null);

type AccordionContextType = {
  openValue: string | null;
  setOpenValue: (v: string | null) => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

export function Accordion({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [openValue, setOpenValue] = useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  children,
  className = "",
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const ctx = useContext(AccordionContext);
  if (!ctx) return null;
  const isOpen = ctx.openValue === value;
  const toggle = () => ctx.setOpenValue(isOpen ? null : value);

  return (
    <ItemContext.Provider value={{ isOpen, toggle }}>
      <div
        className={className}
        data-state={isOpen ? "open" : "closed"}
      >
        {children}
      </div>
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ctx = useContext(ItemContext);
  if (!ctx) return null;
  const { isOpen, toggle } = ctx;

  return (
    <button
      type="button"
      onClick={toggle}
      className={`w-full flex items-center justify-between gap-4 ${className}`}
      aria-expanded={isOpen}
    >
      <span className="flex-1 text-left">{children}</span>
      <ChevronDown
        className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${
          isOpen ? "rotate-180 text-orange-600" : ""
        }`}
      />
    </button>
  );
}

export function AccordionContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ctx = useContext(ItemContext);
  if (!ctx) return null;
  const { isOpen } = ctx;

  return (
    <div
      className={`grid transition-all duration-300 ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <div className={className}>{children}</div>
      </div>
    </div>
  );
}
