/*
 入口js
*/
import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import router from './router'
import store from './store'
// require('swiper/dist/css/swiper.css')
/* eslint-disable */

//注册全局组件标签
Vue.component(Button.name,Button) //<mt-Button>
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
