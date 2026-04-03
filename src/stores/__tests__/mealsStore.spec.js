import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMealsStore } from '@/stores/mealsStore'

// --- Mock du service (pas d'Axios direct dans le store) ---
vi.mock('@/services/mealService', () => ({
  mealService: {
    searchByName: vi.fn(),
    searchByLetter: vi.fn(),
    searchByIngredient: vi.fn(),
    getDetails: vi.fn(),
    getIngredientsList: vi.fn()
  }
}))
import { mealService } from '@/services/mealService'

// ─────────────────────────────────────────────────────────────
// Données de test
// ─────────────────────────────────────────────────────────────
const MEAL_STUB = {
  idMeal: '52772',
  strMeal: 'Teriyaki Chicken Casserole',
  strMealThumb: 'https://example.com/thumb.jpg',
  strIngredient1: 'Soy Sauce',
  strMeasure1: '3/4 cup',
  strYoutube: 'https://youtube.com/watch?v=4aZr5hZXP_s'
}

const INGREDIENT_STUB = { strIngredient: 'Chicken' }

// ─────────────────────────────────────────────────────────────
describe('mealsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  // ── État initial ───────────────────────────────────────────
  describe('état initial', () => {
    it('initialise toutes les listes à vide et mealDetails à null', () => {
      const store = useMealsStore()
      expect(store.searchedMeals).toEqual([])
      expect(store.mealsByLetter).toEqual([])
      expect(store.mealsByIngredient).toEqual([])
      expect(store.mealDetails).toBeNull()
      expect(store.ingredientsList).toEqual([])
    })
  })

  // ── searchMeals ────────────────────────────────────────────
  describe('searchMeals(keyword)', () => {
    it('appelle mealService.searchByName avec le mot-clé', async () => {
      mealService.searchByName.mockResolvedValue({ data: { meals: [MEAL_STUB] } })
      const store = useMealsStore()

      await store.searchMeals('chicken')

      expect(mealService.searchByName).toHaveBeenCalledOnce()
      expect(mealService.searchByName).toHaveBeenCalledWith('chicken')
    })

    it('met à jour searchedMeals avec les résultats', async () => {
      mealService.searchByName.mockResolvedValue({ data: { meals: [MEAL_STUB] } })
      const store = useMealsStore()

      await store.searchMeals('chicken')

      expect(store.searchedMeals).toEqual([MEAL_STUB])
    })

    it('accepte une réponse null (aucun résultat côté TheMealDB)', async () => {
      mealService.searchByName.mockResolvedValue({ data: { meals: null } })
      const store = useMealsStore()

      await store.searchMeals('xyzimpossible')

      expect(store.searchedMeals).toBeNull()
    })

    it('ne plante pas sur une erreur réseau', async () => {
      mealService.searchByName.mockRejectedValue(new Error('Network Error'))
      const store = useMealsStore()

      await expect(store.searchMeals('chicken')).resolves.not.toThrow()
    })
  })

  // ── searchMealsByLetter ────────────────────────────────────
  describe('searchMealsByLetter(letter)', () => {
    it('appelle mealService.searchByLetter avec la lettre', async () => {
      mealService.searchByLetter.mockResolvedValue({ data: { meals: [MEAL_STUB] } })
      const store = useMealsStore()

      await store.searchMealsByLetter('a')

      expect(mealService.searchByLetter).toHaveBeenCalledWith('a')
    })

    it('met à jour mealsByLetter avec les résultats', async () => {
      mealService.searchByLetter.mockResolvedValue({ data: { meals: [MEAL_STUB] } })
      const store = useMealsStore()

      await store.searchMealsByLetter('a')

      expect(store.mealsByLetter).toEqual([MEAL_STUB])
    })

    it('accepte une réponse null', async () => {
      mealService.searchByLetter.mockResolvedValue({ data: { meals: null } })
      const store = useMealsStore()

      await store.searchMealsByLetter('z')

      expect(store.mealsByLetter).toBeNull()
    })

    it('ne plante pas sur une erreur réseau', async () => {
      mealService.searchByLetter.mockRejectedValue(new Error('Network Error'))
      const store = useMealsStore()

      await expect(store.searchMealsByLetter('a')).resolves.not.toThrow()
    })
  })

  // ── searchMealsByIngredient ────────────────────────────────
  describe('searchMealsByIngredient(ingredient)', () => {
    it('appelle mealService.searchByIngredient avec l\'ingrédient', async () => {
      mealService.searchByIngredient.mockResolvedValue({ data: { meals: [MEAL_STUB] } })
      const store = useMealsStore()

      await store.searchMealsByIngredient('chicken')

      expect(mealService.searchByIngredient).toHaveBeenCalledWith('chicken')
    })

    it('met à jour mealsByIngredient avec les résultats', async () => {
      mealService.searchByIngredient.mockResolvedValue({ data: { meals: [MEAL_STUB] } })
      const store = useMealsStore()

      await store.searchMealsByIngredient('chicken')

      expect(store.mealsByIngredient).toEqual([MEAL_STUB])
    })
  })

  // ── searchMealDetails ──────────────────────────────────────
  describe('searchMealDetails(idMeal)', () => {
    it('appelle mealService.getDetails avec l\'id', async () => {
      mealService.getDetails.mockResolvedValue({ data: { meals: [MEAL_STUB] } })
      const store = useMealsStore()

      await store.searchMealDetails('52772')

      expect(mealService.getDetails).toHaveBeenCalledWith('52772')
    })

    it('met à jour mealDetails avec le premier résultat (objet, pas tableau)', async () => {
      mealService.getDetails.mockResolvedValue({ data: { meals: [MEAL_STUB] } })
      const store = useMealsStore()

      await store.searchMealDetails('52772')

      expect(store.mealDetails).toEqual(MEAL_STUB)
      expect(Array.isArray(store.mealDetails)).toBe(false)
    })

    it('ne plante pas sur une erreur réseau', async () => {
      mealService.getDetails.mockRejectedValue(new Error('Network Error'))
      const store = useMealsStore()

      await expect(store.searchMealDetails('52772')).resolves.not.toThrow()
    })
  })

  // ── searchIngredientsList ──────────────────────────────────
  describe('searchIngredientsList()', () => {
    it('appelle mealService.getIngredientsList', async () => {
      mealService.getIngredientsList.mockResolvedValue({ data: { meals: [INGREDIENT_STUB] } })
      const store = useMealsStore()

      await store.searchIngredientsList()

      expect(mealService.getIngredientsList).toHaveBeenCalledOnce()
    })

    it('met à jour ingredientsList avec les résultats', async () => {
      mealService.getIngredientsList.mockResolvedValue({ data: { meals: [INGREDIENT_STUB] } })
      const store = useMealsStore()

      await store.searchIngredientsList()

      expect(store.ingredientsList).toEqual([INGREDIENT_STUB])
    })
  })
})
