import EventService from '@/services/EventService.js'

export const namespaced = true

export const state = {
  events: []
}

export const mutations = {
  // mutations change the state directly
  SET_EVENTS(state, events) {
    state.events = events
  }
}

export const actions = {
  // asynchronous call on mutations
  fetchEvents({ commit }) {
    return EventService.getEvents().then((response) => {
      commit('SET_EVENTS', response.data)
    })
  }
}
