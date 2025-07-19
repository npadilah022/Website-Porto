// config/vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  root: resolve(__dirname, '../src'),
  publicDir: resolve(__dirname, '../public'),
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, '../dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, '../src/pages/index.html'),
        about: resolve(__dirname, '../src/pages/about.html')
      }
    }
  },
  plugins: [
    ViteImageOptimizer({
      includePublic: true,
      png: { quality: 80 },
      jpeg: { quality: 85 }
    })
  ]
})