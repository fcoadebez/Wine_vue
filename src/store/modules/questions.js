/* eslint-disable no-shadow */
import axios from "axios";
import router from "@/router";

const state = {
  questions: ""
};

const getters = {
  getQuestionsLength: state => state.questions.length,
  getQuestions: state => state.questions

  // this.stepSize = -12.5 * getQuestions.length;
};

const mutations = {
  SET_QESTIONS: (state, questions) => {
    state.questions = questions;
  }
};

const actions = {
  getQuestions: (context, questions) => {
    axios
      .get(process.env.baseUrl + "admin/api/questions")
      .then(response => {
        context.commit("SET_QESTIONS", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

export default { state, getters, mutations, actions };
