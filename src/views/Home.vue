<template>
  <div class="home">
    <img id="interview" src="../assets/interview.jpg" alt="interview" title="Photo by Rachel Danner on Unsplash">
    <p>Welcome To Resume Reviewer! <br>
      Your one-stop-shop for everything that you need to prepare yourself for a job interview<br>
    </p>
    <br>
    <p>We do the following:</p>

    <div>
      <ul id="points">
        <li>Reviewing Your Resume</li>
        <li>Pre Interview Training</li>
        <li>Bheavioral Questions</li>
        <li>Culture Fit Preperation</li>
        <li>Whiteboard Practice</li>
        <li>Pair Programming Exercises</li>
      </ul>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'home',
  components: {
    
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
  }

  #interview {
    height: 30%;
    width: 30%;
    float: left;
  }

  #points {
    list-style: none;
    margin-top: 3%;
  }

  #points li {
    margin-bottom: 1%;
  }

  #points li:hover {
    color: #0088A9;
  }
</style>
