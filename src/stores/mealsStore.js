import { defineStore } from 'pinia'
import axiosClient from '@/axiosClient'

export const useMealsStore = defineStore('meals', {
  state: () => ({
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredients: [],
    mealDetails: [],
    ingredientsList: []
  }),
  getters: {},
  actions: {
    async searchMeals(keyword) {
      axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        this.searchedMeals = data.meals
      })
    },

    async searchMealsByLetter(letter) {
      axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
        this.mealsByLetter = data.meals
      })
    },

    async searchMealsByIngredient(ingredient) {
      axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
        this.mealsByIngredient = data.meals
      })
    },

    async searchMealDetails(idMeal) {
      axiosClient.get(`lookup.php?i=${idMeal}`).then(({ data }) => {
        this.mealDetails = data.meals[0]
      })
    },

    async searchIngredientsList() {
      axiosClient.get(`list.php?i=list`).then(({ data }) => {
        this.ingredientsList = data.meals
      })
    }
  }
})
