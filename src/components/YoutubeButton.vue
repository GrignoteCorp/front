<script setup>
defineProps({
  href: String
})
</script>
<template>
  <a :href="href" class="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors">
    <slot></slot>
  </a>
</template>

