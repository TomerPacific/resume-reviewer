<template>
<header>
    <img src="../assets/logo.png" id="logo">
    <ul id="navigation">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/file">Upload File</router-link></li>
    </ul>
</header>
</template>


<script>


</script>


<style>

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #24252A;
  }

  li,a {
    font-weight: 500;
    font-size: 16px;
    color: #EDF0F1;
    text-decoration: none;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
    border: 2px solid white;
  }

  #navigation {
    list-style-type: none;
    font-family: 'Montserrat', sans-serif;
  }

  #navigation li {
    display: inline-block;
    padding: 0px 20px;
  }

  #navigation li a {
    transition: all 0.3s ease 0s;
  }

  #navigation li a:hover {
    color: #0088A9;
  }

  #logo {
    width: 50px;
    height: 50px;
  }

</style>