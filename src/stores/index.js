import { createStore } from 'vuex'
import axiosClient from '@/axiosClient'

const store = createStore({
  state: {
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredients: [],
    mealDetails: [],
    ingredientsList: []
  },
  actions: {
    searchMeals({ commit }, keyword) {
      axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        commit('setSearchedMeals', data.meals)
      })
    },

    searchMealsByLetter({ commit }, letter) {
      axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
        commit('setMealsByLetter', data.meals)
      })
    },

    searchMealsByIngredient({ commit }, ingredient) {
      axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
        commit('setMealsByIngredient', data.meals)
      })
    },

    searchMealDetails({ commit }, idMeal) {
      axiosClient.get(`lookup.php?i=${idMeal}`).then(({ data }) => {
        commit('setMealDetails', data.meals[0])
      })
    },

    searchIngredientsList({ commit }) {
      axiosClient.get(`list.php?i=list`).then(({ data }) => {
        commit('setIngredientsList', data.meals)
      })
    }
  },
  mutations: {
    setSearchedMeals(state, meals) {
      state.searchedMeals = meals
    },

    setMealsByLetter(state, meals) {
      state.mealsByLetter = meals
    },

    setMealsByIngredient(state, meals) {
      state.mealsByIngredient = meals
    },

    setMealDetails(state, meals) {
      state.mealDetails = meals
    },

    setIngredientsList(state, meals) {
      state.ingredientsList = meals
    }
  },
  getters: {}
})

export default store
