<template>
  <div class="home">
    <Home/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "../router/index.js";
import Header from "@/components/home/Header";

export default {
  name: "Question",
  components: { Range },

  data() {
    return {};
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
