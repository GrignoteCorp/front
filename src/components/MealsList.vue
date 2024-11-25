<script setup>
import MealItem from '@/components/MealItem.vue'

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="meals_result" v-if="meals.length">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-else>There is no meal.</div>
</template>

<style>
.meals_result {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  place-content: center;
  gap: 30px;
  padding: 20px;
}
</style>
