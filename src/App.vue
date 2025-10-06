
<script>
import Navbar from "./components/Navbar.vue"; 

export default {
  name: 'App',
  components: { Navbar}
}
</script>


<template>
  <div id="app-container">
    <Navbar />
    <router-view />
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
</style>