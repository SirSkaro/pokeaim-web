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

    setUnassignedRoles: (state, roles) => {
      state.unassignedRoles = roles
    }
  },

  actions: {
    fetchBadges({ commit })  {
      axios.get(process.env.VUE_APP_POKEAIMPI_BASE_URI + '/badge')
        .then(badges => {
          commit('setBadges', badges.data)
        })
    },

    addBadge({ commit }, badge ) {
      axios.post(process.env.VUE_APP_POKEAIMPI_BASE_URI + '/badge', badge)
        .then(badge => {
          commit('setBadge', badge.data)
        })
    },

    fetchUnassignedRoles({commit}) {
      let params = {
        filterReservedRoles: true
      }
      axios.get(process.env.VUE_APP_DISCORD_BASE_URI + "/role", params)
        .then(roles => {
          commit('setUnassignedRoles', roles.data)
        })
    }

  }
})
