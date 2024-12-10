<script setup>
import { computed, ref } from 'vue'
import { useRecipeStore } from '@/stores/recipeStore'

const store = useRecipeStore()
const recipes = computed(() => store.$state.allRecipes)
const recipe = {
  title: '',
  meal_type: '',
  portion: 2,
  portionType: '',
  cookingTimeHour: 0,
  cookingTimeMinute: 0,
  cooking_type: '',
  difficulty: 1,
  cost: 1
}

const mealType = ref(['Entrée', 'Plat', 'Dessert', 'Apéritif', 'Boisson', 'Patisserie'])
const cookingType = ref(['Four', 'Plaques', 'Sans cuisson', 'Autres'])
</script>

<template>
  <h1>Enregistrer une recette</h1>
  <div class="layout2">
    <form action="" method="post" @submit.prevent="store.createNewRecipe(recipe)">
      <div>
        <label for="title" class="input_title">Je choisis un titre* :</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          placeholder="Saisissez un titre"
          value="Test"
          v-model="recipe.title"
        />
      </div>

      <div class="input_range">
        <label for="title" class="input_title">Type de plat* :</label>
        <select v-model="recipe.meal_type">
          <option v-for="type in mealType" :value="type" :key="type" required>
            {{ type }}
          </option>
        </select>
      </div>

      <div class="servings">
        <p class="servings_title input_title">Nombre de portions* :</p>
        <div class="input_wrapper">
          <div>
            <label for="type">XX : </label>
            <input
              type="number"
              min="0"
              name="servings_nb"
              placeholder="XX"
              v-model="recipe.portion"
              required
            />
          </div>
          <div>
            <label for="type">XX : </label>
            <input
              type="text"
              name="servings_tipe"
              placeholder="Personnes, Pièce, Litre"
              v-model="recipe.portionType"
              required
            />
          </div>
        </div>
        <p class="servings_subtitle">Exemple : pour 4 personnes, pour 10 pièces, pour 1 litre...</p>
      </div>

      <div class="preparation_time">
        <p class="input_title">Temps de préparation* :</p>
        <div class="input_wrapper">
          <div>
            <label for="preparation_time_hour">XX : </label>
            <input
              type="number"
              min="0"
              max="24"
              name="preparation_time_hour"
              placeholder="Heures"
              v-model="recipe.cookingTimeHour"
            />
          </div>

          <div>
            <label for="preparation_time_minute">XX : </label>
            <input
              type="number"
              min="0"
              max="60"
              name="preparation_time_minute"
              placeholder="Minutes"
              v-model="recipe.cookingTimeMinute"
            />
          </div>
        </div>
      </div>

      <div class="input_range">
        <label for="title" class="input_title">Type de cuisson* :</label>
        <select v-model="recipe.cooking_type">
          <option v-for="type in cookingType" :value="type" :key="type" required>
            {{ type }}
          </option>
        </select>
      </div>
      <div class="input_range">
        <label for="title" class="input_title">Difficulté* :</label>
        <select v-model="recipe.difficulty">
          <option
            v-for="difficultyLevel in [1, 2, 3, 4, 5]"
            :value="difficultyLevel"
            :key="difficultyLevel"
            required
          >
            {{ difficultyLevel }}
          </option>
        </select>
      </div>

      <div class="input_range">
        <label for="title" class="input_title">Coût* :</label>
        <select v-model="recipe.cost">
          <option v-for="costLevel in [1, 2, 3, 4, 5]" :value="costLevel" :key="costLevel" required>
            {{ costLevel }}
          </option>
        </select>
      </div>

      <div>
        <input type="submit" value="Créer la nouvelle recette" />
      </div>
    </form>
  </div>

  <button type="button" @click="store.searchAllRecipes()">Chercher toutes les recettes</button>

  <div class="mealsListDisplay">
    <div v-for="recipe in recipes" :key="recipe.id">
      {{ recipe.title }}
    </div>
  </div>
</template>

<style>
.input_wrapper {
  display: flex;
  gap: 10px;
}

.layout2 {
  margin: auto;
  background-color: var(--color-light);
  padding: 1rem 2rem;
}

.input_range {
  display: flex;
  gap: 10px;
}

/* .grid-3 {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 10px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
} */

/* .checkbox {
  border: 1px solid black;
  width: 30%;
  min-width: 300px;
  padding: 15px;
}

.checkbox-wrapper {
} */
</style>
