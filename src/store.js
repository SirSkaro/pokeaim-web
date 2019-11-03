import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    badges: {}
  },
  getters: {
    getBadges: state => {
      return state.badges
    },
    getBadge: state => id => {
      return state.badges[id]
    } 
  },
  mutations: {
    setBadges: (state, badges) => {
      state.badges = {}
      badges.forEach(badge => {
        state.badges[badge.id] = badge
      })
    }
  },
  actions: {
    fetchBadges ({ commit })  {
      axios.get('http://localhost:9000/api/badge')
      .then(response => {
        commit('setBadges', response.data)
      })
    }
  }
})
