<script setup>
defineProps({
  href: String
})
</script>
<template>
  <a :href="href" class="button">
    <slot></slot>
  </a>
</template>

<style scoped>
.button {
  width: fit-content;
}
</style>
