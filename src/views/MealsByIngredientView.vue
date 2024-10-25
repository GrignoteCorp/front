<script setup>
import store from '@/stores'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Meals from '@/components/MealsList.vue'

const route = useRoute()

const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>

<template>
  <h1>Meals</h1>
  <Meals :meals="meals" />
</template>

<style></style>
