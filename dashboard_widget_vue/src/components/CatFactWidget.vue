<template>
    <div class="cat-fact-widget" @click="getCatFact">
        <h3>Cat Fact Widget</h3>
        <div>
            <p>{{ catFact }}</p>
            
        </div>
    </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';

const catFact = ref('')

function getCatFact() {
  fetch('https://meowfacts.herokuapp.com/')
    .then(response => response.json())
    .then(data => catFact.value = data.data[0])
    .catch(error => console.error(error))
}
onMounted(() => {
  getCatFact()
})

</script>

<style scoped>
.cat-fact-widget {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 24px;
    text-align: left;
}
</style>