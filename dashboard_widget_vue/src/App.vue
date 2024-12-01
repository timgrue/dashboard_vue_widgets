<script setup>
 import CatFactWidget from './components/CatFactWidget.vue';
// import MapsWidget from './components/MapsWidget.vue';
// import VBBWidget from './components/VBBWidget.vue';
// import CoinDeskWidget from './components/CoinDeskWidget.vue';
import WeatherWidget from './components/WeatherWidget.vue';
import Bvg from './components/Bvg.vue';


</script>

<template>
  <header>
    <h1>Daily Dashboard</h1>
  </header>

  <main>
    <WeatherWidget class="widget-one" />
    <CatFactWidget class="widget-two"  />
    <Bvg class="widget-three"  />
  </main>
</template>

<style scoped>

</style>
