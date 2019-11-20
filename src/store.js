import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    badges: {},
    discordClient: null
  },
  getters: {
    getBadges: state => {
      return state.badges
    },
    getBadge: state => id => {
      return state.badges[id]
    },
    getUnassignedRoles: state => {
      if(!state.discordClient) {
        return []
      }

      let allRoles = state.discordClient.guilds.get(process.env.VUE_APP_GUILD_ID).roles
      let result = []

      allRoles.forEach( role => {
        let roleInUse = false
        for(let id in state.badges) {
          let badge = state.badges[id]
          if(role.id === badge.discordRoleId) {
            roleInUse = true
            break
          }
        }
        if(!roleInUse){
          result.push(role)
        }
      })

      return result.filter(role => role.name != "@everyone")
    }
  },
  mutations: {
    setDiscordClient: (state, client) => {
      Vue.set(state, 'discordClient', client)
      //state.discordClient = client
    },
    setBadges: (state, badges) => {
      state.badges = {}
      badges.forEach(badge => {
        Vue.set(state.badges, badge.id, badge)
      })
    },
    setBadge: (state, badge) => {
      Vue.set(state.badges, badge.id, badge)
    }
  },
  actions: {
    createDiscordClient({ commit }) {
      let Discord = require('discord.js')
      let client = new Discord.Client()

      client.on('ready', () => {
        commit('setDiscordClient', client)
      })

      client.login(process.env.VUE_APP_DISCORD_TOKEN)
    },
    fetchBadges({ commit })  {
      axios.get(process.env.VUE_APP_POKEAIMPI_BASE_URI + '/badge')
      .then(response => {
        commit('setBadges', response.data)
      })
    },
    addBadge({ commit }, badge ) {
      axios.post(process.env.VUE_APP_POKEAIMPI_BASE_URI + '/badge', badge)
      .then(response => {
        commit('setBadge', response.data)
      })
    }
  }
})
