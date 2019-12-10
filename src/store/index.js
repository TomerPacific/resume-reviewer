import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userLoggedIn: false,
        language: 'Hebrew',
        currentUser: null,
    },
    getters: {
        isUserLoggedIn(state) {
            return state.userLoggedIn;
        },
        getLanguage(state) {
            return state.language;
        }
    },
    mutations: {
        userLoggedOut(state) {
            state.userLoggedIn = false;
        },
        setLanguage(state, payload) {
            state.language = payload.language;
        },
        userLoggedIn(state, payload) {
            state.userLoggedIn = true;
            state.currentUser = payload.currentUser;
        },
    },
    actions: {
        logoutUser( {commit}, event) {
            commit('userLoggedOut', event);
        },
        setLanguage( {commit}, payload) {
            commit('setLanguage', payload);
        },
        loginUser( {commit}, payload) {
            commit('userLoggedIn', payload);
        }
    }
});


