<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Discography' }">Discography</router-link>
    <router-link :to="{ name: 'Events' }">Events</router-link>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: royalblue;
  text-decoration: underline;
}

nav a:first-of-type {
  border: 0;
}

@media (max-width: 383px) {
  nav {
    display: grid;
  }
  nav a {
    border: 0;
  }
}
</style>
