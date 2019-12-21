import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'
import Vuex from 'vuex';
import { store } from './store';

//Font Awesome
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

//Bootstrap Vue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(BootstrapVue);

let app = '';

const firebaseConfigProd = {
    apiKey: process.env.VUE_APP_FIREBASE_KEY_PROD,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN_PROD,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL_PROD,
    projectId: "resume-reviewer",
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET_PROD,
    messagingSenderId: process.env.VUE_APP_FIREBASE_SENDER_ID_PROD,
    appId: process.env.VUE_APP_FIREBASE_APP_ID_PROD
};

const firebaseConfigDev = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY_DEV,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN_DEV,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL_DEV,
  projectId: "resume-reviewer-dev",
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET_DEV,
  messagingSenderId: process.env.VUE_APP_FIREBASE_SENDER_ID_DEV,
  appId: process.env.VUE_APP_FIREBASE_APP_ID_DEV
};

const firebaseConfig = process.env.NODE_ENV === 'production' ? firebaseConfigProd : firebaseConfigDev;

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
      store,
    }).$mount('#app')
  }
  if (user) {
    app.$store.dispatch('loginUser', {currentUser: user});
  }
});


