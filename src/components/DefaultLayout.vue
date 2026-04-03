<template>
  <Navbar />
  <main id="main-content">
    <RouterView />
  </main>
  <AppNotifications />
</template>

<script setup>
import Navbar from './NavBar.vue'
import AppNotifications from './AppNotifications.vue'
</script>
