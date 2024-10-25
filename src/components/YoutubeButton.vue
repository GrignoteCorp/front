<script setup>
// const props = defineProps({
//   href: String,

// })
</script>
<template>
  <a :href="href" class="button">
    <slot></slot>
  </a>
</template>

<style>
.button {
  width: 10px;
}
</style>
