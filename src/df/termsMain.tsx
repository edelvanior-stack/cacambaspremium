import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./df.css";
import DFTermsPage from "./DFTermsPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DFTermsPage />
  </StrictMode>
);
