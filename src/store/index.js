import Vue from "vue";
import Vuex from "vuex";
import signup from "./modules/signup";
import questions from "./modules/questions";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { signup, questions }
});

export default store;
