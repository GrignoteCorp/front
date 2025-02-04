<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMealsStore } from '@/stores/mealsStore'
import Meals from '@/components/MealsList.vue'

const store = useMealsStore()
const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.$state.searchedMeals)

function searchMeals() {
  if (keyword.value) {
    store.searchMeals(keyword.value)
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>

<template>
  <h1 class="text-4xl font-bold mb-4 text-orange-500">Chercher par nom</h1>

  <div class="px-8 flex justify-center items-center w-xl">
    <input
      type="text"
      id="search"
      class="rounded border-2 bg-white border-gray-200 mb-3 w-full"
      placeholder="Chercher un repas"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>

  <Meals :meals="meals" />
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <a
      href="#"
      @click.prevent="openIngredient(ingredient)"
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
    </a>
  </div>
</template>
