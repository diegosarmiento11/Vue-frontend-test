<template>
  <div class="home">
    <img class="pizza-logo" alt="Vue logo" src="https://robin-food-images.s3.amazonaws.com/Login-Best-Pizza.png" />
    <Welcome 
    msg="Bienvenido" 
    />
    <Login-form/>
  </div>
</template>

<script>
// @ is an alias to /src

import Welcome from '../components/Welcome.vue';
import LoginForm from '../components/LoginForm.vue';


export default {
  name: "Login",
  components: {
    Welcome,
    LoginForm,
  },
};
</script>

<style scoped>
  .home {
    /* border: 1px solid black; */
  }

  .pizza-logo {
    width: 250px;
    height: 180px;
  }
</style>
