<template>
  <div class="header">
    <div class="container">
      <div class="main_nav">
        <div class="logo">
          <h1>Wine&Me</h1>
        </div>
        <div class="nav">
          <img class="nav_item active" src="../../assets/header/search.svg" alt="">
          <img class="nav_item" src="../../assets/header/fav.svg" alt="">
          <img class="nav_item" src="../../assets/header/account.svg" alt="">
        </div>
      </div>
      <div class="sub_nav">
        <div class="nav">
          <span >Avec un plat</span>
          <span class="active">Toutes occasions</span>
          <span>Avec un nom</span>
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
    .nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;
      span {
        font-family: "Source Sans Pro", sans-serif;
        font-size: 14px;
        transition: font-size 0.2s;
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
