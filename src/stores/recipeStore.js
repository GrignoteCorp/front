import { defineStore } from 'pinia'
const localAPI = 'http://localhost:8081'

export const useRecipeStore = defineStore('recipe', {
  state: () => ({
    allRecipes: []
  }),
  getters: {},
  actions: {
    async searchAllRecipes() {
      fetch(localAPI + '/recipe', {
        headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      })
        .then((res) => res.json())
        .then((response) => {
          this.allRecipes = response
        })
        .catch((error) => {
          console.log('Erreur lors de la récupération des recettes : \n', error)
        })
    },

    async createNewRecipe(recipe) {
      fetch(localAPI + '/recipe', {
        headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        method: 'POST',
        body: JSON.stringify(recipe)
      }).catch((error) => {
        console.log('Erreur lors de la création de cette nouvelle recette : \n', error)
      })
    }
  }
})
