<template>
  <div id="app" v-bind:dir="getTextDirection()">
    <AppNav></AppNav>
    <main>
      <router-view/>
    </main>
    <footer v-if="language === ENGLISH_LANGUAGE">
       <p> Copyright &#9400; 2019 <a href="mailto:resume.reviewer.il@gmail.com">resume-reviewer</a></p>
        <p>
          <a href="#" @click="changeLanguage(HEBREW_LANGUAGE)">Hebrew</a>
          <a href="#" class="withDivider" @click="changeLanguage(ENGLISH_LANGUAGE)">English</a>
        </p>
    </footer>

    <footer v-if="language === HEBREW_LANGUAGE">
       <p> Copyright &#9400; 2019 <a href="mailto:resume.reviewer.il@gmail.com">resume-reviewer</a></p>
        <p>
          <a href="#" class="withDivider" @click="changeLanguage(ENGLISH_LANGUAGE)">אנגלית </a>
          <a href="#" @click="changeLanguage(HEBREW_LANGUAGE)"> עברית</a>
        </p>
    </footer>
  </div>

</template>

<script>
 import AppNav from './components/AppNav.vue'
 import Constants from './constants.js'

 export default {
     name: 'app',
     created() {
       this.HEBREW_LANGUAGE = Constants.HEBREW_LANGUAGE;
       this.ENGLISH_LANGUAGE = Constants.ENGLISH_LANGUAGE;
     },
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
         return this.language === Constants.HEBREW_LANGUAGE ? Constants.TEXT_DIRECTION_RTL : '';
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

footer {
  color: white;
}

footer p a {
  color:white;
  text-decoration: none;
  transition: all 0.3s ease 0s;
}

footer p a:hover {
  color: #0088A9 !important;
}

.withDivider {
  border-left:1px solid white;
}

</style>
