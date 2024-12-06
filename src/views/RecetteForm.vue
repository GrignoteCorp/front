<script setup>
// import { computed } from 'vue'
// import { useUserStore } from '@/stores/userStore'

// const store = useUserStore()
// const users = computed(() => store.$state.allUsers)
// const user = { name: '', email: '' }

// function searchUsers() {
//   store.searchAllUsers()
// }

// function addUser() {
//   // console.log(user)
//   store.postUser(user)
// }
</script>

<template>
  <h1>Enregistrer une recette</h1>
  <!--<button type="button" @click="searchUsers">Chercher tous les users</button>

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
  </form> -->

  <div class="layout2">
    <form action="" method="post">
      <div>
        <label for="name">name :</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label for="email">email : </label>
        <input type="email" name="email" id="email" required />
      </div>

      <div class="grid-3">
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon">
                <i></i>
              </span>
              <span class="checkbox-label">Entrée</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon">
                <i></i>
              </span>
              <span class="checkbox-label">Plat</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon">
                <i></i>
              </span>
              <span class="checkbox-label">Desert</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon">
                <i></i>
              </span>
              <span class="checkbox-label">Apéritif</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon">
                <i></i>
              </span>
              <span class="checkbox-label">Boisson</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon">
                <i></i>
              </span>
              <span class="checkbox-label">Patisserie</span>
            </span>
          </label>
        </div>
      </div>
      <div>
        <input type="submit" value="Subscribe!" />
      </div>
    </form>
  </div>
</template>

<style>
/* .layout2 {
  width: 80%;
  margin: auto;
  background-color: var(--color-light);
  height: 100rem;
  padding: 1rem 2rem;
}

.grid-3 {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 10px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
}

.checkbox {
  border: 1px solid black;
  width: 30%;
  min-width: 300px;
  padding: 15px;
}

.checkbox-wrapper {
} */
</style>
