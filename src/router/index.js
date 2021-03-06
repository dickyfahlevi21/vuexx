import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.view'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../components/Home/DetailItem.vue')
  },
  {
    path: '/carts',
    name: 'Carts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Carts.view')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
