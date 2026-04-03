import axiosClient from '@/axiosClient'

export const mealService = {
  searchByName: (keyword) => axiosClient.get(`search.php?s=${keyword}`),
  searchByLetter: (letter) => axiosClient.get(`search.php?f=${letter}`),
  searchByIngredient: (ingredient) => axiosClient.get(`filter.php?i=${ingredient}`),
  getDetails: (idMeal) => axiosClient.get(`lookup.php?i=${idMeal}`),
  getIngredientsList: () => axiosClient.get('list.php?i=list')
}
