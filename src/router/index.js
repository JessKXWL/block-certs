import Vue from 'vue'
import VueRouter from 'vue-router'

// const Home = ()=>import('../views/home/Home')

Vue.use(VueRouter)

const routes = {
  routes: [
    // {
    //   path: '/profile',
    //   name: 'Profile',
    //   component: Profile
    // }
  ],
  mode: "history"
}

const router = new VueRouter(routes)

export default router