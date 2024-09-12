import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/index.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: '/community',
          name: 'Community',
          component: () => import('@/views/Community/index.vue')
        },
        {
          path: '/management',
          name: 'Management',
          component: () => import('@/views/Management/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue')
    }

  ]
})

export default router
