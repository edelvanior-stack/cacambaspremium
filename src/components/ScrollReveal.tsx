import { useEffect } from "react";
import { trackPageView, resetScrollTracking } from "@/lib/analytics";

export default function ScrollReveal() {
  useEffect(() => {
    // Initialize IntersectionObserver for reveal animations
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // Track SPA page views on section visibility
    const sections = document.querySelectorAll('[id]');
    let currentSection = "";
    
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id;
            if (id && id !== currentSection) {
              currentSection = id;
              trackPageView(`/#${id}`);
              resetScrollTracking();
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    
    // Initial observation
    const observe = () => {
      // Observe elements for reveal animation
      const elements = document.querySelectorAll(".reveal:not(.visible)");
      elements.forEach((el) => revealObserver.observe(el));
      
      // Observe sections for page view tracking
      sections.forEach((el) => sectionObserver.observe(el));
    };

    observe();

    // Re-observe on DOM mutations (for dynamic content)
    const mutationObserver = new MutationObserver(() => {
      observe();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
