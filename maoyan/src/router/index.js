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
    component: () => import(/* webpackChunkName: "about" */ '../views/Tab1/Tab1.vue'),
    children:[
      {
        path:'/',
        redirect:'/Tab4'
      },
      {
        path: '/Tab4',
        name: 'Tab4',
        component: () => import(/* webpackChunkName: "about" */ '../views/Tab1/Tab/Tab4.vue')
      },
      {
        path: '/Tab5',
        name: 'Tab5',
        component: () => import(/* webpackChunkName: "about" */ '../views/Tab1/Tab/Tab5.vue')
      }
    ]
  },
  {
    path: '/Tab2',
    name: 'Tab2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tab2/Tab2.vue')
  },
  {
    path: '/Tab3',
    name: 'Tab3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tab3/Tab3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
