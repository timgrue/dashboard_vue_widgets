<template>
  <div class="weather-widget" v-if="isLoaded">
    <h1>Weather in Potsdam</h1>
    <div>{{ weatherData.current.weather?.[0].main }}</div>
    <img :src="iconUrl" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const isLoaded = ref(false);
const geoData = {
  country: "DE",
  lat: 52.459,
  lon: 12.9663,
  name: "Potsdam",
  state: "Brandenburg",
  zip: "14476",
};

const weatherData = ref('');


// Fetch weather data (example function)
const fetchWeatherData = async () => {
  fetch(
    'https:/api.openweathermap.org/data/3.0/onecall?lat='+ geoData.lat + '&lon=' + geoData.lon + '&appid=79da511870f4d01cba25a6ca7a747c9b'
  )
    .then((response) => response.json())
    .then((data) => {weatherData.value = data})
    .catch((error) => console.error(error));

    console.log(weatherData);
    isLoaded.value = true;
};

fetchWeatherData();

 function getIconUrl(iconCode) {
  return "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
}
const iconCode = ref("weatherData.current?.weather?.[0].icon");
console.log(weatherData.current?.weather?.[0].icon);
const iconUrl = ref("http://openweathermap.org/img/wn/"+ iconCode +"@2x.png");

</script>

<style scoped>
.weather-widget {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 24px;
  text-align: center;
}
</style>
