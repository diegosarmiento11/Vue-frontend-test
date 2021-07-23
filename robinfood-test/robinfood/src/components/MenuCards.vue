<template>
  <div class="card-container">
    <div
      class="card"
      v-for="store in stores"
      v-bind:key="store.id"
    >
      <div class="card-image-container">
        <img 
        v-on:click="goToProducts(store.id)" 
        class="card-image" 
        v-bind:src="`https://robin-food-images.s3.amazonaws.com/${store.id}.png`" alt="Nombre de pizzería">
      </div>
      <h4 class="card-title">{{store.name}}</h4>
      <p class="card-p">{{store.address}}</p>
    </div>
  </div>
</template>

<script>


//router.push('products', {params: { userId: '123' } })

export default {
  name: "MenuCards",
  props: {
    stores: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    goToProducts (storeId) {
      // this.$router.push('Products', {params: { storeId: storeId } })
      // storeId = 1
      this.$router.push({ path: 'Products', params: { storeId: storeId } })
    }
  }
}
</script>


<style lang="scss">

@import "../assets/styles.scss";

.card-container {
  @include Card;
}
.card-container div {
  padding: 9px;
}
.card-image {
  width: 220px;
  height: 220px;
  gap: 40px;
}
@media screen and (min-width: $tablet){
  .card-container {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    padding: 0px;
  }
  .card-image {
    width: 110px;
    height: 110px;
  }
  .card-title {
    font-size: 0.68em;
  }
  .card-p {
    font-size: 0.5em;
    text-align: start;
  }
}
@media screen and (min-width: $laptop) {
  .card-image {
    width: 90px;
    height: 90px;
  }
  .card-title {
    font-size: 0.75em;
  }
  .card-p {
    font-size: 0.5em;
    text-align: start;
  }
  .card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 100px 0px 40px;
    margin: auto;
    margin: 0px;
  }
  .card {
    padding: 0px;
  }
  .card-title {
    font-size: 0.8em;
    text-align: start;
    padding-left: 7px;
    margin: 0;
  }
}

@media screen and (min-width: $macbook){
  .card-image {
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  }
  .card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 120px 20px 40px;
  margin: auto;
  margin: 35px 0px 115px 0px;
  }
  .card-image-container {
  height: 140px;
  padding: 0px;
  }
  .card {
    padding: 10px;
    height: 200px;
  }
  .card-p {
    font-size: 0.73em;
    text-align: start;
    padding-left: 7px;
    margin: 10px;
  }
  .card-title {
    font-size: 0.8em;
    text-align: start;
    padding-left: 7px;
    margin: 10px;
  }
}
</style>