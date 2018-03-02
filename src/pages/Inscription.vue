<template>
  <div class="form">
    <div class="container">
      <div class="logo">
        <img src="../assets/form/logo.svg" alt="">
      </div>
      <div class="inputs">
        <input type="text" name="email" class="input_form" placeholder="Email">
        <input type="password" name="pwd1" class="input_form" placeholder="Mot de passe">
        <input type="password" name="pwd2" class="input_form" placeholder="Confirmation">
      </div>
      <button class="white">Créer un compte</button>
      <div class="bottom">
        <router-link to="login">Déjà un compte</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inscription",
  components: {},
  data() {
    return {
      msg: "Inscription"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.logo {
  width: 100%;
  padding-top: 70px;
  padding-bottom: 30px;
  img {
    width: 162px;
  }
}
.bottom {
  position: absolute;
  height: 18%;
  width: 100%;
  bottom: 0;
  background-image: url("../assets/form/bottom.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
  }
}
</style>
