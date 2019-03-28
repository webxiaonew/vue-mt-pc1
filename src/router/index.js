import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import Index from '@/page/index'
import ChangeCity from '@/page/changeCity'
import goodsList from '@/page/goodsList'
import Login from '@/page/login'
import Register from '@/page/register'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'defaultPage',
      component: defaultPage,
      children: [{
        path: 's/:name',
        name: 'goods',
        component: goodsList
      }, {
        path: '/index',
        name: 'index',
        component: Index
      }, {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [
        {
          path: '/blank/login',
          name: 'login',
          component: Login
        },
        {
          path: '/blank/register',
          name: 'register',
          component: Register
        }
      ]
    }
  ]
})
