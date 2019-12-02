import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userLoggedIn: false
    },
    getters: {
        isUserLoggedIn(state) {
            return state.userLoggedIn;
        }
    },
    mutations: {
        userLoggedOut(state) {
            state.userLoggedIn = false;
        }
    },
    actions: {
        logoutUser( {commit}, event) {
            commit('userLoggedOut', event);
        }
    }
});


