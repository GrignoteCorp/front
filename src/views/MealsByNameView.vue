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
  <div>Search by name</div>
  <input
    type="text"
    id="search"
    class="input-search"
    placeholder="Search for Meals"
    v-model="keyword"
    @change="searchMeals"
  />
  <Meals :meals="meals" />
</template>

<style>
.search {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 10px;
}

.input-search {
  height: 3rem;
  width: 40rem;
  padding: 0 10px;
  border: 1px solid var(--color-dark-lighter);
  border-radius: 5px;
  box-shadow: var(--color-shadow) 0px 8px 24px;
}

.input-search:hover,
.input-search:focus {
  border-color: var(--color-dark-darker);
  box-shadow: var(--color-shadow-darker) 0px 8px 24px;
  outline: none;
}

.button-search {
  display: inline-block;
  box-sizing: border-box;
  height: 3rem;
  width: 10rem;
  padding: 10px 16px;
  color: var(--color-light);
  background-color: var(--color-primary);
  border-radius: 8px;
  border-style: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
}

.button-search:hover,
.button-search:focus {
  background-color: var(--color-primary-lighter);
}
</style>
