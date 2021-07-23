<template>
  <div>
    <h3>{{title}}</h3>
    <input v-on:change="findStoreById(storeName)" value="" type="text" v-model="storeName">
    <h1 v-if="currentStore.length > 0 ">
      <Menu-cards
        v-bind:stores="currentStore"/>
    </h1>
    <h1 v-else-if="currentStore.length == 0">
      <h5>Los únicos disponibles son :</h5>
    </h1>
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

</style>
