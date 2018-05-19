/* eslint-disable no-shadow */
import axios from "axios";

const state = {
  questions: "",
  responseUser: [],
  reset: false
};

const getters = {
  getQuestionsLength: state => state.questions.length,
  getQuestions: state => state.questions,
  getResponses: state => state.responseUser,
  getReset: state => state.reset

  // this.stepSize = -12.5 * getQuestions.length;
};

const mutations = {
  SET_QUESTIONS: (state, questions) => {
    state.questions = questions;
  },
  SET_RESPONSE_USER: (state, response) => {
    state.responseUser.push(response);
  },
  RESET_RESPONSES_USER: state => {
    state.responseUser = [];
  },
  SET_RESET: (state, value) => {
    state.reset = value;
  }
};

const actions = {
  getQuestions: (context, questions) => {
    axios
      .get(process.env.baseUrl + "admin/api/questions")
      .then(response => {
        context.commit("SET_QUESTIONS", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  setResponse: (context, response) => {
    context.commit("SET_RESPONSE_USER", response);
  },
  resetResponses: context => {
    context.commit("RESET_RESPONSES_USER");
  },
  setReset: (context, value) => {
    context.commit("SET_RESET", value);
  }
};

export default { state, getters, mutations, actions };
