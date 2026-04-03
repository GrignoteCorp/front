import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import MealItem from '@/components/MealItem.vue'

// ─────────────────────────────────────────────────────────────
// Router minimal pour RouterLink
// ─────────────────────────────────────────────────────────────
const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/meal/:id', name: 'mealDetails', component: { template: '<div />' } }]
})

const mountItem = (meal) =>
  mount(MealItem, { props: { meal }, global: { plugins: [router] } })

// ─────────────────────────────────────────────────────────────
// Données de test
// ─────────────────────────────────────────────────────────────
const MEAL_WITH_YOUTUBE = {
  idMeal: '52772',
  strMeal: 'Teriyaki Chicken Casserole',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
  strYoutube: 'https://www.youtube.com/watch?v=4aZr5hZXP_s'
}

const MEAL_WITHOUT_YOUTUBE = {
  idMeal: '52773',
  strMeal: 'Honey Teriyaki Salmon',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg',
  strYoutube: null
}

// ─────────────────────────────────────────────────────────────
describe('MealItem', () => {
  describe('affichage du contenu', () => {
    it('affiche le nom du repas', () => {
      const wrapper = mountItem(MEAL_WITH_YOUTUBE)

      expect(wrapper.text()).toContain('Teriyaki Chicken Casserole')
    })

    it("affiche l'image du repas", () => {
      const wrapper = mountItem(MEAL_WITH_YOUTUBE)
      const img = wrapper.find('img')

      expect(img.exists()).toBe(true)
      expect(img.attributes('src')).toBe(MEAL_WITH_YOUTUBE.strMealThumb)
    })

    it("met le nom du repas dans l'attribut alt de l'image (accessibilité)", () => {
      const wrapper = mountItem(MEAL_WITH_YOUTUBE)

      expect(wrapper.find('img').attributes('alt')).toBe(MEAL_WITH_YOUTUBE.strMeal)
    })
  })

  describe('lien vers la page détail', () => {
    it('contient un lien vers /meal/:id', () => {
      const wrapper = mountItem(MEAL_WITH_YOUTUBE)
      const link = wrapper.find('a[href="/meal/52772"]')

      expect(link.exists()).toBe(true)
    })
  })

  describe('bouton Youtube', () => {
    it('affiche le bouton Youtube quand strYoutube est défini', () => {
      const wrapper = mountItem(MEAL_WITH_YOUTUBE)
      const youtubeLinks = wrapper
        .findAll('a')
        .filter((a) => a.attributes('href')?.includes('youtube'))

      expect(youtubeLinks).toHaveLength(1)
      expect(youtubeLinks[0].attributes('href')).toBe(MEAL_WITH_YOUTUBE.strYoutube)
    })

    it("n'affiche pas le bouton Youtube quand strYoutube est null", () => {
      const wrapper = mountItem(MEAL_WITHOUT_YOUTUBE)
      const youtubeLinks = wrapper
        .findAll('a')
        .filter((a) => a.attributes('href')?.includes('youtube'))

      expect(youtubeLinks).toHaveLength(0)
    })

    it("le bouton Youtube est en dehors du RouterLink (pas de <a> imbriqué)", () => {
      const wrapper = mountItem(MEAL_WITH_YOUTUBE)

      // Le RouterLink devient un <a>, il ne doit pas contenir d'autre <a>
      const routerLinkAnchor = wrapper.find('a[href="/meal/52772"]')
      const nestedAnchors = routerLinkAnchor.findAll('a')

      expect(nestedAnchors).toHaveLength(0)
    })
  })
})
