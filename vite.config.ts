import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import netlify from "@netlify/vite-plugin";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(),netlify()],
  resolve: {
    tsconfigPaths: true,
  },
});
