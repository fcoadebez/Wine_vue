<template>
  <div class="home">
    <Header />
    <div class="container">
      <Title title="Mon Budget" subtitle="Mon budget" />
      <PriceRange />

    </div>

  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "../router/index.js";
import Header from "@/components/home/Header";
import Title from "@/components/home/Title";
import PriceRange from "@/components/home/PriceRange";

export default {
  name: "Home",
  components: { Header, Title, PriceRange },

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
.home {
  .container {
    padding: 20px;
  }
  width: 100%;
}
</style>
