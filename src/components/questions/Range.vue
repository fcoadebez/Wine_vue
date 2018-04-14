<template>
  <div class="range_container">
    <div class="range">
      <div class="line" ref="line">
        <div class="step" style=""></div>
        <div class="step" style=""></div>
        <div class="step" style=""></div>
        <div class="step" style=""></div>
        <div class="step" style=""></div>
        <div class="actual" v-bind:style="{ left: stepSize + 'px' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Range",
  data() {
    return {
      step: 2,
      stepNumber: 5,
      lineWidth: 0,
      stepSize: 0
    };
  },
  mounted: function() {
    this.$data.lineWidth = this.$refs.line.clientWidth;
    this.$data.stepSize = this.$data.lineWidth / this.$data.stepNumber;

    if (this.$data.step === 0) {
      this.$data.stepSize = this.$data.stepSize * 0 - 12.5;
    } else {
      this.$data.stepSize = this.$data.stepSize * this.$data.step;
      var step = -12.5 * this.$data.step;
      this.$data.stepSize =
        this.$data.stepSize - step - 2 * this.$data.step - 4;
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
</style>
