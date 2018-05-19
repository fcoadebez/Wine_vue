<template>
  <div class="home">
    <Header />
    <div class="container">
      <AllWines v-if="$route.params.subnav == 'all'" />
      <FavWines v-if="$route.params.subnav == 'fav'" />
      <Account v-if="$route.params.subnav == 'account'" />
      <SearchWines v-if="$route.params.subnav == 'search'" />
    </div>

  </div>
</template>

<script>
import Header from "@/components/home/Header";
import AllWines from "@/components/home/search/AllWines";
import FavWines from "@/components/home/search/FavWines";
import Account from "@/components/home/Account";
import SearchWines from "@/components/home/search/SearchWines";

export default {
  name: "Home",
  components: { Header, AllWines, FavWines, SearchWines, Account },

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
