<template>
  <div id="app">
    <AppNav></AppNav>
    <Content></Content>
  </div>
</template>

<script>

import AppNav from './components/AppNav.vue';
import Content from './components/Content.vue';
export default {
  name: 'app',
  components: {
    AppNav,
    Content
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
