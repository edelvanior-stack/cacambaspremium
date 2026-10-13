import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./df.css";
import DFPrivacyPage from "./DFPrivacyPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DFPrivacyPage />
  </StrictMode>
);
