<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Grignotte</h1>
      <nav>
        <RouterLink to="/">Home </RouterLink>
        <RouterLink to="/authentification">Connection</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
