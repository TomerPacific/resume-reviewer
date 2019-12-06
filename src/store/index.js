import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userLoggedIn: false,
        language: 'Hebrew',
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
            state.language = payload;
        }
    },
    actions: {
        logoutUser( {commit}, event) {
            commit('userLoggedOut', event);
        },
        setLanguage( {commit}, event) {
            commit('setLanguage', event);
        }
    }
});


