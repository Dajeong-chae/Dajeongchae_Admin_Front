import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// });

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/admin": {
        target: "https://sweetspeech-api.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/admin/, "/admin"),
      },
    },
  },
});
