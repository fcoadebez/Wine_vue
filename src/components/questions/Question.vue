<template>
<div>
  <div v-if="parseInt($route.params.id) != getQuestions.length + 1" key="question" class="question">
    <p  class="question_text">{{ getQuestions[$route.params.id-1].question.question }}</p>
    <button v-for="(response) in getQuestions[$route.params.id-1].responses" :key="response.id" @click="getResponse(getQuestions[$route.params.id-1].question.id, response.id, parseInt($route.params.id), getQuestions.length)"  class="purple">{{ response.response }}</button>
  </div>
  <div v-if="parseInt($route.params.id) == getQuestions.length + 1" class="question final">
    <p>Merci d’avoir pris le temps de répondre à ces questions, votre profil a été mis à jour.
Vous pouvez maintenant trouver le vin qui vous correspond.</p>
    <button @click="storeUserResponses()" class="purple">Wine&Me</button>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router/index.js";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Question",
  components: {},

  data() {
    return {
      questionsLength: 0,
      responsesUser: ""
    };
  },
  watch: {
    getQuestions() {
      this.questionsLength = this.getQuestions;
    }
  },
  mounted() {},
  computed: {
    ...mapGetters({
      getQuestions: "getQuestions",
      getResponses: "getResponses",
      getUser: "getUser",
      getReset: "getReset"
    })
  },

  methods: {
    ...mapActions({
      setResponse: "setResponse",
      resetResponses: "resetResponses",
      storeResponses: "storeResponses",
      setWines: "setWines",
      setAllWines: "setAllWines",
      setReset: "setReset"
    }),

    getResponse(question, response, route, nbQuestions) {
      let responseUser = {
        question_id: question,
        response_id: response
      };
      this.setResponse(responseUser);

      router.push({
        name: "Question",
        params: { id: route + 1 }
      });
    },

    storeUserResponses() {
      if (this.getReset) {
        axios
          .post(process.env.baseUrl + "admin/api/responses", {
            responses: this.getResponses,
            userId: this.getUser,
            reset: true
          })
          .then(response => {
            if (response.data.alert.type !== "fail") {
              this.resetResponses();
              if (this.$store.state.wines.allWines.length == 0) {
                this.setAllWines(response.data.alert.winesAll);
              }
              this.setWines(response.data.alert.wines);
              router.push({
                name: "Home",
                params: { subnav: "all" }
              });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        axios
          .post(process.env.baseUrl + "admin/api/responses", {
            responses: this.getResponses,
            userId: this.getUser,
            reset: false
          })
          .then(response => {
            if (response.data.alert.type !== "fail") {
              this.resetResponses();
              if (this.$store.state.wines.allWines.length == 0) {
                this.setAllWines(response.data.alert.winesAll);
              }
              this.setWines(response.data.alert.wines);
              router.push({
                name: "Home",
                params: { subnav: "all" }
              });
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
.question {
  font-family: "Source Sans Pro", sans-serif;
  width: 100%;
  height: auto;
  background: none;
  .question_text {
    font-weight: 600;
  }
  p {
    font-size: 20px;
    color: white;
  }
  &.final {
    p {
      padding: 0 30px;
      font-weight: 700;
    }
    button {
      font-size: 26px !important;
      font-weight: bold;
      font-family: ChaparralPro-Bold, Chaparral Pro;
      width: 250px !important;
      padding: 10px;
      margin-top: 30px;
    }
  }
}
button {
  margin-bottom: 15px;
  text-transform: none !important;
}
</style>
