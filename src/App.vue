<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">My Todos</router-link>
      <router-link to="/friends">Friends</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body,
html,
#app,
.home {
  margin: 0;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
#nav {
  display: flex;
  width: 100%;
  padding: 30px 0;
  background-color: #252525;
  justify-content: space-around;
}

#nav a {
  font-family: "lato";
  font-size: 18px;
  color: #fff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #6666ee;
}

.home {
  height: calc(100% - 82px);
  text-align: left;
}

.todo-list,
.friend-list {
  list-style-type: none;
  padding: 0;
  margin: 10px auto 0 auto;
  width: 60%;
}

.friend-list {
  margin: 0;
  height: 100%;
  width: 50%;
  background-color: #252525;
}

.todo-item,
.friend-item {
  padding: 20px;
  margin: 2px 0;
  display: flex;
  justify-content: space-between;
  background-color: #252525;
  color: #fff;
}

.friend-item {
  cursor: pointer;
  border-bottom: 1px solid #fff;
}

.todo-del {
  font-size: 24px;
  color: red;
  cursor: pointer;
}

.todo-input,
.todo-input-desc {
  width: 80%;
  height: 100%;
  padding: 5px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: none;
}

.todo-input-desc {
  background: transparent;
  font-size: 18px;
  color: white;
  cursor: text;
  border-bottom: 1px solid white;
}

.todo-btn {
  width: 20%;
  height: 100%;
  padding: 5px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
}

.row {
  display: flex;
  justify-content: center;
  height: 100%;
}

.col {
  width: 50%;
  height: 100%;
}
</style>
