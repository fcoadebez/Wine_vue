<template>
  <div class="all_wine">
    <div class="container">
      <Title title="Mon Budget" subtitle="Mon budget" />
      <PriceRange :minVal="minVal" :maxVal="maxVal" />
      <Title title="Mes goûts" subtitle="Un vin selon mes goûts" />
      <router-link :key="wine.id" v-for="(wine) in this.wines" v-if="wine.price >= getRange[0] && wine.price <= getRange[1]" :to="{ name: 'Wine', params: { wine: wine }}">
        <WineItem :wine="wine" :id="wine.id" :domain="wine.domain" :localisation="wine.name" :color="wine.wine_type_id" drink="false" :price="wine.price" :arome1="wine.arome1" :arome2="wine.arome2" :arome3="wine.arome3"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Title from "@/components/home/Title";
import PriceRange from "@/components/home/PriceRange";
import WineItem from "@/components/home/WineItem";
import { mapGetters } from "vuex";

export default {
  name: "AllWines",
  components: { Title, PriceRange, WineItem },
  props: [],

  data() {
    return {
      wines: "",
      minVal: 5,
      maxVal: 15,
      value: this.$store.state.wines.range
    };
  },
  watch: {},
  mounted() {
    // let price = [];
    this.wines = this.$store.state.wines.wines;
    // this.wines.forEach((wine, index) => {
    //   price.push(wine.price);
    // });
    // this.minVal = Math.min.apply(null, price);
    // this.maxVal = Math.max.apply(null, price);
  },
  computed: {
    ...mapGetters({
      getRange: "getRange"
    })
  },

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
a {
  text-decoration: none;
}
</style>
