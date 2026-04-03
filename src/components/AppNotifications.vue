<script setup>
import { computed } from 'vue'
import { useNotificationStore } from '@/stores/notificationStore'

const store = useNotificationStore()
const notifications = computed(() => store.notifications)
</script>

<template>
  <div class="notifications" role="status" aria-live="polite" aria-atomic="false">
    <div
      v-for="notif in notifications"
      :key="notif.id"
      class="notification"
      :class="`notification--${notif.type}`"
    >
      <span>{{ notif.message }}</span>
      <button type="button" class="notification__close" @click="store.remove(notif.id)" aria-label="Fermer">
        ✕
      </button>
    </div>
  </div>
</template>

<style scoped>
.notifications {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 1000;
}

.notification {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: white;
  min-width: 260px;
  max-width: 420px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: slide-in 0.2s ease-out;
}

.notification--error   { background-color: #e53e3e; }
.notification--warning { background-color: #dd6b20; }
.notification--success { background-color: #38a169; }
.notification--info    { background-color: #3182ce; }

.notification__close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 0;
  opacity: 0.8;
}

.notification__close:hover { opacity: 1; }

@keyframes slide-in {
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}
</style>
