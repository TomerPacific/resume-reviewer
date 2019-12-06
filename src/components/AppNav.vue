<template>
<header dir="ltr">
    <img src="../assets/logo.png" id="logo">
    <ul id="navigation">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/file">Upload Resume</router-link></li>
    </ul>
    <div id="login" v-if="!isUserLoggedIn">
      <form @submit="checkForm" action="" method="">
        <i class="fas fa-user"></i><input id="username" type="text" value="" placeholder="Username" v-model="username"> <br>
        <i class="fas fa-key"></i><input id="password" type="password" value="" placeholder="Password" v-model="password">
        <input type="submit" value="Submit" id="submit_btn">
      </form>
    </div>
    <div id="logut" v-else>
      <button id="logout_btn" v-on:click="logoutUser">Logout</button>
    </div>
</header>
</template>


<script>

export default {
  name: 'AppNav',
  data: function() {
    return {
        username: null,
        password: null,
    }
  },
  methods : {
    logoutUser() {
      this.$store.dispatch('logoutUser');
    },
    checkForm: function(e) {

      let usernameInput = document.getElementById("username");
      let passwordInput = document.getElementById("password");

      usernameInput.classList.remove("missing_input");
      passwordInput.classList.remove("missing_input");

      if (this.username && this.password) {
        
        return true;
      }

     
      
      if (!this.username) {
        usernameInput.classList.add("missing_input");
      }
      if (!this.password) {
         passwordInput.classList.add("missing_input");
      }

      e.preventDefault();
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    }
  }
}

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
    font-size: 20px;
    color: #EDF0F1;
    text-decoration: none;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 5%;
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

  #login {
    color: white;
  }

  #login form input {
    display: inline-block;
    color: white;
    margin-bottom: 2%;
  }

  ::-webkit-input-placeholder, :-ms-input-placeholder, ::-moz-placeholder, ::placeholder {
    color: white;
  }

  #submit_btn {
    position: absolute;
    right: 5;
  }

  #logout_btn {
    color: white;
    width: 55px;
  }

  .missing_input {
    border: 2px solid red;
  }

</style>