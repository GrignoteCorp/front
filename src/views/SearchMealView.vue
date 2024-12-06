<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="sub_header">
    <RouterLink :to="{ name: 'byName' }" class="sub_header_link">Chercher un repas</RouterLink>
    <RouterLink :to="{ name: 'byLetter' }" class="sub_header_link"
      >Chercher un repas par lettre</RouterLink
    >
    <RouterLink :to="{ name: 'ingredientsList' }" class="sub_header_link"
      >Chercher un repas par ingrédient</RouterLink
    >
  </div>

  <RouterView />
</template>

<style>
.sub_header {
  background-color: bisque;
  top: calc(var(--size-lg) * -1);
  position: relative;
  margin: 0 calc(var(--size-lg) * -1);
  border-radius: 20px 20px 0 0;
  padding: 10px;
  display: flex;
  gap: 15px;
  justify-content: center;
}

.sub_header_link {
  color: inherit;
  text-decoration: none;
  font-size: 1.3rem;
  padding: 10px;
}

.sub_header_link:hover,
.sub_header_link:active {
  color: var(--color-primary);
  border-radius: 10px;
  transition: color 0.1s ease-in-out;
  text-decoration: solid;
}
</style>
