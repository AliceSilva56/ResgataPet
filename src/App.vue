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
</style>