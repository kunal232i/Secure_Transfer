import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: "ws",
      port: 3001,
      host: "0.0.0.0",
    },
  },
});
