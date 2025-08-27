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
    // Performance optimizations
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-tabs', '@radix-ui/react-dialog', '@radix-ui/react-accordion', '@radix-ui/react-select', '@radix-ui/react-popover'],
          charts: ['recharts'],
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          motion: ['framer-motion'],
          utils: ['class-variance-authority', 'clsx', 'tailwind-merge', 'date-fns'],
          icons: ['lucide-react'],
        },
        // Optimize chunk loading
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    // Optimize assets
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
  },
  // Tối ưu cho Netlify Visual Editor
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));