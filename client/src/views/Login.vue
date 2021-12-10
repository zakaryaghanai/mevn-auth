<template>
  <div class="Register">
    <h1>Login</h1>

    <form class="regitser-form">
      <input type="text" name="email" placeholder="email" v-model="user.email">
      <input type="text" name="password" placeholder="password" v-model="user.password">

      <button @click.prevent="login()" >Login</button>
      <span>{{message}}</span>
     
    </form>

  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import axios from 'axios';
import  { mapActions } from 'vuex';
export default {
  name: 'Regitser',
  data() {
    return {
      user : {
        email : 'zakariya@gmail.com',
        password: '123456',
      },
      message : ''
    }
  },
  computed: {

  },
  watch: {
   
  },
  methods: {
    async login(){
      const user = await axios.post('/api/users/login', {
        email : this.user.email,
        password : this.user.password,
      })
      
      if(user.data.success == 1) {
        this.$store.dispatch('setAuth', true); 
        this.$store.dispatch('setToken', user.headers.authorization); 
        console.log("logged in");
        this.$router.push({ name: 'Products'});
      }
    },
   
  },
  beforeMount(){

  },
  mounted(){
  },
  /* async beforeRouteEnter (to, from, next) {
      const is_logged_in = await axios.get('/api/isAuth');
      const isAuth = is_logged_in.data.isAuth;
      if (to.name !== 'Login' && !isAuth ) next({ name: 'Login' })
      else next()
  } */
}
</script>

  

<style lang="css">
  .Register {
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
  }
  .regitser-form {
    display: flex;
    flex-flow: column;
    width: 200px;
    justify-content: center;
  }
</style>
