<template>
  <div class="account">
    <div class="container">
      <Title title="Mon compte" :subtitle="email" />
      <button @click="resetQuestions()" class="">Modifier mon profil gustatif</button>
      <button @click="logout()" class="red">Déconnexion</button>
      
    </div>
  </div>
</template>

<script>
import Title from "@/components/home/Title";
import router from "../../router/index.js";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Account",
  components: { Title },
  props: [],

  data() {
    return {
      email: ""
    };
  },
  watch: {},

  mounted() {
    this.email = this.$store.state.user.email;
  },

  methods: {
    ...mapActions({
      setReset: "setReset"
    }),

    logout: () => {
      localStorage.removeItem("token");
      router.push({
        name: "Connexion"
      });
    },
    resetQuestions() {
      this.setReset(true);
      router.push({
        name: "Question",
        params: { id: 1, reset: true }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
a {
  text-decoration: none;
}
button {
  margin-bottom: 20px;
}
</style>
