import Vue from "vue";
import Vuex from "vuex";
import signup from "./modules/signup";
import questions from "./modules/questions";
import user from "./modules/user";
import wines from "./modules/wines";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { signup, questions, user, wines }
});

export default store;

const initialStateCopy = JSON.parse(JSON.stringify(store.state));

export function resetState() {
  store.replaceState(JSON.parse(JSON.stringify(initialStateCopy)));
}
