<template>
  <div class="home">
    <Header />
    <div class="container">
      <AllWines v-if="$route.params.subnav == 'all'" />
      <FavWines v-if="$route.params.subnav == 'fav'" />
    </div>

  </div>
</template>

<script>
import Header from "@/components/home/Header";
import AllWines from "@/components/home/search/AllWines";
import FavWines from "@/components/home/search/FavWines";

export default {
  name: "Home",
  components: { Header, AllWines, FavWines },

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
