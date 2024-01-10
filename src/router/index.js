import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: 'community',
          name: 'Community',
          component: () => import('@/views/community/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue')
    }

  ]
})

export default router
