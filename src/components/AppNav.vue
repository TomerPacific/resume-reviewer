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
import Utils from '../utils.js';

export default {
  name: 'AppNav',
  created() {
    this.HEBREW_LANGUAGE = Constants.HEBREW_LANGUAGE;
    this.ENGLISH_LANGUAGE = Constants.ENGLISH_LANGUAGE;
  },
  mounted: function() {
    this.userNameInput =  document.getElementById('username');
    this.passwordInput = document.getElementById('password');
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

      if (!Utils.areInputFieldsValid()) {
        return;
      }

      Utils.removeClassFromElement(this.userNameInput, 'invalid_input');
      Utils.removeClassFromElement(this.passwordInput, 'invalid_input');

      let that = this;
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
      .then(function(user) {
        that.$store.dispatch('loginUser', {currentUser: user});
        that.$analytics.logEvent('UserAction', 'Signin', 'Signin', 1);
      },
      function(err) {
        alert(err.message);
        that.resetFormFields();
      })
    },
    login: function() {

      if (!Utils.areInputFieldsValid()) {
        return;
      }

      Utils.removeClassFromElement(this.userNameInput, 'invalid_input');
      Utils.removeClassFromElement(this.passwordInput, 'invalid_input');

      let that = this;
      firebase.auth().signInWithEmailAndPassword(this.username, this.password)
      .then(function(user) {
        that.$store.dispatch('loginUser', {currentUser: user});
        that.$analytics.logEvent('UserAction', 'Login', 'Login', 2);
      },
      function(err) {
        alert(Utils.convertLoginError(err, that.language));
        that.resetFormFields();
      });
    },
    resetFormFields: function() {
      this.userNameInput.value = '';
      this.passwordInput.value = '';
      this.username = null;
      this.password = null;
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

.invalid_input {
  border: 2px solid red !important;
}

.navbar-toggler > .navbar-toggler-icon {
  background-color: white; 
}

</style>