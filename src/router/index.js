import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import Login from '../components/Login';
import OpenGate from '../components/OpenGate';
import Parked from '../components/Parked';

const router = new VueRouter({
  pageRouting: true,
  routes: [{
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }, {
      path: '/parked',
      component: Parked
    },
    {
      path: '/gate/open',
      component: OpenGate
    },
    {
      path: '*',
      redirect: '/home'
    },
  ],
});

router.replace('/home');

module.exports = router;