<script setup>
 import CatFactWidget from './components/CatFactWidget.vue';
// import MapsWidget from './components/MapsWidget.vue';
// import VBBWidget from './components/VBBWidget.vue';
// import CoinDeskWidget from './components/CoinDeskWidget.vue';
import WeatherWidget from './components/WeatherWidget.vue';


</script>

<template>
  <header>
    <h1>My Dashboard</h1>
  </header>

  <main>
    <WeatherWidget />
    <CatFactWidget />
  </main>
</template>

<style scoped>

</style>
