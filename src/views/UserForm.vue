<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore'

const store = useUserStore()
const users = computed(() => store.$state.allUsers)
const user = { name: '', email: '' }
</script>

<template>
  <h1>Enregistrer un utilisateur</h1>
  <button type="button" @click="store.searchAllUsers()">Chercher tous les users</button>

  <form action="" method="post" @submit.prevent="store.postUser(user)">
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

  <div class="usersListDisplay">
    <div v-for="user in users" :key="user.id">{{ user.name }} {{ user.email }}</div>
  </div>
</template>
