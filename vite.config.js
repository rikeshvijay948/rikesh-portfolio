import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'terser',
    reportCompressedSize: false
  },
  server: {
    port: 5173,
    host: 'localhost',
    open: false
  },
  preview: {
    port: 5173,
    host: 'localhost'
  }
})
