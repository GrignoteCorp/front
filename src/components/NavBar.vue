<script setup></script>
<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <RouterLink
      class="inline-flex items-center h-full px-5 text-orange-500 font-bold"
      :to="{ name: 'home' }"
    >
      <img alt="Logo de Grignotte" src="../assets/cookie.png" id="grignotte_title_img" />
      <p class="text-4xl m-4">Grignotte</p>
    </RouterLink>
    <nav class="flex items-center gap-1">
      <RouterLink
        :to="{ name: 'searchMeal' }"
        class="inline-flex items-center px-2 transition-colors hover:bg-orange-500 hover:text-white text-2xl rounded-lg h-[80%]"
        >Chercher une recette</RouterLink
      >
      <RouterLink
        :to="{ name: 'RecetteForm' }"
        class="inline-flex items-center px-2 transition-colors hover:bg-orange-500 hover:text-white text-2xl rounded-lg h-[80%]"
        >Ajouter une recette</RouterLink
      >
    </nav>
  </header>
</template>

<style scoped>
#grignotte_title_img {
  width: 3rem;
  height: 3rem;
}
</style>
