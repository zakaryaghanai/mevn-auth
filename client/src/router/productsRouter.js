/* eslint-disable */
import Products from '@Views/products/App'

export default {
  route: (axios) => {
    return {
      path: '/products',
      name: 'Products',
      component: Products,
      /* beforeEnter: async (to, from, next) => {
        const check = await axios.get('/api/users/checkAuth');
        if(!check.data.is_auth) return next({ name: 'Login' })
        return next();
      } */
    }
  }
}