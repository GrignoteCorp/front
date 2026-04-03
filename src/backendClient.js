import axios from 'axios'
import { useNotificationStore } from '@/stores/notificationStore'

const backendClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: { 'Content-Type': 'application/json' }
})

backendClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message ?? error.message ?? 'Erreur réseau'
    useNotificationStore().add(message, 'error')
    return Promise.reject(error)
  }
)

export default backendClient
