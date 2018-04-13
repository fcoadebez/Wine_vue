<template>
  <div class="form">
    <div class="container">
      <div class="logo">
        <img src="../assets/form/logo.svg" alt="">
      </div>
      <form v-on:submit.prevent="onSubmit">
        <div class="inputs">
          <input v-model=email type="text" name="email" class="input_form" placeholder="Email">
          <input v-model=pwd type="password" name="pwd" class="input_form" placeholder="Mot de passe">
        </div>
        <button class="white">Connexion</button>
      </form>
      <div class="bottom">
        <router-link to="signup">Pas encore de compte</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router/index.js";

export default {
  name: "Connexion",
  components: {},
  mounted() {
    // console.log(this.$route.params);
  },
  props: ["email"],
  data() {
    return {
      msg: "Connexion",
      email: this.$route.params.email,
      pwd: ""
    };
  },
  methods: {
    onSubmit() {
      const email = this.email;
      const pwd = this.pwd;

      axios
        .post(process.env.baseUrl + "admin/api/login", {
          email: this.email,
          password: this.pwd
        })
        .then(function(response) {
          if (response.data.alert.type !== "fail") {
            console.log("connexion Ok");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
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
    width: 220px;
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
