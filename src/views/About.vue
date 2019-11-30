<template>
  <div class="about">
    <h1>About</h1>

    <div id="content">
      <p>We are a group of Software Engineers with considerable time spent in the industry. <br>
        We have worked under various companies and have undergone a plethora of interviewing processes. <br>
        We have encountered the bizzare, the obnoxious, and the difficult and have learned and prepared accordingly to each one. <br>
        Use our knowledge and expertise to gurantee that your next job interview will be the best that you had.</p>
    
      <img src="../assets/about.jpg" alt="Happiness is getting the job done!" id="about_picture"
            title="Photo by Ali Yahya on Unsplash">
    </div>
  </div>
</template>


<style scoped>

  .about {
    margin-top: 2%;
  }

  #content {
    margin-top: 3%;
    font-size: 1.5rem;
  }

  #about_picture {
    margin-top: 2%;
    width: 25%;
    height: 25%;
    border: 2px solid white;
  }

  #about_picture:hover {
    border: 2px solid #0088A9;
  }

  * {
    color: white;
  }

</style>