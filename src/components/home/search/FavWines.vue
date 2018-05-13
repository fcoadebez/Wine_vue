<template>
  <div class="all_wine">
    <div class="container">
      <Title title="Mes favoris" subtitle="Mes favoris" />
      <router-link :key="index" v-for="(wine, index) in this.wines" v-if="wine != undefined" :to="{ name: 'Wine', params: { wine: wine }}">
        <WineItem :wine="wine" :id="wine.id" :domain="wine.domain" :localisation="wine.name" :color="wine.wine_type_id" drink="false" :price="wine.price" :arome1="wine.arome1" :arome2="wine.arome2" :arome3="wine.arome3"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Title from "@/components/home/Title";
import WineItem from "@/components/home/WineItem";

export default {
  name: "FavWines",
  components: { Title, WineItem },
  props: [],

  data() {
    return {
      wines: ""
    };
  },
  watch: {},
  updated() {
    this.wines = this.$store.state.wines.favWines;
    console.log(this.wines);
  },
  mounted() {
    this.wines = this.$store.state.wines.favWines;
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
