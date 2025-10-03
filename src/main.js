import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/theme.css'  // importa o tema

createApp(App).use(router).mount('#app')
