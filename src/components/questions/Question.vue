<template>
<!-- <transition name="slide-left"> -->
  <div key="question" class="question">
    <p class="question_text">{{ getQuestions[$route.params.id-1].question.question }}</p>
    <!-- <router-link  :to="{ name: 'Question', params: { id: parseInt($route.params.id)+1 }}" > -->
      <button v-for="(response) in getQuestions[$route.params.id-1].responses" :key="response.id" @click="getResponse(getQuestions[$route.params.id-1].question.id, response.id, parseInt($route.params.id), getQuestions.length)"  class="purple">{{ response.response }}</button>
    <!-- </router-link> -->
    
  </div>
<!-- </transition> -->
</template>

<script>
import axios from "axios";
import router from "../../router/index.js";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Question",
  components: {},

  data() {
    return {
      questionsLength: 0
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
      getQuestions: "getQuestions"
    })
  },

  methods: {
    getResponse: (question, response, route, nbQuestions) => {
      console.log("question", question);
      console.log("response", response);
      console.log("route", route);
      console.log("nbQuestions", nbQuestions);
      // if (route !== nbQuestions) {
      //   router.push({
      //     name: "Question",
      //     params: { id: route + 1 }
      //   });
      // }
    },
    onSubmit() {
      // console.log("ok");
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
}
button {
  margin-bottom: 15px;
  text-transform: none !important;
}
</style>
