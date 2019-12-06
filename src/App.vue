<template>
  <div id="app">
    <AppNav></AppNav>
    <main>
      <router-view/>
    </main>
    <footer>
       <p>Created by <a href="https://github.com/TomerPacific">Tomer Ben Rachel</a> &#9400; &nbsp; 2019</p>
        <p>
          <a href="#" @click="changeLanguage('Hebrew')">Hebrew </a> |
          <a href="#" @click="changeLanguage('English')"> English</a>
        </p>
    </footer>
  </div>

</template>

<script>
 import AppNav from './components/AppNav.vue'

 export default {
     name: 'app',
     components:{
        AppNav
     },
     methods: {
       changeLanguage: function(language) {
         
       }
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
