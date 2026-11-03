import { useEffect } from "react";

export default function ScrollReveal({ active = false }: { active?: boolean }) {
  useEffect(() => {
    if (!active) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 80px 0px" }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
        revealObserver.observe(el);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      revealObserver.disconnect();
    };
  }, [active]);

  return null;
}

