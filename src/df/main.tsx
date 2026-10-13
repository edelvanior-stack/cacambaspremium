import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./df.css";
import DFPage from "./DFPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DFPage />
  </StrictMode>
);
