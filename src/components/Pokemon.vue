<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
    url: String
})

const pokemon = ref(0)

async function fetchAPokemon() {
  const response = await fetch(props.url)
  pokemon.value = await response.json()
}

onMounted(fetchAPokemon)
</script>

<template>
    <div v-if="pokemon">{{ pokemon.name }}</div>
</template>

<style scoped>

</style>
