/* eslint-disable no-shadow */

const state = {
  user: "",
  email: ""
};

const getters = {
  getUser: state => state.user
};

const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
  },
  SET_EMAIL: (state, email) => {
    state.email = email;
  }
};

const actions = {
  postUser: (context, user) => {
    context.commit("SET_USER", user);
  },
  postEmail: (context, email) => {
    console.log("email_store : ", email);
    context.commit("SET_EMAIL", email);
  }
};

export default { state, getters, mutations, actions };
