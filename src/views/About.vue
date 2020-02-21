<template>
  <div class="about">
    <h1 v-if="language === ENGLISH_LANGUAGE">About</h1>
    <h1 v-if="language === HEBREW_LANGUAGE">אודות</h1>

    <div id="content">
      <p v-if="language === ENGLISH_LANGUAGE">We are a group of Software Engineers with considerable time spent in the industry. <br>
        We have worked under various companies and have undergone a plethora of interviewing processes. <br>
        We have encountered the bizzare, the obnoxious, and the difficult and have learned and prepared accordingly to each one. <br>
        Use our knowledge and expertise to gurantee that your next job interview will be the best that you had.
        <br><br><a href="mailto:resume.reviewer.il@gmail.com" title="Email">&rarr; Contact Us &larr;</a>  
      </p>
      
      <p v-if="language === HEBREW_LANGUAGE">
        אנחנו קבוצה של מפתחים עם ניסיון רב בתעשייה. עבדנו תחת חברות מכל מיני סוגים ועברנו תהליכי גיוס רבים.<br>
        נתקלנו בתהליכים שהיו מוזרים, מעצבנים וקשים ולכל אחד מהם התכוננו בהתאם. <br>
        השתמשו בידע שלנו ובשירותנו כדי להבטיח שראיון העבודה הבא שלכם יהיה הכי טוב שהיה לכם.
        <br><br><a href="mailto:resume.reviewer.il@gmail.com" title="מייל">&larr; צרו איתנו קשר &rarr;</a>
      </p>

      <img src="../assets/about.jpg" alt="Happiness is getting the job done!" id="about_picture"
            title="Photo by Ali Yahya on Unsplash">
    </div>
  </div>
</template>

<script>

import Constants from '../constants.js';

export default {
  name: 'About',
  created() {
       this.HEBREW_LANGUAGE = Constants.HEBREW_LANGUAGE;
       this.ENGLISH_LANGUAGE = Constants.ENGLISH_LANGUAGE;
  },
  computed: {
    language() {
      return this.$store.getters.getLanguage;
    },
  }
}

</script>

<style scoped>

  .about {
    margin-top: 2%;
  }

  #content {
    margin-top: 3%;
    font-size: 1.3rem;
  }

  #about_picture {
    margin-top: 1%;
    width: 23%;
    height: 23%;
    border: 2px solid white;
  }

  #about_picture:hover {
    border: 2px solid #0088A9;
  }

  p > a {
    text-decoration: none;
  }

  p > a:hover {
    color: #0088A9;
  }

  * {
    color: white;
  }

</style>