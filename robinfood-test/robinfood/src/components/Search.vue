<template>
  <div class="search-container">
    <input 
      class="search-input"
      placeholder="Busca tu restaurante favorito aquí"
      v-on:change="findStoreById(storeName)" 
      value="" 
      type="text" 
      v-model="storeName">
    <h1 
      v-if="currentStore.length > 0 ">
      <Menu-cards
        v-bind:stores="currentStore"/>
    </h1>
    <p 
      v-else-if="currentStore.length >= 0">
    <p class="search-p">Otros restaurantes disponibles :<p>
    </p>
  </div>
</template>

<script>
import MenuCards from './MenuCards.vue'

export default {
  name: "Search",
  components: { MenuCards },
  data: function () {
    return {
      storeName: "",
      currentStore: []
    }
  },
  props: {
    title: {
      type: String,
    },
    stores: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    findStoreById(name) {
      this.currentStore = this.stores.filter((store) => store.name == name)
    },
  }
}
</script>


<style lang="scss">
@import "../assets/styles.scss";

    .menu-title-two {
    text-align: start;
  }
  .search-container {
    justify-content: start;
  }
  .search-input {
    display: flex;
    width: 250px;
    height: 45px;
    outline: none;
    border: 0.4px solid black;
    border-radius: 20px;
    padding-left: 20px;
    margin: 0 auto;
  }
  .search-p {
    text-align: start;
    font-weight: bold;
  }
  @media screen and (min-width: $tablet) {
     .search-input {
    width: 300px;
    height: 35px;
  }
}
</style>
