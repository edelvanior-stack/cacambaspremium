import { startTransition } from "react";
import { createRoot } from "react-dom/client";
import "./df.css";
import DFEntornoPage from "./DFEntornoPage";

const root = createRoot(document.getElementById("root")!);
startTransition(() => {
  root.render(<DFEntornoPage />);
});
