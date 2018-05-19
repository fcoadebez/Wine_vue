<template>
  <div class="wine_page">
    <div class="header">
      <div class="container">
        <div class="logo">
          <h1>Wine&Me</h1>
          <p>Votre sélection</p>
        </div>
      </div>
    </div>
    <div class="description">
      <div class="domain">{{$route.params.wine.domain}}</div>
      <div class="localisation">{{$route.params.wine.name}}</div>
      <div class="wine">
        <img v-if="this.$route.params.wine.wine_type_id == 2" class="bottle" src="../assets/wine/vin_rouge_fiche.svg" alt="">
        <img v-if="this.$route.params.wine.wine_type_id == 1" class="bottle" src="../assets/wine/vin_jaune_fiche.svg" alt="">
        <img v-if="this.$route.params.wine.wine_type_id == 3" class="bottle" src="../assets/wine/vin_rose_fiche.svg" alt="">
        <div class="more">
          <div class="user_action">
            <img @click="setUndrink($route.params.wine.id, $event)" v-if="drink == true" class="user_img" src="../assets/wine/drink.svg" alt="">
            <img @click="setDrink($route.params.wine, $event)" v-else class="user_img" src="../assets/wine/no_drink.svg" alt="">
            <img @click="setUnfav($route.params.wine.id, $event)" v-if="favorite == true" class="user_img" src="../assets/wine/fav.svg" alt="">
            <img @click="setFav($route.params.wine, $event)" v-else class="user_img" src="../assets/wine/no_fav.svg" alt="">
          </div>
          <div class="price">{{$route.params.wine.price}}<span>€</span></div>
        </div>
      </div>
      <div class="tastes">
        <div v-if="this.$route.params.wine.arome1 != ''" class="taste">{{$route.params.wine.arome1}}</div>
        <div v-if="this.$route.params.wine.arome2 != ''" class="taste">{{$route.params.wine.arome2}}</div>
        <div v-if="this.$route.params.wine.arome3 != ''" class="taste">{{$route.params.wine.arome3}}</div>
      </div>
      <div class="infos1">
        <div class="info year">Année : <span>{{$route.params.wine.year}}</span></div>
        <div class="info country">Pays : <span>{{$route.params.wine.country}}</span></div>
      </div>
      <div class="infos">
        <div class="info name">Appelation : <span>{{$route.params.wine.name}}</span></div>
        <div class="wine_description">{{$route.params.wine.description}}</div>
      </div>
      <button @click="back()" class="red">Retour</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {},

  data() {
    return {
      drink: false,
      favorite: false
    };
  },
  created() {},
  computed: {},
  mounted() {
    this.$store.state.wines.drinkWines.forEach((wine, index) => {
      if (wine.id === this.$route.params.wine.id) {
        this.drink = true;
      }
    });

    this.$store.state.wines.favWines.forEach((wine, index) => {
      if (wine.id === this.$route.params.wine.id) {
        this.favorite = true;
      }
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
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
.wine_page {
  width: 100%;
  font-family: "Source Sans Pro", sans-serif;
}
.header {
  background-image: linear-gradient(
    to bottom,
    #ba3353,
    #ac2a51,
    #9e214e,
    #8f184b,
    #810f47
  );
  .container {
    background-image: url("../assets/header/logo.svg");
    background-size: 170px;
    background-repeat: no-repeat;
    background-position-x: 20px;
    padding: 30px 0;
    p {
      font-size: 18px;
      margin: 0;
      color: white;
    }
  }
}
.description {
  text-align: center;
  width: 80%;
  margin: 30px auto;
  color: #676766;
  .domain {
    font-size: 20px;
  }
  .localisation {
    font-size: 24px;
    font-weight: 600;
  }
  .wine {
    .bottle {
      width: 250px;
    }
    position: relative;
    height: 260px;
    margin: 20px auto;
    background-color: #f5f5f5;
    -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 8px;
    .more {
      position: absolute;
      top: 0;
      right: 0;
      padding: 10px;
      .user_action {
        display: flex;
        align-items: center;
        img {
          width: 25px;
          padding: 0 5px;
        }
      }
      .price {
        font-size: 40px;
        font-weight: bold;
        span {
          font-size: 31px;
        }
      }
    }
  }
  .tastes {
    display: flex;
    margin: 10px 0 10px 0;
    text-align: left;
    .taste {
      background-color: #991253;
      border-radius: 2px;
      color: #fff;
      width: 60px;
      padding: 1px 3px;
      margin-right: 5px;
      font-size: 12px;
      font-weight: 600;
    }
  }
  .infos1 {
    display: flex;
    justify-content: space-between;
  }
  .info {
    margin: 5px 0;
    text-align: left;
    font-size: 18px;
    span {
      font-size: 18px;
      font-weight: 600;
    }
  }
  .wine_description {
    margin: 15px 0 30px 0;
    font-size: 14px;
    text-align: left;
  }
}

h1 {
  font-family: ChaparralPro-Bold, Chaparral Pro;
  color: white;
  font-size: 34px;
  margin: 0;
}
</style>
