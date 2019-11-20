<template>
  <div id="app">
    <NavBar/>
    <img alt="Vue logo" class="logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'app',
  components: {
    NavBar
  },
  created: function() {
      this.$store.dispatch('createDiscordClient')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
  height: 100vh;
}
.logo {
  margin: 10px;
}
h1 {
  color: #FAB4B2;
}

</style>
