// config/vite.config.js
<<<<<<< HEAD
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import imageOptimizer from 'vite-plugin-image-optimizer';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
=======
import { defineConfig } from 'vite'
import { resolve } from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
>>>>>>> 68944d1d7ae17e1464ed01f5320bfc84233b1024

export default defineConfig({
  root: resolve(__dirname, '../src'),
  publicDir: resolve(__dirname, '../public'),
<<<<<<< HEAD
  base: './',

  server: {
    port: 5173,
    open: '/pages/index.html',
    host: true,
    fs: {
      allow: ['..']
    }
  },

  build: {
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: true,
=======
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, '../dist'),
>>>>>>> 68944d1d7ae17e1464ed01f5320bfc84233b1024
    rollupOptions: {
      input: {
        main: resolve(__dirname, '../src/pages/index.html'),
        about: resolve(__dirname, '../src/pages/about.html')
<<<<<<< HEAD
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(jpe?g|png|webp|avif|gif|svg)$/.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },

  plugins: [
    imageOptimizer({
      jpg: {
        quality: 60,  // Lowered from 65 to 60
        mozjpeg: true,
        progressive: true
      },
      png: {
        quality: 65,
        compressionLevel: 9  // Max compression
      },
      webp: {
        quality: 60,  // Lowered from 65 to 60
        lossless: false,
        effort: 6  // Higher compression effort
      },
      avif: {
        quality: 50,
        lossless: false,
        speed: 0  // Slowest but best compression
      },
      skipIfLarger: true,
      includePublic: false,
      cache: false,
      silent: false  // Show detailed optimization logs
    })
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@assets': resolve(__dirname, '../src/assets'),
      '@images': resolve(__dirname, '../src/assets/images')
    }
  },

  css: {
    devSourcemap: true,
    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  },

  optimizeDeps: {
    include: [
      'tailwindcss',
      'autoprefixer'
    ]
  }
});
=======
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
>>>>>>> 68944d1d7ae17e1464ed01f5320bfc84233b1024
