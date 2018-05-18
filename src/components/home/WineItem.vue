<template>
  <div class="wine_item">
    <div class="container">
      <div class="wine inline">
        <img v-if="color == 2" class="wine_img" src="../../assets/wine/vin_rouge.svg" alt="">
        <img v-if="color == 1" class="wine_img" src="../../assets/wine/vin_jaune.svg" alt="">
        <img v-if="color == 3" class="wine_img" src="../../assets/wine/vin_rose.svg" alt="">
      </div>
      <div class="description inline">
        <div class="title">
          <p class="domain">{{domain}}</p>
          <p class="localisation">{{localisation}}</p>
        </div>
        <div class="tastes">
          <!-- <div :key="taste" v-for="taste in tastes" class="taste">{{taste}}</div> -->
          <div v-if="arome1 != ''" class="taste">{{arome1}}</div>
          <div v-if="arome2 != ''" class="taste">{{arome2}}</div>
          <div v-if="arome3 != ''" class="taste">{{arome3}}</div>
        </div>
      </div>
      <div class="right inline">
        <div class="user_action">
          <img @click="setUndrink(id, $event)" v-if="drink == true" class="user_img" src="../../assets/wine/drink.svg" alt="">
          <img @click="setDrink(wine, $event)" v-else class="user_img" src="../../assets/wine/no_drink.svg" alt="">
          <img @click="setUnfav(id, $event)" v-if="favorite == true" class="user_img" src="../../assets/wine/fav.svg" alt="">
          <img @click="setFav(wine, $event)" v-else class="user_img" src="../../assets/wine/no_fav.svg" alt="">
        </div>
        <div class="price">
          {{price}}<span>€</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  name: "WineItem",
  components: {},
  props: [
    "id",
    "domain",
    "wine",
    "localisation",
    "tastes",
    "arome1",
    "arome2",
    "arome3",
    "fav",
    "color",
    "red",
    "yellow",
    "purple",
    "price"
  ],

  data() {
    return {
      favorite: false,
      drink: false
    };
  },
  watch: {},
  mounted() {
    this.$store.state.wines.drinkWines.forEach((wine, index) => {
      if (wine.id === this.id) {
        this.drink = true;
      }
    });

    this.$store.state.wines.favWines.forEach((wine, index) => {
      if (wine.id === this.id) {
        this.favorite = true;
      }
    });
  },
  computed: {},

  methods: {
    ...mapActions({
      setFavWine: "setFavWine",
      unFavWine: "unFavWine",
      setDrinkWine: "setDrinkWine",
      unDrinkWine: "unDrinkWine"
    }),
    setFav(wine, e) {
      e.preventDefault();
      this.favorite = true;

      axios
        .post(process.env.baseUrl + "admin/api/wine/fav", {
          wine_id: wine.id,
          user_id: this.$store.state.user.user
        })
        .then(response => {
          if (response.data.alert.type !== "fail") {
            this.setFavWine(wine);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    setUnfav(id, e) {
      e.preventDefault();
      this.favorite = false;

      axios
        .post(process.env.baseUrl + "admin/api/wine/unfav", {
          wine_id: id,
          user_id: this.$store.state.user.user
        })
        .then(response => {
          if (response.data.alert.type !== "fail") {
            this.unFavWine(id);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    setDrink(wine, e) {
      e.preventDefault();
      this.drink = true;

      axios
        .post(process.env.baseUrl + "admin/api/wine/drink", {
          wine_id: wine.id,
          user_id: this.$store.state.user.user
        })
        .then(response => {
          if (response.data.alert.type !== "fail") {
            this.setDrinkWine(wine);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    setUndrink(id, e) {
      e.preventDefault();
      this.drink = false;

      axios
        .post(process.env.baseUrl + "admin/api/wine/undrink", {
          wine_id: id,
          user_id: this.$store.state.user.user
        })
        .then(response => {
          if (response.data.alert.type !== "fail") {
            this.unDrinkWine(id);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wine_item {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  text-align: left;
  color: #676766;
  .container {
    background-color: #f5f5f5;
    -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 8px;
    margin: 10px 0 15px 0;
    display: flex;
    justify-content: space-around;
  }
  .wine {
    .wine_img {
      height: 70px;
    }
  }
  .description {
    width: 60%;
    padding-left: 10px;
    p {
      margin: 0;
      &.localisation {
        font-size: 18px;
        font-weight: 600;
      }
    }
    .tastes {
      display: flex;
      margin: 10px 0 0 0;
      .taste {
        background-color: #dadada;
        border-radius: 2px;
        color: #fff;
        width: 60px;
        padding: 1px 3px;
        margin-right: 5px;
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
  .right {
    .user_action {
      display: flex;
      align-items: center;
      img {
        width: 25px;
        padding: 5px;
      }
    }
    .price {
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      span {
        font-size: 20px;
      }
    }
  }
}
</style>
