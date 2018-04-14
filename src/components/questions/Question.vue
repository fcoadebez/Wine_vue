<template>
  <div class="question">
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import router from "../../router/index.js";

export default {
  name: "Question",
  components: {},
  mounted() {
    // console.log(this.$store);
  },
  data() {
    return {};
  },
  computed: {},

  methods: {
    onSubmit() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.logo {
  width: 100%;
  padding-top: 0px;
  padding-bottom: 30px;
  img {
    width: 220px;
  }
}
.bottom {
  position: absolute;
  height: 18%;
  width: 100%;
  bottom: 0;
  background-image: url("../../assets/form/bottom.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
  }
}
</style>
