<script setup>
import { computed, onMounted, watch } from 'vue'
import { useMealsStore } from '@/stores/mealsStore'
import { useRoute } from 'vue-router'
import Meals from '@/components/MealsList.vue'

const route = useRoute()
const store = useMealsStore()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.$state.mealsByLetter)

watch(route, () => store.searchMealsByLetter(route.params.letter))
onMounted(() => store.searchMealsByLetter(route.params.letter))
</script>

<template>
  <div class="alphabet">
    <router-link
      :to="{ name: 'byLetter', params: { letter: letter } }"
      v-for="letter in letters"
      v-bind:key="letter"
    >
      {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals" />
</template>

<style>
.alphabet {
  display: flex;
  gap: 5px;
  justify-content: center;
  font-size: 20px;
}
</style>
