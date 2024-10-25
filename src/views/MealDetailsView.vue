<script setup>
import YoutubeButton from '@/components/YoutubeButton.vue'
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import store from '@/stores'

const route = useRoute()

const meal = computed(() => store.state.mealDetails)

onMounted(() => {
  store.dispatch('searchMealDetails', route.params.id)
})
</script>

<template>
  <div class="meal_details">
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
        <h2>ingredients :</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="index">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="meal_mesures_list">
        <h2>Mesures :</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="index">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="meal_links">
      <YoutubeButton :href="meal.strYoutube">View on Youtube</YoutubeButton>
      <a :href="meal.strSource">View original source</a>
    </div>
  </div>
</template>

<style>
/* .meal_details {
} */

.meal_information {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.meal_ingredients {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
</style>
