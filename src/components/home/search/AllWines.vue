<template>
  <div class="all_wine">
    <div class="container">
      <Title title="Mon Budget" subtitle="Mon budget" />
      <PriceRange />
      <Title title="Mes goûts" subtitle="Un vin selon mes goûts" />
      <router-link :key="index" v-for="(wine, index) in this.wines" :to="{ name: 'Wine', params: { wine: wine }}">
        <WineItem :domain="wine.domain" :localisation="wine.name" :color="wine.wine_type_id" drink="false" :price="wine.price" :tastes="['Floral', 'Sucré']"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Title from "@/components/home/Title";
import PriceRange from "@/components/home/PriceRange";
import WineItem from "@/components/home/WineItem";

export default {
  name: "AllWines",
  components: { Title, PriceRange, WineItem },
  props: [],

  data() {
    return {
      wines: ""
    };
  },
  watch: {},
  mounted() {
    this.wines = this.$store.state.wines.wines;

  },
  computed: {},

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
a {
  text-decoration: none;
}
</style>
