<template>
  <header dir="ltr">
    <b-navbar toggleable="lg">
    <b-navbar-brand>
      <img src="../assets/logo.png" id="logo">
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">{{ language === HEBREW_LANGUAGE ? 'דף בית' : 'Home' }}</b-nav-item>
        <b-nav-item to="/about">{{ language === HEBREW_LANGUAGE ? 'אודות' : 'About' }}</b-nav-item>
        <b-nav-item to="/file">{{ language === HEBREW_LANGUAGE ? 'העלאת קורות חיים' : 'Upload Resume' }}</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-if="!isUserLoggedIn">
        <b-nav-form action="" method="">
          <b-form-input class="mr-sm-2" id="username" :placeholder="language === HEBREW_LANGUAGE ? 'אימייל' : 'Email'" v-model="username" type="email"></b-form-input>
          <b-form-input class="mr-sm-2" id="password" :placeholder="language === HEBREW_LANGUAGE ? 'סיסמא' : 'Password'" v-model="password" type="password"></b-form-input>
          <b-button variant="outline-primary" class="my-2 my-sm-0" type="submit" :value="language === HEBREW_LANGUAGE ? 'הרשמה' : 'Sign Up'" id="signin_btn" @click="signin">{{ language === HEBREW_LANGUAGE ? 'הרשמה' : 'Sign Up' }}</b-button>
          <b-button variant="outline-success" class="my-2 my-sm-0" type="submit" :value="language === HEBREW_LANGUAGE ? 'התחברות' : 'Log In'" id="login_btn" @click="login">{{ language === HEBREW_LANGUAGE ? 'התחברות' : 'Log In' }} </b-button>
        </b-nav-form>
      </b-navbar-nav>

       <b-navbar-nav class="ml-auto" v-else>
        <b-nav-form action="" method="">
           <b-button variant="outline-danger" id="logout_btn" class="my-2 my-sm-0" type="submit" :value="language === HEBREW_LANGUAGE ? 'התנתקות' : 'Logout'" @click="logoutUser">{{ language === HEBREW_LANGUAGE ? 'התנתקות' : 'Logout' }} </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </header>
</template>

<script>

import firebase from 'firebase';
import Constants from '../constants.js';
import constants from '../constants.js';

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
        that.username = null;
        that.password = null;
      });
    },
    signin: function() {

      if (!this.validateEmail()) {
        alert(constants.errors.INVALID_EMAIL);
        return;
      }

      if (!this.validatePassword()) {
        alert(constants.errors.INVALID_PASSWORD);
        return;
      }

      let that = this;
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
      .then(function(user) {
        that.$store.dispatch('loginUser', {currentUser: user});
      },
      function(err) {
        alert(err.message);
        that.resetFormFields();
      })
    },
    login: function() {

      if (!this.validateEmail()) {
        alert(constants.errors.INVALID_EMAIL);
        return;
      }

      if (!this.validatePassword()) {
        alert(constants.errors.INVALID_PASSWORD);
        return;
      }

      let that = this;
      firebase.auth().signInWithEmailAndPassword(this.username, this.password)
      .then(function(user) {
        that.$store.dispatch('loginUser', {currentUser: user});
      },
      function(err) {
        alert(err.message);
        that.resetFormFields();
      });
    },
    resetFormFields: function() {
      let usernameInput = document.getElementById('username');
      let passwordInput = document.getElementById('password');
      usernameInput.value = '';
      passwordInput.value = '';
      this.username = null;
      this.password = null;
    },
    validatePassword: function() {
      return (this.password !== '' && 
              this.password !== undefined && 
              this.password !== null && 
              this.password.length > Constants.MINIMUM_PASSWORD_LENGTH);
    },
    validateEmail: function() {
      let emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      let isEmailValid = emailPattern.exec(this.username);
      return isEmailValid;
    },
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    language() {
      return this.$store.getters.getLanguage;
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

  header {
    text-align: center;
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

.missing_input {
  border: 2px solid red;
}

.navbar-toggler > .navbar-toggler-icon {
  background-color: white; 
}

</style>