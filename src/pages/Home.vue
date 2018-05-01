<template>
  <div class="home">
    <Header />
    <div class="container">
      <Title title="Mon Budget" subtitle="Mon budget" />
      <PriceRange />
      <Title title="Mes goûts" subtitle="Un vin selon mes goûts" />
      <WineItem domain="Domaine de la Janasse" localisation="Côtes-du-Rhône" red="true" drink="false" fav="true" price="30" tastes="[{ taste: 'Fruité' }, { taste: 'Epicé' }]"/>

    </div>

  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "../router/index.js";
import Header from "@/components/home/Header";
import Title from "@/components/home/Title";
import PriceRange from "@/components/home/PriceRange";
import WineItem from "@/components/home/WineItem";

export default {
  name: "Home",
  components: { Header, Title, PriceRange, WineItem },

  data() {
    return {};
  },
  created() {},
  computed: {},
  mounted() {
    console.log(this.tastes)
  },
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
