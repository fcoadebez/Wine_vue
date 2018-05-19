<template>
  <div class="form">
    <div class="container">
      <div class="logo">
        <img src="../assets/form/logo.svg" alt="">
      </div>
      <form v-on:submit.prevent="onSubmit">
        <div class="inputs">
          <input v-if="email != ''" v-model=email type="text" name="email" class="input_form" placeholder="Email">
          <input v-if="email == ''" v-model=localEmail type="text" name="email" class="input_form" placeholder="Email">
          <input v-model=pwd type="password" name="pwd" class="input_form" placeholder="Mot de passe">
        </div>
        
        <button class="white">Connexion</button>
        <p v-if="error">Adresse email ou mot de passe incorrect !</p>
      </form>
      <div class="bottom">
        <router-link to="signup">Pas encore de compte</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import router from "../router/index.js";

export default {
  name: "Connexion",
  components: {},
  mounted() {},
  data() {
    return {
      msg: "Connexion",
      localEmail: "",
      pwd: "",
      error: false
    };
  },
  computed: {
    ...mapState({ email: state => state.signup.email })
  },

  methods: {
    ...mapActions({
      postUser: "postUser",
      postEmail: "postEmail",
      setAllWines: "setAllWines",
      setWines: "setWines",
      initFavWines: "initFavWines",
      initDrinkWines: "initDrinkWines"
    }),

    onSubmit() {
      this.error = false;
      var email = "";
      this.email !== "" ? (email = this.email) : (email = this.localEmail);

      axios
        .post(process.env.baseUrl + "admin/api/login", {
          email: email,
          password: this.pwd
        })
        .then(response => {
          if (response.data.alert.type !== "fail") {
            this.postUser(response.data.alert.user.id);
            this.postEmail(email);
            this.$localStorage.set("token", response.data.alert.token);

            if (response.data.alert.profil === true) {
              this.setAllWines(response.data.alert.winesAll);
              this.setWines(response.data.alert.winesProfil);
              this.initFavWines(response.data.alert.winesFav);
              this.initDrinkWines(response.data.alert.winesDrink);

              router.push({
                name: "Home",
                params: { subnav: "all" }
              });
            } else {
              router.push({
                name: "Question",
                params: { id: 1 }
              });
            }
          } else {
            this.error = true;
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
p {
  color: white;
  font-weight: 600;
}
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
