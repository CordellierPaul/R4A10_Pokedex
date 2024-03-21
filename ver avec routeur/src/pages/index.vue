<script setup>
import { onMounted, ref } from "vue"

const pokemons = ref()

async function fetchPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  pokemons.value = await response.json()
}

onMounted(fetchPokemons)
</script>

<template>
    <ul v-if="pokemons && pokemons.results">
        <li v-for="pokemon in pokemons.results" :key="pokemon.url" :url="pokemon.url">
            <RouterLink :to="{
                name: 'pokemon',
                query: {
                    url: pokemon.url
                },
                params: {
                    name: pokemon.name
                }
            }">
                {{ pokemon.name }}
            </RouterLink>
        </li>
    </ul>
</template>