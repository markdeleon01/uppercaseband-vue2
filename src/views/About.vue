<template>
  <div class="about">
    <h1>U P P E R C A S E</h1>
    <hr width="50%" align="center" />
    <h2>Band Members:</h2>
    <p v-for="member in members.members" :key="member.name">
      <span>{{ member.name }} - {{ member.role }}</span>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/index.js'

function getMembers(next) {
  store
    .dispatch('members/fetchMembers')
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
    getMembers(next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getMembers(next)
  },
  computed: {
    // map store state and expose to component as data
    ...mapState(['members'])
  }
}
</script>
