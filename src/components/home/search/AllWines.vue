<template>
  <div class="all_wine">
    <div class="container">
      <Title title="Mon Budget" subtitle="Mon budget" />
      <PriceRange />
      <Title title="Mes goûts" subtitle="Un vin selon mes goûts" />
      <router-link to="/wine/1">
        <WineItem domain="Domaine de la Janasse" localisation="Côtes-du-Rhône" red="true" drink="false" price="30" :tastes="['Floral', 'Sucré']"/>
      </router-link>
      <router-link to="/wine/1">
        <WineItem domain="Domaine du Tariquet" localisation="Premières Grives" yellow="true" drink="false" fav="true" price="19" :tastes="['Boisé', 'Epicé', 'Fort']"/>
      </router-link>
      <router-link to="/wine/1">
        <WineItem domain="Domaine Sainte Lucie" localisation="MIP Classics" purple="true" drink="true" price="5" :tastes="['Fruité', 'Equilibré']"/>
      </router-link>
      <router-link to="/wine/1">
        <WineItem domain="Domaine Ravenswood" localisation="Zinfandel" red="true" drink="true" fav="true" price="8" :tastes="['Fruité', 'Epicé']"/>
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
a {
  text-decoration: none;
}
</style>
