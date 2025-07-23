
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { EventEmitter } from "events";
import { viteStaticCopy } from "vite-plugin-static-copy";

// Increase EventEmitter listeners to prevent warnings
EventEmitter.defaultMaxListeners = 100;

export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost",
    port: 8080,
    strictPort: true,
    watch: {
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
          dest: '.'
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
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-tabs', '@radix-ui/react-dialog', '@radix-ui/react-accordion'],
          query: ['@tanstack/react-query'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority'],
          supabase: ['@supabase/supabase-js'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      '@tanstack/react-query',
      'framer-motion',
      'lucide-react',
      '@supabase/supabase-js'
    ],
    exclude: [],
    force: true,
  },
  esbuild: {
    target: 'esnext',
    platform: 'browser',
  },
  define: {
    global: 'globalThis',
  },
}));
