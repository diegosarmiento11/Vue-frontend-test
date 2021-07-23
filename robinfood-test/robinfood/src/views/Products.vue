<template>
  <div>
    Lista de productos
    <h3>{{this.$router.params}}</h3>
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

</style>