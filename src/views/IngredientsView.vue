<script setup>
import axiosClient from '@/axiosClient'
import { onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import store from '@/stores'

const route = useRoute()

const ingredients = computed(() => store.state.ingredientsList)
onMounted(() =>
  axiosClient.get('list.php?i=list').then(({ data }) => (ingredients.value = data.meals))
)

onMounted(() => {
  store.dispatch('searchIngredientsList', route.params.id)
})
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
