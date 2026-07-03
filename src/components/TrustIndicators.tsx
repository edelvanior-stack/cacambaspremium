import { useState, useEffect, useRef } from "react";
import { Award, Truck, MapPin, ThumbsUp } from "lucide-react";
import type { ComponentType } from "react";

const STATS: { icon: ComponentType<{ className?: string }>; value: number; suffix: string; label: string }[] = [
  { icon: Award, value: 12, suffix: "+", label: "Anos de Experiência" },
  { icon: Truck, value: 15000, suffix: "+", label: "Entregas Realizadas" },
  { icon: MapPin, value: 8, suffix: "", label: "Cidades Atendidas" },
  { icon: ThumbsUp, value: 98, suffix: "%", label: "Clientes Satisfeitos" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    /* FIX: Smaller text on mobile to prevent overflow with 15.000+ */
    <span ref={ref} className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900">
      {count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

export default function TrustIndicators() {
  return (
    /* FIX: Reduce negative margin on mobile to prevent overlap with hero */
    <section className="relative -mt-8 sm:-mt-12 md:-mt-16 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {STATS.map(({ icon: Icon, value, suffix, label }) => (
          <div
            key={label}
            className="reveal glass-light rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-xl hover:shadow-orange-600/5 transition-all duration-300 hover:-translate-y-1 group min-w-0"
          >
            {/* FIX: Smaller icon on mobile */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-50 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-orange-100 transition-colors">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
            </div>
            <Counter target={value} suffix={suffix} />
            {/* FIX: Smaller label on mobile */}
            <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1.5 sm:mt-2">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
