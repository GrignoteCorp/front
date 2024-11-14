<script setup>
import { onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useMealsStore } from '@/stores/mealsStore'

const store = useMealsStore()

const ingredients = computed(() => store.$state.ingredientsList)
onMounted(() => store.searchIngredientsList())
</script>

<template>
  <h1>Ingredients</h1>
  <div class="ingredients_list">
    <RouterLink
      v-for="ingredient in ingredients"
      :to="{ name: 'ByIngredient', params: { ingredient: ingredient.strIngredient } }"
      :key="ingredient.idIngredient"
      class="ingredient_details"
    >
      <h2>{{ ingredient.strIngredient }}</h2>
      <p>{{ ingredient.strDescription }}</p>
    </RouterLink>
  </div>
</template>

<style>
.ingredients_list {
  padding: 10px 20px;
}

.ingredient_details {
  padding: 10px 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
</style>
