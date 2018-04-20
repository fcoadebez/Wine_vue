/* eslint-disable no-shadow */
import axios from "axios";
import router from "@/router";

const state = {
  questions: "",
  responseUser: []
};

const getters = {
  getQuestionsLength: state => state.questions.length,
  getQuestions: state => state.questions

  // this.stepSize = -12.5 * getQuestions.length;
};

const mutations = {
  SET_QUESTIONS: (state, questions) => {
    state.questions = questions;
  },
  SET_RESPONSE_USER: (state, response) => {
    state.responseUser.push(response);
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
  }
};

export default { state, getters, mutations, actions };
