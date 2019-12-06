<template>
  <div class="home">
    <img id="interview" src="../assets/interview.jpg" alt="interview" title="Photo by Rachel Danner on Unsplash">
    <div v-if="language === 'English'">
      <p>Welcome To Resume Reviewer! <br>
        Your one-stop-shop for everything that you need to prepare yourself for a job interview<br>
      </p>
      <br>
      <p>We do the following:</p>
    </div>

    <div v-if="language === 'Hebrew'">
      <p>ברוכים הבאים ל-Resume Reviewer!<br>
        המקום שבו יש את כל מה שתצטרכו כדי להכין את עצמכם לראיון עבודה<br>
      </p>
      <br>
      <p>השירותים שאנו נותנים הם:</p>
    </div>

    <div v-if="language === 'English'">
      <ol id="points">
        <li v-for="point in points_english" :key="point"> {{ point }} </li>
      </ol>
    </div>

    <div v-if="language === 'Hebrew'">
      <ol id="points">
        <li v-for="point in points_hebrew" :key="point"> {{ point }} </li>
      </ol>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'home',
  data: function(){
    return {
      points_english: [
        "Reviewing Your Resume",
        "Pre Interview Training",
        "Behavioral Questions",
        "Culture Fit Preperation",
        "Whiteboard Practice",
        "Pair Programming Exercises"
      ],
      points_hebrew: [
        "ביקורת של קורות חיים",
        "אימון לפני ראיון עבודה",
        "שאלות התנהגותיות",
        "הכנה להתאמת תרבות ארגונית",
        "תרגול שאלות על לוח מחיק",
        "אימון עבודה משותפת על קוד"
      ],
    }
  },
  components: {
    
  },
  computed: {
    language() {
      return this.$store.getters.getLanguage;
    },
  }
}
</script>


<style scoped>
  * {
    color: white;
  }

  .home {
    margin-top: 5%;
    height: 100%;
    font-size: 1.5rem;
  }

  #interview {
    height: 35%;
    width: 35%;
    float: left;
    border: 2px solid white;
  }

  #interview:hover {
    border: 2px solid #0088A9;
  }

  #points {
    list-style-type: upper-roman;
    list-style-position: inside;
    margin-top: 2%;
  }

  #points li::before {
    color: red;
  }

  #points li {
    margin-bottom: 1%;
    font-size: 1.5rem;
  }

  #points li:hover {
    color: #0088A9;
  }
</style>
