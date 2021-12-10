<template>
  <div class="profile-page">
    <h1>Profile</h1>
    <h3>if you are here then you are Authenticated. congrats !!</h3>

    <button v-if="authorized">your are authorized you can click me</button>

  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'Products',
  data() {
    return {
      message: '',
      authorized: true,
    }
  },

  watch: {
  },
  methods: {
  },
  beforeMount(){
  },
  mounted(){
  },

}
</script>

<style lang="css">
  .products {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(auto, 350px));
  }
  .products .product {
    width: 350px;
    background: white;
    display: grid;
    padding: 30px;
    box-shadow: 0px 6px 10px -5px #9b9b9b;
    border-radius: 5px;
    
  }
  .products .product .name{
    padding-bottom: 50px;
  }
  .products .product .price{
    display: flex;
    justify-content: space-between;
  }
</style>
