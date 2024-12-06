import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/components/DefaultLayout.vue'
import HomeView from '../views/HomeView.vue'
import SearchMealView from '@/views/SearchMealView.vue'
import MealListView from '@/views/MealListView.vue'
import MealsByName from '@/views/MealsByNameView.vue'
import MealsByLetterView from '@/views/MealsByLetterView.vue'
import MealsByIngredientView from '@/views/MealsByIngredientView.vue'
import IngredientsListView from '@/views/IngredientsListView.vue'
import MealDetailsView from '@/views/MealDetailsView.vue'
import GuestLayout from '@/components/GuestLayout.vue'
import RecetteForm from '@/views/RecetteForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '/', name: 'home', component: HomeView },
        {
          path: '/searchMeal',
          name: 'searchMeal',
          component: SearchMealView,
          children: [
            { path: '/letter/:letter', name: 'byLetter', component: MealListView },
            { path: '/by-name/:name?', name: 'byName', component: MealsByName },
            { path: '/by-letter/:letter?', name: 'byLetter', component: MealsByLetterView },
            { path: '/ingredientsList', name: 'ingredientsList', component: IngredientsListView },
            {
              path: '/ingredientsList/:ingredient',
              name: 'MealsByIngredient',
              component: MealsByIngredientView
            }
          ]
        },
        { path: '/recette/add', name: 'RecetteForm', component: RecetteForm },
        { path: '/meal/:id', name: 'mealDetails', component: MealDetailsView }
      ]
    },
    { path: '/auth', component: GuestLayout, children: [] }
  ]
})

export default router
