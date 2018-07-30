import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Shop from '@/components/Shop'
import My from '@/components/My'
import Bear from '@/components/Bear'
import More from '@/components/More'
import Load from '@/components/Load'
import Sort from '@/components/Sort'
import Gocar from '@/components/Gocar'
import Order from '@/components/Order'
import Search from '@/components/Search'
import Regist from '@/components/Regist'


Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/index',
      component: Index
    },
    // 超市
    {
      path: '/shop/:shopid',
      name:'shop',
      component: Shop,
      props:true
    },
    // 个人中心
    {
      path: '/my',
      component: My
    },
    // 商品页
    {
      path: '/bear',
      component: Bear
    },
    // 商品详情页
    {
      path: '/more',
      component: More
    },
    // 登录页面
    {
      path: '/load',
      component: Load
    },
    // 分类页
    {
      path: '/sort',
      component: Sort
    },
    // 购物车
    {
      path: '/gocar',
      component: Gocar
    },
    // 订单页
    {
      path: '/order',
      component: Order
    },
    // 搜索页
    {
      path: '/search',
      component: Search
    },
    // 注册页
    {
      path: '/regist',
      component: Regist
    }
  ]
})
