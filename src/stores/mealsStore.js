import { defineStore } from 'pinia'
import { mealService } from '@/services/mealService'

export const useMealsStore = defineStore('meals', {
  state: () => ({
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredient: [],
    mealDetails: null,
    ingredientsList: []
  }),
  getters: {},
  actions: {
    async searchMeals(keyword) {
      try {
        const { data } = await mealService.searchByName(keyword)
        this.searchedMeals = data.meals
      } catch (error) {
        console.error('Erreur lors du fetch des meals:', error)
      }
    },

    async searchMealsByLetter(letter) {
      try {
        const { data } = await mealService.searchByLetter(letter)
        this.mealsByLetter = data.meals
      } catch (error) {
        console.error('Erreur lors du fetch des meals:', error)
      }
    },

    async searchMealsByIngredient(ingredient) {
      try {
        const { data } = await mealService.searchByIngredient(ingredient)
        this.mealsByIngredient = data.meals
      } catch (error) {
        console.error('Erreur lors du fetch des meals:', error)
      }
    },

    async searchMealDetails(idMeal) {
      try {
        const { data } = await mealService.getDetails(idMeal)
        this.mealDetails = data.meals[0]
      } catch (error) {
        console.error('Erreur lors du fetch des meals:', error)
      }
    },

    async searchIngredientsList() {
      try {
        const { data } = await mealService.getIngredientsList()
        this.ingredientsList = data.meals
      } catch (error) {
        console.error('Erreur lors du fetch des meals:', error)
      }
    }
  }
})
