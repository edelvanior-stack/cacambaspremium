import { startTransition } from "react";
import { createRoot } from "react-dom/client";
import "./sc.css";
import SCPage from "./SCPage";

const root = createRoot(document.getElementById("root")!);
startTransition(() => {
  root.render(<SCPage />);
});
