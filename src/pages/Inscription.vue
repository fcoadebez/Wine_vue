<template>
  <div class="form">
    <div class="container">
      <div class="logo">
        <img src="../assets/form/logo.svg" alt="">
      </div>
      <form v-on:submit.prevent="onSubmit">
        <div class="inputs">
          <input type="text" name="email" class="input_form" placeholder="Email" v-model="email">
          <input type="password" name="pwd1" class="input_form" placeholder="Mot de passe" v-model="pwd1">
          <input type="password" name="pwd2" class="input_form" placeholder="Confirmation" v-model="pwd2">
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
import router from "../router/index.js";

export default {
  name: "Inscription",
  components: {},
  data() {
    return {
      msg: "Inscription",
      email: "",
      pwd1: "",
      pwd2: ""
    };
  },
  methods: {
    onSubmit() {
      const email = this.email;
      const pwd1 = this.pwd1;
      const pwd2 = this.pwd2;

      if (this.pwd1 === this.pwd2) {
        axios
          .post(process.env.baseUrl + "admin/api/signup", {
            email: email,
            password: pwd1
          })
          .then(function(response) {
            if (response.data.alert.type !== "fail") {
              router.push({ name: "Connexion", params: { email: email } });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
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
