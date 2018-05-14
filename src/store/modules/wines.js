/* eslint-disable no-shadow */
const state = {
  wines: [],
  allWines: [],
  favWines: [],
  range: []
};

const getters = {
  getWines: state => state.wines
};

const mutations = {
  SET_ALL_WINES: (state, wines) => {
    state.allWines = wines;
  },
  SET_WINES: (state, wines) => {
    state.wines = wines;
  },
  SET_FAV_WINES: (state, wine) => {
    state.favWines[wine.id] = wine;
  },
  SET_RANGE: (state, range) => {
    state.range = range;
  },
  UNFAV_WINES: (state, id) => {
    state.favWines[id] = undefined;
  }
};

const actions = {
  setWines: (context, wines) => {
    context.commit("SET_WINES", wines);
  },
  setAllWines: (context, wines) => {
    context.commit("SET_ALL_WINES", wines);
  },
  setRange: (context, range) => {
    context.commit("SET_RANGE", range);
  },
  setFavWine: (context, wine) => {
    context.commit("SET_FAV_WINES", wine);
  },
  unFavWine: (context, id) => {
    context.commit("UNFAV_WINES", id);
  }
};

export default { state, getters, mutations, actions };
