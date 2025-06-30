import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { EventEmitter } from "events";

// Tăng số lượng EventEmitter listeners để tránh warning
EventEmitter.defaultMaxListeners = 50;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost", // Đổi "::" thành "localhost" để tránh lỗi mạng trên một số máy
    port: 8080,        // Đảm bảo port là 8080 (khớp netlify.toml)
    strictPort: true,  // Nếu port 8080 bị chiếm sẽ báo lỗi ngay, không tự động đổi port
    watch: {
      // Loại trừ node_modules và .git khỏi watcher để tiết kiệm RAM
      ignored: ["**/node_modules/**", "**/.git/**"],
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
  },
}));
