<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore'

const store = useUserStore()
const users = computed(() => store.$state.allUsers)
const user = { name: '', email: '' }

function searchUsers() {
  store.searchAllUsers()
}

function addUser() {
  store.postUser(user)
}
</script>

<template>
  <h1>Enregistrer une recette</h1>
  <button type="button" @click="searchUsers">Chercher tous les users</button>

  <form action="" method="post" @submit.prevent="addUser()">
    <div>
      <label for="name">name :</label>
      <input type="text" name="name" id="name" v-model="user.name" required />
    </div>
    <div>
      <label for="email">email : </label>
      <input type="email" name="email" id="email" v-model="user.email" required />
    </div>
    <div>
      <input type="submit" value="submit" />
    </div>
  </form>
</template>

<style></style>
