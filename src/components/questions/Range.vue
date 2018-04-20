<template>
  <div class="range_container">
    <div class="range">
      <div class="line" ref="line">
        <div :key="index" v-for="(question,index) in getQuestions" v-if="index != getQuestions.length-1" class="step" v-bind:style="{ width: 100/(getQuestions.length) + '%' }"></div>
        <div key="end" class="step" v-bind:style="{ width: 100/(getQuestions.length) + '%' }"></div>
        <div class="actual" v-bind:style="{ left: stepSize + 'px' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Range",
  props: {
    questionNumber: String
  },
  data() {
    return {
      step: 2,
      stepNumber: 5,
      lineWidth: 0,
      stepSize: -12.5,
      actualStep: 0
    };
  },
  beforeMount() {},
  computed: {
    ...mapGetters({
      getQuestions: "getQuestions",
      getQuestionsLength: "getQuestionsLength"
    }),
    ...mapState({ questions: state => state.questions.questions })
  },
  watch: {
    "$route.params.id": function(id) {
      this.rangeUpdate(id);
    },
    getQuestions() {
      this.rangeUpdate(this.$route.params.id);
    }
  },
  mounted: function() {
    this.actualStep = this.$route.params.id;
    console.log(this.$route.params.id);
  },
  methods: {
    rangeUpdate(id) {
      this.$data.actualStep = this.$route.params.id;
      this.questionNumber = this.getQuestions;
      this.$data.lineWidth = this.$refs.line.clientWidth;
      this.$data.stepSize = this.$data.lineWidth / this.getQuestionsLength;

      if (this.$data.step === 0) {
        this.$data.stepSize = -12.5;
      } else {
        this.$data.stepSize *= this.$route.params.id - 1;
        this.$data.stepSize -= 12.5;
      }
    }
  }
};
</script>

<style scoped>
.range_container {
  margin: 30px 0;
}
.line {
  width: 85%;
  height: 2px;
  background-color: white;
  margin: auto;
  overflow: visible;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.actual {
  width: 25px;
  height: 25px;
  position: absolute;
  background-color: white;
  border-radius: 20px;
  bottom: -12.5px;
  left: -12.5px;
  box-shadow: 0px 2px 2px #5b4b4b;
}
.step:after {
  content: "";
  width: 2px;
  height: 13px;
  background-color: white;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  margin: auto;
}
.line:after {
  content: "";
  width: 2px;
  height: 13px;
  background-color: white;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  margin: auto;
}
</style>
