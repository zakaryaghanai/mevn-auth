/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import '@Assets/css/tailwind.css';

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.name == null)  return next({name: 'Home'});
  if(!store.getters.getAuth) {
    if(to.meta.requireAuth) return next({name : "Login"});
    return next();
  }else {
    if(to.name == "Login" || to.name == "Register") return next({name: from.name})
      return next();
  }
}) 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

