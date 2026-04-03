import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import MealsList from '@/components/MealsList.vue'

// ─────────────────────────────────────────────────────────────
// Router minimal (MealsList → MealItem → RouterLink)
// ─────────────────────────────────────────────────────────────
const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/meal/:id', name: 'mealDetails', component: { template: '<div />' } }]
})

const mountList = (meals) =>
  mount(MealsList, { props: { meals }, global: { plugins: [router] } })

// ─────────────────────────────────────────────────────────────
// Données de test
// ─────────────────────────────────────────────────────────────
const MOCK_MEALS = [
  { idMeal: '1', strMeal: 'Pasta Carbonara', strMealThumb: 'https://example.com/1.jpg', strYoutube: null },
  { idMeal: '2', strMeal: 'Pizza Margherita', strMealThumb: 'https://example.com/2.jpg', strYoutube: null },
  { idMeal: '3', strMeal: 'Tiramisu', strMealThumb: 'https://example.com/3.jpg', strYoutube: null }
]

// ─────────────────────────────────────────────────────────────
describe('MealsList', () => {
  describe('liste remplie', () => {
    it('affiche un item par repas fourni', () => {
      const wrapper = mountList(MOCK_MEALS)

      MOCK_MEALS.forEach((meal) => {
        expect(wrapper.text()).toContain(meal.strMeal)
      })
    })

    it("n'affiche pas le message d'état vide", () => {
      const wrapper = mountList(MOCK_MEALS)

      expect(wrapper.text()).not.toContain('There is no meal.')
    })

    it('affiche la grille de résultats (.meals_result)', () => {
      const wrapper = mountList(MOCK_MEALS)

      expect(wrapper.find('.meals_result').exists()).toBe(true)
    })
  })

  describe('liste vide', () => {
    it('affiche le message "There is no meal."', () => {
      const wrapper = mountList([])

      expect(wrapper.text()).toContain('There is no meal.')
    })

    it("n'affiche pas la grille de résultats", () => {
      const wrapper = mountList([])

      expect(wrapper.find('.meals_result').exists()).toBe(false)
    })
  })
})
