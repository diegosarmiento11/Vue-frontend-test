<template>
  <div>
    <form action="">
      <div class="data-container">
        <input class="user-login" type="email" placeholder="Usuario">
        <figure class="images-container">
          <img class="register-images" src="https://robin-food-images.s3.amazonaws.com/ic_usuario.png" alt="" srcset="">
        </figure>
      </div>
      <div class="data-container">
        <input class="pass-login" type="password" placeholder="Contraseña">
        <figure class="images-container">
          <img class="register-images" src="https://robin-food-images.s3.amazonaws.com/ic_contrase%C2%A7a.png" alt="" srcset="">
        </figure>
      </div>
    </form>
    <p class="forget-pass">
      <a href="http://eidamakeup.com">Olvidaste tu contraseña?</a>
    </p>
    <button class="login-button" type="button">Iniciar sesión</button>
  </div>
</template>


<script>
export default {
  name: "LoginForm",
  props: {}
}
</script>



<style lang="scss">
  a {
    text-decoration: none;
  }
  .data-container{
    display: flex;
    margin: 0 auto;
    width: 270px;
    height: 45px;
    border: 1px solid#CDCDCD;
    margin-top: 10px;
    border-radius: 3px;
  }
  .user-login {
    width: 80%;
    padding: 11px;
    border: none;
    outline: none;
  }
  .pass-login {
    width: 80%;
    padding: 11px;
    border: none;
    outline: none;
  }
  .register-images{
    height: 20px;
    width: 20px;
  }
  .images-container{
    margin: 0;
    align-self: center;
  }
  .forget-pass {
    margin: 25px;
    font-size: .9em;
    color: black;
    font-weight: bold;
  }
  .login-button {
    width: 270px;
    height: 45px;
    background-color: #f9c444;
    font-family: 'Montserrat';
    font-weight: bold;
    outline: none;
    border: 1px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  @media screen and (min-width: 1439px) {
    a {
      font-size: 1.1em;
    }
    .forget-pass {
      margin: 40px 0px
    }
    .login-button {
      width: 410px;
      height: 60px;
      font-size: 1em;
    }
    .data-container{
      width: 410px;
      height: 60px;
    }
    .register-images{
      width: 30px;
      height: 30px;
    }
  }
</style>