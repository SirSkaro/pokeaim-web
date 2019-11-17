<template>
  <div id="app">
    <img alt="Vue logo" class="logo" src="./assets/logo.png">
    <router-link to="/dashboard">Go to Badges</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
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
h1 {
  color: #FAB4B2;
}
</style>
