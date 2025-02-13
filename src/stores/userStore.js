import { defineStore } from 'pinia'
const localAPI = 'http://localhost:8081'

export const useUserStore = defineStore('user', {
  state: () => ({
    allUsers: []
  }),
  getters: {},
  actions: {
    async searchAllUsers() {
      fetch(localAPI + '/user', {
        headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      })
        .then((res) => res.json())
        .then((response) => {
          this.allUsers = response
        })
        .catch((error) => {
          console.log('Erreur lors de la récupération des utilisateurs : \n', error)
        })
    },

    async postUser(user) {
      fetch(localAPI + '/user', {
        headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        method: 'POST',
        body: JSON.stringify(user)
      }).catch((error) => {
        console.log('Erreur lors de la création de ce nouvel user : \n', error)
      })
    }
  }
})
