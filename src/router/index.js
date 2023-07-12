import { createRouter, createWebHistory } from 'vue-router'

import mainRouteConfig from './config.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/main',
      name: 'Layout',
      children: mainRouteConfig,
      component: () => import('@/views/main/index.vue')
    }
  ]
})

export default router
