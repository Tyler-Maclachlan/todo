<template>
  <div class="home">
    <div class="row">
      <div class="col">
        <ul class="friend-list">
          <li
            class="friend-item"
            v-for="friend in friends"
            :key="friend.id"
            @click="selectFriend(friend.id)"
          >{{friend.name}}</li>
        </ul>
      </div>
      <div class="col">
        <ul class="todo-list">
          <li class="todo-item" v-for="(todo, index) in currentFriend.todos" :key="'todo-' + index">
            <span class="todo-desc">{{todo}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "friends",
  data() {
    return {
      friends: [
        { id: 1, name: "John" },
        { id: 2, name: "Steve" },
        { id: 3, name: "Emily" },
        { id: 4, name: "Blake" }
      ],
      friendstodos: [
        { userid: 1, todos: ["Eat", "Sleep", "Code", "Repeat"] },
        { userid: 2, todos: ["Eat", "Sleep", "Code2", "Repeat"] },
        { userid: 3, todos: ["Eat", "Sleep", "Code3", "Repeat"] },
        { userid: 4, todos: ["Eat", "Sleep", "Code4", "Repeat"] }
      ],
      currentFriend: { id: 1, todos: ["Eat", "Sleep", "Code", "Repeat"] }
    };
  },
  methods: {
    selectFriend(id) {
      this.currentFriend.id = id;
      this.currentFriend.todos = this.friendstodos.slice().filter(todo => {
        return todo.userid === id;
      })[0].todos;
    }
  }
};
</script>

<style>
</style>
