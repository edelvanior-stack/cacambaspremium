import { startTransition } from "react";
import { createRoot } from "react-dom/client";
import "./df.css";
import DFValorOrcamentoPage from "./DFValorOrcamentoPage";

const root = createRoot(document.getElementById("root")!);
startTransition(() => {
  root.render(<DFValorOrcamentoPage />);
});
