<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const pokemon = ref()

const route = useRoute() // important : $route ne fonctionne pas dans la partie script, ce code est obligatoire
const router = useRouter() // même chose pour router

async function fetchPokemon() {
    const response = await fetch(route.query.url)
    pokemon.value = await response.json()
}

onMounted(fetchPokemon)
</script>

<template>
    <a href="#" @click="$router.back()">Retour</a>
    <h1>Pokémon : {{ $route.params.name }}</h1>
    <img v-if="pokemon" :src="pokemon.sprites.front_default">
    <img v-if="pokemon" :src="pokemon.sprites.front_shiny">
</template>