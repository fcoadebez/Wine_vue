<template>
  <div class="form questions">
    <div class="container">
      <img v-if="this.$route.params.id != 1" @click="backQuestion()" class="left_arrow" src="../assets/form/left-arrow.svg" alt="">
      <img v-if="getReset == true" @click="disableReset()" class="left_arrow close" src="../assets/form/cancel.svg" alt="">
      
      <div class="logo">
        <img src="../assets/logo_simple.svg" alt="">

      </div>
      <div class="intro">
        <p>dans l'aventure Wine&Me</p>
        <p v-if="$route.params.id == 1">Ces quelques questions permettrons à notre oenologue de sélectionner les bouteilles adaptées à votre palais.</p>
      </div>
      <Range :questionNumber="questionsAll"/>
        <!-- <transition name="slide-left"> -->
          <router-view class="child-view"/>
        <!-- </transition> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import router from "../router/index.js";
import Range from "@/components/questions/Range";

export default {
  name: "Question",
  components: { Range },

  data() {
    return {
      questionsAll: "",
      reset: this.$route.params.reset
    };
  },
  created() {
    this.getQuestions();
  },
  computed: {
    ...mapState({ questions: state => state.questions.questions })
  },
  mounted() {
    console.log(this);
  },
  computed: {
    ...mapGetters({
      getReset: "getReset"
    })
  },
  methods: {
    ...mapActions({
      getQuestions: "getQuestions",
      resetResponses: "resetResponses"
    }),

    backQuestion() {
      this.$store.state.questions.responseUser.splice(
        this.$route.params.id - 2,
        1
      );

      router.push({
        name: "Question",
        params: { id: this.$route.params.id - 1 }
      });
    },
    disableReset() {
      this.resetResponses();
      router.push({
        name: "Home",
        params: { subnav: "all" }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
html {
  // background-color: #810f47;
}
.questions {
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  height: auto;
  // background-color: #810f47;
  .container {
    position: relative;
    .left_arrow {
      position: absolute;
      width: 25px;
      top: 50px;
      left: 30px;
      &.close {
        right: 30px;
        left: unset;
      }
    }
  }
}
.logo {
  padding-top: 40px;
  img {
    width: 200px;
  }
  p {
    font-size: 17px;
  }
}
.intro {
  p {
    color: white;
    &:nth-child(1) {
      font-size: 19px;
      margin-top: 0;
    }
    &:nth-child(2) {
      font-size: 15px;
      padding: 10px 20px;
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
