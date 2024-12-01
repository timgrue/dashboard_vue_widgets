<template>
  <div class="BVG-widget">
    <h3>Kottbusser Tor arrivals:</h3>
    <div>
      <p>
        <span class="text-strong">{{ arrivals.arrivals?.length }}</span>
        arrivals in the next 10 minutes
      </p>
    </div>
    <div class="arrivals-head">
      <p>at:</p>
      <p>Direction:</p>
      <p>platform:</p>
    </div>
    <div
      v-for="(arrival, index) in arrivals.arrivals"
      :key="index"
      class="arrivals"
    >
      <div>
        <p>
          {{ moment(arrivals.arrivals?.[index].plannedWhen).format("HH:mm") }}
        </p>
      </div>
      <div>
        <p>
          {{ arrivals.arrivals?.[index].line.name }} to
          {{ arrivals.arrivals?.[index].provenance }}
        </p>
      </div>
      <div>
        <p>{{ arrivals.arrivals?.[index].plannedPlatform }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import moment from "moment";

const arrivals = ref("");

function getArrivals() {
  fetch("https://v6.bvg.transport.rest/stops/900013102/arrivals?duration=10", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (arrivals.value = data))
    .catch((error) => console.error("Error:", error));
}
onMounted(() => {
  getArrivals();
});
</script>

<style scoped>
.BVG-widget {
 
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 24px;
  text-align: left;
}
.arrivals-head {
    display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  padding: 16px 0;
  font-weight: bold;
  text-transform: uppercase;
}
.arrivals {
  display: grid;
  grid-template-columns:  2fr 6fr 2fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.text-strong {
  font-weight: bold;
}

@media screen and (min-width: 768px) {
    .BVG-widget {
        min-width: 500px;
    }
  .arrivals-head {
    display: grid;
    grid-template-columns: 20% 60% 20%;
    padding: 16px 0;
    font-weight: bold;
    text-transform: uppercase;
  }
  .arrivals {
    display: grid;
    grid-template-columns: 20% 60% 20%;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
    
}
</style>
