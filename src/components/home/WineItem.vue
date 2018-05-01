<template>
  <div class="wine_item">
    <div class="container">
      <div class="wine inline">
        <img v-if="red" class="wine_img" src="../../assets/wine/vin_rouge.svg" alt="">
        <img v-if="yellow" class="wine_img" src="../../assets/wine/vin_jaune.svg" alt="">
        <img v-if="purple" class="wine_img" src="../../assets/wine/vin_rose.svg" alt="">
      </div>
      <div class="description inline">
        <div class="title">
          <p class="domain">{{domain}}</p>
          <p class="localisation">{{localisation}}</p>
        </div>
        <div class="tastes">
          <div class="taste">Boisé</div>
          <div class="taste">Fort</div>
          <div class="taste">Epicé</div>
        </div>
      </div>
      <div class="right inline">
        <div class="user_action">
          <img v-if="drink == 'true'" class="user_img" src="../../assets/wine/drink.svg" alt="">
          <img v-else class="user_img" src="../../assets/wine/no_drink.svg" alt="">
          
          <img v-if="fav == 'true'" class="user_img" src="../../assets/wine/fav.svg" alt="">
          <img v-else class="user_img" src="../../assets/wine/no_fav.svg" alt="">
        </div>
        <div class="price">
          {{price}}<span>€</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router/index.js";

export default {
  name: "WineItem",
  components: {},
  props: ["domain", "localisation", "tastes", "fav", "drink", "red", "yellow", "purple", "price"],

  data() {
    return {
    };
  },
  watch: {},
  mounted() {
    console.log(this.tastes)
  },
  computed: {},

  methods: {}
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
    margin: 10px 0;
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
        margin: 5px;
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
