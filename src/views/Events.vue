<template>
  <div class="events">
    <h1>U P P E R C A S E</h1>
    <hr width="50%" align="center" />
    <h2>Events</h2>
    <p v-for="event in events.events" :key="event.id">
      <span
        ><b>{{ event.title }}</b></span
      ><br />
      <span>Event date: {{ event.date }}</span
      ><br />
      <span>Event location: {{ event.location }}</span
      ><br />
      <span v-html="event.content"></span>
      <a :href="event.externalUrl" target="_blank">Learn more</a>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/index.js'

function getEvents(next) {
  // call module action
  store
    .dispatch('events/fetchEvents')
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
    getEvents(next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getEvents(next)
  },
  computed: {
    // map store module and expose to component as data
    ...mapState(['events'])
  }
}
</script>

<style scoped>
p {
  padding-top: 40px;
}
</style>
