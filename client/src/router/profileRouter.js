/* eslint-disable */
import Profile from '@Views/profile/App'

export default {
  route: (axios) => {
    return {
      meta: {
        requireAuth : true,
      },
      path: '/profile',
      name: 'Profile',
      component: Profile,
      /* beforeEnter: async (to, from, next) => {
        const check = await axios.get('/api/users/checkAuth');
        if(!check.data.is_auth) return next({ name: 'Login' })
        return next();
      } */
    }
  }
}