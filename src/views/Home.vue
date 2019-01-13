<template>
  <div class="home">
    <ul class="todo-list">
      <li class="todo-item" v-for="(todo, i) in todos" :key="i">
        <input type="text" v-model="todos[`${i}`]" class="todo-input-desc">
        <span class="todo-del" @click="delTodo(i)">x</span>
      </li>
      <li class="todo-item">
        <input
          type="text"
          class="todo-input"
          name="newtodo"
          v-model="newTodo"
          placeholder="New Todo"
        >
        <button class="todo-btn" @click="addTodo">+</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      todos: ["Eat", "Sleep", "Code", "Repeat"],
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.length) {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
    },
    delTodo(index) {
      this.todos = this.todos.filter((todo, i) => {
        return i != index;
      });
    }
  }
};
</script>
