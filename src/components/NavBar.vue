<script setup></script>
<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Grignotte</RouterLink>
      <!-- <RouterLink to="/authentification">Connection</RouterLink> -->
      <div class="navigation_links">
        <RouterLink :to="{ name: 'byName' }">Search Meals </RouterLink>
        <RouterLink :to="{ name: 'byLetter' }">Meals by letter </RouterLink>
        <RouterLink :to="{ name: 'ingredients' }">Meals by ingredients </RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.navigation_links {
  display: flex;
  justify-content: space-between;
  gap: 3rem;
}

a {
  color: inherit;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 10px;
}

a:hover,
a:active {
  color: var(--color-primary);
  background-color: white;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
}
</style>
