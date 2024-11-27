import { defineStore } from 'pinia'
const localAPI = 'http://localhost:8081'

export const useUserStore = defineStore('user', {
  state: () => ({
    allUsers: []
    // user: []
  }),
  getters: {},
  actions: {
    async searchAllUsers() {
      //TODO supp le /all
      fetch(localAPI + '/user/all', {
        headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      })
        .then((res) => res.json())
        .then((response) => {
          this.allUsers = response
        })
        .catch((error) => {
          console.log('Looks like there was a problem: \n', error)
        })
    },

    async postUser(user) {
      console.log(user)

      fetch(localAPI + '/user', {
        headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        method: 'POST',
        body: JSON.stringify(user)
      })
    }
  }
})
