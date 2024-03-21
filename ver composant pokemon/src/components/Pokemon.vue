<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
    url: String
})

const pokemon = ref(0)
const shiny = ref(false)

async function fetchAPokemon() {
  const response = await fetch(props.url)
  pokemon.value = await response.json()
}

onMounted(fetchAPokemon)
</script>

<template>
    <div v-if="pokemon" class="pokemon">{{ pokemon.name }}</div>
</template>

<style scoped>
.pokemon {
  display: block;
  border: solid black 2px;
  margin: 5px;
  padding: 5px;
}
</style>
