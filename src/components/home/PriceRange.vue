<template>
  <div class="price_range">
    <div class="container">
      <p>Fourchette de prix</p>
      <vue-slider v-model="value"></vue-slider>
    </div>
  </div>
</template>

<script>
import router from "../../router/index.js";
import vueSlider from "vue-slider-component";

export default {
  name: "Title",
  components: { vueSlider },
  props: [],

  data() {
    return {
      value: [15, 50]
    };
  },
  watch: {},
  mounted() {
    this.$el.firstChild.children[1].children[0].children[3].style.backgroundImage =
      "linear-gradient(to bottom,#ba3353,#ac2a51,#9e214e,#8f184b,#810f47)";
    this.$el.firstChild.children[1].children[0].style.height = "3px";
    this.$el.firstChild.children[1].children[0].children[0].style.height =
      "30px";
    this.$el.firstChild.children[1].children[0].children[0].style.width =
      "30px";
    this.$el.firstChild.children[1].children[0].children[0].style.top = "-14px";
    this.$el.firstChild.children[1].children[0].children[1].style.height =
      "30px";
    this.$el.firstChild.children[1].children[0].children[1].style.width =
      "30px";
    this.$el.firstChild.children[1].children[0].children[1].style.top = "-14px";
    this.$el.firstChild.children[1].style.margin = "30px 0px";

    this.$el.firstChild.children[1].children[0].children[1].children[0].children[0].style.border =
      "none";
    this.$el.firstChild.children[1].children[0].children[1].children[0].children[0].style.backgroundColor =
      "transparent";
    this.$el.firstChild.children[1].children[0].children[1].children[0].children[0].style.color =
      "#666666";
    this.$el.firstChild.children[1].children[0].children[1].children[0].style.top =
      "60px";

    this.$el.firstChild.children[1].children[0].children[0].children[0].children[0].style.border =
      "none";
    this.$el.firstChild.children[1].children[0].children[0].children[0].children[0].style.backgroundColor =
      "transparent";
    this.$el.firstChild.children[1].children[0].children[0].children[0].children[0].style.color =
      "#666666";

    this.$el.firstChild.children[1].children[0].children[0].children[0].style.top =
      "60px";
  },
  computed: {},

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.price_range {
  .container {
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 8px;
    margin: 20px 0 40px 0;
    p {
      color: #666666;
      text-align: left;
      margin: 0;
      font-size: 18px;
    }
  }
}
.disable_before {
  display: none !important;
}
</style>
