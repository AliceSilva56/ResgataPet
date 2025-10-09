
import { createRouter, createWebHistory } from 'vue-router';

import Contatos from '../views/Contact.vue';
import Login from '../views/Login.vue';
import CriaConta from '../views/Criate-Account.vue';
import Home from '../views/Home.vue'
import Report from '../views/Report.vue'


const routes = [
  { path: '/', name: 'Home', component: Home }, //Inicia na Home, com componente NavBar e HomeCards
  { path: '/home', name: 'HomePage', component: Home }, // Final /home, mostrar a Home, com componente NavBar e HomeCards
  { path: '/contatos', name: 'Contatos', component: Contatos }, // Final /contatos mostra a views de Contatos
  { path: '/login', name: 'Login', component: Login }, // Final /login mostra a views de Login
  { path: '/CriarConta', nome: 'CriarConta', component: CriaConta},
  { path: '/report', name: 'Report', component: Report }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
