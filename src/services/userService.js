import backendClient from '@/backendClient'

export const userService = {
  getAll: () => backendClient.get('/user'),
  create: (user) => backendClient.post('/user', user)
}
