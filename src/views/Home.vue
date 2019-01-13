<template>
  <div class="home">
    <ul class="todo-list">
      <li class="todo-item">
        <span class="todo-desc">Eat</span>
        <span class="todo-del">x</span>
      </li>
      <li class="todo-item">
        <span class="todo-desc">Sleep</span>
        <span class="todo-del">x</span>
      </li>
      <li class="todo-item">
        <span class="todo-desc">Code</span>
        <span class="todo-del">x</span>
      </li>
      <li class="todo-item">
        <span class="todo-desc">Repeat</span>
        <span class="todo-del">x</span>
      </li>
      <li class="todo-item">
        <input type="text" class="todo-input" name="newtodo" placeholder="New Todo">
        <button class="todo-btn">+</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
