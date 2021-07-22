<template>
  <div class="home">
    <div class="menu-p-container">
      <p class="menu-p">{{p}}</p>
    </div>
    <h2 class="menu-title">{{h2}}</h2>
    <p class="menu-p2">{{menu2}}</p>
    <Menu-cards 
    v-bind:assets="assets"
    />
    <Footer/>
  </div>
</template>

<script>

import MenuCards from "../components/MenuCards.vue";
import Footer from "../components/Footer.vue";

import api from '../api';


export default {
  name: "Menu",
  components: {
    MenuCards,
    Footer,
  },
  data () {
    return {
      assets: [],
      p: "Pizzerías",
      h2: "Tiendas",
      menu2: "Escoge tu pizzería favorita"
      }
  },
  created () {
    api.getAssets()
      .then(assets => this.assets = assets)
  }
}
</script>

<style lang="scss">
@import '../assets/styles.scss';
  .menu-p-container {
    margin: 0 auto;
    width: 30%;
  }
  .menu-p {
    font-size: 26px;
    border-bottom: 2px solid $button-color;
    color: $primary-color;
  }
  .menu-title {
    display: none;
  }
  @media screen and (min-width: 1023px){
    .home {
      background-color: white;
      width: 55%;
      position: absolute;
      z-index: 2;
      top: 0px;
      right: 0px;
    }
  }
  @media screen and (min-width: 1439px){
    .home {
      width: 55%;
      position: absolute;
      z-index: 2;
      top: 0px;
      right: 0px;
    }
  }
</style>