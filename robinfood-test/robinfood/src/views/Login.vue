<template>
  <div class="home">
    <div class="form-container">
      <img 
        class="pizza-logo" 
        alt="Vue logo" 
        src="https://robin-food-images.s3.amazonaws.com/Login-Best-Pizza.png" 
      />
      <Welcome 
        msg="Bienvenido"
      />
      <Login-form
        pass="Olvidaste tu contraseña?"/>
    </div>
  </div>
</template>

<script>
import Welcome from "../components/Welcome.vue";
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    Welcome,
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles.scss";

  .home {
    margin: 0 auto;
    padding: 0 auto;
  }
  .form-container {
    margin: 15px;
    border: 3px solid black;
    border-radius: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .pizza-logo {
    width: 250px;
    height: 180px;
  }

  @media screen and (min-width: $laptop){
    .home {
      width: 55%;
      position: absolute;
      z-index: 2;
      top: 0px;
      right: 0px;
    }
    .form-container{
      background-color: white;
      padding: 50px 100px 30px 100px;
      margin: 0 auto;
      border: none;
      border-radius: 0px;
      height: 90vh;
    }
  }
  @media screen and (min-width: $macbook){
    .home {
      width: 55%;
      position: absolute;
      z-index: 2;
      top: 0px;
      right: 0px;
    }
    .form-container{
      background-color: white;
      padding: 100px 120px 0px 120px;
      margin: 0 auto;
      border: none;
      border-radius: 0px;
      height: 90vh;
    }
  }
</style>
