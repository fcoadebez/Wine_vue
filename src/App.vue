<template>
  <div id="app">

    <!-- <transition> -->
      <router-view class="child-view" />
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  color: #2c3e50;
  h1 {
    margin: 0;
  }
  button {
    border: none;
    padding: 15px;
    border-radius: 5px;
    width: 90%;
    outline: none;
    font-size: 20px;
    box-shadow: 0px 3px 5px#707070;
    text-align: center;
    &.white {
      background-color: #f5f5f5;
      color: #991253;
      text-transform: uppercase;
      margin-top: 20px;
    }
    &.purple {
      background-color: #c38695;
      color: #fff;
      text-transform: uppercase;
    }
    &.red {
      color: #fff;
      background-image: linear-gradient(
        to bottom,
        #951932,
        #911438,
        #8c113d,
        #870f42,
        #810f47
      );
    }
  }
  .form {
    .container {
      position: relative;
      width: 100%;
      height: 100%;
      background-image: url("./assets/form/background.png");
      background-size: 100%;
      background-repeat: no-repeat;
      .input_form {
        background-color: #c38695;
        box-sizing: border-box;
        border: none;
        padding: 15px;
        outline: none;
        border-radius: 5px;
        width: 90%;
        color: white;
        font-size: 20px;
        box-shadow: 0px 3px 5px#707070;
        margin-bottom: 15px;
        &::placeholder {
          color: white;
        }
      }
    }
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      #b93252,
      #ab2950,
      #9d204d,
      #8f184a,
      #810f46
    );
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  transition: all 0.5s linear;
}
.slide-left-enter,
.slide-right-leave-active {
  // opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  // opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
