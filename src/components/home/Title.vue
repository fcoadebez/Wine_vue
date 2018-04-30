<template>
  <div class="titles">
    <div class="title">
      {{title}}
    </div>
    <div class="subtitle">
      {{subtitle}}
    </div>
  </div>
</template>

<script>
import router from "../../router/index.js";

export default {
  name: "Title",
  components: {},
  props: ["title", "subtitle"],

  data() {
    return {};
  },
  watch: {},
  mounted() {},
  computed: {},

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.titles {
  font-family: "Source Sans Pro", sans-serif;
  text-transform: uppercase;
  text-align: left;
  position: relative;
  .title {
    font-size: 40px;
    color: #f5f5f5;
    font-weight: bold;
    position: absolute;
    bottom: -6px;
    left: 10px;
    z-index: -1;
    letter-spacing: 3px;
  }
  .subtitle {
    font-size: 20px;
    color: #666666;
    font-weight: 600;
  }
}
</style>
