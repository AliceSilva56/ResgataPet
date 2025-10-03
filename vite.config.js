import { fileURLToPath, URL } from 'node:url'
<<<<<<< HEAD
import vue from '@vitejs/plugin-vue'

import { defineConfig } from 'vite'
=======

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
>>>>>>> 29e00229a10f24bc4e230419a76ba5551ce4ace3

// https://vite.dev/config/
export default defineConfig({
  plugins: [
<<<<<<< HEAD
   vue()
=======
    vue(),
    vueDevTools(),
>>>>>>> 29e00229a10f24bc4e230419a76ba5551ce4ace3
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
