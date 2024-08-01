import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import AuthentView from '../views/authentification/AuthentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListView
    },
    {
      path: '/authentification',
      name: 'authentification',
      component: AuthentView
    }
  ]
})

export default router
