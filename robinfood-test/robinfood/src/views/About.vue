<template>
  <div>
    <div class="about-p-container">
      <p class="about-p">Pizzerías</p>
    </div>
    <h2 class="about-title">Tiendas</h2>
    <p class="about-p2">Escoge tu pizzería favorita</p>
    <Menu-cards/>
  </div>
</template>



<script>

import MenuCards from "../components/MenuCards.vue";


export default {
  name: "About",
  components: {
    MenuCards,
  }
}
</script>

<style lang="scss">
  .about-p-container {
    margin: 0 auto;
    width: 30%;
  }
  .about-p {
    font-size: 26px;
    border-bottom: 2px solid #f9c444;
  }
  .about-title {
    display: none;
  }
  .about-p2{

  }
</style>