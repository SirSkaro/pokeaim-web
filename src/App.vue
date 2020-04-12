<template>
  <div id="app">
    <NavBar/>
    <b-img :src="logo" fluid alt="PokeaimMD Admin Dashboard" width="500" height="500"> </b-img>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'app',
  data() {
    return {
      logo: "https://cdn.discordapp.com/attachments/468813119637028885/646836267664801822/logo-wo-glow-shadow.png"
    }
  },
  components: {
    NavBar
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
