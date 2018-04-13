<template>
  <div class="form">
    <div class="container">
      <div class="logo">
        <img src="../assets/form/logo.svg" alt="">
      </div>
      <form v-on:submit.prevent="onSubmit">
        <div class="inputs">
          <input type="text" name="email" class="input_form" placeholder="Email" v-model="credentials.email">
          <input type="password" name="pwd1" class="input_form" placeholder="Mot de passe" v-model="credentials.pwd1">
          <input type="password" name="pwd2" class="input_form" placeholder="Confirmation" v-model="credentials.pwd2">
        </div>
        <button type="submit" class="white">Créer un compte</button>
      </form>
      
      <div class="bottom">
        <router-link to="login">Déjà un compte</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import router from "../router/index.js";

export default {
  name: "Inscription",
  components: {},
  data() {
    return {
      msg: "Inscription",
      credentials: {
        email: "",
        pwd1: "",
        pwd2: ""
      }
    };
  },
  methods: {
    ...mapActions({
      postCredentials: "postCredentials"
    }),

    onSubmit() {
      const { email, pwd1, pwd2 } = this.credentials;

      if (pwd1 === pwd2) {
        this.postCredentials(this.credentials);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.logo {
  width: 100%;
  padding-top: 70px;
  padding-bottom: 30px;
  img {
    width: 162px;
  }
}
.bottom {
  position: absolute;
  height: 18%;
  width: 100%;
  bottom: 0;
  background-image: url("../assets/form/bottom.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
  }
}
</style>
