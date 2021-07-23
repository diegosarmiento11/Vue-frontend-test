<template>
  <div class="home">
    <div class="menu-container">
      <div class="menu-p-container">
        <p class="menu-p">{{p}}</p>
      </div>
      <h2 class="menu-title">{{h2}}</h2>
      <p class="menu-p2">{{menu2}}</p>
      <Search 
        v-bind:stores="stores"
      />
    </div>
    <Menu-cards 
      v-bind:stores="stores"
    />
    <Footer/>
  </div>
</template>

<script>
import MenuCards from "../components/MenuCards.vue";
import Footer from "../components/Footer.vue";
import Search from "../components/Search.vue";
import api from '../api';

export default {
  name: "Menu",
  components: {
    MenuCards,
    Footer,
    Search,
  },
  data () {
    return {
      stores: [],
      p: "Pizzerías",
      h2: "Tiendas",
      menu2: "Escoge tu pizzería favorita"
      }
  },
  created () {
    api.getStores()
      .then(stores => this.stores = stores)
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
  .menu-container {
    width: 80%;
    margin: 0 auto;
  }
   .menu-p{
      margin-top: 30px;
      font-size: 0.9em;
      text-align: start;
    }
    .menu-p-container {
      text-align: start;
      display: flex;
      margin: 0;
    }
     .menu-title {
      font-weight: bold;
      display: contents;
      text-align: start;
    }
    .menu-p2 {
      text-align: start;
      font-size: 0.9em;
    }
  @media screen and (min-width: $laptop){
    .home {
      background-color: white;
      width: 55%;
      position: absolute;
      z-index: 2;
      top: 0px;
      right: 0px;
    }
    .menu-title {
    display: none;  
    }
    .menu-p {
      margin-top: 15px;
    }
    .menu-p2 {
      margin-top: 0px;
    }
  }
  @media screen and (min-width: $macbook){
    .home {
      width: 55%;
      position: absolute;
      z-index: 2;
      top: 0px;
      right: 0px;
    }   
  }
</style>