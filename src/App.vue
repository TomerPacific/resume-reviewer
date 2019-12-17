<template>
  <div id="app" v-bind:dir="getTextDirection()">
    <AppNav></AppNav>
    <main>
      <router-view/>
    </main>
    <footer>
       <p> Copyright &#9400; 2019 <a href="mailto:resume.reviewer.il@gmail.com">resume-reviewer</a></p>
        <p>
          <a href="#" id = "hebrew_language_link" class="withDivider" @click="changeLanguage(HEBREW_LANGUAGE)"> {{ language === HEBREW_LANGUAGE ? 'עברית' : 'Hebrew' }}</a>
          <a href="#" id = "english_language_link" @click="changeLanguage(ENGLISH_LANGUAGE)">{{ language === HEBREW_LANGUAGE ? 'אנגלית' : 'English' }}</a>
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
          let hebrew_language_link = document.getElementById("hebrew_language_link");
          let english_language_link = document.getElementById("english_language_link");
          if (language === this.HEBREW_LANGUAGE) {
            english_language_link.classList.remove('withDivider');
            hebrew_language_link.classList.add('withDivider');
          } else if (language === this.ENGLISH_LANGUAGE) {
            hebrew_language_link.classList.remove('withDivider');
            english_language_link.classList.add('withDivider');
          }
       },
       getTextDirection: function() {
         let current_language = this.$store.getters.getLanguage;
         return current_language === Constants.HEBREW_LANGUAGE ? Constants.TEXT_DIRECTION_RTL : '';
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
footer a {
  font-size: 16px;
  padding-left: 5px;
  padding-right: 5px;
}

footer a:hover {
  color: #0088A9;
}

.withDivider {
  border-left:1px solid white;
}

</style>
