// ============================================================
// ANALYTICS & TRACKING - Caçambas Premium
// ============================================================

// Google Ads Conversion ID
export const GADS_ID = "AW-17696330213";

// ============================================================
// INITIALIZATION
// ============================================================
// Google Ads Tag initialized directly in index.html as requested.

// ============================================================
// SPA ROUTE TRACKING
// ============================================================

let lastTrackedPath: string | null = null;

/**
 * Track virtual page view for SPA navigation
 * Call this on route change / section scroll into view
 */
export const trackPageView = (path?: string, title?: string) => {
  if (typeof window === "undefined") return;
  
  const currentPath = path || location.pathname + location.search;
  
  // Avoid tracking same path multiple times
  if (currentPath === lastTrackedPath) return;
  lastTrackedPath = currentPath;

  window.gtag?.('event', 'page_view', {
    page_path: currentPath,
    page_title: title || document.title,
    send_to: GADS_ID,
  });
};

/**
 * Track initial page load
 */
export const trackInitialPageView = () => {
  trackPageView(location.pathname, document.title);
};

// ============================================================
// WHATSAPP CONVERSION TRACKING - EXISTENTE (Solicitar cotação 6)
// ============================================================

/**
 * Track WhatsApp button click as Google Ads conversion + dataLayer event.
 * Conversão Existente (6): AW-17696330213/vmiTCOf4798cEOWjovZB (PRESERVADA INTACTA)
 */
export const trackWhatsAppClick = (source: string) => {
  if (typeof window === "undefined") return;

  // 1. Google Ads conversion event (Existente 6)
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17696330213/vmiTCOf4798cEOWjovZB',
      'value': 1.0,
      'currency': 'BRL',
    });
  }

  // 2. dataLayer push (for GTM compatibility)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click",
    category: "conversion",
    action: "click",
    label: source,
  });
};

// ============================================================
// WHATSAPP CONVERSION TRACKING - EXISTENTE (Solicitar cotação 9)
// ============================================================

/**
 * Track WhatsApp button click for action: Solicitar cotação (9)
 * Conversão Existente (9): AW-17696330213/6iCLCMCy2-AcEOWjovZB (PRESERVADA INTACTA)
 */
export const trackWhatsAppClick9 = (source: string) => {
  if (typeof window === "undefined") return;

  // 1. Google Ads conversion event (Existente 9)
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17696330213/6iCLCMCy2-AcEOWjovZB',
      'value': 1.0,
      'currency': 'BRL',
    });
  }

  // 2. dataLayer push (for GTM compatibility)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click_9",
    category: "conversion",
    action: "click",
    label: source,
  });
};

/**
 * Official helper for action "Solicitar cotação (9)" with preventDefault & timeout
 */
export function reportQuote9AndOpenWhatsApp(url: string, e?: { preventDefault: () => void }) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  let opened = false;
  const finish = () => {
    if (opened) return;
    opened = true;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    finish();
    return;
  }

  window.gtag('event', 'conversion', {
    send_to: 'AW-17696330213/6iCLCMCy2-AcEOWjovZB',
    value: 1.0,
    currency: 'BRL',
    event_callback: finish,
    event_timeout: 1500
  });

  setTimeout(finish, 1600);
}

// ============================================================
// WHATSAPP CONVERSION TRACKING - NOVA (Solicitar cotação 11)
// ============================================================

/**
 * Track WhatsApp button click for NEW action: Solicitar cotação (11)
 * send_to: 'AW-17696330213/hO97CLP6y-AcEOWjovZB'
 */
export const trackWhatsAppClick11 = (source: string) => {
  if (typeof window === "undefined") return;

  // 1. Google Ads conversion event (Nova 11)
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17696330213/hO97CLP6y-AcEOWjovZB',
      'value': 1.0,
      'currency': 'BRL',
    });
  }

  // 2. dataLayer push (for GTM compatibility)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click_11",
    category: "conversion",
    action: "click",
    label: source,
  });
};

/**
 * Official helper for action "Solicitar cotação (11)" with preventDefault & timeout (Item 11)
 */
export function openWhatsAppWithConversion11(url: string, e?: { preventDefault: () => void }) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  let opened = false;
  const finish = () => {
    if (opened) return;
    opened = true;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    finish();
    return;
  }

  window.gtag('event', 'conversion', {
    send_to: 'AW-17696330213/hO97CLP6y-AcEOWjovZB',
    value: 1.0,
    currency: 'BRL',
    event_callback: finish,
    event_timeout: 1500
  });

  setTimeout(finish, 1600);
}

// ============================================================
// FORM CONVERSION TRACKING
// ============================================================

/**
 * Track successful form submission (quote request)
 */
export const trackFormSubmit = () => {
  if (typeof window === "undefined") return;
  
  if (window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: 'quote_form',
      value: 1,
      send_to: GADS_ID,
    });
  }
};

// ============================================================
// ENGAGEMENT TRACKING
// ============================================================

/**
 * Track user scroll depth milestones
 * Automatically tracks at 25%, 50%, 75%, 100%
 */
const trackedDepths = new Set<number>();

export const trackScrollDepth = (percent: number) => {
  if (trackedDepths.has(percent)) return;
  if (typeof window === "undefined") return;
  
  trackedDepths.add(percent);

  window.gtag?.('event', 'scroll_depth', {
    event_category: 'engagement',
    event_label: `${percent}%`,
    value: percent,
  });
};

/** Reset scroll depth tracking (call this on every SPA route change) */
export const resetScrollTracking = () => {
  trackedDepths.clear();
};

// ============================================================
// UTILITY: Scroll Depth Observer
// ============================================================

let scrollObserverInitialized = false;

/**
 * Initialize automatic scroll depth tracking observer
 * Call once on app mount
 */
export const initScrollObserver = () => {
  if (typeof window === "undefined" || scrollObserverInitialized) return;
  scrollObserverInitialized = true;

  const depths = [25, 50, 75, 100];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const depthPct = parseInt(target.dataset.depth || "0", 10);
          trackScrollDepth(depthPct);
        }
      });
    },
    { threshold: 0.5 }
  );

  depths.forEach((depth) => {
    const el = document.createElement("div");
    el.setAttribute("data-depth", String(depth));
    el.style.position = "absolute";
    el.style.height = `${depth}%`;
    el.style.width = "1px";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    observer.observe(el);
    
    // Remove after observation starts
    setTimeout(() => el.remove(), 5000);
  });

  return observer;
};
