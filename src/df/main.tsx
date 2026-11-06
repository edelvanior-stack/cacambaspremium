import { startTransition } from "react";
import { createRoot } from "react-dom/client";
import "./df.css";
import DFPage from "./DFPage";

const root = createRoot(document.getElementById("root")!);
startTransition(() => {
  root.render(<DFPage />);
});
