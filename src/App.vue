<script setup>
import { onMounted, ref } from "vue";
import Pokemon from "./components/Pokemon.vue";

const pokemons = ref(0)

async function fetchPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  pokemons.value = await response.json()
}

onMounted(fetchPokemons)
</script>

<template>
  <div v-if="pokemons?.results">
    <Pokemon v-for="pokemon of pokemons.results" :url="pokemon.url"></Pokemon>
  </div>
</template>

<style scoped>

</style>
