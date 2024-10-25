import axiosClient from '@/axiosClient'

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit('setSearchedMeals', data.meals)
  })
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit('setMealsByLetter', data.meals)
  })
}

export function searchMealsByIngredient({ commit }, ingredient) {
  axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    commit('setMealsByIngredient', data.meals)
  })
}

export function searchMealDetails({ commit }, idMeal) {
  axiosClient.get(`lookup.php?i=${idMeal}`).then(({ data }) => {
    commit('setMealDetails', data.meals[0])
  })
}

export function searchIngredientsList({ commit }) {
  axiosClient.get(`list.php?i=list`).then(({ data }) => {
    commit('setIngredientsList', data.meals)
  })
}
