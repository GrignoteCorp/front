<script setup>
import { useMealsStore } from '@/stores/mealsStore'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Meals from '@/components/MealsList.vue'

const route = useRoute()
const store = useMealsStore()

const meals = computed(() => store.$state.mealsByIngredient || [])

onMounted(() => {
  if (route.params.ingredient != '') {
    store.searchMealsByIngredient(route.params.ingredient)
    console.log(store.$state)
  }
})
</script>

<template>
  <h1>Meals</h1>
  <Meals :meals="meals" />
</template>

<style></style>
