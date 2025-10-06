import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueInspector from 'vite-plugin-vue-inspector'
import path from 'path' // 👈 adicione esta linha

export default defineConfig({
  plugins: [
    vue(),
    VueInspector({
      toggleButtonVisibility: 'always', // Mostra o botão de inspeção sempre
      toggleKeyCombo: 'alt-shift', // Use Alt+Shift para ativar
      toggleButtonPos: 'bottom-right', // Posição do botão
      inspectorPosition: 'right', // Painel abre à direita
    }),
  ],

  // 👇 adiciona o alias "@" para apontar para a pasta "src"
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
