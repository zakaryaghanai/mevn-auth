/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '@Views/Register'
import Login from '../views/Login'
import Product from '../views/products/components/Product'
import axios from 'axios'

import profileRouter from './profileRouter';
import productsRouter from './productsRouter';

Vue.use(VueRouter)

  const routes = [
    {
      path: '/products/:product_id',
      name: 'Product',
      component: Product
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    profileRouter.route(axios),
    productsRouter.route(axios),
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    
]

const router = new VueRouter({
  /* mode: 'history', */
  routes
})

export default router
