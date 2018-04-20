import Vue from "vue";
import Vuex from "vuex";
import signup from "./modules/signup";
import questions from "./modules/questions";
import user from "./modules/user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { signup, questions, user }
});

export default store;
