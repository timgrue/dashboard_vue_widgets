<template>
  <div class="weather-widget" v-if="isLoaded">
    <h1>Weather in Potsdam</h1>
    <!-- <div>{{ weatherData.current }}</div> -->
    <div class="weather-widget-inner">
      <div class="weather-widget-inner-1">
        <p>{{ weatherData.current.temp }}°</p>
      </div>
      <div class="weather-widget-inner-2">
        <p>feels like:</p>
        <p>{{ weatherData.current?.feels_like }}°</p>
      </div>
      <div class="weather-widget-inner-3">
        <p>{{ weatherData.current?.weather?.[0].description }}</p>
      </div>
      <div class="weather-widget-inner-4">
        <img
          :src="`http://openweathermap.org/img/wn/${weatherData?.current?.weather?.[0].icon}@2x.png`"
        />
      </div>
    </div>
  </div>
  <div class="weather-widget" v-else>Loading Weather...</div>
</template>

<script setup>
import { onMounted, ref } from "vue";

let weatherData = ref({});
let isLoaded = ref(false);
const geoData = {
  country: "DE",
  lat: 52.459,
  lon: 12.9663,
  name: "Potsdam",
  state: "Brandenburg",
  zip: "14476",
};

async function fetchWeatherData() {
  await fetch(
    "https:/api.openweathermap.org/data/3.0/onecall?lat=" +
      geoData.lat +
      "&lon=" +
      geoData.lon +
      "&units=metric&appid=79da511870f4d01cba25a6ca7a747c9b"
  )
    .then((response) => response.json())
    .then((data) => {
      weatherData = data;
    })
    .catch((error) => console.error(error));

  isLoaded.value = true;
}
onMounted(() => {
  fetchWeatherData();
});
</script>

<style scoped>
.weather-widget {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 24px;
  text-align: center;
}
.weather-widget-inner {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
}
.weather-widget-inner-1 {
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  font-size: 2rem;
}
.weather-widget-inner-2 {
  grid-column: 1 / 2;
  grid-row: 2 / 2;
  font-size: 1rem;
  padding-top: 1rem;
}
.weather-widget-inner-3 {
  grid-column: 2 / 2;
  grid-row: 2 / 1;
  font-size: 1rem;
  padding-top: 1rem;
}
.weather-widget-inner-4 {
  grid-column: 2 / 2;
  grid-row: 2 / 2;
}
img {
  margin: 0 auto;
  width: 75px;
}
</style>
