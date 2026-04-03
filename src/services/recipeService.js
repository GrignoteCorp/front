import backendClient from '@/backendClient'

export const recipeService = {
  getAll: () => backendClient.get('/recipe'),
  create: (recipe) => backendClient.post('/recipe', recipe)
}
