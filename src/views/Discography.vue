<template>
  <div class="discography">
    <h1>U P P E R C A S E</h1>
    <hr width="50%" align="center" />
    <h2>Discography</h2>
    <p
      class="release-item"
      v-for="release in discography.releases"
      :key="release.title"
    >
      <img class="release-thumbnail" :src="release.imageUrl" /><br />
      <span
        ><b>{{ release.title }}</b></span
      ><br />
      <span>Released: {{ release.releaseDate }}</span
      ><br />
      <a :href="release.spotifyUrl" target="_blank">Listen on Spotify</a>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/index.js'

function getReleases(next) {
  // call module action
  store
    .dispatch('discography/fetchReleases')
    .then(() => {
      next()
    })
    .catch((error) => {
      if (error.response && error.response.status == 404) {
        // redirect to 404 page with name of resource missing
        next({ name: '404', params: { resource: 'page' } })
      } else {
        next({ name: 'NetworkIssue' })
      }
    })
}

export default {
  beforeRouteEnter(routeTo, routeFrom, next) {
    getReleases(next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getReleases(next)
  },
  computed: {
    // map store module and expose to component as data
    ...mapState(['discography'])
  }
}
</script>

<style scoped>
.release-item {
  padding-top: 20px;
  padding-bottom: 20px;
}
.release-thumbnail {
  width: 300px;
  height: 300px;
  padding-bottom: 10px;
}
</style>
