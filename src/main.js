<<<<<<< HEAD

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
=======
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/theme.css'  // importa o tema

createApp(App).use(router).mount('#app')
>>>>>>> 29e00229a10f24bc4e230419a76ba5551ce4ace3
