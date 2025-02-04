<script setup>
import { RouterLink } from 'vue-router'
import YoutubeButton from '@/components/YoutubeButton.vue'

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>

<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
      <div class="p-3">
        <h1 class="font-bold">{{ meal.strMeal }}</h1>
        <!-- TODO 
        <p class="mb-4">
          {{ $filters.truncateWords(meal.strInstructions, 20) }}
        </p> -->
        <div class="flex items-center justify-between">
          <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
