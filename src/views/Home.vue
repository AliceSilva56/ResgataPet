<script>
import HomeCards from "@/components/HomeCards.vue";

export default {
  name: "Home",
  components: { HomeCards },
};
</script>

<template>
  <div class="home-view">
    <HomeCards />
  </div>
</template>

<style scoped>
.home-view {
  padding-top: 80px; /* dá um espaço se a NavBar for fixa */
  min-height: 100vh; /* garante que a view ocupe a altura total da tela */
}
</style>
