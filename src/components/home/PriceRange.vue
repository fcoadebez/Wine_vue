<template>
  <div class="price_range">
    <div class="container">
      <p>Fourchette de prix</p>
      <vue-slider ref="slider" v-model="value" :min="min" :max="max" width="calc(100%-20px)">
        <template slot="tooltip" scope="tooltip">
            <div class="custom-tooltip">
              {{ tooltip.value }}
            </div>
          </template>
      </vue-slider>
    </div>
  </div>
</template>

<script>
import vueSlider from "vue-slider-component";
import { mapState, mapActions } from "vuex";

export default {
  name: "Title",
  components: { vueSlider },
  props: ["minVal", "maxVal"],

  data() {
    return {
      value: [],
      min: 0,
      max: 100
    };
  },
  watch: {
    value(val) {
      this.setRange(val);
    }
  },
  mounted() {
    let price = [];
    this.wines = this.$store.state.wines.wines;
    this.wines.forEach((wine, index) => {
      price.push(wine.price);
    });
    this.min = Math.min.apply(null, price);
    this.max = Math.max.apply(null, price);
    this.value = [this.min, this.max];

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

  methods: {
    ...mapActions({
      setRange: "setRange"
    })
  }
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
  &::before {
    content: none !important;
    display: none !important;
  }
}
</style>
