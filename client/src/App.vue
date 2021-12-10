<template>
  <div id="app">
    <div id="nav">
      <div id="routes">
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link v-if="!getAuth" to="/register">Register</router-link>
        <router-link v-if="!getAuth" to="/Login">Login</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/profile">Profile</router-link>
      </div>
      <template v-if="getAuth">
        <app-logout></app-logout>
      </template>
    </div>
      <router-view/>  
  </div>
</template>

<script>
/* eslint-disable */
import {mapGetters} from 'vuex'
import Logout from '@Components/Logout'
export default {
  data() {
    return {
      
    }
  },
  computed: {
      ...mapGetters([
        'getAuth'
      ])
  },
  components: {
    'app-logout': Logout
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

}
</style>
