/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'

const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false,
    token: null
  },
  getters: {
    getAuth: (state) => {
      return state.auth;
    },
    getToken: (state) => {
      return state.token;
    }
  },
  mutations: {
    setAuth: (state, value) => {
      state.auth = value;
    },
    setToken: (state, token) => {
      state.token = token;
    }
  },
  actions: {
    setAuth: (context, auth) => {
      context.commit('setAuth', auth);
    },
    setToken: (context, token) => {
      context.commit('setToken', token);
    }
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      }
    })
  ]
})
