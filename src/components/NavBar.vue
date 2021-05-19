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

<style scoped>
@media (max-width: 359px) {
  #nav {
    display: grid;
  }
}
@media (min-width: 360px) {
  #nav {
    padding-left: 80px;
    padding-right: 80px;
  }
}
@media (min-width: 411px) {
  #nav {
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
