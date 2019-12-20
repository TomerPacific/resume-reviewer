<template>
  <header dir="ltr">
    <b-navbar toggleable="lg" fill>
    <b-navbar-brand>
      <img src="../assets/logo.png" id="logo">
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/file">Upload Resume</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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

  #logo {
    width: 50px;
    height: 50px;
  }

  .nav-link {
    color:white !important;
  }

  .nav-link:hover {
     color: #0088A9 !important;
  }
.nav-link {
  transition: all 0.3s ease 0s;
}



</style>