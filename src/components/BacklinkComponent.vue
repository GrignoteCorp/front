<script setup>
// function goBack() {
//   hasHistory() ? history.back() : $router.push('/')
//   console.log('retour')
// }
</script>

<template>
  <button @click="$router.back" class="flex items-center py-2 pr-4 icon-button cursor-pointer">
    <img src="../assets/arrow.png" class="rotate-180 mr-2 size-5 text-gray-400" />
    <p class="text-gray-500">Retour vers la page précédente</p>
  </button>
</template>
