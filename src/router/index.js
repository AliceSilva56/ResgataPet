
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Contatos from '../views/Contatos.vue';
import Login from '../views/Login.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contatos', name: 'Contatos', component: Contatos },
  { path: '/login', name: 'Login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
