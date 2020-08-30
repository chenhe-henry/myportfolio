import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/views/HomePage.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "homepage", component: HomePage },
    { path: "/about", name: "about", component: About },
    { path: "/projects", name: "projects", component: Projects },
    { path: "*", redirect: "/" },
  ],
});
