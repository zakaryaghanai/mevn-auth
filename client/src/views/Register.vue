<template>
  <div class="Register">
    <h1>Register</h1>

    <form class="regitser-form">
      <input type="text" name="email" placeholder="email" v-model="user.email">
      <input type="text" name="firstname" placeholder="firstname" v-model="user.firstname">
      <input type="text" name="lastname" placeholder="lastname" v-model="user.lastname">
      <input type="text" name="password" placeholder="password" v-model="user.password">
      <input type="text" name="password_confirm" placeholder="password check" v-model="user.password_confirm">

      <button @click.prevent="register()">Register</button>
      <span>{{message}}</span>
     
    </form>

  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'Regitser',
  data() {
    return {
      user : {
        email : 'zakariya@gmail.com',
        firstname: 'zakarya',
        lastname: 'ghanai',
        password: '123456',
        password_confirm: '123456',
      },
      message : ''
    }
  },

  watch: {
   
  },
  methods: {
    async register(){
    
      const user = await axios.post('/api/users/register', {
        email : this.user.email,
        firstname : this.user.firstname,
        lastname : this.user.lastname,
        password : this.user.password,
        password_confirm : this.user.password_confirm,
      })
     if(user.data.success == -2 || user.data.success == -1 ) {
       this.message = user.data.message;
     }else if(user.data.success) {
        this.message = user.data.message;
        setTimeout(() => {
          this.$router.push({ name: 'Login'});
        }, 2000);
     }
      /* console.log(user.data); */
    }
   
  },
  beforeMount(){
    
  },
  mounted(){
   
  }
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
