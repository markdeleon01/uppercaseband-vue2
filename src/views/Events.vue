<template>
  <div class="events">
    <h1>U P P E R C A S E</h1>
    <hr width="50%" align="center" />
    <h2>Events</h2>
    <EventListing
      class="event-item"
      v-for="event in events.events"
      :key="event.id"
      :event="event"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/index.js'
import EventListing from '@/components/EventListing.vue'

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
  components: {
    EventListing
  },
  computed: {
    // map store module and expose to component as data
    ...mapState(['events'])
  }
}
</script>

<style scoped>
.event-item {
  padding-top: 40px;
}
@media (min-width: 330px) {
  .event-item {
    padding-left: 25px;
    padding-right: 25px;
  }
}
@media (min-width: 405px) {
  .event-item {
    padding-left: 30px;
    padding-right: 30px;
  }
}
@media (min-width: 450px) {
  .event-item {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (min-width: 495px) {
  .event-item {
    padding-left: 50px;
    padding-right: 50px;
  }
}
@media (min-width: 710px) {
  .event-item {
    padding-left: 60px;
    padding-right: 60px;
  }
}
@media (min-width: 730px) {
  .event-item {
    padding-left: 70px;
    padding-right: 70px;
  }
}
@media (min-width: 750px) {
  .event-item {
    padding-left: 80px;
    padding-right: 80px;
  }
}
@media (min-width: 770px) {
  .event-item {
    padding-left: 90px;
    padding-right: 90px;
  }
}
@media (min-width: 790px) {
  .event-item {
    padding-left: 100px;
    padding-right: 100px;
  }
}
@media (min-width: 800px) {
  .event-item {
    padding-left: 120px;
    padding-right: 120px;
  }
}
@media (min-width: 850px) {
  .event-item {
    padding-left: 150px;
    padding-right: 150px;
  }
}
@media (min-width: 900px) {
  .event-item {
    padding-left: 180px;
    padding-right: 180px;
  }
}
@media (min-width: 1024px) {
  .event-item {
    padding-left: 200px;
    padding-right: 200px;
  }
}
</style>
