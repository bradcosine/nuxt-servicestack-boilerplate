import Vue from "vue";
import Vuex from "vuex";
import { getLinks, getPost, getToken, getSecured, client } from "~/shared/gateway";
import { setTimeout } from "timers";
import Cookie from 'js-cookie';

const state = {
    loading: false,
    links: {},
    posts: {}
};

const mutations = {
    loading(state, loading) {
        state.loading = loading;
    },
    links(state, links) {
        state.links = links;
    },
    post(state, post) {
        Vue.set(state.posts, post.id, post); // Use Vue.set() to update objects/arrays so mutations can be observed
    },
    SET_USER (state, user) {
        state.user = user || null
    },
    SET_AUTH (state, auth) {
        state.auth = auth;
    },
    authtoken (state, st) {
        state.authtoken = st;
    },
    secured (state, secured) {
        state.secured = secured
    }

}

const getters = {
    loading: state => state.loading,
    links: state => state.links,
    getPost: (state) => (id) => state.posts[id],
    isAuthenticated: (state) => state.auth.loggedIn,
    loggedInUser(state) {
        return state.auth.user
    }
};

const actions = {
    async nuxtServerInit ({ commit, dispatch }, { req, app }) {
        //let loggedIn = false;

        if (req) {
            if (req.headers.cookie) {
                //console.log(app.$auth.$storage.getCookie("_token.auth0"));
                var loggedIn = app.$auth.$storage.getCookie("_token.auth0");
                if (!loggedIn) {
                    await dispatch('logout');
                }
            }
        }
    },
    async nuxtClientInit({ commit }, { req }) {
        var links = await getLinks();
        //remove first 3 keys to simulate loading stale data on initial load
        Object.keys(links).slice(0,3).forEach(key => delete links[key]);
        commit('links', links);
    },

    async getLinks({ commit }) {
        commit('loading', true);
        commit('links', await getLinks());
        commit('loading', false);
    },

    async getSecured({ commit }) {
        if (this.$auth.loggedIn) {
            client.setBearerToken(this.$auth.getToken("auth0").replace("Bearer ",""));
        }
        commit('loading', true);
        commit('secured', await getSecured());
        commit('loading', false);
    },

    async getPost({ commit }, id) {
        commit('loading', true);
        commit('post', await getPost(id));
        commit('loading', false);
    },

    async login({ commit }) {
        this.$auth.loginWith('auth0');
       // commit('SET_USER', '');
    },
    async logout({ commit }) {
        //delete localStorage.token;
        //delete localStorage.idToken;
        this.$auth.logout();
        //this.$axios.setHeader('Authorization', null);
        commit('SET_USER', null);
    },

    async getAuthToken({commit}, code, state) {
        commit('authtoken', await getToken(code,state));
    }
};

const createStore = () => 
    new Vuex.Store({
        state,
        mutations,
        getters,
        actions
    });

export default createStore;
