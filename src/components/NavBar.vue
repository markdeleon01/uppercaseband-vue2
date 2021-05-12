<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Discography' }">Discography</router-link> |
    <router-link :to="{ name: 'Events' }">Events</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
