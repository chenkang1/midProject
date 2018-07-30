import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import Menus from '@/components/index/Menus'
import Users from '@/components/index/Users'
import Outlines from '@/components/index/Outlines'
import Items from '@/components/index/Items'
import Classes from '@/components/index/Classes'
import PapersAdd from '@/components/index/PapersAdd'
import PapersList from '@/components/index/PapersList'
import PapersEdit from '@/components/index/PapersEdit'
import Publish from '@/components/Publish.vue'
import Over from '@/components/Over'
import First from '@/components/index/First'
import Count from '@/components/index/Count.vue'
import Myself from '@/components/index/Myself'




Vue.use(Router)

export default new Router({
  // 默认路由跳转
  routes: [
    {
      path:'/',
      redirect:'/index/first'
    },
    {
      path: '/index',
      name:'index',
      redirect:'/index/first',
      component: Index,
      // index页面下的子路由
      children:[
        // 问卷分析
        {
          path:'count/:paper_id',
          props:true,
          name:'count',
          component:Count
        },
        // 加入页面
        {
          path:'first',
          component:First
        },
        // 用户管理
        {
          path:'users',
          component:Users
        },
        // 菜单管理
        {
          path:'menus',
          component:Menus
        },
        // 大纲管理
        {
          path:'outlines',
          component:Outlines
        },
        // 选项管理
        {
          path:'items',
          component:Items
        },
        // 班级管理
        {
          path:'classes',
          component:Classes
        },
        // 添加问卷
        {
          path:'papers/add',
          name:'papersadd',
          component:PapersAdd
        },
        // 问卷管理
        {
          path:'papers/list',
          name:'paperslist',          
          component:PapersList
        },
        // 问卷编辑
        {
          path:'papers/edit/:id',
          props:true,
          name:'papersedit',          
          component:PapersEdit
        },
        // 个人中心
        {
          path:'myself',        
          component:Myself
        },
      ]
    },
    // 登录
    {
      path: '/login',
      name:'login',
      component: Login
    },
    // 注册
    {
      path: '/regist',
      name:'regist',
      component: Regist
    },
    // 问卷
    {
      path: '/publish/:paper_id',
      name:'publish',
      props:true,
      component: Publish
    },
    // 问卷结束页面
    {
      path: '/over',
      name:'over',
      props:true,
      component: Over
    },
    
  ]
})
