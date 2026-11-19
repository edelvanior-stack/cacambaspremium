import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolveMpaRoute(cleanUrl?: string): string | null {
  if (!cleanUrl) return null;
  if (cleanUrl === "/df/politica-de-privacidade" || cleanUrl === "/df/politica-de-privacidade/") {
    return "/df/politica-de-privacidade/index.html";
  }
  if (cleanUrl === "/df/termos-de-uso" || cleanUrl === "/df/termos-de-uso/") {
    return "/df/termos-de-uso/index.html";
  }
  if (cleanUrl === "/df" || cleanUrl === "/df/") {
    return "/df/index.html";
  }
  if (cleanUrl === "/valor/orcamento" || cleanUrl === "/valor/orcamento/") {
    return "/valor/orcamento/index.html";
  }
  if (cleanUrl === "/entorno/cacamba" || cleanUrl === "/entorno/cacamba/") {
    return "/entorno/cacamba/index.html";
  }
  if (cleanUrl === "/sc" || cleanUrl === "/sc/") {
    return "/sc/index.html";
  }
  return null;
}

function dfHtmlFallbackPlugin(): Plugin {
  return {
    name: "df-html-fallback",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const cleanUrl = req.url?.split("?")[0];
        const target = resolveMpaRoute(cleanUrl);
        if (target) {
          req.url = target;
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        const cleanUrl = req.url?.split("?")[0];
        const target = resolveMpaRoute(cleanUrl);
        if (target) {
          req.url = target;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dfHtmlFallbackPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        df: path.resolve(__dirname, "df/index.html"),
        dfValorOrcamento: path.resolve(__dirname, "valor/orcamento/index.html"),
        dfEntornoCacamba: path.resolve(__dirname, "entorno/cacamba/index.html"),
        dfPrivacy: path.resolve(__dirname, "df/politica-de-privacidade/index.html"),
        dfTerms: path.resolve(__dirname, "df/termos-de-uso/index.html"),
        sc: path.resolve(__dirname, "sc/index.html"),
      },
    },
  },
});
