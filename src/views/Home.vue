<template>
  <div class="home">
    <img id="interview" src="../assets/interview.jpg" alt="interview" title="Photo by Rachel Danner on Unsplash">
    <p>Welcome To Resume Reviewer! <br>
      Your one-stop-shop for everything that you need to prepare yourself for a job interview<br>
    </p>
    <br>
    <p>We do the following:</p>

    <div>
      <ol id="points">
        <li>Reviewing Your Resume</li>
        <li>Pre Interview Training</li>
        <li>Behavioral Questions</li>
        <li>Culture Fit Preperation</li>
        <li>Whiteboard Practice</li>
        <li>Pair Programming Exercises</li>
      </ol>
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
  }

  #points li:hover {
    color: #0088A9;
  }
</style>
