import DiscographyService from '@/services/DiscographyService.js'

export const namespaced = true

export const state = {
  releases: []
}

export const mutations = {
  // mutations change the state directly
  SET_RELEASES(state, releases) {
    state.releases = releases
  }
}

export const actions = {
  // asynchronous call on mutations
  fetchReleases({ commit }) {
    return DiscographyService.getReleases().then((response) => {
      commit('SET_RELEASES', response.data)
    })
  }
}
