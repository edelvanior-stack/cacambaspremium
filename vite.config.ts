import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function dfHtmlFallbackPlugin(): Plugin {
  return {
    name: "df-html-fallback",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const cleanUrl = req.url?.split("?")[0];
        if (cleanUrl === "/df/politica-de-privacidade" || cleanUrl === "/df/politica-de-privacidade/") {
          req.url = "/df/politica-de-privacidade/index.html";
        } else if (cleanUrl === "/df/termos-de-uso" || cleanUrl === "/df/termos-de-uso/") {
          req.url = "/df/termos-de-uso/index.html";
        } else if (cleanUrl === "/df" || cleanUrl === "/df/") {
          req.url = "/df/index.html";
        } else if (cleanUrl === "/sc" || cleanUrl === "/sc/") {
          req.url = "/sc/index.html";
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        const cleanUrl = req.url?.split("?")[0];
        if (cleanUrl === "/df/politica-de-privacidade" || cleanUrl === "/df/politica-de-privacidade/") {
          req.url = "/df/politica-de-privacidade/index.html";
        } else if (cleanUrl === "/df/termos-de-uso" || cleanUrl === "/df/termos-de-uso/") {
          req.url = "/df/termos-de-uso/index.html";
        } else if (cleanUrl === "/df" || cleanUrl === "/df/") {
          req.url = "/df/index.html";
        } else if (cleanUrl === "/sc" || cleanUrl === "/sc/") {
          req.url = "/sc/index.html";
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
        dfPrivacy: path.resolve(__dirname, "df/politica-de-privacidade/index.html"),
        dfTerms: path.resolve(__dirname, "df/termos-de-uso/index.html"),
        sc: path.resolve(__dirname, "sc/index.html"),
      },
    },
  },
});
