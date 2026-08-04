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
      jpeg: { quality: 85, mozjpeg: true },
      jpg: { quality: 85, mozjpeg: true },
      png: { quality: 85, compressionLevel: 9, palette: true },
      webp: { lossless: false, quality: 85 },
      avif: { lossless: false, quality: 60 },
    }),
  ],
})
