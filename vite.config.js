import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      jpeg: { quality: 75 },
      jpg: { quality: 75 },
      png: { quality: 75, compressionLevel: 9, palette: true },
      webp: { lossless: false, quality: 75 },
      avif: { lossless: false, quality: 60 },
    }),
  ],
})
