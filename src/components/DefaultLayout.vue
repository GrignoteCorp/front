<script setup>
import Navbar from './NavBar.vue'
</script>

<template>
  <Navbar />
  <main>
    <div class="max-w-[1200px] mx-auto">
      <RouterView />
    </div>
  </main>
</template>
