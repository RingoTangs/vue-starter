import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import tailwindcss from 'tailwindcss'
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    // Terser must be installed because plugin-legacy uses Terser for minification.
    legacy({
      // polyfills config core.js and regenerator-runtime
      // https://github.com/vitejs/vite/blob/main/packages/plugin-legacy/src/index.ts#L169
      polyfills: ['stable/index', 'regenerator'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [postcssPresetEnv(), tailwindcss()],
    },
  },
})
