/* eslint-disable no-shadow */
const state = {
  wines: [],
  allWines: [],
  favWines: [],
  drinkWines: [],
  range: []
};

const getters = {
  getWines: state => state.wines,
  getFavWines: state => state.favWines,
  getRange: state => state.range
};

const mutations = {
  SET_ALL_WINES: (state, wines) => {
    state.allWines = wines;
  },
  SET_WINES: (state, wines) => {
    state.wines = wines;
  },

  SET_RANGE: (state, range) => {
    state.range = range;
  },
  SET_FAV_WINES: (state, wine) => {
    state.favWines.push(wine);
  },
  UNFAV_WINES: (state, id) => {
    let newFavWines = [];
    state.favWines.forEach((wine, index) => {
      if (wine.id !== id) {
        newFavWines.push(wine);
      }
    });
    state.favWines = newFavWines;
  },
  SET_DRINK_WINES: (state, wine) => {
    state.drinkWines.push(wine);
  },
  UNDRINK_WINES: (state, id) => {
    let newDrinkWines = [];
    state.favWines.forEach((wine, index) => {
      if (wine.id !== id) {
        newDrinkWines.push(wine);
      }
    });
    state.drinkWines = newDrinkWines;
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
  },
  setDrinkWine: (context, wine) => {
    context.commit("SET_DRINK_WINES", wine);
  },
  unDrinkWine: (context, id) => {
    context.commit("UNDRINK_WINES", id);
  }
};

export default { state, getters, mutations, actions };
