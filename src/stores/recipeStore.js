import { defineStore } from 'pinia'
import { recipeService } from '@/services/recipeService'

export const useRecipeStore = defineStore('recipe', {
  state: () => ({
    allRecipes: []
  }),
  getters: {},
  actions: {
    async searchAllRecipes() {
      try {
        const { data } = await recipeService.getAll()
        this.allRecipes = data
      } catch (error) {
        console.error('Erreur lors de la récupération des recettes :\n', error)
      }
    },

    async createNewRecipe(recipe) {
      try {
        await recipeService.create(recipe)
      } catch (error) {
        console.error('Erreur lors de la création de cette nouvelle recette :\n', error)
      }
    }
  }
})
