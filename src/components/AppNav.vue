<template>
<header dir="ltr">
    <img src="../assets/logo.png" id="logo">
    <ul id="navigation" v-if="language === ENGLISH_LANGUAGE">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/file">Upload Resume</router-link></li>
    </ul>
    <ul id="navigation" v-if="language === HEBREW_LANGUAGE">
        <li><router-link to="/">דף בית</router-link></li>
        <li><router-link to="/about">אודות</router-link></li>
        <li><router-link to="/file">העלאת קורות חיים</router-link></li>
    </ul>
    <div id="login" v-if="!isUserLoggedIn">
      <form @submit="checkForm" action="" method="">
        <i class="fas fa-user"></i><input id="username" type="email" value="" :placeholder="language === HEBREW_LANGUAGE ? 'אימייל' : 'Email'" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" v-model="username"> 
        <input type="submit" :value="language === HEBREW_LANGUAGE ? 'התחברות' : 'Log In'" id="login_btn" @click="login"> <br>
        <i class="fas fa-key"></i><input id="password" type="password" value="" :placeholder="language === HEBREW_LANGUAGE ? 'סיסמא' : 'Password'" v-model="password">
        <input type="submit" :value="language === HEBREW_LANGUAGE ? 'הרשמה' : 'Sign Up'" id="signin_btn" @click="signin">
      </form>
    </div>
    <div id="logut" v-else>
      <button id="logout_btn" v-on:click="logoutUser">{{language === HEBREW_LANGUAGE ? 'התנתק' : 'Logout' }}</button>
    </div>
</header>
</template>


<script>

import firebase from 'firebase';
import Constants from '../constants.js';

export default {
  name: 'AppNav',
  created() {
    this.HEBREW_LANGUAGE = Constants.HEBREW_LANGUAGE;
    this.ENGLISH_LANGUAGE = Constants.ENGLISH_LANGUAGE;
  },
  data: function() {
    return {
        username: null,
        password: null,
    }
  },
  methods : {
    logoutUser() {
      let that = this;
      firebase.auth().signOut()
      .then(function() {
        that.$store.dispatch('logoutUser');
        that.username = '';
        that.password = '';
      });
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
    },
    signin: function() {
      let that = this;
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
      .then(function(user) {
        that.$store.dispatch('loginUser', {currentUser: user});
      },
      function(err) {
        console.log("Error when creating user " + err.message);
      })
    },
    login: function() {
      let that = this;
      firebase.auth().signInWithEmailAndPassword(this.username, this.password)
      .then(function(user) {
        that.$store.dispatch('loginUser', {currentUser: user});
      },
      function(err) {
        console.log("Error when user logged in " + err.message);
      });
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    language() {
      return this.$store.getters.getLanguage;
    },
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

  #login_btn {
    position: absolute;
    right: 5;
    width: 55px;
  }

  #signin_btn {
      position: absolute;
      right: 5;
      width: 55px;
  }

  #logout_btn {
    color: white;
    font-weight: 800;
    width: 55px;
  }

  #signin_btn:hover, #login_btn:hover, #logout_btn:hover {
     color: #0088A9;
  }

  .missing_input {
    border: 2px solid red;
  }

</style>