<template>
  <div class="discography">
    <h1>U P P E R C A S E</h1>
    <hr width="50%" align="center" />
    <h2>Discography</h2>
    <DiscographyListing
      class="release-item"
      v-for="release in discography.releases"
      :key="release.title"
      :release="release"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/index.js'
import DiscographyListing from '@/components/DiscographyListing.vue'

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
  components: {
    DiscographyListing
  },
  computed: {
    // map store module and expose to component as data
    ...mapState(['discography'])
  }
}
</script>

<style scoped></style>
