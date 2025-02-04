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

<template class="p-8 pb-0">
  <h1 class="text-4xl font-bold mb-4 text-orange-500">Recette contenant du {{ route.params.ingredient }}</h1>
  <Meals :meals="meals" />
</template>


