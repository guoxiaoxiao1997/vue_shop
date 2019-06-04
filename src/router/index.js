/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../pages/Search/Search'
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/Order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/Profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/Search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
