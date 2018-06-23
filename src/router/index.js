import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import Login from '../components/Login';

const router = new VueRouter({
  pageRouting: true,
  routes: [{
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    }, {
      path: '/login',
      component: Login,
      meta: {
        title: 'Login',
      }
    },
    {
      path: '*',
      redirect: '/home'
    },
  ],
});

router.replace('/home');

module.exports = router;