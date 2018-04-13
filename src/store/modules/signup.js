/* eslint-disable no-shadow */
import axios from "axios";
import router from "@/router";

const state = {
  email: ""
};

const getters = {};

const mutations = {
  SET_EMAIL: (state, email) => {
    state.email = email;
  }
};

const actions = {
  postCredentials: (context, credentials) => {
    console.log(credentials);
    axios
      .post(process.env.baseUrl + "admin/api/signup", {
        email: credentials.email,
        password: credentials.pwd1
      })
      .then(response => {
        if (response.data.alert.type !== "fail") {
          router.push({ name: "Connexion" });
          context.commit("SET_EMAIL", credentials.email);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

export default { state, getters, mutations, actions };
