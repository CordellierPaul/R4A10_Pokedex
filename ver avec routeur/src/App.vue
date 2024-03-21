<script setup>

</script>

<template>
    <header>
        <nav>
            <RouterLink :to="{ name: 'index' }">Index</RouterLink>
            <RouterLink :to="{ name: 'login' }">Login</RouterLink>
        </nav>
    </header>
    <main>
        <RouterView></RouterView>
    </main>
</template>

<style scoped>
header nav a {
    padding: 5px;
}
</style>
