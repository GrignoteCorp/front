<template>
  <main>
    <div class="auth_tabs">
      <RouterLink :to="{ name: 'signUp' }" class="auth_tab">Créer un compte</RouterLink>
      <RouterLink :to="{ name: 'signIn' }" class="auth_tab">Se connecter</RouterLink>
    </div>
    <RouterView />
  </main>
</template>

<script setup></script>

<style scoped>
.auth_tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.auth_tab {
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid transparent;
}

.auth_tab.router-link-active {
  font-weight: bold;
  border-bottom-color: currentColor;
}
</style>
