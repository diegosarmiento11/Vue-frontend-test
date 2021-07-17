<template>
  <div class="hello">
    <h1 class="welcome">{{ msg }}</h1>
    <p>
      A las mejores pizzas del país
    </p>
  </div>
</template>


<script>
export default {
  name: 'Welcome',
  props: {
    msg: String,
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
  color: black;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.welcome {
  color: black;
}
@media screen and (min-width: 1439px){
  .welcome {
    margin: 15px 0px;
  }
  .hello{
    font-size: 1.3em;
  }
  p {
    margin-bottom: 40px;
  }
}
</style>
