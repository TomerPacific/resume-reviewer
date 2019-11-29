<template>
  <div id="app">
    <AppNav></AppNav>
    <main>
      <router-view/>
    </main>
    <footer>
       <p>Created by <a href="https://github.com/TomerPacific">Tomer Ben Rachel</a> &#9400; &nbsp; 2019</p>
    </footer>
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
  
<style scoped>

html, body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50; */
}

footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        color: white;
        text-align: center;
    }

footer a:hover {
  color: #0088A9;
}

</style>
