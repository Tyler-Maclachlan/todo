import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Friends from "./views/Friends.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/friends",
      name: "friends",
      component: Friends
    }
  ]
});
