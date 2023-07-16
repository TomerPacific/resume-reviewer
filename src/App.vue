<template>
  <div id="app" v-bind:dir="getTextDirection()">
    <AppNav></AppNav>
    <main>
      <router-view/>
    </main>
      <b-navbar fixed="bottom" dir="ltr">
        <b-navbar-nav>
          <b-nav-text><span>{{ copyright }} </span></b-nav-text>
          <b-nav-item href="mailto:resume.reviewer.il@gmail.com">resume-reviewer</b-nav-item>
          <b-nav-item class="withDivider" @click="changeLanguage(HEBREW_LANGUAGE)">{{ language === HEBREW_LANGUAGE ? 'עברית' : 'Hebrew' }}</b-nav-item>
          <b-nav-item class="withDivider" @click="changeLanguage(ENGLISH_LANGUAGE)">{{ language === HEBREW_LANGUAGE ? 'אנגלית' : 'English' }}</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
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
       copyright() {
          const copyrightSpan = document.getElementById("copyright");
          const currentYear = new Date().getFullYear();
          return "Copyright © " + currentYear;
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

.navbar-text {
  color: white !important;
}

.nav-link a {
  color:white;
  text-decoration: none;
  transition: all 0.3s ease 0s;
}

.nav-link:hover {
  color: #0088A9 !important;
}

.withDivider {
  border-left:1px solid white;
}

</style>
