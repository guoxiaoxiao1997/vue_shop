/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../pages/Search/Search'
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/MSite',
      component: MSite
    },
    {
      path: '/Order',
      component: Order
    },
    {
      path: '/Profile',
      component: Profile
    },
    {
      path: '/Search',
      component: Search
    }
  ]
})
