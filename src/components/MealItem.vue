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
  <div class="meal">
    <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="meal_image" />
      <div class="meal_details">
        <h1 class="meal_title">{{ meal.strMeal }}</h1>
        <div class="meal_links">
          <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style>
.meal {
  border-radius: 20px;
  background-color: white;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
}

.meal:hover img,
.meal:focus img {
  transform: scale(1.05);
  transition: 0.4s ease-out;
}

.meal_image {
  width: 100%;
  border-radius: 20px 20px 0 0;
  /* height: 100%; */
  object-fit: cover;
}

.meal_details {
  padding: 10px;
}

.meal_title {
}

.meal_links {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
}

.meal_links > a {
  width: auto;
  height: 40px;
  color: var(--color-light);
  text-align: center;
  padding: 0 5px;
  background-color: var(--color-primary);
  border-radius: 6px;
  cursor: pointer;
}
</style>
