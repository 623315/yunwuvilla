import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/yunwuvilla/",
  build: {
    outDir: "dist",
    assetsDir: "",
    sourcemap: false,
    target: 'es5',
    minify: 'terser',
    rollupOptions: {
      output: {
        format: 'iife',
        entryFileNames: 'index.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        manualChunks: undefined,
        inlineDynamicImports: true,
      }
    }
  },
  publicDir: "public",
})

