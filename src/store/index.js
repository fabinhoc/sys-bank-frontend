import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    AUTH_TOKEN: localStorage.getItem("token") || "",
    AUTH_USER: JSON.parse(localStorage.getItem("authUser")) || {},
  },
  mutations: {
    SET_AUTH_TOKEN: (state, payload) => {
      state.AUTH_TOKEN = payload;
      localStorage.setItem("token", payload);
    },
    SET_AUTH_USER: (state, payload) => {
      state.AUTH_USER = payload;
      localStorage.setItem("authUser", JSON.stringify(payload));
    },
    SET_LOCAL_STORAGE_VALUES: (state) => {
      state.AUTH_TOKEN = localStorage.getItem("token");
      state.AUTH_USER = JSON.parse(localStorage.getItem("authUser"));
    },
  },
  actions: {
    // SET_AUTH_TOKEN({ commit }) {
    //   commit("SET_AUTH_TOKEN");
    // },
    SET_AUTH_TOKEN: (context, token) => {
      context.commit("SET_AUTH_TOKEN", token);
    },
    SET_AUTH_USER: (context, user) => {
      context.commit("SET_AUTH_USER", user);
    },
    SET_LOCAL_STORAGE_VALUES: (context) => {
      context.commit("SET_LOCAL_STORAGE_VALUES");
    },
  },
  modules: {},
});
