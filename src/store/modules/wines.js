/* eslint-disable no-shadow */
const state = {
  wines: []
};

const getters = {
  getWines: state => state.wines
};

const mutations = {
  SET_WINES: (state, wines) => {
    state.wines = wines;
  }
};

const actions = {
  setWines: (context, wines) => {
    context.commit("SET_WINES", wines);
  }
};

export default { state, getters, mutations, actions };
