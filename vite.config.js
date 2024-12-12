import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src", // Cambiar raíz del proyecto a "src"
  build: {
    outDir: "../docs", // Directorio de salida
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"), // Archivo principal
        scripts: resolve(__dirname, "./src/index.js"), // Archivo adicional
      },
    },
  },
  base: "/porfolio_jagarcia05", // Rutas relativas para compatibilidad
});
