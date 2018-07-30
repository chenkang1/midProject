// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import infiniteScroll from 'vue-infinite-scroll'
import jq from 'jquery'
import car from '@/components/car'

// 定义全局
Vue.prototype.$jq = jq
Vue.prototype.apiurl = 'http://127.0.0.1:8088'

Vue.prototype.$cars = {} //购物车
// Vue.prototype.$bus = new Vue({
//     data:{
//       cars:{}
//     }

// })//购物车


Vue.use(infiniteScroll)

// Vue.config.productionTip = false

Vue.component('car',car)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data:{
    cars:{}
  },
  components: { App },
  template: '<App/>'
})
