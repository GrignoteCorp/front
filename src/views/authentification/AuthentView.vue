<script setup>
import { ref } from 'vue'
import SignInView from './SignInView.vue'
import SignUpView from './SignUpView.vue'

let signup = ref(true)
</script>

<template>
  <main>
    <div>
      <button type="button" @click="signup = true">Sign up !</button>
      <button type="button" @click="signup = false">Sign in !</button>
    </div>
    <SignInView v-if="!signup" />
    <SignUpView v-else-if="signup" />
  </main>
</template>

<style></style>
