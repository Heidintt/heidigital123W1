import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { EventEmitter } from "events";
import { viteStaticCopy } from "vite-plugin-static-copy"; // Thêm dòng này

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
    mode === 'development' && componentTagger(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/_redirects',
          dest: '.' // copy vào gốc dist
        }
      ]
    }),
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
    // Optimized bundle splitting to reduce critical request chain
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor';
          }
          // Router
          if (id.includes('react-router')) {
            return 'router';
          }
          // UI components
          if (id.includes('@radix-ui')) {
            return 'ui-components';
          }
          // Animation libraries  
          if (id.includes('framer-motion')) {
            return 'animations';
          }
          // Chart libraries
          if (id.includes('recharts')) {
            return 'charts';
          }
          // Utility libraries
          if (id.includes('lucide-react') || id.includes('clsx') || id.includes('date-fns')) {
            return 'utilities';
          }
          // Large third-party libraries
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  // Tối ưu cho Netlify Visual Editor
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));