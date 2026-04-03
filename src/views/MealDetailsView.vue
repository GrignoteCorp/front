<script setup>
import YoutubeButton from '@/components/YoutubeButton.vue'
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMealsStore } from '@/stores/mealsStore'

const route = useRoute()
const store = useMealsStore()

const meal = computed(() => store.$state.mealDetails)

onMounted(() => {
  store.searchMealDetails(route.params.id)
})
</script>

<template>
  <div v-if="meal" class="meal_details">
    <h1>{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="meal_information">
      <p><strong>Catégorie :</strong> {{ meal.strCategory }}</p>
      <p><strong>Area :</strong> {{ meal.strArea }}</p>
      <p><strong>Tags :</strong> {{ meal.strTags }}</p>
    </div>
    <div class="meal_instructions">{{ meal.strInstructions }}</div>
    <div class="meal_ingredients">
      <div class="meal_ingredients_list">
        <h2>Ingrédients :</h2>
        <ul>
          <template v-for="(_, index) of new Array(20)" :key="index">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ meal[`strIngredient${index + 1}`] }} — {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="meal_links">
      <YoutubeButton v-if="meal.strYoutube" :href="meal.strYoutube">
        Voir sur Youtube
      </YoutubeButton>
      <a v-if="meal.strSource" :href="meal.strSource" target="_blank" rel="noopener noreferrer">
        Voir la source originale
      </a>
    </div>
  </div>
  <div v-else>Chargement…</div>
</template>

<style scoped>
.meal_information {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.meal_ingredients {
  gap: 10px;
}
</style>
