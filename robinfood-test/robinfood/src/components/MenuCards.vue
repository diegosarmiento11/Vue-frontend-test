<template>
  <div class="card-container">
    <div
      class="card"
      v-for="store in stores"
      v-bind:key="store.id"
    >
      <div class="card-image-container">
        <img v-on:click="goToProducts(store.id)" class="card-image" v-bind:src="`https://robin-food-images.s3.amazonaws.com/${store.id}.png`" alt="Nombre de pizzería">
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
  padding: 15px;
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
    width: 110px;
    height: 110px;
  }
  .card-title {
    font-size: 0.75em;
  }
  .card-p {
    font-size: 0.5em;
    text-align: start;
  }
}

@media screen and (min-width: $macbook){
  .card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 50px 20px 40px;
  margin: auto;
  margin: 120px 0px 170px 0px;
  }
  .card-image {
  width: 110px;
  height: 110px;
  }
  .card-image-container {
  height: 90px;
  }
  .card-title {
    font-size: 0.7em;
  }
  .card-p {
    font-size: 0.73em;
    text-align: start;
  }
}
</style>