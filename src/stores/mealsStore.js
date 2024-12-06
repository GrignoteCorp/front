import { defineStore } from 'pinia'
import axiosClient from '@/axiosClient'

export const useMealsStore = defineStore('meals', {
  state: () => ({
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredient: [],
    mealDetails: [],
    ingredientsList: []
  }),
  getters: {},
  actions: {
    async searchMeals(keyword) {
      try {
        axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
          this.searchedMeals = data.meals
        })
      } catch (error) {
        console.error('Erreur lors du fetch des meals:', error)
      }
    },

    async searchMealsByLetter(letter) {
      try {
        axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
          this.mealsByLetter = data.meals
        })
      } catch (error) {
        console.error('Erreur lors du fetch des meals:', error)
      }
    },

    async searchMealsByIngredient(ingredient) {
      try {
        axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
          this.mealsByIngredient = data.meals
        })
      } catch (error) {
        console.error('Erreur lors du fetch des meals:', error)
      }
    },

    async searchMealDetails(idMeal) {
      try {
        axiosClient.get(`lookup.php?i=${idMeal}`).then(({ data }) => {
          this.mealDetails = data.meals[0]
        })
      } catch (error) {
        console.error('Erreur lors du fetch des meals:', error)
      }
    },

    async searchIngredientsList() {
      try {
        axiosClient.get(`list.php?i=list`).then(({ data }) => {
          this.ingredientsList = data.meals
        })
      } catch (error) {
        console.error('Erreur lors du fetch des meals:', error)
      }
    }
  }
})
