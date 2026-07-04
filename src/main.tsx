import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { trackInitialPageView, initScrollObserver } from "./lib/analytics";

// Initialize GA4 on client
if (typeof window !== "undefined") {
  // Track initial page view after a tick to ensure DOM is ready
  requestAnimationFrame(() => {
    trackInitialPageView();
  });
}

// Initialize scroll observer for engagement tracking
if (typeof document !== "undefined") {
  // Delay observer setup until DOM is ready
  setTimeout(() => {
    initScrollObserver();
  }, 1000);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
