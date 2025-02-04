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
  <h1 class="text-4xl font-bold mt-5 mb-2 text-orange-500">{{ meal.strMeal }}</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 p-8">
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
    <div class="mx-5">
      <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
        <p><strong class="font-bold">Catégorie :</strong> {{ meal.strCategory }}</p>
        <p><strong class="font-bold">Area :</strong> {{ meal.strArea }}</p>
        <p><strong class="font-bold">Tags :</strong> {{ meal.strTags }}</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Ingredients :</h2>
          <ul>
            <template v-for="(el, index) of new Array(20)" :key="index">
              <li v-if="meal[`strIngredient${index + 1}`]">
                {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>

        <div class="separator"></div>

        <div>
          <h2 class="text-2xl font-semibold mb-2">Mesures :</h2>
          <ul>
            <template v-for="(el, index) of new Array(20)" :key="index">
              <li v-if="meal[`strMeasure${index + 1}`]">
                {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="px-8">
    <div class="my-3">{{ meal.strInstructions }}</div>

    <div class="flex justify-center items-center">
      <YoutubeButton :href="meal.strYoutube">View on Youtube</YoutubeButton>
      <a
        :href="meal.strSource"
        class="m-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
        >View original source</a
      >
    </div>
  </div>
</template>

<style>
.separator {
  border-left: 2px solid darkgray;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
