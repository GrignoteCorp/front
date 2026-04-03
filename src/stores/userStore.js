import { defineStore } from 'pinia'
import { userService } from '@/services/userService'

export const useUserStore = defineStore('user', {
  state: () => ({
    allUsers: []
  }),
  getters: {},
  actions: {
    async searchAllUsers() {
      try {
        const { data } = await userService.getAll()
        this.allUsers = data
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :\n', error)
      }
    },

    async postUser(user) {
      try {
        await userService.create(user)
      } catch (error) {
        console.error('Erreur lors de la création de ce nouvel user :\n', error)
      }
    }
  }
})
