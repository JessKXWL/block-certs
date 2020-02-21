import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Login from '../pages/login'
import Sign from '../pages/sign'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
  },{
      path: '/login',
      name: 'login',
      component: Login,
  },{
    path: '/sign',
    name: 'sign',
    component: Sign,
  }]
})
