import MemberService from '@/services/MemberService.js'

export const namespaced = true

export const state = {
  members: []
}

export const mutations = {
  // mutations change the state directly
  SET_MEMBERS(state, members) {
    state.members = members
  }
}

export const actions = {
  // asynchronous call on mutations
  fetchMembers({ commit }) {
    return MemberService.getMembers().then((response) => {
      commit('SET_MEMBERS', response.data)
    })
  }
}
