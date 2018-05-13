/* eslint-disable no-shadow */
const state = {
  wines: [],
  favWines: []
};

const getters = {
  getWines: state => state.wines
};

const mutations = {
  SET_WINES: (state, wines) => {
    state.wines = wines;
  },
  SET_FAV_WINES: (state, wine) => {
    state.favWines[wine.id] = wine;
  },
  UNFAV_WINES: (state, id) => {
    console.log(id);
    state.favWines[id] = undefined;
  }
};

const actions = {
  setWines: (context, wines) => {
    context.commit("SET_WINES", wines);
  },
  setFavWine: (context, wine) => {
    context.commit("SET_FAV_WINES", wine);
  },
  unFavWine: (context, id) => {
    context.commit("UNFAV_WINES", id);
  }
};

export default { state, getters, mutations, actions };
