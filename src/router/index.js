import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import page01 from '@/components/page01'
import page02 from '@/components/page02'
import page01A from '@/components/page01/page01-A'
import page01B from '@/components/page01/page01-b'
import pageEnd from '@/components/page01/B/end'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component:  () => import('@/components/home')
    },
    {
      path: '/headTop',
      name: 'headTop',
      component:  () => import('../components/headTop')
    },
    {
      path: '/menu',
      name: 'menu',
      meta: {
        requiresAuth: true,
        title: '服务商类型设置'
      },
      component: () => import('../layouts/menu.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../layouts/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../layouts/register.vue')
    },
    {
      path: '/main',
      name: 'main',
      component:  () => import('../layouts/main.vue'),
      children: [
        {
          path: '/',
          name: 'mainRight',
          component: () => import('../layouts/mainRight.vue')
        },
        {
          path: '/',
          name: 'mainPage',
          component: () => import('../components/page02.vue')
        },
        {
          path: '/userList',
          name: 'userList',
          component: () => import('../layouts/user/userList.vue')
        },
        {
          path: '/emitTest',
          name: 'emitTest',
          component: () => import('../layouts/emitTest.vue')
        }
      ]
    },
    {
      path: '/page01',
      name: 'page01',
      component: page01,
      children: [
        {
          path: 'page01-a',
          name: 'page01A',
          component: page01A
        },
        {
          path: 'page01-b',
          name: 'page01B',
          component: page01B,
          children: [
            {
              path: 'end',
              name: 'pageEnd',
              component: pageEnd
            }
          ]
        }
      ]
    },
    {
      path: '/page02',
      name: 'page02',
      component: page02
    }
  ]
})
