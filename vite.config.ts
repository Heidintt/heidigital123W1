
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { EventEmitter } from "events";

// Tăng số lượng EventEmitter listeners để tránh warning và crash
EventEmitter.defaultMaxListeners = 100;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost",
    port: 8080,
    strictPort: true,
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
    // Tăng memory limit cho build
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-tabs', '@radix-ui/react-dialog', '@radix-ui/react-accordion'],
        },
      },
    },
  },
  // Tối ưu cho Netlify Visual Editor
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
