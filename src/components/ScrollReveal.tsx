import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Reveal immediately on initial paint for fast mobile UX without scroll delay
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal:not(.visible)");
    elements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
