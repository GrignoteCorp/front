<script setup></script>

<template>
  <main>
    <h2>Sign in</h2>
    <form action="/TODO-traitement-authent" method="post" class="signForm">
      <ul>
        <li>
          <label for="mail">Email&nbsp;:</label>
          <input type="email" id="mail" name="user_email" />
        </li>
        <li>
          <label for="password">Password&nbsp;:</label>
          <input type="password" id="password" name="user_password" />
        </li>
      </ul>
      <div class="button">
        <button type="submit">Connect</button>
      </div>
    </form>
  </main>
</template>

<style>
/* form {
  margin: 0 auto;
  width: 400px;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li + li {
  margin-top: 1em;
}

label {
  display: inline-block;
  width: 90px;
  text-align: right;
  padding-right: 10px;
}

input {
  font: 1em sans-serif;
  width: 300px;
  box-sizing: border-box;
  border: 1px solid #999;
}

input:focus {
  border-color: #000;
}

.button {
  padding-left: 100px;
  padding-top: 10px;
}

button {
  margin-left: 0.5em;
} */
</style>
