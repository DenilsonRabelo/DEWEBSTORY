<script setup>
import { RouterLink, RouterView } from 'vue-router'
import footerVue from './components/footer.vue';


</script>

<template>
  <router-view></router-view>
  <footerVue></footerVue>
</template>
<style>
#app {
  max-width: 100vw;
  margin: 0 auto;
  padding: 0rem;
  font-weight: normal;
}
</style>
