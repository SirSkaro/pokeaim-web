import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    badges: {},
    unassignedRoles: []
  },

  getters: {
    getBadges: state => {
      return state.badges
    },
    getBadge: state => id => {
      return state.badges[id]
    },
    getUnassignedRoles: state => {
      return state.unassignedRoles;
    }
  },

  mutations: {
    setBadges: (state, badges) => {
      state.badges = {}
      badges.forEach(badge => {
        Vue.set(state.badges, badge.id, badge)
      })
    },

    setBadge: (state, badge) => {
      Vue.set(state.badges, badge.id, badge)
    },

    deleteBadge: (state, badge) => {
      Vue.delete(state.badges, badge.id)
    },

    setUnassignedRoles: (state, roles) => {
      state.unassignedRoles = roles
    }
  },

  actions: {
    fetchBadges({ commit })  {
      return axios.get(process.env.VUE_APP_POKEAIMPI_BASE_URI + '/badge')
        .then(badges => {
          commit('setBadges', badges.data)
        })
    },

    addBadge({ commit }, badge ) {
      return axios.post(process.env.VUE_APP_POKEAIMPI_BASE_URI + '/badge', badge)
        .then(badge => {
          commit('setBadge', badge.data)
        })
    },

    updateBadge({ commit }, badge ) {
      return axios.put(process.env.VUE_APP_POKEAIMPI_BASE_URI + '/badge/' + badge.id, badge)
        .then(badge => {
          commit('setBadge', badge.data)
        })
    },

    deleteBadge({ commit }, badge) {
      return axios.delete(process.env.VUE_APP_POKEAIMPI_BASE_URI + '/badge/' + badge.id)
        .then(() => {
          commit('deleteBadge', badge)
        })
    },

    fetchUnassignedRoles({commit}) {
      let params = {
        filterReservedRoles: true
      }
      return axios.get(process.env.VUE_APP_DISCORD_BASE_URI + "/role", {params: params})
        .then(roles => {
          commit('setUnassignedRoles', roles.data)
        })
    },

    fetchRole({commit}, id) {
      return axios.get(process.env.VUE_APP_DISCORD_BASE_URI + "/role/"+id)
    }

  }
})
