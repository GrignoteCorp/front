import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notifications: []
  }),
  actions: {
    add(message, type = 'error') {
      const id = Date.now()
      this.notifications.push({ id, message, type })
      setTimeout(() => this.remove(id), 4000)
    },
    remove(id) {
      this.notifications = this.notifications.filter((n) => n.id !== id)
    }
  }
})
