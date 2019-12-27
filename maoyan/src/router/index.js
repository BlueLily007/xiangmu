import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/Tab1'
  },
  {
    path: '/Tab1',
    name: 'Tab1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tab1.vue')
  },
  {
    path: '/Tab2',
    name: 'Tab2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tab2.vue')
  },
  {
    path: '/Tab3',
    name: 'Tab3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tab3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
