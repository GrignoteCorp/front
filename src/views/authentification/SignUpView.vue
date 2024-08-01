<script setup></script>

<template>
  <main>
    <h2>Sign up</h2>
    <form action="/TODO-traitement-page" method="post">
      <ul>
        <li>
          <label for="email">Email&nbsp;:</label>
          <input type="email" id="email" name="user_email" />
        </li>
        <li>
          <label for="name">Name&nbsp;:</label>
          <input type="name" id="name" name="user_name" />
        </li>
        <li>
          <label for="password">Password&nbsp;:</label>
          <input type="password" id="password" name="user_password" />
        </li>
        <li>
          <label for="password_verification">Write your password again&nbsp;:</label>
          <input type="password" id="password_verification" name="user_password" />
        </li>
      </ul>
      <div class="button">
        <button type="submit">Connect</button>
      </div>
    </form>
  </main>
</template>

<style>
form {
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
}
</style>
