<template>
  <div class="about">
    <h2>Band Members</h2>
    <div class="band-members">
      <p
        class="member-item"
        v-for="member in members.members"
        :key="member.name"
      >
        <span>{{ member.name }} - {{ member.role }}</span>
      </p>
    </div>
    <p class="band-pic">
      <img src="uppercase2019-bandPic.png" />
    </p>
    <div class="biography">
      <p>
        Formed in 2009, UPPERCASE is a Filipino-Canadian alternative pop rock
        indie band from Toronto, Canada pursuing Original Pilipino Music (OPM).
      </p>
      <p>
        Composed of Mark de Leon (vocals/guitars), Allan Lagat (bass), Joey
        Giagonia (lead guitars), and Kyle Andre (drums).
      </p>
      <p>
        In 2013 the band released their debut album entitled "<i
          >Time Space Warp</i
        >", and their first single "<i>Balikbayan</i>" caught the attention of
        Filipino online radio stations in the UK, Dubai, Manila and Toronto.
        They were unanimously voted "<b>Top Band</b>" at the 2013 Filipinos
        Making Waves Festival held at Dundas Square in downtown Toronto, winning
        over judges with their hit single "<i>Ere</i>".
      </p>
      <p>
        In 2015 the whole band went back home to Manila and performed gigs
        around the city to promote their music. They released a sophomore EP
        album entitled "<i>Bukas Makalawa</i>" consisting of five new tracks,
        including the single "<i>Tuldok</i>" released in 2016. They also
        released a Christmas single entitled "<i>Babalik</i>" on December 2,
        2017 as a salute to all Overseas Filipino Workers and Filipino migrants
        around the world.
      </p>
      <p>
        The band released its newest single "<i>Tanging Ikaw</i>" on February 9,
        2019, which was featured on Spotify's New Music Friday Philippines
        playlist on its debut week, and has enjoyed popularity and heavy
        streaming from listeners in the Philippines.
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/index.js'

function getMembers(next) {
  // call module action
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
    // map store module and expose to component as data
    ...mapState(['members'])
  }
}
</script>

<style scoped>
.band-members p {
  text-align: center;
}
.band-pic {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
.band-pic img {
  width: -webkit-fill-available;
  max-width: 350px;
  max-height: 300px;
}
.biography p {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}
@media (max-width: 280px) {
  .band-pic img {
    width: 250px;
    height: 150px;
  }
}
</style>
