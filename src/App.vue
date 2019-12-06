<template>
  <div id="app" v-bind:dir="getTextDirection()">
    <AppNav></AppNav>
    <main>
      <router-view/>
    </main>
    <footer v-if="language === 'English'">
       <p>Created by <a href="https://github.com/TomerPacific">Tomer Ben Rachel</a> &#9400; &nbsp; 2019</p>
        <p>
          <a href="#" @click="changeLanguage('Hebrew')">Hebrew </a> | 
          <a href="#" @click="changeLanguage('English')">English</a>
        </p>
    </footer>
    <footer v-if="language === 'Hebrew'">
       <p>נוצר על-ידי <a href="https://github.com/TomerPacific">תומר בן-רחל</a> &#9400; &nbsp; 2019</p>
        <p>
          <a href="#" @click="changeLanguage('English')">אנגלית </a> |
          <a href="#" @click="changeLanguage('Hebrew')"> עברית</a>
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
         this.$store.dispatch('setLanguage', {
           language: language,
         });
       },
       getTextDirection: function() {
         let current_language = this.$store.getters.getLanguage;
         return current_language === 'Hebrew' ? 'rtl' : '';
       }
     },
     computed: {
       language() {
          return this.$store.getters.getLanguage;
       },
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
