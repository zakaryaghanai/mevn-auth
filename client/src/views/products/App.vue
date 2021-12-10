<template>
  <div class="products-page">
    <h1>products</h1>
      <div class="products">
        <a :href="getProduct(product._id)"  class="product" v-for="(product) in products_list" :key="product._id">
          <span class="name">{{product.name}}</span>
          <span class="price"> <span>Price :</span> {{product.price}} $</span>
        </a>
      </div>
      {{message}}
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
      products_list : '',
      message: ''
    }
  },
  methods: {
    async getProducts() {
      const fetched_products = await axios.get('/api/products', {
        headers : {
          Authorization : `Bearer ${this.$store.getters.getToken}`
        },
      });
      
      if(fetched_products.data.success != 0) {
        this.products_list = fetched_products.data;
      }else {
        this.message = "nothing to find please login again ";
      }
    },
    getProduct(id){
      
      const resolved = this.$router.resolve({
        name: 'Product',
        params: { 
          product_id: id, 
        },
      })
      return resolved.href;
      //this.$router.push({ name: 'Product', params: { product_id: id } });
    },
  },
  beforeMount(){
    this.getProducts();
  },
  mounted(){
   
  },
}
</script>

<style lang="scss">
  .product {
    text-decoration: none;
    color: #5c5c5c;
    transition: 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
     width: 350px;
    background: white;
    display: grid;
    padding: 30px;
    border-radius: 5px;
    &:hover {
      color: #000;
      box-shadow: 0px 6px 10px -5px #9b9b9b;
    }
  }
  .products {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(auto, 350px));
  }
  .products .product .name{
    padding-bottom: 50px;
  }
  .products .product .price{
    display: flex;
    justify-content: space-between;
  }
</style>
