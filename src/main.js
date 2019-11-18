import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import Badge from './components/Badge.vue'
import BadgeList from './components/BadgeList.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.component('v-icon', Icon)

const router = new VueRouter({
  routes: [
    {path: '/badge', component: Badge},
    {path: '/dashboard', component: BadgeList},
    {path: '/', component: App}
  ]
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')