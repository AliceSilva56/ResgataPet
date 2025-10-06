<<<<<<< HEAD
<script setup>
import Navbar from "./components/Navbar.vue"; 
import Home from "./components/Home.vue"; 

</script>

  <template>
  <div id="app-container">
    <Navbar />
    <Home />
  </div>
</template>


<style>

body, html {
    margin: 0;
    padding: 0;
    /* Define o fundo cinza claro para toda a aplicação */
    background-color: #F0F2F5; /* Usando a cor light-gray */
    font-family: Arial, sans-serif;
}

/* Opcional: Estilo para o container principal se necessário */
#app-container {
    /* Garante que o container se ajuste à tela */
    min-height: 100vh; 
}
=======
<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar }
}
</script>

<template>
  <div>

    <NavBar />
    <router-view />

  </div>
</template>

<style scoped>
>>>>>>> 29e00229a10f24bc4e230419a76ba5551ce4ace3
</style>