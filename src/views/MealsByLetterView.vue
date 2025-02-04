<script setup>
import { computed, onMounted, watch } from 'vue'
import { useMealsStore } from '@/stores/mealsStore'
import { useRoute } from 'vue-router'
import Meals from '@/components/MealsList.vue'

const route = useRoute()
const store = useMealsStore()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.$state.mealsByLetter || [])

watch(route, () => store.searchMealsByLetter(route.params.letter))

onMounted(() => {
  if (route.params.letter) {
    store.searchMealsByLetter(route.params.letter)
  }
})
</script>

<template class="p-8 pb-0">
  <h1 class="text-4xl font-bold mb-4 text-orange-500">Chercher par lettre</h1>

  <div class="flex justify-center items-center w-xl gap-2">
    <RouterLink
      :to="{ name: 'byLetter', params: { letter: letter } }"
      v-for="letter in letters"
      :key="letter"
      class="text-xl text-orange-500"
    >
      {{ letter }}
    </RouterLink>
  </div>

  <Meals :meals="meals" />
</template>
