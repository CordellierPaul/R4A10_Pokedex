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
  <div v-if="pokemons?.results" id="pokemons">  <!--  ⭣ ici la clé doit être mise et doit être unique pour un v-for  -->
    <Pokemon v-for="pokemon of pokemons.results" :key="pokemon.url" :url="pokemon.url"></Pokemon>
  </div>
</template>

<style scoped>
#pokemons {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
}
</style>
