import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'

import Home from '@/views/Home/index.vue'
import Community from '@/views/Community/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', 
      component: Layout,
      children: [
        { path: '', component: Home },
        { path: 'community', component: Community }
      ]
    },
    { path: '/login', component: Login }
    
  ]
})

export default router
