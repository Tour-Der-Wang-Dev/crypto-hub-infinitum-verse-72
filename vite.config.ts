
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
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
  build: {
    sourcemap: mode !== 'production',
    minify: mode === 'production',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          components: ['@/components'],
          ui: [
            '@/components/ui/button',
            '@/components/ui/tabs',
            '@/components/ui/card',
            '@/components/ui/input',
            '@/components/ui/toast',
            '@/components/ui/sonner',
          ],
          travel: ['@/components/travel'],
          freelance: ['@/components/freelance'],
          marketplace: ['@/components/marketplace']
        }
      },
      external: mode === 'development' ? ['react-helmet'] : []
    },
    chunkSizeWarningLimit: 1000,
  }
}));
