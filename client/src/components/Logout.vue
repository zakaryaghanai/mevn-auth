<template>
  <div class="Logout">
    <button @click.prevent="logout()">Logout</button>
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
    }
  },

  watch: {
   
  },
  methods: {
    async logout(){
     const user = await axios.get('/api/users/logout');
     if(user.status == 200) {
      this.$store.dispatch('setAuth', false); 
      this.$store.dispatch('setToken', null); 
      this.$router.push({ name: 'Home'});
     }
    }
   
  },
  beforeMount(){
  },
  mounted(){
  },
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
