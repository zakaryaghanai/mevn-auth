<template>
  <div class="products-page">
    <div class="product" :key="product._id">
      <span class="name">{{product.name}}</span>
      <span class="price"> <span>Price :</span> {{product.price}} $</span>
    </div>
    <div class="commnet">
      <input type="text" v-model="comment">
      <button @click="postComment()" >post comment</button>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'Product',
  props: {
    id: String
  },
  data() {
    return {
      product : '',
      comment : '',
             
    }
  },

  watch: {
  },
  methods: {
    postComment(){
      console.log(this.comment);
    }

  },
  async beforeMount(){
    const product = await axios.get(`/api/products/${this.$route.params.product_id}`);
    this.product = product.data; 
  },
  async mounted(){
  },
}
</script>

<style lang="css">
  .products {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(auto, 350px));
  }
  .product {
    width: 350px;
    background: white;
    display: grid;
    padding: 30px;
    box-shadow: 0px 6px 10px -5px #9b9b9b;
    border-radius: 5px;
    
  }
  .product .name{
    padding-bottom: 50px;
  }
  .product .price{
    display: flex;
    justify-content: space-between;
  }
</style>
