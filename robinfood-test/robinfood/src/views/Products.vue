<template>
  <div class="home">
    <products-type
      v-bind:stores="stores"/>
  </div>
</template>

<script>
import ProductsType from '../components/ProductsType.vue';
import api from "../api";

export default {
  components: { ProductsType },
  name: "Products",
  data: function () {
    return {
      stores: []
    }
  },
  created () {
    api.getStores()
      .then(stores => this.stores = stores)
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