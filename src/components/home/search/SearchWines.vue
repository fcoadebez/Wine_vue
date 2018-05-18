<template>
  <div class="search_wine">
    <div class="container">
      <Title title="Un Vin Précis" subtitle="Chercher un vin précis" />
      <div class="input">
        <img src="../../../assets/form/search.svg" alt="">
        <input v-model="searchQuery" type="text"/>
      </div>
      
      <router-link :key="index"  v-for="(wine, index) in filterItems(this.wines)" :to="{ name: 'Wine', params: { wine: wine }}">
        <WineItem :wine="wine" :id="wine.id" :domain="wine.domain" :localisation="wine.name" :color="wine.wine_type_id" drink="false" :price="wine.price" :arome1="wine.arome1" :arome2="wine.arome2" :arome3="wine.arome3"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Title from "@/components/home/Title";
import WineItem from "@/components/home/WineItem";
import { mapGetters } from "vuex";

export default {
  name: "SearchWines",
  components: { Title, WineItem },
  props: [],

  data() {
    return {
      wines: "",
      searchQuery: ""
    };
  },
  watch: {},
  mounted() {
    this.wines = this.$store.state.wines.allWines;
  },
  computed: {},

  methods: {
    filterItems(wines) {
      console.log(this.searchQuery);

      return wines.filter(wine => {
        let regex = new RegExp(
          "(" +
            this.searchQuery
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") +
            ")",
          "i"
        );
        return (
          wine.domain
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .match(regex) ||
          wine.name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .match(regex)
        );
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
a {
  text-decoration: none;
}
.input {
  width: 100%;
  position: relative;
  img {
    position: absolute;
    width: 20px;
    top: 0;
    bottom: 0;
    left: 20px;
    margin: auto;
  }
  input {
    background-color: #f5f5f5;
    border-radius: 5px;
    outline: none;
    border: none;
    width: 80%;
    padding: 20px 5px 20px 60px;
    color: #666666;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
