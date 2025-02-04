<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex justify-center items-center rounded-t-xl bg-orange-400 my-6">
    <RouterLink :to="{ name: 'byName' }" class="text-2xl m-4">Chercher un repas</RouterLink>
    <RouterLink :to="{ name: 'byLetter' }" class="text-2xl m-4"
      >Chercher un repas par lettre</RouterLink
    >
    <RouterLink :to="{ name: 'ingredientsList' }" class="text-2xl m-4"
      >Chercher un repas par ingrédient</RouterLink
    >
  </div>

  <RouterView />
</template>
