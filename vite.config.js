import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src", // no olvidemos cambiar la raíz del proyecto a "src"
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"), // Página principal
       
      },
    },
  },
  base: "./", // Opcional: rutas relativas para mayor compatibilidad
});