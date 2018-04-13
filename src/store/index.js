import Vue from "vue";
import Vuex from "vuex";
import signup from "./modules/signup";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { signup }
});

export default store;
