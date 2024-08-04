<script setup>
import CollectionsView from './CollectionsView.vue'
</script>

<template>
  <main>
    <form action="/TODO-traitement-form" method="post" class="search">
      <ul>
        <li>
          <input type="text" id="search" class="input-search" />
        </li>
      </ul>
      <button type="submit" class="button-search">Connect</button>
    </form>
    <CollectionsView />
  </main>
</template>

<style>
.search {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 10px;
}

.input-search {
  height: 3rem;
  width: 40rem;
  border: 1px solid var(--color-dark-lighter);
  border-radius: 5px;
  box-shadow: var(--color-shadow) 0px 8px 24px;
}

.input-search:hover,
.input-search:focus {
  border-color: var(--color-dark-darker);
  box-shadow: var(--color-shadow-darker) 0px 8px 24px;
  outline: none;
}

.button-search {
  display: inline-block;
  box-sizing: border-box;
  height: 3rem;
  width: 10rem;
  padding: 10px 16px;
  color: var(--color-light);
  background-color: var(--color-primary);
  border-radius: 8px;
  border-style: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
}

.button-search:hover,
.button-search:focus {
  background-color: var(--color-primary-lighter);
}
</style>
