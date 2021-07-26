<template>
  <div>
    <div class="products"
      v-for="store in stores"
      v-bind:key="store.id">
      <div class="product-container">
        <img  
        class="product-image" 
        v-bind:src="`https://robin-food-images.s3.amazonaws.com/${store.id}.png`" alt="Nombre de pizzería">
      </div>
      <h3>{{store.products[0].name}}</h3>
      <h3>{{store.description}}</h3>
      <h3>{{store.address}}</h3>
      <h3>{{store.products[0].id}}</h3>
      <h3>{{store.products.name}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsType",
  props: {
    stores: {
      type: Array,
      default: () => []
    },
  },
}
</script>
<style lang="scss">
.products {
  display: flex;
}


</style>