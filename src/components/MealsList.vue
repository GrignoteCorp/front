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
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8" v-if="meals.length">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <p v-else class="flex justify-center text-gray-600 p-8">There is no meal.</p>
</template>
