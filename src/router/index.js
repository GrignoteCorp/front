import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/components/DefaultLayout.vue'
import HomeView from '../views/HomeView.vue'
import MealListView from '@/views/MealListView.vue'
import MealsByName from '@/views/MealsByNameView.vue'
import MealsByLetterView from '@/views/MealsByLetterView.vue'
import MealsByIngredientView from '@/views/MealsByIngredientView.vue'
import IngredientsView from '@/views/IngredientsView.vue'
import MealDetailsView from '@/views/MealDetailsView.vue'
import GuestLayout from '@/components/GuestLayout.vue'

// import AuthentView from '../views/authentification/AuthentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/letter/:letter',
          name: 'byLetter',
          component: MealListView
        },
        {
          path: '/by-name/:name?',
          name: 'byName',
          component: MealsByName
        },
        {
          path: '/by-letter/:letter?',
          name: 'byLetter',
          component: MealsByLetterView
        },
        {
          path: '/ingredients',
          name: 'ingredients',
          component: IngredientsView
        },
        {
          path: '/by-ingredient/:ingredient',
          name: 'ByIngredient',
          component: MealsByIngredientView
        },
        {
          path: '/meal/:id',
          name: 'mealDetails',
          component: MealDetailsView
        }
      ]
    },
    {
      path: '/auth',
      component: GuestLayout,
      children: []
    }
  ]
})

export default router
