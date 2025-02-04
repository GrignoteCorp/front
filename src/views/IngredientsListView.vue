<script setup>
import { onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useMealsStore } from '@/stores/mealsStore'

const store = useMealsStore()

const ingredients = computed(() => store.$state.ingredientsList)
onMounted(() => store.searchIngredientsList())
</script>

<template>
  <h1 class="text-4xl font-bold mb-4 text-orange-500">Chercher par ingrédient</h1>
  <div class="px-8">
    <div
      v-for="ingredient in ingredients"
      :key="ingredient.idIngredient"
      class="border-solid border-2 px-3 bg-white shadow rounded-md mb-3"
    >
      <RouterLink
        :to="{ name: 'MealsByIngredient', params: { ingredient: ingredient.strIngredient } }"
      >
        <h2 class="text-2xl font-bold mb-2 text-orange-500">{{ ingredient.strIngredient }}</h2>
        <p>{{ ingredient.strDescription }}</p>
      </RouterLink>
    </div>
  </div>
</template>
