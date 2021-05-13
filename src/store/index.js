import Vue from 'vue'
import Vuex from 'vuex'
import * as members from '@/store/modules/members.js'
import * as discography from '@/store/modules/discography.js'
import * as events from '@/store/modules/events.js'

Vue.use(Vuex)

// the one single source of truth
export default new Vuex.Store({
  modules: {
    members,
    discography,
    events
  }
})
