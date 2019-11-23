<template>
  <div id="app">
    <AppNav></AppNav>
    <main>
      <router-view/>
    </main>
  </div>

</template>

<script>
 import AppNav from './components/AppNav.vue'

 export default {
     name: 'app',
     components:{
        AppNav
     }
 }
</script>
  
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
