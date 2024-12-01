import { defineStore } from "pinia";
import { ref } from "vue";

export const useWeatherStore = defineStore('weatherStore', ()=> {
 
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

  const fetchWeatherData = () => {
    console.log("fetching Clouds...");
     fetch(
      "https:/api.openweathermap.org/data/3.0/onecall?lat=" +
        geoData.lat +
        "&lon=" +
        geoData.lon +
        "&appid=79da511870f4d01cba25a6ca7a747c9b")
        .then((response) => response.json())
        .then((data) => { weatherData = data; })
        // .then((data) => { console.log("still fetching Clouds...", weatherData); })
        .catch((error) => console.error(error))
        .then(() => { isLoaded = true; });
      }

      return {
        isLoaded,
        weatherData,
        fetchWeatherData
      }
})