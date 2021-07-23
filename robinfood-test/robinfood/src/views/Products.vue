<template>
  <div class="home">
    Lista de productos
    <h3>{{$router.storeId}}</h3>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    storeId: {
      type: Array,
    } 
  }
}
</script>

<style lang="scss">
@import "../assets/styles.scss";

@media  screen and (min-width: $laptop) {
  .home {
    width: 55%;
    position: absolute;
    z-index: 2;
    top: 0px;
    right: 0px;
  }
}

</style>