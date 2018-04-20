/* eslint-disable no-shadow */
import router from "@/router";

const state = {
  user: ""
};

const getters = {
  getUser: state => state.user
};

const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
  }
};

const actions = {
  postUser: (context, user) => {
    console.log(user);
    context.commit("SET_USER", user);
  }
};

export default { state, getters, mutations, actions };
