import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  output: "static",
  vite: {
    server: {
      host: "0.0.0.0"
    }
  }
});
