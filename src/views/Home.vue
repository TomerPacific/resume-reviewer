<template>
  <div class="home">
    <img id="interview" src="../assets/interview.jpg" alt="interview" title="Photo by Rachel Danner on Unsplash">
    <p>Welcome To Resume Reviewer! <br>
      Your one-stop-shop for all everything that you need to prepare yourself for a job interview</p>
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
</style>
