<template>
  <div class="header">
    <div class="container">
      <div class="main_nav">
        <div class="logo">
          <h1>Wine&Me</h1>
        </div>
        <div class="nav">
          <router-link to="/wines/all">
            <img  v-bind:class="{ active: $route.params.subnav == 'food' || $route.params.subnav == 'all' || $route.params.subnav == 'search' }" class="nav_item" src="../../assets/header/search.svg" alt="">
          </router-link>
          <router-link to="/wines/fav">
            <img  v-bind:class="{ active: $route.params.subnav == 'fav'}" class="nav_item" src="../../assets/header/fav.svg" alt="">
          </router-link>
          <router-link to="/account">
            <img  v-bind:class="{ active: $route.name == 'Account'}" class="nav_item" src="../../assets/header/account.svg" alt="">
          </router-link>
        </div>
      </div>
      <div v-if="$route.params.subnav != 'fav'" class="sub_nav">
        <div class="nav">
          <router-link to="/wines/food" v-bind:class="{ active: $route.params.subnav == 'food' }">Avec un plat</router-link>
        </div>
        <div class="nav">
          <router-link to="/wines/all" v-bind:class="{ active: $route.params.subnav == 'all' }">Toutes occasions</router-link>
        </div>
        <div class="nav">
          <router-link to="/wines/search" v-bind:class="{ active: $route.params.subnav == 'search' }">Avec un nom</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router/index.js";

export default {
  name: "Header",
  components: {},

  data() {
    return {
      questionsLength: 0,
      responsesUser: ""
    };
  },
  watch: {},
  mounted() {},
  computed: {},

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
    background-image: url("../../assets/header/logo.svg");
    background-repeat: no-repeat;
    background-position-x: 20px;
  }

  h1 {
    font-family: ChaparralPro-Bold, Chaparral Pro;
    color: white;
    font-size: 26px;
  }
  .main_nav {
    display: flex;
    align-items: center;
    padding: 45px 25px;
    > div {
      width: 50%;
    }
    .logo {
      text-align: left;
    }
    .nav {
      text-align: right;
    }
  }
  .sub_nav {
    padding: 0px 0 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .nav {
      color: white;
      width: 33%;
      a {
        font-family: "Source Sans Pro", sans-serif;
        font-size: 14px;
        color: white;
        text-decoration: none;
        &::before {
          content: "";
          transition: width 0.7s;
          width: 0px;
        }
        &.active {
          font-size: 18px;
          font-weight: 600;
          position: relative;
          &::before {
            content: "";
            width: 20px;
            height: 2px;
            background-color: white;
            position: absolute;
            bottom: -2px;
            left: 0;
          }
        }
      }
    }
  }
  .nav_item {
    width: 20px;
    margin: 0 10px;
    &.active {
      opacity: 0.5;
    }
  }
}
</style>
