import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/views/HomePage.vue";
import About from "@/views/About.vue";
Vue.use(Router);

export default new Router({
  mode: history,
  routes: [
    { path: "/", name: "homepage", component: HomePage },
    { path: "/about", name: "about", component: About },
  ],
});
