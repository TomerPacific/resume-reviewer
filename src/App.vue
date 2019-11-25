<template>
  <div id="app">
    <AppNav></AppNav>
    <main>
      <router-view/>
    </main>
    <Footer></Footer>
  </div>

</template>

<script>
 import AppNav from './components/AppNav.vue'
 import Footer from './components/Footer.vue'

 export default {
     name: 'app',
     components:{
        AppNav,
        Footer
     }
 }
</script>
  
<style scoped>

html, body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%
}

</style>
