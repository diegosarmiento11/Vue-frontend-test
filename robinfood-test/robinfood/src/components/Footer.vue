<template>
  <div class="footer-container">
    <footer class="footer">
      <div>
        <a href="https://www.instagram.com/diegosarmiento11/">
          <img class="icon" src="../assets/facebook-svg.svg" alt="">
        </a>
        <a href="https://www.linkedin.com/in/diegoalejandrosarmiento/">
          <img class="icon" src="../assets/instagram.svg" alt="">
        </a>
      </div>
      <div>
        <router-link to="/">
            <img class="best-pizza" v-bind:src="bestPizza" alt="">
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>


export default {
  name: "Footer",
  data: function () {
    return {
      bestPizza: "https://robin-food-images.s3.amazonaws.com/Best+Pizza.png",
    }
  }
}

</script>

<style lang="scss">
@import "../assets/styles.scss";

.footer-container {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: $footer-color;
}
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
}
.icon{
  font-size: 40px;
  margin: 0px 10px;
  background-color: $footer-color;
}
.best-pizza {
  width: 32px;
  height: 30px;
}
@media screen and (min-width: $laptop) {
  .footer-container {
    margin-top: 10px;
  }
}


@media screen and (min-width: $macbook) {
  .footer-container {
    margin-top: 30px;
  }
}
</style>