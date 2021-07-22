<template>
  <div class="card-container">
    <div class="card-image-container">
      <img class="card-image" v-bind:src="image1" alt="Pizzería capitán America">
    </div>
    <div class="card-image-container">
      <img class="card-image" v-bind:src="image2" alt="Pizzería Iron Man">
    </div>
    <div class="card-image-container">
      <img class="card-image" v-bind:src="image3" alt="Pizzería thor">
    </div>
    <div class="card-image-container">
      <img class="card-image" v-bind:src="image4" alt="Pizzería Black Widow">
    </div>
    <div class="card-image-container">
      <img class="card-image" v-bind:src="image5" alt="Pizzería Spider Man">
    </div>
    <div
      class="card"
      v-for="asset in assets"
      v-bind:key="asset.id"
    >
      <h4 class="card-title">{{asset.name}}</h4>
      <p class="card-p">{{asset.address}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "MenuCards",
  data: function () {
    return {
      image1: "https://robin-food-images.s3.amazonaws.com/Panos_pizza.png",
      image2: "https://robin-food-images.s3.amazonaws.com/Sbarro.png",
      image3: "https://robin-food-images.s3.amazonaws.com/pizzeria_camion.png",
      image4: "https://robin-food-images.s3.amazonaws.com/voglia_di_pizza.png",
      image5: "https://robin-food-images.s3.amazonaws.com/stroller_pizza.png"
    }
  },
  props: {
    assets: {
      type: Array,
      default: () => []
    },
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
  flex-wrap: wrap;
  padding: 40px 160px 20px 40px;
  }
  .card-image {
  width: 150px;
  height: 150px;
  gap: 40px;
  }
  .card-image-container {
  height: 40px;
  }
}
</style>