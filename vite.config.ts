import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Use esbuild for minification (faster and built-in)
    minify: 'esbuild',
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion-vendor': ['motion'],
          'ui-vendor': ['@tabler/icons-react', 'lucide-react'],
        },
        // Asset file naming for cache busting
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Source maps for production debugging (optional)
    sourcemap: false,
    // Target modern browsers
    target: 'es2020',
    // CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize deps for faster dev startup
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'motion'],
  },
})
