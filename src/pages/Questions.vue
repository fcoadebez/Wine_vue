<template>
  <div class="form question">
    <div class="container">
      <div class="logo">
        <img src="../assets/logo_simple.svg" alt="">

      </div>
      <div class="intro">
        <p>Ces quelques questions permettrons à notre oenologue de sélectionner les bouteilles adaptées à votre palais.</p>
      </div>
      <Range :questionNumber="questionsAll"/>
      <div class="question">
        <transition>
          <router-view class="child-view" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import router from "../router/index.js";
import Range from "@/components/questions/Range";

export default {
  name: "Question",
  components: { Range },

  data() {
    return {
      questionsAll: ""
    };
  },
  created() {
    this.getQuestions();
  },
  computed: {
    ...mapState({ questions: state => state.questions.questions })
  },
  mounted() {
    // this.questionsAll = this.questions;
  },
  methods: {
    ...mapActions({
      getQuestions: "getQuestions"
    }),

    onSubmit() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.question {
  background-image: linear-gradient(to bottom, #ba3353, #951932, #810f47);
}
.logo {
  padding-top: 40px;
  img {
    width: 200px;
  }
}
.intro {
  p {
    color: white;
    &:nth-child(1) {
      font-size: 17px;
      margin-top: 0;
    }
    &:nth-child(2) {
      font-size: 14px;
      padding: 20px 30px;
    }
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  transition: all 0.5s linear;
}
.slide-left-enter,
.slide-right-leave-active {
  // opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  // opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
