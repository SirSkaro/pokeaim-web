<template>
  <div id="app">
    <img alt="Vue logo" class="logo" src="./assets/logo.png">
    <BadgeList/>
  </div>
</template>

<script>
import BadgeList from './components/BadgeList.vue'

export default {
  name: 'app',
  components: {
    BadgeList
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
  margin: 60px;
}
</style>
