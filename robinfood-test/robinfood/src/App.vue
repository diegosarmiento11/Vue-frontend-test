<template>
  <div id="app">
    <div id="nav">
      <img class="cover" src="https://robin-food-images.s3.amazonaws.com/imagebkg.png" alt="Background">
      <img class="pizza-cover rotate-center" src="https://robin-food-images.s3.amazonaws.com/Pizza_adobespark.png" alt="">
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../src/assets/styles.scss';
body {
  padding: 0;
  margin: 0
}
#app {
  font-family: $basefont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
.cover{
  background-size: cover;
  max-width: 100%;
}
.pizza-cover {
  background-size: cover;
  max-width: 190px;
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 100px;
}
.rotate-center {
  -webkit-animation: rotate-center 5.7s ease-in-out both;
  animation: rotate-center 5.7s ease-in-out both;
  animation-iteration-count: infinite;
}
@-webkit-keyframes rotate-center {
  0% {
  -webkit-transform: rotate(0);
  transform: rotate(0);
  }
  100% {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
  -webkit-transform: rotate(0);
  transform: rotate(0);
  }
  100% {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
 }
}
@media screen and (min-width: 424px){
  .pizza-cover {
    top: 20px;
    left: 130px;
  }
}
@media screen and (min-width: 767px){
  .pizza-cover{
    max-width: 390px;
    top:35px;
    left: 200px;
  }
}
@media screen and (min-width: 1023px) {
  .pizza-cover{
    max-width: 400px;
    left: 20px;
    top: 110px;
  }
}
@media screen and (min-width: 1439px) {
  .pizza-cover{
    max-width: 600px;
    left: 20px;
    top: 110px;
  }
}
}
</style>
